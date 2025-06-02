import { readFileSync } from 'node:fs';
import path from 'path';
import type { Plugin } from 'vite';

export default function unusedAssetsPlugin(): Plugin {
  // Store state in closure variables instead of on the plugin object
  let activeQuizzes: string[] = [];
  const usedImages: Set<string> = new Set<string>();

  return {
    name: 'unused-assets-plugin',

    // This hook runs at the beginning of the build
    buildStart() {
      console.log('Analyzing active quizzes and their assets...');
      this.addWatchFile(path.resolve(__dirname, 'src/constants/index.ts'));
    },

    // This hook transforms each module
    transform(code: string, id: string): string | null {
      const normalizedId = id.replace(/\\/g, '/');
      // console.log('Transforming file:', normalizedId);

      // Detect active quiz imports from constants/index.ts
      if (normalizedId.includes('constants/index.ts')) {
        console.log('\nProcessing quiz imports in constants/index.ts');

        activeQuizzes = code
          .split('\n')
          .filter(line => /^import\s+\w+\s+from\s+['"]\.\.\/data\/quizzes\/[\w-]+['"];/.test(line))
          .map(line => line.match(/from\s+['"](.+)['"]/)?.[1] || '')
          .filter(Boolean);

        console.log(`Found ${activeQuizzes.length} active quiz imports:`, activeQuizzes);
      }

      // If this file is an active quiz, process it for image references
      // console.log({ id: `${id}`, activeQuizzes, type: typeof activeQuizzes });
      for (const quizImport of activeQuizzes) {
        const cleanedImport = quizImport.replace(/^(\.\.\/)+/, '');
        const fullQuizPath = path.resolve('src', cleanedImport + '.ts').replace(/\\/g, '/');
        if (normalizedId === fullQuizPath) {
          console.log(`\nProcessing quiz file: ${normalizedId}`);

          if (normalizedId.includes('securityx-quiz.ts')) {
            // Match only the actual used format in template strings: ${imgPath(1)}
            const dynamicImgRegex = /imgPath\((['"]?[^)]+['"]?)\)/g;
            const matches = [...code.matchAll(dynamicImgRegex)];

            matches.forEach(match => {
              let imageNum = match[1].replace(/['"]/g, '');

              // Handle both number and string formats
              if (!isNaN(Number(imageNum))) {
                // If it's a number, pad it to 3 digits
                imageNum = imageNum.toString().padStart(3, '0');
              }

              // Detect actual usage (from template strings like: ![...](imgPath(...))
              // Assume that default is .webp (first used format)
              const webpRegex = new RegExp(`\\\${imgPath\\(${match[1]}\\)}.*\\.webp`);
              const pngRegex = new RegExp(`\\\${imgPath\\(${match[1]}\\)}.*\\.png`);

              // Default to webp; add only what's used
              if (webpRegex.test(code)) {
                usedImages.add(`CAS-005_${imageNum}.webp`);
              } else if (pngRegex.test(code)) {
                usedImages.add(`CAS-005_${imageNum}.png`);
              } else {
                // fallback to webp if unsure
                usedImages.add(`CAS-005_${imageNum}.webp`);
              }
            });
          } else {
            // For other quiz files, look for any image references
            // This is a generic approach that will work for future quizzes with different image naming patterns

            // Look for markdown image syntax: ![alt](path)
            const markdownImgRegex = /!\[[^\]]*]\(([^)]+)\)/g;
            const markdownMatches = [...code.matchAll(markdownImgRegex)];

            markdownMatches.forEach(match => {
              const imgPath = match[1];
              // If it's a direct image reference
              if (imgPath.match(/\.(png|jpg|jpeg|svg|webp)$/i)) {
                usedImages.add(path.basename(imgPath));
              }
            });

            // Look for any other potential image references
            // This could be expanded based on how future quizzes reference images
            const imgRefRegex = /['"]([^'"]+\.(png|jpg|jpeg|svg|webp))['"]|['"](\.\.\/images\/[^'"]+)['"]/g;
            const imgRefMatches = [...code.matchAll(imgRefRegex)];

            imgRefMatches.forEach(match => {
              const imgPath = match[1] || match[3];
              if (imgPath) {
                usedImages.add(path.basename(imgPath));
              }
            });
          }
        }
      }

      // Process the assets.ts file to filter images and optimize the asset glob import
      if (normalizedId.includes('utils/assets.ts') && usedImages.size > 0) {
        console.log('Processing assets.ts to filter images');
        console.log(`Found ${usedImages.size} quiz images that are used:`, Array.from(usedImages));
        const imagePattern = Array.from(usedImages).join(',');

        // Modify the assets.ts code to only include used images
        const searchValue = `import.meta.glob("../images/*.{png,jpg,jpeg,svg,webp}", { eager: true })`;
        const replaceValue = `import.meta.glob('../images/{${imagePattern}}', { eager: true })`;
        return code.replace(searchValue, replaceValue);
      }

      // Return null to use the original code
      return null;
    },

    load(id) {
      const normalizedId = id.replace(/\\/g, '/');
      if (normalizedId.includes('utils/assets.ts') && usedImages.size > 0) {
        const code = readFileSync(id, 'utf-8');
        const imagePattern = Array.from(usedImages).join(',');
        const searchValue = `import.meta.glob("../images/*.{png,jpg,jpeg,svg,webp}", { eager: true })`;
        const replaceValue = `import.meta.glob('../images/{${imagePattern}}', { eager: true })`;
        return code.replace(searchValue, replaceValue);
      }
    }
  };
}

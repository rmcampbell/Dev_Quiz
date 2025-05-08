// assets.ts
const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const imageMap: Record<string, string> = {};

for (const path in images) {
  imageMap[path] = (images[path] as { default: string }).default;
}

export default imageMap;

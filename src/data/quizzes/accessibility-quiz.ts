const accessibilityQuiz = {
  category: 'Accessibility',
  questions: [
    {
      question: 'Why is using semantic HTML important for accessibility?',
      answer: 'It provides meaning and structure to web content, aiding screen readers and other assistive technologies.',
      distractors: [
        'It makes the website load faster.',
        'It helps with SEO optimization.',
        'It reduces the need for CSS.'
      ],
      explanation: 'Semantic HTML uses tags that clearly describe their purpose, which improves the accessibility of web content for users relying on assistive technologies.',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'What does ASAP mean in the context of accessibility?',
      answer: 'As Semantic As Possible',
      distractors: [
        'As Soon As Possible',
        'Automated System Application Protocol',
        'Advanced Syntax Application Programming'
      ],
      explanation: `In the context of web development, ASAP stands for 'As Semantic As Possible', emphasizing the importance of semantic markup for accessibility and SEO.`,
      link: 'https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/'
    },
    {
      question: `How does 'focus management' contribute to web accessibility?`,
      answer: 'It ensures keyboard and screen reader users can navigate content in a logical order',
      distractors: [
        'It designs web forms',
        'It provides navigation menus',
        'It adds pop-up ads'
      ],
      explanation: 'Focus management is essential for a smooth user experience.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: 'What is the primary goal of web accessibility?',
      answer: 'To make websites usable by as many people as possible, regardless of disabilities',
      distractors: [
        'To increase web traffic',
        'To enhance website appearance',
        'To block access for certain users'
      ],
      explanation: 'Web accessibility is the practice of ensuring that websites can be used effectively by individuals with disabilities, aiming to provide an inclusive and equitable online experience.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: 'Why is it important to provide textual alternatives for non-text content in web accessibility?',
      answer: 'To ensure users with disabilities can access and understand content',
      distractors: [
        'To improve search engine rankings',
        'To speed up website loading times',
        'To add visual effects'
      ],
      explanation: 'Textual alternatives are crucial for accessibility.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: `Why is 'keyboard navigation' important in web accessibility?`,
      answer: 'It helps users navigate a website using keyboard keys',
      distractors: [
        'It enhances page design',
        'It increases loading speed',
        'It adds background music'
      ],
      explanation: 'Keyboard navigation allows users with mobility issues to browse a website efficiently.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: `What does 'text alternatives' for non-text content provide in web accessibility?`,
      answer: 'Ensures users with disabilities can access and understand content',
      distractors: [
        'Improves search engine rankings',
        'Speeds up website loading times',
        'Adds visual effects'
      ],
      explanation: 'Text alternatives are essential for accessibility.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: 'What are the landmarks in web accessibility?',
      answer: 'Structure',
      distractors: ['Images', 'Audio', 'Video'],
      explanation: 'Landmarks provide a structural outline for web content, making it more accessible.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: 'How does layout structure contribute to web accessibility?',
      answer: 'Organization',
      distractors: ['Fonts', 'Colors', 'Multimedia'],
      explanation: 'A clear layout structure enhances the user experience for all, including those with disabilities.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid'
    },
    {
      question: 'What is the minimum font size recommended for accessibility?',
      answer: '16px',
      distractors: ['10px', '14px', '18px'],
      explanation: 'A font size of 16px or 12pt is considered a good practice for accessibility.',
      link: 'https://www.freecodecamp.org/news/how-to-change-text-size-in-html'
    },
    {
      question: 'How does semantic HTML contribute to web accessibility?',
      answer: 'Clarity',
      distractors: ['Interactivity', 'Animation', 'Multimedia'],
      explanation: 'Semantic HTML tags provide clear and meaningful structure to web content.',
      link: 'https://webaim.org/techniques/semanticstructure'
    },
    {
      question: 'What is the role of a label in accessibility?',
      answer: 'Identification',
      distractors: ['Navigation', 'Animation', 'Color'],
      explanation: 'Labels help users identify form fields, buttons, and other interactive elements.',
      link: 'https://www.freecodecamp.org/news/html-label-label-tag-example'
    },
    {
      question: 'How do buttons enhance web accessibility?',
      answer: 'Interaction',
      distractors: ['Navigation', 'Layout', 'Multimedia'],
      explanation: 'Buttons provide interactive elements that are essential for accessibility.',
      link: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website'
    },
    {
      question: 'Which of the following is NOT one of the default landmark roles?',
      answer: 'nav',
      distractors: ['complementary', 'contentinfo', 'form'],
      explanation: `The <nav> element is a semantic HTML element with a corresponding default landmark role of role='navigation'.`,
      link: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html'
    },
    {
      question: 'What do you need to consider when using more than one <main> landmark in your code?',
      answer: 'That each <main> landmark has a unique label.',
      distractors: [
        'You do not have to consider something specific.',
        'It is not allowed to have two <main> landmarks.',
        'That each <main> landmark has a unique id.'
      ],
      explanation: `The <main> landmark contains the main content of the page. Even though it's rare to have more then one <main> landmark, it is possible. It is important for screen reader users to be able to differ between those landmarks. Therefore, a unique label should be added to each <main> landmark.`,
      link: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html'
    },
    {
      question: 'Which of the following HTML elements uses the default landmark complementary?',
      answer: 'aside',
      distractors: ['contentinfo', 'section', 'div'],
      explanation: 'The semantic <aside> element uses the complementary landmark which is a supporting section of the document created to complement the main content.',
      link: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/complementary.html'
    },
    {
      question: 'When did the World Wide Web Consortium first draft the set of standards for developing accessible websites?',
      answer: '1999',
      distractors: ['2001', '1990', '1989'],
      explanation: 'The World Wide Web Consortium first drafted standards for developing accessible websites back in 1999.',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'Which of the following laws has brought accessibility issues to the forefront in recent years?',
      answer: 'The Americans with Disabilities Act',
      distractors: [
        'The Internet Freedom Act',
        'The Web Accessibility Act',
        'The Digital Inclusion Law'
      ],
      explanation: 'The Americans with Disabilities Act (ADA) has brought web accessibility to the forefront by requiring public spaces and commercial facilities to provide equal access to individuals with disabilities, which now includes web-based activities due to legal rulings.',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'Which of the following is NOT a benefit of web accessibility?',
      answer: 'Limited Audience Reach',
      distractors: [
        'Higher Search Engine Rankings',
        'Inclusivity',
        'Improved User Experience'
      ],
      explanation: 'Making websites accessible broadens the audience reach rather than limiting it, ensuring that everyone, regardless of their abilities, can access the content online',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'When creating charts, what should be added so that color is not the only identifier to convey the meaning of the information?',
      answer: 'Patterns',
      distractors: [
        'Hint Buttons',
        'Gradients',
        'There is no need to add an additional identifier, color is enough.'
      ],
      explanation: 'Colorblind and low vision users have difficulties to perceive the color differences. In addition, when the graph appears in greyscale (e.g. user settings, print), it is impossible to every user to see differences.',
      link: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
    },
    {
      question: 'Why is it better for accessibility reasons to use relative units(em and rem) instead of absolute units(px)?',
      answer: `With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.`,
      distractors: [
        `Absolute units like 'px' provide better control over the design's precise layout.`,
        `Relative units like 'em' and 'rem' are only useful for text size, not layout.`,
        'There is no significant difference between relative and absolute units in web design.'
      ],
      explanation: `When you use px, the element's size remains constant regardless of the size of the screen. With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.`,
      link: 'https://www.freecodecamp.org/news/why-use-rem-to-set-font-size-in-css#what-are-relative-units-in-css'
    },
    {
      question: `What role does the 'alt' attribute play when adding alternative text to images on a webpage?`,
      answer: `The 'alt' attribute describes the content of the image to users who cannot see it.`,
      distractors: [
        `The 'alt' attribute enhances image aesthetics.`,
        `The 'alt' attribute speeds up image loading.`,
        `The 'alt' attribute provides translations for the image content.`
      ],
      explanation: `It's a tool to check accessibility properties of web elements.`,
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: `What is the purpose of the 'Chrome Accessibility Developer Tools' extension for Google Chrome?`,
      answer: `It's a tool to check accessibility properties of web elements.`,
      distractors: [
        `It's a tool to only fix color contrast errors`,
        `It's a tool to only fix font size errors`,
        `It's a tool to audit only keyboard accessibility errors`
      ],
      explanation: 'The extension aids in inspecting and ensuring web accessibility by providing relevant information in the Developer tools.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'As of 2023, which tool or extension allows you to find accessibility defects on your web page in both Chrome and Firefox?',
      answer: 'WAVE',
      distractors: ['Color Oracle', 'aXe', 'ChromeVox'],
      explanation: 'WAVE is an extension available for both Chrome and Firefox that helps identify accessibility issues on web pages.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'Why is it important to add labels to form inputs like search forms?',
      answer: 'Labels indicate the purpose of form inputs and make them accessible to screen reader users.',
      distractors: [
        'Labels improve website aesthetics.',
        'Labels increase website loading speed.',
        'Labels provide translations for form inputs.'
      ],
      explanation: 'Labels associated with form inputs, such as search forms, describe the purpose of the input, making it accessible to screen reader users.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'As of 2023, which screen reader is a Free & Open-source downloadable software for Windows OS?',
      answer: 'NVDA (Non Visual Desktop Access)',
      distractors: ['JAWS (Job Access With Speech)', 'ChromeVox', 'a11yproject'],
      explanation: 'NVDA is a free screen reader for Windows, making it accessible to a wide audience.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: `What does the 'a11yproject' provide for web development, and what can you find on their site?`,
      answer: 'It provides practical guides, examples, how-tos, myths, tips, and recommended accessibility tools.',
      distractors: [
        'It provides a platform for game development',
        'It offers free stock images',
        'It is a social media network'
      ],
      explanation: `The 'a11yproject' offers practical guides, examples, how-tos, myths, tips, and recommended accessibility tools for implementing accessible features and components during web development. It is a community-driven project that can be contributed to on Github. The 'a11yproject' is a valuable resource for web developers looking to enhance the accessibility of their projects.`,
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'Which tool allows you to check foreground and background color values for AA and AAA color contrast ratios for small and large text?',
      answer: 'WebAIM Color Contrast Checker',
      distractors: [
        'Accessible Color Palette Builder',
        'Randoma11y Color Generator',
        'Check My Colours'
      ],
      explanation: 'The WebAIM Color Contrast Checker is a tool to verify color contrast which is a crucial aspect of web accessibility.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'Why is web accessibility important for SEO (Search Engine Optimization)?',
      answer: 'It helps search engines understand and index website content better.',
      distractors: [
        'It decreases website load times.',
        'It automatically improves website design.',
        'It increases advertising revenue.'
      ],
      explanation: 'Accessibility practices that make content understandable to screen readers also benefit search engines in understanding and indexing website content.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'Which accessibility issue is associated with buttons?',
      answer: 'lack of button text for screen reader users',
      distractors: [
        'lack of background color',
        'lack of font color',
        'lack of border styles'
      ],
      explanation: 'Empty buttons that lack text for screen reader users are an accessibility issue.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'What is a common accessibility issue when it comes to forms?',
      answer: 'Missing form input labels',
      distractors: [
        'Empty links',
        'to many labels and inputs',
        'Low contrast text'
      ],
      explanation: 'A form label is an HTML element used in forms to describe what the the various fields in the form are for. Without the label element, screen reader users will not know what the form is when they focus on it.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'What is the primary accessibility problem associated with low color contrast on a webpage?',
      answer: 'Low contrast text',
      distractors: ['Broken links', 'Empty buttons', 'Missing document language'],
      explanation: 'Low color contrast, specifically with text, leads to the accessibility problem of low contrast text.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: `What is the purpose of the 'aria-labelledby' attribute in ARIA?`,
      answer: 'To enable authors to reference other elements on the page to define an accessible name.',
      distractors: [
        'To hide an element from screen readers',
        'To add a tooltip to an element',
        'To change the focus order of elements'
      ],
      explanation: `The 'aria-labelledby' attribute specifies the element or elements responsible for providing labels to the element to which it is assigned.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby'
    },
    {
      question: `What is the purpose of the 'aria-describedby' attribute in ARIA?`,
      answer: 'To list the IDs of the elements that describe the object.',
      distractors: [
        'To change the font size',
        'To add a border to an element',
        'To change the background color of an element'
      ],
      explanation: 'The aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/'
    },
    {
      question: 'What legal repercussions can businesses face for failing to meet website accessibility requirements?',
      answer: 'Businesses can face lawsuits or financial penalties',
      distractors: [
        'no repercussions',
        'they will serve 10 years in jail',
        'they will do 2500 hours of community service'
      ],
      explanation: 'Businesses that fail to meet website accessibility requirements may face lawsuits, financial penalties, and damage to their reputation. Maintaining good accessibility standards is good for everyone in this digital age.',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'According to the W3C, which of the following is not a valid guideline for crafting style sheets that enhance accessibility?',
      answer: `Utilize the 'px' unit to define font sizes.`,
      distractors: [
        'Ensure there is always a fallback generic font',
        'Opt for numbers instead of names when specifying colors.',
        `Ensure consistent 'class' names for the same concept across all style sheets`
      ],
      explanation: `For setting font sizes, use the 'em' unit and favor relative length units and percentages.`,
      link: 'https://www.w3.org/WAI/GL/WD-WCAG10-TECHS-20000615/css-techniques.html#:~:text=Users%20should%20where%20necessary.,units%20even%20in%20absolute%20positioning.'
    },
    {
      question: `What is the purpose of the 'aria-expanded' attribute in ARIA?`,
      answer: 'To indicate whether an element is open or closed when the visual indicator is not available',
      distractors: [
        'To specify the font size of text on a webpage',
        'To apply a transition effect to an element\'s size',
        'To adjust the spacing between elements on a webpage'
      ],
      explanation: `The 'aria-expanded' attribute conveys open or closed states for accessibility, aiding users when the visual indicator is not available.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded'
    },
    {
      question: `What is the purpose of the 'aria-label' attribute in ARIA?`,
      answer: 'To provide a text label for an element when the visible label is not present',
      distractors: [
        'To change the background color of an element',
        'To add audio effects to an element',
        'To hide an element from screen readers'
      ],
      explanation: `The 'aria-label' attribute is used to provide an accessible label for an element when the visible label is not sufficient.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label'
    },
    {
      question: `What is the purpose of the 'aria-live' attribute in ARIA?`,
      answer: 'To specify when and how updates to content should be announced by screen readers',
      distractors: [
        'To control the volume of audio elements on a webpage',
        'To change the font size of text',
        'To add video captions to multimedia content'
      ],
      explanation: `The 'aria-live' attribute is used to control how and when updates to dynamic content are announced to screen reader users.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions'
    },
    {
      question: `What is the purpose of 'role' attributes in ARIA?`,
      answer: 'To define the function or purpose of an element for assistive technologies',
      distractors: [
        'To specify the text color of an element',
        'To create hyperlinks on a webpage',
        'To apply CSS styles to an element'
      ],
      explanation: `ARIA 'role' attributes help convey the semantic meaning and behavior of elements to assistive technologies.`,
      link: 'https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/'
    },
    {
      question: `What is the purpose of the 'tabindex' attribute in HTML?`,
      answer: 'To control the order in which elements receive focus',
      distractors: [
        'To add styling to elements',
        'To hide elements from screen readers',
        'To create hyperlinks'
      ],
      explanation: `The 'tabindex' attribute specifies the order in which elements should be focused when navigating with the keyboard.`,
      link: 'https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/'
    },
    {
      question: 'What does WCAG stand for in the context of web accessibility?',
      answer: 'Web Content Accessibility Guidelines',
      distractors: [
        'Website Coding and Graphics',
        'Web Content Approval Group',
        'Webpage Creation and Graphics'
      ],
      explanation: 'WCAG stands for Web Content Accessibility Guidelines, which provide a set of recommendations for making web content more accessible.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the purpose of color contrast in web accessibility?',
      answer: 'Ensuring text and content remain readable for individuals with visual impairments.',
      distractors: [
        'Creating visually appealing websites',
        'Enhancing website loading speed',
        'Improving SEO ranking'
      ],
      explanation: 'Color contrast is essential to make text and content distinguishable for users with various levels of vision, ensuring readability and accessibility.',
      link: 'https://www.w3.org/TR/WCAG21/'
    },
    {
      question: 'What is the purpose of alternative text (alt text) in web accessibility?',
      answer: 'Providing descriptions of images for screen reader users and users with visual impairments.',
      distractors: [
        'Improving website design',
        'Enhancing website performance',
        'Hiding images from users'
      ],
      explanation: 'Alternative text (alt text) is used to describe images on web pages, making them accessible to individuals who use screen readers or have visual impairments.',
      link: 'https://www.w3.org/WAI/tutorials/images/decision-tree/'
    },
    {
      question: 'What is the name of the international body responsible for establishing the most common web accessibility standards?',
      answer: 'World Wide Web Consortium(W3C)',
      distractors: [
        'Websites for All',
        'Web Accessibility Initiative (WAI)',
        'A11y'
      ],
      explanation: 'Although there are several standards for accessibility, the most notable and globally recognized are developed by the World Wide Web Consortium (W3C) through its Web Accessibility Initiative.',
      link: 'https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/'
    },
    {
      question: 'Why is it important to use semantic elements when writing HTML?',
      answer: `Semantic code clearly describes the code's meaning to both the browser and the developer`,
      distractors: [
        'Semantic code is prettier.',
        'Semantic code decreases site readability.',
        'Semantic code can improve comprehension for hearing-impaired individuals.'
      ],
      explanation: 'Semantic HTML helps describe the meaning behind the content whereas generic HTML elements like divs and spans hold no special meaning. It is always encouraged to use semantic HTML when possible to help with accessibility.',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'Which one is the correct HTML element used to identify the main language of an entire page?',
      answer: '<html>',
      distractors: ['<!DOCTYPE>', '<body>', '<img>'],
      explanation: 'To set the main language of the page, use the lang attribute on the <html> element at the top of the page.',
      link: 'https://www.w3.org/International/questions/qa-html-language-declarations.en.html'
    },
    {
      question: 'What are the four principles under the Web Content Accessibility Guidelines (WCAG) 2.0?',
      answer: 'Perceivable, Operable, Understandable, and Robust',
      distractors: [
        'Comprehensible, Thorough, Detectable, and Configurable',
        'Justifiable, Clear, Permissable, and Simple',
        'Fundamental, Executable, Meaningful, and Useable'
      ],
      explanation: 'These principles help contextualize different areas of accessibility, as defined by the WCAG 2.0.',
      link: 'https://www.w3.org/TR/WCAG20/#guidelines'
    },
    {
      question: 'What is the highest conformance level under the Web Content Accessibility Guidelines (WCAG) 2.0?',
      answer: 'AAA',
      distractors: ['A', '5', '3'],
      explanation: 'While \'AAA\' is the highest WCAG 2.0 conformance level, it is not required as a general policy because not all content can satisfy all AAA success criteria.',
      link: 'https://www.w3.org/WAI/WCAG2A-Conformance'
    },
    {
      question: 'In general, what is the minimum contrast ratio for text and images of text under the Web Content Accessibility Guidelines (WCAG) 2.0 conformance level AA?',
      answer: '4.5:1',
      distractors: ['2:1', '14:1', '40:1'],
      explanation: 'A 4.5:1 contrast ratio helps ensure that users with moderately low vision are still able to read text.',
      link: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
    },
    {
      question: 'What additional HTML element should be added and associated to <input> form fields to add accessibility for screen readers?',
      answer: '<label>',
      distractors: ['<name>', '<spec>', '<screen>'],
      explanation: 'Adding an associated <label> element for <input> form fields will provide valuable focus information to screen readers.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'Which attribute makes images accessible for people using screen readers?',
      answer: 'alt',
      distractors: ['desc', 'img', 'src'],
      explanation: 'The alt attribute provides short descriptive text for images and the text is read aloud by a screen reader.',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'What are web accessibility evaluation tools?',
      answer: 'Software programs or online services that help determine if web content meets accessibility standards.',
      distractors: [
        'Tools that help determine if unit tests are well written.',
        'Software programs that help determine if a website is secure.',
        'Online services that help determine if customer satisfaction is high.'
      ],
      explanation: 'Web accessibility evaluation tools are programs used to ensure that software adheres to accessibility guidelines as laid out by the W3C.',
      link: 'https://www.w3.org/WAI/test-evaluate/tools/'
    },
    {
      question: 'What is web accessibility?',
      answer: 'the practice of building websites that are usable by everyone',
      distractors: [
        'a new JavaScript framework',
        'a sorting algorithm',
        'a type of programming paradigm'
      ],
      explanation: 'Web accessibility means building websites that are usable by as many people as possible.',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'Which of the following HTML elements can improve the accessibility for your website?',
      answer: '<main>',
      distractors: ['<div>', '<span>', '<head>'],
      explanation: 'The main element defines a main landmark on the page which allows screen reader users to quickly navigate to the beginning of the main content.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/'
    },
    {
      question: 'Which of the following is a good reason to have a strong contrast ratio between foreground and background colors?',
      answer: 'people with moderately low vision can read and access the website contents.',
      distractors: [
        'a good contrast ratio will improve the entire web design.',
        'screen readers can distinguish better between foreground and background colors',
        'a good contrast ratio will improve website performance and SEO.'
      ],
      explanation: 'Websites that have a strong contrast ratio between background and foreground colors will allow people with low vision to better access and read the website content.',
      link: 'https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background'
    },
    {
      question: `How does adding a \`lang\` attribute to a webpage's \`html\` element help with accessibility?`,
      answer: 'It helps screen readers in identifying the language of the page',
      distractors: [
        'It helps Google Translate to translate the page',
        'It helps the page to display the correct font',
        'It helps the page to rank with search engines'
      ],
      explanation: `It's important to indicate the language of the page because screen readers use the document language to know how to pronounce the words on the page.`,
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/#add-missing-document-language'
    },
    {
      question: 'When a website complies with Level AA of conformance, which of these levels will already be compatible?',
      answer: 'Level A',
      distractors: ['Level AAA', 'Level AA and Level AAA', 'Level AAA and Level A'],
      explanation: 'WCAG Levels are backwards compatible. If a website complies with Level AAA, then it also complies with the requirements of Level AA and Level A.',
      link: 'https://www.freecodecamp.org/news/pragmatic-rules-of-web-accessibility-that-will-stick-to-your-mind-9d3eb85a1a28/'
    },
    {
      question: 'What are some of the most common types of WCAG 2 failures?',
      answer: 'Low contrast text, missing alternative text for images, empty links',
      distractors: [
        'High contrast text, alternative images for text, broken links',
        'Styled buttons, form input labels, multiple document languages',
        'Missing hover text, auto-fill inputs, responsive elements'
      ],
      explanation: `WCAG's audit shows that many accessibility errors fall into just six areas/categories: low contrast text, missing alternative text for images, missing form input labels, empty links, missing document language, and empty buttons.`,
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'Why would providing a skip navigation link create a better experience for keyboard users?',
      answer: 'It would allow them to skip to the main content of a site and avoid tabbing through all the main navigation links.',
      distractors: [
        'It would disable all main navigation links, allowing for quicker access to the main content.',
        'It would go through all of the navigation options before the main content of a site.',
        `It would allow them to skip to the site's navigation links for more efficient access to content.`
      ],
      explanation: 'In order to give keyboard users a pleasant experience on your website, they need to be able to access content quickly and efficiently. To allow them to skip to the main content of a site and avoid tabbing through all the main navigation, you can create a \'skip navigation link\'.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/'
    },
    {
      question: 'What is a screen reader?',
      answer: 'A software application that attempts to convey what is displayed via non-visual means, like text-to-speech.',
      distractors: [
        'A Chrome extension that reads all text on a web page and converts it to a audio files.',
        'A site that provides examples of how to implement alt text to images.',
        'A computer program to scan an application for accessibility improvements.'
      ],
      explanation: 'A software application with assistive technology that attempts to convey what people with normal eyesight see on a display to their users via non-visual means, like text-to-speech. Developers can utilize a screen reader to understand how a webpage can be made accessible to such people and develop the page accordingly.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'What is ARIA?',
      answer: 'ARIA defines the responsibilities and states for screen readers in order to convey information about custom modules like carousels and tabs.',
      distractors: [
        'A tool that changes visuals on a web page to make it more accessible.',
        'It is an open-source, automated web page quality measurement tool.',
        'A computer program to scan an application for accessibility improvements.'
      ],
      explanation: 'ARIA is the acronym for Accessible Rich Internet Application which defines the responsibilities, characteristics, and states for screen readers in order to convey information about modules.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA'
    },
    {
      question: 'What should you avoid doing with the tabindex attribute when it comes to keyboard accessibility?',
      answer: 'setting the tabindex attribute greater than zero',
      distractors: [
        'Use Javascript',
        'setting the tabindex to use only numbers',
        'Put the headings in an unordered fashion'
      ],
      explanation: `Putting the tabindex attribute greater than zero causes the focus order of a website's page to be disorganized, causing people who only user their keyboards to navigate the web to be confused`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard'
    },
    {
      question: 'How can you make focus elements more accessible to screen readers on native mobile apps?',
      answer: 'Add an accessibility label for each element.',
      distractors: [
        'Avoid using images, gifs, and videos altogether.',
        'Add a contentDesc label to your focus elements.',
        'Avoid using descriptive headings which are longer than 10 characters.'
      ],
      explanation: 'Accessibility labels are good ways to describe the element to screen reader users.',
      link: 'https://www.freecodecamp.org/news/mobile-accessibility/'
    },
    {
      question: 'What are some of the benefits of an accessible design?',
      answer: 'Follows SEO best practices and better UX',
      distractors: [
        'Better UI and better customer support',
        'Easier A/B testing and white box testing',
        'Generates more engagement and widens target demographic'
      ],
      explanation: 'Some of the basic accessibility requirements are also SEO best practices, and improving accessibility for people with disabilities will improve the experience for all your users.',
      link: 'https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Follows%20SEO%20best,people%20with%20disabilities.'
    },
    {
      question: 'When should you start thinking about accessibility?',
      answer: 'Right from the get-go',
      distractors: [
        'After pitching your MVP',
        'After your first bug-fix',
        'As the finishing touch'
      ],
      explanation: `If you don't pay attention to accessibility right from the beginning of your project, it may become an expensive burden once you start retrofitting.`,
      link: 'https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Why%20you%20should,from%20the%20beginning%3A'
    },
    {
      question: 'For accessibility, which interaction does NOT need to be ensured for motor disability?',
      answer: 'Color adjustment',
      distractors: ['NO keyboard ', 'NO limitations on response time', 'Customizing the behavior'],
      explanation: 'Color adjustments are key for visual impairments.',
      link: 'https://www.w3.org/TR/css-color-adjust-1/'
    },
    {
      question: 'Which of the following HTML tags does NOT use the autocomplete attribute?',
      answer: '<html>',
      distractors: ['<input>', '<text>', '<form>'],
      explanation: 'The autocomplete attribute can be used in the following HTML elements: <input>, <textarea>, <select> and <form>.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete'
    },
    {
      question: 'Which of the following attributes turns an element with a role of button into a toggle button?',
      answer: 'aria-pressed',
      distractors: ['aria-checked', 'aria-expanded', 'aria-selected'],
      explanation: 'The aria-pressed attribute indicates the current pressed state of a toggle button.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed'
    },
    {
      question: 'What is the semantic HTML equivalent for the ARIA: link role (role=`link`)?',
      answer: '<a>',
      distractors: ['<nav>', '<link>', '<iframe>'],
      explanation: 'The anchor element is the HTML equivalent to the  ARIA link role. It is best to use the anchor element because it is best supported by assistive technologies.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role'
    },
    {
      question: 'Which of the following HTML tags does NOT use the rel attribute?',
      answer: '<input>',
      distractors: ['<link>', '<area>', '<form>'],
      explanation: 'The rel attribute can be used in the following HTML elements: <link>, <a>, <area>, and <form>',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel'
    },
    {
      question: 'What is the function of the contentinfo ARIA role?',
      answer: 'defines the footer content at that bottom of a website',
      distractors: [
        'defines the navigation content',
        'displays a list',
        'defines article element content'
      ],
      explanation: 'The contentinfo role is used describe the information that is presented at the bottom of the website, such as copyright statements, links to help people navigate the website, etc. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role'
    },
    {
      question: 'What is the ARIA comment role used for?',
      answer: 'To describe a reaction or emotion in some content',
      distractors: [
        'To provide notes about certain lines of code',
        'To share an opinion',
        'To critique a piece of text'
      ],
      explanation: 'If a website has a testimonial section, the comment role helps describe this information to people who use screen readers.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role'
    },
    {
      question: 'What is the minimum contrast ratio needed, according to the WCAG?',
      answer: '4.5:1',
      distractors: ['1:1', '3:1', '2.5:1'],
      explanation: 'The minimum contrast ratio needed depends on the type and size of the text and the level of conformance. For normal text, the minimum contrast ratio is 4.5:1.',
      link: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
    },
    {
      question: 'In the context of web accessibility, what does \'cognitive accessibility\' refer to?',
      answer: 'Ensuring that web content is easy to understand and use for individuals with cognitive disabilities.',
      distractors: [
        'Making web content more engaging and interactive.',
        'Enhancing the creativity and aesthetics of web design.',
        'Providing audio descriptions for video content.'
      ],
      explanation: `'Cognitive accessibility' refers to the practice of designing and structuring web content in a way that makes it easy to comprehend and navigate for individuals with cognitive disabilities like dyslexia, attention deficit disorders, or intellectual disabilities.`,
      link: 'https://www.w3.org/WAI/cognitive/'
    },
    {
      question: 'What is keyboard accessibility, and why is it important for web accessibility?',
      answer: 'Keyboard accessibility refers to the ability to navigate and interact with a website using only the keyboard, without relying on a mouse.',
      distractors: [
        'Keyboard accessibility refers to using specialized keyboards for web browsing.',
        'Keyboard accessibility is a feature that improves website loading speed.',
        'Keyboard accessibility is only important for developers, not users.'
      ],
      explanation: 'Keyboard accessibility is a fundamental aspect of web accessibility, as it ensures that websites are usable by a wide range of users, including those with disabilities. Providing keyboard support means implementing focus management, allowing users to navigate through interactive elements, and ensuring that all functionality is accessible via keyboard input.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets'
    },
    {
      question: 'Which HTML element triggers an action when pressed and is accessible for screen readers?',
      answer: '<button>',
      distractors: ['<div>', '<span>', '<a>'],
      explanation: 'The <button> element is the appropriate HTML element to create a button that triggers an action when pressed. It is also accessible for screen readers when used correctly with appropriate ARIA attributes.',
      link: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/'
    },
    {
      question: 'When designing a website to enhance accessibility, what is the purpose of a skip navigation link?',
      answer: 'It helps visually impaired users to skip to the main content of a site.',
      distractors: [
        `It serves as a link to the website's home page.`,
        `It allows users to skip directly to the website's contact page.`,
        'It provides a link to download a screen reader application.'
      ],
      explanation: 'A skip navigation link allows visually impaired users to bypass the main navigation links and jump directly to the main content of a site.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/'
    },
    {
      question: 'What are the four broad guidelines of web accessibility that address different aspects of usability and inclusivity?',
      answer: 'Perceivable, Operable, Understandable, Robust.',
      distractors: [
        'Responsive, Mobile-Friendly, Fast-Loading and Secure.',
        'Content, Design, Interaction and Navigation.',
        'Productivity, Accessibility, Scalability and Visual.'
      ],
      explanation: 'The four broad guidelines of web accessibility are Perceivable, Operable, Understandable, Robust. They help ensure that web content is accessible to all users, including those with disabilities',
      link: 'https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/'
    },
    {
      question: 'Which of the following is not the way to fix web accessibility errors?',
      answer: 'Changing document color',
      distractors: [
        'Updating low contrast text',
        'Adding missing alternative text for images',
        'Fix empty links'
      ],
      explanation: 'Fixing empty links, adding missing alternative text for images, updating low contrast text are some common ways to fix accessibility errors',
      link: 'https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/'
    },
    {
      question: 'When was version 1.0 of the Web Content Accessibility Guidelines (WCAG) released?',
      answer: '1999',
      distractors: ['2008', '1995', '2005'],
      explanation: 'WCAG version 1.0 was published on May 5, 1999 and was a total game-changer for web accessibility.',
      link: 'https://www.freecodecamp.org/news/web-accessibility-best-practices-and-checklist/'
    },
    {
      question: 'Which of the following is NOT an example of web accessibility?',
      answer: 'Programming Robots using Machine Learning',
      distractors: [
        'Alternative Text for Images',
        'Keyboard Input',
        'Transcripts for Audio'
      ],
      explanation: 'All of the above are current examples of web accessibility, except for Machine Learning, which may become a future trend.',
      link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/#examples'
    },
    {
      question: 'Which type of color combinations should be avoided to improve web accessibility for colorblind users?',
      answer: 'Red and green combinations.',
      distractors: [
        'Black and white combinations.',
        'Blue and yellow combinations.',
        'Purple and orange combinations.'
      ],
      explanation: `Red and green are problematic for colorblind users, so it's important to choose color combinations that are distinguishable by everyone.`,
      link: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
    },
    {
      question: 'Which web accessibility guideline ensures that website navigation can be operated via a keyboard?',
      answer: 'Keyboard Accessibility',
      distractors: ['Image Alt Text', 'Audio Descriptions', 'Video Captions'],
      explanation: 'Keyboard accessibility ensures that users can navigate and interact with a website using only a keyboard.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'Why is it important to provide captions for videos on a website?',
      answer: 'To make video content accessible to individuals with hearing impairments.',
      distractors: [
        'To add decorative elements to videos.',
        `To increase the video's play speed.`,
        'To hide the video from users.'
      ],
      explanation: 'Captions are essential for conveying spoken content to those who cannot hear it.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'How can a web developer improve the keyboard accessibility of a website?',
      answer: 'By ensuring all interactive elements can be accessed and used via the keyboard alone.',
      distractors: [
        'By removing all interactive elements from the website.',
        'By increasing the size of interactive elements.',
        'By using more images on the website.'
      ],
      explanation: 'Keyboard accessibility means that users can perform all actions using just the keyboard, without a mouse or other pointing device.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the role of focus indicators in web accessibility?',
      answer: 'To provide a visual indication of where keyboard focus is on the page.',
      distractors: [
        'To highlight decorative elements on the page.',
        'To disable keyboard navigation.',
        'To change the font size of text content.'
      ],
      explanation: 'Focus indicators help users understand where they are on a web page and improve navigation for keyboard users.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the purpose of an accessible form in web accessibility?',
      answer: 'To ensure that forms are usable by individuals with disabilities, including those who use screen readers or keyboard navigation.',
      distractors: [
        'To collect personal information from users.',
        'To create complex visual effects on a web page.',
        'To prevent users from submitting forms.'
      ],
      explanation: 'Accessible forms are designed to be usable by everyone, including those with disabilities.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the purpose of text resizing options in web accessibility?',
      answer: 'To allow users to adjust text size to meet their specific needs and preferences.',
      distractors: [
        `To change the website's background color.`,
        'To add animated transitions to the website.',
        `To hide the website's navigation menu.`
      ],
      explanation: 'Text resizing options improve accessibility by accommodating users with varying visual impairments.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the purpose of ARIA landmarks in web accessibility?',
      answer: 'To provide a way for screen readers to navigate and understand the structure of a web page.',
      distractors: [
        'To create colorful graphics on the page.',
        'To insert advertising banners on the page.',
        `To change the page's font style.`
      ],
      explanation: 'ARIA landmarks help screen reader users quickly locate and understand different sections of a web page.',
      link: 'https://www.w3.org/WAI/standards-guidelines/aria/'
    },
    {
      question: 'Why is it important to provide accessible alternatives for multimedia content?',
      answer: 'To ensure that all users, including those with disabilities, can access and understand the content.',
      distractors: [
        'To increase the number of multimedia elements on a website.',
        'To add visual effects to multimedia content.',
        'To reduce the page load time.'
      ],
      explanation: 'Accessible alternatives like captions and audio descriptions make multimedia content inclusive.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'What is the role of screen readers in web accessibility?',
      answer: 'To provide audible representation of on-screen content for individuals with visual impairments.',
      distractors: [
        'To display visual content on a screen.',
        'To make text content larger on a screen.',
        `To increase the website's loading speed.`
      ],
      explanation: 'Screen readers are essential for making digital content accessible to blind and visually impaired users.',
      link: 'https://en.wikipedia.org/wiki/Screen_reader'
    },
    {
      question: 'What are the WCAG guidelines, and why are they important for web accessibility?',
      answer: 'WCAG (Web Content Accessibility Guidelines) provide a set of international standards for web accessibility, ensuring that digital content is accessible to a wide range of users, including those with disabilities.',
      distractors: [
        'WCAG guidelines are only for mobile app development.',
        'WCAG guidelines focus on website aesthetics.',
        'WCAG guidelines are only relevant for small businesses.'
      ],
      explanation: 'WCAG guidelines are globally recognized and help create web content that is accessible and usable for individuals with disabilities, enhancing inclusivity on the web.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'Which of the following screen readers is available as licensed software for Windows?',
      answer: 'JAWS (Job Access With Speech)',
      distractors: ['NVDA(Non Visual Desktop Access)', 'a11y.project', 'ChromeVox'],
      explanation: 'JAWS (Job Access With Speech) is widely used screen reading software developed by Freedom Scientific, which is available as licensed software for Windows.',
      link: 'https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/'
    },
    {
      question: 'Why is it important for developers to prioritize semantic HTML when building websites?',
      answer: 'It helps screen readers and other assistive technologies to interpret the content accurately.',
      distractors: [
        'It enhances the visual appeal of the website for users with normal vision.',
        'It minimizes the overall file size and improves website loading speed.',
        'It allows for more complex styling options using CSS and JavaScript.'
      ],
      explanation: 'By prioritizing semantic HTML, developers enable better accessibility for users who rely on assistive technologies, ensuring accurate interpretation of website content for all users.',
      link: 'https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/'
    },
    {
      question: 'How can developers ensure the accessibility of forms on their websites?',
      answer: 'By using proper labeling and grouping of form elements, and providing clear instructions for users.',
      distractors: [
        'By minimizing the number of form fields to streamline the user experience.',
        'By implementing complex validation rules to ensure data accuracy.',
        'By embedding interactive multimedia elements within the form for engagement.'
      ],
      explanation: 'Accessibility in web forms can be achieved by implementing clear labels, grouping related fields, and offering explicit instructions, facilitating easy navigation and understanding for all users.',
      link: 'https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/'
    },
    {
      question: 'What is the significance of providing descriptive alt texts for images in web development?',
      answer: 'It enables users with visual impairments to understand the content and context of the images.',
      distractors: [
        'It enhances the visual appeal of the website and encourages user engagement.',
        'It prevents unauthorized use of images by other websites.',
        'It improves search engine optimization (SEO) and boosts website visibility.'
      ],
      explanation: 'Descriptive alt texts for images ensure that users with visual impairments can comprehend the content of the images, fostering a comprehensive browsing experience for all users.',
      link: 'https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/'
    },
    {
      question: 'Which one of these has a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally?',
      answer: 'WCAG 2',
      distractors: ['ARIA', 'UAAG', 'ATAG'],
      explanation: 'WCAG 2 provides a comprehensive set of guidelines to ensure web content is accessible to all users, including those with disabilities. It is widely recognized and adopted globally to create a consistent and universal standard for web accessibility.',
      link: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    },
    {
      question: 'Which specification enhances the accessibility of dynamic web content and user interface components developed with JavaScript, HTML, and CSS?',
      answer: 'WAI-ARIA',
      distractors: ['WEB-DEI', 'WAI-Adapt', 'WCAG 3'],
      explanation: 'WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It\'s a set of technical specifications developed by W3C to improve the accessibility of dynamic web content and advanced user interface components.',
      link: 'https://www.w3.org/WAI/standards-guidelines/aria/'
    }
  ]
};

export default accessibilityQuiz;

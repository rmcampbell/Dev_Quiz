const accessibilityQuiz = [
  {
    Question: "Why is using semantic HTML important for accessibility?",
    Answer:
      "It provides meaning and structure to web content, aiding screen readers and other assistive technologies.",
    Distractors: [
      "It makes the website load faster.",
      "It helps with SEO optimization.",
      "It reduces the need for CSS."
    ],
    Explanation:
      "Semantic HTML uses tags that clearly describe their purpose, which improves the accessibility of web content for users relying on assistive technologies.",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    Question: "What does ASAP mean in the context of accessibility?",
    Answer: "As Semantic As Possible",
    Distractors: [
      "As Soon As Possible",
      "Automated System Application Protocol",
      "Advanced Syntax Application Programming"
    ],
    Explanation:
      "In the context of web development, ASAP stands for 'As Semantic As Possible', emphasizing the importance of semantic markup for accessibility and SEO.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question: "How does 'focus management' contribute to web accessibility?",
    Answer:
      "It ensures keyboard and screen reader users can navigate content in a logical order",
    Distractors: [
      "It designs web forms",
      "It provides navigation menus",
      "It adds pop-up ads"
    ],
    Explanation: "Focus management is essential for a smooth user experience.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What is the primary goal of web accessibility?",
    Answer:
      "To make websites usable by as many people as possible, regardless of disabilities",
    Distractors: [
      "To increase web traffic",
      "To enhance website appearance",
      "To block access for certain users"
    ],
    Explanation:
      "Web accessibility is the practice of ensuring that websites can be used effectively by individuals with disabilities, aiming to provide an inclusive and equitable online experience.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question:
      "Why is it important to provide textual alternatives for non-text content in web accessibility?",
    Answer:
      "To ensure users with disabilities can access and understand content",
    Distractors: [
      "To improve search engine rankings",
      "To speed up website loading times",
      "To add visual effects"
    ],
    Explanation: "Textual alternatives are crucial for accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "Why is 'keyboard navigation' important in web accessibility?",
    Answer: "It helps users navigate a website using keyboard keys",
    Distractors: [
      "It enhances page design",
      "It increases loading speed",
      "It adds background music"
    ],
    Explanation:
      "Keyboard navigation allows users with mobility issues to browse a website efficiently.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question:
      "What does 'text alternatives' for non-text content provide in web accessibility?",
    Answer: "Ensures users with disabilities can access and understand content",
    Distractors: [
      "Improves search engine rankings",
      "Speeds up website loading times",
      "Adds visual effects"
    ],
    Explanation: "Text alternatives are essential for accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What are the landmarks in web accessibility?",
    Answer: "Structure",
    Distractors: ["Images", "Audio", "Video"],
    Explanation:
      "Landmarks provide a structural outline for web content, making it more accessible.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "How does layout structure contribute to web accessibility?",
    Answer: "Organization",
    Distractors: ["Fonts", "Colors", "Multimedia"],
    Explanation:
      "A clear layout structure enhances the user experience for all, including those with disabilities.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What is the minimum font size recommended for accessibility?",
    Answer: "16px",
    Distractors: ["10px", "14px", "18px"],
    Explanation:
      "A font size of 16px or 12pt is considered a good practice for accessibility.",
    Link: "https://www.freecodecamp.org/news/how-to-change-text-size-in-html"
  },
  {
    Question: "How does semantic HTML contribute to web accessibility?",
    Answer: "Clarity",
    Distractors: ["Interactivity", "Animation", "Multimedia"],
    Explanation:
      "Semantic HTML tags provide clear and meaningful structure to web content.",
    Link: "https://webaim.org/techniques/semanticstructure"
  },
  {
    Question: "What is the role of a label in accessibility?",
    Answer: "Identification",
    Distractors: ["Navigation", "Animation", "Color"],
    Explanation:
      "Labels help users identify form fields, buttons, and other interactive elements.",
    Link: "https://www.freecodecamp.org/news/html-label-label-tag-example"
  },
  {
    Question: "How do buttons enhance web accessibility?",
    Answer: "Interaction",
    Distractors: ["Navigation", "Layout", "Multimedia"],
    Explanation:
      "Buttons provide interactive elements that are essential for accessibility.",
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website"
  },
  {
    Question:
      "Which of the following is NOT one of the default landmark roles?",
    Answer: "nav",
    Distractors: ["complementary", "contentinfo", "form"],
    Explanation:
      "The <nav> element is a semantic HTML element with a corresponding default landmark role of role='navigation'.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html"
  },
  {
    Question:
      "What do you need to consider when using more than one <main> landmark in your code?",
    Answer: "That each <main> landmark has a unique label.",
    Distractors: [
      "You do not have to consider something specific.",
      "It is not allowed to have two <main> landmarks.",
      "That each <main> landmark has a unique id."
    ],
    Explanation:
      "The <main> landmark contains the main content of the page. Even though it's rare to have more then one <main> landmark, it is possible. It is important for screen reader users to be able to differ between those landmarks. Therefore, a unique label should be added to each <main> landmark.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html"
  },
  {
    Question:
      "Which of the following HTML elements uses the default landmark complementary?",
    Answer: "aside",
    Distractors: ["contentinfo", "section", "div"],
    Explanation:
      "The semantic <aside> element uses the complementary landmark which is a supporting section of the document created to complement the main content.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/complementary.html"
  },
  {
    Question:
      "When did the World Wide Web Consortium first draft the set of standards for developing accessible websites?",
    Answer: "1999",
    Distractors: ["2001", "1990", "1989"],
    Explanation:
      "The World Wide Web Consortium first drafted standards for developing accessible websites back in 1999.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following laws has brought accessibility issues to the forefront in recent years?",
    Answer: "The Americans with Disabilities Act",
    Distractors: [
      "The Internet Freedom Act",
      "The Web Accessibility Act",
      "The Digital Inclusion Law"
    ],
    Explanation:
      "The Americans with Disabilities Act (ADA) has brought web accessibility to the forefront by requiring public spaces and commercial facilities to provide equal access to individuals with disabilities, which now includes web-based activities due to legal rulings.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question: "Which of the following is NOT a benefit of web accessibility?",
    Answer: "Limited Audience Reach",
    Distractors: [
      "Higher Search Engine Rankings",
      "Inclusivity",
      "Improved User Experience"
    ],
    Explanation:
      "Making websites accessible broadens the audience reach rather than limiting it, ensuring that everyone, regardless of their abilities, can access the content online",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "When creating charts, what should be added so that color is not the only identifier to convey the meaning of the information?",
    Answer: "Patterns",
    Distractors: [
      "Hint Buttons",
      "Gradients",
      "There is no need to add an additional identifier, color is enough."
    ],
    Explanation:
      "Colorblind and low vision users have difficulties to perceive the color differences. In addition, when the graph appears in greyscale (e.g. user settings, print), it is impossible to every user to see differences.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
  },
  {
    Question:
      "Why is it better for accessibility reasons to use relative units(em and rem) instead of absolute units(px)?",
    Answer:
      "With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.",
    Distractors: [
      "Absolute units like 'px' provide better control over the design's precise layout.",

      "Relative units like 'em' and 'rem' are only useful for text size, not layout.",

      "There is no significant difference between relative and absolute units in web design."
    ],
    Explanation:
      "When you use px, the element's size remains constant regardless of the size of the screen. With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.",
    Link: "https://www.freecodecamp.org/news/why-use-rem-to-set-font-size-in-css#what-are-relative-units-in-css"
  },
  {
    Question:
      "What role does the 'alt' attribute play when adding alternative text to images on a webpage?",
    Answer:
      "The 'alt' attribute describes the content of the image to users who cannot see it.",
    Distractors: [
      "The 'alt' attribute enhances image aesthetics.",
      "The 'alt' attribute speeds up image loading.",
      "The 'alt' attribute provides translations for the image content."
    ],
    Explanation:
      "It's a tool to check accessibility properties of web elements.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "What is the purpose of the 'Chrome Accessibility Developer Tools' extension for Google Chrome?",
    Answer: "It's a tool to check accessibility properties of web elements.",
    Distractors: [
      "It's a tool to only fix color contrast errors",
      "It's a tool to only fix font size errors",
      "It's a tool to audit only keyboard accessibility errors"
    ],
    Explanation:
      "The extension aids in inspecting and ensuring web accessibility by providing relevant information in the Developer tools.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "As of 2023, which tool or extension allows you to find accessibility defects on your web page in both Chrome and Firefox?",
    Answer: "WAVE",
    Distractors: ["Color Oracle", "aXe", "ChromeVox"],
    Explanation:
      "WAVE is an extension available for both Chrome and Firefox that helps identify accessibility issues on web pages.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is it important to add labels to form inputs like search forms?",
    Answer:
      "Labels indicate the purpose of form inputs and make them accessible to screen reader users.",
    Distractors: [
      "Labels improve website aesthetics.",
      "Labels increase website loading speed.",
      "Labels provide translations for form inputs."
    ],
    Explanation:
      "Labels associated with form inputs, such as search forms, describe the purpose of the input, making it accessible to screen reader users.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "As of 2023, which screen reader is a Free & Open-source downloadable software for Windows OS?",
    Answer: "NVDA (Non Visual Desktop Access)",
    Distractors: ["JAWS (Job Access With Speech)", "ChromeVox", "a11yproject"],
    Explanation:
      "NVDA is a free screen reader for Windows, making it accessible to a wide audience.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "What does the 'a11yproject' provide for web development, and what can you find on their site?",
    Answer:
      "It provides practical guides, examples, how-tos, myths, tips, and recommended accessibility tools.",
    Distractors: [
      "It provides a platform for game development",
      "It offers free stock images",
      "It is a social media network"
    ],
    Explanation:
      "The 'a11yproject' offers practical guides, examples, how-tos, myths, tips, and recommended accessibility tools for implementing accessible features and components during web development. It is a community-driven project that can be contributed to on Github. The 'a11yproject' is a valuable resource for web developers looking to enhance the accessibility of their projects.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Which tool allows you to check foreground and background color values for AA and AAA color contrast ratios for small and large text?",
    Answer: "WebAIM Color Contrast Checker",
    Distractors: [
      "Accessible Color Palette Builder",
      "Randoma11y Color Generator",
      "Check My Colours"
    ],
    Explanation:
      "The WebAIM Color Contrast Checker is a tool to verify color contrast which is a crucial aspect of web accessibility.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is web accessibility important for SEO (Search Engine Optimization)?",
    Answer:
      "It helps search engines understand and index website content better.",
    Distractors: [
      "It decreases website load times.",
      "It automatically improves website design.",
      "It increases advertising revenue."
    ],
    Explanation:
      "Accessibility practices that make content understandable to screen readers also benefit search engines in understanding and indexing website content.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "Which accessibility issue is associated with buttons?",
    Answer: "lack of button text for screen reader users",
    Distractors: [
      "lack of background color",
      "lack of font color",
      "lack of border styles"
    ],
    Explanation:
      "Empty buttons that lack text for screen reader users are an accessibility issue.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "What is a common accessibility issue when it comes to forms?",
    Answer: "Missing form input labels",
    Distractors: [
      "Empty links",
      "to many labels and inputs",
      "Low contrast text"
    ],
    Explanation:
      "A form label is an HTML element used in forms to describe what the the various fields in the form are for. Without the label element, screen reader users will not know what the form is when they focus on it.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "What is the primary accessibility problem associated with low color contrast on a webpage?",
    Answer: "Low contrast text",
    Distractors: ["Broken links", "Empty buttons", "Missing document language"],
    Explanation:
      "Low color contrast, specifically with text, leads to the accessibility problem of low contrast text.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "What is the purpose of the 'aria-labelledby' attribute in ARIA?",
    Answer:
      "To enable authors to reference other elements on the page to define an accessible name.",
    Distractors: [
      "To hide an element from screen readers",
      "To add a tooltip to an element",
      "To change the focus order of elements"
    ],
    Explanation:
      "The 'aria-labelledby' attribute specifies the element or elements responsible for providing labels to the element to which it is assigned.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby"
  },
  {
    Question:
      "What is the purpose of the 'aria-describedby' attribute in ARIA?",
    Answer: "To list the IDs of the elements that describe the object.",
    Distractors: [
      "To change the font size",
      "To add a border to an element",
      "To change the background color of an element"
    ],
    Explanation:
      "The aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/"
  },
  {
    Question:
      "What legal repercussions can businesses face for failing to meet website accessibility requirements?",
    Answer: "Businesses can face lawsuits or financial penalties",
    Distractors: [
      "no repercussions",
      "they will serve 10 years in jail",
      "they will do 2500 hours of community service"
    ],
    Explanation:
      "Businesses that fail to meet website accessibility requirements may face lawsuits, financial penalties, and damage to their reputation. Maintaining good accessibility standards is good for everyone in this digital age.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "According to the W3C, which of the following is not a valid guideline for crafting style sheets that enhance accessibility?",
    Answer: "Utilize the 'px' unit to define font sizes.",
    Distractors: [
      "Ensure there is always a fallback generic font",
      "Opt for numbers instead of names when specifying colors.",

      "Ensure consistent 'class' names for the same concept across all style sheets"
    ],
    Explanation:
      "For setting font sizes, use the 'em' unit and favor relative length units and percentages.",
    Link: "https://www.w3.org/WAI/GL/WD-WCAG10-TECHS-20000615/css-techniques.html#:~:text=Users%20should%20where%20necessary.,units%20even%20in%20absolute%20positioning."
  },
  {
    Question: "What is the purpose of the 'aria-expanded' attribute in ARIA?",
    Answer:
      "To indicate whether an element is open or closed when the visual indicator is not available",
    Distractors: [
      "To specify the font size of text on a webpage",
      "To apply a transition effect to an element's size",
      "To adjust the spacing between elements on a webpage"
    ],
    Explanation:
      "The 'aria-expanded' attribute conveys open or closed states for accessibility, aiding users when the visual indicator is not available.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"
  },
  {
    Question: "What is the purpose of the 'aria-label' attribute in ARIA?",
    Answer:
      "To provide a text label for an element when the visible label is not present",
    Distractors: [
      "To change the background color of an element",
      "To add audio effects to an element",
      "To hide an element from screen readers"
    ],
    Explanation:
      "The 'aria-label' attribute is used to provide an accessible label for an element when the visible label is not sufficient.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"
  },
  {
    Question: "What is the purpose of the 'aria-live' attribute in ARIA?",
    Answer:
      "To specify when and how updates to content should be announced by screen readers",
    Distractors: [
      "To control the volume of audio elements on a webpage",
      "To change the font size of text",
      "To add video captions to multimedia content"
    ],
    Explanation:
      "The 'aria-live' attribute is used to control how and when updates to dynamic content are announced to screen reader users.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
  },
  {
    Question: "What is the purpose of 'role' attributes in ARIA?",
    Answer:
      "To define the function or purpose of an element for assistive technologies",
    Distractors: [
      "To specify the text color of an element",
      "To create hyperlinks on a webpage",
      "To apply CSS styles to an element"
    ],
    Explanation:
      "ARIA 'role' attributes help convey the semantic meaning and behavior of elements to assistive technologies.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/"
  },
  {
    Question: "What is the purpose of the 'tabindex' attribute in HTML?",
    Answer: "To control the order in which elements receive focus",
    Distractors: [
      "To add styling to elements",
      "To hide elements from screen readers",
      "To create hyperlinks"
    ],
    Explanation:
      "The 'tabindex' attribute specifies the order in which elements should be focused when navigating with the keyboard.",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
  {
    Question: "What does WCAG stand for in the context of web accessibility?",
    Answer: "Web Content Accessibility Guidelines",
    Distractors: [
      "Website Coding and Graphics",
      "Web Content Approval Group",
      "Webpage Creation and Graphics"
    ],
    Explanation:
      "WCAG stands for Web Content Accessibility Guidelines, which provide a set of recommendations for making web content more accessible.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of color contrast in web accessibility?",
    Answer:
      "Ensuring text and content remain readable for individuals with visual impairments.",
    Distractors: [
      "Creating visually appealing websites",
      "Enhancing website loading speed",
      "Improving SEO ranking"
    ],
    Explanation:
      "Color contrast is essential to make text and content distinguishable for users with various levels of vision, ensuring readability and accessibility.",
    Link: "https://www.w3.org/TR/WCAG21/"
  },
  {
    Question:
      "What is the purpose of alternative text (alt text) in web accessibility?",
    Answer:
      "Providing descriptions of images for screen reader users and users with visual impairments.",
    Distractors: [
      "Improving website design",
      "Enhancing website performance",
      "Hiding images from users"
    ],
    Explanation:
      "Alternative text (alt text) is used to describe images on web pages, making them accessible to individuals who use screen readers or have visual impairments.",
    Link: "https://www.w3.org/WAI/tutorials/images/decision-tree/"
  },
  {
    Question:
      "What is the name of the international body responsible for establishing the most common web accessibility standards?",
    Answer: "World Wide Web Consortium(W3C)",
    Distractors: [
      "Websites for All",
      "Web Accessibility Initiative (WAI)",
      "A11y"
    ],
    Explanation:
      "Although there are several standards for accessibility, the most notable and globally recognized are developed by the World Wide Web Consortium (W3C) through its Web Accessibility Initiative.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/"
  },
  {
    Question: "Why is it important to use semantic elements when writing HTML?",
    Answer:
      "Semantic code clearly describes the code's meaning to both the browser and the developer",
    Distractors: [
      "Semantic code is prettier.",
      "Semantic code decreases site readability.",

      "Semantic code can improve comprehension for hearing-impaired individuals."
    ],
    Explanation:
      "Semantic HTML helps describe the meaning behind the content whereas generic HTML elements like divs and spans hold no special meaning. It is always encouraged to use semantic HTML when possible to help with accessibility.",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    Question:
      "Which one is the correct HTML element used to identify the main language of an entire page?",
    Answer: "<html>",
    Distractors: ["<!DOCTYPE>", "<body>", "<img>"],
    Explanation:
      "To set the main language of the page, use the lang attribute on the <html> element at the top of the page.",
    Link: "https://www.w3.org/International/questions/qa-html-language-declarations.en.html"
  },
  {
    Question:
      "What are the four principles under the Web Content Accessibility Guidelines (WCAG) 2.0?",
    Answer: "Perceivable, Operable, Understandable, and Robust",
    Distractors: [
      "Comprehensible, Thorough, Detectable, and Configurable",
      "Justifiable, Clear, Permissable, and Simple",
      "Fundamental, Executable, Meaningful, and Useable"
    ],
    Explanation:
      "These principles help contextualize different areas of accessibility, as defined by the WCAG 2.0.",
    Link: "https://www.w3.org/TR/WCAG20/#guidelines"
  },
  {
    Question:
      "What is the highest conformance level under the Web Content Accessibility Guidelines (WCAG) 2.0?",
    Answer: "AAA",
    Distractors: ["A", "5", "3"],
    Explanation:
      "While 'AAA' is the highest WCAG 2.0 conformance level, it is not required as a general policy because not all content can satisfy all AAA success criteria.",
    Link: "https://www.w3.org/WAI/WCAG2A-Conformance"
  },
  {
    Question:
      "In general, what is the minimum contrast ratio for text and images of text under the Web Content Accessibility Guidelines (WCAG) 2.0 conformance level AA?",
    Answer: "4.5:1",
    Distractors: ["2:1", "14:1", "40:1"],
    Explanation:
      "A 4.5:1 contrast ratio helps ensure that users with moderately low vision are still able to read text.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question:
      "What additional HTML element should be added and associated to <input> form fields to add accessibility for screen readers?",
    Answer: "<label>",
    Distractors: ["<name>", "<spec>", "<screen>"],
    Explanation:
      "Adding an associated <label> element for <input> form fields will provide valuable focus information to screen readers.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "Which attribute makes images accessible for people using screen readers?",
    Answer: "alt",
    Distractors: ["desc", "img", "src"],
    Explanation:
      "The alt attribute provides short descriptive text for images and the text is read aloud by a screen reader.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "What are web accessibility evaluation tools?",
    Answer:
      "Software programs or online services that help determine if web content meets accessibility standards.",
    Distractors: [
      "Tools that help determine if unit tests are well written.",

      "Software programs that help determine if a website is secure.",

      "Online services that help determine if customer satisfaction is high."
    ],
    Explanation:
      "Web accessibility evaluation tools are programs used to ensure that software adheres to accessibility guidelines as laid out by the W3C.",
    Link: "https://www.w3.org/WAI/test-evaluate/tools/"
  },
  {
    Question: "What is web accessibility?",
    Answer: "the practice of building websites that are usable by everyone",
    Distractors: [
      "a new JavaScript framework",
      "a sorting algorithm",
      "a type of programming paradigm"
    ],
    Explanation:
      "Web accessibility means building websites that are usable by as many people as possible.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following HTML elements can improve the accessibility for your website?",
    Answer: "<main>",
    Distractors: ["<div>", "<span>", "<head>"],
    Explanation:
      "The main element defines a main landmark on the page which allows screen reader users to quickly navigate to the beginning of the main content.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question:
      "Which of the following is a good reason to have a strong contrast ratio between foreground and background colors?",
    Answer:
      "people with moderately low vision can read and access the website contents.",
    Distractors: [
      "a good contrast ratio will improve the entire web design.",

      "screen readers can distinguish better between foreground and background colors",

      "a good contrast ratio will improve website performance and SEO."
    ],
    Explanation:
      "Websites that have a strong contrast ratio between background and foreground colors will allow people with low vision to better access and read the website content.",
    Link: "https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background"
  },
  {
    Question:
      "How does adding a `lang` attribute to a webpage's `html` element help with accessibility?",
    Answer: "It helps screen readers in identifying the language of the page",
    Distractors: [
      "It helps Google Translate to translate the page",
      "It helps the page to display the correct font",
      "It helps the page to rank with search engines"
    ],
    Explanation:
      "It's important to indicate the language of the page because screen readers use the document language to know how to pronounce the words on the page.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/#add-missing-document-language"
  },
  {
    Question:
      "When a website complies with Level AA of conformance, which of these levels will already be compatible?",
    Answer: "Level A",
    Distractors: [
      "Level AAA",
      "Level AA and Level AAA",
      "Level AAA and Level A"
    ],
    Explanation:
      "WCAG Levels are backwards compatible. If a website complies with Level AAA, then it also complies with the requirements of Level AA and Level A.",
    Link: "https://www.freecodecamp.org/news/pragmatic-rules-of-web-accessibility-that-will-stick-to-your-mind-9d3eb85a1a28/"
  },
  {
    Question: "What are some of the most common types of WCAG 2 failures?",
    Answer:
      "Low contrast text, missing alternative text for images, empty links",
    Distractors: [
      "High contrast text, alternative images for text, broken links",

      "Styled buttons, form input labels, multiple document languages",
      "Missing hover text, auto-fill inputs, responsive elements"
    ],
    Explanation:
      "WCAG's audit shows that many accessibility errors fall into just six areas/categories: low contrast text, missing alternative text for images, missing form input labels, empty links, missing document language, and empty buttons.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "Why would providing a skip navigation link create a better experience for keyboard users?",
    Answer:
      "It would allow them to skip to the main content of a site and avoid tabbing through all the main navigation links.",
    Distractors: [
      "It would disable all main navigation links, allowing for quicker access to the main content.",

      "It would go through all of the navigation options before the main content of a site.",

      "It would allow them to skip to the site's navigation links for more efficient access to content."
    ],
    Explanation:
      "In order to give keyboard users a pleasant experience on your website, they need to be able to access content quickly and efficiently. To allow them to skip to the main content of a site and avoid tabbing through all the main navigation, you can create a 'skip navigation link'.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question: "What is a screen reader?",
    Answer:
      "A software application that attempts to convey what is displayed via non-visual means, like text-to-speech.",
    Distractors: [
      "A Chrome extension that reads all text on a web page and converts it to a audio files.",

      "A site that provides examples of how to implement alt text to images.",

      "A computer program to scan an application for accessibility improvements."
    ],
    Explanation:
      "A software application with assistive technology that attempts to convey what people with normal eyesight see on a display to their users via non-visual means, like text-to-speech. Developers can utilize a screen reader to understand how a webpage can be made accessible to such people and develop the page accordingly.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question: "What is ARIA?",
    Answer:
      "ARIA defines the responsibilities and states for screen readers in order to convey information about custom modules like carousels and tabs.",
    Distractors: [
      "A tool that changes visuals on a web page to make it more accessible.",

      "It is an open-source, automated web page quality measurement tool.",

      "A computer program to scan an application for accessibility improvements."
    ],
    Explanation:
      "ARIA is the acronym for Accessible Rich Internet Application which defines the responsibilities, characteristics, and states for screen readers in order to convey information about modules.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
  },
  {
    Question:
      "What should you avoid doing with the tabindex attribute when it comes to keyboard accessibility?",
    Answer: "setting the tabindex attribute greater than zero",
    Distractors: [
      "Use Javascript",
      "setting the tabindex to use only numbers",
      "Put the headings in an unordered fashion"
    ],
    Explanation:
      "Putting the tabindex attribute greater than zero causes the focus order of a website's page to be disorganized, causing people who only user their keyboards to navigate the web to be confused",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"
  },
  {
    Question:
      "How can you make focus elements more accessible to screen readers on native mobile apps?",
    Answer: "Add an accessibility label for each element.",
    Distractors: [
      "Avoid using images, gifs, and videos altogether.",
      "Add a contentDesc label to your focus elements.",

      "Avoid using descriptive headings which are longer than 10 characters."
    ],
    Explanation:
      "Accessibility labels are good ways to describe the element to screen reader users.",
    Link: "https://www.freecodecamp.org/news/mobile-accessibility/"
  },
  {
    Question: "What are some of the benefits of an accessible design?",
    Answer: "Follows SEO best practices and better UX",
    Distractors: [
      "Better UI and better customer support",
      "Easier A/B testing and white box testing",
      "Generates more engagement and widens target demographic"
    ],
    Explanation:
      "Some of the basic accessibility requirements are also SEO best practices, and improving accessibility for people with disabilities will improve the experience for all your users.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Follows%20SEO%20best,people%20with%20disabilities."
  },
  {
    Question: "When should you start thinking about accessibility?",
    Answer: "Right from the get-go",
    Distractors: [
      "After pitching your MVP",
      "After your first bug-fix",
      "As the finishing touch"
    ],
    Explanation:
      "If you don't pay attention to accessibility right from the beginning of your project, it may become an expensive burden once you start retrofitting.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Why%20you%20should,from%20the%20beginning%3A"
  },
  {
    Question:
      "For accessibility, which interaction does NOT need to be ensured for motor disability?",
    Answer: "Color adjustment",
    Distractors: [
      "NO keyboard ",
      "NO limitations on response time",
      "Customizing the behavior"
    ],
    Explanation: "Color adjustments are key for visual impairments.",
    Link: "https://www.w3.org/TR/css-color-adjust-1/"
  },
  {
    Question:
      "Which of the following HTML tags does NOT use the autocomplete attribute?",
    Answer: "<html>",
    Distractors: ["<input>", "<text>", "<form>"],
    Explanation:
      "The autocomplete attribute can be used in the following HTML elements: <input>, <textarea>, <select> and <form>.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
  },
  {
    Question:
      "Which of the following attributes turns an element with a role of button into a toggle button?",
    Answer: "aria-pressed",
    Distractors: ["aria-checked", "aria-expanded", "aria-selected"],
    Explanation:
      "The aria-pressed attribute indicates the current pressed state of a toggle button.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed"
  },
  {
    Question:
      "What is the semantic HTML equivalent for the ARIA: link role (role=`link`)?",
    Answer: "<a>",
    Distractors: ["<nav>", "<link>", "<iframe>"],
    Explanation:
      "The anchor element is the HTML equivalent to the  ARIA link role. It is best to use the anchor element because it is best supported by assistive technologies.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role"
  },
  {
    Question:
      "Which of the following HTML tags does NOT use the rel attribute?",
    Answer: "<input>",
    Distractors: ["<link>", "<area>", "<form>"],
    Explanation:
      "The rel attribute can be used in the following HTML elements: <link>, <a>, <area>, and <form>",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel"
  },
  {
    Question: "What is the function of the contentinfo ARIA role?",
    Answer: "defines the footer content at that bottom of a website",
    Distractors: [
      "defines the navigation content",
      "displays a list",
      "defines article element content"
    ],
    Explanation:
      "The contentinfo role is used describe the information that is presented at the bottom of the website, such as copyright statements, links to help people navigate the website, etc. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"
  },
  {
    Question: "What is the ARIA comment role used for?",
    Answer: "To describe a reaction or emotion in some content",
    Distractors: [
      "To provide notes about certain lines of code",
      "To share an opinion",
      "To critique a piece of text"
    ],
    Explanation:
      "If a website has a testimonial section, the comment role helps describe this information to people who use screen readers.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role"
  },
  {
    Question:
      "What is the minimum contrast ratio needed, according to the WCAG?",
    Answer: "4.5:1",
    Distractors: ["1:1", "3:1", "2.5:1"],
    Explanation:
      "The minimum contrast ratio needed depends on the type and size of the text and the level of conformance. For normal text, the minimum contrast ratio is 4.5:1.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question:
      "In the context of web accessibility, what does 'cognitive accessibility' refer to?",
    Answer:
      "Ensuring that web content is easy to understand and use for individuals with cognitive disabilities.",
    Distractors: [
      "Making web content more engaging and interactive.",
      "Enhancing the creativity and aesthetics of web design.",
      "Providing audio descriptions for video content."
    ],
    Explanation:
      "'Cognitive accessibility' refers to the practice of designing and structuring web content in a way that makes it easy to comprehend and navigate for individuals with cognitive disabilities like dyslexia, attention deficit disorders, or intellectual disabilities.",
    Link: "https://www.w3.org/WAI/cognitive/"
  },
  {
    Question:
      "What is keyboard accessibility, and why is it important for web accessibility?",
    Answer:
      "Keyboard accessibility refers to the ability to navigate and interact with a website using only the keyboard, without relying on a mouse.",
    Distractors: [
      "Keyboard accessibility refers to using specialized keyboards for web browsing.",

      "Keyboard accessibility is a feature that improves website loading speed.",

      "Keyboard accessibility is only important for developers, not users."
    ],
    Explanation:
      "Keyboard accessibility is a fundamental aspect of web accessibility, as it ensures that websites are usable by a wide range of users, including those with disabilities. Providing keyboard support means implementing focus management, allowing users to navigate through interactive elements, and ensuring that all functionality is accessible via keyboard input.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
  },
  {
    Question:
      "Which HTML element triggers an action when pressed and is accessible for screen readers?",
    Answer: "<button>",
    Distractors: ["<div>", "<span>", "<a>"],
    Explanation:
      "The <button> element is the appropriate HTML element to create a button that triggers an action when pressed. It is also accessible for screen readers when used correctly with appropriate ARIA attributes.",
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/"
  },
  {
    Question:
      "When designing a website to enhance accessibility, what is the purpose of a skip navigation link?",
    Answer:
      "It helps visually impaired users to skip to the main content of a site.",
    Distractors: [
      "It serves as a link to the website's home page.",

      "It allows users to skip directly to the website's contact page.",
      "It provides a link to download a screen reader application."
    ],
    Explanation:
      "A skip navigation link allows visually impaired users to bypass the main navigation links and jump directly to the main content of a site.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question:
      "What are the four broad guidelines of web accessibility that address different aspects of usability and inclusivity?",
    Answer: "Perceivable, Operable, Understandable, Robust.",
    Distractors: [
      "Responsive, Mobile-Friendly, Fast-Loading and Secure.",
      "Content, Design, Interaction and Navigation.",
      "Productivity, Accessibility, Scalability and Visual."
    ],
    Explanation:
      "The four broad guidelines of web accessibility are Perceivable, Operable, Understandable, Robust. They help ensure that web content is accessible to all users, including those with disabilities",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following is not the way to fix web accessibility errors?",
    Answer: "Changing document color",
    Distractors: [
      "Updating low contrast text",
      "Adding missing alternative text for images",
      "Fix empty links"
    ],
    Explanation:
      "Fixing empty links, adding missing alternative text for images, updating low contrast text are some common ways to fix accessibility errors",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "When was version 1.0 of the Web Content Accessibility Guidelines (WCAG) released?",
    Answer: "1999",
    Distractors: ["2008", "1995", "2005"],
    Explanation:
      "WCAG version 1.0 was published on May 5, 1999 and was a total game-changer for web accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-and-checklist/"
  },
  {
    Question: "Which of the following is NOT an example of web accessibility?",
    Answer: "Programming Robots using Machine Learning",
    Distractors: [
      "Alternative Text for Images",
      "Keyboard Input",
      "Transcripts for Audio"
    ],
    Explanation:
      "All of the above are current examples of web accessibility, except for Machine Learning, which may become a future trend.",
    Link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/#examples"
  },
  {
    Question:
      "Which type of color combinations should be avoided to improve web accessibility for colorblind users?",
    Answer: "Red and green combinations.",
    Distractors: [
      "Black and white combinations.",
      "Blue and yellow combinations.",
      "Purple and orange combinations."
    ],
    Explanation:
      "Red and green are problematic for colorblind users, so it's important to choose color combinations that are distinguishable by everyone.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question:
      "Which web accessibility guideline ensures that website navigation can be operated via a keyboard?",
    Answer: "Keyboard Accessibility",
    Distractors: ["Image Alt Text", "Audio Descriptions", "Video Captions"],
    Explanation:
      "Keyboard accessibility ensures that users can navigate and interact with a website using only a keyboard.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "Why is it important to provide captions for videos on a website?",
    Answer:
      "To make video content accessible to individuals with hearing impairments.",
    Distractors: [
      "To add decorative elements to videos.",
      "To increase the video's play speed.",
      "To hide the video from users."
    ],
    Explanation:
      "Captions are essential for conveying spoken content to those who cannot hear it.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "How can a web developer improve the keyboard accessibility of a website?",
    Answer:
      "By ensuring all interactive elements can be accessed and used via the keyboard alone.",
    Distractors: [
      "By removing all interactive elements from the website.",
      "By increasing the size of interactive elements.",
      "By using more images on the website."
    ],
    Explanation:
      "Keyboard accessibility means that users can perform all actions using just the keyboard, without a mouse or other pointing device.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the role of focus indicators in web accessibility?",
    Answer:
      "To provide a visual indication of where keyboard focus is on the page.",
    Distractors: [
      "To highlight decorative elements on the page.",
      "To disable keyboard navigation.",
      "To change the font size of text content."
    ],
    Explanation:
      "Focus indicators help users understand where they are on a web page and improve navigation for keyboard users.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of an accessible form in web accessibility?",
    Answer:
      "To ensure that forms are usable by individuals with disabilities, including those who use screen readers or keyboard navigation.",
    Distractors: [
      "To collect personal information from users.",
      "To create complex visual effects on a web page.",
      "To prevent users from submitting forms."
    ],
    Explanation:
      "Accessible forms are designed to be usable by everyone, including those with disabilities.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "What is the purpose of text resizing options in web accessibility?",
    Answer:
      "To allow users to adjust text size to meet their specific needs and preferences.",
    Distractors: [
      "To change the website's background color.",
      "To add animated transitions to the website.",
      "To hide the website's navigation menu."
    ],
    Explanation:
      "Text resizing options improve accessibility by accommodating users with varying visual impairments.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of ARIA landmarks in web accessibility?",
    Answer:
      "To provide a way for screen readers to navigate and understand the structure of a web page.",
    Distractors: [
      "To create colorful graphics on the page.",
      "To insert advertising banners on the page.",
      "To change the page's font style."
    ],
    Explanation:
      "ARIA landmarks help screen reader users quickly locate and understand different sections of a web page.",
    Link: "https://www.w3.org/WAI/standards-guidelines/aria/"
  },
  {
    Question:
      "Why is it important to provide accessible alternatives for multimedia content?",
    Answer:
      "To ensure that all users, including those with disabilities, can access and understand the content.",
    Distractors: [
      "To increase the number of multimedia elements on a website.",
      "To add visual effects to multimedia content.",
      "To reduce the page load time."
    ],
    Explanation:
      "Accessible alternatives like captions and audio descriptions make multimedia content inclusive.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the role of screen readers in web accessibility?",
    Answer:
      "To provide audible representation of on-screen content for individuals with visual impairments.",
    Distractors: [
      "To display visual content on a screen.",
      "To make text content larger on a screen.",
      "To increase the website's loading speed."
    ],
    Explanation:
      "Screen readers are essential for making digital content accessible to blind and visually impaired users.",
    Link: "https://en.wikipedia.org/wiki/Screen_reader"
  },
  {
    Question:
      "What are the WCAG guidelines, and why are they important for web accessibility?",
    Answer:
      "WCAG (Web Content Accessibility Guidelines) provide a set of international standards for web accessibility, ensuring that digital content is accessible to a wide range of users, including those with disabilities.",
    Distractors: [
      "WCAG guidelines are only for mobile app development.",
      "WCAG guidelines focus on website aesthetics.",
      "WCAG guidelines are only relevant for small businesses."
    ],
    Explanation:
      "WCAG guidelines are globally recognized and help create web content that is accessible and usable for individuals with disabilities, enhancing inclusivity on the web.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "Which of the following screen readers is available as licensed software for Windows?",
    Answer: "JAWS (Job Access With Speech)",
    Distractors: [
      "NVDA(Non Visual Desktop Access)",
      "a11y.project",
      "ChromeVox"
    ],
    Explanation:
      "JAWS (Job Access With Speech) is widely used screen reading software developed by Freedom Scientific, which is available as licensed software for Windows.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is it important for developers to prioritize semantic HTML when building websites?",
    Answer:
      "It helps screen readers and other assistive technologies to interpret the content accurately.",
    Distractors: [
      "It enhances the visual appeal of the website for users with normal vision.",

      "It minimizes the overall file size and improves website loading speed.",

      "It allows for more complex styling options using CSS and JavaScript."
    ],
    Explanation:
      "By prioritizing semantic HTML, developers enable better accessibility for users who rely on assistive technologies, ensuring accurate interpretation of website content for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  },
  {
    Question:
      "How can developers ensure the accessibility of forms on their websites?",
    Answer:
      "By using proper labeling and grouping of form elements, and providing clear instructions for users.",
    Distractors: [
      "By minimizing the number of form fields to streamline the user experience.",

      "By implementing complex validation rules to ensure data accuracy.",

      "By embedding interactive multimedia elements within the form for engagement."
    ],
    Explanation:
      "Accessibility in web forms can be achieved by implementing clear labels, grouping related fields, and offering explicit instructions, facilitating easy navigation and understanding for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  },
  {
    Question:
      "What is the significance of providing descriptive alt texts for images in web development?",
    Answer:
      "It enables users with visual impairments to understand the content and context of the images.",
    Distractors: [
      "It enhances the visual appeal of the website and encourages user engagement.",
      "It prevents unauthorized use of images by other websites.",

      "It improves search engine optimization (SEO) and boosts website visibility."
    ],
    Explanation:
      "Descriptive alt texts for images ensure that users with visual impairments can comprehend the content of the images, fostering a comprehensive browsing experience for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  },
  {
    Question:
      "Which one of these has a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally?",
    Answer: "WCAG 2",
    Distractors: ["ARIA", "UAAG", "ATAG"],
    Explanation:
      "WCAG 2 provides a comprehensive set of guidelines to ensure web content is accessible to all users, including those with disabilities. It is widely recognized and adopted globally to create a consistent and universal standard for web accessibility.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "Which specification enhances the accessibility of dynamic web content and user interface components developed with JavaScript, HTML, and CSS?",
    Answer: "WAI-ARIA",
    Distractors: ["WEB-DEI", "WAI-Adapt", "WCAG 3"],
    Explanation:
      "WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It's a set of technical specifications developed by W3C to improve the accessibility of dynamic web content and advanced user interface components.",
    Link: "https://www.w3.org/WAI/standards-guidelines/aria/"
  }
];

export default accessibilityQuiz;

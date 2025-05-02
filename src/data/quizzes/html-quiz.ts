const htmlQuiz = {
  category: 'HTML',
  questions: [
    {
      question: 'In HTML, which of the following is the correct way for showing how to import an external script?',
      answer: `<script src='index.js'></script>`,
      distractors: [
        `<script add='index.js'></script>`,
        `<script adding-js='index.js'></script>`,
        `<script js='index.js'></script>`
      ],
      explanation: 'If you want to show how to import an external script using the script element, then you will need to use the following syntax: <script src=\'index.js\'></script>',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script'
    },
    {
      question: 'In HTML, which tag is used to insert a favicon?',
      answer: '<link>',
      distractors: ['<fav>', '<favicon>', '<icon>'],
      explanation: 'The link tag is used to add a favicon to a website.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link'
    },
    {
      question: 'Which of the following is the correct way of creating an anchor element in HTML?',
      answer: '<a href= \'www.freecodecamp.org\'> freeCodeCamp </a>',
      distractors: [
        '<a>www.freecodecamp.org <freeCodeCamp /a>',
        '<a href=\'www.freecodecamp.org\' freeCodeCamp /a>',
        '<a link=\'www.freecodecamp.org\' freeCodeCamp > </a>'
      ],
      explanation: 'In HTML, an anchor element is used to create links on a a web page. Here is the correct syntax: <a href= \'www.freecodecamp.org\'> freeCodeCamp </a>',
      link: 'https://www.freecodecamp.org/news/the-html-a-tag-anchor-tag-example-code/'
    },
    {
      question: 'What is meant by an empty tag in HTML?',
      answer: 'An empty tag doesn\'t require a closing tag',
      distractors: [
        'There is no such concept of empty tag in HTML',
        'An empty tag cannot having any content within it',
        'None of these'
      ],
      explanation: 'In HTML, empty tags are those tags that don\'t require a closing tag.',
      link: 'https://www.freecodecamp.org/news/empty-and-blank-53b9e96151cd/'
    },
    {
      question: 'Which HTML element is used to link to a 3rd party JavaScript library and make it available on your page?',
      answer: '<script>',
      distractors: ['<input>', '<head>', '<html>'],
      explanation: 'You can use the <script> element to link to an external 3rd party JavaScript library and connect to its API functionality.',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs'
    },
    {
      question: 'How many Section Heading elements are there in HTML5?',
      answer: '6',
      distractors: ['4', '8', '1'],
      explanation: 'There are 6 Section Heading elements in HTML5.',
      link: 'https://youtu.be/kUMe1FH4CHE?t=1219'
    },
    {
      question: 'What is the font-size of the h1 heading tag?',
      answer: '2em',
      distractors: ['3em', '3.4em', '2.7em'],
      explanation: 'The font-size of h1 element is 2em by default',
      link: 'https://www.freecodecamp.org/news/how-to-change-text-size-in-html/'
    },
    {
      question: 'How is the document type initialized in HTML5?',
      answer: '<!DOCTYPE HTML>',
      distractors: ['</DOCTYPE HTML>', '</DOCTYPE>', '<!HTML>'],
      explanation: '<!DOCTYPE HTML> is the DOCTYPE declaration for HTML5.',
      link: 'https://www.freecodecamp.org/news/html5-tags-you-might-not-know/'
    },
    {
      question: 'In HTML, what is the difference between the <div> and the <span> tag?',
      answer: '<div> is used where a generic block-level tag is needed, while <span> is used where a generic inline tag is needed.',
      distractors: [
        '<div> is used where a generic inline tag is needed, while <span> is used where a generic block-level tag is needed.',
        '<div> is used for minor divisions on a page, while <span> is used to span across a row.',
        '<div> is the industry standard default tag, but you could use <span> if you prefer.'
      ],
      explanation: ' div is a block-level element, while span is an inline element. Block-level elements start on a new line and take up the full width available (stretches out to the left and right as far as it can). Inline elements sit within surrounding content (does not start on a new line and only takes up as much width as necessary).',
      link: 'https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/'
    },
    {
      question: 'In HTML, what is the default method for form submission?',
      answer: 'GET',
      distractors: ['POST', 'PUT', 'SUBMIT'],
      explanation: 'If a method attribute is not used in the form, it is automatically assumed that the user wants to use the GET method, because it\'s the default method.',
      link: 'https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/'
    },
    {
      question: 'In HTML, which of the following choices is not a legal type attribute for the <input> tag?',
      answer: '<input type=\'num\'>',
      distractors: [`<input type='week'>`, `<input type='tel'>`, `<input type='color'>`],
      explanation: 'The <input> tag is used to create an input field in an HTML form. The type attribute specifies the type of input field to display. type=\'num\' is not a valid attribute for the input tag.',
      link: 'https://www.freecodecamp.org/news/text-box-in-html-the-input-field-html-tag/'
    },
    {
      question: 'In HTML, what is the primary purpose of the <canvas> tag?',
      answer: 'It allows drawing on a bitmap via JavaScript.',
      distractors: [
        'It displays annotated images.',
        'It allows vector images to be rendered on the webpage.',
        'It allows raster images to be rendered on the webpage.'
      ],
      explanation: 'The <canvas> tag is used to draw graphics on a webpage using JavaScript. It is a container for graphics, and does not actually render anything itself.',
      link: 'https://www.freecodecamp.org/news/full-overview-of-the-html-canvas-6354216fba8d/'
    },
    {
      question: 'In HTML, what is the <address> tag?',
      answer: 'a section to place address information',
      distractors: ['a place for links', 'a place for images', 'a place for table data'],
      explanation: 'The address tag is used as a section to place address information',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'In HTML, what is the <article> tag?',
      answer: 'A tag used for content that is independent from the main content of the HTML page',
      distractors: ['A tag used for quotes', 'A tag used for code', 'A tag used for links'],
      explanation: 'The article element is used for content that is independent from the main content of the HTML page',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the character entity for the left single quote symbol?',
      answer: '&lsquo;',
      distractors: ['&rsquo;', '&leftquo;', '&lsquotes;'],
      explanation: 'The &lsquo; character entity is used to display the left single quote symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what is the element tag that shows content added to the document?',
      answer: '<ins>',
      distractors: ['<map>', '<mark>', '<dd>'],
      explanation: 'The ins tag shows content added to the document',
      link: 'https://devdocs.io/html/element/ins'
    },
    {
      question: 'In HTML, what does the title attribute do in the img tag?',
      answer: 'it provides additional information about the image',
      distractors: [
        'it creates a title above the img tag',
        'it creates a title below the img tag',
        'it creates a title to the left of the img tag'
      ],
      explanation: 'The title attribute can be used to provide additional information about the image',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, what does the src attribute do in the img tag?',
      answer: 'Represents the source for the image',
      distractors: [
        'Provides descriptive text for the image',
        'Provides the height of the image',
        'Provides the width of the image'
      ],
      explanation: 'The src attribute represents the source for the image so the browser knows where to locate it.',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, how do you write a comment?',
      answer: '<!-- I am a comment! -->',
      distractors: ['X!--I am a comment!--X', 'V!--I am a comment!--V', '>!--I am a comment!--<'],
      explanation: 'The syntax for an HTML tag is <!-- I am a comment! -->',
      link: 'https://www.freecodecamp.org/news/html-comment-how-to-comment-out-a-line-or-tag-in-html/'
    },
    {
      question: 'In HTML, which one of these methods is NOT used to select DOM elements?',
      answer: 'typeof',
      distractors: ['getElementById', 'querySelector', 'querySelectorAll'],
      explanation: 'There are a few methods to select elements from the HTML document including .querySelector(), .querySelectorAll() and .getElementById().',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In HTML, what tag is used to target specific inline content such as text?',
      answer: '<span>',
      distractors: ['<div>', '<s>', '<i>'],
      explanation: 'The <span> tag is used to target specific inline content such as text. This is helpful when you want to style only certain parts of the text.',
      link: 'https://www.freecodecamp.org/news/span-html-how-to-use-the-span-tag-with-css/'
    },
    {
      question: 'In HTML, what is metadata in an HTML file?',
      answer: 'Information about the webpage that is not directly displayed.',
      distractors: [
        'Information about the users of the website',
        'Information about the server that hosts the webpage.',
        'Information about the version of CSS being used.'
      ],
      explanation: 'Metadata is information about the webpage that is not directly displayed. This includes information about its title, scripts, stylesheets, and author information.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head'
    },
    {
      question: 'In HTML, what are the body tags?',
      answer: 'defines the body content for the HTML document',
      distractors: [
        'defines the header content for the HTML document',
        'defines the image content for the HTML document',
        'defines the table content for the HTML document'
      ],
      explanation: 'The body tags defines the body content for the HTML document',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what is the <td> tag?',
      answer: 'An element used to create data cells in a table',
      distractors: [
        'A tag that represents an abbreviation',
        'A tag used to create word breaks',
        'A tag used to create a horizontal line'
      ],
      explanation: 'The <td> tag is an element used to create data cells in a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what does the details element do?',
      answer: 'displays information when the element is toggled to the open state',
      distractors: [
        'renders text from right to left',
        'overrides the current direction and renders the text in a new direction',
        'provides descriptive text for the abbr tag'
      ],
      explanation: 'The details tag displays information when the element is toggled to the open state',
      link: 'https://devdocs.io/html/element/details'
    },
    {
      question: 'In HTML, what attribute can you add to <input> to match a pattern with a regular expression?',
      answer: 'pattern',
      distractors: ['regex', 'match', 'find'],
      explanation: 'The pattern attribute is used to check for a pattern in a text field. You can assign a regular expression to this attribute to define the pattern.',
      link: 'https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/'
    },

    {
      question: 'In HTML, what does the size attribute do in the select tag?',
      answer: 'sets the number of options shown on default',
      distractors: [
        'sets the width of the select tag',
        'sets the height of the select tag',
        'sets the width and height of the select tag'
      ],
      explanation: 'The size attribute sets the number of options shown on default inside the select dropdown menu',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'In HTML, which value of the target attribute opens a link in a new tab?',
      answer: '_blank',
      distractors: ['_parent', '_self', '_top'],
      explanation: 'By default the browser opens links in the same tab. You can add the target attribute to the opening <a> tag with the value _blank to open the link in a new tab.',
      link: 'https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/'
    },
    {
      question: 'In HTML, what tag is used for creating a hyperlink?',
      answer: '<a>',
      distractors: ['<hyperlink>', '<href>', '<link>'],
      explanation: 'You create links by using an opening <a> and closing </a> tag.',
      link: 'https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/'
    },
    {
      question: 'In HTML, what is the name of the attribute that allows you to set an element\'s tab position?',
      answer: 'tabindex',
      distractors: ['style', 'hover', 'name'],
      explanation: 'You can use the tabindex attribute to set an element\'s tab position',
      link: 'https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/'
    },

    {
      question: 'In HTML, which tag is used to represent the main content of a website?',
      answer: '<main>',
      distractors: ['<dom>', '<content>', '<con>'],
      explanation: 'The <main> tag is used in HTML to represent the dominant content of a website.',
      link: 'https://devdocs.io/html/element/main'
    },
    {
      question: 'In HTML, which tag is used to create a description list?',
      answer: '<dl>',
      distractors: ['<del>', '<des>', '<d>'],
      explanation: 'The <dl> tag is used to create a description list in HTML.',
      link: 'https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/'
    },
    {
      question: 'In HTML, what is a div tag?',
      answer: 'A generic block level container for grouping content',
      distractors: [
        'A container used to only group images',
        'A container used to only group headings',
        'A container used to only group code elements'
      ],
      explanation: 'The div tag is a generic container for grouping content in the HTML page',
      link: 'https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/'
    },
    {
      question: 'In HTML, what are the head tags?',
      answer: 'a tag that contains metadata for a website',
      distractors: [
        'a tag that contains table cells for a table',
        'a tag that contains header elements',
        'a tag that contains navigation links'
      ],
      explanation: 'The head tags contain metadata including title and stylesheets for a website',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what attribute can you add to <input> to define a range of valid values for the user input?',
      answer: 'type="range"',
      distractors: ['type="r"', 'type="maxmin"', 'type="number"'],
      explanation: 'The type="range" attribute is used to create an input field that takes a numerical value within a certain range.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range'
    },
    {
      question: 'In HTML, what is the character entity for the trademark symbol?',
      answer: '&trade;',
      distractors: ['&trademark;', '&tmark;', '&trademk;'],
      explanation: 'The &trade; character entity is used to display the trademark symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what are the html tags?',
      answer: 'root element that contains all other HTML tags',
      distractors: [
        'an element that only contains all paragraph tags',
        'an element that only contains all image tags',
        'an element that only contains anchor tags'
      ],
      explanation: 'The html tag is the root level element that contains all of the other HTML elements',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what tag is used to create a form?',
      answer: '<form>',
      distractors: ['<f>', '<th>', '<table>'],
      explanation: 'The <form> tag is used to create a form. ',
      link: 'https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/'
    },
    {
      question: 'In HTML, what is the type attribute in the link tag?',
      answer: 'describes the type of content for the linked document',
      distractors: [
        'provides descriptive text for an img',
        'opens up the link tag in another browser window',
        'provides the width and height for a link tag'
      ],
      explanation: 'The type attribute describes the type of content for the linked document',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'In HTML, what is the mark element?',
      answer: 'An element used to highlight text',
      distractors: [
        'A tag used to create an ordered list',
        'A tag used to create quotes',
        'A tag used to create headings'
      ],
      explanation: 'The mark element is used to highlight text',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what attribute can you add to <input> to create a checkbox?',
      answer: 'type="checkbox"',
      distractors: ['type="c"', 'type="box"', 'type="form"'],
      explanation: 'The type="checkbox" attribute is used to create a checkbox in HTML.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox'
    },
    {
      question: 'In HTML, what element is a generic container for other HTML elements?',
      answer: '<div>',
      distractors: ['<p>', '<a>', '<img>'],
      explanation: 'A div is the HTML element that serves as a generic container for other HTML elements.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div'
    },
    {
      question: 'What does HTML stand for?',
      answer: 'HyperText Markup Language',
      distractors: [
        'Hyper Text Marked Language',
        'Hyper Text Marked Links',
        'Hyper Text Machine Language'
      ],
      explanation: 'HTML stands for HyperText Markup Language',
      link: 'https://www.freecodecamp.org/news/html-crash-course/'
    },
    {
      question: 'In HTML, which description is NOT an appropriate use for the <i> tag?',
      answer: 'used to place emphasis on a word or span of text',
      distractors: [
        'taxonomic descriptions',
        `to show someone's thoughts`,
        'to mark phrases in a different language'
      ],
      explanation: 'The <i> tag can be used to mark phrases in a different language, show someone\'s thoughts, or for taxonomic descriptions',
      link: 'https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/'
    },
    {
      question: 'In HTML, what is the correct code for linking a CSS stylesheet to an HTML file?',
      answer: '<link rel="stylesheet" src="style.css">',
      distractors: [
        '<anchor rel="stylesheet" src="style.css">',
        '<links rel="stylesheet" src="style.css"></links>',
        '<a rel="stylesheet" src="style.css"></a>'
      ],
      explanation: 'The <link> tag is used to link your CSS stylesheet to your HTML file.',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'In HTML, which element contains the select tag?',
      answer: 'form tag',
      distractors: ['anchor tag', 'img tag', 'footer tag'],
      explanation: 'The select tag is nested inside the form tag so the data can be sent to the server when the form is submitted.',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'In HTML, what tag is used to italicize text?',
      answer: '<i>',
      distractors: ['<b>', '<span>', '<li>'],
      explanation: 'The <i> tag displays text in italic.',
      link: 'https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/'
    },
    {
      question: 'In HTML, what is an aside element?',
      answer: 'An HTML element typically used for sidebar information',
      distractors: [
        'An HTML element typically used for footer information',
        'An HTML element typically used for header information',
        'An HTML element typically used for links'
      ],
      explanation: 'An aside is an HTML element typically used for sidebar information',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the name of the element that connects content to a machine-readable translation?',
      answer: '<data>',
      distractors: ['<del>', '<dd>', '<dt>'],
      explanation: 'The <data> element is used to connect content to a machine-readable translation.',
      link: 'https://devdocs.io/html/element/data'
    },
    {
      question: 'In HTML, which attribute is used in the input element to create a checkbox?',
      answer: 'type="checkbox"',
      distractors: ['type="radio"', 'type="check"', 'type="button"'],
      explanation: 'To create a checkbox, you must add type="checkbox" to the <input> tag.',
      link: 'https://devdocs.io/html/element/input/checkbox'
    },
    {
      question: 'What is a character entity?',
      answer: 'Code used to display reserved HTML characters on the page.',
      distractors: [
        'Code used to change the color for HTML characters.',
        'Code used to change the font for HTML characters.',
        'Code used to change the width of HTML characters.'
      ],
      explanation: 'Character entities allow you to display reserved HTML characters in your document.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, what is the character entity for the left double quote symbol?',
      answer: '&ldquo;',
      distractors: ['&leftdouble;', '&ldquotes;', '&ldoublequo;'],
      explanation: 'The &ldquo; character entity is used to display the left double quote symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, it is recommended to write HTML tags in...',
      answer: 'Lowercase',
      distractors: ['Uppercase', 'camelCase', 'snake_case'],
      explanation: 'It is recommended to write HTML tags in lowercase.',
      link: 'https://www.freecodecamp.org/news/the-html-handbook/'
    },
    {
      question: 'In HTML, what does the <dl> tag stand for?',
      answer: 'Description List',
      distractors: ['Data List', 'Dialog List', 'Details List'],
      explanation: 'The <dl> tag stands for Description List and is commonly used in glossaries',
      link: 'https://devdocs.io/html/element/dl'
    },
    {
      question: 'In HTML, what is the name of the element used to draw graphics and animations on the page?',
      answer: '<canvas>',
      distractors: ['<bdo>', '<table>', '<big>'],
      explanation: 'The <canvas> element is used to draw graphics and animations on the page.',
      link: 'https://devdocs.io/html/element/canvas'
    },
    {
      question: 'In HTML, what tag is used to create an unordered (bulleted) list?',
      answer: '<ul>',
      distractors: ['<ol>', '<li>', '<a>'],
      explanation: ' The <ul> tag is used to create an unordered list. Within the <ul> and </ul> tags, you use the <li> and </li> tags, to create individual list items.',
      link: 'https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/'
    },
    {
      question: 'In HTML, what is the caption tag in a table?',
      answer: 'An element used to create captions for a table',
      distractors: [
        'An element used to create images in a table',
        'An element used to create links in a table',
        'A element used to create headings in a table'
      ],
      explanation: 'The caption tag is an element used to create captions for a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what tag is used to create a column (cell) in a table?',
      answer: '<td>',
      distractors: ['<table>', '<tcol>', '<col>'],
      explanation: 'The <td> tag is used to create a column (cell) in a table.',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what tag is used to embed audio into a document?',
      answer: '<audio>',
      distractors: ['<video>', '<sound>', '<mp3>'],
      explanation: 'The <audio> tag is used to embed audio into a document. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio'
    },
    {
      question: 'In HTML, what is the name of the tag nested inside the select tag?',
      answer: 'option tag',
      distractors: ['h1 tag', 'code tag', 'aside tag'],
      explanation: 'The option tag is nested inside the select tag and it serves to provide options for the dropdown menu.',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'In HTML, what is the semantic meaning behind the <i> tag?',
      answer: 'span of text that represents a change in mood or quality of text',
      distractors: [
        'block of text used to highlight misspelled words',
        'span of text used to signal high importance',
        'block of text used to represent the main content of the HTML page'
      ],
      explanation: 'The <i> tag is a span of text that represents a change in mood or quality of text',
      link: 'https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/'
    },
    {
      question: 'What is an HTML 5 boilerplate?',
      answer: 'block of code you use as a starter template for any HTML document',
      distractors: [
        'a block of code that groups images',
        'a block of code that groups links',
        'a block of code that groups forms'
      ],
      explanation: 'An HTML 5 boilerplate is a block of code you use as a starter template for any HTML document',
      link: 'https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/'
    },
    {
      question: 'In HTML, what is the character entity for double quotes?',
      answer: '&quot;',
      distractors: ['&quotes;', '&doublequot;', '&dquot;'],
      explanation: 'The &quot; character entity is used to display double quotes in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what is the character entity for the degree symbol?',
      answer: '&deg;',
      distractors: ['&degree;', '&d;', '&dg;'],
      explanation: 'The &deg; character entity is used to display the degree symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what makes up an element?',
      answer: 'The opening tag, any attributes, text, or other content in between, and the closing tag',
      distractors: ['Just the closing tag', 'Just the closing tag and text content', 'Just the opening tag'],
      explanation: 'The terms elements and tags are used interchangeably. Tags consist of left and right angle brackets ( < and >) and often come in pairs, with an opening and closing one. Elements have an opening tag and a closing tag, attributes that go inside the starting tag and text content (and possibly other elements) in between the opening and closing tag. So, an element refers to the whole thing.',
      link: 'https://www.freecodecamp.org/news/the-html-handbook/#html-basics'
    },
    {
      question: 'In HTML, what attribute should you add to set a minimum value for a numerical <input> field?',
      answer: 'min',
      distractors: ['minimum', 'max', 'bottom'],
      explanation: 'The min attribute is used to set a minimum value allowed for user input in a numerical input field.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes'
    },
    {
      question: 'In HTML, what are meta tags?',
      answer: 'defines metadata for the HTML document',
      distractors: [
        'defines the number of elements in the HTML document',
        'defines the number of img tags in the HTML document',
        'defines the number of p tags in the HTML document'
      ],
      explanation: 'The meta tags define metadata for the HTML document',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what is the character entity for the Euro sign?',
      answer: '&euro;',
      distractors: ['&esign;', '&eurosign;', '&eu;'],
      explanation: 'The &euro; character entity is used to display the Euro sign in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what is a colspan attribute in a table?',
      answer: 'Represents the number of columns a cell should span in a table',
      distractors: [
        'Represents the number of rows a cell should span in a table',
        'Represents the number of links in a table',
        'Represents the number of images in a table'
      ],
      explanation: 'The colspan attribute represents the number of columns a cell should span in a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what attribute should you add to set a maximum value for a numerical <input> field?',
      answer: 'max',
      distractors: ['maximum', 'min', 'top'],
      explanation: 'The max attribute is used to set a maximum value allowed for user input in a numerical input field.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes'
    },
    {
      question: 'In HTML, which tag is used to create an ordered list?',
      answer: '<ol>',
      distractors: ['<ul>', '<img>', '<dl>'],
      explanation: 'The <ol> tag is used to create an ordered list in HTML.',
      link: 'https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/'
    },
    {
      question: 'In HTML, what attribute should you add to the <input> element to create a radio button?',
      answer: 'type="radio"',
      distractors: ['type="checkbox"', 'type="check"', 'type="button"'],
      explanation: 'To create a radio button, you must add type="radio" to the <input> tag.',
      link: 'https://devdocs.io/html/element/input/radio'
    },
    {
      question: 'In HTML, what tag is used to create a table?',
      answer: '<table>',
      distractors: ['<t>', '<tbl>', '<ta>'],
      explanation: 'The <table> tag is used to create a table in HTML.',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what is the name of the element used to show that content was deleted from the document?',
      answer: '<del>',
      distractors: ['<figure>', '<embed>', '<em>'],
      explanation: 'The <del> tag is used to show that content was deleted from the document.',
      link: 'https://devdocs.io/html/element/del'
    },
    {
      question: 'In HTML, which tag is used to represent the footer for a table?',
      answer: '<tfoot>',
      distractors: ['<tfooter>', '<tfooting>', '<tfoots>'],
      explanation: 'The <tfoot> tag is used to represent the footer content for an HTML table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, which one is NOT an attribute for the <select> tag?',
      answer: 'src',
      distractors: ['name', 'multiple', 'required'],
      explanation: 'The <select> tag can have the following attributes: name, multiple, required, size, disabled and autofocus.',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'In HTML, which tag represents a thematic break (horizontal line) element?',
      answer: '<hr>',
      distractors: ['<br>', '<line>', '<hor>'],
      explanation: 'The <hr> tag is used to represent a thematic break (horizontal rule) element.',
      link: 'https://devdocs.io/html/element/hr'
    },
    {
      question: 'In HTML, what is a span tag?',
      answer: 'A generic inline container for grouping content',
      distractors: [
        'A container used to only group footer links',
        'A container used to only header content',
        'A container used to only group navigation links'
      ],
      explanation: 'A span tag is a generic inline container for grouping content in the HTML page',
      link: 'https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/'
    },
    {
      question: 'In HTML, what is the header element?',
      answer: 'A tag used to group introductory content including navigation links',
      distractors: [
        'A tag used to group comment tags',
        'A tag used to group block quotes',
        'A tag used to group figure elements'
      ],
      explanation: 'The header element is a tag used to group introductory content including navigation links',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },

    {
      question: 'What HTML tag is used to create a row in a table?',
      answer: '<tr>',
      distractors: ['<trow>', '<th>', '<td>'],
      explanation: 'The <tr> tag is used to create a row in a table.',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, how do you create a button using the <input> tag?',
      answer: '<input type="button" value="Sample Button" />',
      distractors: [
        '<input type="checkbox" value="Sample Button" />',
        '<input type="date" value="Sample Button" />',
        '<input type="color" value="Sample Button" />'
      ],
      explanation: 'You can create a button using the <input> tag and setting the type attribute to "button".',
      link: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/'
    },
    {
      question: 'In HTML, what is the main element?',
      answer: 'A tag used for the main content of the HTML page',
      distractors: [
        'A tag used only to contain images',
        'A tag used to only contain links',
        'A tag used to only contain paragraphs'
      ],
      explanation: 'The main element is a semantic tag used to contain all of the main content of the HTML page',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what does the bdo element do?',
      answer: 'overrides the current direction and renders the text in a new direction',
      distractors: [
        'highlights the current text',
        'deletes the current text',
        'only renders the text from left to right'
      ],
      explanation: 'The bdo element overrides the current direction and renders the text in a new direction',
      link: 'https://devdocs.io/html/element/bdo'
    },
    {
      question: 'What is a hyperlink?',
      answer: 'A web reference to data',
      distractors: ['A piece of computer hardware', 'An executable programming script', 'A website'],
      explanation: 'A hyperlink, also called a link or web link, contains an address for a destination and acts as a reference to data. A user can easily follow, jump to, and be directed to the destination by either clicking, tapping on, or hovering over the link.',
      link: 'https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/'
    },
    {
      question: 'In HTML, what does the datalist element do?',
      answer: 'provides a dropdown list of recommended options',
      distractors: [
        'Provides a list of image tags',
        'Provides a dropdown list of tables',
        'Provides a list of paragraphs'
      ],
      explanation: 'The datalist element contains option tags and provides a dropdown list of recommended options',
      link: 'https://devdocs.io/html/element/datalist'
    },
    {
      question: 'In HTML, what is the name of the element that creates an area inside an image map?',
      answer: '<area>',
      distractors: ['<img>', '<blink>', '<bdo>'],
      explanation: 'The <area> tag is used inside the <map> tag to create an area inside an image map with clickable areas.',
      link: 'https://devdocs.io/html/element/area'
    },
    {
      question: 'In HTML, how do you create a submit button?',
      answer: '<input type="submit" value="Submit" />',
      distractors: [
        '<input type="number" value="Submit" />',
        '<input type="email" value="Submit" />',
        '<input type="reset" value="Submit" />'
      ],
      explanation: 'You can create a submit button by using the <input> tag and setting the type attribute to "submit".',
      link: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/'
    },
    {
      question: 'In HTML, what does the <u> tag stand for?',
      answer: 'Unarticulated Annotation element',
      distractors: ['Unarticulated Anchor element', 'Unarticulated Aside element', 'Unarticulated Article element'],
      explanation: 'The <u> tag stands for Unarticulated Annotation element.',
      link: 'https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/'
    },
    {
      question: 'In HTML, what is the character entity for the right single quote symbol?',
      answer: '&rsquo;',
      distractors: ['&lsquo;', '&rightquo;', '&rsquote;'],
      explanation: 'The &rsquo; character entity is used to display the right single quote symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what is the name of the tag that adds emphasis on a word or span of text?',
      answer: '<em>',
      distractors: ['<p>', '<i>', '<hr>'],
      explanation: 'The <em> tag is used to add emphasis on a word or span of text in HTML.',
      link: 'https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/'
    },
    {
      question: 'In HTML, what is the small tag?',
      answer: 'a tag used to represent small text for side comments or copyright information',
      distractors: [
        'small text for div elements only',
        'small text for img tags only',
        'small text for h1 tags only'
      ],
      explanation: 'The small tag is used to represent small text for side comments or copyright information',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'In HTML, what is the <tr> tag?',
      answer: 'An element that represents a row in a table',
      distractors: [
        'A tag used to create buttons for your HTML page',
        'A container used to only group headings',
        'A tag used to group block quotes'
      ],
      explanation: 'The <tr> tag is an element that represents a row in a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what is the footer element?',
      answer: 'A tag used to specify the footer of the HTML document',
      distractors: [
        'A tag used to specify the header of the HTML document',
        'A tag used to specify a paragraph of the HTML document',
        'A tag used to specify the main content of the HTML document'
      ],
      explanation: 'The footer element is a tag used to specify the footer of the HTML document. This element will usually contain copyright information.',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, which tag is used to make inline text be displayed as superscript?',
      answer: '<sup>',
      distractors: ['<super>', '<sub>', '<s>'],
      explanation: 'The <sup> tag displays inline text as superscript.',
      link: 'https://devdocs.io/html/element/sup'
    },
    {
      question: 'In HTML, what is the name of the element used to create a dialog box?',
      answer: '<dialog>',
      distractors: ['<dialogging>', '<dt>', '<data>'],
      explanation: 'The <dialog> tag is used to create a dialog box.',
      link: 'https://devdocs.io/html/element/dialog'
    },
    {
      question: 'In HTML, what attribute is used when creating a hyperlink?',
      answer: 'href',
      distractors: ['src', 'id', 'style'],
      explanation: 'On the opening tag, <a>, an href attribute is added which is short for hypertext reference. The value of the href attribute specifies the desired URL you want the link to take users to when the link text is clicked.',
      link: 'https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/'
    },
    {
      question: 'In HTML, which one of these attributes does NOT work with the img tag?',
      answer: 'capture',
      distractors: ['src', 'alt', 'height'],
      explanation: 'The img tag can use a variety of attributes including src, alt, width, and height.',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, what tag is used to make text bold?',
      answer: '<b>',
      distractors: ['<br>', '<bold>', '<p>'],
      explanation: 'The <b> tag is used to make a portion of the text bold without carrying any special importance.',
      link: 'https://www.freecodecamp.org/news/html-bold-text-tutorial-how-to-use-the-b-tag/'
    },
    {
      question: 'In HTML, what does the alt attribute do in the img tag?',
      answer: 'It provides a description of the image',
      distractors: [
        'It provides the time when the image was taken',
        'It provides the source for the image',
        'It provides the dimensions for an image'
      ],
      explanation: 'The alt attribute provides a description of the image.',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, which tag is used to represent a set of navigation links?',
      answer: '<nav>',
      distractors: ['<navigation>', '<link>', '<navig>'],
      explanation: 'The <nav> tag is used to represent the main navigation functionality of a webpage.',
      link: 'https://www.freecodecamp.org/news/how-to-build-a-navigation-bar/'
    },
    {
      question: 'What does the <i> tag stand for?',
      answer: 'Idiomatic Text element',
      distractors: ['Inline Text element', 'Intent Text element', 'Inline Table element'],
      explanation: 'The <i> tag stands for Idiomatic Text element.',
      link: 'https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/'
    },
    {
      question: 'In HTML, which tag is used to represent the header for a table?',
      answer: '<thead>',
      distractors: ['<img>', '<tbody>', '<tfoot>'],
      explanation: 'The <thead> tag is used to represent the header of an HTML table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what is the blockquote tag?',
      answer: 'a block of text that represents a quote',
      distractors: [
        'a generic block container to hold other elements',
        'a generic inline element',
        'a caption for a figure element'
      ],
      explanation: 'The blockquote is a block of text that represents a quote',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'In HTML, what is the character entity for the right double quote symbol?',
      answer: '&rdquo;',
      distractors: ['&rdquotes;', '&rightdquo;', '&rdoublequo;'],
      explanation: 'The &rdquo; character entity is used to display the right double quote symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, what attribute can you add to <input> to create an input field for a password?',
      answer: 'type="password"',
      distractors: ['type="pass"', 'type="secret"', 'type="hide"'],
      explanation: 'The type="password" attribute is used to create an input field for a password (the characters will be hidden).',
      link: 'https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/'
    },
    {
      question: 'In HTML, what is the button tag?',
      answer: 'A tag used to create buttons for your HTML page',
      distractors: ['A tag used to create images', 'A tag used to create quotes', 'A tag used to create links'],
      explanation: 'The button tag is used to add buttons to your HTML page',
      link: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/'
    },
    {
      question: 'In HTML, what is the viewport meta tag?',
      answer: 'renders the width of the page to the width of the device\'s screen size.',
      distractors: [
        'sets the viewport for phones only',
        'sets the viewport for laptops only',
        'sets the viewport for 4k monitors'
      ],
      explanation: 'This tag renders the width of the page to the width of the device\'s screen size.',
      link: 'https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/'
    },

    {
      question: 'In HTML, what is the table tag?',
      answer: 'An element to create rows and columns of data in HTML',
      distractors: [
        'An element to embed sound in an HTML document',
        'An element to represent side comments',
        'An element used for a specific set of time'
      ],
      explanation: 'The table tag create rows and columns of data in HTML',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, how do you add a non-breaking space?',
      answer: '&nbsp;',
      distractors: ['&breakingspace;', '&nonbreaking;', '&n-b-s-p;'],
      explanation: 'You can use the &nbsp; entity to display the non-breaking space in HTML.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, what is the figcaption tag in HTML?',
      answer: 'a text description for the content inside the figure element',
      distractors: [
        'a caption for the table element',
        'a caption for the form element',
        'a caption for the div element'
      ],
      explanation: 'The figcaption is a text description for the content inside the figure element',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'In HTML, what does the <bdi> element stand for?',
      answer: 'Bidirectional Isolate',
      distractors: ['Biodecision Isolate', 'BiometicDirection Image', 'Biodirectional Inline'],
      explanation: 'The <bdi> element stands for Bidirectional Isolate.',
      link: 'https://devdocs.io/html/element/bdi'
    },
    {
      question: 'In HTML, what is the default value for the tabindex attribute?',
      answer: '0',
      distractors: ['12', '14', '7'],
      explanation: 'The default value for the tabindex attribute is 0',
      link: 'https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/'
    },
    {
      question: 'In HTML, what does the Doctype do?',
      answer: 'specifies the HTML version for the document',
      distractors: [
        'specifies the type of CSS used',
        'specifies the type of JavaScript used',
        'specifies the number of elements in the HTML document'
      ],
      explanation: 'The Doctype is used to specify the HTML version for the document',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what is a section element?',
      answer: 'A tag used to group related content into sections',
      distractors: ['A tag used to group images', 'A tag to group headings', 'A tag used to group links'],
      explanation: 'The section element is a tag used to group related content into sections',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the default styling for the <u> tag?',
      answer: 'Single underline',
      distractors: ['Line through', 'Line above the text', 'No line at all'],
      explanation: 'The default styling for the u tag is a single underline.',
      link: 'https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/'
    },
    {
      question: 'In HTML, what does X-UA-Compatible mean?',
      answer: 'specifies the document mode for Internet Explorer.',
      distractors: [
        'specifies the document mode for Google chrome',
        'specifies the document mode for Safari',
        'specifies the document mode for Brave'
      ],
      explanation: 'This <meta> tag specifies the document mode for Internet Explorer.',
      link: 'https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/'
    },
    {
      question: 'In HTML, what attribute can you add to <input> to create a submit button?',
      answer: 'type="submit"',
      distractors: ['type="send"', 'type="end"', 'type="receive"'],
      explanation: 'The type="submit" attribute is used to create a submit button in HTML.',
      link: 'https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/'
    },

    {
      question: 'What is semantic HTML?',
      answer: 'HTML tags that hold special meaning',
      distractors: [
        'generic HTML tags that hold no meaning',
        'tags that only hold special meaning for links',
        'tags that only hold special meaning for table tags'
      ],
      explanation: 'Semantic HTML tags are HTML elements that hold special meaning',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what is the range of values for the tabindex attribute?',
      answer: '0 to 32767',
      distractors: ['-9 to 30', '0 to 578', '-20 to 3000'],
      explanation: 'The tabindex attribute accepts a range of integers from 0 to 32767',
      link: 'https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/'
    },
    {
      question: 'In HTML, which tag is used to create an image?',
      answer: '<img>',
      distractors: ['<image>', '<i>', '<hr>'],
      explanation: 'The <img> tag is used to add images to a website.',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, what does the src attribute do in the link tag?',
      answer: 'tells the computer where to import the document',
      distractors: [
        'tells the computer where to export the document',
        'specifies the number of link tags in the HTML document',
        'specifies the number of anchor tags in the HTML document'
      ],
      explanation: 'The src attribute tells the computer where to import the document',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'In HTML, what tag is used to embed video?',
      answer: '<video>',
      distractors: ['<vid>', '<v>', '<player>'],
      explanation: 'The <video> tag is used to embed video in an HTML document.',
      link: 'https://www.freecodecamp.org/news/html5-video/'
    },
    {
      question: 'In HTML, what does the optgroup element do?',
      answer: 'groups option elements together in the select tag',
      distractors: [
        'groups labels together in the select tag',
        'groups form tags together',
        'groups inputs together in the form'
      ],
      explanation: 'The optgroup groups option elements together in the select tag',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'What is the main purpose of HTML in a website?',
      answer: 'Structure',
      distractors: ['Style', 'Functionality', 'Sound'],
      explanation: 'HTML defines the structure of the website. ',
      link: 'https://www.freecodecamp.org/news/html-crash-course/'
    },
    {
      question: 'In HTML, what is the <code> element?',
      answer: 'An HTML element used for displaying code snippets',
      distractors: [
        'An HTML element used for displaying images',
        'An HTML element used for displaying links',
        'An HTML element used for displaying paragraphs'
      ],
      explanation: 'The code element is used for displaying code snippets',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, which tag is used to make inline text be displayed as subscript?',
      answer: '<sub>',
      distractors: ['<subs>', '<s>', '<sup>'],
      explanation: 'The <sub> tag displays inline text as subscript.',
      link: 'https://devdocs.io/html/element/sub'
    },
    {
      question: 'In HTML, what tag is used to create a header in a table?',
      answer: '<th>',
      distractors: ['<header>', '<theader>', '<td>'],
      explanation: 'The <th> tag is used to create a header in a table.',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what is the blockquote element?',
      answer: 'A tag used to quote text from another source',
      distractors: [
        'A tag used to number quotes',
        'A tag used to style quotes',
        'A tag used to turn quotes into links'
      ],
      explanation: 'The blockquote element is used to quote text from another source',

      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the purpose of the rel attribute in the <link> tag?',
      answer: 'It shows the relationship between the HTML file and the linked document.',
      distractors: [
        'It defines the relationship between an <img> tag and <p> tag.',
        'It defines the relationship between a <table> tag and <td> tag.',
        'It defines the relationship between an <ul> tag and <li> tag.'
      ],
      explanation: 'The rel attribute is used to show the relationship between the linked document and the HTML file.',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'In HTML, what tag would you use to create a level 1 section heading? ',
      answer: '<h1>',
      distractors: [
        '<t1>',
        '<1h>',
        '<1H>'
      ],
      explanation: 'You can use the <h1> tag to create a level 1 section heading in HTML.',
      link: 'https://devdocs.io/html/element/heading_elements'
    },
    {
      question: 'In HTML, Which tag represents a line break element?',
      answer: '<br>',
      distractors: ['<hr>', '<break>', '<line>'],
      explanation: 'The <br> tag is used to represent a line break element.',
      link: 'https://www.freecodecamp.org/news/html-line-break-how-to-break-a-line-with-the-html-br-tag/'
    },
    {
      question: 'In HTML, which tag is used to represent the main body for a table?',
      answer: '<tbody>',
      distractors: ['<tmain>', '<content>', '<td>'],
      explanation: 'The <tbody> tag is used to represent the main content for an HTML table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what attribute can you add to a <video> tag to add the browser\'s default video controls to the embedded video?',
      answer: 'controls',
      distractors: ['control', 'c', 'basiccontrols'],
      explanation: 'The controls attribute adds the browser\'s basic video controls to the embedded video.',
      link: 'https://www.freecodecamp.org/news/html5-video/'
    },
    {
      question: 'In HTML, what is a rowspan attribute in a table?',
      answer: 'Represents the number of rows a cell should span in a table',
      distractors: [
        'Represents the number of columns a cell should span in a table',
        'Represents the number of headings in a table',
        'Represents the number of code elements in a table'
      ],
      explanation: 'The rowspan attribute represents the number of rows a cell should span in a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },

    {
      question: 'In HTML, what attribute is used to make an <input> field required?',
      answer: 'required',
      distractors: ['mandatory', 'must', 'fixed'],
      explanation: 'The required attribute is used to make an <input> field required to submit a form.',
      link: 'https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/'
    },
    {
      question: 'In HTML, what tag is used to represent an abbreviation or acronym?',
      answer: '<abbr>',
      distractors: ['<abr>', '<abbreviation>', '<acr>'],
      explanation: 'The <abbr> tag is used to represent abbreviations or acronyms in HTML.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr'
    },
    {
      question: 'In HTML, what is the character entity of the greater than symbol?',
      answer: '&gt;',
      distractors: ['&greaterthan;', '&greater;', '&gthan;'],
      explanation: 'You can use the &gt; entity to display a greater than symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, what is the character entity of the less than symbol?',
      answer: '&lt;',
      distractors: ['&lessthan;', '&less;', '&lthan;'],
      explanation: 'You can use the &lt; to display a less than symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, how is the title attribute used in the abbr tag?',
      answer: 'provides descriptive text for the abbr tag',
      distractors: ['provides links for the abbr tag', 'bolds the abbr tag', 'italicizes the abbr tag'],
      explanation: 'The title attribute provides descriptive text for the abbr tag',
      link: 'https://devdocs.io/html/element/abbr'
    },
    {
      question: 'In HTML, which tag supports mailto links?',
      answer: 'anchor tag',
      distractors: ['paragraph tag', 'script tag', 'img tag'],
      explanation: 'You can create a mailto link in the href value for an anchor tag',
      link: 'https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/'
    },
    {
      question: 'In HTML, how do you add two non-breaking spaces?',
      answer: '&ensp;',
      distractors: ['&twospaces;', '&e-n-s-p;', '&enspaces;'],
      explanation: 'You can use the &ensp; entity to display two non-breaking spaces in HTML.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, what tag is used to represent that a section quotes from another source?',
      answer: '<blockquote>',
      distractors: ['<quote>', '<q>', '<section>'],
      explanation: 'The <blockquote> tag is used to represent that a section quotes from another source.',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the title tag?',
      answer: 'defines the title for the HTML document',
      distractors: [
        'defines the subtitle for the HTML document',
        'displays the headings for the HTML document',
        'displays the paragraph tags for the HTML document'
      ],
      explanation: 'The title tag defines the title for the HTML document',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, what is the time tag?',
      answer: 'a tag used to represent the time and/or date',
      distractors: [
        'used to convert minutes to seconds',
        'used to convert seconds to milliseconds',
        'used to convert hours to minutes'
      ],
      explanation: 'The time tag is used to represent the time and/or date',
      link: 'https://www.freecodecamp.org/news/semantic-html5-elements/'
    },
    {
      question: 'In HTML, what is the syntax for creating a mailto link?',
      answer: '<a href="mailto:johndoe@fakeemail.com">Example mailto link</a>',
      distractors: [
        '<a name="mailto:johndoe@fakeemail.com">Example mailto link</a>',
        '<a src="mailto:johndoe@fakeemail.com">Example mailto link</a>',
        '<a link="mailto:johndoe@fakeemail.com">Example mailto link</a>'
      ],
      explanation: 'This is the correct syntax for a mailto link: <a href="mailto:johndoe@fakeemail.com">Example mailto link</a>',
      link: 'https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/'
    },
    {
      question: 'In HTML, What tag is used to add an external JavaScript file?',
      answer: '<script>',
      distractors: ['<link>', '<a>', '<js>'],
      explanation: 'The <script> tag is used to add a JavaScript file to an HTML file.',
      link: 'https://www.freecodecamp.org/news/link-javascript-to-html-with-the-src/'
    },
    {
      question: 'In HTML, what is the name of the element that specifies the base URL for all relative URLs in a document?',
      answer: '<base>',
      distractors: ['<bdi>', '<a>', '<p>'],
      explanation: 'The base tag specifies the base URL for all relative URLs in the document',
      link: 'https://devdocs.io/html/element/base'
    },
    {
      question: 'In HTML, what does the multiple attribute do in the select tag?',
      answer: 'allows the user to choose multiple options in the select tag',
      distractors: [
        'a way to add multiple select tags',
        'a way to add multiple option tags',
        'a way to add multiple link tags'
      ],
      explanation: 'The multiple attribute allows the user to choose multiple options in the select tag.',
      link: 'https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/'
    },
    {
      question: 'In HTML, what is the character entity for the copyright symbol?',
      answer: '&copy;',
      distractors: ['&copyright;', '&cright;', '&copyr;'],
      explanation: 'The &copy; character entity is used to display the copyright symbol in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'In HTML, which tag is used to make text bold and mark it as important text?',
      answer: '<strong>',
      distractors: ['<b>', '<em>', '<bold>'],
      explanation: 'The <strong> tag is used to make text bold and to indicate that the text is important.',
      link: 'https://devdocs.io/html/element/strong'
    },
    {
      question: 'In HTML, which one is NOT a supported format for the img tag?',
      answer: 'txt',
      distractors: ['png', 'WebP', 'jpeg'],
      explanation: 'The img tag can support many formats including WebP, JPEG and PNG.',
      link: 'https://www.freecodecamp.org/news/img-html-image-tag-tutorial/'
    },
    {
      question: 'In HTML, which tag is used to make text italic with emphasis on its content?',
      answer: '<em>',
      distractors: ['<i>', '<b>', '<italic>'],
      explanation: 'The <em> tag is used to make text italic with extra emphasis on its content.',
      link: 'https://devdocs.io/html/element/em'
    },
    {
      question: 'In HTML, what is the pre tag?',
      answer: 'a tag used for preformatted sections of text',
      distractors: [
        'small text for h1 tags only',
        'a generic block container to hold other elements',
        'a caption for the form element'
      ],
      explanation: 'The pre tag is used to display preformatted sections of text',
      link: 'https://www.freecodecamp.org/news/pre-tag-in-html-example-code/'
    },
    {
      question: 'In HTML, what is the nav element?',
      answer: 'A container for navigation links',
      distractors: ['A container for quotes', 'A container for paragraph tags', 'A container for headings'],
      explanation: 'The nav element is a semantic tag used to contain navigation links.',
      link: 'https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/'
    },
    {
      question: 'In HTML, what is the <th> tag?',
      answer: 'An element used to create table headings in a table',
      distractors: [
        'An element that represents a row in a table',
        'An element used to create data cells in a table',
        'A generic block level container for grouping content in a table'
      ],
      explanation: 'The <th> tag is an element used to create table headings in a table',
      link: 'https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/'
    },
    {
      question: 'In HTML, what is the character entity for the ampersand sign?',
      answer: '&amp;',
      distractors: ['&amper;', '&and;', '&ampsand;'],
      explanation: 'The &amp; character entity is used to display the ampersand sign in HTML.',
      link: 'https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/'
    },
    {
      question: 'What is the first tag you add to a HTML5 document?',
      answer: 'The <!doctype html> tag',
      distractors: ['The html tag', 'The header tag', 'The body tag'],
      explanation: 'The first element on every HTML page is doctype. It tells the browser to expect HTML and what version to use. For the newest version of HTML, the element should look like this: <!doctype html>',
      link: 'https://www.freecodecamp.org/news/html-crash-course/'
    },
    {
      question: 'In HTML, what is a common use for the <u> tag?',
      answer: 'to point out misspelled words',
      distractors: [
        'to change the color for text',
        'to create an unordered list',
        'to highlight a portion of text'
      ],
      explanation: 'A common use for the u tag is to point out misspelled words',
      link: 'https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/'
    },
    {
      question: 'In HTML, how do you add four non-breaking spaces?',
      answer: '&emsp;',
      distractors: ['&fourspaces;', '&e-m-s-p;', '&emspaces;'],
      explanation: 'You can use the &emsp; entity to display four non-breaking spaces in HTML.',
      link: 'https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/'
    },
    {
      question: 'In HTML, which tag is used to make text italic without emphasis on its content?',
      answer: '<i>',
      distractors: ['<em>', '<b>', '<italic>'],
      explanation: 'The <i> tag is used to make text italic without adding extra emphasis. It is commonly used for text that is set off from normal prose, like foreign words or thoughts. ',
      link: 'https://devdocs.io/html/element/i'
    },
    {
      question: 'In HTML, what does the iframe element do?',
      answer: 'embed another document within the current HTML document ',
      distractors: [
        'used for creating a hyperlink',
        'used to italicize text',
        'a tag used for preformatted sections of text'
      ],
      explanation: 'The HTML iframe element is used to embed another document within the current HTML document. It is commonly used for advertisements, web analytics and other forms of interactive content.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe'
    },
    {
      question: 'What does Hypertext mean in HTML?',
      answer: 'organized text and links that connect web pages together',
      distractors: ['used for creating an html form', 'used to bold text', 'used to highlight text'],
      explanation: 'Hypertext in HTML refers to text (often with embeds such as images, too) that is organized in order to connect web pages to one another.',
      link: 'https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/'
    },
    {
      question: 'In HTML, which of the following elements is NOT a block-level element?',
      answer: '<span>',
      distractors: ['<h2>', '<p>', '<div>'],
      explanation: 'The span element is a generic inline container that can be used for grouping content and styling purposes.',
      link: 'https://www.freecodecamp.org/news/inline-elements-and-block-elements-in-html-explained/'
    },
    {
      question: 'Which HTML5 feature allows for the storage of data on the client-side, even after the browser is closed?',
      answer: 'Local Storage',
      distractors: ['WebSockets', 'navigator', 'Session Storage'],
      explanation: 'Local Storage is a client-side storage mechanism introduced in HTML5. It allows web applications to store data in a key-value pair format on the user\'s browser.',
      link: 'https://www.freecodecamp.org/news/how-web-storage-works/'
    },
    {
      question: 'In HTML, which of the following is the default type for the input field?',
      answer: 'text',
      distractors: ['radio', 'color', 'email'],
      explanation: 'If the type attribute is not specified in an HTML <input> element, the default type is text',
      link: 'https://www.freecodecamp.org/news/text-box-in-html-the-input-field-html-tag/'
    },
    {
      question: 'In HTML, how can you create a range input that allows users to select values from 1 to 100 with step increments of 5?',
      answer: '<input type="range" min="1" max="100" step="5">',
      distractors: [
        '<input type="range" min="34" max="100" step="15">',
        '<input type="range" min="1" max="100" increment="5">',
        '<input type="slider" min="1" max="100" step="5">'
      ],
      explanation: 'To define the range and the step increments for an input element, use the min and max attributes to specify the minimum and maximum values, and the step attribute to set the step increment.',
      link: 'https://www.w3.org/wiki/Html/Elements/input/range'
    },
    {
      question: 'What HTML5 attribute is used to associate a <label> element with a specific form control?',
      answer: 'for',
      distractors: ['control', 'link', 'date'],
      explanation: 'In HTML, the for attribute is used in conjunction with the <label> element to associate the label with a specific form control (such as an <input> element). This association is important for improving the usability and accessibility of web forms.',
      link: 'https://www.freecodecamp.org/news/html-label-label-tag-example'
    },
    {
      question: 'What is the purpose of the HTML <header> element?',
      answer: 'To define a container for introductory content or a set of navigation links.',
      distractors: [
        'To create a horizontal rule, often used for visual separation in a web page.',
        'To define a section of a web page for important content or articles.',
        'To insert a line break, forcing the content after the break to the next line.'
      ],
      explanation: 'The <header> element is used to define introductory content or a set of navigation links typically found at the top of a web page.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header'
    }
  ]
};

export default htmlQuiz;

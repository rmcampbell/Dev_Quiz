const cssQuiz = {
  category: 'CSS',
  questions: [
    {
      question: 'In CSS, Flex is a shorthand property for which of the following properties?',
      answer: 'flex-grow, flex-shrink, and flex-basis',
      distractors: [
        'justify-content, align-items, and align-content',
        'flex-direction, flex-wrap, and flex-flow',
        'flex-direction, order, and flex-flow'
      ],
      explanation: 'Flex is a shorthand property for all three of these properties: flex-grow, flex-shrink, and flex-basis.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex'
    },
    {
      question: 'Which CSS property is used to represent the transparency of an element?',
      answer: 'Opacity',
      distractors: ['Dark', 'Transparent', 'Hover'],
      explanation: 'Opacity is used to represent the transparency of an element in CSS.',
      link: 'https://youtu.be/1Rs2ND1ryYc?t=4728'
    },
    {
      question: 'Which of the following CSS properties represents the order of flex items in a container?',
      answer: 'order',
      distractors: ['float', 'overflow', 'int'],
      explanation: 'order is used to represent the order of flex items.',
      link: 'https://youtu.be/1Rs2ND1ryYc'
    },
    {
      question: 'In CSS, what selector is used to set the style of links for the moment they are clicked?',
      answer: 'a:active',
      distractors: ['a:hover', 'a:visited', 'a:link'],
      explanation: 'With a:active you can set the style of links for the moment they are clicked.',
      link: 'https://www.freecodecamp.org/news/how-to-style-links-in-css/'
    },
    {
      question: 'In CSS, which one of these values represents 20% of the viewport height?',
      answer: '20vh',
      distractors: ['200vh', '2vh', '2000vh'],
      explanation: '20vh is equivalent to 20% of the viewport height.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, which one of these values represents 10% of the viewport width?',
      answer: '10vw',
      distractors: ['10vh', '100vw', '1000vw'],
      explanation: '10vw is equivalent to 10% of the viewport width.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, what does the animation-fill-mode property do?',
      answer: 'It is used to style the element after the animation ends.',
      distractors: [
        'It sets a delay for the animation to start.',
        'It sets how many times an animation should run.',
        'It determines how long an animation should last in seconds.'
      ],
      explanation: 'The animation-fill-mode property is used to style the element after the animation ends.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS Grid, what is the name of the grid property used to set the number and width of columns?',
      answer: 'grid-template-columns',
      distractors: ['grid-columns', 'flex-template-columns', 'template-columns-grid'],
      explanation: 'The grid-template-columns property is used to set the number and width of the columns.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, this type of unit is defined by comparing to another length value.',
      answer: 'Relative',
      distractors: ['Absolute', 'Fixed', 'Dynamic'],
      explanation: 'In CSS, relative units are relative to other length values. Several of the relative units depend on the viewport size.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/#why-learn-css-relative-units'
    },
    {
      question: 'In CSS, what is the name of the CSS grid property used to position items inside grid containers along the main axis?',
      answer: 'justify-items',
      distractors: ['justify-content', 'justify-rows', 'justify-columns'],
      explanation: 'The justify-items property is used to position items within a grid container along the x-axis (main axis).',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is the all media type in a CSS media query?',
      answer: 'A category of media that works for all devices.',
      distractors: [
        'A category of media that only works for mobile devices.',
        'A category of media that only works for print media.',
        'A category of media that only works for tablets.'
      ],
      explanation: 'The all media type is a category of media that will work for all media devices.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, how can you abbreviate the following Hex code? #FF0000',
      answer: '#F00',
      distractors: ['#0F0', '#00F', '#0FF0'],
      explanation: 'To abbreviate a Hex code in CSS, include one digit of each pair of digits in the code. ',
      link: 'https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/'
    },
    {
      question: 'In CSS, what does the animation-direction property do?',
      answer: 'It sets the direction of the animation.',
      distractors: [
        'It sets how many times an animation should run.',
        'It is used to style the element after the animation ends.',
        'It pauses the animation if the animation is running.'
      ],
      explanation: 'The animation-direction property sets the direction of the animation.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, what is the name of the value that stretches the repeated images in the background-repeat property?',
      answer: 'round',
      distractors: ['space', 'around', 'rounding'],
      explanation: 'The round value is used to stretch the repeated images in the background-repeat property.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is the speech media type in a CSS media query?',
      answer: 'A category of media that works for devices like screen readers where the content is read out loud to the user.',
      distractors: [
        'A category of media that works for devices with screens.',
        'A category of media that works for devices where the media is in print preview mode.',
        'A category of media that only works for mobile devices.'
      ],
      explanation: 'The speech media type works for devices like screen readers where the content is read out loud to the user.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, which one is NOT an example of a relative unit?',
      answer: 'px',
      distractors: ['rem', 'em', 'vh'],
      explanation: 'Relative units in CSS include rem, em, vh, and vw',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, what does the animation-duration property do?',
      answer: 'It determines how long an animation should last in seconds.',
      distractors: [
        'It is used to style the element after the animation ends.',
        'It sets the direction of the element.',
        'It pauses the animation if the animation is running.'
      ],
      explanation: 'The animation-duration property is used to determine how long an animation should last in seconds.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, how do you change the background-image of an element?',
      answer: 'background-image: url("path_to_image");',
      distractors: [
        'background-img: url("path_to_image");',
        'background_image: url("path_to_image");',
        'background-image: ("path_to_image")'
      ],
      explanation: 'The background-image CSS property allows you to place an image behind any HTML element you wish. Immediately after the property you add a colon. Then, url() is used to tell CSS where the image is located. Inside the parentheses the path to the image is listed in opening and closing double quotes. This lets the browser know what URL to pull. Lastly, don\'t forget the semicolon to end the statement!',
      link: 'https://www.freecodecamp.org/news/css-background-image-with-html-example-code/'
    },
    {
      question: 'In CSS, what is the media type in a CSS media query?',
      answer: 'The category of media for the device.',
      distractors: [
        'A set of rules that only applies to mobile devices',
        'A category only for print media.',
        'A category only for speech.'
      ],
      explanation: 'A media type refers to the category of media for the device.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS Flexbox, what does align-items do?',
      answer: 'aligns the items along the cross axis',
      distractors: [
        'aligns the items to the right of the y axis',
        'aligns the items to the right of the x axis',
        'aligns the items to the right of the z axis'
      ],
      explanation: 'In CSS Flexbox, align-items aligns the items along the cross axis',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS Flexbox, how do you allow items to move to a new line?',
      answer: 'flex-wrap: wrap;',
      distractors: ['flex: wrap;', 'flex-wrap: wrap-items;', 'flex-wrap: item-wrap;'],
      explanation: 'In CSS Flexbox, flex-wrap: wrap; will tell the computer to move items to a new line if there is not enough space',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, how do you change the background color?',
      answer: 'background-color: pink;',
      distractors: ['bg-color: pink;', 'backgroundColor: pink;', 'b-color: pink;'],
      explanation: 'You can use the background property in CSS to change the background color of an element',
      link: 'https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/'
    },
    {
      question: 'In CSS, what is the default position property?',
      answer: 'position: static;',
      distractors: ['position: relative;', 'position: top;', 'position: absolute;'],
      explanation: 'The default property in CSS is position: static; which means it follows the order of the HTML',
      link: 'https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/'
    },
    {
      question: 'In CSS, what is the name of the property used to position items inside the grid container along the y-axis?',
      answer: 'align-items',
      distractors: ['grid-columns', 'grid-template-columns', 'fraction-unit'],
      explanation: 'The align-items property is used to position items inside the grid container along the y-axis.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what selector is used to set the style of links when the user moves the mouse over them?',
      answer: 'a:hover',
      distractors: ['a:visited', 'a:active', 'a:link'],
      explanation: 'With a:hover you can set the style of links when the user mouses over them.',
      link: 'https://www.freecodecamp.org/news/how-to-style-links-in-css/'
    },
    {
      question: 'In CSS, what is the name of the CSS grid property used to set the number and height of the rows?',
      answer: 'grid-template-rows',
      distractors: ['grid-template-columns', 'grid-rows', 'grid-unit-rows'],
      explanation: 'The grid-template-rows property is used to set the number and height of the rows.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what does the no-repeat value do in the background-repeat property?',
      answer: 'Sets no repetition for the background image',
      distractors: [
        'Repeats the image along the z-axis',
        'Repeats the image along the y-axis',
        'Repeats the image along the x-axis'
      ],
      explanation: 'The no-repeat value of the background-repeat property sets no repetition for the background image.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, which one of these options is NOT a value used for the justify-content property?',
      answer: 'repeat',
      distractors: ['space-around', 'space-between', 'space-evenly'],
      explanation: 'The justify-content property can accept seven values including space-around, space-between, start, and end.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what does the animation-iteration-count property do?',
      answer: 'It sets how many times an animation should run.',
      distractors: [
        'It sets a name used to describe the animation applied to the element.',
        'It determines how long an animation should last in seconds.',
        'It sets a delay for the animation to start.'
      ],
      explanation: 'The animation-iteration-count property sets how many times the animation should run.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, what is the name of the property used to position one grid item in a container along the y-axis?',
      answer: 'align-self',
      distractors: ['grid-columns', 'space-around', 'grid-template-columns'],
      explanation: 'The align-self property is used to position one grid item in a container along the y-axis',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what does the animation-play-state property do?',
      answer: 'It is used to pause the animation if it is set to paused.',
      distractors: [
        'It determines how long an animation should last in seconds.',
        'It is used to style the element after the animation ends.',
        'It sets the direction for the animation.'
      ],
      explanation: 'The animation-play-state property is used to pause the animation if set to paused.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, how do you add a smooth scroll to an HTML element?',
      answer: 'scroll-behavior: smooth;',
      distractors: ['scroll-behavior: smooth-scroll;', 'scroll: smooth;', 'behavior: smooth;'],
      explanation: 'You can use scroll-behavior: smooth; to add a smooth scroll to the html element',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'In CSS, what is the name of the function used to set the width of all columns in CSS grid?',
      answer: 'repeat()',
      distractors: ['set-width()', 'width-all()', 'width-container()'],
      explanation: 'The repeat() function is used to set the width of all of the columns in the grid container.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is the name of the property used to repeat a background image?',
      answer: 'background-repeat',
      distractors: ['background-position-x', 'background-position-y', 'background-origin'],
      explanation: 'The background-repeat property is used to repeat the background image.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what selector would you use to select all elements with the class of blue-text?',
      answer: '.blue-text',
      distractors: ['#blue-text', 'a[blue-text]', 'blue-text'],
      explanation: 'In CSS, you can select all the elements with a given class with a dot before its name.',
      link: 'https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/'
    },
    {
      question: 'In CSS, what is the media attribute in the link tag?',
      answer: 'Specifies the type of media that should be used when importing the linked content',
      distractors: [
        'tells the computer to import the linked content for phones only',
        'tells the computer to import the linked content for laptops only',
        'tells the computer to import the linked content for tablets only'
      ],
      explanation: 'The media attribute specifies the type of media that should be used when importing the linked content',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'In CSS, what is the name of the property that clips the background image to inside the container?',
      answer: 'background-clip',
      distractors: ['background-color', 'background-position', 'background-size'],
      explanation: 'The background-clip property is used to clip the background image to inside the container.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS Flexbox, how do you set the flex container to reverse the items in a row?',
      answer: 'flex-direction: row-reverse;',
      distractors: ['flex-direction: reverse-row;', 'flex-row: row-reverse;', 'flex-direction: set-row-reverse;'],
      explanation: 'In CSS Flexbox, you can apply flex-direction: row-reverse; to the container whose items you want to display in a row, with their order reversed.',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS Flexbox, how do you set the flex container to reverse the items in a column?',
      answer: 'flex-direction: column-reverse;',
      distractors: ['flex-direction: reverse-c;', 'flex-direction: column-r;', 'flex-direction: column-rev;'],
      explanation: 'In CSS Flexbox, you can apply flex-direction: column-reverse; to the container whose items you want to display in a column, with their order reversed.',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, what does list-style-type: circle; do?',
      answer: 'Applies circles to all of the list items in an unordered list.',
      distractors: [
        'Applies discs to all of the list items in an unordered list.',
        'Applies decimals to all of the list items in an unordered list.',
        'Applies squares to all of the list items in an unordered list.'
      ],
      explanation: 'list-style-type: circle; will apply circles to all of the list items of an unordered list.',
      link: 'https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/'
    },
    {
      question: 'In CSS, which one of these values is NOT used for the background-position property?',
      answer: 'side-left',
      distractors: ['top', 'bottom', 'right'],
      explanation: 'The background-position property can take in many values including of top, right, left and bottom.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what does the vw unit stand for?',
      answer: 'viewport width',
      distractors: ['view width height', 'viewport weight', 'viewport height'],
      explanation: 'The vw unit stands for viewport width.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS Flexbox, what does align-self do?',
      answer: 'adjusts the alignment for an element',
      distractors: [
        'adjust the alignment for all elements',
        'adjusts the alignment for hr elements',
        'adjusts the alignment for an img element'
      ],
      explanation: 'In CSS Flexbox, align-self adjusts the alignment for an element',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, what does the animation-name property do?',
      answer: 'It is a name used to describe the animation applied to the element.',
      distractors: [
        'It sets the duration of the animation.',
        'It sets a delay for the animation to start.',
        'It sets how many times an animation should run.'
      ],
      explanation: 'The animation-name property is used to describe the animation applied to the element.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, what is the name of the grid property used to set the space for grid cells in rows and columns?',
      answer: 'grid-template-areas',
      distractors: ['grid-template-rows', 'fraction unit', 'repeat'],
      explanation: 'The grid-template-areas property is used to set the space for grid cells in rows and columns.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is the universal selector?',
      answer: '*',
      distractors: ['#', '$', '@'],
      explanation: 'The asterisk * is the universal selector in CSS. It selects all elements of any type.',
      link: 'https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/'
    },
    {
      question: 'In CSS, what is the name of the property used to change the position of the background image?',
      answer: 'background-position',
      distractors: ['background-clip', 'background-color', 'background-origin'],
      explanation: 'The background-position is used to change the position of the background image.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is the name of the property used to position one individual grid item inside a grid container along the x-axis?',
      answer: 'justify-self',
      distractors: ['align-content', 'grid-template-areas', 'justify-rows'],
      explanation: 'The justify-self property is used to position one individual grid item inside a grid container along the x-axis.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, which one of these values does NOT apply to the all shorthand property?',
      answer: 'position',
      distractors: ['unset', 'initial', 'revert'],
      explanation: 'The all CSS shorthand property can accept the following values: initial, inherit, unset, revert.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/all'
    },
    {
      question: 'In CSS Flexbox, how do you set the flex container to arrange the items in a column?',
      answer: 'flex-direction: column;',
      distractors: ['flex-direction: row;', 'flex-column: column;', 'flex-direction: set-column;'],
      explanation: 'In CSS Flexbox, you can apply flex-direction: column; to the container whose items you want arrange in a column',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, which one of these values is NOT used for the background-origin property?',
      answer: 'box-sizing',
      distractors: ['border-box', 'padding-box', 'content-box'],
      explanation: 'The background-origin property can use following values: border-box, padding-box, inherit, and content-box.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is the name of the CSS grid property used to create gaps between columns?',
      answer: 'column-gap',
      distractors: ['set-width', 'fit-unit', 'grid-template-columns'],
      explanation: 'The column-gap property is used to create gaps between columns.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what does the animation-timing-function property do?',
      answer: 'It determines when the animation should speed up or slow down.',
      distractors: [
        'It sets the direction for the element.',
        'It is used to style the element after the animation ends.',
        'It is a name used to describe the animation applied to the element.'
      ],
      explanation: 'The animation-timing-function is used to determine when the animation should speed up or slow down.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },

    {
      question: 'In CSS, what is the name of the relative unit that is based on its parent\'s font size?',
      answer: 'em',
      distractors: ['rem', 'vh', 'vw'],
      explanation: 'The em unit is based on its parent\'s font size.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, this is the type of unit that is tied to physical units of length. ',
      answer: 'Absolute',
      distractors: ['Relative', 'Fixed', 'Dynamic'],
      explanation: 'In CSS, absolute units are tied to physical units of length. ',
      link: 'https://www.freecodecamp.org/news/css-unit-guide/'
    },
    {
      question: 'In CSS, what property is used to customize the marker of a list item?',
      answer: 'list-style-type',
      distractors: ['list-style', 'list-marker-type', 'list-markers'],
      explanation: 'The list-style-type property is used to set the marker of a list item. ',
      link: 'https://www.freecodecamp.org/news/how-to-style-lists-with-css/'
    },
    {
      question: 'In CSS, what is an at-rule?',
      answer: 'A rule that dictates what the CSS will look like based on certain conditions.',
      distractors: [
        'A rule that dictates how to format the HTML.',
        'A rule that dictates javascript functions.',
        'A rule that only applies to how <p> elements are styled.'
      ],
      explanation: 'An at-rule in CSS will dictate what the CSS will look like based on certain conditions.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what is the role of media queries?',
      answer: 'They help create responsive websites',
      distractors: [
        'They create links to other webpages',
        'They add interactivity to a static webpage',
        'They change the font of text'
      ],
      explanation: 'CSS media queries allow you to create responsive websites across all screen sizes, ranging from desktop to mobile',
      link: 'https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/'
    },
    {
      question: 'In CSS, how is the not operator used in a media query?',
      answer: 'It reverses a true query into a false query and a false query into a true query.',
      distractors: [
        'It joins multiple media features.',
        'It splits media queries into separate ones.',
        'It separates multiple media features by commas.'
      ],
      explanation: 'The not operator is used to reverse a true query into a false query and a false query into a true query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what is the name of the property used to change the origin of the background image?',
      answer: 'background-origin',
      distractors: ['background-position', 'background-clip', 'background-color'],
      explanation: 'The background-origin property is used to set the origin of the background image.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'What does CSS stand for?',
      answer: 'Cascading Style Sheets',
      distractors: ['Complex Style Sheets', 'Complete Synchronizes Sheets', 'Community Stylish System'],
      explanation: 'CSS stands for Cascading Style Sheets.',
      link: 'https://www.freecodecamp.org/news/best-css-and-css3-tutorial/'
    },
    {
      question: 'What is the main purpose of CSS in a website?',
      answer: 'Style',
      distractors: ['Structure', 'Functionality', 'Sound'],
      explanation: 'CSS is used to define the style of the elements in a website.',
      link: 'https://www.freecodecamp.org/news/best-css-and-css3-tutorial/'
    },
    {
      question: 'In CSS, what is the print media type in a CSS media query?',
      answer: 'A category of media that works for devices where the media is in print preview mode.',
      distractors: [
        'A type of media only for 4k monitors.',
        'A type of media that only works for desktop computers.',
        'A set of rules only applied to mobile devices.'
      ],
      explanation: 'The print media type works for devices where the media is in print preview mode.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, how do you make all of the text for an element uppercase?',
      answer: 'text-transform: uppercase;',
      distractors: ['text-transform: toUpper;', 'text-transform: upper;', 'text-transform: set-upper;'],
      explanation: 'You can use the text-transform: uppercase; to make all of the text for that element uppercase',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'In CSS, how do you make an image circular or oval?',
      answer: 'border-radius: 50%;',
      distractors: ['border-radius: 10%;', 'border-radius: 0;', 'border-radius: 3px;'],
      explanation: 'You can use the CSS property border-radius with a value of 50% to make an image circular or oval.',
      link: 'https://devdocs.io/css/border-radius'
    },
    {
      question: 'In CSS, which one of these values is NOT used for the background-repeat property?',
      answer: 'repeat-z-axis',
      distractors: ['no-repeat', 'repeat', 'repeat-x'],
      explanation: 'The background-repeat property can take in seven values include no-repeat, repeat, repeat-x and repeat-y',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what do H, S, and L in HSL stand for?',
      answer: 'Hue, Saturation, Lightness',
      distractors: ['Hue, Saturation, Lightning', 'Hue, Style, Lightness', 'Habitat, Style, Lightness'],
      explanation: 'HSL stands for Hue, Saturation, and Lightness.',
      link: 'https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/'
    },
    {
      question: 'In CSS, what is the name of the property that determines if the background image is in a scroll, fixed, or local position?',
      answer: 'background-attachment',
      distractors: ['background-origin', 'background-clip', 'background-position'],
      explanation: 'The background-attachment property is used to determine if the background image is in a scroll, fixed, or local position.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what are the conditions that decide if a media rule is applied?',
      answer: 'Breakpoints',
      distractors: ['Breaks', 'Points', 'Keys'],
      explanation: 'A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries.',
      link: 'https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/'
    },
    {
      question: 'In CSS, the amount of space between an element\'s border and its surrounding elements is known as...',
      answer: 'Margin',
      distractors: ['Padding', 'White Space', 'Indentation'],
      explanation: 'The margin is the amount of space between an element\'s border and its surrounding elements.',
      link: 'https://www.freecodecamp.org/news/css-margins/'
    },
    {
      question: 'In CSS, what value should be assigned to the text-decoration property to remove an underline from links?',
      answer: 'none',
      distractors: ['underline', 'overline', 'line-through'],
      explanation: 'The property text-decoration should have the value of none to remove an underline from links.',
      link: 'https://www.freecodecamp.org/news/how-to-style-links-in-css/'
    },

    {
      question: 'In CSS Flexbox, which one is NOT used with align-content?',
      answer: 'align-bottom',
      distractors: ['center', 'space-around', 'stretch'],
      explanation: 'In CSS Flexbox, some of the options for align-content include center, stretch, space-around and space-between',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, how is the comma operator used in a media query?',
      answer: 'It separates multiple media features by commas and it applies the styles inside the curly braces if one of the conditions is true.',
      distractors: [
        'It reverses a true query into a false query and a false query into a true query.',
        'It joins multiple media features.',
        'It splits media queries into separate ones.'
      ],
      explanation: 'The comma operator is used to separate multiple media features by commas and to apply the styles inside the curly braces if one of the conditions is true.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what does the repeat-x value do in the background-repeat property?',
      answer: 'It repeats the image along the x-axis.',
      distractors: [
        'It repeats the image along the y-axis.',
        'It repeats the image along the z-axis.',
        'It repeats the image along both of the x-axis and y-axis.'
      ],
      explanation: 'The repeat-x value of the background-repeat property repeats the image along the x-axis.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, how is the and operator used in a media query?',
      answer: 'It is used to join multiple media features.',
      distractors: [
        'It is used to reverse a true query into a false query.',
        'It is used to separate multiple media features by commas.',
        'It is used to split media queries into separate ones.'
      ],
      explanation: 'The and operator is used to join multiple media features in a media query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what does the A in RGBA stand for?',
      answer: 'Alpha',
      distractors: ['Alphabetical', 'Ambiguous', 'Ancient'],
      explanation: 'The A in RGBA stands for Alpha. This value represents the transparency of the color.',
      link: 'https://devdocs.io/css/color_value/rgba()'
    },
    {
      question: 'In CSS Flexbox, which one is NOT used with align-items?',
      answer: 'align-middle',
      distractors: ['flex-end', 'flex-start', 'baseline'],
      explanation: 'In CSS Flexbox, some of the options for align-items include flex-start, flex-end, baseline and stretch',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, what is the screen media type in a CSS media query?',
      answer: 'A category of media that works for devices with screens.',
      distractors: [
        'A category of media that works for media in print preview mode.',
        'A category of media that works for devices without screens.',
        'A category of media that only works for tablets.'
      ],
      explanation: 'The screen media type works for devices with screens.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what does the vh unit stand for?',
      answer: 'viewport height',
      distractors: ['viewport width', 'view heights', 'viewing height'],
      explanation: 'The vh unit stands for viewport height.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },

    {
      question: 'In CSS, how do you add content after an element?',
      answer: '::after',
      distractors: ['::after-content', '::add', '::before'],
      explanation: 'You can use the ::after selector to add content after an element',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'In CSS, what does the animation-delay property do?',
      answer: 'It sets a delay for the animation to start.',
      distractors: [
        'It determines how long an animation should last in seconds.',
        'It pauses the animation if the animation is running.',
        'It determines when the animation should speed up or slow down.'
      ],
      explanation: 'The animation-delay property is used to set a delay for the animation to start.',
      link: 'https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/'
    },
    {
      question: 'In CSS, which one of these options is NOT a value used for the justify-items property?',
      answer: 'gap',
      distractors: ['start', 'end', 'stretch'],
      explanation: 'The four values that can be used for the justify-items property are: start, end, center, and stretch.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is the name of the value that evenly distributes space in the background-repeat property?',
      answer: 'space',
      distractors: ['repeat', 'no-repeat', 'repeat-x'],
      explanation: 'The space value is used to evenly distribute the space in the background-repeat property.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is the name of the relative unit that is based on the root element\'s font size?',
      answer: 'rem',
      distractors: ['em', 'px', 'vw'],
      explanation: 'The rem unit is based on the root element\'s font size.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, the amount of space between an element\'s content and its border is known as...',
      answer: 'Padding',
      distractors: ['Margin', 'White Space', 'Indentation'],
      explanation: 'The padding is the amount of space between the element\'s content and its border.',
      link: 'https://www.freecodecamp.org/news/css-margins/'
    },
    {
      question: 'In CSS, which one of these values is NOT used for the background-attachment property?',
      answer: 'inherit',
      distractors: ['local', 'scroll', 'fixed'],
      explanation: 'The background-attachment property can take in the fixed, scroll and local values.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is a common breakpoint range used for tablet devices in a media query?',
      answer: '481px - 768px',
      distractors: ['300px - 7000px', '2px - 68px', '81px - 700px'],
      explanation: 'The range of 481px - 768px can be used to target tablet devices in a media query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, which one of these options is NOT a valid value for the font-weight property?',
      answer: 'bolding',
      distractors: ['bold', '900', 'lighter'],
      explanation: 'The option "bolding" is not a valid value for the font-weight property.',
      link: 'https://www.freecodecamp.org/news/bold-font-in-html-font-weight-for-letters/'
    },
    {
      question: 'What does fr stand for in CSS grid?',
      answer: 'fraction unit',
      distractors: ['font units', 'flex unit', 'fit unit'],
      explanation: 'fr stands for fraction unit in CSS grid.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is a common breakpoint range used for laptop devices in a media query?',
      answer: '769px -1024px',
      distractors: ['7px -10px', '69px -124px', '769px -10,024px'],
      explanation: 'The range of 769px -1024px can be used to target laptop devices in a media query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, which one of these options is NOT a value used for the align-content property?',
      answer: 'row-gap',
      distractors: ['space-between', 'center', 'start'],
      explanation: 'The align-content property can accept seven values including space-around, space-between, start, and end.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, how do you make the text for an element all lowercase?',
      answer: 'text-transform: lowercase;',
      distractors: ['text-transform: lower;', 'text-transform: to-lower;', 'text-transform: set-lower;'],
      explanation: 'You can use the text-transform: lowercase; to make all of the text for that element lowercase',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'In CSS, what is the name of the property used to adjust the size of a background image?',
      answer: 'background-size',
      distractors: ['background-repeat', 'background-origin', 'background-position'],
      explanation: 'The background-size property is used to adjust the size for a background image.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS, what is the name of the property that sets the opacity of an HTML element?',
      answer: 'opacity',
      distractors: ['margin', 'padding', 'border'],
      explanation: 'The opacity property is used to set the opacity of an HTML element.',
      link: 'https://www.freecodecamp.org/news/transparent-background-image-opacity-in-css-and-html/'
    },
    {
      question: 'In CSS Flexbox, what does justify-content do?',
      answer: 'aligns the items along the main axis',
      distractors: [
        'aligns the items to right of the y axis',
        'aligns the items to the left of  the x and y axis',
        'aligns the items to the right of the x axis'
      ],
      explanation: 'In CSS Flexbox, justify-content is used to align the items in the container along the main axis',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, what is the name of the rule that will override CSS style for an element?',
      answer: '!important',
      distractors: ['!override', '!change', '!specific'],
      explanation: 'The !important rule will override the other CSS style rules for that element',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'How do you create a Flexbox container in CSS Flexbox?',
      answer: 'display:flex;',
      distractors: ['display:flexbox;', 'display:flexcontainer;', 'display:flexB;'],
      explanation: 'You can apply CSS Flexbox to an HTML container by using display:flex;',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In CSS, what is the name of the CSS property used to position the grid inside the grid container along the y-axis?',
      answer: 'align-content',
      distractors: ['justify-content', 'end', 'grid-unit-rows'],
      explanation: 'The align-content property is used to position the grid inside the grid container along the y-axis.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is a common breakpoint range used for desktops and large screens in a media query?',
      answer: '1025px - 1200px',
      distractors: ['25px - 120px', '125px - 12,000px', '5px - 12px'],
      explanation: 'The range of 1025px - 1200px can be used to target desktops and large screens in a media query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what does the A stand for in HSLA?',
      answer: 'Alpha',
      distractors: ['Alphabetical', 'Ambiguous', 'Ancient'],
      explanation: 'The A in HSLA stands for Alpha. This value represents the transparency of the color.',
      link: 'https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/'
    },
    {
      question: 'In CSS, what does the repeat-y value do in the background-repeat property?',
      answer: 'It repeats the image along the y-axis.',
      distractors: [
        'It repeats the image along the x-axis.',
        'It repeats the image along both of the x-axis and y-axis.',
        'It repeats the image along the z-axis.'
      ],
      explanation: 'The repeat-y value repeats the image along the y-axis.',
      link: 'https://www.freecodecamp.org/news/learn-css-background-properties/'
    },
    {
      question: 'In CSS Flexbox, which one is NOT used with justify-content?',
      answer: 'flex-middle',
      distractors: ['flex-start', 'flex-end', 'space-around'],
      explanation: 'In CSS Flexbox, some of the options for justify-content include space-around, flex-end, flex-start and space-between',
      link: 'https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/'
    },
    {
      question: 'In HTML, how do you change the font-size of an h1 tag using inline CSS?',
      answer: '<h1 style="font-size: 4rem">freeCodeCamp</h1>',
      distractors: [
        '<h1 css="font-size: 4rem">freeCodeCamp</h1>',
        '<h1 font="font-size: 4rem">freeCodeCamp</h1>',
        '<h1 fontSize="font-size: 4rem">freeCodeCamp</h1>'
      ],
      explanation: 'To change the font size of an HTML element, you can use the style attribute and the font-size property in the opening tag.',
      link: 'https://www.freecodecamp.org/news/html-font-style-how-to-change-text-color-and-size-with-an-html-tag/'
    },
    {
      question: 'In CSS, how many pixels are equivalent to 1 rem unit?',
      answer: '16',
      distractors: ['32', '12', '6'],
      explanation: 'One rem unit is equivalent to 16 pixels',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'In CSS, what selector is used to set the style of visited links?',
      answer: 'a:visited',
      distractors: ['a:hover', 'a:active', 'a:link'],
      explanation: 'With a:visited you can set the style of visited links.',
      link: 'https://www.freecodecamp.org/news/how-to-style-links-in-css/'
    },
    {
      question: 'In CSS, what is a common breakpoint range used for mobile devices in a media query?',
      answer: '320px - 480px',
      distractors: ['1000px - 5000px', '100px - 150px', '200px - 4000px'],
      explanation: 'The range of 320px - 480px can be used to target mobile devices in a media query.',
      link: 'https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/'
    },
    {
      question: 'In CSS, what is the name of the CSS grid property used to create gaps between rows?',
      answer: 'row-gap',
      distractors: ['grid-template-rows', 'grid-columns', 'repeat'],
      explanation: 'The row-gap property is used to create gaps between rows.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, what is the code used to create a CSS grid container?',
      answer: 'display: grid;',
      distractors: ['display: flex;', 'display: grid-box;', 'display: grid-container;'],
      explanation: 'You can use display: grid; to create a new CSS grid container.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, how do you add content before an element?',
      answer: '::before',
      distractors: ['::add-content', '::before-content', '::after'],
      explanation: 'You can use the ::before selector to add content before an element',
      link: 'https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/'
    },
    {
      question: 'In CSS Grid, what is the name of the CSS property used to position the grid inside the grid container along the x-axis?',
      answer: 'justify-content',
      distractors: ['grid-template-areas', 'grid-template-rows', 'row-gap'],
      explanation: 'The justify-content property is used to position the grid in the grid container along the x-axis.',
      link: 'https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture'
    },
    {
      question: 'In CSS, which of the following options is one way to center a div?',
      answer: 'use  display: flex; on the parent container and  margin: auto; for the child container',
      distractors: [
        'use  display: flex; on the parent container and  margin: 20px; for the child container',
        'use  display: flex; on the parent container and  margin: 50px; for the child container',
        'use  display: flex; on the parent container and  margin: 45%; for the child container'
      ],
      explanation: 'To center a div with CSS, apply display: flex; on the parent container and  margin: auto; for the child container.',
      link: 'https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/'
    },
    {
      question: 'In CSS, 3em units are equivalent to how much in px units?',
      answer: '48',
      distractors: ['32', '16', '12'],
      explanation: '3em is equivalent to 48 pixels.',
      link: 'https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/'
    },
    {
      question: 'What color would rgb(255,0,0) give?',
      answer: 'Red',
      distractors: ['Green', 'Yellow', 'Blue'],
      explanation: 'Each parameter defines the intensity of each color, rgb(red, green, and blue), with an integer number ranging from 0-255. The minimum value of 0 represents that none of the color is being shown, so it is at its darkest. On the other hand, the maximum value of 255 represents that the full amount of color and the full intensity is on display',
      link: 'https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/'
    },
    {
      question: 'In CSS, which pseudo-class allows you to select the last element of a specific type?',
      answer: ':last-of-type',
      distractors: [':nth-last-child', ':last-child', ':last'],
      explanation: 'We can use the :last-of-type selector to target an element of a specific type within a container.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type/'
    },
    {
      question: 'In CSS, which of the following properties can be used to set the body color to black?',
      answer: 'background-color:black;',
      distractors: ['body-color:black', 'backgroundColor:black', 'color:black'],
      explanation: 'In CSS, the background-color property is used to set the color of the background.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-color'
    },
    {
      question: 'Which of the following is the correct syntax for an attribute selector in CSS?',
      answer: `selector[attribute='value']`,
      distractors: ['container[value]', 'attribute[value]', 'value[attribute]'],
      explanation: 'The correct syntax for an attribute selector in CSS is selector[attribute=\'value\'].',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors'
    },
    {
      question: 'Which of the following CSS properties is used to add a stroke in the text?',
      answer: 'text-stroke',
      distractors: ['text-transform', 'text-decoration', 'None of the above'],
      explanation: 'text-stroke is a CSS property that is used to add a stroke in the text.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke'
    },
    {
      question: 'In CSS, which property is used to apply a groove style to the border?',
      answer: 'border-style',
      distractors: ['border-bottom-color', 'border-length', 'border-width'],
      explanation: 'You can use border-style: groove; to specify groove border styles around HTML elements.',
      link: 'https://www.freecodecamp.org/news/css-border-style-and-html-code-examples/'
    },
    {
      question: 'In CSS, what will the following pseudo class selector do :nth-child(2)?',
      answer: 'Selects the second child of the parent element',
      distractors: [
        'Select 2 children of the parent element',
        'Select 2 elements of the parent element',
        'None of the above'
      ],
      explanation: 'The :nth-child() pseudo-class selector matches every element that is the second child, third child, etc. of its parent.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child'
    },
    {
      question: 'Which CSS property is utilized to manage the spacing between characters in text?',
      answer: 'letter-spacing',
      distractors: ['word-spacing', 'line-height', 'text-indent'],
      explanation: `The CSS property 'letter-spacing' is used to control the spacing between characters in a text.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing'
    },
    {
      question: 'What is the correct way to include an external CSS file in an HTML document?',
      answer: '<link rel="stylesheet" href="styles.css">',
      distractors: ['<style src="styles.css">', '<css href="styles.css">', '<script type="text/css" src="styles.css">'],
      explanation: 'To include an external CSS file in an HTML document, you should use the <link> element with the rel attribute set to \'stylesheet\' and the href attribute pointing to the CSS file you want to include. ',
      link: 'https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/'
    },
    {
      question: 'Which CSS property is used to control the order of how elements are displayed in relation to each other along the z-axis?',
      answer: 'z-index',
      distractors: ['stack-order', 'z-order', 'z-depth'],
      explanation: 'The z-index property in CSS is used to control the stacking order of elements in relation to each other along the z-axis (front to back). It\'s commonly used in the context of positioned or layered elements, such as when using relative or absolute positioning.',
      link: 'https://www.freecodecamp.org/news/how-the-z-index-property-works-under-the-hood/'
    },
    {
      question: 'Which CSS property is used to create a drop shadow for an element?',
      answer: 'box-shadow',
      distractors: ['shadow-effect', 'element-shadow', 'text-shadow'],
      explanation: 'The box-shadow property in CSS is used to create a shadow effect for an element, such as a div or a box. It allows you to add shadow in terms of color, size, blur, spread, and position relative to the element.',
      link: 'https://www.freecodecamp.org/news/css-box-shadow-property-with-examples/'
    },
    {
      question: 'In CSS, which value is used to make an element take up the full available width of its parent container?',
      answer: '100%',
      distractors: ['full-width', 'max-width', 'auto'],
      explanation: `When you set an element's width to 100%, it means that the element should occupy the entire width of its parent container. This is particularly useful for creating responsive web designs where you want elements to adapt to the available space.`,
      link: 'https://www.freecodecamp.org/news/html-page-width-height/'
    },
    {
      question: 'Which CSS at-rule is used to specify a custom font to display the text in a website?',
      answer: '@font-face',
      distractors: ['@charset', '@namespace', '@font-feature-values'],
      explanation: 'The @font-face CSS at-rule specifies a custom font with which to display text and can be loaded from either via URL or a locally-installed font.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face'
    }
  ]
};

export default cssQuiz;

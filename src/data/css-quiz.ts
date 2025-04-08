const cssQuiz = [
  {
    Question:
      "In CSS, Flex is a shorthand property for which of the following properties?",
    Answer: "flex-grow, flex-shrink, and flex-basis",
    Distractors: ["justify-content, align-items, and align-content",
    "flex-direction, flex-wrap, and flex-flow",
    "flex-direction, order, and flex-flow"],
    Explanation:
      "Flex is a shorthand property for all three of these properties: flex-grow, flex-shrink, and flex-basis.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
  },
  {
    Question:
      "Which CSS property is used to represent the transparency of an element?",
    Answer: "Opacity",
    Distractors: ["Dark",
    "Transparent",
    "Hover"],
    Explanation:
      "Opacity is used to represent the transparency of an element in CSS.",
    Link: "https://youtu.be/1Rs2ND1ryYc?t=4728"
  },
  {
    Question:
      "Which of the following CSS properties represents the order of flex items in a container?",
    Answer: "order",
    Distractors: ["float",
    "overflow",
    "int"],
    Explanation: "order is used to represent the order of flex items.",
    Link: "https://youtu.be/1Rs2ND1ryYc"
  },
  {
    Question:
      "In CSS, what selector is used to set the style of links for the moment they are clicked?",
    Answer: "a:active",
    Distractors: ["a:hover",
    "a:visited",
    "a:link"],
    Explanation:
      "With a:active you can set the style of links for the moment they are clicked.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/"
  },
  {
    Question:
      "In CSS, which one of these values represents 20% of the viewport height?",
    Answer: "20vh",
    Distractors: ["200vh",
    "2vh",
    "2000vh"],
    Explanation: "20vh is equivalent to 20% of the viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question:
      "In CSS, which one of these values represents 10% of the viewport width?",
    Answer: "10vw",
    Distractors: ["10vh",
    "100vw",
    "1000vw"],
    Explanation: "10vw is equivalent to 10% of the viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question: "In CSS, what does the animation-fill-mode property do?",
    Answer: "It is used to style the element after the animation ends.",
    Distractors: ["It sets a delay for the animation to start.",
    "It sets how many times an animation should run.",
    "It determines how long an animation should last in seconds."],
    Explanation:
      "The animation-fill-mode property is used to style the element after the animation ends.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question:
      "In CSS Grid, what is the name of the grid property used to set the number and width of columns?",
    Answer: "grid-template-columns",
    Distractors: ["grid-columns",
    "flex-template-columns",
    "template-columns-grid"],
    Explanation:
      "The grid-template-columns property is used to set the number and width of the columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, this type of unit is defined by comparing to another length value.",
    Answer: "Relative",
    Distractors: ["Absolute",
    "Fixed",
    "Dynamic"],
    Explanation:
      "In CSS, relative units are relative to other length values. Several of the relative units depend on the viewport size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/#why-learn-css-relative-units"
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to position items inside grid containers along the main axis?",
    Answer: "justify-items",
    Distractors: ["justify-content",
    "justify-rows",
    "justify-columns"],
    Explanation:
      "The justify-items property is used to position items within a grid container along the x-axis (main axis).",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what is the all media type in a CSS media query?",
    Answer: "A category of media that works for all devices.",
    Distractors: ["A category of media that only works for mobile devices.",
    "A category of media that only works for print media.",
    "A category of media that only works for tablets."],
    Explanation:
      "The all media type is a category of media that will work for all media devices.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, how can you abbreviate the following Hex code? #FF0000",
    Answer: "#F00",
    Distractors: ["#0F0",
    "#00F",
    "#0FF0"],
    Explanation:
      "To abbreviate a Hex code in CSS, include one digit of each pair of digits in the code. ",
    Link: "https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/"
  },
  {
    Question: "In CSS, what does the animation-direction property do?",
    Answer: "It sets the direction of the animation.",
    Distractors: ["It sets how many times an animation should run.",
    "It is used to style the element after the animation ends.",
    "It pauses the animation if the animation is running."],
    Explanation:
      "The animation-direction property sets the direction of the animation.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question:
      "In CSS, what is the name of the value that stretches the repeated images in the background-repeat property?",
    Answer: "round",
    Distractors: ["space",
    "around",
    "rounding"],
    Explanation:
      "The round value is used to stretch the repeated images in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "In CSS, what is the speech media type in a CSS media query?",
    Answer:
      "A category of media that works for devices like screen readers where the content is read out loud to the user.",
    Distractors: ["A category of media that works for devices with screens.",

      "A category of media that works for devices where the media is in print preview mode.",
    "A category of media that only works for mobile devices."],
    Explanation:
      "The speech media type works for devices like screen readers where the content is read out loud to the user.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, which one is NOT an example of a relative unit?",
    Answer: "px",
    Distractors: ["rem",
    "em",
    "vh"],
    Explanation: "Relative units in CSS include rem, em, vh, and vw",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question: "In CSS, what does the animation-duration property do?",
    Answer: "It determines how long an animation should last in seconds.",
    Distractors: ["It is used to style the element after the animation ends.",
    "It sets the direction of the element.",
    "It pauses the animation if the animation is running."],
    Explanation:
      "The animation-duration property is used to determine how long an animation should last in seconds.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question: "In CSS, how do you change the background-image of an element?",
    Answer: 'background-image: url("path_to_image");',
    Distractors: ['background-img: url("path_to_image");',
    'background_image: url("path_to_image");',
    'background-image: ("path_to_image")'],
    Explanation:
      "The background-image CSS property allows you to place an image behind any HTML element you wish. Immediately after the property you add a colon. Then, url() is used to tell CSS where the image is located. Inside the parentheses the path to the image is listed in opening and closing double quotes. This lets the browser know what URL to pull. Lastly, don't forget the semicolon to end the statement!",
    Link: "https://www.freecodecamp.org/news/css-background-image-with-html-example-code/"
  },
  {
    Question: "In CSS, what is the media type in a CSS media query?",
    Answer: "The category of media for the device.",
    Distractors: ["A set of rules that only applies to mobile devices",
    "A category only for print media.",
    "A category only for speech."],
    Explanation: "A media type refers to the category of media for the device.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS Flexbox, what does align-items do?",
    Answer: "aligns the items along the cross axis",
    Distractors: ["aligns the items to the right of the y axis",
    "aligns the items to the right of the x axis",
    "aligns the items to the right of the z axis"],
    Explanation:
      "In CSS Flexbox, align-items aligns the items along the cross axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS Flexbox, how do you allow items to move to a new line?",
    Answer: "flex-wrap: wrap;",
    Distractors: ["flex: wrap;",
    "flex-wrap: wrap-items;",
    "flex-wrap: item-wrap;"],
    Explanation:
      "In CSS Flexbox, flex-wrap: wrap; will tell the computer to move items to a new line if there is not enough space",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS, how do you change the background color?",
    Answer: "background-color: pink;",
    Distractors: ["bg-color: pink;",
    "backgroundColor: pink;",
    "b-color: pink;"],
    Explanation:
      "You can use the background property in CSS to change the background color of an element",
    Link: "https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/"
  },
  {
    Question: "In CSS, what is the default position property?",
    Answer: "position: static;",
    Distractors: ["position: relative;",
    "position: top;",
    "position: absolute;"],
    Explanation:
      "The default property in CSS is position: static; which means it follows the order of the HTML",
    Link: "https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to position items inside the grid container along the y-axis?",
    Answer: "align-items",
    Distractors: ["grid-columns",
    "grid-template-columns",
    "fraction-unit"],
    Explanation:
      "The align-items property is used to position items inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what selector is used to set the style of links when the user moves the mouse over them?",
    Answer: "a:hover",
    Distractors: ["a:visited",
    "a:active",
    "a:link"],
    Explanation:
      "With a:hover you can set the style of links when the user mouses over them.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/"
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to set the number and height of the rows?",
    Answer: "grid-template-rows",
    Distractors: ["grid-template-columns",
    "grid-rows",
    "grid-unit-rows"],
    Explanation:
      "The grid-template-rows property is used to set the number and height of the rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what does the no-repeat value do in the background-repeat property?",
    Answer: "Sets no repetition for the background image",
    Distractors: ["Repeats the image along the z-axis",
    "Repeats the image along the y-axis",
    "Repeats the image along the x-axis"],
    Explanation:
      "The no-repeat value of the background-repeat property sets no repetition for the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-content property?",
    Answer: "repeat",
    Distractors: ["space-around",
    "space-between",
    "space-evenly"],
    Explanation:
      "The justify-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what does the animation-iteration-count property do?",
    Answer: "It sets how many times an animation should run.",
    Distractors: [
      "It sets a name used to describe the animation applied to the element.",
    "It determines how long an animation should last in seconds.",
    "It sets a delay for the animation to start."],
    Explanation:
      "The animation-iteration-count property sets how many times the animation should run.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one grid item in a container along the y-axis?",
    Answer: "align-self",
    Distractors: ["grid-columns",
    "space-around",
    "grid-template-columns"],
    Explanation:
      "The align-self property is used to position one grid item in a container along the y-axis",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what does the animation-play-state property do?",
    Answer: "It is used to pause the animation if it is set to paused.",
    Distractors: ["It determines how long an animation should last in seconds.",
    "It is used to style the element after the animation ends.",
    "It sets the direction for the animation."],
    Explanation:
      "The animation-play-state property is used to pause the animation if set to paused.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question: "In CSS, how do you add a smooth scroll to an HTML element?",
    Answer: "scroll-behavior: smooth;",
    Distractors: ["scroll-behavior: smooth-scroll;",
    "scroll: smooth;",
    "behavior: smooth;"],
    Explanation:
      "You can use scroll-behavior: smooth; to add a smooth scroll to the html element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question:
      "In CSS, what is the name of the function used to set the width of all columns in CSS grid?",
    Answer: "repeat()",
    Distractors: ["set-width()",
    "width-all()",
    "width-container()"],
    Explanation:
      "The repeat() function is used to set the width of all of the columns in the grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what is the name of the property used to repeat a background image?",
    Answer: "background-repeat",
    Distractors: ["background-position-x",
    "background-position-y",
    "background-origin"],
    Explanation:
      "The background-repeat property is used to repeat the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what selector would you use to select all elements with the class of blue-text?",
    Answer: ".blue-text",
    Distractors: ["#blue-text",
    "a[blue-text]",
    "blue-text"],
    Explanation:
      "In CSS, you can select all the elements with a given class with a dot before its name.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/"
  },
  {
    Question: "In CSS, what is the media attribute in the link tag?",
    Answer:
      "Specifies the type of media that should be used when importing the linked content",
    Distractors: [
      "tells the computer to import the linked content for phones only",

      "tells the computer to import the linked content for laptops only",
      "tells the computer to import the linked content for tablets only"],
    Explanation:
      "The media attribute specifies the type of media that should be used when importing the linked content",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    Question:
      "In CSS, what is the name of the property that clips the background image to inside the container?",
    Answer: "background-clip",
    Distractors: ["background-color",
    "background-position",
    "background-size"],
    Explanation:
      "The background-clip property is used to clip the background image to inside the container.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a row?",
    Answer: "flex-direction: row-reverse;",
    Distractors: ["flex-direction: reverse-row;",
    "flex-row: row-reverse;",
    "flex-direction: set-row-reverse;"],
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: row-reverse; to the container whose items you want to display in a row, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a column?",
    Answer: "flex-direction: column-reverse;",
    Distractors: ["flex-direction: reverse-c;",
    "flex-direction: column-r;",
    "flex-direction: column-rev;"],
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column-reverse; to the container whose items you want to display in a column, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS, what does list-style-type: circle; do?",
    Answer: "Applies circles to all of the list items in an unordered list.",
    Distractors: ["Applies discs to all of the list items in an unordered list.",

      "Applies decimals to all of the list items in an unordered list.",
      "Applies squares to all of the list items in an unordered list."],
    Explanation:
      "list-style-type: circle; will apply circles to all of the list items of an unordered list.",
    Link: "https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/"
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-position property?",
    Answer: "side-left",
    Distractors: ["top",
    "bottom",
    "right"],
    Explanation:
      "The background-position property can take in many values including of top, right, left and bottom.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "In CSS, what does the vw unit stand for?",
    Answer: "viewport width",
    Distractors: ["view width height",
    "viewport weight",
    "viewport height"],
    Explanation: "The vw unit stands for viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question: "In CSS Flexbox, what does align-self do?",
    Answer: "adjusts the alignment for an element",
    Distractors: ["adjust the alignment for all elements",
    "adjusts the alignment for hr elements",
    "adjusts the alignment for an img element"],
    Explanation:
      "In CSS Flexbox, align-self adjusts the alignment for an element",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS, what does the animation-name property do?",
    Answer:
      "It is a name used to describe the animation applied to the element.",
    Distractors: ["It sets the duration of the animation.",
    "It sets a delay for the animation to start.",
    "It sets how many times an animation should run."],
    Explanation:
      "The animation-name property is used to describe the animation applied to the element.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question:
      "In CSS, what is the name of the grid property used to set the space for grid cells in rows and columns?",
    Answer: "grid-template-areas",
    Distractors: ["grid-template-rows",
    "fraction unit",
    "repeat"],
    Explanation:
      "The grid-template-areas property is used to set the space for grid cells in rows and columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what is the universal selector?",
    Answer: "*",
    Distractors: ["#",
    "$",
    "@"],
    Explanation:
      "The asterisk * is the universal selector in CSS. It selects all elements of any type.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the position of the background image?",
    Answer: "background-position",
    Distractors: ["background-clip",
    "background-color",
    "background-origin"],
    Explanation:
      "The background-position is used to change the position of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one individual grid item inside a grid container along the x-axis?",
    Answer: "justify-self",
    Distractors: ["align-content",
    "grid-template-areas",
    "justify-rows"],
    Explanation:
      "The justify-self property is used to position one individual grid item inside a grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, which one of these values does NOT apply to the all shorthand property?",
    Answer: "position",
    Distractors: ["unset",
    "initial",
    "revert"],
    Explanation:
      "The all CSS shorthand property can accept the following values: initial, inherit, unset, revert.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/all"
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to arrange the items in a column?",
    Answer: "flex-direction: column;",
    Distractors: ["flex-direction: row;",
    "flex-column: column;",
    "flex-direction: set-column;"],
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column; to the container whose items you want arrange in a column",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-origin property?",
    Answer: "box-sizing",
    Distractors: ["border-box",
    "padding-box",
    "content-box"],
    Explanation:
      "The background-origin property can use following values: border-box, padding-box, inherit, and content-box.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between columns?",
    Answer: "column-gap",
    Distractors: ["set-width",
    "fit-unit",
    "grid-template-columns"],
    Explanation:
      "The column-gap property is used to create gaps between columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what does the animation-timing-function property do?",
    Answer: "It determines when the animation should speed up or slow down.",
    Distractors: ["It sets the direction for the element.",
    "It is used to style the element after the animation ends.",
      "It is a name used to describe the animation applied to the element."],
    Explanation:
      "The animation-timing-function is used to determine when the animation should speed up or slow down.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },

  {
    Question:
      "In CSS, what is the name of the relative unit that is based on its parent's font size?",
    Answer: "em",
    Distractors: ["rem",
    "vh",
    "vw"],
    Explanation: "The em unit is based on its parent's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question:
      "In CSS, this is the type of unit that is tied to physical units of length. ",
    Answer: "Absolute",
    Distractors: ["Relative",
    "Fixed",
    "Dynamic"],
    Explanation:
      "In CSS, absolute units are tied to physical units of length. ",
    Link: "https://www.freecodecamp.org/news/css-unit-guide/"
  },
  {
    Question:
      "In CSS, what property is used to customize the marker of a list item?",
    Answer: "list-style-type",
    Distractors: ["list-style",
    "list-marker-type",
    "list-markers"],
    Explanation:
      "The list-style-type property is used to set the marker of a list item. ",
    Link: "https://www.freecodecamp.org/news/how-to-style-lists-with-css/"
  },
  {
    Question: "In CSS, what is an at-rule?",
    Answer:
      "A rule that dictates what the CSS will look like based on certain conditions.",
    Distractors: ["A rule that dictates how to format the HTML.",
    "A rule that dictates javascript functions.",
    "A rule that only applies to how <p> elements are styled."],
    Explanation:
      "An at-rule in CSS will dictate what the CSS will look like based on certain conditions.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, what is the role of media queries?",
    Answer: "They help create responsive websites",
    Distractors: ["They create links to other webpages",
    "They add interactivity to a static webpage",
    "They change the font of text"],
    Explanation:
      "CSS media queries allow you to create responsive websites across all screen sizes, ranging from desktop to mobile",
    Link: "https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/"
  },
  {
    Question: "In CSS, how is the not operator used in a media query?",
    Answer:
      "It reverses a true query into a false query and a false query into a true query.",
    Distractors: ["It joins multiple media features.",
    "It splits media queries into separate ones.",
    "It separates multiple media features by commas."],
    Explanation:
      "The not operator is used to reverse a true query into a false query and a false query into a true query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the origin of the background image?",
    Answer: "background-origin",
    Distractors: ["background-position",
    "background-clip",
    "background-color"],
    Explanation:
      "The background-origin property is used to set the origin of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "What does CSS stand for?",
    Answer: "Cascading Style Sheets",
    Distractors: ["Complex Style Sheets",
    "Complete Synchronizes Sheets",
    "Community Stylish System"],
    Explanation: "CSS stands for Cascading Style Sheets.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/"
  },
  {
    Question: "What is the main purpose of CSS in a website?",
    Answer: "Style",
    Distractors: ["Structure",
    "Functionality",
    "Sound"],
    Explanation:
      "CSS is used to define the style of the elements in a website.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/"
  },
  {
    Question: "In CSS, what is the print media type in a CSS media query?",
    Answer:
      "A category of media that works for devices where the media is in print preview mode.",
    Distractors: ["A type of media only for 4k monitors.",
    "A type of media that only works for desktop computers.",
    "A set of rules only applied to mobile devices."],
    Explanation:
      "The print media type works for devices where the media is in print preview mode.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, how do you make all of the text for an element uppercase?",
    Answer: "text-transform: uppercase;",
    Distractors: ["text-transform: toUpper;",
    "text-transform: upper;",
    "text-transform: set-upper;"],
    Explanation:
      "You can use the text-transform: uppercase; to make all of the text for that element uppercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question: "In CSS, how do you make an image circular or oval?",
    Answer: "border-radius: 50%;",
    Distractors: ["border-radius: 10%;",
    "border-radius: 0;",
    "border-radius: 3px;"],
    Explanation:
      "You can use the CSS property border-radius with a value of 50% to make an image circular or oval.",
    Link: "https://devdocs.io/css/border-radius"
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-repeat property?",
    Answer: "repeat-z-axis",
    Distractors: ["no-repeat",
    "repeat",
    "repeat-x"],
    Explanation:
      "The background-repeat property can take in seven values include no-repeat, repeat, repeat-x and repeat-y",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "In CSS, what do H, S, and L in HSL stand for?",
    Answer: "Hue, Saturation, Lightness",
    Distractors: ["Hue, Saturation, Lightning",
    "Hue, Style, Lightness",
    "Habitat, Style, Lightness"],
    Explanation: "HSL stands for Hue, Saturation, and Lightness.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/"
  },
  {
    Question:
      "In CSS, what is the name of the property that determines if the background image is in a scroll, fixed, or local position?",
    Answer: "background-attachment",
    Distractors: ["background-origin",
    "background-clip",
    "background-position"],
    Explanation:
      "The background-attachment property is used to determine if the background image is in a scroll, fixed, or local position.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what are the conditions that decide if a media rule is applied?",
    Answer: "Breakpoints",
    Distractors: ["Breaks",
    "Points",
    "Keys"],
    Explanation:
      "A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries.",
    Link: "https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/"
  },
  {
    Question:
      "In CSS, the amount of space between an element's border and its surrounding elements is known as...",
    Answer: "Margin",
    Distractors: ["Padding",
    "White Space",
    "Indentation"],
    Explanation:
      "The margin is the amount of space between an element's border and its surrounding elements.",
    Link: "https://www.freecodecamp.org/news/css-margins/"
  },
  {
    Question:
      "In CSS, what value should be assigned to the text-decoration property to remove an underline from links?",
    Answer: "none",
    Distractors: ["underline",
    "overline",
    "line-through"],
    Explanation:
      "The property text-decoration should have the value of none to remove an underline from links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/"
  },

  {
    Question: "In CSS Flexbox, which one is NOT used with align-content?",
    Answer: "align-bottom",
    Distractors: ["center",
    "space-around",
    "stretch"],
    Explanation:
      "In CSS Flexbox, some of the options for align-content include center, stretch, space-around and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS, how is the comma operator used in a media query?",
    Answer:
      "It separates multiple media features by commas and it applies the styles inside the curly braces if one of the conditions is true.",
    Distractors: [
      "It reverses a true query into a false query and a false query into a true query.",
    "It joins multiple media features.",
    "It splits media queries into separate ones."],
    Explanation:
      "The comma operator is used to separate multiple media features by commas and to apply the styles inside the curly braces if one of the conditions is true.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, what does the repeat-x value do in the background-repeat property?",
    Answer: "It repeats the image along the x-axis.",
    Distractors: ["It repeats the image along the y-axis.",
    "It repeats the image along the z-axis.",
    "It repeats the image along both of the x-axis and y-axis."],
    Explanation:
      "The repeat-x value of the background-repeat property repeats the image along the x-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "In CSS, how is the and operator used in a media query?",
    Answer: "It is used to join multiple media features.",
    Distractors: ["It is used to reverse a true query into a false query.",
    "It is used to separate multiple media features by commas.",
    "It is used to split media queries into separate ones."],
    Explanation:
      "The and operator is used to join multiple media features in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, what does the A in RGBA stand for?",
    Answer: "Alpha",
    Distractors: ["Alphabetical",
    "Ambiguous",
    "Ancient"],
    Explanation:
      "The A in RGBA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://devdocs.io/css/color_value/rgba()"
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with align-items?",
    Answer: "align-middle",
    Distractors: ["flex-end",
    "flex-start",
    "baseline"],
    Explanation:
      "In CSS Flexbox, some of the options for align-items include flex-start, flex-end, baseline and stretch",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question: "In CSS, what is the screen media type in a CSS media query?",
    Answer: "A category of media that works for devices with screens.",
    Distractors: [
      "A category of media that works for media in print preview mode.",
    "A category of media that works for devices without screens.",
    "A category of media that only works for tablets."],
    Explanation: "The screen media type works for devices with screens.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, what does the vh unit stand for?",
    Answer: "viewport height",
    Distractors: ["viewport width",
    "view heights",
    "viewing height"],
    Explanation: "The vh unit stands for viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },

  {
    Question: "In CSS, how do you add content after an element?",
    Answer: "::after",
    Distractors: ["::after-content",
    "::add",
    "::before"],
    Explanation:
      "You can use the ::after selector to add content after an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question: "In CSS, what does the animation-delay property do?",
    Answer: "It sets a delay for the animation to start.",
    Distractors: ["It determines how long an animation should last in seconds.",
    "It pauses the animation if the animation is running.",
      "It determines when the animation should speed up or slow down."],
    Explanation:
      "The animation-delay property is used to set a delay for the animation to start.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/"
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-items property?",
    Answer: "gap",
    Distractors: ["start",
    "end",
    "stretch"],
    Explanation:
      "The four values that can be used for the justify-items property are: start, end, center, and stretch.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what is the name of the value that evenly distributes space in the background-repeat property?",
    Answer: "space",
    Distractors: ["repeat",
    "no-repeat",
    "repeat-x"],
    Explanation:
      "The space value is used to evenly distribute the space in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what is the name of the relative unit that is based on the root element's font size?",
    Answer: "rem",
    Distractors: ["em",
    "px",
    "vw"],
    Explanation: "The rem unit is based on the root element's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question:
      "In CSS, the amount of space between an element's content and its border is known as...",
    Answer: "Padding",
    Distractors: ["Margin",
    "White Space",
    "Indentation"],
    Explanation:
      "The padding is the amount of space between the element's content and its border.",
    Link: "https://www.freecodecamp.org/news/css-margins/"
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-attachment property?",
    Answer: "inherit",
    Distractors: ["local",
    "scroll",
    "fixed"],
    Explanation:
      "The background-attachment property can take in the fixed, scroll and local values.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for tablet devices in a media query?",
    Answer: "481px - 768px",
    Distractors: ["300px - 7000px",
    "2px - 68px",
    "81px - 700px"],
    Explanation:
      "The range of 481px - 768px can be used to target tablet devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, which one of these options is NOT a valid value for the font-weight property?",
    Answer: "bolding",
    Distractors: ["bold",
    "900",
    "lighter"],
    Explanation:
      'The option "bolding" is not a valid value for the font-weight property.',
    Link: "https://www.freecodecamp.org/news/bold-font-in-html-font-weight-for-letters/"
  },
  {
    Question: "What does fr stand for in CSS grid?",
    Answer: "fraction unit",
    Distractors: ["font units",
    "flex unit",
    "fit unit"],
    Explanation: "fr stands for fraction unit in CSS grid.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for laptop devices in a media query?",
    Answer: "769px -1024px",
    Distractors: ["7px -10px",
    "69px -124px",
    "769px -10,024px"],
    Explanation:
      "The range of 769px -1024px can be used to target laptop devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the align-content property?",
    Answer: "row-gap",
    Distractors: ["space-between",
    "center",
    "start"],
    Explanation:
      "The align-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, how do you make the text for an element all lowercase?",
    Answer: "text-transform: lowercase;",
    Distractors: ["text-transform: lower;",
    "text-transform: to-lower;",
    "text-transform: set-lower;"],
    Explanation:
      "You can use the text-transform: lowercase; to make all of the text for that element lowercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question:
      "In CSS, what is the name of the property used to adjust the size of a background image?",
    Answer: "background-size",
    Distractors: ["background-repeat",
    "background-origin",
    "background-position"],
    Explanation:
      "The background-size property is used to adjust the size for a background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question:
      "In CSS, what is the name of the property that sets the opacity of an HTML element?",
    Answer: "opacity",
    Distractors: ["margin",
    "padding",
    "border"],
    Explanation:
      "The opacity property is used to set the opacity of an HTML element.",
    Link: "https://www.freecodecamp.org/news/transparent-background-image-opacity-in-css-and-html/"
  },
  {
    Question: "In CSS Flexbox, what does justify-content do?",
    Answer: "aligns the items along the main axis",
    Distractors: ["aligns the items to right of the y axis",
    "aligns the items to the left of  the x and y axis",
    "aligns the items to the right of the x axis"],
    Explanation:
      "In CSS Flexbox, justify-content is used to align the items in the container along the main axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question:
      "In CSS, what is the name of the rule that will override CSS style for an element?",
    Answer: "!important",
    Distractors: ["!override",
    "!change",
    "!specific"],
    Explanation:
      "The !important rule will override the other CSS style rules for that element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question: "How do you create a Flexbox container in CSS Flexbox?",
    Answer: "display:flex;",
    Distractors: ["display:flexbox;",
    "display:flexcontainer;",
    "display:flexB;"],
    Explanation:
      "You can apply CSS Flexbox to an HTML container by using display:flex;",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question:
      "In CSS, what is the name of the CSS property used to position the grid inside the grid container along the y-axis?",
    Answer: "align-content",
    Distractors: ["justify-content",
    "end",
    "grid-unit-rows"],
    Explanation:
      "The align-content property is used to position the grid inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for desktops and large screens in a media query?",
    Answer: "1025px - 1200px",
    Distractors: ["25px - 120px",
    "125px - 12,000px",
    "5px - 12px"],
    Explanation:
      "The range of 1025px - 1200px can be used to target desktops and large screens in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question: "In CSS, what does the A stand for in HSLA?",
    Answer: "Alpha",
    Distractors: ["Alphabetical",
    "Ambiguous",
    "Ancient"],
    Explanation:
      "The A in HSLA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/"
  },
  {
    Question:
      "In CSS, what does the repeat-y value do in the background-repeat property?",
    Answer: "It repeats the image along the y-axis.",
    Distractors: ["It repeats the image along the x-axis.",
    "It repeats the image along both of the x-axis and y-axis.",
    "It repeats the image along the z-axis."],
    Explanation: "The repeat-y value repeats the image along the y-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/"
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with justify-content?",
    Answer: "flex-middle",
    Distractors: ["flex-start",
    "flex-end",
    "space-around"],
    Explanation:
      "In CSS Flexbox, some of the options for justify-content include space-around, flex-end, flex-start and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/"
  },
  {
    Question:
      "In HTML, how do you change the font-size of an h1 tag using inline CSS?",
    Answer: '<h1 style="font-size: 4rem">freeCodeCamp</h1>',
    Distractors: ['<h1 css="font-size: 4rem">freeCodeCamp</h1>',
    '<h1 font="font-size: 4rem">freeCodeCamp</h1>',
    '<h1 fontSize="font-size: 4rem">freeCodeCamp</h1>'],
    Explanation:
      "To change the font size of an HTML element, you can use the style attribute and the font-size property in the opening tag.",
    Link: "https://www.freecodecamp.org/news/html-font-style-how-to-change-text-color-and-size-with-an-html-tag/"
  },
  {
    Question: "In CSS, how many pixels are equivalent to 1 rem unit?",
    Answer: "16",
    Distractors: ["32",
    "12",
    "6"],
    Explanation: "One rem unit is equivalent to 16 pixels",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question:
      "In CSS, what selector is used to set the style of visited links?",
    Answer: "a:visited",
    Distractors: ["a:hover",
    "a:active",
    "a:link"],
    Explanation: "With a:visited you can set the style of visited links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/"
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for mobile devices in a media query?",
    Answer: "320px - 480px",
    Distractors: ["1000px - 5000px",
    "100px - 150px",
    "200px - 4000px"],
    Explanation:
      "The range of 320px - 480px can be used to target mobile devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/"
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between rows?",
    Answer: "row-gap",
    Distractors: ["grid-template-rows",
    "grid-columns",
    "repeat"],
    Explanation: "The row-gap property is used to create gaps between rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, what is the code used to create a CSS grid container?",
    Answer: "display: grid;",
    Distractors: ["display: flex;",
    "display: grid-box;",
    "display: grid-container;"],
    Explanation:
      "You can use display: grid; to create a new CSS grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question: "In CSS, how do you add content before an element?",
    Answer: "::before",
    Distractors: ["::add-content",
    "::before-content",
    "::after"],
    Explanation:
      "You can use the ::before selector to add content before an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/"
  },
  {
    Question:
      "In CSS Grid, what is the name of the CSS property used to position the grid inside the grid container along the x-axis?",
    Answer: "justify-content",
    Distractors: ["grid-template-areas",
    "grid-template-rows",
    "row-gap"],
    Explanation:
      "The justify-content property is used to position the grid in the grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture"
  },
  {
    Question:
      "In CSS, which of the following options is one way to center a div?",
    Answer:
      "use  display: flex; on the parent container and  margin: auto; for the child container",
    Distractors: [
      "use  display: flex; on the parent container and  margin: 20px; for the child container",

      "use  display: flex; on the parent container and  margin: 50px; for the child container",

      "use  display: flex; on the parent container and  margin: 45%; for the child container"],
    Explanation:
      "To center a div with CSS, apply display: flex; on the parent container and  margin: auto; for the child container.",
    Link: "https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/"
  },
  {
    Question: "In CSS, 3em units are equivalent to how much in px units?",
    Answer: "48",
    Distractors: ["32",
    "16",
    "12"],
    Explanation: "3em is equivalent to 48 pixels.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/"
  },
  {
    Question: "What color would rgb(255,0,0) give?",
    Answer: "Red",
    Distractors: ["Green",
    "Yellow",
    "Blue"],
    Explanation:
      "Each parameter defines the intensity of each color, rgb(red, green, and blue), with an integer number ranging from 0-255. The minimum value of 0 represents that none of the color is being shown, so it is at its darkest. On the other hand, the maximum value of 255 represents that the full amount of color and the full intensity is on display",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
  },
  {
    Question:
      "In CSS, which pseudo-class allows you to select the last element of a specific type?",
    Answer: ":last-of-type",
    Distractors: [":nth-last-child",
    ":last-child",
    ":last"],
    Explanation:
      "We can use the :last-of-type selector to target an element of a specific type within a container.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type/"
  },
  {
    Question:
      "In CSS, which of the following properties can be used to set the body color to black?",
    Answer: "background-color:black;",
    Distractors: ["body-color:black",
    "backgroundColor:black",
    "color:black"],
    Explanation:
      "In CSS, the background-color property is used to set the color of the background.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
  },
  {
    Question:
      "Which of the following is the correct syntax for an attribute selector in CSS?",
    Answer: "selector[attribute='value']",
    Distractors: ["container[value]",
    "attribute[value]",
    "value[attribute]"],
    Explanation:
      "The correct syntax for an attribute selector in CSS is selector[attribute='value'].",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
  },
  {
    Question:
      "Which of the following CSS properties is used to add a stroke in the text?",
    Answer: "text-stroke",
    Distractors: ["text-transform",
    "text-decoration",
    "None of the above"],
    Explanation:
      "text-stroke is a CSS property that is used to add a stroke in the text.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke"
  },
  {
    Question:
      "In CSS, which property is used to apply a groove style to the border?",
    Answer: "border-style",
    Distractors: ["border-bottom-color",
    "border-length",
    "border-width"],
    Explanation:
      "You can use border-style: groove; to specify groove border styles around HTML elements.",
    Link: "https://www.freecodecamp.org/news/css-border-style-and-html-code-examples/"
  },
  {
    Question:
      "In CSS, what will the following pseudo class selector do :nth-child(2)?",
    Answer: "Selects the second child of the parent element",
    Distractors: ["Select 2 children of the parent element",
    "Select 2 elements of the parent element",
    "None of the above"],
    Explanation:
      "The :nth-child() pseudo-class selector matches every element that is the second child, third child, etc. of its parent.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"
  },
  {
    Question:
      "Which CSS property is utilized to manage the spacing between characters in text?",
    Answer: "letter-spacing",
    Distractors: ["word-spacing",
    "line-height",
    "text-indent"],
    Explanation:
      "The CSS property 'letter-spacing' is used to control the spacing between characters in a text.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing"
  },
  {
    Question:
      "What is the correct way to include an external CSS file in an HTML document?",
    Answer: '<link rel="stylesheet" href="styles.css">',
    Distractors: ['<style src="styles.css">',
    '<css href="styles.css">',
    '<script type="text/css" src="styles.css">'],
    Explanation:
      "To include an external CSS file in an HTML document, you should use the <link> element with the rel attribute set to 'stylesheet' and the href attribute pointing to the CSS file you want to include. ",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    Question:
      "Which CSS property is used to control the order of how elements are displayed in relation to each other along the z-axis?",
    Answer: "z-index",
    Distractors: ["stack-order",
    "z-order",
    "z-depth"],
    Explanation:
      "The z-index property in CSS is used to control the stacking order of elements in relation to each other along the z-axis (front to back). It's commonly used in the context of positioned or layered elements, such as when using relative or absolute positioning.",
    Link: "https://www.freecodecamp.org/news/how-the-z-index-property-works-under-the-hood/"
  },
  {
    Question:
      "Which CSS property is used to create a drop shadow for an element?",
    Answer: "box-shadow",
    Distractors: ["shadow-effect",
    "element-shadow",
    "text-shadow"],
    Explanation:
      "The box-shadow property in CSS is used to create a shadow effect for an element, such as a div or a box. It allows you to add shadow in terms of color, size, blur, spread, and position relative to the element.",
    Link: "https://www.freecodecamp.org/news/css-box-shadow-property-with-examples/"
  },
  {
    Question:
      "In CSS, which value is used to make an element take up the full available width of its parent container?",
    Answer: "100%",
    Distractors: ["full-width",
    "max-width",
    "auto"],
    Explanation:
      "When you set an element's width to 100%, it means that the element should occupy the entire width of its parent container. This is particularly useful for creating responsive web designs where you want elements to adapt to the available space.",
    Link: "https://www.freecodecamp.org/news/html-page-width-height/"
  },
  {
    Question:
      "Which CSS at-rule is used to specify a custom font to display the text in a website?",
    Answer: "@font-face",
    Distractors: ["@charset",
    "@namespace",
    "@font-feature-values"],
    Explanation:
      "The @font-face CSS at-rule specifies a custom font with which to display text and can be loaded from either via URL or a locally-installed font.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
  }
];

export default cssQuiz;

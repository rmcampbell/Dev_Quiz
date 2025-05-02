const javascriptQuiz = {
  category: 'JavaScript',
  questions: [
    {
      question: `In JavaScript, if let x='Prakhar', then what will be the result for console.log(x.substring(2,5))?`,
      answer: 'akh',
      distractors: ['akaha', 'aka', 'akkkaha'],
      explanation: 'The first parameter in the substring method represents the starting index for the string while the second parameter represents the ending index.',
      link: 'https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/'
    },
    {
      question: 'In JavaScript, what is the range of numbers returned from the Math.random() method?',
      answer: 'Between 0 and 1 (including 0; not including 1).',
      distractors: [
        'Between 0 and 1 (including neither 0 or 1).',
        'Between 0 and 1 (including 1; not including 0).',
        'Between 0 and 100 (including 0; not including 100).'
      ],
      explanation: 'Math.random() returns a floating point (decimal) number that is less than one and greater than or equal to zero.',
      link: 'https://www.freecodecamp.org/news/javascript-math-random-method-explained/'
    },
    {
      question: 'In JavaScript, what is the difference between the indexOf() and search() methods?',
      answer: 'indexOf() can take a second parameter while search() cannot',
      distractors: [
        'Both methods are the same',
        'indexOf() only takes regular expressions',
        'The search() method runs 4x faster than the indexOf() method'
      ],
      explanation: 'One key difference between the indexOf() and search() methods is that indexOf() can take a second parameter while search() cannot.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf'
    },
    {
      question: `What does the 'debugger' statement in JavaScript do?`,
      answer: 'It acts as a breakpoint in a program',
      distractors: [
        'It will debug errors in the current statement',
        'It will debug all the errors in the program at runtime',
        'All of the above'
      ],
      explanation: `The 'debugger' statement is used to setup the breakup points at probable points of errors in the code snippet, using the debugger window.`,
      link: 'https://www.freecodecamp.org/news/debugging-javascript-for-beginners-5d4ac15dd1cd/#'
    },
    {
      question: 'What kind of programming can JavaScript be used for?',
      answer: 'Both Client and Server side programming',
      distractors: ['Server side only', 'Client side only', 'None of these options'],
      explanation: 'JavaScript is a programming language which can be used on the client and server side.',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction#are_server-side_and_client-side_programming_the_same'
    },
    {
      question: `In JavaScript, if let x='5', then what will be the value of console.log(x==5,x===5)?`,
      answer: 'true false',
      distractors: ['true true', 'false true', 'false false'],
      explanation: '== compares only the value while === compares the value as well as the type.',
      link: 'https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/'
    },
    {
      question: 'In JavaScript, which Web API is used to display a dialog box with an optional message?',
      answer: 'window.alert()',
      distractors: [
        'window.alertHTML()',
        'window.alertContent()',
        'window.alertBox()'
      ],
      explanation: 'In Javascript, the window.alert() method is used to display a dialog box with an optional message',
      link: 'https://www.freecodecamp.org/news/how-to-build-a-javascript-alert-box-or-popup-window/'
    },
    {
      question: `In JavaScript, if let word='Intelligent', then what will be the value of word.slice(2,5)?`,
      answer: 'tel',
      distractors: ['tellig', 'll', 'Inigent'],
      explanation: 'The slice() method returns a substring of the original string. The original string remains untouched.',
      link: 'https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/'
    },
    {
      question: 'In Javascript, what keyword is used to check whether a given property in an object is valid?',
      answer: 'in',
      distractors: ['is in', 'exists', 'lies'],
      explanation: 'The in keyword is used to check whether the given property in an object is valid or not.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in'
    },
    {
      question: 'In JavaScript, which method uses a callback function for each element in the array?',
      answer: 'forEach()',
      distractors: ['every(', 'forEvery()', 'each()'],
      explanation: 'The forEach() method uses a callback function for each element in the array.',
      link: 'https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/'
    },
    {
      question: 'Which of the following JavaScript array methods would run the slowest in a worst-case scenario?',
      answer: 'shift()',
      distractors: [
        'pop()',
        'push()',
        'All take about the same time on an array of the same size.'
      ],
      explanation: 'shift() removes elements from the front of the array, which means the entire array needs to be re-indexed. In contrast, pop() and push() both work from the \'back\' of the array and don\'t require re-indexing.',
      link: 'https://www.freecodecamp.org/news/the-complexity-of-simple-algorithms-and-data-structures-in-javascript-11e25b29de1e/'
    },
    {
      question: 'In JavaScript, what will be the result for the following code: 12345.6789.toFixed()?',
      answer: '12346',
      distractors: ['12345', '12345.6789', 'Undefined. toFixed() must take parameters'],
      explanation: 'Parameters are optional. If not passed, it will round the given number, leaving with no fractional part',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#examples'
    },
    {
      question: 'What is the process of converting a value from one data type to another called?',
      answer: 'Type Coercion',
      distractors: ['Type Casting', 'Data Converting', 'Change Value'],
      explanation: 'Type coercion is the process of converting a value from one type to another (such as a string to number, object to boolean, and so on).',
      link: 'https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/'
    },
    {
      question: `Which web API method cancels an event's default behavior?`,
      answer: 'preventDefault()',
      distractors: ['cancel()', 'preVent()', 'stop()'],
      explanation: 'The preventDefault() method cancels the event and prevents the browser from running its default action.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault'
    },
    {
      question: 'Which of the following methods allows you to set up functions to be called when a specified event happens, such as when a user clicks a button?',
      answer: 'addEventListener()',
      distractors: ['listenEvent()', 'callEvent()', 'eventWake()'],
      explanation: 'The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.',
      link: 'https://www.youtube.com/watch?v=jS4aFq5-91M&t=17471s'
    },
    {
      question: 'In JavaScript, which Web API is used to insert a child node anywhere under the parent node?',
      answer: 'insertBefore()',
      distractors: ['prepend()', 'append()', 'lookupPrefix()'],
      explanation: 'The insertBefore() method inserts a new child node anywhere under the parent node. This method has two parameters: newNode and referenceNode',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore'
    },
    {
      question: 'In JavaScript, which property of an element allows you to get or set the HTML markup contained within the element?',
      answer: 'innerHTML',
      distractors: ['insertAdjacentHTML', 'insertElement', 'setHTML'],
      explanation: 'The innerHTML is a property of the element that allows you to get or set the HTML markup contained within the element.',
      link: 'https://youtu.be/jS4aFq5-91M?t=18781'
    },
    {
      question: 'In JavaScript, what is it called when you have a combination of a function and its lexical environment?',
      answer: 'Closure',
      distractors: ['Debouncing', 'Throttling', 'Scope Chaining'],
      explanation: 'Closures are special types of functions where the inner function will have access to variables in the outer function\'s scope.',
      link: 'https://www.freecodecamp.org/news/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e'
    },
    {
      question: 'In JavaScript, what does a unary plus operator attempt to convert its operand to?',
      answer: 'a number',
      distractors: ['a string', 'an array', 'a sum'],
      explanation: 'The unary plus operator (+) attempts to convert its operand to a number.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus'
    },
    {
      question: 'Which Web API used with JavaScript provides information about the size and position of an element?',
      answer: '.getBoundingClientRect()',
      distractors: ['.getOwnPropertyDescriptors()', '.assign()', '.entries()'],
      explanation: 'The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect'
    },
    {
      question: 'In JavaScript, what is the name of the method used to remove white space from the beginning and end of a string?',
      answer: '.trim()',
      distractors: ['.substring()', '.reduce()', '.slice()'],
      explanation: 'The .trim() method removes white space (including space, tab, etc.) from both ends of a string and returns a new string without modifying the original.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim'
    },
    {
      question: 'In JavaScript, which built-in method/object will return the unique values of an array?',
      answer: 'Set',
      distractors: ['map()', 'reduce()', 'filter()'],
      explanation: 'The Set object lets you store unique values of any type, whether primitive values or object references. Set removes duplicate entries.',
      link: 'https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/'
    },
    {
      question: 'In JavaScript, all objects inherit a built-in property from a  ___________________.',
      answer: 'prototype',
      distractors: ['instance variable', 'node', 'accessor'],
      explanation: 'Prototypes provide the means for JavaScript objects to inherit features from other objects.',
      link: 'https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/'
    },
    {
      question: 'In JavaScript, every class has a special ____________ method that is used to create a new object instance of the class.',
      answer: 'constructor',
      distractors: ['starter', 'assign', 'apply'],
      explanation: 'Assigning 0 to the length property of the array will clear the contents of the array.',
      link: 'https://www.freecodecamp.org/news/how-javascript-implements-oop/'
    },
    {
      question: 'In JavaScript class-based OOP, are objects and classes the same constructs?',
      answer: 'No, objects and classes are two separate constructs.',
      distractors: [
        'No, objects and classes are completely unrelated in JavaScript.',
        'Yes, objects and classes are only used in functional programming, not in JavaScript class-based OOP',
        'Yes, objects and classes are interchangeable and can be used interchangeably in JavaScript class-based OOP.'
      ],
      explanation: 'Classes and objects represent distinct concepts within programming.  Objects are exclusively instantiated from classes.',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming'
    },
    {
      question: 'In JavaScript, a variable declared with the _________ keyword must be assigned an initial value.',
      answer: 'const',
      distractors: ['finally', 'new', 'var'],
      explanation: 'The value of a const variable must be specified when the variable is declared.',
      link: 'https://www.freecodecamp.org/news/let-me-be-a-const-ant-not-a-var-iable-1be52d153462/'
    },
    {
      question: 'In JavaScript, a variable that has been declared but not assigned a value is known as ____________.',
      answer: 'undefined',
      distractors: ['unknown', 'unassigned', 'pending'],
      explanation: 'A variable that has not been assigned a value is of type undefined',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'
    },
    {
      question: 'In JavaScript, a variable that has been declared and assigned a value of \'no value\' is ___________________',
      answer: 'null',
      distractors: ['non-value', 'empty', 'unreturned'],
      explanation: 'In JavaScript, null represents the absence of a value.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null'
    },
    {
      question: 'In JavaScript, what is the index of the first element in an array?',
      answer: '0',
      distractors: ['1', 'first', 'initial'],
      explanation: 'JavaScript arrays are zero-indexed. The first element of an array is located at index 0.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    },
    {
      question: 'In a JavaScript switch statement, the __________________ case executes if none of the options are true.',
      answer: 'default',
      distractors: ['override', 'else', 'alert'],
      explanation: 'A default clause is executed if the value of expression doesn\'t match any of the case clauses.',
      link: 'https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/'
    },
    {
      question: 'In JavaScript, which comparison operator is used to express strict equality?',
      answer: '===',
      distractors: ['>=', '+=', '<='],
      explanation: 'The strict equality operator returns true if two values have the same type and the same value. If the two compared values have different types, the result is false.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality'
    },
    {
      question: 'Select the correct syntax for a JavaScript ES6 arrow function:',
      answer: 'const variable = () => // code',
      distractors: [
        'const variable <=> ()()// code ',
        'const variable === function() => {//code}',
        'const variable =>> function(){//code}'
      ],
      explanation: 'ES6 arrow functions provide you with an alternative way to write shorter syntax compared to the traditional function expression.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
    },
    {
      question: 'In JavaScript, what will be the value for the following code: null ?? 20',
      answer: '20',
      distractors: ['undefined', 'null', 'Syntax error'],
      explanation: 'The nullish coalescing operator in JavaScript will return the right-hand side operand if the left-hand side operand is null or undefined.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
    },
    {
      question: `In JavaScript, in the global execution context, 'this' refers to the ______ object whether in strict mode or not.`,
      answer: 'window',
      distractors: ['null', 'undefined', 'document'],
      explanation: `In the global execution context, the 'this' keyword always points to the window object`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'
    },
    {
      question: 'In JavaScript, which queue is emptied first by an event loop?',
      answer: 'Microtask queue',
      distractors: ['Callback queue (Macrotask queue)', 'None', 'Both'],
      explanation: 'An event loop first empties the Microtask queue and once it is empty it starts to empty the Callback queue.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop'
    },
    {
      question: 'In JavaScript, which of the following is NOT in the Temporal Dead Zone(TDZ) during hoisting?',
      answer: 'var',
      distractors: ['let', 'const', 'class'],
      explanation: 'var is hoisted with the default value of undefined while let, const and classes are hoisted but are in the Temporal Dead Zone(TDZ) until the declaration is executed.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'
    },
    {
      question: 'In JavaScript, which of the following expressions will return true?',
      answer: 'null >= 0',
      distractors: ['null == 0', 'null === 0', 'null > 0'],
      explanation: 'null >= 0 and null <= 0 will both result in true because these operators will convert null to 0. With the == operator, null only equals undefined.',
      link: 'https://262.ecma-international.org/5.1/#sec-11.8.5'
    },
    {
      question: 'In JavaScript, which of the following is a commonly used web API?',
      answer: 'console',
      distractors: ['Array', 'Object', 'let, var, const'],
      explanation: 'console is part of a web API which is provided by browsers and Node.js.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/console'
    },
    {
      question: 'In JavaScript, which of the following methods returns a function?',
      answer: 'bind',
      distractors: ['apply', 'call', 'None of given'],
      explanation: 'The bind function returns a new function with given arguments as the new function\'s \'this\' keyword.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind'
    },
    {
      question: 'In JavaScript, which of the following methods returns the day of the month for the specified date according to local time?',
      answer: 'getDate()',
      distractors: ['getTheDate()', 'getDay()', 'getFullYear()'],
      explanation: 'The getDate() method returns the day of the month for the specified date according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate'
    },

    {
      question: 'In JavaScript, which of the following methods returns the day of the week for the specified date according to local time?',
      answer: 'getDay()',
      distractors: ['getDate()', 'getTheSpecificDay()', 'getFullYear()'],
      explanation: 'The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay'
    },

    {
      question: 'In JavaScript, which of the following methods returns the year of the specified date according to local time?',
      answer: 'getFullYear()',
      distractors: ['getDate()', 'listTheYear()', 'getMyFullYearNow()'],
      explanation: 'The getFullYear() method returns the year of the specified date according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear'
    },

    {
      question: 'In JavaScript, which of the following methods returns the day of the hour for the specified date, according to local time?',
      answer: 'getHours()',
      distractors: ['getMyHour()', 'getMilliseconds()', 'getHour()'],
      explanation: 'The getHours() method returns the hour for the specified date, according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours'
    },
    {
      question: 'In JavaScript, which of the following methods returns the milliseconds in the specified date according to local time?',
      answer: 'getMilliseconds()',
      distractors: ['getMillisec()', 'getTheMillisecondsNow()', 'getMinutes()'],
      explanation: 'The getMilliseconds() method returns the milliseconds in the specified date according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds'
    },
    {
      question: 'In JavaScript, which of the following methods returns the minutes in the specified date according to local time?',
      answer: 'getMinutes()',
      distractors: ['getMin()', 'getMilliseconds()', 'getTheMinutes()'],
      explanation: 'The getMinutes() method returns the minutes in the specified date according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes'
    },
    {
      question: 'In JavaScript, which of the following methods returns the month in the specified date according to local time, as a zero-based value?',
      answer: 'getMonth()',
      distractors: ['getTheMonth()', 'getSeconds()', 'getTime()'],
      explanation: 'The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth'
    },
    {
      question: 'In JavaScript, which of the following methods returns the seconds in the specified date according to local time?',
      answer: 'getSeconds()',
      distractors: ['getSec()', 'getTheSeconds()', 'getTime()'],
      explanation: 'The getSeconds() method returns the seconds in the specified date according to local time. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds'
    },
    {
      question: 'In JavaScript, which of the following methods returns the number of milliseconds since the Unix Epoch?',
      answer: 'getTime()',
      distractors: ['getMilliseconds()', 'getSeconds()', 'getTheTime()'],
      explanation: 'The getTime() method returns the number of milliseconds since the Unix Epoch. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime'
    },
    {
      question: 'In JavaScript, which method returns an HTMLCollection object that consists of all of the elements that have the same class name?',
      answer: 'getElementsByClassName()',
      distractors: ['querySelector()', 'getElementsByName()', 'getElementsByTagName()'],
      explanation: 'The getElementsByClassName method returns an object containing all of the child elements with that given class name.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName'
    },
    {
      question: 'In JavaScript, which operator is used to concatenate strings?',
      answer: '+',
      distractors: ['*', '&', '#'],
      explanation: 'The addition operator (+) produces the sum of numeric operands or string concatenation.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition'
    },
    {
      question: 'What are the two basic groups of data types in JavaScript?',
      answer: 'Primitive and Reference types',
      distractors: [
        'Enumerated and Object types',
        'Primitive and Floating types',
        'Character and Number types'
      ],
      explanation: 'Primitive and Reference types are the two basic groups of data types in JavaScript.',
      link: 'https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript'
    },
    {
      question: 'In JavaScript, what method is used to arrange array values into alphabetical and/or ascending order?',
      answer: 'sort()',
      distractors: [
        'shift()',
        'unshift()',
        'from()'
      ],
      explanation: 'The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'
    },
    {
      question: 'In JavaScript, what method is used to arrange array values into descending order?',
      answer: 'reverse()',
      distractors: [
        'from()',
        'unshift()',
        'join()'
      ],
      explanation: 'The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse'
    },
    {
      question: 'In JavaScript, the ____________ method returns the index position of the first occurrence of a value in a string.',
      answer: 'indexOf()',
      distractors: [
        'getPosition()',
        'valueOf()',
        'charAt(0)'
      ],
      explanation: 'The indexOf() method returns the first index of the specified value in a string and will return -1 if it is not present.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf'
    },
    {
      question: 'In JavaScript, which of the following is the default separator in the join() method?',
      answer: 'comma (\',\')',
      distractors: [
        'space (\' \')',
        'empty string (\'\')',
        'full-stop (\'.\')'
      ],
      explanation: 'If a separator is omitted, the array elements are separated with a comma (\',\').',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'
    },
    {
      question: 'In JavaScript, which method boils an array down to a single value?',
      answer: 'reduce()',
      distractors: [
        'map()',
        'filter()',
        'forEach()'
      ],
      explanation: 'The reduce() method iterates over the entire array and returns the value that results from running the “reducer” callback function to completion. The returned result is a single value.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-reduce/'
    },
    {
      question: 'In JavaScript, which method creates a new array and returns all of the items which pass the condition specified in the callback?',
      answer: 'filter()',
      distractors: [
        'split()',
        'concat()',
        'flat()'
      ],
      explanation: 'The filter() method creates a new array and returns all of the items which pass the condition specified in the callback.',
      link: 'https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/'
    },
    {
      question: 'In JavaScript, which method iterates over the elements of an array and creates a new array based on the results of the function specified within said method?',
      answer: 'map()',
      distractors: [
        'reverse()',
        'split()',
        'concat()'
      ],
      explanation: 'The map() method creates a new array filled with the results of calling a function (provided within the method) on every element in the array that calls the method.',
      link: 'https://www.freecodecamp.org/news/array-map-tutorial/'
    },
    {
      question: 'What kind of function accepts another function as an argument?',
      answer: 'Higher order',
      distractors: [
        'Arrow function',
        'Anonymous function',
        'Named function'
      ],
      explanation: 'A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both.',
      link: 'https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/'
    },
    {
      question: 'In JavaScript, which pair of symbols can be used in place of quotes to define a string?',
      answer: 'Template literals : ``',
      distractors: [
        'Square brackets: []',
        'Curly braces: {}',
        'Angle brackets: <>'
      ],
      explanation: 'Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions. Untagged template literals result in strings, which makes them useful for string interpolation (and multiline strings, since unescaped newlines are allowed).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
    },
    {
      question: 'In JavaScript, what is the name of the method that is used to convert a string into an array?',
      answer: 'split()',
      distractors: [
        'slice()',
        'trim()',
        'concat()'
      ],
      explanation: 'The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split'
    },
    {
      question: 'In JavaScript, what method removes the first element of an array and returns it?',
      answer: '.shift()',
      distractors: [
        '.push()',
        '.pop()',
        '.unshift()'
      ],
      explanation: 'The .shift() method removes the first element of an array and returns it. ',
      link: 'https://www.freecodecamp.org/news/the-javascript-array-handbook/'
    },
    {
      question: 'In JavaScript, what is the value of x ? let x = undefined || 1;',
      answer: '1',
      distractors: [
        '2',
        'undefined',
        'null'
      ],
      explanation: 'The value of x is 1 because undefined is a falsy value and that\'s why 1 is assigned to the variable x.',
      link: 'https://www.freecodecamp.org/news/javascript-logical-operators/'
    },
    {
      question: 'In JavaScript, how do you create a promise inside a function?',
      answer: 'return new Promise((resolve, reject) => {})',
      distractors: [
        'return new Promise(resolve, reject)',
        'return new Promise((resolve, reject))',
        'return Promise((reject, resolve))'
      ],
      explanation: 'You can use a promise inside a function with the following syntax: return new Promise((resolve, reject) => {})',
      link: 'https://www.freecodecamp.org/news/javascript-promises-explained/'
    },
    {
      question: 'In JavaScript, what is the correct syntax to check if two variables are strictly equal?',
      answer: 'if(A === B)',
      distractors: [
        'if(A == B)',
        'if(A = B)',
        'if(A.equals(B))'
      ],
      explanation: 'The triple equals operator (===) will check for strict equality because it checks for the same data type and value.',
      link: 'https://www.freecodecamp.org/news/javascript-promises-explained/'
    },
    {
      question: 'In JavaScript, what method adds an element to the end of an array?',
      answer: '.push()',
      distractors: [
        '.pop()',
        '.shift()',
        '.unshift()'
      ],
      explanation: 'The .push() method adds an element to the end of the array.',
      link: 'https://www.freecodecamp.org/news/the-javascript-array-handbook/'
    },
    {
      question: 'What does JSON stand for?',
      answer: 'JavaScript Object Notation',
      distractors: [
        'Jupiter Script Object Notation',
        'Jabber Script Object Notation',
        'Jargon Script Object Notation'
      ],
      explanation: 'JSON stands for JavaScript Object Notation which is a text-based format to store and exchange data.',
      link: 'https://www.freecodecamp.org/news/what-is-json-a-json-file-example/'
    },
    {
      question: 'In JavaScript, what is the name of the technique used to extract an object\'s values into new variables?',
      answer: 'Object destructuring',
      distractors: [
        'Array destructuring',
        'Hoisting',
        'typeof'
      ],
      explanation: 'Object destructuring is used to extract an object\'s values into new variables.',
      link: 'https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/'
    },
    {
      question: 'In JavaScript, which one of these methods modifies an array in place?',
      answer: '.splice()',
      distractors: [
        '.slice()',
        '.filter()',
        '.join()'
      ],
      explanation: 'The .splice() method modifies an array in place and it can be used to remove or add elements to an array.',
      link: 'https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/'
    },
    {
      question: 'Which of the following tools are the most convenient for running tasks in a NodeJS environment?',
      answer: 'npm scripts',
      distractors: [
        'gulp',
        'grunt',
        'Makefile'
      ],
      explanation: 'Npm scripts allow command line tools to be called directly without relying on external plugins.',
      link: 'https://www.freecodecamp.org/news/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8/'
    },
    {
      question: 'In JavaScript, how can you convert a string to an integer?',
      answer: 'parseInt()',
      distractors: [
        'parseString()',
        'parseInteger()',
        'parseSrt()'
      ],
      explanation: 'The parseInt() function converts the value passed as an argument to an integer.',
      link: 'https://www.freecodecamp.org/news/convert-string-to-number-javascript/'
    },
    {
      question: 'In JavaScript, how do you write a multiline comment?',
      answer: '/* */',
      distractors: [
        '//',
        '<!-- -->',
        '** **'
      ],
      explanation: 'In JavaScript, we use /* */ to write a multiline comment.',
      link: 'https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783'
    },
    {
      question: 'In JavaScript, what is the logical AND operator?',
      answer: '&&',
      distractors: [
        '||',
        '!',
        '**'
      ],
      explanation: '&& is the logical AND operator in JavaScript.',
      link: 'https://www.freecodecamp.org/news/javascript-logical-operators/'
    },
    {
      question: 'In JavaScript, which one of these types of loops will always run at least once?',
      answer: 'Do... While Loop',
      distractors: [
        'While Loop',
        'For Loop',
        'for each'
      ],
      explanation: 'The sequence of statements in a do..while loop runs at least once because the condition is evaluated after running the statements. ',
      link: 'https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/'
    },
    {
      question: 'Which one is NOT a JavaScript library?',
      answer: 'C#',
      distractors: [
        'React',
        'D3',
        'Moment'
      ],
      explanation: 'There are many popular JavaScript libraries including React, D3 and Moment.',
      link: 'https://www.freecodecamp.org/news/10-javascript-libraries-you-should-try/'
    },
    {
      question: 'In JavaScript, what is the name of the method used to add new elements to the DOM tree?',
      answer: 'document.createElement()',
      distractors: [
        'Callback function',
        '.querySelectorAll()',
        '.textContent()'
      ],
      explanation: 'The document.createElement() method is used to add new elements to the DOM tree.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the name of the property used to get the text content of a node in the DOM?',
      answer: 'textContent',
      distractors: [
        'text-content',
        'content',
        'getContent'
      ],
      explanation: 'The textContent property is used to get the text content of a node in the DOM.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the JavaScript keyword used to define a constant?',
      answer: 'const',
      distractors: [
        'var',
        'let',
        'concat'
      ],
      explanation: 'The keyword const is used to define a constant in JavaScript. The value of a constant can\'t be changed through reassignment.',
      link: 'https://www.freecodecamp.org/news/javascript-variables-beginners-guide/'
    },
    {
      question: 'In JavaScript, what is the name of the technique used to extract array values into new variables?',
      answer: 'Array destructuring',
      distractors: [
        'typeof',
        'async',
        'Optional chaining'
      ],
      explanation: 'Array destructuring is used  to extract array values into new variables.',
      link: 'https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the name of the method used to see if one string is found in another?',
      answer: '.includes()',
      distractors: [
        '.padEnd()',
        '.slice()',
        '.trim()'
      ],
      explanation: 'The .includes() method is used to check if one string is found in another.',
      link: 'https://www.freecodecamp.org/news/javascript-string-contains-how-to-use-js-includes/'
    },
    {
      question: 'In JavaScript, what is the name for variables that are accessible throughout the program?',
      answer: 'Global variables',
      distractors: [
        'Const variables',
        'Local variables',
        'No variable is accessible throughout in JavaScript'
      ],
      explanation: 'Global variables are declared and made accessible throughout the entire JavaScript program.',
      link: 'https://www.freecodecamp.org/news/global-variables-in-javascript-explained/'
    },
    {
      question: 'In JavaScript, what keyword is used to define a function?',
      answer: 'function',
      distractors: [
        'def',
        'func',
        'fct'
      ],
      explanation: 'The function keyword is used to define a function in JavaScript.',
      link: 'https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/'
    },
    {
      question: 'In JavaScript, what is the name of the method that extracts a portion of an array and returns a new array?',
      answer: '.slice()',
      distractors: [
        '.splice()',
        '.pop()',
        '.sort()'
      ],
      explanation: 'The .slice() method extracts a portion of an array and returns a new array.',
      link: 'https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/'
    },
    {
      question: 'In JavaScript, what is the name of the method used to select elements in an HTML document by referencing the id name?',
      answer: '.getElementById()',
      distractors: [
        '.getElementByClass()',
        '.getId()',
        '.getElementByTagName()'
      ],
      explanation: 'The .getElementById() method is used to select elements in the HTML document by referencing the id name.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In HTML, what are <script> tags?',
      answer: 'they\'re used for client side JavaScript code',
      distractors: [
        'used for server side JavaScript code',
        'used to link SQL databases',
        'used to link noSQL databases'
      ],
      explanation: 'The script tag is used for client side JavaScript code.',
      link: 'https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/'
    },
    {
      question: 'In JavaScript, which one of these operators is the equality operator?',
      answer: '==',
      distractors: [
        '?',
        '!=',
        '!=='
      ],
      explanation: 'The == operator returns true if two values are equal and false if they are not equal. It converts the values to a common type before doing the comparison.',
      link: 'https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/'
    },

    {
      question: 'In JavaScript, what string method returns the character at the specified index?',
      answer: '.charAt()',
      distractors: ['.getChar()', '.char()', '.character()'],
      explanation: 'The .charAt() method returns the character at the specified index in JavaScript.',
      link: 'https://devdocs.io/javascript/global_objects/string/charat'
    },
    {
      question: 'What is the main purpose of JavaScript in a website?',
      answer: 'Functionality',
      distractors: ['Structure', 'Style', 'Sound'],
      explanation: 'JavaScript is used to create interactive and dynamic websites.',
      link: 'https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/'
    },
    {
      question: 'Are semicolons strictly required in JavaScript?',
      answer: 'No',
      distractors: ['Yes', 'only when using the concat method', 'only when using the split method'],
      explanation: 'JavaScript does not require strict use of semicolons because it inserts them where they are needed through a process called Automatic Semicolon Insertion.',
      link: 'https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/#:~:text=This%20is%20all%20possible%20because%20JavaScript%20does%20not%20strictly%20require%20semicolons.&text=It\'s%20important%20to%20know%20the,not%20behave%20like%20you%20expect.'
    },
    {
      question: 'In JavaScript, what value is returned by default when a function doesn\'t have a return statement?',
      answer: 'undefined',
      distractors: ['None', 'concat', '0'],
      explanation: 'The value undefined is returned by functions that do not have a return statement.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions'
    },
    {
      question: 'In JavaScript, what operator takes an array and spreads it into its individual elements?',
      answer: 'Spread operator',
      distractors: ['Rest operator', 'Division Operator', 'Multiplication Operator'],
      explanation: 'The spread operator takes an array and spreads it into its individual elements. With this operator, we can pass the elements of an array as individual arguments to a function call.',
      link: 'https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/'
    },
    {
      question: 'In JavaScript, what method removes the last element of an array and returns it?',
      answer: '.pop()',
      distractors: ['.push()', '.shift()', '.unshift()'],
      explanation: 'The .pop() method removes the last element of an array and returns it.',
      link: 'https://www.freecodecamp.org/news/the-javascript-array-handbook/'
    },
    {
      question: 'In JavaScript, which one of these variable declarations can be re declared within its scope?',
      answer: 'var',
      distractors: ['splice', 'object.freeze', 'concat'],
      explanation: 'When you declare variables with var, they can be re-declared within their scope.',
      link: 'https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/'
    },
    {
      question: 'In JavaScript, how can you get the length of a string?',
      answer: '.length',
      distractors: ['len()', 'length()', '.size()'],
      explanation: 'Strings have a .length property that contains their length (number of characters).',
      link: 'https://devdocs.io/javascript/global_objects/string/length'
    },
    {
      question: 'In JavaScript, what is the name of the method that converts all of the letters in a string to lowercase?',
      answer: 'toLowerCase',
      distractors: ['toUpperCase', 'toLow', 'lower'],
      explanation: 'The toLowerCase method is used to convert all of the letters in a string to lowercase.',
      link: 'https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/'
    },
    {
      question: 'In JavaScript, what are the three types of scope?',
      answer: 'global, function, block',
      distractors: ['global, function, map', 'reduce, function, block', 'const, function, block'],
      explanation: 'The three types of scope in JavaScript are global, function and block.',
      link: 'https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/'
    },
    {
      question: 'In JavaScript, what is the name of the method used to attach an event to an HTML element like a button?',
      answer: '.addEventListener()',
      distractors: ['Hoisting', '.getElementById()', '.getElementByTagName()'],
      explanation: 'The .addEventListener() method is used to attach an event to an HTML element like a button.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what operator allows you to create a function that takes a variable number of arguments?',
      answer: 'Rest operator',
      distractors: ['Spread operator', 'Division Operator', 'Multiplication Operator'],
      explanation: 'The rest operator takes the individual arguments passed to a function and converts them into an array.',
      link: 'https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/'
    },
    {
      question: 'What is the DOM in JavaScript?',
      answer: 'A programming interface to create, change, or remove elements from the document.',
      distractors: [
        'A process that moves variables, functions, and classes to the top of the scope.',
        'Technique used to extract array values into new variables.',
        'A function that is used as an argument for another function.'
      ],
      explanation: 'The DOM is a programming interface to create, change, or remove elements from the document.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the name of a function that is passed as an argument to another function?',
      answer: 'Callback function',
      distractors: ['Arrow function', 'Anonymous function', 'Function declaration'],
      explanation: 'A callback function is a function that is passed as an argument to another function and then called inside the outer function.',
      link: 'https://www.freecodecamp.org/news/javascript-callback-function-plain-english/'
    },
    {
      question: 'In JavaScript, what string method combines the text of two or more strings and returns a new string?',
      answer: '.concat()',
      distractors: ['.combine()', '.string()', '.join()'],
      explanation: 'The .concat() method combines the text of two or more strings and returns a new string.',
      link: 'https://devdocs.io/javascript/global_objects/string/concat'
    },
    {
      question: 'What is the filename extension of a JavaScript file?',
      answer: '.js',
      distractors: ['.py', '.j', '.javascript'],
      explanation: 'JavaScript files have a .js filename extension.',
      link: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
      question: 'In JavaScript, what is the name of the method used to find all of the elements in the DOM that match a CSS selector and return a list of all of those nodes?',
      answer: '.querySelectorAll()',
      distractors: ['Array destructuring', '.includes() method', 'await'],
      explanation: 'The .querySelectorAll() method is used to find all of the elements that match the CSS selector and return a list of all of those nodes.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the logical OR operator?',
      answer: '||',
      distractors: ['&&', '!', '**'],
      explanation: '|| is the logical OR operator in JavaScript.',
      link: 'https://www.freecodecamp.org/news/javascript-logical-operators/'
    },
    {
      question: 'What was JavaScript originally called when it was first released?',
      answer: 'Mocha',
      distractors: ['LiveScript', 'Java', 'Netscape'],
      explanation: 'When JavaScript first came out it was called Mocha, then later changed to LiveScript and finally settled on JavaScript.',
      link: 'https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/'
    },
    {
      question: 'Which company created JavaScript?',
      answer: 'Netscape',
      distractors: ['IBM', 'Xerox', 'Google'],
      explanation: 'Brendan Eich created JavaScript when he was working at Netscape.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript'
    },
    {
      question: 'In JavaScript, what is the name of the method that returns true if at least one of the elements in an array passes the test implemented by the function provided?',
      answer: '.some()',
      distractors: ['.findIndex()', '.includes()', '.isArray()'],
      explanation: 'The .some() method returns true if at least one of the elements in the array passes the test implemented by the function provided. ',
      link: 'https://www.freecodecamp.org/news/javascript-array-some-tutorial-how-to-iterate-through-elements-in-an-array/'
    },
    {
      question: 'In JavaScript, what is the logical NOT operator?',
      answer: '!',
      distractors: ['&&', '||', '%'],
      explanation: '! is the logical NOT operator in JavaScript.',
      link: 'https://www.freecodecamp.org/news/javascript-logical-operators/'
    },
    {
      question: 'In JavaScript, what is the name of the method used to find elements that match one or more selectors?',
      answer: '.querySelector()',
      distractors: ['.textContent()', '.padEnd()', 'Optional chaining'],
      explanation: 'The .querySelector() method is used to find elements in the DOM that match one or more selectors.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the name of the process that moves variables, functions, and classes to the top of the scope?',
      answer: 'Hoisting',
      distractors: ['Setter', 'Break', 'Await'],
      explanation: 'Hoisting is the process of moving variables, classes, and functions to the top of the scope.',
      link: 'https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/'
    },
    {
      question: 'In JavaScript, what are the three ways to declare a variable?',
      answer: 'var, let, const',
      distractors: ['variable, let, const', 'var, let-var, const', 'var, concat, let'],
      explanation: 'In JavaScript, you can declare variables using var, let or const.',
      link: 'https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/'
    },
    {
      question: 'In JavaScript, what keyword is used to declare a variable that can only be used in the scope of declaration?',
      answer: 'let',
      distractors: ['splice', 'concat', 'block'],
      explanation: 'In JavaScript, you can use let to declare a variable that can only be used in the scope of declaration.',
      link: 'https://www.freecodecamp.org/news/javascript-variables-beginners-guide/'
    },
    {
      question: 'In JavaScript, what method joins all of the elements of an array into a string?',
      answer: '.join()',
      distractors: ['.char()', '.fill()', '.every()'],
      explanation: 'The .join() method joins all of the elements of an array into a string.',
      link: 'https://devdocs.io/javascript/global_objects/array/join'
    },
    {
      question: 'In JavaScript, what method adds an element to the beginning of an array?',
      answer: '.unshift()',
      distractors: ['.push()', '.pop()', '.shift()'],
      explanation: 'The .unshift() method adds the element passed as an argument to the beginning of an array.',
      link: 'https://www.freecodecamp.org/news/the-javascript-array-handbook/'
    },
    {
      question: 'In JavaScript, What is the name of the method that converts all of the letters in a string to uppercase?',
      answer: 'toUpperCase',
      distractors: ['toLowerCase', 'toUpper', 'upper'],
      explanation: 'The toUpperCase method is used to convert all of the letters in a string to uppercase.',
      link: 'https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/'
    },
    {
      question: 'In JavaScript, how do you write an inline comment?',
      answer: '// Comment',
      distractors: ['/* Comment', '# Comment', '<!-- Comment -->'],
      explanation: 'In JavaScript, an inline comment starts with //',
      link: 'https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783'
    },
    {
      question: 'In JavaScript, what does the spread operator do?',
      answer: 'It can be used to copy portions of an array or object into another array or object.',
      distractors: [
        'It can be used to check whether a certain value is present in another array.',
        'It can be used to remove the first element of an array.',
        `It can be used to return an array with an object's properties.`
      ],
      explanation: 'The spread operator can be used to copy portions of an array or object into another array or object.',
      link: 'https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/'
    },
    {
      question: 'What does DOM stand for?',
      answer: 'Document Object Model',
      distractors: ['Data Object Model', 'Document Online Model', 'Document Object Mainframe'],
      explanation: 'DOM stands for Document Object Model.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/'
    },
    {
      question: 'How can you change the background color of an HTML element using JavaScript?',
      answer: 'element.style.backgroundColor = \'red\'',
      distractors: [
        `element.style.backgroundcolor = 'red'`,
        `element.style.background-color = 'red'`,
        `element.style.bgColor = 'red'`
      ],
      explanation: 'JavaScript syntax is slightly different from CSS syntax. In JavaScript, you use camelCase instead of hyphens.',
      link: 'https://youtu.be/5fb2aPlgoys?t=704'
    },
    {
      question: 'In JavaScript, when an operator value is NULL, the typeof returned by the operator is:',
      answer: 'Object',
      distractors: ['Undefined', 'Integer', 'Boolean'],
      explanation: 'In JavaScript, typeof null is an object. This result of typeof null is actually a bug in the language.',
      link: 'https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/'
    },
    {
      question: `In JavaScript, what will 'typeof []' return?`,
      answer: 'Object',
      distractors: ['Null', 'Array', 'Undefined'],
      explanation: 'In JavaScript, everything that is not a primitive value is an object.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures'
    },
    {
      question: `In JavaScript, what will 'typeof NaN' return?`,
      answer: 'Number',
      distractors: ['ReferenceError', 'Null', 'NaN'],
      explanation: 'In JavaScript, NaN (not-a-number) is still a numeric data type, but it is undefined as a real number.',
      link: 'https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/'
    },
    {
      question: 'In JavaScript, what will the following code return: typeof a?',
      answer: 'undefined',
      distractors: ['string', 'object', 'number'],
      explanation: 'In JavaScript, if you use the typeof operator on an undeclared variable then it will return undefined. ',
      link: 'https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/'
    },
    {
      question: 'What JavaScript keyword will return the type of a variable when you call it?',
      answer: 'typeof',
      distractors: ['datatype', 'this', 'var'],
      explanation: 'typeof is a JavaScript keyword that will return the type of a variable when you call it. You can use this to validate function parameters or check if variables are defined.',
      link: 'https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/'
    },
    {
      question: 'In JavaScript, what is the return value of the .push() method?',
      answer: 'new length of the array, after the element has been pushed',
      distractors: ['undefined', 'null', 'Length of the old array, before the element is pushed'],
      explanation: '.push() returns the new length of the array, after the element has been pushed',
      link: 'https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/'
    },
    {
      question: 'In JavaScript, which method allows you to cancel a repeated action created with setInterval()?',
      answer: 'clearInterval',
      distractors: ['clearImmediate', 'clearTimeout', 'stopInterval'],
      explanation: 'This clearInterval() method is used to stop the timed loop that was started by the setInterval() method.',
      link: 'https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/'
    },
    {
      question: 'In JavaScript, which of the following is NOT the correct way to declare a variable?',
      answer: 'number',
      distractors: ['let', 'var', 'const'],
      explanation: 'JavaScript has three kinds of variable declarations: var, let and const.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations'
    },
    {
      question: 'In JavaScript, how many primitive data types are there?',
      answer: '7',
      distractors: ['3', '6', '8'],
      explanation: 'JavaScript has 7 primitive data types. Boolean, null, undefined, Number, BigInt, String and Symbol',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types'
    },
    {
      question: 'In JavaScript, what does NaN means?',
      answer: 'Not-A-Number',
      distractors: ['Near-Me Area Network', 'Non-Alpha-Numeric', 'Non-numeric'],
      explanation: 'The global NaN property is a value representing Not-A-Number. This property is used to check if a value is not a valid number.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN'
    },
    {
      question: 'In JavaScript, are variables declared with let, const and var hoisted? Select the most appropriate answer',
      answer: 'Yes, but variables declared with let and const are in Temporal Dead Zone',
      distractors: ['Yes', 'No', 'No, only variables declared with var are hoisted.'],
      explanation: 'Variables declared with let, const and var are hoisted. But, const and let are in temporal dead zone.',
      link: 'https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/'
    },
    {
      question: 'In JavaScript, what is the difference between == and ===?',
      answer: '== allows for type coercion of the values, while === does not',
      distractors: [
        '== does not allow for type coercion of the values, while === does',
        '== and === both allow for type coercion of the values, but === is more strict',
        'There is no difference between == and ==='
      ],
      explanation: 'The == operator allows for type coercion of the values, while === does not.',
      link: 'https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/'
    },
    {
      question: 'In JavaScript, how many falsy values are there?',
      answer: '6',
      distractors: ['5', '7', '8'],
      explanation: `There are 6 falsy values in JavaScript: false, 0, '', null, undefined, and NaN.`,
      link: 'https://www.freecodecamp.org/news/falsy-values-in-javascript/'
    },
    {
      question: 'In JavaScript, what is a function without a name called?',
      answer: 'An anonymous function',
      distractors: ['An unsigned function', 'A ghost function', 'A nameless function'],
      explanation: 'A function without a name is called an anonymous function. This is useful when you want to pass a function as an argument to another function.',
      link: 'https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/'
    },
    {
      question: 'In JavaScript, what does IIFE stand for?',
      answer: 'Immediately Invoked Function Expression',
      distractors: [
        'Immediately Invoked Function Executor',
        'Internally Invoked Function Expression',
        'Internally Invoked Function Executor'
      ],
      explanation: 'IIFE stands for Immediately Invoked Function Expression. This is a function that is executed immediately after it is created.',
      link: 'https://www.freecodecamp.org/news/iife-in-javascript-what/'
    },
    {
      question: 'Which JavaScript DOM manipulation method adds multiple classes to an element?',
      answer: 'classList()',
      distractors: ['className', 'classVar', 'classConstructor'],
      explanation: 'The classList() method adds multiple classes to an element. You can use it to add a class or multiple classes to an element by attaching the add() method to it. For example classList.add(\'btn\'), or classList.add(\'btn\', \'btn-block\')',
      link: 'https://www.freecodecamp.org/news/what-is-dom-in-javascript/#how-to-manipulate-css-from-javascript'
    },
    {
      question: 'In JavaScript, what is the difference between a parameter and an argument?',
      answer: 'A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.',
      distractors: [
        'A parameter is the actual value of a variable that gets passed to a function. An argument is a variable in a function definition.',
        'A parameter is a variable in a function definition. An argument is a variable in a function definition.',
        'A parameter is the actual value of a variable that gets passed to a function. An argument is the actual value of this variable that gets passed to the function.'
      ],
      explanation: 'A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.',
      link: 'https://www.freecodecamp.org/news/what-is-the-difference-between-parameters-and-arguments-in-javascript'
    },
    {
      question: 'In JavaScript, what is the difference between a function declaration and a function expression?',
      answer: 'A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function expression.',
      distractors: [
        'A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using the function keyword.',
        'A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function declaration.',
        'A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using a function declaration.'
      ],
      explanation: 'The main difference between a function declaration and a function expression is the function name, which can be omitted in function expressions to create anonymous functions. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function'
    },
    {
      question: 'In JavaScript, what is the return value for the following code:  [1, 2, 3, 4].shift()?',
      answer: '1',
      distractors: ['2, 3, 4', '4', '1, 2, 3'],
      explanation: 'The shift() method removes the first element from an array and returns that removed element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'
    },
    {
      question: 'In JavaScript, which is a correct way to concatenate 3 arrays?',
      answer: 'const newArr = arr1.concat(arr2, arr3)',
      distractors: [
        '`const newArr = join(arr1, arr2, arr3)`',
        '`const newArr = combine[arr1, arr2, arr3]`',
        '`const newArr = arr1.join[arr2, arr3]`'
      ],
      explanation: 'The concat() method is used to combine two or more arrays and returns a new array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'
    },
    {
      question: `Given the following JavaScript array, ['a', 'b', 'c', 'd', 'e'], what method is used to return ['c', 'd', 'e']?`,
      answer: 'arr.slice(2,5)',
      distractors: ['`arr.fill(c, d, e)`', '`arr.keys(c, d, e)`', '`arr.remove(0, 1)`'],
      explanation: 'The slice() method has two optional parameters which represent the starting and ending index for the array. This method returns a new shallow copy of the sliced array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'
    },
    {
      question: 'In JavaScript, what is the result for [22, -4, 99, 103, -30, 172].find(x => x > 50)?',
      answer: '99',
      distractors: ['{99, 103, 172}', 'undefined', '[99, 103, 172]'],
      explanation: 'The find() method will look through the array and return the first element that passes the callback function.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'
    },
    {
      question: 'In JavaScript, what array method takes an integer value and returns the element at that index?',
      answer: '.at()',
      distractors: ['.value()', '.flat()', '.some()'],
      explanation: 'The at() method takes a positive or negative integer and returns the index for that element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at'
    },
    {
      question: 'In JavaScript, what is the runtime model based on?',
      answer: 'Event Loop',
      distractors: ['Stack Memory Allotment Model', 'Queue Memory Allotment Model', 'Non Blocking Model'],
      explanation: 'The event loop is responsible for executing the code, processing events, and monitoring the callback queue and stack. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop'
    },
    {
      question: 'In JavaScript, which one is a type of data structure that stores unique values?',
      answer: 'Set',
      distractors: ['Maps', 'Object', 'Array'],
      explanation: 'A JavaScript Set is a type of data structure that stores unique values.',
      link: 'https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/'
    },
    {
      question: 'In JavaScript, what is the optional chaining operator?',
      answer: '?.',
      distractors: ['??', '&&', '**'],
      explanation: '?. is the optional chaining operator in JavaScript.',
      link: 'https://www.freecodecamp.org/news/javascript-optional-chaining/'
    },
    {
      question: `In JavaScript, what is the result for the following code: \`('b' + 'a' + + 'cteri' + 'a').toLowerCase()\`?`,
      answer: 'banana',
      distractors: ['b+a+cteri+a', 'bacteria', 'Undefined'],
      explanation: 'JavaScript will concatenate all the strings together and attempt to convert \'cteri\' to a number using the unary plus operator, and since \'cteri\' is not a number, the result will be NaN(Not a Number) which altogether is banana',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus'
    },
    {
      question: 'In JavaScript, which of the following is not an array method?',
      answer: '.search()',
      distractors: ['.includes()', '.forEach()', '.join()'],
      explanation: 'The search() method searches through the string to find a match to a regular expression. If no match is found, then the return value will be -1.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
    },
    {
      question: 'In JavaScript, which method executes a function once the timer expires?',
      answer: 'setTimeout',
      distractors: ['setInterval', 'clearInterval', 'clearTimeout'],
      explanation: 'The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed.',
      link: 'https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/'
    },
    {
      question: 'In JavaScript, which one of these console methods displays an array or object of rows and columns?',
      answer: 'console.table()',
      distractors: ['console.assert()', 'console.group()', 'console.log()'],
      explanation: 'The console.table() method displays an array or object of rows and columns.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/console/table'
    },
    {
      question: 'In JavaScript, what type of value is an Array?',
      answer: 'Object',
      distractors: ['Array', 'Map', 'Set'],
      explanation: 'In JavaScript besides primitives types, we have the Object value type. Arrays are a special type of object that represents a collection of similar types of values.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    },
    {
      question: 'In JavaScript, which of the following methods will return the string representation of a number?',
      answer: 'toFixed()',
      distractors: ['parseFloat()', 'valueOf()', 'round()'],
      explanation: 'The toFixed() method converts a number to a string and rounds it to a specified number of decimals.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed'
    },
    {
      question: 'In JavaScript, what should be the output of 3 < 2 < 1?',
      answer: 'true',
      distractors: ['false', 'syntax error', 'NaN'],
      explanation: 'JavaScript will first evaluate 3 < 2 which will return false. Then JavaScript will evaluate false < 1 which will return true because false is converted to the number 0. ',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table'
    },
    {
      question: 'In JavaScript, which operator has the highest precedence among these options?',
      answer: 'Grouping ()',
      distractors: ['Increment ++', 'Unary plus +', 'Equality =='],
      explanation: 'On the precedence table, the grouping () operator is the highest with a precedence value of 18',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table'
    },
    {
      question: 'In JavaScript, all objects inherit a built-in property from a ___________________.',
      answer: 'prototype',
      distractors: ['node', 'instance variable', 'accessor'],
      explanation: 'Prototypes provide the means for JavaScript objects to inherit features from other objects.',
      link: 'https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/'
    },
    {
      question: 'In JavaScript, how many threads does code run in?',
      answer: 'Single thread',
      distractors: ['Multiple threads', 'No threads', 'Can be both single threaded and multi-threaded'],
      explanation: 'JavaScript is a single-threaded language because it has one call stack and memory heap.',
      link: 'https://www.freecodecamp.org/news/javascript-concurrency-model-and-event-loop/'
    },
    {
      question: 'What does BOM stand for?',
      answer: 'Browser Object Model',
      distractors: ['Boolean Object Manipulation', 'Browser Object Manifest', 'Backend Object Model'],
      explanation: 'The Browser Object Model is a convention that refers to all objects displayed in the browser.',
      link: 'https://en.wikipedia.org/wiki/Browser_Object_Model'
    },
    {
      question: 'In JavaScript, which Web API stores and retrieves data from the web browser?',
      answer: 'localStorage',
      distractors: ['Array', 'Object', 'Class'],
      explanation: 'localStorage is a JavaScript object that stores data as key-value pairs in a web browser with no expiration date.',
      link: 'https://www.freecodecamp.org/news/how-to-store-data-in-web-browser-storage-localstorage-and-session-storage-explained/'
    },
    {
      question: 'In JavaScript, what does the .seal() method do?',
      answer: 'Prevents new properties from being added to it.',
      distractors: [
        'Permits its prototype from being reassigned',
        'Allows its existing properties to be removed',
        'Prevents its existing value from being modified'
      ],
      explanation: `JavaScript's Object.seal() method prevents the addition of new properties, removal of existing properties or the reassignment of its prototype.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal'
    },
    {
      question: 'In JavaScript, which of the following Math objects rounds a number down to the nearest whole integer?',
      answer: 'Math.floor()',
      distractors: ['Math.ceil()', 'Math.round()', 'Math.abs()'],
      explanation: 'Math.floor() is a JavaScript method that rounds a number down to the nearest whole number or integer.',
      link: 'https://www.freecodecamp.org/news/math-in-javascript/'
    },
    {
      question: 'In JavaScript, what is it called when an event is triggered on a target element and subsequent parent elements?',
      answer: 'Event bubbling',
      distractors: ['Event propagation', 'Event capturing', 'Event handling'],
      explanation: 'Event bubbling is an event propagation method that starts with the element that triggered the event and then bubbles up to its parent elements in their respective hierarchy.',
      link: 'https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/'
    },
    {
      question: 'In JavaScript, what is the nullish coalescing operator?',
      answer: '??',
      distractors: ['?.', '&&', '**'],
      explanation: '?? is the optional nullish coalescing in JavaScript. It returns the first operand if it is not null or undefined. Otherwise, it returns the second operand.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
    },
    {
      question: 'In JavaScript, which one gets higher precedence among \'setTimeout\' and \'Promise\' (considering zero delay)?',
      answer: 'Promise',
      distractors: ['setTimeout', 'Depends on the order of calling', 'Unpredictable'],
      explanation: 'Promises will always have a higher precedence than setTimeout. The Promise will be executed before the setTimeout, regardless of the order in which they are called.',
      link: 'https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/'
    },
    {
      question: 'In JavaScript, what is the result for typeof NaN?',
      answer: 'number',
      distractors: ['Object', 'String', 'Undefined '],
      explanation: 'typeof NaN will return number because NaN is a property of the Number object in JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN'
    },
    {
      question: 'In JavaScript, which array method returns a new iterable iterator object?',
      answer: 'values()',
      distractors: ['concat()', 'entries()', 'sort()'],
      explanation: 'The array.values() method returns a new array iterator. To access each element in that new array iterator, you can use a for...of loop.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values'
    },
    {
      question: 'What is the name for the primary entry point for all client-side JavaScript features and APIs?',
      answer: 'Window',
      distractors: ['Split', 'Reduce', 'Gate'],
      explanation: 'The Window object provides access to all JavaScript capabilities and APIs that are used on the client side.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window'
    },
    {
      question: 'In JavaScript, which of the following functions accepts an image element and a file as arguments?',
      answer: 'FileUpLoad',
      distractors: ['DownFile', 'Client', 'Database'],
      explanation: 'An HTML <input> element with the type=\'file\' attribute is represented by the Input FileUpload object and is a client-side JavaScript object.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications'
    },
    {
      question: 'In JavaScript, which methods accept an iterable of promises and returns a single array of results?',
      answer: 'Promise.all() and Promise.allSettled()',
      distractors: [
        'Promise.any() and Promise.all()',
        'Promise.resolve() and Promise.allSettled()',
        'Promise.reject() and Promise.reject()'
      ],
      explanation: 'Promise.all() and Promise.allSettled() accept an iterable of promises and return a single array of results.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'
    },
    {
      question: 'In JavaScript, what will be the return value of console.log(new String(\'Hello, world!\') === \'Hello, world!\')?',
      answer: 'false',
      distractors: ['equal', 'not equal', 'true'],
      explanation: `The answer is false. Triple equal ('===') compares the value and the type as well.`,
      link: 'https://youtu.be/zJSY8tbf_ys?t=24429'
    },
    {
      question: 'In JavaScript, which keyword is used to make portions of code accessible to other modules?',
      answer: 'export',
      distractors: ['import', 'as', 'from'],
      explanation: 'The export keyword is used to make it possible to access small portions of code in other modules.',
      link: 'https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/#'
    },
    {
      question: 'Which of the following options is a web API that runs code asynchronously in JavaScript?',
      answer: 'setTimeOut()',
      distractors: ['repeat()', 'timeOut()', 'delay()'],
      explanation: 'The setTimeout() function is an asynchronous function that will not pause execution of other functions in the stack.',
      link: 'https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/'
    },
    {
      question: `In JavaScript, what is the result of the following code: console.log(7 + '5')?`,
      answer: '75',
      distractors: ['11', '57', 'undefined'],
      explanation: `The result for console.log(7 + '5') is 75 because the + operator is used to concatenate strings.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition'
    },
    {
      question: `In JavaScript, what is the result of the following code: console.log(7 - '5')?`,
      answer: '2',
      distractors: ['12', 'undefined', 'NaN'],
      explanation: `The result is 2 because in JavaScript you can't use the - operator on strings so it will automatically convert the strings to numbers and subtract the two values.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction#subtraction_with_non-numbers'
    },
    {
      question: 'In JavaScript, the ___________ method returns the index position of the last occurrence of a value in an array.',
      answer: 'lastIndexOf()',
      distractors: ['indexOf()', 'charAt(0)', 'getPosition()'],
      explanation: 'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf'
    },
    {
      question: 'In JavaScript, which of the following is not a primitive data type?',
      answer: 'Object',
      distractors: ['Number', 'String', 'Undefined'],
      explanation: 'JavaScript has 7 primitive data types. Boolean, null, undefined, Number, BigInt, String and Symbol',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types'
    },
    {
      question: `In JavaScript, how many ways can you access an object's properties?`,
      answer: '2',
      distractors: ['1', '8', '13'],
      explanation: 'To access data from an object in JavaScript, you can use either dot notation or bracket notation.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors'
    },
    {
      question: `In JavaScript, what is the classification for a 'function' and 'class'?`,
      answer: 'Declaration statements',
      distractors: ['Keywords', 'Data types', 'Variables'],
      explanation: `Both 'function' and 'class' are used in the beginning to declare a function and class respectively.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements'
    },
    {
      question: 'In JavaScript, which of the following is NOT a composite data type?',
      answer: 'String',
      distractors: ['Array', 'Class', 'Object'],
      explanation: 'In JavaScript, a composite data type is defined as not being an object as well as having no properties or methods.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/Primitive'
    },
    {
      question: 'In JavaScript, what is the result for the following code: console.log(true + 34)?',
      answer: '35',
      distractors: ['34', 'true34', 'true'],
      explanation: 'Since true is converted to the number 1, then true + 34 would result in 35.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion'
    },
    {
      question: 'In JavaScript, how many parameters does the forEach() method take?',
      answer: '3',
      distractors: ['1', '2', '4'],
      explanation: 'The forEach() method takes 3 parameters: the current value, the index, and the array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'
    },
    {
      question: 'In JavaScript, how many parameters does the reduce() method take?',
      answer: '4',
      distractors: ['1', '2', '3'],
      explanation: 'The reduce() method takes 4 parameters: the accumulator, the current value, the index, and the array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
    },
    {
      question: 'In JavaScript, which array method returns true if ALL values pass a condition?',
      answer: 'every()',
      distractors: ['some()', 'filter()', 'find()'],
      explanation: 'The every() method returns true if all values in the array pass a condition and false if any value fails the condition.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
    },
    {
      question: 'In JavaScript, what does the forEach() method return?',
      answer: 'undefined',
      distractors: ['true', 'false', 'null'],
      explanation: 'forEach() always returns undefined. It makes no difference whether the return keyword is used or not.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'
    },
    {
      question: 'In JavaScript, what is the name for a variable that can be changed?',
      answer: 'Mutable Variable',
      distractors: ['Volatile Variable', 'Dynamic Variable', 'Fluid Variable'],
      explanation: 'Variables that can have their values changed are referred to as Mutable Variables. Only objects and arrays are changeable in JavaScript; primitive values are not.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/Mutable'
    },
    {
      question: 'In JavaScript, what is a use case for using an IIFE?',
      answer: 'To create a private variable and avoid polluting the global environment',
      distractors: ['To Create a Global Variable', 'To Run a Function', 'To Create a Constant'],
      explanation: 'An IIFE or Immediately Invoked Function Expression, is used to declare a private variable and to avoid polluting the global environment. If a function is declared with an IIFE by using a parenthesis around it, the variable declared inside it becomes private and its value can be accessed using a getter function inside the original function.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE'
    },
    {
      question: 'In JavaScript, which of the following statements is correct regarding async await?',
      answer: 'async automatically returns a promise',
      distractors: [
        'await keeps executing code regardless of promise status',
        'async can be used independently without an async function',
        'Multiple await keywords can be used in a single line inside an async function'
      ],
      explanation: 'Declaring an asynchronous function generates an AsyncFunction object. Whenever this async function is invoked, it produces a fresh Promise. This Promise will either resolve with the value returned by the async function or reject if there\'s an uncaught exception within the async function.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
    },
    {
      question: 'What is the main purpose of Web Workers in JavaScript?',
      answer: 'To perform time-consuming tasks in the background without blocking the main thread.',
      distractors: [
        'To create web animations and transitions.',
        'To manage browser cookies and local storage.',
        'To enhance the rendering of web pages.'
      ],
      explanation: 'Web Workers are a powerful feature for improving the responsiveness of web applications by offloading CPU-intensive tasks to separate threads. Understanding their use is essential for building efficient web applications',
      link: 'https://www.freecodecamp.org/news/how-webworkers-work-in-javascript-with-example/'
    },
    {
      question: `What is 'event delegation' in JavaScript?`,
      answer: 'Event delegation is a technique for handling events on multiple child elements',
      distractors: [
        'Event delegation is a way to dynamically create new events in JavaScript.',
        'Event delegation is a technique to delegate event handling to the document object.',
        'Event delegation is a way to remove all event listeners from an element.'
      ],
      explanation: 'Event delegation is a powerful and efficient technique in JavaScript for handling events on multiple elements by attaching a single event listener to a common ancestor of those elements.',
      link: 'https://www.freecodecamp.org/news/event-delegation-javascript/'
    },
    {
      question: 'What is the primary purpose of web cookies?',
      answer: 'Storing data on the client-side to maintain user sessions and preferences.',
      distractors: [
        'Collecting user personal information.',
        'Displaying website content.',
        'Routing internet traffic.'
      ],
      explanation: 'Web cookies are primarily used to store data on the client-side, such as user sessions and preferences, to enhance the user experience.',
      link: 'https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/'
    },
    {
      question: 'Which type of web cookies are created and managed by JavaScript, and are often used for temporary data storage?',
      answer: 'Session cookies.', distractors: ['Persistent cookies.', 'Secure cookies.', 'Third-party cookies.'],
      explanation: `Session cookies are created and managed by JavaScript and are typically used for temporary data storage during a user's session.`,
      link: 'https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/'
    },
    {
      question: 'What is the maximum storage capacity of a single cookie in most web browsers?',
      answer: '4 KB (kilobytes).',
      distractors: ['1 MB (megabyte).', '100 bytes.', '10 KB (kilobytes).'],
      explanation: 'In most web browsers, a single cookie can store up to 4 KB (kilobytes) of data.',
      link: 'https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/'
    },
    {
      question: 'Which one of the following is considered a primitive value in JavaScript?',
      answer: '3.14',
      distractors: ['[1, 4, 9, 16]', 'function add(x, y) { return x + y; }', `Date('2023-10-25')`],
      explanation: 'There are 7 primitive data types in JavaScript: strings, numbers, booleans, null, undefined, Symbol, and BigInt. Everything else is a JavaScript object including arrays, sets, functions, dates, etc.',
      link: 'https://www.freecodecamp.org/news/objects-in-javascript/'
    },
    {
      question: `What is the result of the given code: console.log(12 + 'A')?`,
      answer: `'12A'`,
      distractors: ['13', 'NaN', 'Error'],
      explanation: `12 + 'A' would result in '12A' since the entire expression will be considered as string concatenation rather than addition.`,
      link: 'https://www.freecodecamp.org/news/javascript-string-concatenation/'
    },
    {
      question: 'Which of the following is not a valid way to declare a variable in JavaScript?',
      answer: 'let 1z = 10;',
      distractors: ['var x;', 'const y = 5;', '`let name = \'John\'`'],
      explanation: 'Variable names cannot start with a number or any special character.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types'
    },
    {
      question: 'In JavaScript, what would happen if you tried to reassign a value to a const variable?',
      answer: 'JavaScript throws a TypeError',
      distractors: [
        'JavaScript throws a SyntaxError',
        'The JavaScript program will crash',
        'The program will return null'
      ],
      explanation: 'In JavaScript, a type error will occur because a variable declared with const cannot be reassigned.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
    },
    {
      question: 'In JavaScript, what would be the result for the following: 0.1 + 0.2 === 0.3?',
      answer: 'false',
      distractors: ['true', 'undefined', 'NaN'],
      explanation: 'Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON'
    },
    {
      question: 'What does Array.isArray([]) return?',
      answer: 'true',
      distractors: ['false', 'undefined', 'null'],
      explanation: 'Array.isArray([]) returns true because the isArray method checks if the passed argument is an array.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'
    }
  ]
};

export default javascriptQuiz;

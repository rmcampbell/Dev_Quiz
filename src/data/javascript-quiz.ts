const javascriptQuiz = [
  {
    Question:
      "In JavaScript, if let x='Prakhar', then what will be the result for console.log(x.substring(2,5))?",
    Answer: "akh",
    Distractors: ["akaha",
     "aka",
     "akkkaha"],
    Explanation:
      "The first parameter in the substring method represents the starting index for the string while the second parameter represents the ending index.",
    Link: "https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/"
  },
  {
    Question:
      "In JavaScript, what is the range of numbers returned from the Math.random() method?",
    Answer: "Between 0 and 1 (including 0; not including 1).",
    Distractors: ["Between 0 and 1 (including neither 0 or 1).",
     "Between 0 and 1 (including 1; not including 0).",
     "Between 0 and 100 (including 0; not including 100)."],
    Explanation:
      "Math.random() returns a floating point (decimal) number that is less than one and greater than or equal to zero.",
    Link: "https://www.freecodecamp.org/news/javascript-math-random-method-explained/"
  },
  {
    Question:
      "In JavaScript, what is the difference between the indexOf() and search() methods?",
    Answer: "indexOf() can take a second parameter while search() cannot",
    Distractors: ["Both methods are the same",
     "indexOf() only takes regular expressions",
     "The search() method runs 4x faster than the indexOf() method"],
    Explanation:
      "One key difference between the indexOf() and search() methods is that indexOf() can take a second parameter while search() cannot.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
  },
  {
    Question: "What does the 'debugger' statement in JavaScript do?",
    Answer: "It acts as a breakpoint in a program",
    Distractors: ["It will debug errors in the current statement",
     "It will debug all the errors in the program at runtime",
     "All of the above"],
    Explanation:
      "The 'debugger' statement is used to setup the breakup points at probable points of errors in the code snippet, using the debugger window.",
    Link: "https://www.freecodecamp.org/news/debugging-javascript-for-beginners-5d4ac15dd1cd/#"
  },
  {
    Question: "What kind of programming can JavaScript be used for?",
    Answer: "Both Client and Server side programming",
    Distractors: ["Server side only",
     "Client side only",
     "None of these options"],
    Explanation:
      "JavaScript is a programming language which can be used on the client and server side.",
    Link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction#are_server-side_and_client-side_programming_the_same"
  },
  {
    Question:
      "In JavaScript, if let x='5', then what will be the value of console.log(x==5,x===5)?",
    Answer: "true false",
    Distractors: ["true true",
     "false true",
     "false false"],
    Explanation:
      "== compares only the value while === compares the value as well as the type.",
    Link: "https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/"
  },
  {
    Question:
      "In JavaScript, which Web API is used to display a dialog box with an optional message?",
    Answer: "window.alert()",
    Distractors: ["window.alertHTML()",
     "window.alertContent()",
     "window.alertBox()"],
    Explanation:
      "In Javascript, the window.alert() method is used to display a dialog box with an optional message",
    Link: "https://www.freecodecamp.org/news/how-to-build-a-javascript-alert-box-or-popup-window/"
  },
  {
    Question:
      "In JavaScript, if let word='Intelligent', then what will be the value of word.slice(2,5)?",
    Answer: "tel",
    Distractors: ["tellig",
     "ll",
     "Inigent"],
    Explanation:
      "The slice() method returns a substring of the original string. The original string remains untouched.",
    Link: "https://www.freecodecamp.org/news/javascript-substring-examples-slice-substr-and-substring-methods-in-js/"
  },
  {
    Question:
      "In Javascript, what keyword is used to check whether a given property in an object is valid?",
    Answer: "in",
    Distractors: ["is in",
     "exists",
     "lies"],
    Explanation:
      "The in keyword is used to check whether the given property in an object is valid or not.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in"
  },
  {
    Question:
      "In JavaScript, which method uses a callback function for each element in the array?",
    Answer: "forEach()",
    Distractors: ["every(",
     "forEvery()",
     "each()"],
    Explanation:
      "The forEach() method uses a callback function for each element in the array.",
    Link: "https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/"
  },
  {
    Question:
      "Which of the following JavaScript array methods would run the slowest in a worst-case scenario?",
    Answer: "shift()",
    Distractors: ["pop()",
     "push()",
     "All take about the same time on an array of the same size."],
    Explanation:
      "shift() removes elements from the front of the array, which means the entire array needs to be re-indexed. In contrast, pop() and push() both work from the 'back' of the array and don't require re-indexing.",
    Link: "https://www.freecodecamp.org/news/the-complexity-of-simple-algorithms-and-data-structures-in-javascript-11e25b29de1e/"
  },
  {
    Question:
      "In JavaScript, what will be the result for the following code: 12345.6789.toFixed()?",
    Answer: "12346",
    Distractors: ["12345",
     "12345.6789",
     "Undefined. toFixed() must take parameters"],
    Explanation:
      "Parameters are optional. If not passed, it will round the given number, leaving with no fractional part",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#examples"
  },
  {
    Question:
      "What is the process of converting a value from one data type to another called?",
    Answer: "Type Coercion",
    Distractors: ["Type Casting",
     "Data Converting",
     "Change Value"],
    Explanation:
      "Type coercion is the process of converting a value from one type to another (such as a string to number, object to boolean, and so on).",
    Link: "https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/"
  },
  {
    Question: "Which web API method cancels an event's default behavior?",
    Answer: "preventDefault()",
    Distractors: ["cancel()",
     "preVent()",
     "stop()"],
    Explanation:
      "The preventDefault() method cancels the event and prevents the browser from running its default action.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"
  },
  {
    Question:
      "Which of the following methods allows you to set up functions to be called when a specified event happens, such as when a user clicks a button?",
    Answer: "addEventListener()",
    Distractors: ["listenEvent()",
     "callEvent()",
     "eventWake()"],
    Explanation:
      "The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.",
    Link: "https://www.youtube.com/watch?v=jS4aFq5-91M&t=17471s"
  },
  {
    Question:
      "In JavaScript, which Web API is used to insert a child node anywhere under the parent node?",
    Answer: "insertBefore()",
    Distractors: ["prepend()",
     "append()",
     "lookupPrefix()"],
    Explanation:
      "The insertBefore() method inserts a new child node anywhere under the parent node. This method has two parameters: newNode and referenceNode",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore"
  },
  {
    Question:
      "In JavaScript, which property of an element allows you to get or set the HTML markup contained within the element?",
    Answer: "innerHTML",
    Distractors: ["insertAdjacentHTML",
     "insertElement",
     "setHTML"],
    Explanation:
      "The innerHTML is a property of the element that allows you to get or set the HTML markup contained within the element.",
    Link: "https://youtu.be/jS4aFq5-91M?t=18781"
  },
  {
    Question:
      "In JavaScript, what is it called when you have a combination of a function and its lexical environment?",
    Answer: "Closure",
    Distractors: ["Debouncing",
     "Throttling",
     "Scope Chaining"],
    Explanation:
      "Closures are special types of functions where the inner function will have access to variables in the outer function's scope.",
    Link: "https://www.freecodecamp.org/news/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e"
  },
  {
    Question:
      "In JavaScript, what does a unary plus operator attempt to convert its operand to?",
    Answer: "a number",
    Distractors: ["a string",
     "an array",
     "a sum"],
    Explanation:
      "The unary plus operator (+) attempts to convert its operand to a number.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus"
  },
  {
    Question:
      "Which Web API used with JavaScript provides information about the size and position of an element?",
    Answer: ".getBoundingClientRect()",
    Distractors: [".getOwnPropertyDescriptors()",
     ".assign()",
     ".entries()"],
    Explanation:
      "The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to remove white space from the beginning and end of a string?",
    Answer: ".trim()",
    Distractors: [ ".substring()",
     ".reduce()",
     ".slice()"],
    Explanation:
      "The .trim() method removes white space (including space, tab, etc.) from both ends of a string and returns a new string without modifying the original.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim"
  },
  {
    Question:
      "In JavaScript, which built-in method/object will return the unique values of an array?",
    Answer: "Set",
    Distractors: [ "map()",
     "reduce()",
     "filter()"],
    Explanation:
      "The Set object lets you store unique values of any type, whether primitive values or object references. Set removes duplicate entries.",
    Link: "https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/"
  },
  {
    Question:
      "In JavaScript, all objects inherit a built-in property from a  ___________________.",
    Answer: "prototype",
    Distractors: [ "instance variable",
     "node",
     "accessor"],
    Explanation:
      "Prototypes provide the means for JavaScript objects to inherit features from other objects.",
    Link: "https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/"
  },
  {
    Question:
      "In JavaScript, every class has a special ____________ method that is used to create a new object instance of the class.",
    Answer: "constructor",
    Distractors: [ "starter",
     "assign",
     "apply"],
    Explanation:
      "Assigning 0 to the length property of the array will clear the contents of the array.",
    Link: "https://www.freecodecamp.org/news/how-javascript-implements-oop/"
  },
  {
    Question:
      "In JavaScript class-based OOP, are objects and classes the same constructs?",
    Answer: "No, objects and classes are two separate constructs.",
    Distractors: [
      "No, objects and classes are completely unrelated in JavaScript.",

      "Yes, objects and classes are only used in functional programming, not in JavaScript class-based OOP",

      "Yes, objects and classes are interchangeable and can be used interchangeably in JavaScript class-based OOP."],
    Explanation:
      "Classes and objects represent distinct concepts within programming.  Objects are exclusively instantiated from classes.",
    Link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming"
  },
  {
    Question:
      "In JavaScript, a variable declared with the _________ keyword must be assigned an initial value.",
    Answer: "const",
    Distractors: [ "finally",
     "new",
     "var"],
    Explanation:
      "The value of a const variable must be specified when the variable is declared.",
    Link: "https://www.freecodecamp.org/news/let-me-be-a-const-ant-not-a-var-iable-1be52d153462/"
  },
  {
    Question:
      "In JavaScript, a variable that has been declared but not assigned a value is known as ____________.",
    Answer: "undefined",
    Distractors: [ "unknown",
     "unassigned",
     "pending"],
    Explanation:
      "A variable that has not been assigned a value is of type undefined",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"
  },
  {
    Question:
      "In JavaScript, a variable that has been declared and assigned a value of 'no value' is ___________________",
    Answer: "null",
    Distractors: [ "non-value",
     "empty",
     "unreturned"],
    Explanation: "In JavaScript, null represents the absence of a value.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"
  },
  {
    Question:
      "In JavaScript, what is the index of the first element in an array?",
    Answer: "0",
    Distractors: [ "1",
     "first",
     "initial"],
    Explanation:
      "JavaScript arrays are zero-indexed. The first element of an array is located at index 0.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    Question:
      "In a JavaScript switch statement, the __________________ case executes if none of the options are true.",
    Answer: "default",
    Distractors: [ "override",
     "else",
     "alert"],
    Explanation:
      "A default clause is executed if the value of expression doesn't match any of the case clauses.",
    Link: "https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/"
  },
  {
    Question:
      "In JavaScript, which comparison operator is used to express strict equality?",
    Answer: "===",
    Distractors: [ ">=",
     "+=",
     "<="],
    Explanation:
      "The strict equality operator returns true if two values have the same type and the same value. If the two compared values have different types, the result is false.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"
  },
  {
    Question: "Select the correct syntax for a JavaScript ES6 arrow function:",
    Answer: "const variable = () => // code",
    Distractors: [ "const variable <=> ()()// code ",
     "const variable === function() => {//code}",
     "const variable =>> function(){//code}"],
    Explanation:
      "ES6 arrow functions provide you with an alternative way to write shorter syntax compared to the traditional function expression.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  },
  {
    Question:
      "In JavaScript, what will be the value for the following code: null ?? 20",
    Answer: "20",
    Distractors: [ "undefined",
     "null",
     "Syntax error"],
    Explanation:
      "The nullish coalescing operator in JavaScript will return the right-hand side operand if the left-hand side operand is null or undefined.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
  },
  {
    Question:
      "In JavaScript, in the global execution context, 'this' refers to the ______ object whether in strict mode or not.",
    Answer: "window",
    Distractors: [ "null",
     "undefined",
     "document"],
    Explanation:
      "In the global execution context, the 'this' keyword always points to the window object",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  },
  {
    Question: "In JavaScript, which queue is emptied first by an event loop?",
    Answer: "Microtask queue",
    Distractors: [ "Callback queue (Macrotask queue)",
     "None",
     "Both"],
    Explanation:
      "An event loop first empties the Microtask queue and once it is empty it starts to empty the Callback queue.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
  },
  {
    Question:
      "In JavaScript, which of the following is NOT in the Temporal Dead Zone(TDZ) during hoisting?",
    Answer: "var",
    Distractors: [ "let",
     "const",
     "class"],
    Explanation:
      "var is hoisted with the default value of undefined while let, const and classes are hoisted but are in the Temporal Dead Zone(TDZ) until the declaration is executed.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
  },
  {
    Question:
      "In JavaScript, which of the following expressions will return true?",
    Answer: "null >= 0",
    Distractors: [ "null == 0",
     "null === 0",
     "null > 0"],
    Explanation:
      "null >= 0 and null <= 0 will both result in true because these operators will convert null to 0. With the == operator, null only equals undefined.",
    Link: "https://262.ecma-international.org/5.1/#sec-11.8.5"
  },
  {
    Question:
      "In JavaScript, which of the following is a commonly used web API?",
    Answer: "console",
    Distractors: [ "Array",
     "Object",
     "let, var, const"],
    Explanation:
      "console is part of a web API which is provided by browsers and Node.js.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/console"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns a function?",
    Answer: "bind",
    Distractors: [ "apply",
     "call",
     "None of given"],
    Explanation:
      "The bind function returns a new function with given arguments as the new function's 'this' keyword.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the day of the month for the specified date according to local time?",
    Answer: "getDate()",
    Distractors: [ "getTheDate()",
     "getDay()",
     "getFullYear()"],
    Explanation:
      "The getDate() method returns the day of the month for the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate"
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the day of the week for the specified date according to local time?",
    Answer: "getDay()",
    Distractors: [ "getDate()",
     "getTheSpecificDay()",
     "getFullYear()"],
    Explanation:
      "The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay"
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the year of the specified date according to local time?",
    Answer: "getFullYear()",
    Distractors: [ "getDate()",
     "listTheYear()",
     "getMyFullYearNow()"],
    Explanation:
      "The getFullYear() method returns the year of the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear"
  },

  {
    Question:
      "In JavaScript, which of the following methods returns the day of the hour for the specified date, according to local time?",
    Answer: "getHours()",
    Distractors: [ "getMyHour()",
     "getMilliseconds()",
     "getHour()"],
    Explanation:
      "The getHours() method returns the hour for the specified date, according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the milliseconds in the specified date according to local time?",
    Answer: "getMilliseconds()",
    Distractors: [ "getMillisec()",
     "getTheMillisecondsNow()",
     "getMinutes()"],
    Explanation:
      "The getMilliseconds() method returns the milliseconds in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the minutes in the specified date according to local time?",
    Answer: "getMinutes()",
    Distractors: [ "getMin()",
     "getMilliseconds()",
     "getTheMinutes()"],
    Explanation:
      "The getMinutes() method returns the minutes in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the month in the specified date according to local time, as a zero-based value?",
    Answer: "getMonth()",
    Distractors: [ "getTheMonth()",
     "getSeconds()",
     "getTime()"],
    Explanation:
      "The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the seconds in the specified date according to local time?",
    Answer: "getSeconds()",
    Distractors: [ "getSec()",
     "getTheSeconds()",
     "getTime()"],
    Explanation:
      "The getSeconds() method returns the seconds in the specified date according to local time. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds"
  },
  {
    Question:
      "In JavaScript, which of the following methods returns the number of milliseconds since the Unix Epoch?",
    Answer: "getTime()",
    Distractors: [ "getMilliseconds()",
     "getSeconds()",
     "getTheTime()"],
    Explanation:
      "The getTime() method returns the number of milliseconds since the Unix Epoch. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"
  },
  {
    Question:
      "In JavaScript, which method returns an HTMLCollection object that consists of all of the elements that have the same class name?",
    Answer: "getElementsByClassName()",
    Distractors: [ "querySelector()",
     "getElementsByName()",
     "getElementsByTagName()"],
    Explanation:
      "The getElementsByClassName method returns an object containing all of the child elements with that given class name.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName"
  },
  {
    Question: "In JavaScript, which operator is used to concatenate strings?",
    Answer: "+",
    Distractors: [ "*",
     "&",
     "#"],
    Explanation:
      "The addition operator (+) produces the sum of numeric operands or string concatenation.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
  },
  {
    Question: "What are the two basic groups of data types in JavaScript?",
    Answer: "Primitive and Reference types",
    Distractors: [ "Enumerated and Object types",
     "Primitive and Floating types",
     "Character and Number types"],
    Explanation:
      "Primitive and Reference types are the two basic groups of data types in JavaScript.",
    Link: "https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript"
  },
  {
    Question:
      "In JavaScript, what method is used to arrange array values into alphabetical and/or ascending order?",
    Answer: "sort()",
    Distractors: [ "shift()",
     "unshift()",
     "from()"],
    Explanation:
      "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
  },
  {
    Question:
      "In JavaScript, what method is used to arrange array values into descending order?",
    Answer: "reverse()",
    Distractors: [ "from()",
     "unshift()",
     "join()"],
    Explanation:
      "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
  },
  {
    Question:
      "In JavaScript, the ____________ method returns the index position of the first occurrence of a value in a string.",
    Answer: "indexOf()",
    Distractors: [ "getPosition()",
     "valueOf()",
     "charAt(0)"],
    Explanation:
      "The indexOf() method returns the first index of the specified value in a string and will return -1 if it is not present.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"
  },
  {
    Question:
      "In JavaScript, which of the following is the default separator in the join() method?",
    Answer: "comma (',')",
    Distractors: [ "space (' ')",
     "empty string ('')",
     "full-stop ('.')"],
    Explanation:
      "If a separator is omitted, the array elements are separated with a comma (',').",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  },
  {
    Question:
      "In JavaScript, which method boils an array down to a single value?",
    Answer: "reduce()",
    Distractors: [ "map()",
     "filter()",
     "forEach()"],
    Explanation:
      "The reduce() method iterates over the entire array and returns the value that results from running the “reducer” callback function to completion. The returned result is a single value.",
    Link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-reduce/"
  },
  {
    Question:
      "In JavaScript, which method creates a new array and returns all of the items which pass the condition specified in the callback?",
    Answer: "filter()",
    Distractors: [ "split()",
     "concat()",
     "flat()"],
    Explanation:
      "The filter() method creates a new array and returns all of the items which pass the condition specified in the callback.",
    Link: "https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/"
  },
  {
    Question:
      "In JavaScript, which method iterates over the elements of an array and creates a new array based on the results of the function specified within said method?",
    Answer: "map()",
    Distractors: [ "reverse()",
     "split()",
     "concat()"],
    Explanation:
      "The map() method creates a new array filled with the results of calling a function (provided within the method) on every element in the array that calls the method.",
    Link: "https://www.freecodecamp.org/news/array-map-tutorial/"
  },
  {
    Question: "What kind of function accepts another function as an argument?",
    Answer: "Higher order",
    Distractors: [ "Arrow function",
     "Anonymous function",
     "Named function"],
    Explanation:
      "A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both.",
    Link: "https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/"
  },
  {
    Question:
      "In JavaScript, which pair of symbols can be used in place of quotes to define a string?",
    Answer: "Template literals : ``",
    Distractors: [ "Square brackets: []",
     "Curly braces: {}",
     "Angle brackets: <>"],
    Explanation:
      "Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions. Untagged template literals result in strings, which makes them useful for string interpolation (and multiline strings, since unescaped newlines are allowed).",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
  },
  {
    Question:
      "In JavaScript, what is the name of the method that is used to convert a string into an array?",
    Answer: "split()",
    Distractors: [ "slice()",
     "trim()",
     "concat()"],
    Explanation:
      "The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
  },
  {
    Question:
      "In JavaScript, what method removes the first element of an array and returns it?",
    Answer: ".shift()",
    Distractors: [ ".push()",
     ".pop()",
     ".unshift()"],
    Explanation:
      "The .shift() method removes the first element of an array and returns it. ",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/"
  },
  {
    Question: "In JavaScript, what is the value of x ? let x = undefined || 1;",
    Answer: "1",
    Distractors: [ "2",
     "undefined",
     "null"],
    Explanation:
      "The value of x is 1 because undefined is a falsy value and that's why 1 is assigned to the variable x.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/"
  },
  {
    Question: "In JavaScript, how do you create a promise inside a function?",
    Answer: "return new Promise((resolve, reject) => {})",
    Distractors: [ "return new Promise(resolve, reject)",
     "return new Promise((resolve, reject))",
     "return Promise((reject, resolve))"],
    Explanation:
      "You can use a promise inside a function with the following syntax: return new Promise((resolve, reject) => {})",
    Link: "https://www.freecodecamp.org/news/javascript-promises-explained/"
  },
  {
    Question:
      "In JavaScript, what is the correct syntax to check if two variables are strictly equal?",
    Answer: "if(A === B)",
    Distractors: [ "if(A == B)",
     "if(A = B)",
     "if(A.equals(B))"],
    Explanation:
      "The triple equals operator (===) will check for strict equality because it checks for the same data type and value.",
    Link: "https://www.freecodecamp.org/news/javascript-promises-explained/"
  },
  {
    Question:
      "In JavaScript, what method adds an element to the end of an array?",
    Answer: ".push()",
    Distractors: [ ".pop()",
     ".shift()",
     ".unshift()"],
    Explanation: "The .push() method adds an element to the end of the array.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/"
  },
  {
    Question: "What does JSON stand for?",
    Answer: "JavaScript Object Notation",
    Distractors: [ "Jupiter Script Object Notation",
     "Jabber Script Object Notation",
     "Jargon Script Object Notation"],
    Explanation:
      "JSON stands for JavaScript Object Notation which is a text-based format to store and exchange data.",
    Link: "https://www.freecodecamp.org/news/what-is-json-a-json-file-example/"
  },
  {
    Question:
      "In JavaScript, what is the name of the technique used to extract an object's values into new variables?",
    Answer: "Object destructuring",
    Distractors: [ "Array destructuring",
     "Hoisting",
     "typeof"],
    Explanation:
      "Object destructuring is used to extract an object's values into new variables.",
    Link: "https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/"
  },
  {
    Question:
      "In JavaScript, which one of these methods modifies an array in place?",
    Answer: ".splice()",
    Distractors: [ ".slice()",
     ".filter()",
     ".join()"],
    Explanation:
      "The .splice() method modifies an array in place and it can be used to remove or add elements to an array.",
    Link: "https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/"
  },
  {
    Question:
      "Which of the following tools are the most convenient for running tasks in a NodeJS environment?",
    Answer: "npm scripts",
    Distractors: [ "gulp",
     "grunt",
     "Makefile"],
    Explanation:
      "Npm scripts allow command line tools to be called directly without relying on external plugins.",
    Link: "https://www.freecodecamp.org/news/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8/"
  },
  {
    Question: "In JavaScript, how can you convert a string to an integer?",
    Answer: "parseInt()",
    Distractors: [ "parseString()",
     "parseInteger()",
     "parseSrt()"],
    Explanation:
      "The parseInt() function converts the value passed as an argument to an integer.",
    Link: "https://www.freecodecamp.org/news/convert-string-to-number-javascript/"
  },
  {
    Question: "In JavaScript, how do you write a multiline comment?",
    Answer: "/* */",
    Distractors: [ "//",
     "<!-- -->",
     "** **"],
    Explanation: "In JavaScript, we use /* */ to write a multiline comment.",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783"
  },
  {
    Question: "In JavaScript, what is the logical AND operator?",
    Answer: "&&",
    Distractors: [ "||",
     "!",
     "**"],
    Explanation: "&& is the logical AND operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/"
  },
  {
    Question:
      "In JavaScript, which one of these types of loops will always run at least once?",
    Answer: "Do... While Loop",
    Distractors: [ "While Loop",
     "For Loop",
     "for each"],
    Explanation:
      "The sequence of statements in a do..while loop runs at least once because the condition is evaluated after running the statements. ",
    Link: "https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/"
  },
  {
    Question: "Which one is NOT a JavaScript library?",
    Answer: "C#",
    Distractors: [ "React",
     "D3",
     "Moment"],
    Explanation:
      "There are many popular JavaScript libraries including React, D3 and Moment.",
    Link: "https://www.freecodecamp.org/news/10-javascript-libraries-you-should-try/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to add new elements to the DOM tree?",
    Answer: "document.createElement()",
    Distractors: [ "Callback function",
     ".querySelectorAll()",
     ".textContent()"],
    Explanation:
      "The document.createElement() method is used to add new elements to the DOM tree.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is the name of the property used to get the text content of a node in the DOM?",
    Answer: "textContent",
    Distractors: [ "text-content",
     "content",
     "getContent"],
    Explanation:
      "The textContent property is used to get the text content of a node in the DOM.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is the JavaScript keyword used to define a constant?",
    Answer: "const",
    Distractors: [ "var",
     "let",
     "concat"],
    Explanation:
      "The keyword const is used to define a constant in JavaScript. The value of a constant can't be changed through reassignment.",
    Link: "https://www.freecodecamp.org/news/javascript-variables-beginners-guide/"
  },
  {
    Question:
      "In JavaScript, what is the name of the technique used to extract array values into new variables?",
    Answer: "Array destructuring",
    Distractors: [ "typeof",
     "async",
     "Optional chaining"],
    Explanation:
      "Array destructuring is used  to extract array values into new variables.",
    Link: "https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to see if one string is found in another?",
    Answer: ".includes()",
    Distractors: [ ".padEnd()",
     ".slice()",
     ".trim()"],
    Explanation:
      "The .includes() method is used to check if one string is found in another.",
    Link: "https://www.freecodecamp.org/news/javascript-string-contains-how-to-use-js-includes/"
  },
  {
    Question:
      "In JavaScript, what is the name for variables that are accessible throughout the program?",
    Answer: "Global variables",
    Distractors: [ "Const variables",
     "Local variables",
     "No variable is accessible throughout in JavaScript"],
    Explanation:
      "Global variables are declared and made accessible throughout the entire JavaScript program.",
    Link: "https://www.freecodecamp.org/news/global-variables-in-javascript-explained/"
  },
  {
    Question: "In JavaScript, what keyword is used to define a function?",
    Answer: "function",
    Distractors: [ "def",
     "func",
     "fct"],
    Explanation:
      "The function keyword is used to define a function in JavaScript.",
    Link: "https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method that extracts a portion of an array and returns a new array?",
    Answer: ".slice()",
    Distractors: [ ".splice()",
     ".pop()",
     ".sort()"],
    Explanation:
      "The .slice() method extracts a portion of an array and returns a new array.",
    Link: "https://www.freecodecamp.org/news/javascript-array-slice-vs-splice-whats-the-difference/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to select elements in an HTML document by referencing the id name?",
    Answer: ".getElementById()",
    Distractors: [ ".getElementByClass()",
     ".getId()",
     ".getElementByTagName()"],
    Explanation:
      "The .getElementById() method is used to select elements in the HTML document by referencing the id name.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question: "In HTML, what are <script> tags?",
    Answer: "they're used for client side JavaScript code",
    Distractors: [ "used for server side JavaScript code",
     "used to link SQL databases",
     "used to link noSQL databases"],
    Explanation: "The script tag is used for client side JavaScript code.",
    Link: "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/"
  },
  {
    Question:
      "In JavaScript, which one of these operators is the equality operator?",
    Answer: "==",
    Distractors: [ "?",
     "!=",
     "!=="],
    Explanation:
      "The == operator returns true if two values are equal and false if they are not equal. It converts the values to a common type before doing the comparison.",
    Link: "https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/"
  },

  {
    Question:
      "In JavaScript, what string method returns the character at the specified index?",
    Answer: ".charAt()",
    Distractors: [ ".getChar()",
     ".char()",
     ".character()"],
    Explanation:
      "The .charAt() method returns the character at the specified index in JavaScript.",
    Link: "https://devdocs.io/javascript/global_objects/string/charat"
  },
  {
    Question: "What is the main purpose of JavaScript in a website?",
    Answer: "Functionality",
    Distractors: [ "Structure",
     "Style",
     "Sound"],
    Explanation:
      "JavaScript is used to create interactive and dynamic websites.",
    Link: "https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/"
  },
  {
    Question: "Are semicolons strictly required in JavaScript?",
    Answer: "No",
    Distractors: [ "Yes",
     "only when using the concat method",
     "only when using the split method"],
    Explanation:
      "JavaScript does not require strict use of semicolons because it inserts them where they are needed through a process called Automatic Semicolon Insertion.",
    Link: "https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/#:~:text=This%20is%20all%20possible%20because%20JavaScript%20does%20not%20strictly%20require%20semicolons.&text=It's%20important%20to%20know%20the,not%20behave%20like%20you%20expect."
  },
  {
    Question:
      "In JavaScript, what value is returned by default when a function doesn't have a return statement?",
    Answer: "undefined",
    Distractors: [ "None",
     "concat",
     "0"],
    Explanation:
      "The value undefined is returned by functions that do not have a return statement.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
  },
  {
    Question:
      "In JavaScript, what operator takes an array and spreads it into its individual elements?",
    Answer: "Spread operator",
    Distractors: [ "Rest operator",
     "Division Operator",
     "Multiplication Operator"],
    Explanation:
      "The spread operator takes an array and spreads it into its individual elements. With this operator, we can pass the elements of an array as individual arguments to a function call.",
    Link: "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/"
  },
  {
    Question:
      "In JavaScript, what method removes the last element of an array and returns it?",
    Answer: ".pop()",
    Distractors: [ ".push()",
     ".shift()",
     ".unshift()"],
    Explanation:
      "The .pop() method removes the last element of an array and returns it.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/"
  },
  {
    Question:
      "In JavaScript, which one of these variable declarations can be re declared within its scope?",
    Answer: "var",
    Distractors: [ "splice",
     "object.freeze",
     "concat"],
    Explanation:
      "When you declare variables with var, they can be re-declared within their scope.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/"
  },
  {
    Question: "In JavaScript, how can you get the length of a string?",
    Answer: ".length",
    Distractors: [ "len()",
     "length()",
     ".size()"],
    Explanation:
      "Strings have a .length property that contains their length (number of characters).",
    Link: "https://devdocs.io/javascript/global_objects/string/length"
  },
  {
    Question:
      "In JavaScript, what is the name of the method that converts all of the letters in a string to lowercase?",
    Answer: "toLowerCase",
    Distractors: [ "toUpperCase",
     "toLow",
     "lower"],
    Explanation:
      "The toLowerCase method is used to convert all of the letters in a string to lowercase.",
    Link: "https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/"
  },
  {
    Question: "In JavaScript, what are the three types of scope?",
    Answer: "global, function, block",
    Distractors: [ "global, function, map",
     "reduce, function, block",
     "const, function, block"],
    Explanation:
      "The three types of scope in JavaScript are global, function and block.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to attach an event to an HTML element like a button?",
    Answer: ".addEventListener()",
    Distractors: [ "Hoisting",
     ".getElementById()",
     ".getElementByTagName()"],
    Explanation:
      "The .addEventListener() method is used to attach an event to an HTML element like a button.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what operator allows you to create a function that takes a variable number of arguments?",
    Answer: "Rest operator",
    Distractors: [ "Spread operator",
     "Division Operator",
     "Multiplication Operator"],
    Explanation:
      "The rest operator takes the individual arguments passed to a function and converts them into an array.",
    Link: "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/"
  },
  {
    Question: "What is the DOM in JavaScript?",
    Answer:
      "A programming interface to create, change, or remove elements from the document.",
    Distractors: [
      "A process that moves variables, functions, and classes to the top of the scope.",
     "Technique used to extract array values into new variables.",
     "A function that is used as an argument for another function."],
    Explanation:
      "The DOM is a programming interface to create, change, or remove elements from the document.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is the name of a function that is passed as an argument to another function?",
    Answer: "Callback function",
    Distractors: [ "Arrow function",
     "Anonymous function",
     "Function declaration"],
    Explanation:
      "A callback function is a function that is passed as an argument to another function and then called inside the outer function.",
    Link: "https://www.freecodecamp.org/news/javascript-callback-function-plain-english/"
  },
  {
    Question:
      "In JavaScript, what string method combines the text of two or more strings and returns a new string?",
    Answer: ".concat()",
    Distractors: [ ".combine()",
     ".string()",
     ".join()"],
    Explanation:
      "The .concat() method combines the text of two or more strings and returns a new string.",
    Link: "https://devdocs.io/javascript/global_objects/string/concat"
  },
  {
    Question: "What is the filename extension of a JavaScript file?",
    Answer: ".js",
    Distractors: [ ".py",
     ".j",
     ".javascript"],
    Explanation: "JavaScript files have a .js filename extension.",
    Link: "https://en.wikipedia.org/wiki/JavaScript"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to find all of the elements in the DOM that match a CSS selector and return a list of all of those nodes?",
    Answer: ".querySelectorAll()",
    Distractors: [ "Array destructuring",
     ".includes() method",
     "await"],
    Explanation:
      "The .querySelectorAll() method is used to find all of the elements that match the CSS selector and return a list of all of those nodes.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question: "In JavaScript, what is the logical OR operator?",
    Answer: "||",
    Distractors: [ "&&",
     "!",
     "**"],
    Explanation: "|| is the logical OR operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/"
  },
  {
    Question:
      "What was JavaScript originally called when it was first released?",
    Answer: "Mocha",
    Distractors: [ "LiveScript",
     "Java",
     "Netscape"],
    Explanation:
      "When JavaScript first came out it was called Mocha, then later changed to LiveScript and finally settled on JavaScript.",
    Link: "https://www.freecodecamp.org/news/what-is-javascript-javascript-code-explained-in-plain-english/"
  },
  {
    Question: "Which company created JavaScript?",
    Answer: "Netscape",
    Distractors: [ "IBM",
     "Xerox",
     "Google"],
    Explanation:
      "Brendan Eich created JavaScript when he was working at Netscape.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript"
  },
  {
    Question:
      "In JavaScript, what is the name of the method that returns true if at least one of the elements in an array passes the test implemented by the function provided?",
    Answer: ".some()",
    Distractors: [ ".findIndex()",
     ".includes()",
     ".isArray()"],
    Explanation:
      "The .some() method returns true if at least one of the elements in the array passes the test implemented by the function provided. ",
    Link: "https://www.freecodecamp.org/news/javascript-array-some-tutorial-how-to-iterate-through-elements-in-an-array/"
  },
  {
    Question: "In JavaScript, what is the logical NOT operator?",
    Answer: "!",
    Distractors: [ "&&",
     "||",
     "%"],
    Explanation: "! is the logical NOT operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-logical-operators/"
  },
  {
    Question:
      "In JavaScript, what is the name of the method used to find elements that match one or more selectors?",
    Answer: ".querySelector()",
    Distractors: [ ".textContent()",
     ".padEnd()",
     "Optional chaining"],
    Explanation:
      "The .querySelector() method is used to find elements in the DOM that match one or more selectors.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is the name of the process that moves variables, functions, and classes to the top of the scope?",
    Answer: "Hoisting",
    Distractors: [ "Setter",
     "Break",
     "Await"],
    Explanation:
      "Hoisting is the process of moving variables, classes, and functions to the top of the scope.",
    Link: "https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/"
  },
  {
    Question: "In JavaScript, what are the three ways to declare a variable?",
    Answer: "var, let, const",
    Distractors: [ "variable, let, const",
     "var, let-var, const",
     "var, concat, let"],
    Explanation:
      "In JavaScript, you can declare variables using var, let or const.",
    Link: "https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/"
  },
  {
    Question:
      "In JavaScript, what keyword is used to declare a variable that can only be used in the scope of declaration?",
    Answer: "let",
    Distractors: [ "splice",
     "concat",
     "block"],
    Explanation:
      "In JavaScript, you can use let to declare a variable that can only be used in the scope of declaration.",
    Link: "https://www.freecodecamp.org/news/javascript-variables-beginners-guide/"
  },
  {
    Question:
      "In JavaScript, what method joins all of the elements of an array into a string?",
    Answer: ".join()",
    Distractors: [ ".char()",
     ".fill()",
     ".every()"],
    Explanation:
      "The .join() method joins all of the elements of an array into a string.",
    Link: "https://devdocs.io/javascript/global_objects/array/join"
  },
  {
    Question:
      "In JavaScript, what method adds an element to the beginning of an array?",
    Answer: ".unshift()",
    Distractors: [ ".push()",
     ".pop()",
     ".shift()"],
    Explanation:
      "The .unshift() method adds the element passed as an argument to the beginning of an array.",
    Link: "https://www.freecodecamp.org/news/the-javascript-array-handbook/"
  },
  {
    Question:
      "In JavaScript, What is the name of the method that converts all of the letters in a string to uppercase?",
    Answer: "toUpperCase",
    Distractors: [ "toLowerCase",
     "toUpper",
     "upper"],
    Explanation:
      "The toUpperCase method is used to convert all of the letters in a string to uppercase.",
    Link: "https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/"
  },
  {
    Question: "In JavaScript, how do you write an inline comment?",
    Answer: "// Comment",
    Distractors: [ "/* Comment",
     "# Comment",
     "<!-- Comment -->"],
    Explanation: "In JavaScript, an inline comment starts with //",
    Link: "https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-comment-your-javascript-code/16783"
  },
  {
    Question: "In JavaScript, what does the spread operator do?",
    Answer:
      "It can be used to copy portions of an array or object into another array or object.",
    Distractors: [
      "It can be used to check whether a certain value is present in another array.",
     "It can be used to remove the first element of an array.",

      "It can be used to return an array with an object's properties."],
    Explanation:
      "The spread operator can be used to copy portions of an array or object into another array or object.",
    Link: "https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/"
  },
  {
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractors: [ "Data Object Model",
     "Document Online Model",
     "Document Object Mainframe"],
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/"
  },
  {
    Question:
      "How can you change the background color of an HTML element using JavaScript?",
    Answer: "element.style.backgroundColor = 'red'",
    Distractors: [ "element.style.backgroundcolor = 'red'",
     "element.style.background-color = 'red'",
     "element.style.bgColor = 'red'"],
    Explanation:
      "JavaScript syntax is slightly different from CSS syntax. In JavaScript, you use camelCase instead of hyphens.",
    Link: "https://youtu.be/5fb2aPlgoys?t=704"
  },
  {
    Question:
      "In JavaScript, when an operator value is NULL, the typeof returned by the operator is:",
    Answer: "Object",
    Distractors: [ "Undefined",
     "Integer",
     "Boolean"],
    Explanation:
      "In JavaScript, typeof null is an object. This result of typeof null is actually a bug in the language.",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/"
  },
  {
    Question: "In JavaScript, what will 'typeof []' return?",
    Answer: "Object",
    Distractors: [ "Null",
     "Array",
     "Undefined"],
    Explanation:
      "In JavaScript, everything that is not a primitive value is an object.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
  },
  {
    Question: "In JavaScript, what will 'typeof NaN' return?",
    Answer: "Number",
    Distractors: [ "ReferenceError",
     "Null",
     "NaN"],
    Explanation:
      "In JavaScript, NaN (not-a-number) is still a numeric data type, but it is undefined as a real number.",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/"
  },
  {
    Question: "In JavaScript, what will the following code return: typeof a?",
    Answer: "undefined",
    Distractors: [ "string",
     "object",
     "number"],
    Explanation:
      "In JavaScript, if you use the typeof operator on an undeclared variable then it will return undefined. ",
    Link: "https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/"
  },
  {
    Question:
      "What JavaScript keyword will return the type of a variable when you call it?",
    Answer: "typeof",
    Distractors: [ "datatype",
     "this",
     "var"],
    Explanation:
      "typeof is a JavaScript keyword that will return the type of a variable when you call it. You can use this to validate function parameters or check if variables are defined.",
    Link: "https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/"
  },
  {
    Question: "In JavaScript, what is the return value of the .push() method?",
    Answer: "new length of the array, after the element has been pushed",
    Distractors: [ "undefined",
     "null",
     "Length of the old array, before the element is pushed"],
    Explanation:
      ".push() returns the new length of the array, after the element has been pushed",
    Link: "https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/"
  },
  {
    Question:
      "In JavaScript, which method allows you to cancel a repeated action created with setInterval()?",
    Answer: "clearInterval",
    Distractors: [ "clearImmediate",
     "clearTimeout",
     "stopInterval"],
    Explanation:
      "This clearInterval() method is used to stop the timed loop that was started by the setInterval() method.",
    Link: "https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/"
  },
  {
    Question:
      "In JavaScript, which of the following is NOT the correct way to declare a variable?",
    Answer: "number",
    Distractors: [ "let",
     "var",
     "const"],
    Explanation:
      "JavaScript has three kinds of variable declarations: var, let and const.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations"
  },
  {
    Question: "In JavaScript, how many primitive data types are there?",
    Answer: "7",
    Distractors: [ "3",
     "6",
     "8"],
    Explanation:
      "JavaScript has 7 primitive data types. Boolean, null, undefined, Number, BigInt, String and Symbol",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types"
  },
  {
    Question: "In JavaScript, what does NaN means?",
    Answer: "Not-A-Number",
    Distractors: [ "Near-Me Area Network",
     "Non-Alpha-Numeric",
     "Non-numeric"],
    Explanation:
      "The global NaN property is a value representing Not-A-Number. This property is used to check if a value is not a valid number.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
  },
  {
    Question:
      "In JavaScript, are variables declared with let, const and var hoisted? Select the most appropriate answer",
    Answer:
      "Yes, but variables declared with let and const are in Temporal Dead Zone",
    Distractors: [ "Yes",
     "No",
     "No, only variables declared with var are hoisted."],
    Explanation:
      "Variables declared with let, const and var are hoisted. But, const and let are in temporal dead zone.",
    Link: "https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/"
  },
  {
    Question: "In JavaScript, what is the difference between == and ===?",
    Answer: "== allows for type coercion of the values, while === does not",
    Distractors: [
      "== does not allow for type coercion of the values, while === does",

      "== and === both allow for type coercion of the values, but === is more strict",
     "There is no difference between == and ==="],
    Explanation:
      "The == operator allows for type coercion of the values, while === does not.",
    Link: "https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/"
  },
  {
    Question: "In JavaScript, how many falsy values are there?",
    Answer: "6",
    Distractors: [ "5",
     "7",
     "8"],
    Explanation:
      "There are 6 falsy values in JavaScript: false, 0, '', null, undefined, and NaN.",
    Link: "https://www.freecodecamp.org/news/falsy-values-in-javascript/"
  },
  {
    Question: "In JavaScript, what is a function without a name called?",
    Answer: "An anonymous function",
    Distractors: [ "An unsigned function",
     "A ghost function",
     "A nameless function"],
    Explanation:
      "A function without a name is called an anonymous function. This is useful when you want to pass a function as an argument to another function.",
    Link: "https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/"
  },
  {
    Question: "In JavaScript, what does IIFE stand for?",
    Answer: "Immediately Invoked Function Expression",
    Distractors: [ "Immediately Invoked Function Executor",
     "Internally Invoked Function Expression",
     "Internally Invoked Function Executor"],
    Explanation:
      "IIFE stands for Immediately Invoked Function Expression. This is a function that is executed immediately after it is created.",
    Link: "https://www.freecodecamp.org/news/iife-in-javascript-what/"
  },
  {
    Question:
      "Which JavaScript DOM manipulation method adds multiple classes to an element?",
    Answer: "classList()",
    Distractors: [ "className",
     "classVar",
     "classConstructor"],
    Explanation:
      "The classList() method adds multiple classes to an element. You can use it to add a class or multiple classes to an element by attaching the add() method to it. For example classList.add('btn'), or classList.add('btn', 'btn-block')",
    Link: "https://www.freecodecamp.org/news/what-is-dom-in-javascript/#how-to-manipulate-css-from-javascript"
  },
  {
    Question:
      "In JavaScript, what is the difference between a parameter and an argument?",
    Answer:
      "A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.",
    Distractors: [
      "A parameter is the actual value of a variable that gets passed to a function. An argument is a variable in a function definition.",

      "A parameter is a variable in a function definition. An argument is a variable in a function definition.",

      "A parameter is the actual value of a variable that gets passed to a function. An argument is the actual value of this variable that gets passed to the function."],
    Explanation:
      "A parameter is a variable in a function definition. An argument is the actual value of this variable that gets passed to the function.",
    Link: "https://www.freecodecamp.org/news/what-is-the-difference-between-parameters-and-arguments-in-javascript"
  },
  {
    Question:
      "In JavaScript, what is the difference between a function declaration and a function expression?",
    Answer:
      "A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function expression.",
    Distractors: [
      "A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using the function keyword.",

      "A function declaration is a function that is defined using the function keyword. A function expression is a function that is defined using a function declaration.",

      "A function declaration is a function that is defined using a function expression. A function expression is a function that is defined using a function declaration."],
    Explanation:
      "The main difference between a function declaration and a function expression is the function name, which can be omitted in function expressions to create anonymous functions. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function"
  },
  {
    Question:
      "In JavaScript, what is the return value for the following code:  [1, 2, 3, 4].shift()?",
    Answer: "1",
    Distractors: [ "2, 3, 4",
     "4",
     "1, 2, 3"],
    Explanation:
      "The shift() method removes the first element from an array and returns that removed element.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
  },
  {
    Question: "In JavaScript, which is a correct way to concatenate 3 arrays?",
    Answer: "const newArr = arr1.concat(arr2, arr3)",
    Distractors: [ "const newArr = join(arr1, arr2, arr3)",
     "const newArr = combine[arr1, arr2, arr3]",
     "const newArr = arr1.join[arr2, arr3]"],
    Explanation:
      "The concat() method is used to combine two or more arrays and returns a new array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
  },
  {
    Question:
      "Given the following JavaScript array, ['a', 'b', 'c', 'd', 'e'], what method is used to return ['c', 'd', 'e']?",
    Answer: "arr.slice(2,5)",
    Distractors: [ "arr.fill(c, d, e)",
     "arr.keys(c, d, e)",
     "arr.remove(0, 1)"],
    Explanation:
      "The slice() method has two optional parameters which represent the starting and ending index for the array. This method returns a new shallow copy of the sliced array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
  },
  {
    Question:
      "In JavaScript, what is the result for [22, -4, 99, 103, -30, 172].find(x => x > 50)?",
    Answer: "99",
    Distractors: [ "{99, 103, 172}",
     "undefined",
     "[99, 103, 172]"],
    Explanation:
      "The find() method will look through the array and return the first element that passes the callback function.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
  },
  {
    Question:
      "In JavaScript, what array method takes an integer value and returns the element at that index?",
    Answer: ".at()",
    Distractors: [ ".value()",
     ".flat()",
     ".some()"],
    Explanation:
      "The at() method takes a positive or negative integer and returns the index for that element.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at"
  },
  {
    Question: "In JavaScript, what is the runtime model based on?",
    Answer: "Event Loop",
    Distractors: [ "Stack Memory Allotment Model",
     "Queue Memory Allotment Model",
     "Non Blocking Model"],
    Explanation:
      "The event loop is responsible for executing the code, processing events, and monitoring the callback queue and stack. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
  },
  {
    Question:
      "In JavaScript, which one is a type of data structure that stores unique values?",
    Answer: "Set",
    Distractors: [ "Maps",
     "Object",
     "Array"],
    Explanation:
      "A JavaScript Set is a type of data structure that stores unique values.",
    Link: "https://www.freecodecamp.org/news/lets-learn-about-set-and-its-unique-functionality-in-javascript-5654c5c03de2/"
  },
  {
    Question: "In JavaScript, what is the optional chaining operator?",
    Answer: "?.",
    Distractors: [ "??",
     "&&",
     "**"],
    Explanation: "?. is the optional chaining operator in JavaScript.",
    Link: "https://www.freecodecamp.org/news/javascript-optional-chaining/"
  },
  {
    Question:
      "In JavaScript, what is the result for the following code: ('b' + 'a' + + 'cteri' + 'a').toLowerCase()?",
    Answer: "banana",
    Distractors: [ "b+a+cteri+a",
     "bacteria",
     "Undefined"],
    Explanation:
      "JavaScript will concatenate all the strings together and attempt to convert 'cteri' to a number using the unary plus operator, and since 'cteri' is not a number, the result will be NaN(Not a Number) which altogether is banana",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus"
  },
  {
    Question: "In JavaScript, which of the following is not an array method?",
    Answer: ".search()",
    Distractors: [ ".includes()",
     ".forEach()",
     ".join()"],
    Explanation:
      "The search() method searches through the string to find a match to a regular expression. If no match is found, then the return value will be -1.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search"
  },
  {
    Question:
      "In JavaScript, which method executes a function once the timer expires?",
    Answer: "setTimeout",
    Distractors: [ "setInterval",
     "clearInterval",
     "clearTimeout"],
    Explanation:
      "The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed.",
    Link: "https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/"
  },
  {
    Question:
      "In JavaScript, which one of these console methods displays an array or object of rows and columns?",
    Answer: "console.table()",
    Distractors: [ "console.assert()",
     "console.group()",
     "console.log()"],
    Explanation:
      "The console.table() method displays an array or object of rows and columns.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/console/table"
  },
  {
    Question: "In JavaScript, what type of value is an Array?",
    Answer: "Object",
    Distractors: [ "Array",
     "Map",
     "Set"],
    Explanation:
      "In JavaScript besides primitives types, we have the Object value type. Arrays are a special type of object that represents a collection of similar types of values.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    Question:
      "In JavaScript, which of the following methods will return the string representation of a number?",
    Answer: "toFixed()",
    Distractors: [ "parseFloat()",
     "valueOf()",
     "round()"],
    Explanation:
      "The toFixed() method converts a number to a string and rounds it to a specified number of decimals.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"
  },
  {
    Question: "In JavaScript, what should be the output of 3 < 2 < 1?",
    Answer: "true",
    Distractors: [ "false",
     "syntax error",
     "NaN"],
    Explanation:
      "JavaScript will first evaluate 3 < 2 which will return false. Then JavaScript will evaluate false < 1 which will return true because false is converted to the number 0. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table"
  },
  {
    Question:
      "In JavaScript, which operator has the highest precedence among these options?",
    Answer: "Grouping ()",
    Distractors: [ "Increment ++",
     "Unary plus +",
     "Equality =="],
    Explanation:
      "On the precedence table, the grouping () operator is the highest with a precedence value of 18",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table"
  },
  {
    Question:
      "In JavaScript, all objects inherit a built-in property from a ___________________.",
    Answer: "prototype",
    Distractors: [ "node",
     "instance variable",
     "accessor"],
    Explanation:
      "Prototypes provide the means for JavaScript objects to inherit features from other objects.",
    Link: "https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/"
  },
  {
    Question: "In JavaScript, how many threads does code run in?",
    Answer: "Single thread",
    Distractors: [ "Multiple threads",
     "No threads",
     "Can be both single threaded and multi-threaded"],
    Explanation:
      "JavaScript is a single-threaded language because it has one call stack and memory heap.",
    Link: "https://www.freecodecamp.org/news/javascript-concurrency-model-and-event-loop/"
  },
  {
    Question: "What does BOM stand for?",
    Answer: "Browser Object Model",
    Distractors: [ "Boolean Object Manipulation",
     "Browser Object Manifest",
     "Backend Object Model"],
    Explanation:
      "The Browser Object Model is a convention that refers to all objects displayed in the browser.",
    Link: "https://en.wikipedia.org/wiki/Browser_Object_Model"
  },
  {
    Question:
      "In JavaScript, which Web API stores and retrieves data from the web browser?",
    Answer: "localStorage",
    Distractors: [ "Array",
     "Object",
     "Class"],
    Explanation:
      "localStorage is a JavaScript object that stores data as key-value pairs in a web browser with no expiration date.",
    Link: "https://www.freecodecamp.org/news/how-to-store-data-in-web-browser-storage-localstorage-and-session-storage-explained/"
  },
  {
    Question: "In JavaScript, what does the .seal() method do?",
    Answer: "Prevents new properties from being added to it.",
    Distractors: [ "Permits its prototype from being reassigned",
     "Allows its existing properties to be removed",
     "Prevents its existing value from being modified"],
    Explanation:
      "JavaScript's Object.seal() method prevents the addition of new properties, removal of existing properties or the reassignment of its prototype.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal"
  },
  {
    Question:
      "In JavaScript, which of the following Math objects rounds a number down to the nearest whole integer?",
    Answer: "Math.floor()",
    Distractors: [ "Math.ceil()",
     "Math.round()",
     "Math.abs()"],
    Explanation:
      "Math.floor() is a JavaScript method that rounds a number down to the nearest whole number or integer.",
    Link: "https://www.freecodecamp.org/news/math-in-javascript/"
  },
  {
    Question:
      "In JavaScript, what is it called when an event is triggered on a target element and subsequent parent elements?",
    Answer: "Event bubbling",
    Distractors: [ "Event propagation",
     "Event capturing",
     "Event handling"],
    Explanation:
      "Event bubbling is an event propagation method that starts with the element that triggered the event and then bubbles up to its parent elements in their respective hierarchy.",
    Link: "https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/"
  },
  {
    Question: "In JavaScript, what is the nullish coalescing operator?",
    Answer: "??",
    Distractors: [ "?.",
     "&&",
     "**"],
    Explanation:
      "?? is the optional nullish coalescing in JavaScript. It returns the first operand if it is not null or undefined. Otherwise, it returns the second operand.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
  },
  {
    Question:
      "In JavaScript, which one gets higher precedence among 'setTimeout' and 'Promise' (considering zero delay)?",
    Answer: "Promise",
    Distractors: [ "setTimeout",
     "Depends on the order of calling",
     "Unpredictable"],
    Explanation:
      "Promises will always have a higher precedence than setTimeout. The Promise will be executed before the setTimeout, regardless of the order in which they are called.",
    Link: "https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/"
  },
  {
    Question: "In JavaScript, what is the result for typeof NaN?",
    Answer: "number",
    Distractors: [ "Object",
     "String",
     "Undefined "],
    Explanation:
      "typeof NaN will return number because NaN is a property of the Number object in JavaScript",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
  },
  {
    Question:
      "In JavaScript, which array method returns a new iterable iterator object?",
    Answer: "values()",
    Distractors: [ "concat()",
     "entries()",
     "sort()"],
    Explanation:
      "The array.values() method returns a new array iterator. To access each element in that new array iterator, you can use a for...of loop.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values"
  },
  {
    Question:
      "What is the name for the primary entry point for all client-side JavaScript features and APIs?",
    Answer: "Window",
    Distractors: [ "Split",
     "Reduce",
     "Gate"],
    Explanation:
      "The Window object provides access to all JavaScript capabilities and APIs that are used on the client side.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/Window"
  },
  {
    Question:
      "In JavaScript, which of the following functions accepts an image element and a file as arguments?",
    Answer: "FileUpLoad",
    Distractors: [ "DownFile",
     "Client",
     "Database"],
    Explanation:
      "An HTML <input> element with the type='file' attribute is represented by the Input FileUpload object and is a client-side JavaScript object.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications"
  },
  {
    Question:
      "In JavaScript, which methods accept an iterable of promises and returns a single array of results?",
    Answer: "Promise.all() and Promise.allSettled()",
    Distractors: [ "Promise.any() and Promise.all()",
     "Promise.resolve() and Promise.allSettled()",
     "Promise.reject() and Promise.reject()"],
    Explanation:
      "Promise.all() and Promise.allSettled() accept an iterable of promises and return a single array of results.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
  },
  {
    Question:
      "In JavaScript, what will be the return value of console.log(new String('Hello, world!') === 'Hello, world!')?",
    Answer: "false",
    Distractors: [ "equal",
     "not equal",
     "true"],
    Explanation:
      "The answer is false. Triple equal ('===') compares the value and the type as well.",
    Link: "https://youtu.be/zJSY8tbf_ys?t=24429"
  },
  {
    Question:
      "In JavaScript, which keyword is used to make portions of code accessible to other modules?",
    Answer: "export",
    Distractors: [ "import",
     "as",
     "from"],
    Explanation:
      "The export keyword is used to make it possible to access small portions of code in other modules.",
    Link: "https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/#"
  },
  {
    Question:
      "Which of the following options is a web API that runs code asynchronously in JavaScript?",
    Answer: "setTimeOut()",
    Distractors: [ "repeat()",
     "timeOut()",
     "delay()"],
    Explanation:
      "The setTimeout() function is an asynchronous function that will not pause execution of other functions in the stack.",
    Link: "https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/"
  },
  {
    Question:
      "In JavaScript, what is the result of the following code: console.log(7 + '5')?",
    Answer: "75",
    Distractors: [ "11",
     "57",
     "undefined"],
    Explanation:
      "The result for console.log(7 + '5') is 75 because the + operator is used to concatenate strings.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
  },
  {
    Question:
      "In JavaScript, what is the result of the following code: console.log(7 - '5')?",
    Answer: "2",
    Distractors: [ "12",
     "undefined",
     "NaN"],
    Explanation:
      "The result is 2 because in JavaScript you can't use the - operator on strings so it will automatically convert the strings to numbers and subtract the two values.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction#subtraction_with_non-numbers"
  },
  {
    Question:
      "In JavaScript, the ___________ method returns the index position of the last occurrence of a value in an array.",
    Answer: "lastIndexOf()",
    Distractors: [ "indexOf()",
     "charAt(0)",
     "getPosition()"],
    Explanation:
      "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
  },
  {
    Question:
      "In JavaScript, which of the following is not a primitive data type?",
    Answer: "Object",
    Distractors: [ "Number",
     "String",
     "Undefined"],
    Explanation:
      "JavaScript has 7 primitive data types. Boolean, null, undefined, Number, BigInt, String and Symbol",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_structures_and_types"
  },
  {
    Question:
      "In JavaScript, how many ways can you access an object's properties?",
    Answer: "2",
    Distractors: [ "1",
     "8",
     "13"],
    Explanation:
      "To access data from an object in JavaScript, you can use either dot notation or bracket notation.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
  },
  {
    Question:
      "In JavaScript, what is the classification for a 'function' and 'class'?",
    Answer: "Declaration statements",
    Distractors: [ "Keywords",
     "Data types",
     "Variables"],
    Explanation:
      "Both 'function' and 'class' are used in the beginning to declare a function and class respectively.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements"
  },
  {
    Question:
      "In JavaScript, which of the following is NOT a composite data type?",
    Answer: "String",
    Distractors: [ "Array",
     "Class",
     "Object"],
    Explanation:
      "In JavaScript, a composite data type is defined as not being an object as well as having no properties or methods.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
  },
  {
    Question:
      "In JavaScript, what is the result for the following code: console.log(true + 34)?",
    Answer: "35",
    Distractors: [ "34",
     "true34",
     "true"],
    Explanation:
      "Since true is converted to the number 1, then true + 34 would result in 35.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"
  },
  {
    Question:
      "In JavaScript, how many parameters does the forEach() method take?",
    Answer: "3",
    Distractors: [ "1",
     "2",
     "4"],
    Explanation:
      "The forEach() method takes 3 parameters: the current value, the index, and the array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  },
  {
    Question:
      "In JavaScript, how many parameters does the reduce() method take?",
    Answer: "4",
    Distractors: [ "1",
     "2",
     "3"],
    Explanation:
      "The reduce() method takes 4 parameters: the accumulator, the current value, the index, and the array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
  },
  {
    Question:
      "In JavaScript, which array method returns true if ALL values pass a condition?",
    Answer: "every()",
    Distractors: [ "some()",
     "filter()",
     "find()"],
    Explanation:
      "The every() method returns true if all values in the array pass a condition and false if any value fails the condition.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
  },
  {
    Question: "In JavaScript, what does the forEach() method return?",
    Answer: "undefined",
    Distractors: [ "true",
     "false",
     "null"],
    Explanation:
      "forEach() always returns undefined. It makes no difference whether the return keyword is used or not.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  },
  {
    Question:
      "In JavaScript, what is the name for a variable that can be changed?",
    Answer: "Mutable Variable",
    Distractors: [ "Volatile Variable",
     "Dynamic Variable",
     "Fluid Variable"],
    Explanation:
      "Variables that can have their values changed are referred to as Mutable Variables. Only objects and arrays are changeable in JavaScript; primitive values are not.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/Mutable"
  },
  {
    Question: "In JavaScript, what is a use case for using an IIFE?",
    Answer:
      "To create a private variable and avoid polluting the global environment",
    Distractors: [ "To Create a Global Variable",
     "To Run a Function",
     "To Create a Constant"],
    Explanation:
      "An IIFE or Immediately Invoked Function Expression, is used to declare a private variable and to avoid polluting the global environment. If a function is declared with an IIFE by using a parenthesis around it, the variable declared inside it becomes private and its value can be accessed using a getter function inside the original function.",
    Link: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
  },
  {
    Question:
      "In JavaScript, which of the following statements is correct regarding async await?",
    Answer: "async automatically returns a promise",
    Distractors: [ "await keeps executing code regardless of promise status",
     "async can be used independently without an async function",

      "Multiple await keywords can be used in a single line inside an async function"],
    Explanation:
      "Declaring an asynchronous function generates an AsyncFunction object. Whenever this async function is invoked, it produces a fresh Promise. This Promise will either resolve with the value returned by the async function or reject if there's an uncaught exception within the async function.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
  },
  {
    Question: "What is the main purpose of Web Workers in JavaScript?",
    Answer:
      "To perform time-consuming tasks in the background without blocking the main thread.",
    Distractors: [ "To create web animations and transitions.",
     "To manage browser cookies and local storage.",
     "To enhance the rendering of web pages."],
    Explanation:
      "Web Workers are a powerful feature for improving the responsiveness of web applications by offloading CPU-intensive tasks to separate threads. Understanding their use is essential for building efficient web applications",
    Link: "https://www.freecodecamp.org/news/how-webworkers-work-in-javascript-with-example/"
  },
  {
    Question: "What is 'event delegation' in JavaScript?",
    Answer:
      "Event delegation is a technique for handling events on multiple child elements",
    Distractors: [
      " Event delegation is a way to dynamically create new events in JavaScript.",

      "Event delegation is a technique to delegate event handling to the document object.",

      "Event delegation is a way to remove all event listeners from an element."],
    Explanation:
      "Event delegation is a powerful and efficient technique in JavaScript for handling events on multiple elements by attaching a single event listener to a common ancestor of those elements.",
    Link: "https://www.freecodecamp.org/news/event-delegation-javascript/"
  },
  {
    Question: "What is the primary purpose of web cookies?",
    Answer:
      "Storing data on the client-side to maintain user sessions and preferences.",
    Distractors: [ "Collecting user personal information.",
     "Displaying website content.",
     "Routing internet traffic."],
    Explanation:
      "Web cookies are primarily used to store data on the client-side, such as user sessions and preferences, to enhance the user experience.",
    Link: "https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/"
  },
  {
    Question:
      "Which type of web cookies are created and managed by JavaScript, and are often used for temporary data storage?",
    Answer: "Session cookies.",
    Distractors: [ "Persistent cookies.",
     "Secure cookies.",
     "Third-party cookies."],
    Explanation:
      "Session cookies are created and managed by JavaScript and are typically used for temporary data storage during a user's session.",
    Link: "https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/"
  },
  {
    Question:
      "What is the maximum storage capacity of a single cookie in most web browsers?",
    Answer: "4 KB (kilobytes).",
    Distractors: [ "1 MB (megabyte).",
     "100 bytes.",
     "10 KB (kilobytes)."],
    Explanation:
      "In most web browsers, a single cookie can store up to 4 KB (kilobytes) of data.",
    Link: "https://www.freecodecamp.org/news/everything-you-need-to-know-about-cookies-for-web-development/"
  },
  {
    Question:
      "Which one of the following is considered a primitive value in JavaScript?",
    Answer: "3.14",
    Distractors: [ "[1, 4, 9, 16]",
     "function add(x, y) { return x + y; }",
     "Date('2023-10-25')"],
    Explanation:
      "There are 7 primitive data types in JavaScript: strings, numbers, booleans, null, undefined, Symbol, and BigInt. Everything else is a JavaScript object including arrays, sets, functions, dates, etc.",
    Link: "https://www.freecodecamp.org/news/objects-in-javascript/"
  },
  {
    Question: "What is the result of the given code: console.log(12 + 'A')?",
    Answer: "'12A'",
    Distractors: [ "13",
     "NaN",
     "Error"],
    Explanation:
      "12 + 'A' would result in '12A' since the entire expression will be considered as string concatenation rather than addition.",
    Link: "https://www.freecodecamp.org/news/javascript-string-concatenation/"
  },
  {
    Question:
      "Which of the following is not a valid way to declare a variable in JavaScript?",
    Answer: "let 1z = 10;",
    Distractors: [ "var x;",
     "const y = 5;",
     "let name = 'John'"],
    Explanation:
      "Variable names cannot start with a number or any special character.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"
  },
  {
    Question:
      "In JavaScript, what would happen if you tried to reassign a value to a const variable?",
    Answer: "JavaScript throws a TypeError",
    Distractors: [ "JavaScript throws a SyntaxError",
     "The JavaScript program will crash",
     "The program will return null"],
    Explanation:
      "In JavaScript, a type error will occur because a variable declared with const cannot be reassigned.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
  },
  {
    Question:
      "In JavaScript, what would be the result for the following: 0.1 + 0.2 === 0.3?",
    Answer: "false",
    Distractors: [ "true",
     "undefined",
     "NaN"],
    Explanation:
      "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON"
  },
  {
    Question: "What does Array.isArray([]) return?",
    Answer: "true",
    Distractors: [ "false",
     "undefined",
     "null"],
    Explanation:
      "Array.isArray([]) returns true because the isArray method checks if the passed argument is an array.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
  }
];

export default javascriptQuiz;

const pythonQuiz = {
  category: 'Python',
  questions: [
    {
      question: 'In Python, what is the output of the following code: print(list(range(3, 6)))?',
      answer: '[3, 4, 5]',
      distractors: ['[3, 4, 5, 6]', '[3, 6]', '[3, 3, 3, 3, 3, 3]'],
      explanation: 'The list(range(3, 6)) function returns a list of numbers from 3, increments by 1 (by default), and stops at 5 (excluding 6).',
      link: 'https://www.freecodecamp.org/news/python-range-function-explained-with-code-examples/'
    },
    {
      question: 'In Python, which method is used to trim trailing whitespace from a string?',
      answer: 'strip()',
      distractors: ['trim()', 'remove()', 'removesapce()'],
      explanation: 'Python has three built-in methods for trimming leading and trailing whitespace and characters from strings: strip(), lstrip(), rstrip()',
      link: 'https://www.freecodecamp.org/news/python-strip-how-to-trim-a-string-or-line/'
    },
    {
      question: 'In Python, which method is used to write text to a file?',
      answer: 'write()',
      distractors: ['read()', 'appending()', 'writing()'],
      explanation: 'In Python the write() method is used to write text to a file.',
      link: 'https://www.freecodecamp.org/news/python-create-file-how-to-append-and-write-to-a-text-file/'
    },
    {
      question: 'In Python, which of the following is the correct syntax for a key-value pair in a dictionary?',
      answer: 'key1: value1',
      distractors: ['5j', `'key'`, `'count'`],
      explanation: 'A Python dictionary is a sequence of key-value pairs separated by commas. Here is the correct syntax: key1: value1.',
      link: 'https://www.freecodecamp.org/news/python-dictionary-methods-dictionaries-in-python/'
    },
    {
      question: 'In Python, what is the output for this code: `print(len(\'Hello world!\'))`?',
      answer: '12',
      distractors: ['11', '10', '13'],
      explanation: 'The len function returns all characters within a string. Every single character(and space) in Hello world! would result in a length of 12.',
      link: 'https://www.freecodecamp.org/news/print-statement-in-python-how-to-print-with-example-syntax-command/'
    },
    {
      question: 'In Python, what are anonymous functions called?',
      answer: 'Lambda function',
      distractors: ['Type function', 'beta functions', 'Sorted Function'],
      explanation: 'Lambda functions are anonymous functions that can contain only one expression.',
      link: 'https://www.freecodecamp.org/news/lambda-function-in-python-example-syntax/'
    },
    {
      question: 'In Python, which operator is used to perform Bitwise XOR operations?',
      answer: '^',
      distractors: ['~', '|', '&'],
      explanation: 'The ^ operator is used in Python to perform Bitwise NOT operations.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, if organization=\'freeCodeCamp\', then what is the result here: print(type(organization))?',
      answer: '<class \'str\'>',
      distractors: ['<class \'char\'>', '<class \'var\'>', 'error'],
      explanation: 'Python\'s type() method returns the class type for the object.',
      link: 'https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/'
    },
    {
      question: `In Python, if we have list=['rahul', 'monica', 'george', 'ross', 'george', 'ross'], then what is the result here: print(len(set(list))-len(list))?`,
      answer: '-2',
      distractors: ['2', '0', '6'],
      explanation: 'Lists can have duplicate items while Sets only contain unique items.',
      link: 'https://www.freecodecamp.org/news/python-set-operations-explained-with-examples/'
    },
    {
      question: `In Python, if we have word ='free' and phrase='code camp', then what is the result here: print(word + phrase)?`,
      answer: 'free code camp',
      distractors: ['free camp code', 'free + code camp', 'code camp free'],
      explanation: 'To concatenate two strings, you can use the + operator.',
      link: 'https://www.freecodecamp.org/news/python-concatenate-strings-how-to-combine-and-append-strings-in-python/'
    },
    {
      question: 'In Python, which operator is used to perform Bitwise NOT operations?',
      answer: '~',
      distractors: ['++', '!', '--'],
      explanation: 'The ~ operator is used in Python to perform Bitwise NOT operations.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, which operator is used to perform Bitwise OR operations?',
      answer: '|',
      distractors: ['>>>', '<<<', 'x'],
      explanation: 'The | operator is used in Python to perform Bitwise OR operations.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, which operator is used to perform Bitwise AND operations?',
      answer: '&',
      distractors: ['{{', '&&', '<'],
      explanation: 'The & operator is used in Python to perform Bitwise AND operations.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, which method is used to count the set bits in an integer?',
      answer: 'int.bit_count()',
      distractors: ['float.bit_count()', 'double.bit_count()', 'int.count()'],
      explanation: 'int.bit_count() is used to count set bits in an integer',
      link: 'https://docs.python.org/3/library/stdtypes.html?highlight=tim%20sort#int.bit_count'
    },
    {
      question: 'In Python, which module supports regular expressions?',
      answer: 're',
      distractors: ['regex', 'pyregex', 'pythonre'],
      explanation: 'The Python re module provides regular expression support.',
      link: 'https://docs.python.org/3/library/re.html'
    },
    {
      question: 'In Python, what keyword is used to raise exceptions?',
      answer: 'raise',
      distractors: ['try', 'goto', 'except'],
      explanation: 'The raise keyword is used in Python to throw exceptions.',
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, which one is the correct way to get the last item for the following list: numbers = [1, 2, 3, 4, 5]?',
      answer: 'All of the above',
      distractors: ['numbers[-1]', 'numbers[len(numbers)-1]', 'numbers.pop()'],
      explanation: 'If you use negative indexing or the pop() method it will return the last item in the numbers list.',
      link: 'https://www.freecodecamp.org/news/python-get-last-element-in-list-how-to-select-the-last-item/'
    },
    {
      question: 'In Python, which of the following is not a complex number?',
      answer: '2 + 3l',
      distractors: ['2 + 3j', 'complex(2, 3)', '2 + 3J'],
      explanation: 'In Python, the letter \'l\' (or L) stands for long and 2 + 3l would not result in a complex number.',
      link: 'https://forum.freecodecamp.org/t/an-introduction-to-python-complex-numbers-explained-with-examples/19218'
    },
    {
      question: 'In Python, which of the following list methods directly modifies the original list?',
      answer: 'sort()',
      distractors: ['sorted()', 'reversed()', 'None of the above'],
      explanation: 'sort() and reverse() directly modify the original list, while sorted() and reversed() return a copy of the original list.',
      link: 'https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/'
    },
    {
      question: 'In Python, which of the following options will reverse this string: sentence=\'freeCodeCamp rules\'?',
      answer: 'sentence[::-1]',
      distractors: [
        'reversed(sentence)',
        'sentence.reverse()',
        'sentence.sort(reverse=True)'
      ],
      explanation: 'In Python, [::-1] will return a reversed copy of the string.',
      link: 'https://www.freecodecamp.org/news/python-reverse-string-string-reversal-in-python-explained-with-code-examples/'
    },
    {
      question: 'In Python, which module provides a framework for writing line-oriented command interpreters?',
      answer: 'cmd',
      distractors: ['sys', 'os', 'io'],
      explanation: 'The cmd module makes it easier to use a series of commands within command-line interfaces (CLI)',
      link: 'https://docs.python.org/3/library/cmd.html'
    },
    {
      question: 'In Python, which module provides a way of using operating system dependent functionality?',
      answer: 'os',
      distractors: ['sys', 'builtins', 'io'],
      explanation: 'The Python os module is a set of functions used within the operating system. Some of these functions include fetching directory contents or creating new directories.',
      link: 'https://docs.python.org/3/library/os.html'
    },
    {
      question: 'In Python, which module is used to capture command-line arguments given at a file\'s runtime ?',
      answer: 'sys',
      distractors: ['os', 'collections', 'itertools'],
      explanation: 'We can use sys.argv to get a list of command line arguments.',
      link: 'https://docs.python.org/3/library/sys.html#sys.argv'
    },
    {
      question: 'What will be the output of following code 2//4?',
      answer: '0',
      distractors: ['0.5', '0', '2'],
      explanation: 'The division of operands where the result is the quotient in which the digits after the decimal point are removed',
      link: 'https://www.freecodecamp.org/news/what-does-double-slash-mean-in-python/'
    },
    {
      question: 'In Python 3, which function is used to accept input from the user?',
      answer: 'input()',
      distractors: ['inputing()', 'raw_input()', 'string()'],
      explanation: 'To take input from the user we use the input() function',
      link: 'https://forum.freecodecamp.org/t/a-guide-to-the-python-input-function/19192'
    },
    {
      question: `In Python, what does a class's __init__() method do?`,
      answer: 'It is a method that acts as a constructor and is called automatically whenever a new object is created from a class. It sets the initial state of a new object.',
      distractors: [
        'It initializes any imports you may have included at the top of your file.',
        'It is included to preserve backwards compatibility issues.',

        'It is a method that acts as a destructor and is called automatically whenever an object is destroyed.'
      ],
      explanation: '__init__() is a special method that is called whenever a new object is instantiated from a class. It is used to initialize the attributes of the class.',
      link: 'https://www.freecodecamp.org/news/object-oriented-programming-in-python/'
    },
    {
      question: 'In Python, which of the following is NOT a parameter of the sorted() method?',
      answer: 'iloc',
      distractors: ['key', 'iterable', 'reverse'],
      explanation: 'The sorted() method can accept up to 3 parameters which are iterable, key and reverse',
      link: 'https://www.freecodecamp.org/news/sort-dictionary-by-value-in-python/'
    },
    {
      question: 'In Python, which of the following is not an attribute of the datetime.now() function?',
      answer: 'week',
      distractors: ['month', 'day', 'year'],
      explanation: 'The attributes of the datetime.now() function are year, month, day, hour, minute, second and microsecond',
      link: 'https://www.freecodecamp.org/news/python-datetime-now-how-to-get-todays-date-and-time/'
    },
    {
      question: 'What is the output of the following Python code: print((10, 20, 30, 40, 50, 60, 70, 80)[2:5])?',
      answer: '(30, 40, 50)',
      distractors: ['(10, 30 ,40, 50)', '(30, 40, 50)', '(10, 20, 30)'],
      explanation: 'To get a sub tuple out of the Tuple, we need to specify the range of indexes. We need to specify where to start and where to end the range.',
      link: 'https://forum.freecodecamp.org/t/the-ultimate-guide-to-python-tuples-python-data-structure-tutorial-with-code-examples/19165'
    },
    {
      question: 'What is the output of the following Tuple Operation in Python: print((100,) * 2)?',
      answer: '(100,100)',
      distractors: ['(200)', '(100)', '(100,100)'],
      explanation: 'We can use * operator to repeat the tuple values n number of times.',
      link: 'https://forum.freecodecamp.org/t/the-ultimate-guide-to-python-tuples-python-data-structure-tutorial-with-code-examples/19165'
    },
    {
      question: `In Python, which of the following outputs 'camp'?`,
      answer: `print('freecodecamp'[-4:])`,
      distractors: [
        `print('freecodecamp'[8::-1])`,
        `print('freecodecamp'[8:11])`,
        `print('freecodecamp'[-4:10])`
      ],
      explanation: 'Here we use the negative index to start slicing at the 4th index from the end of the string.',
      link: 'https://www.freecodecamp.org/news/python-substring-how-to-slice-a-string/#how-to-get-the-last-n-characters-of-a-string-in-python'
    },
    {
      question: 'In Python, which Type casting method lets users convert a specific data type into a required data type?',
      answer: 'Explicit Type Conversion',
      distractors: ['Implicit Type Conversion', 'Default Type Conversion', 'Widening Type Conversion'],
      explanation: 'In Explicit Type Conversion, users convert the data type of an object to the required data type.',
      link: 'https://www.freecodecamp.org/news/learn-typecasting-in-python-in-five-minutes-90d42c439743/#explicit-type-conversion'
    },
    {
      question: 'In Python, which one of these is not a Dunder method?',
      answer: '__func',
      distractors: ['__init__', '__add__', '__len__ '],
      explanation: 'Dunder methods are names that are preceded and succeeded by double underscores, hence __func method is not a Dunder method.',
      link: 'https://docs.python.org/3/reference/lexical_analysis.html?highlight=dunder#reserved-classes-of-identifiers'
    },
    {
      question: 'In Python, what are the outputs for type(1) and type((1,))?',
      answer: '<class \'int\'>  <class \'tuple\'>',
      distractors: [`<class 'str'> <class 'int'>`, `<class 'dict'>  <class 'list'>`, `<class 'int'> <class 'int'> `],
      explanation: 'type(1) will return <class \'int\'> and type((1,)) will return <class \'tuple\'>',
      link: 'https://www.freecodecamp.org/news/python-tuple-vs-list-what-is-the-difference/'
    },
    {
      question: 'In Python, which method can be used to replace parts of a string?',
      answer: 'replace()',
      distractors: ['switch()', 'repl()', 'find()'],
      explanation: 'If you need to search through a string for a pattern, and replace it with another pattern, you can use the replace() method.',
      link: 'https://www.freecodecamp.org/news/python-string-methods-tutorial-how-to-use-find-and-replace-on-python-strings/'
    },
    {
      question: 'In Python, what is the correct way to create a function?',
      answer: 'def function_name(parameters):',
      distractors: [
        'function function_name(parameter):',
        'definition function_name {[parameters]}:',
        'create function_name(parameters):'
      ],
      explanation: 'The following snippet shows the general syntax to define a function in Python: def function_name(parameters):',
      link: 'https://www.freecodecamp.org/news/functions-in-python-a-beginners-guide/'
    },
    {
      question: `In Python, what is a correct syntax to output 'Hello World'?`,
      answer: `print('Hello World')`,
      distractors: [`echo('Hello World')`, `p('Hello World')`, `printf('Hello World')`],
      explanation: 'To print anything in Python, you use the print() function.',
      link: 'https://www.freecodecamp.org/news/python-print-variable-how-to-print-a-string-and-variable/'
    },
    {
      question: 'In Python, how can you create an empty dictionary?',
      answer: '{}',
      distractors: ['[]', '()', 'list()'],
      explanation: 'You can create an empty dictionary with {} in Python.',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, how can you create an empty set?',
      answer: 'set()',
      distractors: ['{}', 'dict()', '()'],
      explanation: 'You must call the set() function to create an empty set in Python.',
      link: 'https://www.freecodecamp.org/news/python-sets-detailed-visual-introduction/'
    },
    {
      question: 'In Python, the value of empty sequences, collections, and the number 0 are all ...',
      answer: 'Falsy',
      distractors: ['Truthy', 'FALSENESS', 'TRUENESS'],
      explanation: 'Empty sequences, collections, and the number 0 are falsy values in Python.',
      link: 'https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/'
    },
    {
      question: 'In Python, what operator can you use to check if a value is in a sequence?',
      answer: 'in',
      distractors: ['member', 'inside', 'partof'],
      explanation: 'The in operator is a membership operator in Python. It can be used to check if a value is in a sequence or not because it returns True if the value is in the list and False if it is not in the list. ',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, a value that evaluates to True in a boolean context is known as...',
      answer: 'Truthy',
      distractors: ['TRUENESS', 'Falsy', 'Truthful'],
      explanation: 'A value that evaluates to True in a boolean context is known as a truthy value.',
      link: 'https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/'
    },
    {
      question: 'In Python, what logical operator returns True if both operands are True?',
      answer: 'and',
      distractors: ['or', 'not', 'list'],
      explanation: 'The and operator returns True if both operands are True and False otherwise.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what is the “greater than” operator?',
      answer: '>',
      distractors: ['>=', '<', '<='],
      explanation: 'The “greater than” operator is > in Python. It returns True if the value on the left is greater than the value on the right. We can also use it to compare strings in alphabetical order.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'The canonical implementation of the Python programming language, as distributed on python.org is known as...',
      answer: 'CPython',
      distractors: ['PPython', 'QPython', 'MPython'],
      explanation: 'CPython is the canonical implementation of the Python programming language, as distributed on python.org. Canonical is a software company',
      link: 'https://docs.python.org/3/glossary.html'
    },
    {
      question: 'When did Python first appear?',
      answer: '1991',
      distractors: ['2001', '2011', '2021'],
      explanation: 'Python first appeared in 1991.',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
      question: 'In Python, what is the addition assignment operator?',
      answer: ' +=',
      distractors: [' =+', ' +', '=='],
      explanation: 'The += operator lets you add a value (right operand) to the current value of a variable and store the result of the calculation in the same variable (left operand). This is shorter than using + and then = separately.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what is the meaning of PEP?',
      answer: 'Python Enhancement Proposal',
      distractors: [
        'Python Experimentation Platform',
        'Python Excellent Performance',
        'Python Environmental Protection'
      ],
      explanation: 'In the context of Python, PEP means Python Enhancement Proposal. A PEP is a design document that provides information to the Python community, or describes a new feature for Python or its processes or environment.',
      link: 'https://www.python.org/dev/peps/pep-0001/#what-is-a-pep'
    },
    {
      question: 'In Python, what is the correct way to write Boolean values?',
      answer: 'True/False',
      distractors: ['true/false', 'TRUE/FALSE', 'tRuE/FaLsE'],
      explanation: `In Python, we have to write Boolean values like this: True and False. If we don't write them like this, they will not be recognized as keywords in the program. `,
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/'
    },
    {
      question: 'In Python, what is the result of this code: “Hi” * 2?',
      answer: 'HiHi',
      distractors: ['“Hihi”', '“HiHiHiHi”', 'A SyntaxError'],
      explanation: 'The * operator in Python can be used to repeat a string a given number of times. In this case, the string “Hi” is repeated two times. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, what is the name of a value associated with an object that can be referenced by its name using dot notation?',
      answer: 'Attribute',
      distractors: ['Property', 'Characteristic', 'Method'],
      explanation: 'An attribute is a value associated with an object that can be referenced by its name using dot notation.',
      link: 'https://docs.python.org/3/glossary.html'
    },
    {
      question: 'In Python, what is the “less than or equal to” operator?',
      answer: '<=',
      distractors: ['<', '>', '>='],
      explanation: 'The “less than or equal to” operator is <= in Python. It returns True if the value on the left is less than or equal to the value on the right. We can also use it to compare strings in alphabetical order.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, what built-in function returns the largest item in an iterable or the largest of two or more arguments?',
      answer: 'max()',
      distractors: ['min()', 'maximum()', 'largest()'],
      explanation: 'The max() function returns the largest item in an iterable or the largest of two or more arguments.',
      link: 'https://www.freecodecamp.org/news/python-function-guide-with-examples/'
    },
    {
      question: 'In Python, which of these is not a keyword?',
      answer: 'forward',
      distractors: ['if', 'return', 'for'],
      explanation: 'The words if, return, and for, are Python keywords but forward is not a Python keyword. Python keywords are reserved words, so they cannot be used as variable names, function names, or any other identifiers in a Python program. ',
      link: 'https://forum.freecodecamp.org/t/python-keywords-a-guide-with-examples/19188'
    },
    {
      question: 'In Python, what built-in data structure can store key-value pairs? ',
      answer: 'Dictionary',
      distractors: ['List', 'Boolean', 'String'],
      explanation: 'A dictionary can store key-value pairs, which are pairs of associated values. We use the key to access its corresponding value in the dictionary. ',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, what method is used to remove a key-value pair from a dictionary and return its value?',
      answer: '.pop()',
      distractors: ['.push()', '.append()', '.insert()'],
      explanation: 'The .pop() method is used to remove a key-value pair from the dictionary and return the value.',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, what is the floor division operator?',
      answer: '//',
      distractors: ['/', '*', '**'],
      explanation: 'The floor division operator in Python is //. This operator performs a mathematical division that rounds down to the nearest integer.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what value does a function return by default if it doesn\'t have a return statement?',
      answer: 'None',
      distractors: ['0', 'An empty string', 'An empty list'],
      explanation: 'Python functions return the special value of None if they do not have an explicit return statement.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python'
    },
    {
      question: 'In Python, what keyword is used to define a class?',
      answer: 'class',
      distractors: ['def', 'blueprint', 'create'],
      explanation: 'The class keyword is used in Python to define a class.',
      link: 'https://www.freecodecamp.org/news/learn-object-oriented-programming-with-python/'
    },
    {
      question: 'In Python, what built-in function returns the smallest item in an iterable or the smallest of two or more arguments?',
      answer: 'min()',
      distractors: ['max()', 'minimum()', 'smallest)'],
      explanation: 'The min() function returns the smallest item in an iterable or the smallest of two or more arguments.',
      link: 'https://www.freecodecamp.org/news/python-function-guide-with-examples/'
    },
    {
      question: `In Python, what is the name of the exception raised when a name that you are referencing in the code doesn't exist?`,
      answer: 'NameError',
      distractors: ['KeyError', 'IndexError', 'TypeError'],
      explanation: `A NameError is raised in Python when a name that you are referencing in the code doesn't exist.`,
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, which one of these operators is used to raise a number to the power of an exponent? ',
      answer: '**',
      distractors: ['*', '^', '!'],
      explanation: 'The power operator is ** in Python. We use it to raise the number on the left to the power of the exponent on the right. For example, 5 ** 3 means 5 raised to the power 3. The result would be 125.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, what built-in function returns a number rounded to a given number of digits of precision after the decimal point?',
      answer: 'round()',
      distractors: ['rounding()', 'approximate()', 'decimal()'],
      explanation: 'The round() function returns a number rounded to a given number of digits of precision after the decimal point.',
      link: 'https://docs.python.org/3/library/functions.html#round'
    },
    {
      question: 'In Python, non-empty sequences, non-empty collections, and numerical values different from 0 are...',
      answer: 'Truthy',
      distractors: ['Falsy', 'TRUENESS', 'FALSENESS'],
      explanation: 'Non-empty sequences, collections, and numerical values different from 0 are truthy values.',
      link: 'https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/'
    },
    {
      question: 'In Python, how can you create an empty list?',
      answer: '[]',
      distractors: ['dict()', '??', '(())'],
      explanation: 'You can create an empty list with [] or with list() in Python.',
      link: 'https://www.freecodecamp.org/news/python-empty-list-tutorial-how-to-create-an-empty-list-in-python/'
    },
    {
      question: 'In Python, what is the name of the exception raised when an operation or function is applied to an object of an inappropriate type? ',
      answer: 'TypeError',
      distractors: ['NameError', 'KeyError', 'IndexError'],
      explanation: 'A TypeError is raised in Python when an operation or function is applied to an object of an inappropriate type. ',
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, what function returns True if any element of the iterable evaluates to True?',
      answer: 'any()',
      distractors: ['all()', 'none()', 'one()'],
      explanation: 'The any() function returns True if any element of the iterable passed as an argument evaluates to True. Else, it returns False.',
      link: 'https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/'
    },
    {
      question: 'In Python, how can you write a “Hello, World” program?',
      answer: 'print(“Hello, World!”)',
      distractors: [
        'console.log(“Hello, World!”)',
        'show(“Hello, World!”)',
        'console(“Hello, World!”)'
      ],
      explanation: 'In Python, we use the built-in print() function to print a value to the console. We pass the value as an argument within parentheses. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-hello-world-program-in-python'
    },
    {
      question: 'In Python, how do you define a variable?',
      answer: '<variable_name> = <value>',
      distractors: ['<value> = <variable_name>', '<value> <= <variable_name>', '<variable_name> <= <value>'],
      explanation: 'In Python, we define a variable with <variable_name> = <value>.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/'
    },
    {
      question: `In Python, string literals prefixed with 'f' or 'F' are commonly called...`,
      answer: 'f-strings',
      distractors: ['strings-f', 'p-string', 'x-string'],
      explanation: `f-strings are string literals prefixed with 'f' and 'F' in Python.`,
      link: 'https://www.freecodecamp.org/news/python-f-strings-tutorial-how-to-use-f-strings-for-string-formatting/'
    },
    {
      question: 'In Python, what is the modulo operator?',
      answer: '%',
      distractors: ['//', '/', '^'],
      explanation: 'The modulo operator in Python is %. It returns the remainder of dividing the left hand operand by right hand operand.',
      link: 'https://www.freecodecamp.org/news/the-python-modulo-operator-what-does-the-symbol-mean-in-python-solved/'
    },
    {
      question: 'In Python, what function can you call to get interactive help on writing Python programs and using Python modules?',
      answer: 'help()',
      distractors: ['please()', 'helpme()', 'assistance()'],
      explanation: 'The help() function can be called in Python to get interactive help on writing Python programs and using Python modules.',
      link: 'https://docs.python.org/3/library/functions.html#help'
    },
    {
      question: 'In Python, what logical operator returns True if any of the operands are True?',
      answer: 'or',
      distractors: ['and', 'not', 'console'],
      explanation: 'The or operator returns True if any of the operands is True. ',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what keyword is used to return a value from a function?',
      answer: 'return',
      distractors: ['pass', 'continue', 'break'],
      explanation: 'The return keyword is used to return a value from a function.This terminates the execution of the function to return the value.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python'
    },
    {
      question: 'In Python, which one of these operators has the highest precedence?',
      answer: '**',
      distractors: ['/', '*', 'and'],
      explanation: 'The exponentiation operator ** has the highest precedence of these four options.',
      link: 'https://docs.python.org/3/reference/expressions.html#operator-precedence'
    },
    {
      question: 'In Python, what is the “less than” operator?',
      answer: '<',
      distractors: ['>', '<=', '>='],
      explanation: 'The “less than” operator is < in Python. It returns True if the value on the left is less than the value on the right. We can also use it to compare strings in alphabetical order.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, what is the name of the exception raised when you try to divide by zero?',
      answer: 'ZeroDivisionError',
      distractors: ['TypeError', 'NameError', 'KeyError'],
      explanation: 'A ZeroDivisionError is raised in Python when you try to divide by zero.',
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, what logical operator returns True if the operand is False?',
      answer: 'not',
      distractors: ['and', 'or', 'array'],
      explanation: 'The not operator returns True if the operand is False and False if the operand is True.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what function can you call to open a file?',
      answer: 'open()',
      distractors: ['read()', 'extend()', 'print()'],
      explanation: 'The open() function opens a file in a Python program. ',
      link: 'https://www.freecodecamp.org/news/python-write-to-file-open-read-append-and-other-file-handling-functions-explained/'
    },
    {
      question: 'In Python, what module provides access to the mathematical functions defined by the C standard?',
      answer: 'math',
      distractors: ['functions', 'algebra', 'calculus'],
      explanation: 'The math module provides access to the mathematical functions defined by the C standard in Python.',
      link: 'https://docs.python.org/3/library/math.html#module-math'
    },
    {
      question: 'In Python, the integer used to refer to a character in a string or an element in a list or tuple is known as an...',
      answer: 'index',
      distractors: ['integer', 'location', 'position'],
      explanation: 'Strings, lists, tuples, and other sequences in Python have indices, which are integers used to refer to its elements. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python'
    },
    {
      question: 'In Python, how can you check if the key "Nora" is in the "names" dictionary?',
      answer: '"Nora" in names',
      distractors: ['names in "Nora"', '"Nora" is in names', 'names is in "Nora"'],
      explanation: 'To check if a key is in a dictionary, first we write the key followed by in and then the name of the dictionary. In this case, the correct option is "Nora" in names.',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, what method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements?',
      answer: '.extend()',
      distractors: ['.append()', '.join()', '.add()'],
      explanation: 'The .extend() method takes an iterable as an argument and adds the elements of that iterable to a list as individual elements.',
      link: 'https://www.freecodecamp.org/news/python-list-append-vs-python-list-extend/'
    },
    {
      question: 'In Python, are lists mutable or immutable?',
      answer: 'Mutable',
      distractors: ['Immutable', 'Neither Mutable or Immutable', 'Both Mutable and Immutable'],
      explanation: 'Lists are mutable built-in data structures in Python. This means that you can add new elements to a list, update the elements of a list, and remove elements from a list.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python'
    },
    {
      question: 'In Python, what function returns True if all the elements of an iterable evaluate to True?',
      answer: 'all()',
      distractors: ['any()', 'none()', 'zero()'],
      explanation: 'The all() function returns True if all the elements of the iterable passed as an argument evaluate to True. Else, it returns False.',
      link: 'https://www.freecodecamp.org/news/python-any-and-all-functions-explained-with-examples/'
    },
    {
      question: 'In Python, what function can you use to transform a number represented as a string into an integer?',
      answer: 'int()',
      distractors: ['float()', 'complex()', 'bin()'],
      explanation: 'The int() function takes a string as an argument and returns an integer.',
      link: 'https://www.freecodecamp.org/news/how-to-convert-strings-into-integers-in-python/'
    },
    {
      question: 'In Python, what is the “greater than or equal to” operator?',
      answer: '>=',
      distractors: ['>', '<', '<='],
      explanation: 'The “greater than or equal to” operator is >= in Python. It returns True if the value on the left is greater than or equal to the value on the right. We can also use it to compare strings in alphabetical order.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, the first index of a sequence is...',
      answer: '0',
      distractors: ['1', '-1', '2'],
      explanation: 'The first index of a sequence in Python is 0.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python'
    },
    {
      question: 'In Python, what keyword is used to define a function?',
      answer: 'def',
      distractors: ['class', 'if', 'return'],
      explanation: 'The def keyword is used to define a function in Python.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python'
    },
    {
      question: 'In Python, strings are...',
      answer: 'Immutable',
      distractors: ['Mutable', 'Maintainable', 'Unstoppable'],
      explanation: 'Strings are immutable, so we can\'t update or remove their characters after they have been defined in the program. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python'
    },
    {
      question: 'Who created the Python programming language?',
      answer: 'Guido van Rossum',
      distractors: ['Ada Lovelace', 'Alan Turing', 'Tim Berners-Lee'],
      explanation: 'Guido van Rossum created the Python programming language.',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
      question: 'In Python, which of the following operators is NOT a bitwise operator?',
      answer: '%',
      distractors: ['&', '|', '~'],
      explanation: '% is the modulo operator in Python. The operators &, |, and ~ are bitwise operators.',
      link: 'https://www.freecodecamp.org/news/basic-operators-in-python-with-examples/'
    },
    {
      question: 'In Python, what is the data type of the value returned by the input() function?',
      answer: 'String',
      distractors: ['Integer', 'Boolean', 'List'],
      explanation: 'The built-in function input() always returns a string. If you need to work with this value as a different data type, you will need to convert it.',
      link: 'https://www.freecodecamp.org/news/python-function-guide-with-examples/'
    },
    {
      question: 'In Python, what built-in function returns a reverse iterator that allows you to iterate over the elements of an iterable in reverse order?',
      answer: 'reversed()',
      distractors: ['sorted()', 'reversing()', 'backwards()'],
      explanation: 'The reversed() function returns a reverse iterator that you can use to iterate over an iterable in reverse order.',
      link: 'https://docs.python.org/3/library/functions.html#reversed'
    },
    {
      question: 'In Python, the keys of a dictionary must be...',
      answer: 'Immutable',
      distractors: ['Mutable', 'Both will work', 'Neither will work'],
      explanation: 'The keys of a Python dictionary must be immutable.',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, it is recommended to write variable names in lowercase with words separated by...',
      answer: 'an underscore',
      distractors: ['an asterisk', 'a question mark', 'a hash symbol'],
      explanation: 'PEP 8, the Style Guide for Python Code, recommends writing variable names in lowercase with words separated by an underscore as necessary to improve readability.',
      link: 'https://www.python.org/dev/peps/pep-0008/#function-and-variable-names'
    },
    {
      question: 'In Python, which one of the following options prints "Hello, World!" without starting a new line at the end?',
      answer: 'print("Hello, World!", end="")',
      distractors: [
        'print("Hello, World!")',
        'print("Hello, World!", end="\\n")',
        'print("Hello, World!", end="\\r")'
      ],
      explanation: 'Adding end="" as the second argument will print the string without adding a new line character at the end. An empty string will be used instead.',
      link: 'https://www.freecodecamp.org/news/python-new-line-and-how-to-python-print-without-a-newline/'
    },
    {
      question: 'What is the filename extension of a Python file?',
      answer: '.py',
      distractors: ['.js', '.html', '.p'],
      explanation: 'Python files have a .py filename extension.',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
      question: 'In Python, how many spaces are recommended per level of indentation?',
      answer: '4',
      distractors: ['2', '6', '8'],
      explanation: 'In Python, it is recommended to use 4 spaces per level of indentation.',
      link: 'https://www.python.org/dev/peps/pep-0008/#indentation'
    },
    {
      question: 'In Python, the values of a dictionary can be...',
      answer: 'Both Mutable and Immutable',
      distractors: ['only immutable', 'only mutable', 'Neither will work'],
      explanation: 'The values of a Python dictionary can be either mutable or immutable. Both will work correctly. ',
      link: 'https://www.freecodecamp.org/news/python-dictionaries-detailed-visual-introduction/'
    },
    {
      question: 'In Python, are tuples mutable or immutable?',
      answer: 'Immutable',
      distractors: ['Mutable', 'Neither Mutable or Immutable', 'Both Mutable and Immutable'],
      explanation: 'Tuples are immutable built-in data structures in Python. This means that you cannot add new elements to a tuple, you cannot update existing elements and you cannot remove elements from a tuple. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-data-types-and-built-in-data-structures-in-python'
    },
    {
      question: 'In Python, what built-in function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one?',
      answer: 'zip()',
      distractors: ['iterate()', 'print()', 'range()'],
      explanation: 'The zip() function allows you to iterate over multiple iterables in parallel by returning a tuple with an item from each one.',
      link: 'https://www.freecodecamp.org/news/the-zip-function-in-python-explained-with-examples/'
    },
    {
      question: 'In Python, what is the name of the exception raised when the interpreter detects that the maximum recursion depth is exceeded?',
      answer: 'RecursionError',
      distractors: ['IndexError', 'Infinite Loop', 'NameError'],
      explanation: 'A RecursionError occurs when the interpreter detects that the maximum recursion depth is exceeded. This usually occurs when the recursive process never reaches the base case. ',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-functions-in-python'
    },
    {
      question: 'In Python, what operator is used to check if two values are equal?',
      answer: '==',
      distractors: ['=', '===', '!=='],
      explanation: 'The == operator is used to check if two values are equal in Python. It returns True if the values are equal and False otherwise.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, what operator is used in Python to concatenate strings?',
      answer: '+',
      distractors: ['*', '-', '/'],
      explanation: 'When the operands are strings, the + operator concatenates them to create a new string. For example: “Hello” + “World” evaluates to \'HelloWorld\'.',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-python-operators'
    },
    {
      question: 'In Python, which one of these options is a valid variable name?',
      answer: 'my_variable_59',
      distractors: ['59my_variable', 'my^_variable', 'my_variable59%'],
      explanation: 'Variable names in Python cannot start with a number, they must start with a letter or an underscore. They can only contain alphanumeric characters and underscores (A-Z, a-z, 0-9, and _).',
      link: 'https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/#-variable-definitions-in-python'
    },
    {
      question: 'In Python, what built-in function returns the length of a sequence?',
      answer: 'len()',
      distractors: ['length()', 'size()', 's()'],
      explanation: 'The len() function returns the length (number of items) of an object.',
      link: 'https://docs.python.org/3/library/functions.html#len'
    },
    {
      question: 'In Python, what method adds an element to the end of a list?',
      answer: '.append()',
      distractors: ['.add()', '.join()', '.end()'],
      explanation: 'The .append() method adds an element to the end of a list in Python.',
      link: 'https://www.freecodecamp.org/news/python-list-append-how-to-add-an-element-to-an-array-explained-with-examples/'
    },
    {
      question: 'In Python, what is the name of the exception raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries?',
      answer: 'IndexError',
      distractors: ['KeyError', 'NameError', 'TypeError'],
      explanation: 'An IndexError is raised in Python when you try to index a list, tuple, or string beyond the permitted boundaries.',
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, what module implements pseudo-random number generators for various distributions?',
      answer: 'random',
      distractors: ['random_numbers', 'generate', 'random_nums'],
      explanation: 'The random module implements pseudo-random number generators for various distributions.',
      link: 'https://docs.python.org/3/library/random.html'
    },
    {
      question: 'In Python, what built-in function returns a new sorted list from the items in an iterable?',
      answer: 'sorted()',
      distractors: ['sorting()', 'print()', 'copy()'],
      explanation: 'The sorted() function returns a new sorted list from the items in an iterable. ',
      link: 'https://www.freecodecamp.org/news/python-sort-list-how-to-order-by-descending-or-ascending/'
    },
    {
      question: 'In Python, what is the name of the exception raised when you try to access the value of a key that doesn\'t exist in a dictionary?',
      answer: 'KeyError',
      distractors: ['IndexError', 'NameError', 'TypeError'],
      explanation: 'A KeyError is raised in Python when you try to access the value of a key that doesn\'t exist in a dictionary.',
      link: 'https://www.freecodecamp.org/news/exception-handling-python/'
    },
    {
      question: 'In Python, how can you cast a value of any data type into a string?',
      answer: 'Using the str() function',
      distractors: [
        'Using the int() function',
        'Using the string() function',
        'Using the integer() function'
      ],
      explanation: 'The str() function converts a value of any data type into a string.',
      link: 'https://www.freecodecamp.org/news/learn-typecasting-in-python-in-five-minutes-90d42c439743/'
    },
    {
      question: 'In Python, a value that evaluates to False in a boolean context is known as...',
      answer: 'Falsy',
      distractors: ['FALSENESS', 'Truth', 'Truthy'],
      explanation: 'A value that evaluates to False in a boolean context is known as a falsy value.',
      link: 'https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/'
    },
    {
      question: 'In Python, what function returns the string representing a character whose Unicode code point is the integer passed as an argument?',
      answer: 'chr()',
      distractors: ['ord()', 'str()', 'code()'],
      explanation: 'The chr() function returns the string representing a character whose Unicode code point is the integer passed as an argument.',
      link: 'https://www.freecodecamp.org/news/python-function-guide-with-examples/'
    },
    {
      question: 'In Python, which one of these options is a valid comment?',
      answer: '# This is a comment',
      distractors: ['//! This is a comment', '* This is a comment', '///* This is a comment *///'],
      explanation: 'In Python, we start a comment with a hash symbol #. A line that starts with this symbol will be interpreted as a comment in a Python program. ',
      link: 'https://forum.freecodecamp.org/t/how-to-comment-your-code-in-python-explained-with-examples/19220'
    },
    {
      question: 'Which type of programming paradigm does Python support?',
      answer: 'all of the mentioned paradigms',
      distractors: ['structured programming', 'object-oriented programming', 'functional'],
      explanation: 'Python is an interpreted programming language, which supports object-oriented, structured, and functional programming.',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
    },
    {
      question: 'In Python, which file is compulsory to create a package?',
      answer: '__init__',
      distractors: ['__main__', 'main.py', '__package__'],
      explanation: 'We cannot create a Python package without adding a __init__.py file, This file will tell Python to treat directories as modules.',
      link: 'https://www.freecodecamp.org/news/build-your-first-python-package/'
    },
    {
      question: 'What does the partition() function do?',
      answer: 'Splits the string at the first occurrence and returns a tuple',
      distractors: [
        'Splits the string at the first occurrence and returns a list',
        'Splits the string equally',
        'Split the string at any occurrence of the given argument'
      ],
      explanation: 'The partition() method searches for a specified string, and splits the string into a tuple containing three elements.',
      link: 'https://docs.python.org/3/library/stdtypes.html#str.partition'
    },
    {
      question: 'What is an empty/null statement in Python called?',
      answer: 'pass',
      distractors: ['continue', 'over', 'goto'],
      explanation: 'An empty statement is a statement that does nothing. Python offers the pass statement as an empty statement.',
      link: 'https://docs.python.org/3/reference/simple_stmts.html#the-pass-statement'
    },
    {
      question: 'In Python, Function range(4) will yield an iterable sequence like: ',
      answer: '[1,2,3,4]',
      distractors: ['[0,1,2,3,4]', '[0,1,2,3]', '[4]'],
      explanation: `If you don't specify the start index, the default start index of 0 is used.`,
      link: 'https://www.freecodecamp.org/news/python-range-function-explained-with-code-examples/'
    },
    {
      question: 'In Python, which function is used to read a single line from a file',
      answer: 'readline()',
      distractors: ['readlines()', 'readable()', 'read()'],
      explanation: 'readline() function reads a single line from the file and returns the read bytes in the form of a string.',
      link: 'https://www.freecodecamp.org/news/file-handling-in-python/'
    },
    {
      question: 'In Python, which method is used to convert a list into a string with a suitable delimiter?',
      answer: '.join()',
      distractors: ['.extend()', '.append()', '.pop()'],
      explanation: 'You can use the .join string method to convert a list into a string',
      link: 'https://www.freecodecamp.org/news/python-list-to-string-join-example/'
    },
    {
      question: 'In Python, if num_list = ( 1 , 2 , 3 , [ 1 , 2 , 3 ] ), then what is the result of num_list when using the following code here: num_list[3].extend([ 4 , 5 , 6 ])?',
      answer: '(1, 2, 3, [1, 2, 3, 4, 5, 6])',
      distractors: ['Error', '(1, 2, 3, [ 4, 5, 6])', '(1, 2, 3, [1, 2, 3,],[ 4, 5, 6] )'],
      explanation: `List is mutable in nature so it's size changes`,
      link: 'https://www.freecodecamp.org/news/mutable-vs-immutable-objects-python/'
    },
    {
      question: 'What is the maximum possible length of an identifier in Python?',
      answer: 'there is no maximum length',
      distractors: ['79 characters', '32 characters', '16 characters'],
      explanation: 'Identifiers can be of any length.',
      link: 'https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567/'
    },
    {
      question: 'What arithmetic operators cannot be used with strings in Python?',
      answer: '-',
      distractors: ['+', '/', '*'],
      explanation: '+ is used to concatenate and * is used to multiply strings',
      link: 'https://www.freecodecamp.org/news/learn-python-by-thinking-in-types'
    },
    {
      question: 'In Python, which sorting algorithm is a hybrid between merge and insertion sort?',
      answer: 'Tim Sort',
      distractors: ['Quick Sort', 'Merge Sort', 'Insertion Sort'],
      explanation: `Python's default sort uses Tim Sort, which is a combination of both merge sort and insertion sort.`,
      link: 'https://docs.python.org/3/howto/sorting.html'
    },
    {
      question: 'Which of the following is a package-management system written in Python used to install and manage software packages?',
      answer: 'pip',
      distractors: ['pypit', 'None of the above', 'piip'],
      explanation: 'Pip is a standard package manager used to install and manage Python packages',
      link: 'https://www.freecodecamp.org/news/how-to-use-pip-install-in-python/'
    },
    {
      question: 'In Python, what is the output of print(math.pow(3,4))?',
      answer: '81.0',
      distractors: ['43', '27', '34'],
      explanation: '3 raised to the power of 4 is 81, and by default math.pow() converts both its arguments to type float',
      link: 'https://docs.python.org/3/library/math.html#power-and-logarithmic-functions'
    },
    {
      question: 'In Python, which of the following is not a tuple method?',
      answer: 'pop',
      distractors: ['count', 'None of the above', 'index'],
      explanation: 'There are only two tuple methods; count and index in Python',
      link: 'https://docs.python.org/3/tutorial/datastructures.html'
    },
    {
      question: `In Python, what will be the data type of 'John Doe'.split()?`,
      answer: 'List',
      distractors: ['string', 'set', 'tuple'],
      explanation: `The result will be ['John', 'Doe'], which has a list data type`,
      link: 'https://www.freecodecamp.org/news/how-to-split-a-string-in-python/'
    },
    {
      question: `In Python, if my_nums = [8,9,10], which of the following can't be used to reverse the list?`,
      answer: 'reverse(my_nums)',
      distractors: ['my_nums.reverse()', 'None of the above', 'my_nums[::-1]'],
      explanation: `reverse isn't a defined Python keyword`,
      link: 'https://www.freecodecamp.org/news/python-reverse-list-reversing-an-array-in-python/#reversed-function'
    },
    {
      question: 'In Python, which built-in function returns all properties and methods of the specified object without the values?',
      answer: 'dir()',
      distractors: ['obj()', 'dirs()', 'all()'],
      explanation: 'The dir() function lists all the attributes and methods of a defined object.',
      link: 'https://docs.python.org/3/library/functions.html#dir'
    },
    {
      question: `In Python, if num = 1.2345, print('%.2f' %num) will give?`,
      answer: '1.23',
      distractors: ['1.25', '12.3', '1.2'],
      explanation: 'It rounds the float number to two decimal places',
      link: 'https://www.freecodecamp.org/news/2f-in-python-what-does-it-mean/'
    },
    {
      question: 'How many mandatory arguments does the range() function have in Python?',
      answer: '1',
      distractors: ['0', '2', '3'],
      explanation: 'The range() function has one required argument(stop) and two optional arguments(start and step).',
      link: 'https://www.freecodecamp.org/news/python-range-function-explained-with-code-examples/'
    },
    {
      question: 'In Python, if y = lambda x : x ** 2 + 7 , then what will be the result returned when the following code is executed: print(y(3))?',
      answer: '16',
      distractors: ['5', '11', '24'],
      explanation: 'A Lambda is an anonymous function that can have any number of arguments but only one expression, which is evaluated and returned.',
      link: 'https://www.freecodecamp.org/news/lambda-expressions-in-python/'
    },
    {
      question: 'Which Python keyword is added to the open() function while reading a file to ensure the file gets closed?',
      answer: 'with',
      distractors: ['await', 'pass', 'finally'],
      explanation: 'Calling the open() function while using the with statement automatically closes a file after being processed.',
      link: 'https://www.freecodecamp.org/news/with-open-in-python-with-statement-syntax-example/'
    },
    {
      question: 'Which one of these Python types is not mutable?',
      answer: 'bool',
      distractors: ['lists', 'sets', 'functions'],
      explanation: `a bool data type cannot change it's value after being created, therefore it is immutable.`,
      link: 'https://www.freecodecamp.org/news/mutable-vs-immutable-objects-python/'
    },
    {
      question: 'In Python, what is the output of the following code: True + True + False - True == 2?',
      answer: 'False',
      distractors: ['True', 'Error', '1'],
      explanation: 'Since booleans in Python are seen as numeric types, you can perform basic math operations on them. True would equate to 1 while False would equate to 0.',
      link: 'https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/'
    },
    {
      question: `In Python, what is the return value: print(list(map(len, ['Welcome', 'To', 'FreeCodeCamp'])))?`,
      answer: '[7, 2, 12]',
      distractors: ['[14, 4, 24]', '21', '<map object at 0x10708b580>'],
      explanation: 'The map function works as an iterator to return a result after applying the len function to every item for the words list and returns a map object.',
      link: 'https://www.freecodecamp.org/news/python-map-explained-with-examples/'
    },
    {
      question: 'In Python, how do you check the memory usage for Object x?',
      answer: 'sys.getsizeof(x)',
      distractors: ['size(x)', 'len(x)', 'os.getsizeof(x)'],
      explanation: 'When you import the sys module and use the getsizeof() method, Python will calculate how much memory that object has consumed.',
      link: 'https://www.freecodecamp.org/news/python-programming-tips/'
    },
    {
      question: 'Which of the following is a good way to input n space separated integers in Python?',
      answer: 'list(map(int, input().split()))',
      distractors: ['input().split()', 'int(input())', 'list(mapping(int, input().split()))'],
      explanation: 'The map() function is used to apply a function to each item in an iterable (like a Python list or dictionary).',
      link: 'https://www.freecodecamp.org/news/python-map-explained-with-examples/'
    },
    {
      question: 'Which of the following is the correct syntax to reverse a list in Python?',
      answer: 'list.reverse()',
      distractors: ['list.reverse', 'reverse(list)', 'list=list.reversing()'],
      explanation: `The .reverse() method doesn't accept any arguments and doesn't have a return value – it only updates the existing list.`,
      link: 'https://www.freecodecamp.org/news/python-reverse-list-reversing-an-array-in-python/'
    },
    {
      question: 'Which of these is a standard GUI library in Python?',
      answer: 'Tkinter',
      distractors: ['bs4', 'Selenium', 'Regex'],
      explanation: 'Tkinter provides an object-oriented interface to the Tk GUI toolkit that is built-in to Python.',
      link: 'https://www.freecodecamp.org/news/learn-how-to-use-tkinter-to-create-guis-in-python/'
    },
    {
      question: 'In Python, what will be the output for the following code: print(round(0.6)-round(-0.6))?',
      answer: '2',
      distractors: ['0', '1', '-1'],
      explanation: 'In Python, round(0.6) will round up to 1 and round(-0.6) will round down to -1. The result for round(0.6)-round(-0.6) will be 2.',
      link: 'https://www.freecodecamp.org/news/how-to-round-numbers-up-or-down-in-python/.'
    },
    {
      question: `In Python, what is the expected output for print({'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}) ?`,
      answer: `{'orange', 'banana', 'pear', 'apple'}`,
      distractors: [
        `{'orange', 'banana', 'pear', 'apple', 'apple', 'orange'}`,
        `{'orange', 'banana', 'pear', 'apple', 'orange', 'apple'}`,
        `{'orange', 'banana', 'pear', 'apple', 'orange', 'apple', 'apple', 'orange'}`
      ],
      explanation: `print({'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}) would return a set of unordered unique items.`,
      link: 'https://docs.python.org/3/tutorial/datastructures.html#sets'
    },
    {
      question: 'In Python, if x=297.4887 what would the following return: `print(\'%.3f\'%x)`?',
      answer: '297.489',
      distractors: ['297.488', '297.49', '297.4885'],
      explanation: '`print(\'%.3f\'%x)` would round 297.4887 to 3 decimal places.',
      link: 'https://www.freecodecamp.org/news/2f-in-python-what-does-it-mean/'
    },
    {
      question: 'In Python, what is the result for math.trunc(3.1)?',
      answer: '3',
      distractors: ['3.5', '3.14', '0.1'],
      explanation: 'In Python, math.trunc() will return the truncated integer part of the number. When the number is positive, math.trunc() is similar to the .floor() method. But if the number is negative, math.trunc() is similar to the .ceil() method',
      link: 'https://docs.python.org/3/library/math.html'
    },
    {
      question: 'In Python, what is the output for the following: print([10, 20, 60, 90][:2:])?',
      answer: '[10, 20]',
      distractors: ['[10, 30, 50, 70, 90]', '[70, 90]', '[10, 20, 30]'],
      explanation: 'In Python, list slicing syntax is list[start:stop[:step]]. The start, stop and step parameters are all optional and if omitted will refer to the defaults of 0, length of sequence and 1 respectively.',
      link: 'https://python-reference.readthedocs.io/en/latest/docs/brackets/slicing.html'
    },
    {
      question: 'In Python, what does the clear() method in a list do?',
      answer: 'To delete all the elements of the list',
      distractors: [
        'To delete the list',
        'To delete the last element of the list',
        'To delete the specific element of the list'
      ],
      explanation: 'In Python, the clear() method in list is used to delete all the elements of the list.',
      link: 'https://docs.python.org/3/tutorial/datastructures.html'
    },
    {
      question: 'Which version of Python introduced the math.perm() and math.prod() functions?',
      answer: 'Python 3.8',
      distractors: ['Python 3.7', 'Python 3.9', 'Python 3.3'],
      explanation: 'The release of Python 3.8 introduced the math.perm() and math.prod() functions.',
      link: 'https://docs.python.org/3.8/library/math.html#math.perm'
    },
    {
      question: 'Which of the following is a built-in function in Python?',
      answer: 'print()',
      distractors: ['perm()', 'mainloop()', 'getcwd()'],
      explanation: `Python's built in print() function is used to print messages to the screen.`,
      link: 'https://docs.python.org/3/library/functions.html#print'
    },
    {
      question: 'In Python, which of the following statements is false?',
      answer: 'Lists in Python are of a fixed size.',
      distractors: [
        'Tuples are an ordered, immutable set of data.',
        'Dictionaries associate keywords with values.',
        'Python is an object-oriented language.'
      ],
      explanation: 'In Python, lists are not fixed-size.',
      link: 'https://www.freecodecamp.org/news/python-array-tutorial-define-index-methods/'
    },
    {
      question: 'In Python, which of the following is NOT a built-in data type?',
      answer: 'class',
      distractors: ['set', 'dict', 'frozenset'],
      explanation: 'In Python, a class is a user defined data type.',
      link: 'https://docs.python.org/3/library/datatypes.html'
    },
    {
      question: 'In Python, which of the following is NOT the right way to find 5 raised to the power of 9?',
      answer: 'print(deg(5,9))',
      distractors: ['print(5**9)', 'print(pow(5,9))', 'print(math.pow(9, 3))'],
      explanation: `In Python, the '**' operator, the built-in function pow() and the math.pow() function are three different ways to get the exponent to the base.`,
      link: 'https://docs.python.org/3/library/math.html'
    },
    {
      question: 'In Python, which of the following is NOT a list method?',
      answer: 'add()',
      distractors: ['append()', 'pop()', 'extend()'],
      explanation: `In Python, lists have several built-in methods to perform various operations. However, the method 'add()' is not a valid method for lists.`,
      link: 'https://www.freecodecamp.org/news/lists-in-python-comprehensive-guide/'
    },
    {
      question: 'Which of the following statements is true regarding the Python random library?',
      answer: 'The random library can only generate pseudo-random numbers.',
      distractors: [
        'The random library can generate true random numbers based on hardware entropy.',
        'The random library is primarily used for generating random strings.',
        'The random library cannot be used to generate random numbers within a specified range.'
      ],
      explanation: 'The random module in Python generates pseudo-random numbers, which are generated by mathematical algorithms and are not truly random but are sufficiently unpredictable for many purposes. To generate truly random numbers, you may need specialized hardware or external services, which are not provided by the random module.',
      link: 'https://docs.python.org/3/library/random.html'
    },
    {
      question: 'Which of the following Python functions are known for posing security risks?',
      answer: 'eval()',
      distractors: ['print()', 'input()', 'quit()'],
      explanation: 'If you use the eval() function to get input from an external source you don\'t know for sure if the code executed is malicious or not. This can pose a security risk to your codebase and it is recommended to avoid using the eval() function.',
      link: 'https://en.wikipedia.org/wiki/Eval#Python'
    },
    {
      question: 'What will be the output for this code: print([num * num for num in range(10)]) ?',
      answer: '[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]',
      distractors: ['[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', '[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]', 'Error'],
      explanation: 'This is a list comprehension that prints a list of squares from 0 to 9. We use list comprehensions to simplify one-liner operations in a for loop',
      link: 'https://www.freecodecamp.org/news/list-comprehension-in-python-with-code-examples/'
    },
    {
      question: 'In Python, which of the following dunder methods defines the behavior of the addition operator + for objects of a class?',
      answer: '__add__',
      distractors: ['__len__', '__sub__', '__mul__'],
      explanation: 'Dunder methods (Double underscore) are special methods reserved in Python which affect\'s the behavior of the object and the interaction of the object with other objects.',
      link: 'https://youtu.be/eWRfhZUzrAc?si=ehiKx8PbqeW8X504&t=12264'
    },
    {
      question: 'Which of the following statements about Python decorators is false?',
      answer: 'Decorators are applied to a function at compile time.',
      distractors: [
        'A decorator is a function that takes another function and extends its behavior without explicitly modifying it.',
        'Decorators can be applied to classes as well as functions.',
        'Multiple decorators can be applied to a single function.'
      ],
      explanation: 'Decorators in Python are applied at runtime, not at compile time. When a decorated function is defined, the decorator is executed immediately, and the result replaces the original function definition in the namespace.',
      link: 'https://www.freecodecamp.org/news/python-decorators-explained/'
    }
  ]
};

export default pythonQuiz;

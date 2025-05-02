const regexQuiz = {
  category: 'Regex',
  questions: [
    {
      question: 'Which regex quantifier matches 0 or 1 occurrence of the preceding character or group?',
      answer: '?',
      distractors: ['*', '+', '{3}'],
      explanation: 'The ? quantifier matches the preceding character or group 0 or 1 time, indicating that it is optional.',
      link: 'https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/'
    },
    {
      question: 'What does the regex character class [A-Za-z] match?',
      answer: 'Any letter(both uppercase and lowercase)',
      distractors: ['Any number', 'Any special characters', 'Only upper case letters'],
      explanation: 'This character class matches any single letter, whether it\'s uppercase or lowercase.',
      link: 'https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/'
    },
    {
      question: 'Which of the following regular expressions will match a string containing exactly three lowercase letters (a-z) in a row?',
      answer: '[a-z]{3}',
      distractors: ['[a-z]+', '[a-z]{2,3}', '[a-z]{4}'],
      explanation: '[a-z]{3} is the correct regular expression for matching a string containing exactly three lowercase letters (a-z) in a row.',
      link: 'https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/'
    },
    {
      question: 'Which regular expression pattern can be used to match valid email addresses according to the most common email format standards?',
      answer: '^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
      distractors: [
        '^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-z]{2,}$',
        '^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,}$',
        '^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,}$'
      ],
      explanation: '^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$ matches valid email addresses by ensuring alphanumeric characters, dots, underscores, plus signs, and hyphens before @ and a valid domain with at least one dot after @.',
      link: 'https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/'
    },
    {
      question: 'What are Regular Expressions?',
      answer: 'Patterns that allow you to describe, match, or parse text',
      distractors: [
        `popular type of compiler built in the 1980's`,
        'a category of sorting algorithms',
        'Patterns that allow you to reverse strings'
      ],
      explanation: 'Regular expressions are patterns that allow you to describe, match, or parse text.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following flags is used for global search?',
      answer: 'g',
      distractors: ['i', 'm', '?'],
      explanation: 'The g flag is used for global search which means the search will not return after the first match.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following flags is used for case-insensitive search?',
      answer: 'i',
      distractors: ['g', 'n', 'j'],
      explanation: 'The i flag is used for case-insensitive search meaning that a match can occur regardless of the casing.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following flags is used for multiline search?',
      answer: 'm',
      distractors: ['a', 'd', 'w'],
      explanation: 'The m flag is used for multiline search.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following flags is used for Unicode search?',
      answer: 'u',
      distractors: ['k', 'v', 'e'],
      explanation: 'The u flag is used for Unicode search.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following characters matches the start of a line?',
      answer: '^',
      distractors: ['&', '*', '?'],
      explanation: 'The ^ character matches the start of a line and anchors a literal at the beginning of that line.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following characters matches the end of a line?',
      answer: '$',
      distractors: ['<', '>', '?'],
      explanation: 'The $ character matches the end of a line and anchors a literal at the end of that line.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'In JavaScript Regular Expressions, which of the following word boundaries matches the start or end of a word?',
      answer: '\b',
      distractors: ['g', 'w', '\n'],
      explanation: 'The \b word boundary matches the start or end of a word.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'What is a character class in Regular Expressions?',
      answer: 'A character class is used to match any one of several characters in a particular position',
      distractors: [
        'A character class is used to remove spaces from a string',
        'A character class is used to remove numbers from a string',
        'A character class is used to add alphanumeric characters to a string'
      ],
      explanation: 'A character class is used to match any one of several characters in a particular position.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'Which of the following regex patterns can be used to match one or more occurrences of a digit in a string?',
      answer: 'd+',
      distractors: ['d*', 'd?', 'd{2}'],
      explanation: 'The regex pattern d+ matches one or more occurrences of a digit in a string. The plus sign (+) means \'one or more\' in regular expressions.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-beginners/'
    },
    {
      question: 'What are the two Lookaround groups in regex?',
      answer: 'Lookahead and Lookbehind',
      distractors: ['Lookfront and Lookback', 'Lookstart and Lookend', 'Lookplus and Lookminus'],
      explanation: 'The Lookahead and Lookbehind are non capturing groups that search for the presence or absence of a regex pattern.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    },
    {
      question: 'Which of these patterns denotes a positive Lookahead?',
      answer: '(?=)',
      distractors: ['(?a)', '(?#)', '(?->)'],
      explanation: 'The positive Lookahead is indicated by the = in the group.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    },
    {
      question: 'Which of these patterns denotes a negative Lookahead?',
      answer: '(?!)',
      distractors: ['(?~)', '(?-=)', '(?A)'],
      explanation: 'The negative Lookahead is indicated by the ! in the group.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    },
    {
      question: 'Which of these patterns denotes a positive Lookbehind?',
      answer: '(?<=)',
      distractors: ['(?b)', '(?$)', '(?<-)'],
      explanation: 'The positive Lookbehind is indicated by the <= in the group.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    },
    {
      question: 'Which of these patterns denotes a negative Lookbehind?',
      answer: '(?<!)',
      distractors: ['(?B)', '(?!!)', '(?--)'],
      explanation: 'The negative Lookbehind is indicated by the <! in the group.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    },
    {
      question: 'Which of the following are used to group part of a regex into one unit?',
      answer: '()',
      distractors: ['[]', '{}', '<>'],
      explanation: 'The parentheses, (), are used in grouping regex.',
      link: 'https://www.freecodecamp.org/news/regular-expressions-for-javascript-developers/'
    }
  ]
};

export default regexQuiz;

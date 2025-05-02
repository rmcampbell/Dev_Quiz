const qualityAssuranceQuiz = {
  category: 'QA',
  questions: [
    {
      question: 'The primary purpose of unit testing in software development is to:',
      answer: 'Break down the codebase into smaller parts (units) and test them in isolation.',
      distractors: [
        'Validate the overall functionality of a software application.',
        'Ensure proper integration between different software components.',
        'Verify the user interface and user experience of the software.'
      ],
      explanation: 'Unit testing involves testing individual components or units of code in isolation to ensure they work as intended.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'How does unit testing contribute to code documentation?',
      answer: 'Unit testing documents the behavior and flow of code, making it easier for new developers to understand.',
      distractors: [
        'Unit testing is not related to code documentation.',
        'Unit testing generates automated documentation.',
        'Unit testing documentation is only for experienced developers.'
      ],
      explanation: 'Unit tests serve as living documentation that describes how code should behave.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'Which software development approach often emphasizes the use of unit testing?',
      answer: 'Test-Driven Development (TDD).',
      distractors: ['Waterfall model.', 'Agile development.', 'Scrum methodology.'],
      explanation: 'TDD (Test-Driven Development) involves writing unit tests before implementing the code, making unit testing a fundamental practice.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'In JavaScript, which assertion library is commonly used for writing unit tests?',
      answer: 'Chai',
      distractors: ['Yii', 'Spock', 'NUnit'],
      explanation: 'Chai is a popular assertion library often used in combination with testing frameworks like Mocha.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'What is the typical process after writing unit tests in Test-Driven Development (TDD)?',
      answer: 'Implement the minimum code required to pass the test cases and then refactor the code.',
      distractors: [
        'Ignore the test results and proceed with coding.',
        'Write additional test cases without implementing any code.',
        'Abandon the unit testing approach and rely on manual testing.'
      ],
      explanation: 'TDD involves an iterative process of writing tests, implementing code, and refactoring.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'Which aspect of code quality does unit testing help enforce?',
      answer: 'Unit testing enforces good and extendable interfaces and patterns in the code.',
      distractors: [
        'Unit testing focuses on code performance optimization.',
        'Unit testing ensures user interface design quality.',
        'Unit testing checks for code comments and documentation.'
      ],
      explanation: 'Unit tests encourage developers to think about code structure and maintainability.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'What is the key benefit of unit testing in software development?',
      answer: 'Confidence to add changes, reuse, or refactor code without introducing bugs.',
      distractors: [
        'Unit testing guarantees the absence of all bugs.',
        'Unit testing reduces the need for debugging.',
        'Unit testing simplifies user acceptance testing.'
      ],
      explanation: 'Unit testing provides confidence in code modifications and refactoring.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'How does unit testing contribute to industry standards in software development?',
      answer: 'Unit testing is a common discipline and a requirement for many software companies, making it an industry standard.',
      distractors: [
        'Unit testing is a niche practice adopted by a few companies.',
        'Unit testing is primarily used in academic research.',
        'Unit testing varies widely by geographical regions.'
      ],
      explanation: 'Many software companies consider unit testing essential for software quality and reliability.',
      link: 'https://www.freecodecamp.org/news/unit-tests-explained/'
    },
    {
      question: 'What does the term defect clustering refer to?',
      answer: 'Most of the problems that are found occur in just a few parts of the application or software.',
      distractors: [
        'The random distribution of defects throughout a software application.',
        'The problem that is only found in large software applications.',
        'The principle that 50% of the defects in a software application are caused by 50% of the modules.'
      ],
      explanation: 'Defect clustering is a common phenomenon in software development where a small number of modules in a software application contain a large proportion of the defects.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/#software-testing-principles'
    },
    {
      question: 'What is the purpose of smoke testing?',
      answer: 'To verify that the basic functionality of a software application is working as expected.',
      distractors: [
        'To identify all of the defects in a software application.',
        'To verify that a software application meets all of its requirements.',
        'To ensure that a software application is compatible with all of its supported environments.'
      ],
      explanation: 'It is a quick and lightweight test that is designed to identify any major issues with the software application before more detailed testing is performed.',
      link: 'https://www.freecodecamp.org/news/smoke-testing/#what-is-smoke-testing'
    },
    {
      question: 'What is Cross-Browser Compatibility Testing?',
      answer: 'Quality assurance process in web development to ensure a website functions consistently across different web browsers.',
      distractors: [
        'A method for developing new web browsers.',
        'A technique for improving website performance.',
        'A term for website accessibility testing.'
      ],
      explanation: 'Cross-Browser Compatibility Testing is crucial to deliver a consistent user experience across various web browsers, ensuring that a website works correctly and looks the same in all of them.',
      link: 'https://www.freecodecamp.org/news/cross-browser-compatibility-testing-best-practices-for-web-developers/'
    },
    {
      question: 'Why is Cross-Browser Compatibility Testing important?',
      answer: 'Ensures a consistent user experience, maximizes market reach, maintains credibility, adapts to mobile devices, impacts SEO, and reduces support and maintenance.',
      distractors: [
        'It is a non-essential practice in web development that primarily focuses on the visual design and layout of websites.',
        'It primarily addresses website performance, aiming to make sites load faster and use fewer resources, which is beneficial for user experience.',
        'It mainly concerns itself with enhancing website security by implementing encryption protocols and firewalls to protect user data.'
      ],
      explanation: 'Cross-Browser Compatibility Testing is crucial for various reasons, including user experience, market reach, credibility, mobile adaptability, SEO, and reducing ongoing support and maintenance efforts.',
      link: 'https://www.freecodecamp.org/news/cross-browser-compatibility-testing-best-practices-for-web-developers/'
    },
    {
      question: 'What are common cross-browser compatibility issues?',
      answer: 'Differences in rendering, CSS styles, plugin compatibility, third-party dependencies, and browser-specific bugs.',
      distractors: [
        'Cross-browser testing typically reveals no issues, as all browsers have standardized their rendering engines.',
        'Common issues often involve minor visual discrepancies in font sizes and spacing due to browser rendering inconsistencies.',
        'All browsers interpret code in the same way, resulting in a uniform user experience and visual presentation.'
      ],
      explanation: 'Common issues in cross-browser compatibility include rendering disparities, CSS style variations, plugin compatibility problems, third-party dependency issues, and browser-specific bugs.',
      link: 'https://www.freecodecamp.org/news/cross-browser-compatibility-testing-best-practices-for-web-developers/'
    },
    {
      question: 'What is the purpose of a test case execution report in software testing?',
      answer: 'To track the progress of test execution',
      distractors: [
        'To document test case design',
        'To describe the software architecture',
        'To specify user requirements'
      ],
      explanation: 'A test case execution report is used to track the progress of test case execution, including which test cases have been executed, their outcomes, and any defects found.',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'What is the primary goal of quality assurance in software development?',
      answer: 'To ensure software quality',
      distractors: ['To fix all software bugs', 'To develop software faster', 'To design software interfaces'],
      explanation: 'The primary goal of quality assurance (QA) in software development is to ensure that the software meets the required quality standards and is free from major defects.',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'What type of testing is done on a new feature to ensure that it doesn\'t accidentally break existing functionality?',
      answer: 'Regression',
      distractors: ['Smoke', 'End to End', 'Integration'],
      explanation: 'Regression testing is done on a new build to ensure that new functionality has not unintentionally broken previously tested functionality.',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'Which of the following most accurately describes exhaustive testing?',
      answer: `It's not possible.`,
      distractors: [
        `It's considered best practice.`,
        `It's a standard procedure in the final steps before launch.`,
        `It's what happens during end to end testing.`
      ],
      explanation: 'If you truly try to test every aspect and test case in your software, it will take too much time and effort, and it\'s not practical.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/#software-testing-principles'
    },
    {
      question: 'What do the terms QA and QC stand for?',
      answer: 'Quality Assurance and Quality Control ',
      distractors: [
        'Quality Assets and Quality completion',
        'Quality Analyst and Quantum Computing',
        'Quality Assessment and Quality Computing'
      ],
      explanation: 'Quality Assurance (commonly known as QA) and Quality Control (commonly known as QC)',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'What type of test involves catching errors while writing code?',
      answer: 'Static Analysis',
      distractors: ['Unit', 'Integration', 'End to End'],
      explanation: 'One of the most common sources of bugs is related to typos and incorrect types. Static Analysis Testing lets you catch typos and type errors as you write the code.',
      link: 'https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60/'
    },
    {
      question: 'What type of test involves testing individual functions or components?',
      answer: 'Unit',
      distractors: ['Static Analysis', 'Integration', 'End to End'],
      explanation: 'Unit Testing lets us verify that individual, isolated parts work as expected.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing'
    },
    {
      question: 'What type of test involves testing groups of functions and/or components?',
      answer: 'Integration',
      distractors: ['Static Analysis', 'Unit', 'End to End'],
      explanation: 'Integration Testing lets us verify that several units work together in harmony.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing'
    },
    {
      question: 'What type of test behaves like a user to click around the app and verify that it functions correctly?',
      answer: 'End to End',
      distractors: ['Static Analysis', 'Unit', 'Integration'],
      explanation: 'End to End tests typically run the entire application (both frontend and backend) and your test will interact with the app just like a typical user would.',
      link: 'https://www.freecodecamp.org/news/end-to-end-testing-tutorial/'
    },
    {
      question: 'Which of the following statements are false about using software tests?',
      answer: 'By using software tests, you automatically ensure that the app follows user requirements.',
      distractors: [
        'Using software tests improves product security.',
        'Using software tests improves customer satisfaction.',
        'Using software tests saves money.'
      ],
      explanation: 'Even if the app is 99% bug free, if it doesn\'t meet consumer requirements or fulfill the original user requirements it is useless.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/'
    },
    {
      question: 'What are regression tests?',
      answer: 'Re-applying tests at later stages of development.',
      distractors: [
        'Only testing individual units of code',
        'tests that check for basic functionality only',
        'There is no such thing as regression tests'
      ],
      explanation: 'Regression tests refers to re-applying tests at later stages of development to ensure they still work.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/'
    },
    {
      question: 'What type of test involves the process of testing integrated software?',
      answer: 'System',
      distractors: ['Acceptance', 'Unit', 'Integration'],
      explanation: 'In system testing, the quality assurance team evaluates how each component of the application/software work together in a full, integrated environment.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide/#types-of-software-testing'
    },
    {
      question: 'What does the term TDD stand for?',
      answer: 'Test-Driven Development',
      distractors: [
        'Test-Driving Development',
        'Test-Distributing Development',
        'Test-Distinct Development'
      ],
      explanation: 'Test-driven development is the act of first deciding what you want your program to do (the specifications), formulating a failing test, then writing the code to make that test pass.',
      link: 'https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/'
    },
    {
      question: 'Which of the following is true about TDD?',
      answer: 'With TDD, test logic precedes application logic.',
      distractors: [
        'With TDD, application logic precedes test logic',
        'TDD stands for Test-Distributing Development',
        'TDD stands for Testing Distributed Development'
      ],
      explanation: 'The term TDD stands for Test-Driven Development and it is the act of first deciding what you want your program to do (the specifications), formulating a failing test, then writing the code to make that test pass.',
      link: 'https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/'
    },
    {
      question: 'Which testing technique focuses on examining the internal logic and structure of a software application?',
      answer: 'White-Box Testing',
      distractors: ['Black-Box Testing', 'Grey-Box Testing', 'User Acceptance Testing'],
      explanation: 'White-box testing involves analyzing the internal code, logic, and structure of a software application to ensure thorough coverage of all code paths.',
      link: 'https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/'
    },
    {
      question: 'What does SAST stand for in the context of software security testing?',
      answer: 'Static Application Security Testing',
      distractors: [
        'Systematic Application Safety Testing',
        'Source Analysis Security Testing',
        'Secure Algorithmic Source Testing'
      ],
      explanation: 'Static Application Security Testing (SAST) involves analyzing the codebase for security vulnerabilities and violations of security rules, providing insights into potential issues before the final application build.',
      link: 'https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/'
    },
    {
      question: 'How many phases/stages does the Software Development Life Cycle have?',
      answer: '7',
      distractors: ['3', '12', '5'],
      explanation: 'A good QA engineer should understand the full life cycle of software products in order to effectively plan and test them. There are 7 phases of the Software Development Life Cycle',
      link: 'https://www.freecodecamp.org/news/how-to-become-a-quality-assurance-engineer-qa-engineer-career-guide/'
    },
    {
      question: 'What is exploratory testing?',
      answer: 'An unscripted approach to testing in an effort to find unknown bugs and identify regressions',
      distractors: [
        'Tests that check for basic functionality',
        'A replacement for scripted testing',
        'Focuses on one area of the software that will most likely contain bugs'
      ],
      explanation: 'An unscripted approach to testing, which relies on the tester\'s unique creativity in an effort to find unknown bugs and identify regressions',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'What is the primary focus of quality assurance (QA) in the Software Development process, as compared to quality control (QC)?',
      answer: 'QA focuses on proactive processes and adherence to quality standards, while QC is primarily concerned with reactive corrections',
      distractors: [
        'QA focuses on inspection and testing, while QC focuses on documentation, and audits.',
        'QA and QC implies the same thing and can be used interchangeably.',
        'QC is perfomed before QA.'
      ],
      explanation: 'QA focuses more on proactive processes while QC focuses more on reactive corrections. QA is concerned with processes and adherence, while QC is centered on inspections, testing and making corrections.',
      link: 'https://www.freecodecamp.org/news/how-to-become-a-quality-assurance-engineer-qa-engineer-career-guide/'
    },
    {
      question: 'Which of the following skills is NOT typically required for a QA engineer?',
      answer: 'Proficiency in writing code.',
      distractors: ['Good time management skills', 'Strong listening skills', 'Attention to detail'],
      explanation: 'Core skills needed for becoming a good QA engineer are good time management skills, strong listening skills and attention to detail.',
      link: 'https://www.freecodecamp.org/news/how-to-become-a-quality-assurance-engineer-qa-engineer-career-guide/'
    },
    {
      question: 'What is the scope of cross-browser testing?',
      answer: 'Focused on ensuring a website functions consistently across various web browsers.',
      distractors: [
        'Cross-browser testing extends to evaluating all aspects of a website, including its design, content, and features, excluding only the browsers themselves.',
        `It's exclusively centered on analyzing the unique features and capabilities of a single web browser to enhance user experience.`,
        'It encompasses the assessment of every website on the internet to guarantee their optimal performance and user satisfaction.'
      ],
      explanation: 'Cross-Browser Testing specifically targets ensuring a website\'s consistency across different web browsers and their versions.',
      link: 'https://www.freecodecamp.org/news/cross-browser-compatibility-testing-best-practices-for-web-developers/'
    },
    {
      question: 'How does compatibility testing differ from cross-browser testing?',
      answer: 'Compatibility testing is broader, assessing different operating systems, devices, screen sizes, and network conditions, while cross-browser testing focuses specifically on browsers.',
      distractors: [
        'Compatibility testing is limited to a single web browser.',
        'Compatibility testing and cross-browser testing are the same thing.',
        'Compatibility testing only checks the appearance of a website.'
      ],
      explanation: 'Compatibility testing encompasses a wide range of factors, including operating systems, devices, screen sizes, and network conditions, while cross-browser testing concentrates on web browsers.',
      link: 'https://www.freecodecamp.org/news/cross-browser-compatibility-testing-best-practices-for-web-developers/'
    },
    {
      question: 'Which of the following is NOT an example of non-functional testing?',
      answer: 'Checking the actual features of our product. ',
      distractors: [
        'Stress testing to check how infrastructure responsds to heavy usage.',
        'Security testing to check if an application is vulnerable to common hacking attacks.',
        'Accessibility testing to check if an an application is coded in a way that is accessible for people with different disabilities.'
      ],
      explanation: 'Non-functional testing refers to anything that\'s not strictly related to the core features of our product.',
      link: 'https://www.freecodecamp.org/news/test-a-react-app-with-jest-testing-library-and-cypress/'
    },
    {
      question: 'Which testing technique focuses on testing what the user should perceive?',
      answer: 'Black Box Testing',
      distractors: ['White Box Testing', 'Grey Box Testing', 'Green Box Testing'],
      explanation: 'Black box testing is a method where the tester does not have any working knowledge of the internal structure of the software. It verifies the functionality of the software.',
      link: 'https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/'
    },
    {
      question: 'What is a test-runner?',
      answer: 'A test-runner is piece of software that allows you to run tests to evaluate your app. ',
      distractors: [
        'A test-runner is a programming language used for writing test cases and validating software applications.',
        'A test-runner is a device used in sports competitions to measure the speed and accuracy of athletes.',
        'A test-runner is a software tool that automatically generates test data for various software applications.'
      ],
      explanation: 'A test-runner is a piece of software that allows you to run tests to evaluate your app such as Jest, a JavaScript test-runner.',
      link: 'https://www.freecodecamp.org/news/test-a-react-app-with-jest-testing-library-and-cypress/'
    },
    {
      question: `What is the testing phase that's usually done when the software is almost 60 - 80% complete?`,
      answer: 'Alpha testing',
      distractors: ['Beta Testing', 'Backend Testing', 'GUI Testing'],
      explanation: 'Alpha testing is done when the software is almost 60-80% complete. There is no fixed testing cycle. Each cycle might go up to two weeks. Alpha testing involves both black box and white box testing.',
      link: 'https://www.freecodecamp.org/news/4-testing-methods-which-are-mandatory-for-any-software-7731ad194fb3/'
    },
    {
      question: 'What does CI/CD stand for?',
      answer: 'Continuous Integration/Continuous Delivery',
      distractors: [
        'Combined Integration/Combined Delivery',
        'Contigency Integration/Contigency Delivery',
        'Customer Integration/Customer Delivery'
      ],
      explanation: 'Continuous Integration and Continuous Delivery (CI/CD) is a software development approach that aims to improve the speed, efficiency, and reliability of software delivery.',
      link: 'https://www.freecodecamp.org/news/what-is-ci-cd/'
    },
    {
      question: 'What is Negative path testing used for?',
      answer: 'To produce an error state in an application and verify that the error is handled gracefully',
      distractors: [
        'Tests that check for basic functionality',
        'To test individual components/modules together to ensure they connect and interact well with one another.',
        'To ensure that new functionality has not unintentionally broken previously tested functionality'
      ],
      explanation: 'Negative path testing is a testing scenario designed to produce an error state in a feature/application and verify that the error is handled gracefully',
      link: 'https://www.freecodecamp.org/news/software-quality-assurance-guide/'
    },
    {
      question: 'Which of the following is a primary focus of non-functional testing in software development?',
      answer: `Evaluating the software's performance, reliability, and scalability`,
      distractors: [
        'Verifying that the software meets specific functional requirements',
        'Testing the interaction between integrated components or modules',
        'Checking for syntax and logical errors in the code'
      ],
      explanation: 'Non-functional testing is a software testing method that tests for end-user experiences, such as performance and reliability under load.',
      link: 'https://www.freecodecamp.org/news/software-testing-beginners-guide#types-of-software-testing'
    }
  ]
};

export default qualityAssuranceQuiz;

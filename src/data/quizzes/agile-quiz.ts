const agileQuiz = {
  category: 'Agile',
  questions: [
    {
      question: 'Which of the following is the primary role of a Scrum Product Owner?',
      answer: 'Define and prioritize the product backlog',
      distractors: [
        'Lead daily standup meetings',
        'writes test for the product',
        'Remove impediments for the team'
      ],
      explanation: 'The Product Owner is responsible for managing the product backlog and defining priorities.The Product Owner is the voice of the customer and stakeholders',
      link: 'https://www.freecodecamp.org/news/agile-software-development-handbook/'
    },
    {
      question: 'Which of the following Agile methodologies is known for its emphasis on continuous delivery and flow-based development?',
      answer: 'Kanban',
      distractors: ['Extreme Programming (XP)', 'Scrum', 'Lean Software Development'],
      explanation: 'Kanban is known for its focus on continuous delivery and flow-based development.',
      link: 'https://www.freecodecamp.org/news/agile-software-development-handbook/'
    },
    {
      question: 'What is the primary focus of Kanban boards?',
      answer: 'Visualizing the workflow and work in progress',
      distractors: [
        'Defining sprint goals',
        'Creating the product backlog',
        'Facilitating daily standup meetings'
      ],
      explanation: 'Kanban boards visualize the workflow and work in progress.',
      link: 'https://www.freecodecamp.org/news/agile-software-development-handbook/'
    },
    {
      question: 'How are work items typically represented on a Kanban board?',
      answer: 'Cards',
      distractors: ['Tasks', 'Stories', 'Points'],
      explanation: 'Work items in Kanban are often represented as cards on the board',
      link: 'https://www.freecodecamp.org/news/agile-software-development-handbook/'
    },
    {
      question: 'What is the average duration for sprints?',
      answer: '2 weeks to a month',
      distractors: [
        '3 weeks to 6 weeks',
        '1 month to 3 months',
        '3 months to 6 months'
      ],
      explanation: 'The average duration for sprints is usually two weeks to a month which can vary based on the projects and the team size involved',
      link: 'https://www.freecodecamp.org/news/being-agile-kanban-vs-scrum/'
    },
    {
      question: 'What is the main purpose of continuous integration and continuous delivery(CI/CD)?',
      answer: 'To automate the software development and delivery process',
      distractors: [
        'To reduce the cost of software development.',
        'To improve the quality of software.',
        'To increase the number of features released in a given period of time.'
      ],
      explanation: 'CI/CD tools can be used to automate software building, testing, and deployment, and they often work together with build automation tools to deliver software to production more frequently and with less risk.',
      link: 'https://www.freecodecamp.org/news/how-devops-works/'
    },
    {
      question: 'What are the two most popular CI/CD tools?',
      answer: 'Jenkins and GitHub Actions',
      distractors: ['Selenium', 'Docker', 'Kubernetes'],
      explanation: 'Both Jenkins and GitHub Actions are powerful CI/CD tools that can help to deliver software faster, with higher quality, and with less risk.',
      link: 'https://www.freecodecamp.org/news/how-devops-works/'
    },
    {
      question: 'What are the three primary roles in Scrum and their key responsibilities?',
      answer: 'Product Owner, Scrum Master, and Team Member',
      distractors: [
        'CEO, CTO, web master',
        'Scrum Master, CFO, CTO',
        'Product Owner, COO, Scrum Master'
      ],
      explanation: 'The three primary roles in Scrum are Product Owner, Scrum Master, and Team Member. The Product Owner maximizes ROI, the Scrum Master guides team performance, and Team Members have authority over work methods.',
      link: 'https://www.freecodecamp.org/news/scrum-for-startups-or-for-any-project-for-that-matter-93ad0db17a84/'
    },
    {
      question: 'What is the core concept behind the Agile development methodology?',
      answer: 'Iterative and incremental development',
      distractors: [
        'Comprehensive documentation',
        'Long-term planning',
        'Hierarchical decision-making'
      ],
      explanation: 'Agile focuses on iterative and incremental development, allowing for flexibility and adaptability.',
      link: 'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/'
    },
    {
      question: 'What is the primary purpose of the Daily Stand-up meeting in Scrum?',
      answer: 'To provide a quick status update and identify any impediments',
      distractors: [
        'To discuss long-term project goals',
        'To assign tasks for the day',
        'To review the entire project timeline'
      ],
      explanation: 'The Daily Stand-up meeting in Scrum aims to keep the team informed, identify issues, and ensure alignment on daily tasks.',
      link: 'https://www.freecodecamp.org/news/scrum-the-hard-parts/'
    },
    {
      question: 'According to Lean Software Development, what is the goal when considering "change requests" in software development?',
      answer: 'The goal is to minimize the time that each "change request" is on the assembly line before being delivered',
      distractors: [
        'The goal is to maximize the number of "change requests" in the pipeline',
        'The goal is to delay the processing of "change requests" as much as possible',
        'The goal is to eliminate all "change requests"'
      ],
      explanation: 'In Lean Software Development, the focus is on reducing lead time and delivering value quickly. Therefore, the goal with "change requests" is to process them efficiently and minimize the time they spend in the development pipeline before they are delivered.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What is the primary focus of Lean Software Development?',
      answer: 'It focuses on using techniques that minimize extra work and wasted effort in the software development process',
      distractors: [
        'It emphasizes extensive documentation',
        'It prioritizes speed over quality',
        'It borrows techniques from the automotive industry'
      ],
      explanation: 'Lean Software Development is the process of building software with the focus on using techniques which minimize extra work and wasted effort. These techniques are borrowed from the Lean manufacturing movement and applied to the context of software development.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'In Agile, what is meant by Integration Hell?',
      answer: 'The phase where multiple components or modules are integrated into a single system, often causing unexpected issues',
      distractors: [
        'A stage in Agile development where teams struggle to integrate user stories',
        'A term used to describe smooth and seamless integration processes',
        'A project management technique to prevent integration issues'
      ],
      explanation: 'Integration Hell is a slang term for when all the members of a development team goes through the process of implementing their code at random times with no way to incorporate the different pieces of code into one seamless string of code.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What is the purpose of a retrospective meeting in Agile Methodology?',
      answer: 'To reflect on the previous iteration and identify areas for improvement',
      distractors: [
        'To plan the tasks for the next iteration',
        'To review and approve user stories',
        'To demo the product to stakeholders'
      ],
      explanation: 'The purpose of an Agile retrospective is to reflect on the previous iteration and identify what went well and what could be improved. It allows the team to continuously adapt and enhance their processes and practices.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What are the first steps of Test Driven Development (TDD)?',
      answer: 'Deciding what the program should do (the specifications) and formulating a failing test',
      distractors: [
        'Analyzing the code and deciding how many tests are needed',
        'Writing out documentation and pseudo code so that the product owner knows the testing standards',
        'Updating the program requirements and rendering the foundation to meet testing regulations'
      ],
      explanation: 'Before any actual code is written, the specifications and a failing test are set up. Then, the code that\'s written should make the test pass.',
      link: 'https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/'
    },
    {
      question: 'Which development process did Behavior Driven Development (BDD) emerge from?',
      answer: 'Test Driven Development (TDD)',
      distractors: [
        'Feature Driven Development (FDD)',
        'User Driven Development (UDD)',
        'Configuration Driven Development (CDD)'
      ],
      explanation: 'Behavior Driven Development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design ',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'In Agile, what are epics?',
      answer: 'epics are a way to group pieces of work together to represent a feature.',
      distractors: [
        'epics are another term for scrum master',
        'epics do not exist in agile',
        'epics are another term for standup meetings'
      ],
      explanation: ' Stories have a goal of defining a bite-sized piece of work, epics are a way to group those pieces of work together to represent a feature.',
      link: 'https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/#sprints'
    },
    {
      question: 'What are the five Scrum values?',
      answer: 'Commitment, Focus, Openness, Respect, and Courage.',
      distractors: [
        'Commitment, Respect, Honesty, Loyalty, Truth .',
        'Focus, Loyalty, Courage, Patience, Openness.',
        'Openness, Commitment, Honesty, Discipline, Patience.'
      ],
      explanation: 'The five values that people should master in order to successfully apply Scrum are commitment, focus, openness, respect and courage.',
      link: 'https://scrumguides.org/scrum-guide.html'
    },
    {
      question: 'In Agile, when might a Sprint be abnormally cancelled?',
      answer: 'When the Sprint Goal becomes obsolete.',
      distractors: [
        'When it becomes clear that not everything will be finished by the end of the Sprint.',
        'When the Developers feel that the work is too hard.',
        'When the sales department has an important new opportunity.'
      ],
      explanation: 'The Product Owner can cancel a Sprint if the Sprint Goal becomes obsolete.',
      link: 'https://scrumguides.org/scrum-guide.html'
    },
    {
      question: 'Which of the following development models is a very linear approach to building a product and also has little room for feedback or iteration until the product is completely built and tested?',
      answer: 'Waterfall Development',
      distractors: ['Kanban Development', 'Linear Development', 'Rigid Development'],
      explanation: 'Waterfall development is a very linear approach to building a product. It has little to no room for feedback or iteration until the product is completely built and tested.',
      link: 'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/'
    },
    {
      question: 'Which of the following is typically the smallest defined piece of work in the Agile framework?',
      answer: 'Story',
      distractors: ['Plot', 'Plan', 'Outline'],
      explanation: 'A story is typically the smallest defined piece of work within the Agile framework.',
      link: 'https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/'
    },
    {
      question: 'Who is responsible for the sprint meeting?',
      answer: 'Scrum master',
      distractors: ['Product owner', 'Scrum team', 'All of the above.'],
      explanation: 'The Scrum Master ensures that the team discusses how to improve on the delivery or software products.',
      link: 'https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/'
    },
    {
      question: 'What is a Sprint Review?',
      answer: 'an opportunity for inspection of the Sprint outcome',
      distractors: [
        'Activity to improve Scrum Processes',
        'Activity to plan for the next Sprint',
        'Activity to plan for the release'
      ],
      explanation: 'A Sprint Review involves seeking feedback from stakeholders and incorporating that feedback into the software product.',
      link: 'https://scrumguides.org/scrum-guide.html#sprint-review'
    },
    {
      question: 'In Agile, what is the term for combining Kanban with Scrum?',
      answer: 'Scrumban',
      distractors: ['KanScrum', 'ScrumKanban', 'Kanrum'],
      explanation: 'Kanban is very flexible and it can be used in combination with Scrum, which is called Scrumban.',
      link: 'https://www.freecodecamp.org/news/what-is-kanban-the-agile-methodology-defined-and-how-to-use-it-for-your-software-development-team-2/'
    },
    {
      question: 'According to the Agile Manifesto, your highest priority is to _____________.',
      answer: 'satisfy the customer/client requirements',
      distractors: [
        'achieve the desired Return of Investment',
        'minimize change requests from the customer/client',
        'deliver the project on time'
      ],
      explanation: 'According to the Agile Manifesto,your highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
      link: 'https://forum.freecodecamp.org/t/the-agile-manifesto-explained/16151'
    },
    {
      question: 'In a Scrum team, what is a Scrum Master?',
      answer: 'A servant leader whose role is to support the rest of the team and the organization',
      distractors: [
        `A project manager who's main role is to ensure the Developers deliver in time`,
        'An external resource temporarily assigned to the team to audit their work',
        'Scrum Master is not a role officially recognized by the Scrum guide'
      ],
      explanation: 'The Scrum Master is a leader who supports their colleagues in their activities and does more than just assign tasks.',
      link: 'https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/'
    },
    {
      question: 'In a Scrum team, who is responsible for stories estimation?',
      answer: 'The Developers',
      distractors: [
        'The Product Owner',
        'The Scrum Master',
        'The Product Owner and the Scrum Master'
      ],
      explanation: 'According to the Scrum Guide, only members of the development team are allowed to estimate development effort. Neither Scrum Master, nor Product Owner.',
      link: 'https://www.freecodecamp.org/news/scrum-the-hard-parts/'
    },
    {
      question: 'In a Scrum team, who is responsible for setting priorities?',
      answer: 'The Product Owner',
      distractors: [
        'The Developers',
        'The Scrum Master',
        'The Product Owner and the Scrum Master'
      ],
      explanation: 'According to the Scrum Guide, the Product Owner has the final say when prioritizing the Product Backlog.',
      link: 'https://www.freecodecamp.org/news/scrum-the-hard-parts/'
    },
    {
      question: 'In a project adopting the Scrum framework, when is the Product Backlog completed?',
      answer: 'Never',
      distractors: [
        'Before the project starts',
        'There is no precise limit, but it is advised to complete it before the fourth Sprint',
        'It is mandatory for the Product Backlog to be completed before the fourth Sprint'
      ],
      explanation: 'According to the Scrum Guide, the Product Backlog is never complete. Initially, it contains only the best-understood requirements.',
      link: 'https://www.freecodecamp.org/news/scrum-the-hard-parts-2-sprint-harder/'
    },
    {
      question: 'Which of the following is NOT one of the four core principles of the Agile methodology?',
      answer: 'Comprehensive documentation over working software',
      distractors: [
        'Individuals and interactions over processes and tools',
        'Responding to change over following a plan',
        'Customer collaboration over contract negotiation'
      ],
      explanation: 'Instead of detailed specifications and planning, Agile prioritizes shipping working software and making incremental changes based on feedback.',
      link: 'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/'
    },
    {
      question: 'Which of the following is NOT an Agile framework?',
      answer: 'Waterfall',
      distractors: ['Scrum', 'Kanban', 'XP (Extreme Programming)'],
      explanation: 'Waterfall is an opposing project management methodology that has little to no room for feedback or iteration until the product is completely built and tested.',
      link: 'https://www.freecodecamp.org/news/agile-methods-and-methodology-for-beginners/'
    },
    {
      question: 'In the Agile framework, what is a user story?',
      answer: 'A simple description of a software feature from the perspective of a user or customer',
      distractors: [
        'A simple description of a software feature from the perspective of a developer',
        'A simple description of a software feature from the perspective of the Scrum Master',
        'A simple description of a software feature from the perspective of the Product Owner'
      ],
      explanation: 'A user story is an informal, general explanation of a software feature written from the perspective of the end user.',
      link: 'https://www.freecodecamp.org/news/how-to-write-user-stories-epics-pesonas/'
    },
    {
      question: 'In Agile, which of the following is NOT one of notable features of story points?',
      answer: 'points are assigned in a odd-like sequence: 1, 3, 5, 7, 9...',
      distractors: [
        'points represent the contributions of the whole team',
        `points estimate the 'size' of stories relative to each other`,
        'points do not equate directly to time the task might take'
      ],
      explanation: 'Points estimate the amount of effort required to deliver a user story and are assigned using the Fibonacci sequence',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'In Agile, what is Planning Poker?',
      answer: 'It is used to estimate the development effort required for a user story or a feature',
      distractors: [
        'It is used for the elaboration of the backlog',
        'It is used to estimate the development cost needed for a user story or feature',
        'It is used to estimate what would be development in each user story'
      ],
      explanation: 'Planning poker is an estimation and planning technique in the Agile development model. It is used to estimate the development effort required for a user story or a feature.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What types of environments work best for Agile principles?',
      answer: 'It works great in dynamic environments.',
      distractors: [
        'It works great in static environments.',
        'It works great in customer environments.',
        'Agile has been proven to not work in any good environment.'
      ],
      explanation: 'The Agile environment appeals to quick actions, discussions, evaluations, and considerations for different approaches.  It works great in dynamic environments where there is a potential for changing or evolving requirements.',
      link: 'https://www.freecodecamp.org/news/applying-agile-methodology-to-data-science-projects/'
    },
    {
      question: 'In Agile, which of the following options is a high priority?',
      answer: 'Working software',
      distractors: [
        'Comprehensive documentation',
        'Processes and tools',
        'Contract negotiation'
      ],
      explanation: 'Agile projects are characterized by a series of tasks that are conceived, executed and adapted as the situation demands and one of the priorities is working software.',
      link: 'https://www.freecodecamp.org/news/applying-agile-methodology-to-data-science-projects/'
    },
    {
      question: 'In Agile, what is Timeboxing?',
      answer: 'set amount of time for an activity to occur',
      distractors: [
        `It's a new Agile framework`,
        'Not related to Agile',
        `It's a way to write code faster`
      ],
      explanation: 'In Agile, Timeboxing is a set amount of time for a planned activity to take place. This technique is often used in project management to help with productivity for projects. ',
      link: 'https://en.wikipedia.org/wiki/Timeboxing'
    },
    {
      question: 'In Agile, what are Story Points?',
      answer: 'An estimate of the amount of effort required to deliver a user story',
      distractors: [
        'An estimate of the amount of sprints required to deliver a user story',
        'An estimate of the amount of days required to deliver a user story',
        'An estimate of the amount of hours required to deliver a user story'
      ],
      explanation: 'Story points are used to estimate the amount of effort required to deliver a user story for a project.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#story-points-and-complexity-points'
    },
    {
      question: 'What is the name for the process that focuses on continuously building, testing, and gathering feedback for software products?',
      answer: 'Agile',
      distractors: ['Bugzilla', 'Apache', 'Espresso'],
      explanation: 'Agile is a project management process that focuses on continuously building, testing, and gathering feedback for software products.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What are the four important meetings or ceremonies in Agile Development Methodology?',
      answer: 'Sprint Planning, Daily Stand-up, Sprint Review and Sprint Retrospective',
      distractors: [
        'Monthly Planning, Weekly Stand-up, Sprint Review and Sprint Retrospective',
        'Sprint Review, Daily Stand-up, Sprint Development and Sprint Retrospective',
        'Backlog Planning, Weekly Stand-up, Sprint Review and Sprint Retrospective'
      ],
      explanation: 'Agile ceremonies are the meetings that happen in following sequence Sprint Planning, Daily Stand-up, Sprint Review and Sprint Retrospective before, within, and after a sprint cycle.',
      link: 'https://en.wikipedia.org/wiki/Scrum_(software_development)'
    },
    {
      question: 'In Agile, what does FDD stand for?',
      answer: 'Feature Driven Development',
      distractors: [
        'Feature Design Development',
        'Feature Driven Design',
        'Feature Driven Difference'
      ],
      explanation: 'Feature Driven Development (FDD) is the practice of incrementally developing and frequently releasing new features for software products.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'In Agile, which methodology has no defined roles or functions where each member can assume the available tasks?',
      answer: 'Kanban',
      distractors: ['Scrum', 'Lean', 'Agile Inception '],
      explanation: 'The Kanban method does not prescribe roles or meetings unlike other frameworks such as Scrum.',
      link: 'https://www.freecodecamp.org/news/being-agile-kanban-vs-scrum/'
    },
    {
      question: 'In a Scrum team, who needs to comply with the Definition of Done?',
      answer: 'The Scrum Team',
      distractors: [
        'The Product Owner',
        'The Scrum Master',
        'The Product Owner and the Scrum Master'
      ],
      explanation: 'In Agile, the developers will decided when the work is finished.',
      link: 'https://scrumguides.org/scrum-guide.html'
    },
    {
      question: `Who is accountable for establishing Scrum and Scrum Team's effectiveness?`,
      answer: 'The Scrum Master',
      distractors: [
        'The Scrum Team',
        'The Product Owner and the Scrum Master',
        'The Product Owner'
      ],
      explanation: 'The Scrum Master is responsible for establishing scrum within the team & organizational level.',
      link: 'https://scrumguides.org/scrum-guide.html'
    },
    {
      question: 'Who has the authority to cancel the Sprint?',
      answer: 'The Product Owner',
      distractors: ['The Scrum Team', 'The Scrum Master', 'The Developers'],
      explanation: 'In Agile, the Product Owner has the ability to cancel a Sprint.',
      link: 'https://scrumguides.org/scrum-guide.html'
    },
    {
      question: 'For Agile teams, the primary measure of progress is:',
      answer: 'Working software',
      distractors: ['Burndown charts', 'Kanban board', 'Customer satisfaction'],
      explanation: 'Working software is the primary measure of progress in Agile, according to the seventh principle of the Agile Manifesto. This means that Agile teams focus on delivering software that meets the customer’s needs and provides value. By delivering working software frequently, Agile teams can demonstrate their progress and achievements',
      link: 'https://www.freecodecamp.org/news/you-say-your-team-is-agile-but-that-word-may-not-mean-what-you-think-6dd26eaf9b21/'
    },
    {
      question: 'In agile, why is it generally advisable to avoid assigning a very high number of points (e.g 13 points) to a single user story?',
      answer: 'Because high point stories cannot be completed in a single sprint.',
      distractors: [
        'Because high point stories are reserved for critical features only.',
        'Because high point stories indicate a lack of detail in the user story.',
        'Because it is a convention to use lower points values for better accuracy.'
      ],
      explanation: 'In Agile, assigning a very high number of points to a single user story is generally discouraged because it indicates that the story is too large to be completed within a sprint.',
      link: 'https://www.freecodecamp.org/news/what-is-agile-and-how-youcan-become-an-epic-storyteller/'
    },
    {
      question: 'In agile, what is the primary purpose of a recurring meeting (Dev Huddle) for developers?',
      answer: `To align developers' expectations and make technical decisions`,
      distractors: [
        'To discuss project timelines and deadlines',
        'To plan a vacation program',
        'To provide status updates to stakeholders'
      ],
      explanation: `A 'Dev Huddle' or a recurring meeting in agile development serve as a forum for developers to discuss technical topics, make decisions regarding architecture, conventions, and other aspects of the tech stack.`,
      link: 'https://www.freecodecamp.org/news/how-to-use-the-dev-huddle-to-get-your-developers-on-the-same-page/'
    },
    {
      question: 'What is the purpose of a burndown chart in Agile development?',
      answer: 'To track the progress of user stories throughout a sprint.',
      distractors: [
        'To estimate the total cost of a project.',
        'To assign tasks to team members.',
        'To prioritize backlog items.'
      ],
      explanation: 'A burndown chart in Agile development is used to track the progress of user stories or tasks throughout a sprint. It visually represents the amount of work remaining over time, helping the team to manage their workload effectively.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What is the purpose of a daily stand-up meeting in Agile?',
      answer: 'To provide team members with a quick, daily update on progress, identify and address issues, and synchronize their work.',
      distractors: [
        'To discuss long-term project strategy and planning.',
        'To assign tasks for the entire sprint.',
        `To review the project's final deliverables.`
      ],
      explanation: 'Daily stand-up meetings in Agile, also known as daily scrums, serve to provide team members with a daily opportunity to share updates on their work, identify any issues, and ensure that the team is aligned and focused on the sprint goal.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What is the role of a Scrum Master in Agile development?',
      answer: 'To facilitate the Scrum process, remove impediments, and ensure the team follows Agile principles and practices.',
      distractors: [
        `To manage the project's finances and budgets.`,
        'To write code for the project.',
        'To prioritize backlog items.'
      ],
      explanation: 'The Scrum Master acts as a servant-leader for the team, helping them understand and apply Agile principles, facilitating meetings, and removing obstacles that may hinder the team\'s progress.',
      link: 'https://www.freecodecamp.org/news/what-is-a-scrum-master-the-agile-role-and-responsibilities-explained/'
    },
    {
      question: 'In Agile, what is Acceptance Criteria?',
      answer: 'Tells the Delivery Team how the code should behave.',
      distractors: [
        'The estimated time required to complete a user story.',
        'A list of tasks to be completed by the development team.',
        'A document outlining the entire project plan and timelines.'
      ],
      explanation: 'In agile, if a story does not meet each of the Acceptance Criteria, then the Product Owner should not be accepting the story at the end of the iteration. Additionally, acceptance criteria can be viewed as an instrument to protect the Delivery Team. ',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#acceptance-criteria'
    },
    {
      question: 'In Agile, which of the following is not part of the standard agenda for Daily Stand-up (DSU)?',
      answer: 'Deep discussions on architecture or paradigms.',
      distractors: [
        'What you have done since the last DSU.',
        'What you will be doing after this DSU.',
        'Deep discussions on frameworks and libraries'
      ],
      explanation: 'The Daily Standup (DSU) or Daily Scrum meeting is a meeting held daily at the same time or in the same location. It\'s an integral part of Scrum that allows team members to listen to each other\'s contributions and attempt to identify areas where they can assist each other\'s progress.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/#daily-stand-up-and-daily-scrum'
    },
    {
      question: `What is a 'User Story' in Agile development?`,
      answer: `A simple, informal description of a software feature from an end user's perspective.`,
      distractors: [
        'A comprehensive project plan for the entire development process.',
        'A technical document used by developers to write code.',
        'A formal contract between the development team and stakeholders.'
      ],
      explanation: 'User Stories are a common way of expressing software requirements in a way that\'s easy to understand by both developers and non-technical stakeholders.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: `What is 'Velocity' in the context of Agile project management?`,
      answer: 'A measure of the amount of work a team can complete in a single iteration (sprint).',
      distractors: [
        'The speed at which the team conducts daily stand-up meetings.',
        'The number of bugs or defects found in the software during testing.',
        'The total budget allocated for an Agile project.'
      ],
      explanation: `Velocity is used to estimate the team's capacity and helps with sprint planning by forecasting how much work can be completed.`,
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: `What's the difference between a burndown and a burnup chart?`,
      answer: 'Burndown charts show how much work is left to be done, while burnup charts show the work that has been completed',
      distractors: [
        'Burndown charts show the total amount of work completed, while burnup charts show the work left to be done versus',
        'Burndown charts show the total amount of work completed, while burnup charts show the work that has been done',
        'Burndown charts show the work completed, while burnup charts show todo list items.'
      ],
      explanation: 'Burndown and burnup charts are very similar and are used to measure progress of a project. Burndown charts usually have 2 lines - an "Ideal Work Remaining Line" and an "Actual Work Remaining Line". Burnup charts have 3 lines that are typically used - an ideal line, a completed work line, and a total work line.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What does it mean in a Burnup Chart when a portion of the completed work line is below the ideal work line?',
      answer: 'It typically means that the team is behind schedule.',
      distractors: [
        'It typically means the team is ahead of schedule ',
        'It typically means the team is on track with the planned schedule.',
        'It represents the total scope of work needed.'
      ],
      explanation: 'Burnup charts show the work that has been completed versus the total amount of work and time remaining. In this chart, the total work line should be somewhat steady across the top of the chart, and is a good representation of scope change. The completed work line should move steadily up towards the total work line for the amount of time in the project— its ideal trajectory is shown by the ideal line.',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'What are nonfunctional requirements?',
      answer: 'A requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors.',
      distractors: [
        'A requirement that specifies behaviors of how a system should work. ',
        'They are useless requirements that do not add value to the system.',
        'A requirement that focuses on the personnel needed to complete a task.'
      ],
      explanation: 'A non-functional requirement (NFR) is a requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors (a functional requirement). Non-functional requirements are often called "quality attributes", "constraints" or "non-behavioral requirements".',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'Which of the following are not nonfunctional requirements?',
      answer: 'The system must allow users to log into their account by entering their email and password.',
      distractors: [
        'The printer should print 5 seconds after the button is pressed.',
        'The code should be written in Java.',
        'The UI should be easily navigable.'
      ],
      explanation: 'A non-functional requirement (NFR) is a requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors (a functional requirement). Non-functional requirements are often called "quality attributes", "constraints" or "non-behavioral requirements".',
      link: 'https://www.freecodecamp.org/news/complete-guide-to-agile-methodology/'
    },
    {
      question: 'Which of the following is NOT a type of software development methodology?',
      answer: 'Rust',
      distractors: ['Scrum', 'Agile', 'Waterfall'],
      explanation: 'A software development methodology is a framework used to structure, plan, and manage the software development process.',
      link: 'https://www.freecodecamp.org/news/get-a-basic-understanding-of-the-life-cycles-of-software-development/'
    }
  ]
};

export default agileQuiz;

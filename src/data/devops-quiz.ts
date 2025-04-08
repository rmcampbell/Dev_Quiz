const devopsQuiz = [
  {
    Question: "What are Docker images built out of?",
    Answer: "Filesystem layers,",
    Distractors: ["Operating Systems",
     "Virtual Machines",
     "Containers"],
    Explanation:
      "When you build a Docker image, each instruction in the Dockerfile contributes to a new layer. For example, if you have an instruction to install a software package, it creates a layer with the changes related to that installation.",
    Link: "https://www.freecodecamp.org/news/docker-devops-course/"
  },
  {
    Question:
      "Within the realm of DevOps, what does 'Immutable Infrastructure' signify?",
    Answer:
      "An approach where infrastructure components are never modified but replaced entirely when changes are needed",
    Distractors: ["A strategy for manually configuring servers",
     "A method for continuously updating infrastructure",
     "A way to centralize infrastructure management"],
    Explanation:
      "Immutable Infrastructure is a methodology that involves the complete replacement of servers and infrastructure components whenever modifications are required. This approach is in harmony with DevOps principles, underscoring the significance of automation in ensuring dependable and uniform operations",
    Link: "https://www.freecodecamp.org/news/learn-instructure-as-a-code-by-building-custom-machine-image-in-aws/"
  },
  {
    Question: "What is 'Microservices Architecture' in DevOps?",
    Answer:
      "An architectural style where applications are composed of small, independent services",
    Distractors: [
      "A way to centralize all software components into a single monolithic application",
     "A method for managing server hardware",
     "A strategy for code versioning"],
    Explanation:
      "Microservices is an architectural style where applications are composed of small, independent services that can be deployed and scaled individually as they promote flexibility and scalability in software development and deployment.",
    Link: "https://www.freecodecamp.org/news/microservices-and-software-system-design-course/"
  },
  {
    Question: "What is the role of a 'Repository' in Continuous Integration?",
    Answer: "To store and version control source code",
    Distractors: ["To deploy applications to production servers",
     "To monitor system performance",
     "To automate infrastructure provisioning"],
    Explanation:
      "A repository, often using version control systems like Git, is used to store and track changes to source code in CI/CD pipelines.",
    Link: "https://www.freecodecamp.org/news/git-and-github-crash-course/"
  },
  {
    Question: "What is the purpose of a Dockerfile in containerization?",
    Answer: "To define the instructions for building a Docker container image",
    Distractors: ["To create a virtual machine",
     "To write unit tests for code",
     "To configure network settings"],
    Explanation:
      "A Dockerfile is used to specify the instructions for building a Docker container image, including dependencies and configurations.",
    Link: "https://www.freecodecamp.org/news/the-docker-handbook/"
  },
  {
    Question: "What is DevOps?",
    Answer:
      "a combination of software development and IT operations with the goal of shortening the systems development life cycle ",
    Distractors: ["a popular JavaScript library",
     "a popular SQL database",
     "a popular Python library"],
    Explanation:
      "DevOps combines software development and IT operations with the goal of shortening the systems development life cycle and providing continuous delivery of software. ",
    Link: "https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/"
  },
  {
    Question: "What is Continuous Integration?",
    Answer:
      "the act of pushing small changes to a repository and running tests on those changes",
    Distractors: [ "the act of cloning an entire repository to another computer",
     "the act of resolving a merge conflict in a repository",
     "the act of creating a new branch on a repository"],
    Explanation:
      "Continuous Integration(CI) is the act of continuously pushing small changes to a central repository numerous times per day. And those changes are verified by automated computer software that runs the tests that the programmers have defined.",
    Link: "https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/"
  },
  {
    Question: "What is code coverage in DevOps?",
    Answer:
      "a metric used to determine how much of the codebase has been tested",
    Distractors: [
      "a metric used to determine how many commits were pushed to the project in a day",

      "a metric used to determine how many developers worked on the project that day",

      "a metric used to determine how many project files were added that day"],
    Explanation:
      "Code coverage is a metric used to determine how much of the codebase has been tested.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=2085"
  },
  {
    Question: "What is an ephemeral environment in DevOps?",
    Answer:
      "temporary environments that contain a self contained version of the entire application",
    Distractors: [ "environments that will write all of your unit tests for you",
     "environments that will perform code reviews for you",
     "environments that will fix your mistakes as you code"],
    Explanation:
      "Ephemeral environments are temporary environments that contain a self contained version of the entire application. Generally, for every feature branch, they're often spun up by a slack bot, or automatically on every commit using DevOps platforms like later ci itself, or Heroku.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=3456"
  },
  {
    Question: "What is a virtual machine?",
    Answer: "a virtual instance of a computer that can run applications",
    Distractors: [ "a type of software that installs project dependencies",
     "a type of software used to remove malware from computers",

      "a virtual instance of a computer only used to build mobile games"],
    Explanation:
      "A Virtual Machine(VM) is a virtual instance of a computer that can run applications.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=4255"
  },
  {
    Question: "What is a container in DevOps?",
    Answer:
      "a package that consists of the entire application and its dependencies",
    Distractors: [ "a special tool used to install dependencies into a project",
     "a tool used to clone a repository from GitHub",
     "a package used to create unit tests for the project"],
    Explanation:
      "A container is a package that consists of the entire application and its dependencies.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=4255"
  },
  {
    Question: "What are rolling deployments in DevOps?",
    Answer:
      "a deployment strategy for replacing old versions of the app with new versions",
    Distractors: [
      "a deployment strategy for copying an entire application and its dependencies",

      "a strategy used to roll back the application to a prior state",

      "a strategy used to run test suites multiple times before deploying an application"],
    Explanation:
      "Rolling deployments are a popular deployment strategy used to replace old versions of the app with new versions.",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=5002"
  },
  {
    Question: "What is Continuous Deployment in DevOps?",
    Answer:
      "a strategy used to push code into production that passed automated testing",
    Distractors: [
      "a strategy used to roll back the application to a prior state",

      "a strategy used to determine how much of the codebase has been tested",

      "a deployment strategy for replacing old versions of the app with new versions"],
    Explanation:
      "Continuous Deployment is a strategy used to push code into production that passed automated testing",
    Link: "https://youtu.be/j5Zsa_eOXeY?t=5315"
  },
  {
    Question: "Which of the following is NOT a common practice in DevOps?",
    Answer: "Continuous rebasing",
    Distractors: [ "Continuous development",
     "Continuous deployment",
     "Continuous integration"],
    Explanation:
      "Some common practices in DevOps include Continuous development, Continuous deployment and Continuous integration.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  },
  {
    Question: "Which of the following is NOT a common method used in DevOps?",
    Answer: "Divide and Conquer strategy",
    Distractors: [ "Agile",
     "Scrum",
     "Kanban"],
    Explanation:
      "Some common methods in DevOps include Agile, Scrum and Kanban.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  },
  {
    Question:
      "Which of the following testing tools is commonly used in DevOps?",
    Answer: "Selenium",
    Distractors: [ "PyTorch",
     "Apache Commons",
     "jQuery"],
    Explanation:
      "JUnit, Jenkins, and Selenium are some commonly used testing tools used in DevOps.",
    Link: "https://youtu.be/j5Zsa_eOXeY"
  },
  {
    Question:
      "What is the primary goal of 'Infrastructure as Code' (IaC) in DevOps?",
    Answer: "To automate and manage infrastructure provisioning through code",
    Distractors: [ "To manually configure servers for specific applications",
     "To optimize database performance",
     "To streamline the software development process"],
    Explanation:
      "Infrastructure as Code (IaC) is a practice in DevOps that aims to automate and manage infrastructure provisioning through code, allowing for consistent and repeatable infrastructure deployments.",
    Link: "https://www.freecodecamp.org/news/what-is-infrastructure-as-code/"
  },
  {
    Question:
      "What is the role of version control systems like Git in DevOps processes?",
    Answer:
      "Version control systems like Git help track changes to source code, manage collaborative development, and enable automation of code deployment and rollback processes.",
    Distractors: [
      "Version control systems like Git are used for container orchestration.",

      "Version control systems like Git are used for managing cloud infrastructure.",

      "Version control systems like Git are used for monitoring application performance."],
    Explanation:
      "Git and similar version control systems provide a centralized repository for storing and managing code. They allow developers to work on code collaboratively, track changes, and maintain a history of code versions. This is crucial for DevOps processes as it facilitates continuous integration, automated testing, and rollback mechanisms in case of issues.",
    Link: "https://www.freecodecamp.org/news/how-to-use-git-best-practices-for-beginners/#what-is-version-control"
  }
];
export default devopsQuiz;

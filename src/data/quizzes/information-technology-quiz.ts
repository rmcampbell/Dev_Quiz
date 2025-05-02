const informationTechnologyQuiz = {
  category: 'IT',
  questions: [
    {
      question: 'What is the name of the service that runs recursive DNS Servers?',
      answer: 'Internet Service Providers',
      distractors: ['Network Service Providers', 'SAML Service Provider', 'Application Service Provider'],
      explanation: 'Recursive DNS servers are typically run by Internet Service Providers. These are the companies you pay for your internet access each month.',
      link: 'https://www.freecodecamp.org/news/what-is-a-dns-server/'
    },
    {
      question: 'What is the use of a DNS Server?',
      answer: 'Converts a domain name to an IP Address',
      distractors: [
        'Converts an IP Address to a domain name',
        'Provides access tokens for login in the backend',
        'Provides refresh tokens for login in the backend'
      ],
      explanation: 'DNS servers are responsible for translating domain names into IP addresses and use them to locate and connect to web servers.',
      link: 'https://www.freecodecamp.org/news/what-is-a-dns-server/'
    },
    {
      question: 'For a Class A IP address, which octet represents the network ID?',
      answer: 'First octet',
      distractors: ['Second octet', 'Third octet', 'Fourth octet'],
      explanation: 'For Class A IP addresses,  the first octet (8 bits / 1 byte) represents the network ID, and the remaining three octets (24 bits / 3 bytes) represent the host ID.',
      link: 'https://www.freecodecamp.org/news/subnet-cheat-sheet-24-subnet-mask-30-26-27-29-and-other-ip-address-cidr-network-references/'
    },
    {
      question: 'How many layers are there in the OSI and TCP/IP models respectively?',
      answer: '7 and 4',
      distractors: ['12 and 7', '7 and 5', '11 and 7'],
      explanation: 'The OSI model has 7 layers while TCP/IP Model has only 4 layers',
      link: 'https://www.freecodecamp.org/news/osi-model-computer-networking-for-beginners/'
    },
    {
      question: 'What is the OSI Model?',
      answer: 'OSI is a reference system that lays out how computers communicate with each other over a network.',
      distractors: [
        'OSI is a new program paradigm',
        'OSI is a reference to new practices to coding',
        'OSI is a new set of rules to link of a net protocol'
      ],
      explanation: 'OSI is a reference system that lays out how computers communicate with each other over a network.',
      link: 'https://www.freecodecamp.org/news/osi-model-computer-networking-for-beginners/'
    },
    {
      question: 'What is the name for modern computer architecture?',
      answer: 'Von Neumann Architecture',
      distractors: ['Enigma-Turing Architecture', 'Micro-ATX Architecture', 'CPU-GPU Architecture'],
      explanation: 'John Von Neumann is the creator of the modern computer architecture',
      link: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture'
    },
    {
      question: 'Which of the following validates the integrity of data?',
      answer: 'Hashing',
      distractors: ['Compression', 'Stenography', 'Symmetric Encryption'],
      explanation: 'Hashing is a one-way function that takes an input and produces a fixed-length output. It is used to validate the integrity of data.',
      link: 'https://www.freecodecamp.org/news/what-is-hashing/'
    },
    {
      question: 'What is PRAM?',
      answer: 'A battery powered RAM for older Mac computers that holds important information for your system',
      distractors: [
        'A newer type of RAM for Mac computers',
        'A newer type of RAM for Windows Computers',
        'A battery powered RAM for older PC computers that holds important information for your system'
      ],
      explanation: 'Parameter Random Access Memory is a battery powered RAM for older Mac computers that holds important information for your system.',
      link: 'https://www.freecodecamp.org/news/pram-definition/'
    },
    {
      question: 'What does LCD stand for?',
      answer: 'Liquid Crystal Display',
      distractors: ['Label Crystal Display', 'Liquid Cache Display', 'Liquid Crystal Dictionary'],
      explanation: 'Liquid Crystal Display is a type of display that uses liquid crystals to display images.',
      link: 'https://www.freecodecamp.org/news/lcd-definition/'
    },
    {
      question: 'Which hardware component has all of its data wiped when the power turns off? ',
      answer: 'RAM (Random Access Memory)',
      distractors: ['HDD (Hard Disk Drive)', 'SSD (Solid State Drive)', 'CPU (Central Processing Unit)'],
      explanation: 'RAM (short for Random Access Memory), or the main memory, is a volatile, short-term type of memory that only stores information temporarily while a computer is powered by electricity. It is used when you open and are using an application or file. When the power turns off, any files you created or updates you made and didn\'t save, will be lost and will be hard to retrieve.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'Which part of the CPU is responsible for carrying out mathematical operations?',
      answer: 'The Arithmetic Logic Unit',
      distractors: ['The Control Unit', 'Registers', 'Cache Memory'],
      explanation: 'The ALU (short for Arithmetic Logic Unit), is a digital circuit that performs arithmetic operations such as addition, subtraction, multiplication, and division.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'What is a Solid State Drive?',
      answer: 'A type of storage device that uses flash memory to store and access data',
      distractors: [
        'A device to record text to a disk',
        'A device to translate code from one language to another ',
        'A screen editor used for Unix'
      ],
      explanation: 'A type of storage device that uses flash memory to store and access data',
      link: 'https://www.freecodecamp.org/news/ssd-solid-state-drive-definition/'
    },
    {
      question: 'In Windows, what is a maximum length for a filename?',
      answer: '32,767 characters',
      distractors: ['225 characters', '256 characters', '300,000 characters'],
      explanation: 'The maximum length for a file name is 32,767 characters.',
      link: 'https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax'
    },
    {
      question: 'What does DNS stand for?',
      answer: 'Domain Name System',
      distractors: ['Dynamic Name System', 'Domain Naming System', 'Domain Network System'],
      explanation: 'DNS is an abbreviation for Domain Name System',
      link: 'https://www.freecodecamp.org/news/what-is-dns/'
    },
    {
      question: 'What does IP stand for?',
      answer: 'Internet Protocol',
      distractors: ['Interconnection Protocol', 'International Passenger', 'Internal Product'],
      explanation: 'The IP address is a special number that makes sure that the information sent through the internet reaches the right destination. ',
      link: 'https://www.freecodecamp.org/news/what-is-my-ip-address-for-my-router-how-to-find-your-wifi-address/'
    },
    {
      question: 'Which OSI layer is responsible for email and file transfers?',
      answer: 'The application layer',
      distractors: ['The network layer', 'The session layer ', 'The presentation layer'],
      explanation: 'Layer 7 is the application layer. Electronic mail programs, for example, are specifically created to run over a network and utilize networking functionality, such as email protocols, which fall under Layer 7. ',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'How many versions of the Internet Protocol are there?',
      answer: '2',
      distractors: ['4', '6', '1'],
      explanation: 'IPv4 is the first, and most widely used, version of the Internet Protocol. IPv6 is the latest version of the Internet Protocol. It\'s the successor of IPv4 and there will be a slow shift towards it in the future.',
      link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
    },
    {
      question: 'What is a Ping?',
      answer: 'The process of sending signals to other devices and waiting for a response',
      distractors: [
        'A protocol that allows users to send files from one computer to another',
        'A way to share a single processor for multiple independent jobs',
        'A portion of memory used to store messages'
      ],
      explanation: 'A ping is the process of sending signals to other devices and waiting for a response',
      link: 'https://www.freecodecamp.org/news/ping-definition/'
    },
    {
      question: 'What does UDP stand for?',
      answer: 'User Datagram Protocol',
      distractors: ['Unified Datagram Protocol', 'User Database Protocol', 'User Datagram Patch'],
      explanation: 'User Datagram Protocol of "UDP" is a type of connectionless protocol online.',
      link: 'https://www.freecodecamp.org/news/tcp-vs-udp/'
    },
    {
      question: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for logical addressing and routing?',
      answer: 'The network layer',
      distractors: ['The presentation layer', 'The session layer', 'The transport layer'],
      explanation: 'The network layer is layer 3 of the Open Systems Interconnection (OSI) model. This is where we send information between and across networks through the use of routers. ',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for data formatting and encryption?',
      answer: 'The presentation layer',
      distractors: ['The application layer', 'Layer 1', 'Layer 5'],
      explanation: 'The presentation layer is layer 6 in the Open Systems Interconnection (OSI) model. This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'How many bits are there in an IPv4 address?',
      answer: '32',
      distractors: ['64', '16', '8'],
      explanation: 'IPv4 is a 32-bit address and it\'s made up of 4 blocks. Each block is separated by a dot, and looks something like this: XXX.XXX.XXX.XXX',
      link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
    },
    {
      question: 'What does TCP stand for?',
      answer: 'Transmission Control Protocol',
      distractors: ['Terabyte Control Protocol', 'Transmission Carrier Protocol', 'Transmission Control Patch'],
      explanation: 'Transmission Control Protocol or "TCP" is a type of networking protocol online',
      link: 'https://www.freecodecamp.org/news/tcp-vs-udp/'
    },
    {
      question: 'What does DNS do?',
      answer: 'Maps domain names to IP addresses',
      distractors: [
        'Is responsible for encrypting HTTP connections',
        'Provides the web client with web files during client-server communication',
        'Breaks down web information into smaller chunks, or packets'
      ],
      explanation: 'The Domain Name System (DNS) maps human-readable domain names to IP addresses (unique identifiers). For example, DNS translates and maps the domain freeCodeCamp.org to the IP address 104.26.2.33.',
      link: 'https://www.freecodecamp.org/news/what-is-dns/'
    },
    {
      question: 'What is a Subnet?',
      answer: 'A smaller network that is nested inside a large network.',
      distractors: [
        'A protocol that sends and receives data from a remote device',
        'A protocol that assures accurate time by referring to clocks on the internet',
        'A feature that allows users to access remote services'
      ],
      explanation: 'A Subnet is a smaller network that is nested inside a large network.',
      link: 'https://www.freecodecamp.org/news/subnet-definition/'
    },
    {
      question: 'What does HTTPS stand for?',
      answer: 'HyperText Transfer Protocol Secure',
      distractors: [
        'HyperText Transfer Protocol Standard',
        'HyperTransfer Text Protocol Secure',
        'HyperText Transfer Protocol Set'
      ],
      explanation: 'HTTPS is a secure way of transferring data between a web server and a web browser',
      link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
    },
    {
      question: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for error detection?',
      answer: 'The data link layer',
      distractors: ['The transport layer', 'The network layer', 'The physical layer'],
      explanation: 'The data link layer is layer 2 in the Open Systems Interconnection (OSI) model. Layer 2 defines how data is formatted for transmission, how much data can flow between nodes, for how long, and what to do when errors are detected in this flow.',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'What is a username?',
      answer: 'A unique name for a user on a website',
      distractors: ['A secret set of characters', 'A data type', 'A special type of object'],
      explanation: 'A username is a unique name for a user on a website.',
      link: 'https://www.freecodecamp.org/news/username-definition/'
    },
    {
      question: 'Which protocol secures communication between computer networks?',
      answer: 'HTTPS ',
      distractors: ['HTTP', 'FTP', 'SMTP'],
      explanation: 'HTTPS is a more secure and confidential version of HTTP. It\'s the safest way to transfer data between a browser and a server.',
      link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
    },
    {
      question: 'What does Mbps stand for?',
      answer: 'Megabits per second',
      distractors: ['Megabytes per second', 'Megabits per sound', 'Megabytes per system'],
      explanation: 'Mbps stands for Megabits per second, not to be confused with MBps (with a capital B) that stands for Megabytes per second.',
      link: 'https://en.wikipedia.org/wiki/Data-rate_units#Megabit_per_second'
    },
    {
      question: 'Which port is used for HTTP?',
      answer: '80',
      distractors: ['443', '40', '60'],
      explanation: 'By default, HTTP uses Port-80 (HTTP stands for HyperText Transfer Protocol)',
      link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
    },
    {
      question: 'What is P2P?',
      answer: 'A network where two devices communicate directly.',
      distractors: [
        'A way to request data from a server.',
        'A special type of file system.',
        'A special programming library.'
      ],
      explanation: 'Peer to Peer or "P2P" is a network where two devices communicate directly.',
      link: 'https://www.freecodecamp.org/news/p2p-definition/'
    },
    {
      question: 'What does URL stand for?',
      answer: 'Universal Resource Locator',
      distractors: ['Unified Resource Locator', 'Universal Redirect Locator', 'Universal Resource Label'],
      explanation: 'URL stands for Universal Resource Locator and it serves as the location of an online resource',
      link: 'https://www.freecodecamp.org/news/url-definition/'
    },
    {
      question: 'How many bits are there in an IPv6 address?',
      answer: '128',
      distractors: ['32', '126', '64'],
      explanation: 'IPv6 is a 128-bit address, meaning that there are 2^128 addresses available.',
      link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
    },
    {
      question: 'What\'s the difference between HTTP and HTTPS?',
      answer: 'HTTPS is the secure version of HTTP. It\'s HTTP with encryption.',
      distractors: [
        'HTTP sends HyperText data between a web server and a web browser and HTTPS doesn\'t',
        'There is no difference',
        'SSL certificates are required for HTTP, but not for HTTPS'
      ],
      explanation: 'HTTPS is the secure version of HTTP, the basic network protocol for sending hypertext over the web. In HTTPS there are additional steps for security, such as TSL/SSL certificates and the TSL/SSL handshake.',
      link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
    },
    {
      question: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for establishing, maintaining, and terminating a communication session?',
      answer: 'Layer 5',
      distractors: ['Layer 1', 'Layer 4', 'Layer 3'],
      explanation: 'Layer 5 is the session layer of the Open Systems Interconnection (OSI) model. This layer establishes, maintains, and terminates sessions.',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'Which protocol is used for transferring files between a client and server over a network?',
      answer: 'FTP',
      distractors: ['SMTP', 'PTP', 'POP'],
      explanation: 'File Transfer Protocol (FTP) is a standard protocol used for transferring files between a client and a server over a network.',
      link: 'https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/'
    },
    {
      question: 'Which layer of the Open Systems Interconnection (OSI) model is responsible for providing reliable end to end transmission of a message?',
      answer: 'The transport layer',
      distractors: ['The physical layer', 'The data link layer', 'The session layer'],
      explanation: 'The transport layer is layer 4 of the Open Systems Interconnection (OSI) model and it provides end-to-end transmission of a message by segmenting a message into multiple data packets. The layer supports connection-oriented and connectionless communication.',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'What is a Subnet Mask?',
      answer: 'Creates a range for IP addresses used in a subnet',
      distractors: [
        'A type of software life cycle described by W. W. Royce',
        'A device that performs restricted operations on time-sharing systems',
        'A device that reboots the system'
      ],
      explanation: 'A Subnet Mask is used to creates a range for IP addresses used in a subnet. ',
      link: 'https://www.freecodecamp.org/news/subnet-mask-definition/'
    },
    {
      question: 'Which one is NOT a main component of a CPU?',
      answer: 'AXLE',
      distractors: ['Control Unit', 'Arithmetic Logic Unit', 'Registers'],
      explanation: 'The Control Unit, Arithmetic Logic Unit, and Registers are important parts of the CPU. ',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'Where is the CPU located on a computer?',
      answer: 'The motherboard',
      distractors: ['Graphics Processing Unit', 'Random Access Memory', 'Solid State Drive'],
      explanation: 'The CPU is located on the motherboard of a computer.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'What are registers inside a CPU responsible for?',
      answer: 'They temporarily hold data the CPU needs fast access to',
      distractors: [
        'They help improve the speed of your computer',
        'They check and confirm every process that is happening on your computer',
        'They are responsible for carrying out all mathematical and logical operations'
      ],
      explanation: 'Registers are an extremely fast memory location. The data and instructions that are being processed during the fetch-execute cycle a CPU performs are stored there, for quick access by the processor.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'What is a Hard Disk Drive?',
      answer: 'A type of storage device that holds data including the operating system, applications, and files',
      distractors: [
        'A device to record sound to a disk',
        `A device for the computer's short term memory`,
        'A port used to connect to a computer to other devices'
      ],
      explanation: 'A type of storage device that holds data including the operating system, applications, and files',
      link: 'https://www.freecodecamp.org/news/hdd-hard-disk-drive-definition/'
    },
    {
      question: 'Which of the following is NOT considered a piece of computer hardware?',
      answer: 'The Operating System  ',
      distractors: ['The CPU (Central Processing Unit)', 'The keyboard', 'The mouse'],
      explanation: 'Hardware are the physical components you can touch, and they are located on both the outside and the inside of a computer.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'Which of the following is an example of volatile memory?',
      answer: 'RAM (Random Access Memory)',
      distractors: ['SSD (Solid State Drive)', 'MRAM ', 'ROM'],
      explanation: 'While RAM is very fast, it is a type of volatile memory. This means that it only stores information while the computer is on. Unlike an HDD or SSD, once you shut down your computer, everything stored in RAM is lost.',
      link: 'https://www.freecodecamp.org/news/ram-definition/'
    },
    {
      question: 'An application software for accessing the World Wide Web is known as...',
      answer: 'Browser',
      distractors: ['IDE', 'API', 'Bug'],
      explanation: 'An application software for accessing the World Wide Web is known as the browser.',
      link: 'https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/'
    },
    {
      question: 'What does WWW stand for?',
      answer: 'World Wide Web',
      distractors: ['World Web Wide', 'Wide World Web', 'World World Web'],
      explanation: 'WWW stands for World Wide Web.',
      link: 'https://www.britannica.com/topic/World-Wide-Web'
    },
    {
      question: 'Which one is NOT an internal piece of hardware in a computer?',
      answer: 'GAMMA',
      distractors: ['motherboard', 'Central Processing Unit', 'Graphics Processing Unit'],
      explanation: `Some important pieces of a computer's internal hardware include a motherboard, CPU, GPU, RAM and HDD.`,
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'What CPU component is responsible for comparing data?',
      answer: 'The Arithmetic Logic Unit',
      distractors: ['The Control Unit', 'Registers', 'RAM'],
      explanation: 'The ALU (short for Arithmetic Logic Unit), is the part where all mathematical calculations take place, such as addition, subtraction, multiplication, and division. The ALU is also responsible for all of the logical operations for decision making, such as comparing data.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?',
      answer: 'The physical layer',
      distractors: ['The transport Layer', 'The network layer', 'The application layer'],
      explanation: `Layer 1 is the physical layer. There's a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.`,
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'What does SPF stand for?',
      answer: 'Sender Policy Framework',
      distractors: ['Social Platform Framework', 'System Prescribed Framework', 'Sender Private Framework'],
      explanation: 'SPF allows the owner of a domain (like google.com) to set a TXT record in its DNS that states which servers are allowed to send mail from that domain.',
      link: 'https://www.freecodecamp.org/news/how-does-email-work/'
    },
    {
      question: 'What is the correct command to flush your DNS in Windows?',
      answer: 'ipconfig /flushdns',
      distractors: ['ifconfig', 'flushdns', 'ipconfig /flushdns'],
      explanation: `To flush your DNS, 'ipconfig /flushdns' is the correct command on Windows. This means that your cache has been completely cleared, and fresh versions of any website you visit will be loaded.`,
      link: 'https://www.freecodecamp.org/news/flushdns-how-to-flush-dns-with-the-windows-ipconfig-flushdns-command/'
    },
    {
      question: 'What is the primary purpose of the Domain Name System (DNS) in networking?',
      answer: 'To translate human-readable domain names to IP addresses',
      distractors: [
        'To encrypt data transmitted over the network',
        'To manage and allocate network bandwidth',
        'To monitor network traffic for security threats'
      ],
      explanation: 'The Domain Name System (DNS) is responsible for converting domain names, which are easy for humans to remember, into IP addresses that computers use to identify each other on the network.',
      link: 'https://www.freecodecamp.org/news/what-is-dns'
    },
    {
      question: 'What is the purpose of a firewall in computer networks?',
      answer: 'To monitor and control incoming and outgoing network traffic based on predetermined security rules',
      distractors: [
        'To compress data before transmission',
        'To increase the speed of data transfer',
        'To balance the load between multiple servers'
      ],
      explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s previously established security policies.',
      link: 'https://youtu.be/qiQR5rTSshw?si=zqd4y7wIGgscgC7b'
    },
    {
      question: 'What is the function of an API (Application Programming Interface)?',
      answer: 'To allow different software applications to communicate with each other',
      distractors: ['To manage database transactions', 'To encrypt and decrypt data', 'To monitor network security'],
      explanation: 'An API defines a set of rules and protocols for building and interacting with software applications, enabling them to communicate.',
      link: 'https://www.freecodecamp.org/news/apis-with-nodejs-and-express-course-in-spanish-for-beginners/'
    },
    {
      question: 'What is the main advantage of using a Content Delivery Network (CDN)?',
      answer: 'To improve website load times by distributing content closer to users',
      distractors: ['To secure websites from hacking', 'To increase storage capacity', 'To create backups of data'],
      explanation: 'A CDN distributes content across multiple servers worldwide, which helps reduce latency and improve load times for users.',
      link: 'https://www.freecodecamp.org/news/cdns-speed-up-performance-by-reducing-latency/'
    },
    {
      question: `What does the term 'virtualization' refer to in IT?`,
      answer: 'Creating virtual versions of physical hardware resources',
      distractors: [
        'Developing virtual reality applications',
        'Storing data in the cloud',
        'Encrypting sensitive information'
      ],
      explanation: 'Virtualization involves creating virtual versions of physical hardware such as servers, storage devices, and networks to improve efficiency and scalability.',
      link: 'https://www.freecodecamp.org/news/linux-server-virtualization-the-basics/'
    },
    {
      question: 'What does MS-DOS stand for?',
      answer: 'Microsoft Disk Operating System',
      distractors: [
        'Microsoft Desktop Operating System',
        'Monitor Standard Disk Operating System',
        'Microsoft Drive Operating System'
      ],
      explanation: 'MS-DOS is an operating system for x86-based personal computers mostly developed by Microsoft.',
      link: 'https://en.wikipedia.org/wiki/MS-DOS'
    }
  ]
};

export default informationTechnologyQuiz;

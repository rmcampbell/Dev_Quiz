const informationTechnologyQuiz = [
  {
    Question:
      'What is the name of the service that runs recursive DNS Servers?',
    Answer: 'Internet Service Providers',
    Distractors: [ 'Network Service Providers',
      'SAML Service Provider',
      'Application Service Provider'],
    Explanation:
      'Recursive DNS servers are typically run by Internet Service Providers. These are the companies you pay for your internet access each month.',
    Link: 'https://www.freecodecamp.org/news/what-is-a-dns-server/'
  },
  {
    Question: 'What is the use of a DNS Server?',
    Answer: 'Converts a domain name to an IP Address',
    Distractors: [ 'Converts an IP Address to a domain name',
      'Provides access tokens for login in the backend',
      'Provides refresh tokens for login in the backend'],
    Explanation:
      'DNS servers are responsible for translating domain names into IP addresses and use them to locate and connect to web servers.',
    Link: 'https://www.freecodecamp.org/news/what-is-a-dns-server/'
  },
  {
    Question:
      'For a Class A IP address, which octet represents the network ID?',
    Answer: 'First octet',
    Distractors: [ 'Second octet',
      'Third octet',
      'Fourth octet'],
    Explanation:
      'For Class A IP addresses,  the first octet (8 bits / 1 byte) represents the network ID, and the remaining three octets (24 bits / 3 bytes) represent the host ID.',
    Link: 'https://www.freecodecamp.org/news/subnet-cheat-sheet-24-subnet-mask-30-26-27-29-and-other-ip-address-cidr-network-references/'
  },
  {
    Question:
      'How many layers are there in the OSI and TCP/IP models respectively?',
    Answer: '7 and 4',
    Distractors: [ '12 and 7',
      '7 and 5',
      '11 and 7'],
    Explanation:
      'The OSI model has 7 layers while TCP/IP Model has only 4 layers',
    Link: 'https://www.freecodecamp.org/news/osi-model-computer-networking-for-beginners/'
  },
  {
    Question: 'What is the OSI Model?',
    Answer:
      'OSI is a reference system that lays out how computers communicate with each other over a network.',
    Distractors: [ 'OSI is a new program paradigm',
      'OSI is a reference to new practices to coding',
      'OSI is a new set of rules to link of a net protocol'],
    Explanation:
      'OSI is a reference system that lays out how computers communicate with each other over a network.',
    Link: 'https://www.freecodecamp.org/news/osi-model-computer-networking-for-beginners/'
  },
  {
    Question: 'What is the name for modern computer architecture?',
    Answer: 'Von Neumann Architecture',
    Distractors: [ 'Enigma-Turing Architecture',
      'Micro-ATX Architecture',
      'CPU-GPU Architecture'],
    Explanation:
      'John Von Neumann is the creator of the modern computer architecture',
    Link: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture'
  },
  {
    Question: 'Which of the following validates the integrity of data?',
    Answer: 'Hashing',
    Distractors: [ 'Compression',
      'Stenography',
      'Symmetric Encryption'],
    Explanation:
      'Hashing is a one-way function that takes an input and produces a fixed-length output. It is used to validate the integrity of data.',
    Link: 'https://www.freecodecamp.org/news/what-is-hashing/'
  },
  {
    Question: 'What is PRAM?',
    Answer:
      'A battery powered RAM for older Mac computers that holds important information for your system',
    Distractors: [ 'A newer type of RAM for Mac computers',
      'A newer type of RAM for Windows Computers',

      'A battery powered RAM for older PC computers that holds important information for your system'],
    Explanation:
      'Parameter Random Access Memory is a battery powered RAM for older Mac computers that holds important information for your system.',
    Link: 'https://www.freecodecamp.org/news/pram-definition/'
  },
  {
    Question: 'What does LCD stand for?',
    Answer: 'Liquid Crystal Display',
    Distractors: [ 'Label Crystal Display',
      'Liquid Cache Display',
      'Liquid Crystal Dictionary'],
    Explanation:
      'Liquid Crystal Display is a type of display that uses liquid crystals to display images.',
    Link: 'https://www.freecodecamp.org/news/lcd-definition/'
  },
  {
    Question:
      'Which hardware component has all of its data wiped when the power turns off? ',
    Answer: 'RAM (Random Access Memory)',
    Distractors: [ 'HDD (Hard Disk Drive)',
      'SSD (Solid State Drive)',
      'CPU (Central Processing Unit)'],
    Explanation:
      'RAM (short for Random Access Memory), or the main memory, is a volatile, short-term type of memory that only stores information temporarily while a computer is powered by electricity. It is used when you open and are using an application or file. When the power turns off, any files you created or updates you made and didn\'t save, will be lost and will be hard to retrieve.',
    Link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
  },
  {
    Question:
      'Which part of the CPU is responsible for carrying out mathematical operations?',
    Answer: 'The Arithmetic Logic Unit',
    Distractors: [ 'The Control Unit',
      'Registers',
      'Cache Memory'],
    Explanation:
      'The ALU (short for Arithmetic Logic Unit), is a digital circuit that performs arithmetic operations such as addition, subtraction, multiplication, and division.',
    Link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
  },
  {
    Question: 'What is a Solid State Drive?',
    Answer:
      'A type of storage device that uses flash memory to store and access data',
    Distractors: [ 'A device to record text to a disk',
      'A device to translate code from one language to another ',
      'A screen editor used for Unix'],
    Explanation:
      'A type of storage device that uses flash memory to store and access data',
    Link: 'https://www.freecodecamp.org/news/ssd-solid-state-drive-definition/'
  },
  {
    Question: 'In Windows, what is a maximum length for a filename?',
    Answer: '32,767 characters',
    Distractors: [ '225 characters',
      '256 characters',
      '300,000 characters'],
    Explanation: 'The maximum length for a file name is 32,767 characters.',
    Link: 'https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax'
  },
  {
    Question: 'What does DNS stand for?',
    Answer: 'Domain Name System',
    Distractors: [ 'Dynamic Name System',
      'Domain Naming System',
      'Domain Network System'],
    Explanation: 'DNS is an abbreviation for Domain Name System',
    Link: 'https://www.freecodecamp.org/news/what-is-dns/'
  },
  {
    Question: 'What does IP stand for?',
    Answer: 'Internet Protocol',
    Distractors: [ 'Interconnection Protocol',
      'International Passenger',
      'Internal Product'],
    Explanation:
      'The IP address is a special number that makes sure that the information sent through the internet reaches the right destination. ',
    Link: 'https://www.freecodecamp.org/news/what-is-my-ip-address-for-my-router-how-to-find-your-wifi-address/'
  },
  {
    Question: 'Which OSI layer is responsible for email and file transfers?',
    Answer: 'The application layer',
    Distractors: [ 'The network layer',
      'The session layer ',
      'The presentation layer'],
    Explanation:
      'Layer 7 is the application layer. Electronic mail programs, for example, are specifically created to run over a network and utilize networking functionality, such as email protocols, which fall under Layer 7. ',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question: 'How many versions of the Internet Protocol are there?',
    Answer: '2',
    Distractors: [ '4',
      '6',
      '1'],
    Explanation:
      'IPv4 is the first, and most widely used, version of the Internet Protocol. IPv6 is the latest version of the Internet Protocol. It\'s the successor of IPv4 and there will be a slow shift towards it in the future.',
    Link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
  },
  {
    Question: 'What is a Ping?',
    Answer:
      'The process of sending signals to other devices and waiting for a response',
    Distractors: [
      'A protocol that allows users to send files from one computer to another',

      'A way to share a single processor for multiple independent jobs',
      'A portion of memory used to store messages'],
    Explanation:
      'A ping is the process of sending signals to other devices and waiting for a response',
    Link: 'https://www.freecodecamp.org/news/ping-definition/'
  },
  {
    Question: 'What does UDP stand for?',
    Answer: 'User Datagram Protocol',
    Distractors: [ 'Unified Datagram Protocol',
      'User Database Protocol',
      'User Datagram Patch'],
    Explanation:
      'User Datagram Protocol of "UDP" is a type of connectionless protocol online.',
    Link: 'https://www.freecodecamp.org/news/tcp-vs-udp/'
  },
  {
    Question:
      'Which layer of the Open Systems Interconnection (OSI) model is responsible for logical addressing and routing?',
    Answer: 'The network layer',
    Distractors: [ 'The presentation layer',
      'The session layer',
      'The transport layer'],
    Explanation:
      'The network layer is layer 3 of the Open Systems Interconnection (OSI) model. This is where we send information between and across networks through the use of routers. ',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question:
      'Which layer of the Open Systems Interconnection (OSI) model is responsible for data formatting and encryption?',
    Answer: 'The presentation layer',
    Distractors: [ 'The application layer',
      'Layer 1',
      'Layer 5'],
    Explanation:
      'The presentation layer is layer 6 in the Open Systems Interconnection (OSI) model. This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question: 'How many bits are there in an IPv4 address?',
    Answer: '32',
    Distractors: [ '64',
      '16',
      '8'],
    Explanation:
      'IPv4 is a 32-bit address and it\'s made up of 4 blocks. Each block is separated by a dot, and looks something like this: XXX.XXX.XXX.XXX',
    Link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
  },
  {
    Question: 'What does TCP stand for?',
    Answer: 'Transmission Control Protocol',
    Distractors: [ 'Terabyte Control Protocol',
      'Transmission Carrier Protocol',
      'Transmission Control Patch'],
    Explanation:
      'Transmission Control Protocol or "TCP" is a type of networking protocol online',
    Link: 'https://www.freecodecamp.org/news/tcp-vs-udp/'
  },
  {
    Question: 'What does DNS do?',
    Answer: 'Maps domain names to IP addresses',
    Distractors: [ 'Is responsible for encrypting HTTP connections',

      'Provides the web client with web files during client-server communication',
      'Breaks down web information into smaller chunks, or packets'],
    Explanation:
      'The Domain Name System (DNS) maps human-readable domain names to IP addresses (unique identifiers). For example, DNS translates and maps the domain freeCodeCamp.org to the IP address 104.26.2.33.',
    Link: 'https://www.freecodecamp.org/news/what-is-dns/'
  },
  {
    Question: 'What is a Subnet?',
    Answer: 'A smaller network that is nested inside a large network.',
    Distractors: [ 'A protocol that sends and receives data from a remote device',

      'A protocol that assures accurate time by referring to clocks on the internet',
      'A feature that allows users to access remote services'],
    Explanation:
      'A Subnet is a smaller network that is nested inside a large network.',
    Link: 'https://www.freecodecamp.org/news/subnet-definition/'
  },
  {
    Question: 'What does HTTPS stand for?',
    Answer: 'HyperText Transfer Protocol Secure',
    Distractors: [ 'HyperText Transfer Protocol Standard',
      'HyperTransfer Text Protocol Secure',
      'HyperText Transfer Protocol Set'],
    Explanation:
      'HTTPS is a secure way of transferring data between a web server and a web browser',
    Link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
  },
  {
    Question:
      'Which layer of the Open Systems Interconnection (OSI) model is responsible for error detection?',
    Answer: 'The data link layer',
    Distractors: [ 'The transport layer',
      'The network layer',
      'The physical layer'],
    Explanation:
      'The data link layer is layer 2 in the Open Systems Interconnection (OSI) model. Layer 2 defines how data is formatted for transmission, how much data can flow between nodes, for how long, and what to do when errors are detected in this flow.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question: 'What is a username?',
    Answer: 'A unique name for a user on a website',
    Distractors: [ 'A secret set of characters',
      'A data type',
      'A special type of object'],
    Explanation: 'A username is a unique name for a user on a website.',
    Link: 'https://www.freecodecamp.org/news/username-definition/'
  },
  {
    Question: 'Which protocol secures communication between computer networks?',
    Answer: 'HTTPS ',
    Distractors: [ 'HTTP',
      'FTP',
      'SMTP'],
    Explanation:
      'HTTPS is a more secure and confidential version of HTTP. It\'s the safest way to transfer data between a browser and a server.',
    Link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
  },
  {
    Question: 'What does Mbps stand for?',
    Answer: 'Megabits per second',
    Distractors: [ 'Megabytes per second',
      'Megabits per sound',
      'Megabytes per system'],
    Explanation:
      'Mbps stands for Megabits per second, not to be confused with MBps (with a capital B) that stands for Megabytes per second.',
    Link: 'https://en.wikipedia.org/wiki/Data-rate_units#Megabit_per_second'
  },
  {
    Question: 'Which port is used for HTTP?',
    Answer: '80',
    Distractors: [ '443',
      '40',
      '60'],
    Explanation:
      'By default, HTTP uses Port-80 (HTTP stands for HyperText Transfer Protocol)',
    Link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
  },
  {
    Question: 'What is P2P?',
    Answer: 'A network where two devices communicate directly.',
    Distractors: [ 'A way to request data from a server.',
      'A special type of file system.',
      'A special programming library.'],
    Explanation:
      'Peer to Peer or "P2P" is a network where two devices communicate directly.',
    Link: 'https://www.freecodecamp.org/news/p2p-definition/'
  },
  {
    Question: 'What does URL stand for?',
    Answer: 'Universal Resource Locator',
    Distractors: [ 'Unified Resource Locator',
      'Universal Redirect Locator',
      'Universal Resource Label'],
    Explanation:
      'URL stands for Universal Resource Locator and it serves as the location of an online resource',
    Link: 'https://www.freecodecamp.org/news/url-definition/'
  },
  {
    Question: 'How many bits are there in an IPv6 address?',
    Answer: '128',
    Distractors: [ '32',
      '126',
      '64'],
    Explanation:
      'IPv6 is a 128-bit address, meaning that there are 2^128 addresses available.',
    Link: 'https://www.freecodecamp.org/news/ipv4-vs-ipv6-what-is-the-difference-between-ip-addressing-schemes/'
  },
  {
    Question: 'What\'s the difference between HTTP and HTTPS?',
    Answer: 'HTTPS is the secure version of HTTP. It\'s HTTP with encryption.',
    Distractors: [
      'HTTP sends HyperText data between a web server and a web browser and HTTPS doesn\'t',
      'There is no difference',
      'SSL certificates are required for HTTP, but not for HTTPS'],
    Explanation:
      'HTTPS is the secure version of HTTP, the basic network protocol for sending hypertext over the web. In HTTPS there are additional steps for security, such as TSL/SSL certificates and the TSL/SSL handshake.',
    Link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
  },
  {
    Question:
      'Which layer of the Open Systems Interconnection (OSI) model is responsible for establishing, maintaining, and terminating a communication session?',
    Answer: 'Layer 5',
    Distractors: [ 'Layer 1',
      'Layer 4',
      'Layer 3'],
    Explanation:
      'Layer 5 is the session layer of the Open Systems Interconnection (OSI) model. This layer establishes, maintains, and terminates sessions.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question:
      'Which protocol is used for transferring files between a client and server over a network?',
    Answer: 'FTP',
    Distractors: [ 'SMTP',
      'PTP',
      'POP'],
    Explanation:
      'File Transfer Protocol (FTP) is a standard protocol used for transferring files between a client and a server over a network.',
    Link: 'https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/'
  },
  {
    Question:
      'Which layer of the Open Systems Interconnection (OSI) model is responsible for providing reliable end to end transmission of a message?',
    Answer: 'The transport layer',
    Distractors: [ 'The physical layer',
      'The data link layer',
      'The session layer'],
    Explanation:
      'The transport layer is layer 4 of the Open Systems Interconnection (OSI) model and it provides end-to-end transmission of a message by segmenting a message into multiple data packets. The layer supports connection-oriented and connectionless communication.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question: 'What is a Subnet Mask?',
    Answer: 'Creates a range for IP addresses used in a subnet',
    Distractors: [ 'A type of software life cycle described by W. W. Royce',

      'A device that performs restricted operations on time-sharing systems',
      'A device that reboots the system'],
    Explanation:
      'A Subnet Mask is used to creates a range for IP addresses used in a subnet. ',
    Link: 'https://www.freecodecamp.org/news/subnet-mask-definition/'
  },
  {
    Question: 'Which one is NOT a main component of a CPU?',
    Answer: 'AXLE',
    Distractors: [ 'Control Unit',
      'Arithmetic Logic Unit',
      'Registers'],
    Explanation:
      'The Control Unit, Arithmetic Logic Unit, and Registers are important parts of the CPU. ',
    Link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
  },
  {
    Question: 'Where is the CPU located on a computer?',
    Answer: 'The motherboard',
    Distractors: [ 'Graphics Processing Unit',
      'Random Access Memory',
      'Solid State Drive'],
    Explanation: 'The CPU is located on the motherboard of a computer.',
    Link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
  },
  {
    Question: 'What are registers inside a CPU responsible for?',
    Answer: 'They temporarily hold data the CPU needs fast access to',
    Distractors: [ 'They help improve the speed of your computer',

      'They check and confirm every process that is happening on your computer',

      'They are responsible for carrying out all mathematical and logical operations'],
    Explanation:
      'Registers are an extremely fast memory location. The data and instructions that are being processed during the fetch-execute cycle a CPU performs are stored there, for quick access by the processor.',
    Link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
  },
  {
    Question: 'What is a Hard Disk Drive?',
    Answer:
      'A type of storage device that holds data including the operating system, applications, and files',
    Distractors: [ 'A device to record sound to a disk',
      'A device for the computer\'s short term memory',
      'A port used to connect to a computer to other devices'],
    Explanation:
      'A type of storage device that holds data including the operating system, applications, and files',
    Link: 'https://www.freecodecamp.org/news/hdd-hard-disk-drive-definition/'
  },
  {
    Question:
      'Which of the following is NOT considered a piece of computer hardware?',
    Answer: 'The Operating System  ',
    Distractors: [ 'The CPU (Central Processing Unit)',
      'The keyboard',
      'The mouse'],
    Explanation:
      'Hardware are the physical components you can touch, and they are located on both the outside and the inside of a computer.',
    Link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
  },
  {
    Question: 'Which of the following is an example of volatile memory?',
    Answer: 'RAM (Random Access Memory)',
    Distractors: [ 'SSD (Solid State Drive)',
      'MRAM ',
      'ROM'],
    Explanation:
      'While RAM is very fast, it is a type of volatile memory. This means that it only stores information while the computer is on. Unlike an HDD or SSD, once you shut down your computer, everything stored in RAM is lost.',
    Link: 'https://www.freecodecamp.org/news/ram-definition/'
  },
  {
    Question:
      'An application software for accessing the World Wide Web is known as...',
    Answer: 'Browser',
    Distractors: [ 'IDE',
      'API',
      'Bug'],
    Explanation:
      'An application software for accessing the World Wide Web is known as the browser.',
    Link: 'https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/'
  },
  {
    Question: 'What does WWW stand for?',
    Answer: 'World Wide Web',
    Distractors: [ 'World Web Wide',
      'Wide World Web',
      'World World Web'],
    Explanation: 'WWW stands for World Wide Web.',
    Link: 'https://www.britannica.com/topic/World-Wide-Web'
  },
  {
    Question: 'Which one is NOT an internal piece of hardware in a computer?',
    Answer: 'GAMMA',
    Distractors: [ 'motherboard',
      'Central Processing Unit',
      'Graphics Processing Unit'],
    Explanation:
      'Some important pieces of a computer\'s internal hardware include a motherboard, CPU, GPU, RAM and HDD.',
    Link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
  },
  {
    Question: 'What CPU component is responsible for comparing data?',
    Answer: 'The Arithmetic Logic Unit',
    Distractors: [ 'The Control Unit',
      'Registers',
      'RAM'],
    Explanation:
      'The ALU (short for Arithmetic Logic Unit), is the part where all mathematical calculations take place, such as addition, subtraction, multiplication, and division. The ALU is also responsible for all of the logical operations for decision making, such as comparing data.',
    Link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
  },
  {
    Question:
      'Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?',
    Answer: 'The physical layer',
    Distractors: [ 'The transport Layer',
      'The network layer',
      'The application layer'],
    Explanation:
      'Layer 1 is the physical layer. There\'s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question: 'What does SPF stand for?',
    Answer: 'Sender Policy Framework',
    Distractors: [ 'Social Platform Framework',
      'System Prescribed Framework',
      'Sender Private Framework'],
    Explanation:
      'SPF allows the owner of a domain (like google.com) to set a TXT record in its DNS that states which servers are allowed to send mail from that domain.',
    Link: 'https://www.freecodecamp.org/news/how-does-email-work/'
  },
  {
    Question: 'What is the correct command to flush your DNS in Windows?',
    Answer: 'ipconfig /flushdns',
    Distractors: [ 'ifconfig',
      'flushdns',
      'ipconfig /flushdns'],
    Explanation:
      'To flush your DNS, \'ipconfig /flushdns\' is the correct command on Windows. This means that your cache has been completely cleared, and fresh versions of any website you visit will be loaded.',
    Link: 'https://www.freecodecamp.org/news/flushdns-how-to-flush-dns-with-the-windows-ipconfig-flushdns-command/'
  },
  {
    Question: 'What is the primary purpose of the Domain Name System (DNS) in networking?',
    Answer: 'To translate human-readable domain names to IP addresses',
    Distractors: [ 'To encrypt data transmitted over the network',
      'To manage and allocate network bandwidth',
      'To monitor network traffic for security threats'],
    Explanation: 'The Domain Name System (DNS) is responsible for converting domain names, which are easy for humans to remember, into IP addresses that computers use to identify each other on the network.',
    Link: 'https://www.freecodecamp.org/news/what-is-dns'
  },
  {
    Question: 'What is the purpose of a firewall in computer networks?',
    Answer: 'To monitor and control incoming and outgoing network traffic based on predetermined security rules',
    Distractors: [ 'To compress data before transmission',
      'To increase the speed of data transfer',
      'To balance the load between multiple servers'],
    Explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s previously established security policies.',
    Link: 'https://youtu.be/qiQR5rTSshw?si=zqd4y7wIGgscgC7b'
  },
  {
    Question: 'What is the function of an API (Application Programming Interface)?',
    Answer: 'To allow different software applications to communicate with each other',
    Distractors: [ 'To manage database transactions',
      'To encrypt and decrypt data',
      'To monitor network security'],
    Explanation: 'An API defines a set of rules and protocols for building and interacting with software applications, enabling them to communicate.',
    Link: 'https://www.freecodecamp.org/news/apis-with-nodejs-and-express-course-in-spanish-for-beginners/'
  },
  {
    Question: 'What is the main advantage of using a Content Delivery Network (CDN)?',
    Answer: 'To improve website load times by distributing content closer to users',
    Distractors: [ 'To secure websites from hacking',
      'To increase storage capacity',
      'To create backups of data'],
    Explanation: 'A CDN distributes content across multiple servers worldwide, which helps reduce latency and improve load times for users.',
    Link: 'https://www.freecodecamp.org/news/cdns-speed-up-performance-by-reducing-latency/'
  },
  {
    Question: 'What does the term \'virtualization\' refer to in IT?',
    Answer: 'Creating virtual versions of physical hardware resources',
    Distractors: [ 'Developing virtual reality applications',
      'Storing data in the cloud',
      'Encrypting sensitive information'],
    Explanation: 'Virtualization involves creating virtual versions of physical hardware such as servers, storage devices, and networks to improve efficiency and scalability.',
    Link: 'https://www.freecodecamp.org/news/linux-server-virtualization-the-basics/'
  },
  {
    Question: 'What does MS-DOS stand for?',
    Answer: 'Microsoft Disk Operating System',
    Distractors: [ 'Microsoft Desktop Operating System',
      'Monitor Standard Disk Operating System',
      'Microsoft Drive Operating System'],
    Explanation: 'MS-DOS is an operating system for x86-based personal computers mostly developed by Microsoft.',
    Link: 'https://en.wikipedia.org/wiki/MS-DOS'
  }
];

export default informationTechnologyQuiz;

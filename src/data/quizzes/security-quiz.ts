const securityQuiz = {
  category: 'Security',
  questions: [
    {
      question: 'What is server side request forgery (SSRF)?',
      answer: 'A technique to manipulate the server into making requests on behalf of the server.',
      distractors: [
        'The client tricks the web browser into making server requests',
        'Malicious actors forging information to leak sensitive data',
        'A type of DDoS attack'
      ],
      explanation: 'SSRF is a security vulnerability that permits malicious actors to make the server send unintended requests to itself.',
      link: 'https://www.freecodecamp.org/news/defending-against-ssrf-attacks/'
    },
    {
      question: 'Which of the following is an example of a denial-of-service (DoS) attack?',
      answer: 'Sending massive traffic to disrupt cloud services',
      distractors: ['Unauthorized data access', 'Password cracking', 'Phishing'],
      explanation: 'DoS attacks aim to overwhelm a service with traffic, making it inaccessible to users.',
      link: 'https://en.wikipedia.org/wiki/Cloud_computing_security'
    },
    {
      question: 'Which standard is widely adopted for cloud cybersecurity?',
      answer: 'ISO/IEC 27001',
      distractors: ['GDPR', 'ITIL', 'PCI DSS'],
      explanation: 'ISO/IEC 27001 is an internationally recognized standard for information security, including cloud environments.',
      link: 'https://en.wikipedia.org/wiki/Cloud_computing_security'
    },
    {
      question: 'What does cloud cybersecurity aim to protect?',
      answer: 'Data, applications, and services in cloud environments',
      distractors: ['Physical servers', 'Personal computers', 'Only network firewalls'],
      explanation: 'Cloud cybersecurity focuses on safeguarding assets hosted in cloud platforms from cyber threats.',
      link: 'https://en.wikipedia.org/wiki/Cloud_computing_security'
    },
    {
      question: 'Which protocol is used to login remotely to the target machine?',
      answer: 'SSH',
      distractors: ['HTTP', 'FTP', 'Telnet'],
      explanation: 'SSH (Secure Shell) is used for secure remote login to servers',
      link: 'https://www.freecodecamp.org/news/hack-your-first-machine-a-guide-for-aspiring-security-enthusiasts/'
    },
    {
      question: 'What is the primary purpose of a wordlist in ethical hacking ?',
      answer: 'To automate password cracking attempts',
      distractors: ['To store user credentials securely', ' To encrypt sensitive data', 'To monitor network traffic'],
      explanation: 'Wordlists are used by ethical hackers to automate the process of guessing passwords, as they contain common passwords and phrases that can be tried against accounts.',
      link: 'https://www.freecodecamp.org/news/the-power-of-wordlists-why-every-ethical-hacker-needs-one/'
    },
    {
      question: 'What is rate limiting in the context of web APIs?',
      answer: 'A technique to control the number of requests a user can make',
      distractors: [
        'A method of encrypting API requests',
        'A protocol for transferring data securely',
        'A way to increase server response time'
      ],
      explanation: 'Rate limiting is used to prevent abuse of APIs by limiting the number of requests a user can make in a given time period, protecting the server from overload.',
      link: 'https://www.freecodecamp.org/news/what-is-rate-limiting-web-apis/'
    },
    {
      question: 'When securing API servers, which of the following practices is essential?',
      answer: 'Implementing authentication and authorization mechanisms',
      distractors: [
        'Using HTTP instead of HTTPS',
        'Storing all data in plain text',
        'Disabling logging for performance'
      ],
      explanation: 'Authentication and authorization are critical to ensuring that only authorized users can access sensitive API endpoints, preventing unauthorized access.',
      link: 'https://www.freecodecamp.org/news/learn-how-to-secure-api-servers/'
    },
    {
      question: 'Which of the following is not an Attack model in cryptanalysis?',
      answer: 'CVA (Chosen Vector Attack)',
      distractors: ['CPA (Chosen Plaintext Attack)', 'CCA (Chosen Ciphertext Attack)', 'COA (Ciphertext Only Attack)'],
      explanation: 'There is no attack model named CVA (Chosen vector attack).',
      link: 'https://en.wikipedia.org/wiki/Attack_model'
    },
    {
      question: 'Which of the following reasons makes HTTPS more secure than HTTP?',
      answer: 'In HTTPS, all communications are encrypted',
      distractors: [
        'HTTPS communications are in plain text',
        'HTTPS communications are beautiful',
        'HTTPS uses port 80 by default, therefore it is more secure'
      ],
      explanation: 'HTTPS ensures that all communications between a client(web browser) and a web server are completely encrypted.',
      link: 'https://www.freecodecamp.org/news/http-vs-https/'
    },
    {
      question: 'What does GPG stand for?',
      answer: 'GNU Privacy Guard',
      distractors: ['Good Privacy Gate', 'Gratification Public Guard ', 'Guard Privacy Guide'],
      explanation: 'GNU Privacy Guard allows one to create cryptographic asymmetric key pairs that can be used for encryption and digital signature.',
      link: 'https://www.freecodecamp.org/news/what-is-commit-signing-in-git/'
    },
    {
      question: 'Which of the following Cryptography types consists of a key pair?',
      answer: 'Asymmetric key cryptography',
      distractors: ['Symmetric key cryptography', 'Hash function', 'Systematical key cryptography'],
      explanation: 'Asymmetric cryptography is a type of cryptography that uses a pair of related keys. Each key pair consists of a public key and a corresponding private key.',
      link: 'https://www.freecodecamp.org/news/http-vs-https/'
    },
    {
      question: 'Which of the following terms involves sending packets of data to the target and interpreting their response?',
      answer: 'Scanning',
      distractors: ['Exploitation', 'Reconnaissance', 'Reporting'],
      explanation: 'Scanning involves sending packets of data to the target and interpreting their response.',
      link: 'https://www.freecodecamp.org/news/ethical-hacking-lifecycle-five-stages-of-a-penetration-test/'
    },
    {
      question: 'What is the term for getting information about a target without having to interact with them?',
      answer: 'Reconnaissance',
      distractors: ['Enumeration', 'Exploitation', 'Reporting'],
      explanation: 'Recon (aka footprinting) is the first, longest, and most important step. This entails getting as much information as you can about the target without interacting directly with the target.',
      link: 'https://www.freecodecamp.org/news/what-is-hacking/'
    },
    {
      question: 'What is the term for gathering information on a target for the purpose of looking for a vulnerability?',
      answer: 'Enumeration',
      distractors: ['Reporting', 'Exploitation', 'Reconnaissance'],
      explanation: 'This is like reconnaissance, except you gain information about the target by interacting with it for the purpose of looking for a vulnerability.',
      link: 'https://www.freecodecamp.org/news/what-is-hacking/'
    },
    {
      question: 'Which of the following protocols is a way through which communication can happen securely between your browser and the site you want to visit (web server)?',
      answer: 'HTTPS',
      distractors: ['HTTP', 'SMTP', 'SFTP'],
      explanation: 'Hyper Text Transfer Protocol Secure, or HTTPS, is a way that communication can happen SECURELY between your browser and the site you want to visit (web server).',
      link: 'https://www.freecodecamp.org/news/http-vs-https/'
    },
    {
      question: 'Which of the following is a communication protocol for email?',
      answer: 'SMTP',
      distractors: ['SFTP', 'HTTP', 'SSL'],
      explanation: 'SMTP, or Simple Mail Transfer Protocol, is a communication protocol used to send mails to mail servers.',
      link: 'https://www.freecodecamp.org/news/how-does-email-work/'
    },
    {
      question: 'Which protocol/cipher is used which ensures parties without prior knowledge establish a shared secret without anyone else being able to sniff it ?',
      answer: ' Diffie-Hellman key exchange protocol ',
      distractors: ['Caesar Cipher', 'Secure Remote Password protocol ', 'Pre-Shared Key Algorithm'],
      explanation: " Variations of the Diffie-Hellman key exchange protocol are used which involves a bit of math. Once the secret is established, a client and a server can communicate without having to fear that someone might intercept their messages. Even if attackers do so, they will not have the common secret that's necessary to decrypt the messages. ",
      link: 'https://www.freecodecamp.org/news/web-security-an-introduction-to-http-5fa07140f9b3/ '
    },

    {
      question: 'In digital security, what is a Man in the Middle Attack?',
      answer: 'an attack where hackers can spy on your internet traffic and modify it',
      distractors: [
        'an attack where hackers can send emails with fake links',
        'an attack where hackers can encrypt your files and demand payment',
        'an attack where hackers can flood the system with network requests'
      ],
      explanation: 'Free wifi hot spots are often targeted by hackers and can put you at risk of MitM attacks (Man in the Middle Attacks) where a hacker spies on your internet traffic, and may even modify it without you knowing.',
      link: 'https://www.freecodecamp.org/news/personal-digital-security-an-intro/'
    },
    {
      question: 'A form of encryption that allows users to perform binary operations on encrypted data without ever decrypting the data is known as?',
      answer: 'Homomorphic Encryption',
      distractors: ['Symmetric Encryption', 'Asymmetric Encryption', 'Advanced Encryption'],
      explanation: 'Homomorphic Encryption is a form of encryption that allows users to perform binary operations on encrypted data without ever decrypting the data.',
      link: 'https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/'
    },
    {
      question: 'Which of the following is a cryptographic network protocol for operating network services securely over an unsecured network?',
      answer: 'SSH',
      distractors: ['SFTP', 'HTTPS', 'OSPF'],
      explanation: 'The SSH(Secure Shell Protocol) is a secure way for users to access a computer over an unsecured network.',
      link: 'https://www.freecodecamp.org/news/ssh-keygen-how-to-generate-an-ssh-public-key-for-rsa-login/'
    },
    {
      question: 'Which of the following is a mechanism to ensure non-repudiation?',
      answer: 'Asymmetric-key encryption',
      distractors: ['MD5', 'Symmetric-key encryption', 'Caesar cipher'],
      explanation: 'Asymmetric-key encryption is a mechanism to ensure non-repudiation because it uses two keys,one public and one private.The public key is used to encrypt the message and the private key is used to decrypt the message.This ensures that the sender cannot deny sending the message because the message can only be decrypted with the private key.',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: "What kind of application lurks in the process list,leverages Windows Hooks to intercept user inputs and has the potential to attack both the user's machine and their internet login information?",
      answer: 'Keylogger',
      distractors: ['typethief', 'trojan', 'worm'],
      explanation: "Keylogger is a type of malware that records every keystroke made by the user. It is widely used to steal passwords, credit card numbers, and other sensitive information. It can also be used to monitor the user's activity and send the information to a third party.",
      link: 'https://www.freecodecamp.org/news/how-did-someone-get-my-password-2/'
    },
    {
      question: 'Which of the following attack exploits input validation vulnerabilities?',
      answer: 'Cross-site scripting(XSS)',
      distractors: ['DNS poisoning', 'SQL injection', 'ARP spoofing'],
      explanation: "Cross-site scripting(XSS) is a type of attack that exploits input validation vulnerabilities. It is a type of injection attack that allows an attacker to inject client-side scripts into web pages viewed by other users. The attacker can then execute scripts in the victim's browser, which can hijack user sessions ,deface web sites, or redirect the user to malicious sites.",
      link: 'https://www.freecodecamp.org/news/cross-site-scripting-what-is-xss/'
    },
    {
      question: 'Which programming language is most susceptible to buffer overflow attacks?',
      answer: 'C',
      distractors: ['Java', 'Python', 'Ruby'],
      explanation: 'C is a low-level language that allows for direct memory manipulation. This makes it more susceptible to buffer overflow attacks.',
      link: 'https://www.freecodecamp.org/news/buffer-overflow-attacks/'
    },
    {
      question: 'Which option is an open-source solution to scanning a network for active hosts and open ports?',
      answer: 'Nmap',
      distractors: ['Snort', 'Autopsy', 'Wireshark'],
      explanation: 'Nmap is a free and open-source network scanner that can be used to scan a network for active hosts and open ports.  It is also used to detect the operating system and services running on a host.',
      link: 'https://www.freecodecamp.org/news/what-is-nmap-and-how-to-use-it-a-tutorial-for-the-greatest-scanning-tool-of-all-time/'
    },
    {
      question: 'Which of the following type of Hackers look for vulnerable computers over the internet, exploit them and use them for their advantage?',
      answer: 'Black Hat Hackers',
      distractors: ['Red Hat Hackers', 'White Hat Hackers', 'Grey Hat Hackers'],
      explanation: 'Black Hat Hackers exploit vulnerable computers over the internet by installing backdoors, malware, sending phishing emails and links , thereby getting access to private and sensitive data',
      link: 'https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/'
    },
    {
      question: 'Which of the following type of Hackers protect civilians and organizations by finding and reporting vulnerabilities in the system?',
      answer: 'White Hat Hackers',
      distractors: ['Grey Hat Hackers', 'Black Hat Hackers', 'Red Hat Hackers'],
      explanation: 'White Hat Hackers work for organizations as Cybersecurity Engineers, Penetration Testers, etc.  where they perform tasks like ethically hacking the system to find and report vulnerabilities. ',
      link: 'https://www.freecodecamp.org/news/white-hat-black-hat-red-hat-hackers/'
    },
    {
      question: 'What is a common exploited Web security vulnerability?',
      answer: 'SQL injection',
      distractors: ['NoSQL Injection', 'XPATH Injection', 'CSS Injection'],
      explanation: 'SQL injection is one of the most common, old and effective ways of getting to your data for retrieving or destroying it. ',
      link: 'https://www.freecodecamp.org/news/learn-the-basics-of-sql-injection-and-how-to-protect-your-web-apps/'
    },
    {
      question: 'What is the first line of defense against SQL injection attacks?',
      answer: 'Sanitizing and validating user inputs',
      distractors: ['Good Firewall setup', 'IP white- and blacklist', 'Good Antivirus'],
      explanation: 'Sanitizing your user input is a basic common rule in security. It is important to not directly add GET or POST variables in your code without a proper sanitizing function. ',
      link: 'https://www.youtube.com/watch?v=2nXOxLpeu80&t=1h37m41s'
    },
    {
      question: 'Which of the following is NOT a JWT segment?',
      answer: 'Transit',
      distractors: ['Header', 'Payload', 'Crypto'],
      explanation: 'JSON Web Tokens are composed of three URL-safe string segments. Header Segment,Payload Segment & Crypto/Signature Segment',
      link: 'https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/'
    },
    {
      question: 'Which of the following is not a key advantage of homomorphic encryption?',
      answer: 'Homomorphic encryption handles speed and storage requirements efficiently.',
      distractors: [
        'Homomorphic encryption allows encrypted information to be processed without requiring decryption first.',
        'Homomorphic encryption is particularly useful in cases where data is shared with third parties.',
        'Homomorphic encryption ensures regulatory compliance in industries like healthcare and finance.'
      ],
      explanation: 'Despite the many benefits homomorphic encryption has to offer, it lacks the efficiency and optimization requirements to be considered a practical solution.',
      link: 'https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/'
    },
    {
      question: 'Which of the following is not a primary type of homomorphic encryption?',
      answer: 'Chunked Homomorphic Encryption (CHE)',
      distractors: [
        'Partially Homomorphic Encryption (PHE)',
        'Somewhat Homomorphic Encryption (SHE)',
        'Fully Homomorphic Encryption (FHE)'
      ],
      explanation: 'The three main types of homomorphic encryption are: Partially Homomorphic Encryption (PHE), Somewhat Homomorphic Encryption (SHE), and Fully Homomorphic Encryption (FHE).',
      link: 'https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/'
    },
    {
      question: 'What does TLS stand for?',
      answer: 'Transport Layer Security',
      distractors: ['Transport Layer Socket', 'Transmission Layer Security', 'Transmission Layer Socket'],
      explanation: 'TLS, or Transport Layer Security, refers to a protocol. The transport layer part of TLS simply refers to host-to-host communication, such as how a client and a server interact, in the Internet protocol suite model.',
      link: 'https://www.freecodecamp.org/news/what-is-tls-transport-layer-security-encryption-explained-in-plain-english/'
    },
    {
      question: 'What is the practice of hiding messages in plain sight?',
      answer: 'Steganography',
      distractors: ['Cryptography', 'Encryption', 'Forensics'],
      explanation: 'Steganography is the practice of hiding messages in a way that looks like nothing is hidden.',
      link: 'https://www.freecodecamp.org/news/steganography-explained-in-plain-english/'
    },
    {
      question: 'What does RSA stand for?',
      answer: 'Rivest, Shamir, and Adleman',
      distractors: ['Really Secure Algorithm', 'Router Safe Agreement', 'Right Serious Answer'],
      explanation: 'RSA, named after its creators (Rivest, Shamir, and Adleman), is an encryption technique that takes advantage of the fact that factoring large prime numbers is hard.',
      link: 'https://www.freecodecamp.org/news/understanding-encryption-algorithms/'
    },
    {
      question: 'Which of these was NOT a 2021 OWASP top 10 security vulnerability?',
      answer: 'Buffer Vulnerability',
      distractors: ['Sensitive Data Exposure', 'Broken Authentication', 'Injection Vulnerability'],
      explanation: "A buffer vulnerability is an important security risk, but it was not part of OWASP's 2021 Top 10 common vulnerabilities.",
      link: 'https://www.freecodecamp.org/news/technical-dive-into-owasp/'
    },
    {
      question: 'Which type of Homomorphic Encryption allows only one operation to be performed on the ciphertext an infinite number of times?',
      answer: 'Partially Homomorphic Encryption (PHE)',
      distractors: [
        'Somewhat Homomorphic Encryption (SHE)',
        'Fully Homomorphic Encryption (FHE)',
        'Somewhat Fully Homomorphic Encryption (SFHE)'
      ],
      explanation: 'Partial Homomorphic Encryption (PHE) allows only one operation to be performed on the ciphertext an infinite number of times. This operation can be only addition or only multiplication.',
      link: 'https://www.freecodecamp.org/news/introduction-to-homomorphic-encryption/'
    },
    {
      question: 'What does SSL stand for?',
      answer: 'Secure Sockets Layer',
      distractors: ['Serial Sockets Layer', 'Serial Secure Layer', 'Series Socket Layer'],
      explanation: 'Transport Layer Security (TLS), formerly known as Secure Sockets Layer (SSL), is the protocol used to encrypt communications. It is the newer and more secure version of SSL',
      link: 'https://www.freecodecamp.org/news/what-is-https-http-vs-https-meaning-and-how-it-works/'
    },
    {
      question: 'What does IPFS stand for?',
      answer: 'InterPlanetary File System',
      distractors: ['Internet Public File System', 'Internet Protocol File Sharing', 'Inter Peer File Sharing'],
      explanation: 'The InterPlanetary File System is a protocol that stores and shares content and is meant to make the web faster and safer to use.',
      link: 'https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/'
    },
    {
      question: 'Which versions of SSL/TLS were impacted during the 2011 SSL BEAST Attack?',
      answer: 'SSL 3.0 and TLS 1.0',
      distractors: ['SSL 2.0 and TLS 2.0', 'SSL 2.0 and TLS 1.0', 'SSL 1.0 and TLS 1.0'],
      explanation: 'BEAST stands for Browser Exploit Against SSL/TLS (BEAST) and it is a type of attack that exploits vulnerabilities in SSL and TLS protocols.',
      link: 'https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/'
    },
    {
      question: 'Which of the following techniques is a Block Cipher modeled after?',
      answer: 'PRP(Pseudo Random Permutation)',
      distractors: ['PRF(Pseudo Random Function)', 'OTP(One Time Pad)', 'PRG(Pseudo Random Generator)'],
      explanation: 'The Block Cipher cryptographic scheme is based on the principle of Pseudo Random Permutations.',
      link: 'https://www.freecodecamp.org/news/what-is-a-block-cipher/'
    },
    {
      question: 'Which cryptographic hashing technique is used for validating Ethereum Transactions?',
      answer: 'Keccak-256',
      distractors: ['SHA-256', 'MD5', 'SHA-1'],
      explanation: 'The Ethereum Blockchain uses the Keccak-256 hash for its Transactions and consensus mechanism.',
      link: 'https://www.freecodecamp.org/news/tag/ethereum/'
    },
    {
      question: 'Which wireless security protocol is the least secure?',
      answer: 'WEP',
      distractors: ['WPA', 'WPA2', 'WPA3'],
      explanation: 'The WEP protocol is now deprecated and considered to be the lest secure option from the list.',
      link: 'https://www.freecodecamp.org/news/wifi-security-explained/'
    },
    {
      question: 'What does PoLP stand for in Cybersecurity?',
      answer: 'Principle of Least Privilege',
      distractors: ['Principle of Lasting Promise', 'Passing of Least Privilege ', 'Programming of Least Privilege'],
      explanation: 'The Principle of Least Privilege (PoLP) is the practice of limiting access to resources for members of an organization.',
      link: 'https://www.freecodecamp.org/news/principle-of-lease-privilege-meaning-cybersecurity/'
    },
    {
      question: 'What is the name of the popular open-source tool that automatically finds and exploits SQL injection vulnerabilities?',
      answer: 'SQLmap',
      distractors: ['SQL security 2.0', 'SQL injection tester', 'SQL injection destroyer'],
      explanation: 'SQLmap is an open-source tool that automatically finds and exploits SQL injection vulnerabilities. We can use it to test web applications for SQL injection vulnerabilities and gain access to a vulnerable database.',
      link: 'https://www.freecodecamp.org/news/how-to-protect-against-sql-injection-attacks/'
    },
    {
      question: 'Which of the following is NOT a good way to protect against SQL Injection Attacks?',
      answer: 'Never sanitizing user inputs',
      distractors: [
        'using parameterized queries when interacting with a database',
        'Watching your database for suspicious activity and set alerts',
        'having strong authentication and access controls to our database'
      ],
      explanation: 'It is important to sanitize user inputs because we want make sure the input does not contain any dangerous characters or malicious code.',
      link: 'https://www.freecodecamp.org/news/how-to-protect-against-sql-injection-attacks/'
    },
    {
      question: 'What is Cybersecurity?',
      answer: 'The act of securing computers and networks against malicious attackers',
      distractors: [
        'the act of providing security only for Google products',
        'the act of providing security only for mobile phones',
        'the act of providing security only for Linux users'
      ],
      explanation: 'The act of securing computers and networks against malicious attackers',
      link: 'https://en.wikipedia.org/wiki/Computer_security'
    },
    {
      question: 'What is spoofing in Cybersecurity?',
      answer: "the act of impersonating a valid service as a means of getting hold of a user's sensitive information",
      distractors: [
        `the act of changing a user's password without their knowledge`,
        `the act of erasing a user's data on their computer`,
        'the act of logging out a user from a service'
      ],
      explanation: "Spoofing is the act of impersonating a valid service as a means of getting hold of a user's sensitive information.",
      link: 'https://en.wikipedia.org/wiki/Spoofing_attack'
    },
    {
      question: 'What is a cyber attack?',
      answer: 'an attack on computer systems with the intent of stealing information',
      distractors: [
        'an attack with malicious intent that only targets Google products',
        "an attack that was only used during the 1990's",
        'an attack with malicious intent that only affects Apple products'
      ],
      explanation: 'A cyber attack is when a malicious user launches an attack on a computer system when the intent of stealing personal information and doing harm.',
      link: 'https://en.wikipedia.org/wiki/Cyberattack'
    },
    {
      question: 'What is a Trojan horse?',
      answer: 'a type of malware downloaded to a computer that looks legitimate but performs malicious activity instead',
      distractors: [
        'a type of software that will write emails for you',
        'a type of software used to delete text messages for you',
        'a type of software that will speed up downloading games to your computer'
      ],
      explanation: 'A Trojan horse is a type of malware downloaded to a computer that looks legitimate but performs malicious activity instead',
      link: 'https://en.wikipedia.org/wiki/Cyberattack#Trojan_horses'
    },
    {
      question: 'Which of the following is NOT a common threat in Cybersecurity?',
      answer: 'spot logging',
      distractors: ['spoofing', 'Man-in-the-middle attack', 'Trojan horse'],
      explanation: 'Common forms of threats in Cybersecurity include spoofing, Man-in-the-middle attack, and Trojan horses.',
      link: 'https://en.wikipedia.org/wiki/Cybersecurity_information_technology_list#Threats'
    },
    {
      question: 'What is Phishing?',
      answer: 'the act of sending messages to users with the intent of tricking them to reveal sensitive information',
      distractors: [
        "the act of deleting someone's text messages without their knowledge",
        "the act of reading someone's emails without their knowledge",
        "the act of changing someone's computer password"
      ],
      explanation: 'Phishing is where a malicious user will send fraudulent messages to a user with the intent of getting them to reveal sensitive information.',
      link: 'https://en.wikipedia.org/wiki/Phishing'
    },
    {
      question: 'What is spyware?',
      answer: 'software that is downloaded onto your computer and monitors your activity',
      distractors: [
        'the act of sending messages to users with the intent of tricking them to reveal sensitive information',
        'the act of logging out a user from a service',
        'an attack where hackers can send emails with fake links'
      ],
      explanation: 'Spyware is a type of software that is downloaded to your computer without your knowledge with the intent of monitoring your activity.',
      link: 'https://en.wikipedia.org/wiki/Spyware'
    },
    {
      question: 'What is a computer worm in Cybersecurity?',
      answer: 'a type of malware that duplicates itself and spreads to other computers',
      distractors: [
        "a type of software that reads someone's emails without their knowledge",
        'a type of software used to delete text messages for you',
        'a type of software that sends messages to users with the intent of tricking them to reveal sensitive information'
      ],
      explanation: 'A computer worm is a type of malware that duplicates itself and spreads to other computers.',
      link: 'https://en.wikipedia.org/wiki/Computer_worm'
    },
    {
      question: 'Which attack aims to overwhelm a target system or network with a flood of traffic, rendering it inaccessible to legitimate users?',
      answer: 'Denial of Service',
      distractors: ['Spear phishing', 'Man in the Middle', 'SQL Injection'],
      explanation: 'Denial of Service (DoS) attacks aim to flood the victim servers with fake requests, thus preventing them from serving legitimate users.',
      link: 'https://www.freecodecamp.org/news/how-we-handled-a-denial-of-service-attack-a-simple-security-lesson-8cdd542d4def/'
    },
    {
      question: 'In password protection, what is the name of a random string of data used to modify a password hash called?',
      answer: 'Salt',
      distractors: ['Bridge', 'Bypass', 'Sheep dip'],
      explanation: 'Salt is added to the password before hashing it to increase its security and prevent attacks',
      link: 'https://www.freecodecamp.org/news/learn-to-speak-the-security-lingo/'
    },
    {
      question: 'What is a common method to protect sensitive data in transit over the internet?',
      answer: 'Using HTTPS (Hypertext Transfer Protocol Secure) for secure communication.',
      distractors: [
        'Encrypting data only at the server-side.',
        'Sharing data through plain HTTP.',
        'Storing sensitive data in plaintext on the server.'
      ],
      explanation: "HTTPS encrypts the data transmitted between a user's web browser and the web server, ensuring confidentiality and integrity during transit.",
      link: 'https://www.freecodecamp.org/news/what-is-https-a-guide-to-secure-web-browsing-and-browser-encryption/'
    },
    {
      question: 'Which of the following C functions are known to be vulnerable?',
      answer: 'gets()',
      distractors: ['fgets()', 'getline()', 'printf()'],
      explanation: "In the C programming language, the  gets() function is known to be vulnerable to buffer overflow attacks since it doesn't check if the input is larger than the buffer size.",
      link: 'https://www.freecodecamp.org/news/buffer-overflow-attacks/'
    },
    {
      question: 'Which of the following operating systems are known as a hacking tool?',
      answer: 'Kali Linux',
      distractors: ['Ubuntu', 'Windows', 'MacOS'],
      explanation: 'Kali Linux is a Debian-based Linux distribution aimed at advanced penetration testing and security auditing.',
      link: 'https://www.freecodecamp.org/news/how-to-install-kali-linux/'
    },
    {
      question: 'In CyberSecurity, what is the CIA Triad?',
      answer: 'A set of guiding principles on information security.',
      distractors: [
        'The name of a black hat hacker group.',
        'Created by the CIA to regulate security issues.',
        'A standard policy for information security.'
      ],
      explanation: 'The CIA Triad serves as guiding principles or goals for information security for organizations and individuals to keep information safe from prying eyes.',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: 'In CyberSecurity, what does the CIA Triad stand for?',
      answer: 'Confidentiality, Integrity and Availability',
      distractors: ['Central Intelligence Agency', 'Compromise, Install and Avoid', 'Certified Internal Auditor'],
      explanation: 'CIA is the abbreviated form of Confidentillity, Integrity and Availability which makes up the CIA triad.',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: 'In CyberSecurity, how does the Confidentiality principle work in the CIA Triad?',
      answer: 'ensuring access to data is restricted to only the intended audience and not others.',
      distractors: [
        'maintaining the accuracy, and completeness of data.',
        'being discreet as a cybersecurity professional.',
        'information being available when it is needed.'
      ],
      explanation: 'Confidentiality is a key principle in information security and ensuring only authorized people have access to sensitive information.',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: 'In CyberSecurity, how does the Integrity principle work in the CIA Triad?',
      answer: 'maintaining the accuracy, and completeness of data.',
      distractors: [
        'being truthful about security processes.',
        'having integrity as a cybersecurity professional.',
        'ensuring users have access to the right information.'
      ],
      explanation: 'Ensuring Integrity of information means to prevent hackers and other unauthorized entities from modifying information.',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: 'In CyberSecurity, how does the Availability principle work in the CIA Triad?',
      answer: 'ensuring that information is available when it is needed.',
      distractors: [
        'being truthful about security processes.',
        'having integrity as a cybersecurity professional.',
        'ensuring users have access to the right information.'
      ],
      explanation: 'To ensure high data availability, you must maintain a correctly functioning hardware and software and provide adequate bandwidth. ',
      link: 'https://www.freecodecamp.org/news/the-cia-triad-confidentiality-integrity-and-availability-explained/'
    },
    {
      question: 'What are Wordlists in cybersecurity?',
      answer: 'A list of possible passwords, usernames, or even URLs.',
      distractors: [
        'A list of possible random words from book used to crack password hashes.',
        'A list of possible email addresses used hack email.',
        'A list of possible websites used to crack password hashes.'
      ],
      explanation: 'Wordlists are used to crack password hashes by trying out all possible passwords in the list. Wordlists are a core component of brute-force attacks.',
      link: 'https://www.freecodecamp.org/news/the-power-of-wordlists-why-every-ethical-hacker-needs-one/'
    },
    {
      question: 'How does rate limiting help in Cybersecurity?',
      answer: 'It prevent brute force attacks, web scraping, and DDoS attacks.',
      distractors: [
        'It prevent SQL injection attacks.',
        'It prevent Cross-site scripting attacks.',
        'It prevent from phishing attacks.'
      ],
      explanation: 'Rate limiting is a security measure that restricts the number of requests a user can make to a server within a certain time frame. This helps prevent brute force attacks, web scraping, and DDoS attacks.',
      link: 'https://www.freecodecamp.org/news/what-is-rate-limiting-web-apis/'
    },
    {
      question: 'What is a White Hat Hacker?',
      answer: 'A hacker who uses their skills for good and ethical purposes.',
      distractors: [
        'A hacker who is wearing a white hat.',
        'A hacker who uses their skills for harmful purposes.',
        'A hacker who is illegal.'
      ],
      explanation: 'White Hat Hackers are ethical hackers who use their skills to help organizations improve their security.',
      link: 'https://www.freecodecamp.org/news/how-suz-hinton-went-from-dev-to-white-hat-hacker-podcast-126/'
    },
    {
      question: 'What is a honeypot in cybersecurity?',
      answer: 'A decoy system used to lure attackers and gather information about their methods.',
      distractors: [
        'A system used to store passwords.',
        'A pot used to store honey.',
        'A decoy system used to store emails.'
      ],
      explanation: 'A honey pot is a system used to lure attackers and gather information about their methods.',
      link: 'https://en.wikipedia.org/wiki/Honeypot_(computing)'
    },
    {
      question: 'What is a Backdoor attack in cybersecurity?',
      answer: 'A hidden method of bypassing security controls.',
      distractors: [
        'A hidden method of securing security controls.',
        'A hidden door in the back of the building.',
        'A hidden method of securing emails.'
      ],
      explanation: 'A backdoor in a computer system, or an algorithm is any secret method of bypassing authentication or security ',
      link: 'https://en.wikipedia.org/wiki/Backdoor_(computing)'
    },
    {
      question: 'What is social engineering in cybersecurity?',
      answer: 'The act of manipulating people into revealing confidential information.',
      distractors: [
        'A social gathering of engineers.',
        'The act of manipulating people into revealing their emails.',
        'The act of manipulating people into revealing their usernames.'
      ],
      explanation: 'Social engineering in the context of computer security, aims to convince a user to disclose secrets such as passwords, card numbers, ',
      link: 'https://en.wikipedia.org/wiki/Social_engineering_(security)'
    },
    {
      question: 'Which of the following is NOT a type of computer virus?',
      answer: 'Antivirus',
      distractors: ['Ransomware', 'Worm', 'Trojan horse'],
      explanation: 'A computer virus is a type of malware that, when executed, replicates itself by modifying other computer programs and inserting its own code into those programs.',
      link: 'https://en.wikipedia.org/wiki/Computer_virus'
    },
    {
      question: 'What is the definition of a hash?',
      answer: "A hash is a 'digital fingerprint' of the original data, always unique, generated by an algorithm.",
      distractors: [
        'A hash is an encrypted code of the original data, which can be reversed.',
        'A hash is a data sequence for storing information.',
        'A hash is a value generated to compress data into a smaller size.'
      ],
      explanation: 'A hash is a unique representation of the original data, created to verify integrity without exposing the original data.',
      link: 'https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/understand-bcrypt-hashes'
    },
    {
      question: 'Dion Training is using a cloud service provider under an Infrastructure as a Service (IaaS) model. Assuming there is a shared responsibility model between the two organizations, which of the following is MOST likely the security responsibility of Dion Training under this IaaS model?',
      answer: 'Data and application security configuration',
      distractors: ['Tenant resource identity and access control', 'Managing the data centers across regions', 'Physical security of the infrastructure'],
      explanation: "The shared responsibility model identifies that responsibility for the implementation of security as applications, data, and workloads are transitioned into a cloud platform and shared between the customer and the cloud service provider (CSP). Using an Infrastructure as a Service (IaaS) model provides hardware hosted at a provider facility using the provider's physical security controls and utilities. Identifying the boundary between customer and cloud provider responsibilities, in terms of security, is imperative for reducing the risk of introducing vulnerabilities into your environment. In this scenario, since an IaaS model was chosen, the cloud customer (Dion Training) will be responsible for the data and application security configurations, while the cloud service provider will be responsible for the physical data centers, equipment, and the access control to the tenant resources",
      link: 'Topic: 2.0 - Security Architecture'
    },
    {
      question: 'During a routine security audit, a network administrator discovers unauthorized devices communicating across VLANs. The organization recently added several new switches to expand the network, and some ports were manually configured. Which of the following most likely led to this issue?',
      answer: 'Switch port misconfiguration',
      distractors: ['Incorrect DNS records', 'Lack of VPN usage', 'Overly permissive ACLs'],
      explanation: 'Misconfigured switch ports can result in unintended VLAN communications. Lack of VPN usage does not impact VLAN operations. Incorrect DNS records involve name resolution, not VLAN segregation. Overly permissive ACLs impact network access but not VLAN communication.',
      link: 'Topic: 3.0 Security Engineering'
    },
    {
      question: 'A network technician is diligent about maintaining all system servers at the most current service pack level available. After performing upgrades, users experience issues with server-based applications. Which of the following should be used to prevent issues in the future?',
      answer: 'Configure a test lab for updates',
      distractors: ['Configure an automated patching server', 'Configure a honeypot for application testing', 'Virtualize the servers and take daily snapshots'],
      explanation: 'To prevent the service pack issues, make sure to validate them in a test/lab environment first before going ahead and applying a new Service Pack in your production environment. While using an automated patching server is a good idea, no patches should be deployed before being tested in a lab first.',
      link: 'Topic: 3.0 - Security Engineering'
    },
    {
      question: 'A public figure’s social media accounts were compromised, and a realistic video was released showing them endorsing a fraudulent investment scheme. Investigators discovered the video was generated using artificial intelligence. What type of AI-enabled attack does this scenario represent?',
      answer: 'Deepfake manipulation',
      distractors: ['AI pipeline injection', 'Prompt engineering misuse', 'Automated exploit generation'],
      explanation: 'his scenario exemplifies a deepfake attack, where AI is used to create realistic but false media, such as videos or images, to deceive viewers. AI pipeline injection and prompt engineering involve manipulating AI workflows, while automated exploit generation focuses on creating software vulnerabilities, none of which directly relate to fabricated video content.',
      link: 'Topic: 1.0 - Governance, Risk, and Compliance'
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    },
    {
      question: '',
      answer: '',
      distractors: ['', '', ''],
      explanation: '',
      link: 'Topic: '
    }
  ]};

export default securityQuiz;

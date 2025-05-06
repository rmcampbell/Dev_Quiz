import q1 from '../../images/CAS-005_001.png';

const securityQuiz = {
  category: 'SecurityX',
  questions: [
    {
      question: 'A security engineer is reviewing event logs because an employee successfully connected a personal Windows laptop to the corporate network, which is against company policy. Company policy allows all Windows 10 and 11 laptops to connect to the system as long as the MDM agent installed by IT is running. Only compliant devices can connect, and the logic in the system to evaluate compliant laptops is as follows:\n\n' +
      'Which of the following most likely occurred when the employee connected a personally owned Windows laptop and was allowed on the network?\n\n\n' +
      `![Alt text](${q1})`,
      answer: 'The OS was running a Windows version below 10 and triggered a false negative.',
      distractors: [
        'The agent was not running on the laptop, which triggered a false positive.',
        'The OS was a valid version, but the MDM agent was not installed, triggering a true positive.',
        'The OS version was higher than 11, and the MDM agent was running, triggering a true negative.'
      ],
      explanation: '',
      questionNumber: 1
    },
    {
      question: 'An organization is working to secure its development process to ensure developers cannot deploy artifacts directly into the production environment. Which of the following security practice recommendations would be the best to accomplish this objective?',
      answer: 'Set up policies and systems with separation of duties.',
      distractors: [
        'Implement least privilege access to all systems.',
        'Roll out security awareness training for all users.',
        'Enforce job rotations for all developers and administrators.',
        'Utilize mandatory vacations for all developers.',
        'Review all access to production systems on a quarterly basis.'
      ],
      explanation: '',
      questionNumber: 2
    },
    {
      question: 'A security architect discovers the following while reviewing code for a company\'s website: selection = "SELECT Item FROM Catalog WHERE\n' +
      'ItemID = " & Request("ItemID")\n' +
      'Which of the following should the security architect recommend?',
      answer: 'Query parameterization',
      distractors: [
        'Client-side processing',
        'Data normalization',
        'Escape character blocking',
        'URL encoding'
      ],
      explanation: '',
      questionNumber: 3
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 4
    // },
    {
      question: 'A CRM company leverages a CSP PaaS service to host and publish Its SaaS product. Recently, a large customer requested that all infrastructure components must meet strict regulatory requirements, including configuration management, patch management, and life-cycle management. Which of the following organizations is responsible for ensuring those regulatory requirements are met?',
      answer: 'The CRM company',
      distractors: [
        'The CRM company\'s customer',
        'The CSP',
        'The regulatory body'
      ],
      explanation: '',
      questionNumber: 5
    },
    {
      question: 'Company A is merging with Company B. Company A is a small, local company. Company B has a large, global presence. The two companies have a lot of duplication in their IT systems, processes, and procedures. On the new Chief Information Officer\'s (CIO\'s) first day, a fire breaks out at Company B\'s main data center. Which of the following actions should the CIO take first?',
      answer: 'Review the incident response plans, and engage the disaster recovery plan while relying on the IT leaders from both companies.',
      distractors: [
        'Determine whether the incident response plan has been tested at both companies, and use it to respond.',
        'Ensure hot, warm, and mobile disaster recovery sites are available, and give an update to the companies\' leadership teams.',
        'Initiate Company A\'s IT systems processes and procedures, assess the damage, and perform a BIA.'
      ],
      explanation: '',
      questionNumber: 6
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 7
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 8
    // },
    {
      question: 'A security analyst is investigating a possible insider threat incident that involves the use of an unauthorized USB from a shared account to exfiltrate data. The event did not create an alert. The analyst has confirmed the USB hardware ID is not on the device allow list, but has not yet confirmed the owner of the USB device. Which of the following actions should the analyst take next?',
      answer: 'Classify the incident as a false negative.',
      distractors: [
        'Classify the incident as a false positive.',
        'Classify the incident as a true positive.',
        'Classify the incident as a true negative.'
      ],
      explanation: '',
      questionNumber: 9
    },
    {
      question: 'Which of the following security features do email signatures provide?',
      answer: 'Non-repudiation',
      distractors: [
        'Body encryption',
        'Code signing',
        'Sender authentication',
        'Chain of custody'
      ],
      explanation: 'Non-repudiation: This means the sender cannot deny sending the message, because the digital signature proves the email came from them and was not altered in transit.',
      questionNumber: 10
    },
    {
      question: 'A software development company wants to ensure that users can confirm the software is legitimate when installing it. Which of the following is the best way for the company to achieve this security objective?',
      answer: 'Code signing',
      distractors: ['Non-repudiation', 'Key escrow', 'Private keys'],
      explanation: 'Code signing uses a digital signature to verify that software has: Come from a trusted source (authenticity). Not been altered since it was signed (integrity). This allows users to confirm the software is legitimate during installation.',
      questionNumber: 11
    },
    // {
    //   question: 'While performing mandatory monthly patch updates on a production application server, the security analyst reports an instance of buffer overflow for a new application that was migrated to the cloud and is also publicly exposed. Security policy requires that only internal users have access to the application. Which of the following should the analyst implement to mitigate the issues reported? (Choose two.)',
    //   answer: [
    //     'Configure firewall rules to block all external traffic.',
    //     'Enable input validation for all fields.'
    //   ],
    //   distractors: [
    //     'Enable automatic updates to be installed on all servers.',
    //     'Configure the security group to enable external traffic.',
    //     'Set up a DLP policy to alert for exfiltration on all application servers.',
    //     'Enable nightly vulnerability scans.'
    //   ],
    //   explanation: 'A. Configure firewall rules to block all external traffic -> This Restricts access so only internal users can connect, aligning with policy. B. Enable input validation for all fields -> Input validation is critical to prevent buffer overflow and other injection attacks.',
    //   questionNumber: 12
    // },
    {
      question: 'PKI can be used to support security requirements in the change management process. Which of the following capabilities does PKI provide for messages?',
      answer: 'Non-repudiation',
      distractors: ['Confidentiality', 'Delivery receipts', 'Attestation'],
      explanation: 'PKI (Public Key Infrastructure) supports several security goals, and one of its key features is non-repudiation — ensuring that: A sender cannot deny having sent a message. This is achieved through digital signatures, which use a sender’s private key to sign messages.',
      questionNumber: 13
    },
    {
      question: 'Several unlabeled documents in a cloud document repository contain cardholder information. Which of the following configuration changes should be made to the DLP system to correctly label these documents in the future?',
      answer: 'Regular expressions',
      distractors: ['Digital rights management', 'Network traffic decryption', 'Watermarking'],
      explanation: 'DLP (Data Loss Prevention) systems use pattern matching to identify sensitive information like:"Credit card numbers", "Social Security numbers", "Bank account details". To detect cardholder information, DLP systems typically rely on: Regular expressions (regex) to match patterns such as the 16-digit format of credit card numbers. Additional logic like Luhn checks to validate numbers. By configuring the DLP system with appropriate regex patterns, it can automatically identify and label documents containing cardholder data in the future.',
      questionNumber: 14
    },
    {
      question: 'A systems administrator at a web-hosting provider has been tasked with renewing the public certificates of all customer sites. Which of the following would best support multiple domain names while minimizing the amount of certificates needed?',
      answer: 'SAN',
      distractors: ['OCSP', 'CRL', 'CA'],
      explanation: 'The Subject Alternative Name (SAN) extension in an SSL/TLS certificate allows multiple domain names to be secured using a single certificate. This is ideal for a web hosting provider managing many customer sites, such as: "www.customer1.com", "mail.customer1.com", "customer2.net". Instead of issuing separate certificates for each domain, a SAN certificate consolidates them, minimizing overhead and simplifying management.',
      questionNumber: 15
    },
    // {
    //   question: 'Which of the following best explain why organizations prefer to utilize code that is digitally signed? (Choose two.)',
    //   answer: ['It provides origin assurance.', 'It verifies integrity.'],
    //   distractors: [
    //     'It provides increased confidentiality.',
    //     'It integrates with DRMs.',
    //     'It verifies the recipient\'s identity.',
    //     'It ensures the code is free of malware.'
    //   ],
    //   explanation: 'Digitally signed code uses cryptographic techniques to: Provide origin assurance – Confirms the software came from a trusted, verified publisher. Verify integrity – Ensures the code has not been modified or tampered with after it was signed. These are the two main security benefits of digital code signing.',
    //   questionNumber: 16
    // },
    {
      question: 'A security engineer receives reports through the organization\'s bug bounty program about remote code execution in a specific component in a custom application. Management wants to properly secure the component and proactively avoid similar issues. Which of the following is the best approach to uncover additional vulnerable paths in the application?',
      answer: 'Use fuzz testing to uncover potential vulnerabilities in the application.',
      distractors: [
        'Leverage an exploitation framework to uncover vulnerabilities.',
        'Utilize a software composition analysis tool to report known vulnerabilities.',
        'Reverse engineer the application to look for vulnerable code paths.',
        'Analyze the use of an HTTP intercepting proxy to dynamically uncover issues.'
      ],
      explanation: 'Fuzz testing (fuzzing) is a proactive dynamic application security testing technique where the system is bombarded with random, malformed, or unexpected inputs to discover: "Buffer overflows", "Input validation issues", "Memory corruption", "Remote code execution flaws". Since the report is about remote code execution, fuzzing is ideal to uncover other vulnerable paths in the same component or similar logic areas.',
      questionNumber: 17
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 18
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   link: 'Topic: 19'
    // },
    {
      question: 'A senior cybersecurity engineer is solving a digital certificate issue in which the CA denied certificate issuance due to failed subject identity validation. At which of the following steps within the PKI enrollment process would the denial have occurred?',
      answer: 'RA',
      distractors: ['OCSP', 'IdP', 'CA'],
      explanation: 'RA (✅ Correct Answer): Verifies the subject’s identity during enrollment. CA: Issues or denies certificates, but relies on the RA for identity validation. If the RA fails the subject, the CA doesn’t proceed. OCSP: Checks revocation status of an already issued certificate. Not part of the issuance process. IdP (Identity Provider): Used in federated identity or SSO systems, not standard PKI enrollment.',
      questionNumber: 20
    },
    {
      question: 'An internal user can send encrypted emails successfully to all recipients, except one. at an external organization. When the internal user attempts to send encrypted emails to this external recipient, a security error message appears. The issue does not affect unencrypted emails. The external recipient can send encrypted emails to internal users. Which of the following is the most likely cause of the issue?',
      answer: 'The external recipient\'s email address and the email address associated with the external recipient\'s public key are mismatched.',
      distractors: [
        'The validity dates of the external recipient’s private key do not match the SSH keys with which the internal user is accessing the system.',
        'The external recipient has an expired public/private key pair that has not been revoked by the CA.',
        'The internal user\'s company email servers have an incorrect implementation of OCSP and CRL settings.'
      ],
      explanation: '',
      questionNumber: 21
    },
    {
      question: 'A security administrator is setting up a virtualization solution that needs to run services from a single host. Each service should be the only one running in its environment. Each environment needs to have its own operating system as a base but share the kernel version and properties of the running host. Which of the following technologies would best meet these requirements',
      answer: 'Containers',
      distractors: ['Type 1 hypervisor', 'Type 2 hypervisor', 'Virtual desktop infrastructure', 'Emulation'],
      explanation: '',
      questionNumber: 22
    },
    {
      question: 'A company has data it would like to aggregate from its PLCs for data visualization and predictive maintenance purposes. Which of the following is the most likely destination for the tag data from the PLCs?',
      answer: 'Local historian',
      distractors: ['External drive', 'Cloud storage', 'System aggregator'],
      explanation: 'A local historian is specifically designed to collect, store, and manage time-series data from PLCs. It is optimized for high-speed data collection and is commonly used for data visualization and predictive maintenance because it maintains historical context and trends. Given that the question emphasizes aggregating PLC data for visualization and predictive maintenance, D. Local historian is indeed the most appropriate and accurate answer.',
      questionNumber: 23
    },
    {
      question: 'Which of the following is the best way to protect the website browsing history for an executive who travels to foreign countries where internet usage is closely monitored?',
      answer: 'DOH',
      distractors: ['EAP-TLS', 'Geofencing', 'Private browsing mode'],
      explanation: 'DOH (DNS over HTTPS):\n DNS over HTTPS encrypts DNS queries, preventing third parties (like governments or ISPs in foreign countries) from seeing which websites the executive is trying to visit. This helps protect privacy by obscuring the domain names being accessed, which are typically exposed during DNS resolution.',
      questionNumber: 24
    },
    {
      question: 'A systems administrator is working with the SOC to identify potential intrusions associated with ransomware. The SOC wants the systems administrator to perform network-level analysis to identify outbound traffic from any infected machines. Which of the following is the most appropriate action for the systems administrator to take?',
      answer: 'Review NetFlow logs for unexpected increases in egress traffic.',
      distractors: [
        'Monitor for IoCs associated with C&C communications.',
        'Tune alerts to Identify changes to administrative groups.',
        'Perform binary hash comparisons to identify infected devices.'
      ],
      explanation: 'NetFlow logs track network traffic patterns, helping detect anomalies like sudden spikes in outbound connections, which may indicate ransomware exfiltrating data or contacting command-and-control (C&C) servers. Ransomware often generates abnormal egress traffic as it sends encrypted data to attackers, making NetFlow analysis critical for early detection.',
      questionNumber: 25
    },
    {
      question: 'A retail organization wants to properly test and verify its capabilities to detect and/or prevent specific TTPs as mapped to the MITRE ATTACK framework specific to APTs. Which of the following should be used by the organization to accomplish this goal?',
      answer: 'Penetration test',
      distractors: ['Tabletop exercise', 'Sandbox detonation', 'Honeypot'],
      explanation: '',
      questionNumber: 26
    },
    {
      question: 'IoCs were missed during a recent security incident due to the reliance on a signature-based detection platform. A security engineer must recommend a solution that can be implemented to address this shortcoming. Which of the following would be the most appropriate recommendation?',
      answer: 'UEBA',
      distractors: ['FIM', 'SASE', 'CSPM', 'EAP'],
      explanation: 'UEBA (User and Entity Behavior Analytics), as it provides advanced, behavioral-based detection that can identify suspicious activities, even those not matching known attack signatures.',
      questionNumber: 27
    },
    // {
    //   question: 'A company that provides services to clients who work with highly sensitive data would like to provide assurance that the data\'s confidentiality is maintained in a dynamic, low-risk environment. Which of the following would best achieve this goal? (Choose two.)',
    //   answer: [
    //     'Encrypt all data and files at rest, in transit, and in use.',
    //     'Implement file integrity monitoring.'
    //   ],
    //   distractors: [
    //     'Install a SOAR on all endpoints.',
    //     'Hash all files.',
    //     'Install SIEM within a SOC.',
    //     'Configure SOAR to monitor and intercept files and data leaving the network.'
    //   ],
    //   explanation: '',
    //   questionNumber: 28
    // },
    {
      question: 'An organization wants to implement an access control system based on its data classification policy that includes the following data types: "Confidential", "Restricted", "Internal", "Public Flag for Review". The access control system should support SSO federation to map users into groups. Each group should only access systems that process and store data at the classification assigned to the group. Which of the following should the organization implement to enforce its requirements with a minimal impact to systems and resources?',
      answer: 'A tagging strategy in which all resources are assigned a tag based on the data classification type, and a system that enforces attribute-based access control',
      distractors: [
        'Role-based access control that maps data types to internal roles, which are defined in the human resources department\'s source of truth system',
        'Network microsegmentation based on data types, and a network access control system enforcing mandatory access control based on the user principal',
        'A rule-based access control strategy enforced by the SSO system with rules managed by the internal LDAP and applied on a per-system basis'
      ],
      explanation: '',
      questionNumber: 29
    },
    {
      question: 'A security analyst was monitoring the networks of a group of companies. The analyst identified several periods of concentrated, coordinated activity by unknown actors. The activity repeated at regular intervals and affected all the companies. Minor hardware outages that correlated with the same times as the discovered activity escalated in severity. Which of the following threat actors was most likely involved?',
      answer: 'An advanced persistent threat financed by a nation-state',
      distractors: [
        'An organized crime collective running a ransomware campaign',
        'A group of politically motivated hackers',
        'Disgruntled employees who were recently terminated'
      ],
      explanation: '',
      questionNumber: 30
    },
    {
      question: 'The company\'s client service team is receiving a large number of inquiries from clients regarding a new vulnerability. Which of the following would provide the customer service team with a consistent message to deliver directly to clients?',
      answer: 'Response playbook',
      distractors: ['Communication plan', 'Disaster recovery procedure', 'Automated runbook'],
      explanation: '',
      questionNumber: 31
    },
    {
      question: 'A company wants to use a process to embed a sign of ownership covertly inside a proprietary document without adding any identifying attributes. Which of the following would be best to use as part of the process to support copyright protections of the document?',
      answer: 'Steganography',
      distractors: ['E-signature', 'Watermarking', 'Cryptography'],
      explanation: '',
      questionNumber: 32
    },
    {
      question: 'Which of the following utilizes policies that route packets to ensure only specific types of traffic are being sent to the correct destination based on application usage?',
      answer: 'SDN',
      distractors: ['DNSSEC', 'pcap', 'vmstat', 'VPC'],
      explanation: '',
      questionNumber: 33
    },
    // {
    //   question: 'An incident response team completed recovery from offline backup for several workstations. The workstations were subjected to a ransomware attack after users fell victim to a spear-phishing campaign, despite a robust training program. Which of the following questions should be considered during the lessons-learned phase to most likely reduce the risk of reoccurrence? (Choose two.)',
    //   answer: [
    //     'What measurable user behaviors were exhibited that contributed to the compromise?',
    //     'Which technical controls, if implemented, would provide defense when user training fails?'
    //   ],
    //   distractors: [
    //     'Are there opportunities for legal recourse against the originators of the spear-phishing campaign?',
    //     'What internal and external stakeholders need to be notified of the breach?',
    //     'Which methods can be implemented to increase speed of offline backup recovery?',
    //     'Which user roles are most often targeted by spear phishing attacks?'
    //   ],
    //   explanation: '',
    //   questionNumber: 34
    // },
    {
      question: 'Two companies that recently merged would like to unify application access between the companies, without initially merging internal authentication stores. Which of the following technical strategies would best meet this objective?',
      answer: 'Federation',
      distractors: ['RADIUS', 'TACACS+', 'MFA', 'ABAC'],
      explanation: '',
      questionNumber: 35
    },
    {
      question: 'An analyst needs to evaluate all images and documents that are publicly shared on a website. Which of the following would be the best tool to evaluate the metadata of these files?',
      answer: 'ExifTool',
      distractors: ['OllyDbg', 'Volatility', 'Ghidra'],
      explanation: '',
      questionNumber: 36
    },
    {
      question: 'An organization has deployed a cloud-based application that provides virtual event services globally to clients. During a typical event, thousands of users access various entry pages within a short period of time. The entry pages include sponsor-related content that is relatively static and is pulled from a database. When the first major event occurs, users report poor response time on the entry pages. Which of the following features is the most appropriate for the company to implement?',
      answer: 'Caching',
      distractors: [
        'Horizontal scalability',
        'Vertical scalability',
        'Containerization',
        'Static code analysis'
      ],
      explanation: '',
      questionNumber: 37
    },
    {
      question: 'An organization\'s board of directors has asked the Chief Information Security Officer to build a third-party management program. Which of the following best explains a reason for this request?',
      answer: 'Supply chain visibility',
      distractors: ['Risk transference', 'Support availability', 'Vulnerability management'],
      explanation: '',
      questionNumber: 38
    },
    {
      question: 'A company is rewriting a vulnerable application and adding the mprotect() system call in multiple parts of the application\'s code that was being leveraged by a recent exploitation tool. Which of the following should be enabled to ensure the application can leverage the new system call against similar attacks in the future?',
      answer: 'NX bit',
      distractors: ['TPM', 'Secure boot', 'HSM'],
      explanation: '',
      questionNumber: 39
    },
    {
      question: 'Which of the following items should be included when crafting a disaster recovery plan?',
      answer: 'Testing exercises',
      distractors: ['Redundancy', 'Autoscaling', 'Competitor locations'],
      explanation: '',
      questionNumber: 40
    },
    {
      question: 'A web application server is running a legacy operating system with an unpatched RCE vulnerability. The server cannot be upgraded until the corresponding application code is changed. Which of the following compensating controls would best prevent successful exploitation?',
      answer: 'Segmentation',
      distractors: ['CASB', 'UEBA', 'HIPS'],
      explanation: '',
      questionNumber: 41
    },
    {
      question: 'Which of the following is the reason why security engineers often cannot upgrade the security of embedded facility automation systems?',
      answer: 'They are constrained by available compute.',
      distractors: [
        'They lack x86-64 processors.',
        'They lack EEPROM.',
        'They are not logic-bearing devices.'
      ],
      explanation: '',
      questionNumber: 42
    },
    {
      question: 'A security analyst identified a vulnerable and deprecated runtime engine that Is supporting a public-facing banking application. The developers anticipate the transition to modern development environments will take at least a month. Which of the following controls would best mitigate the risk without interrupting the service during the transition?',
      answer: 'Configuring IPS and WAF with signatures',
      distractors: [
        'Shutting down the systems until the code is ready',
        'Uninstalling the impacted runtime engine',
        'Selectively blocking traffic on the affected port'
      ],
      explanation: '',
      questionNumber: 43
    },
    {
      question: 'A security architect wants to ensure a remote host\'s identity and decides that pinning the X.509 certificate to the device is the most effective solution. Which of the following must happen first?',
      answer: 'Use an out-of-band method to obtain the certificate.',
      distractors: [
        'Use Distinguished Encoding Rules (DER) for the certificate.',
        'Extract the private key from the certificate.',
        'Compare the retrieved certificate with the embedded certificate.'
      ],
      explanation: '',
      questionNumber: 44
    },
    {
      question: 'A company hired a third-party consultant to run a cybersecurity incident simulation in order to identify security gaps and prepare stakeholders for a potential incident. Which of the following best describes this activity?',
      answer: 'Tabletop exercise',
      distractors: [
        'Walk-through review',
        'Lessons learned',
        'Business impact analysis'
      ],
      explanation: '',
      questionNumber: 45
    },
    {
      question: 'A security officer is requiring all personnel working on a special project to obtain a security clearance requisite with the level of all information being accessed. Data on this network must be protected at the same level of each clearance holder. The need to know must be verified by the data owner. Which of the following should the security officer do to meet these requirements?',
      answer: 'Assign labels to the files and require formal access authorization.',
      distractors: [
        'Create a rule to authorize personnel only from certain IPs to access the files.',
        'Assign attributes to each file and allow authorized users to share the files.',
        'Assign roles to users and authorize access to files based on the roles.'
      ],
      explanation: '',
      questionNumber: 46
    },
    {
      question: 'A security team receives alerts regarding impossible travel and possible brute-force attacks after normal business hours. After reviewing more logs, the team determines that specific users were targeted and attempts were made to transfer data to an unknown site. Which of the following should the team do to help mitigate these issues?',
      answer: 'Restrict uploading activity to only authorized sites.',
      distractors: [
        'Create a firewall rule to prevent those users from accessing sensitive data.',
        'Enable packet captures to continue to run for the source and destination related to the file transfer.',
        'Disable login activity for those users after business hours.'
      ],
      explanation: '',
      questionNumber: 47
    },
    {
      question: 'A company recently acquired a SaaS company and performed a gap analysis. The results of the gap analysis Indicate security controls are absent throughout the SDLC and have led to several vulnerable production releases. Which of the following security tools best reduces the risk of vulnerable code being pushed to production in the future?',
      answer: 'Static application security testing',
      distractors: [
        'Regression testing',
        'Code signing',
        'Sandboxing'
      ],
      explanation: '',
      questionNumber: 48
    },
    {
      question: 'Which of the following is the best reason for obtaining file hashes from a confiscated laptop?',
      answer: 'To later validate the integrity of each file',
      distractors: [
        'To prevent metadata tampering on each file',
        'To generate unique identifiers for each file',
        'To preserve the chain of custody of files'
      ],
      explanation: '',
      questionNumber: 49
    },
    // {
    //   question: 'A security analyst is using data provided from a recent penetration test to calculate CVSS scores to prioritize remediation. Which of the following metric groups would the analyst need to determine to get the overall scores? (Choose three.)',
    //   answer: ['Temporal', 'Base', 'Environmental'],
    //   distractors: [
    //     'Availability',
    //     'Integrity',
    //     'Confidentiality',
    //     'Impact',
    //     'Attack vector'
    //   ],
    //   explanation: '',
    //   questionNumber: 50
    // },
    {
      question: 'Which of the following describes how a risk assessment is performed when an organization has a critical vendor that provides multiple products?',
      answer: 'At the individual product level',
      distractors: [
        'Through the selection of a random product',
        'Using a third-party audit report',
        'By choosing a major product'
      ],
      explanation: '',
      questionNumber: 51
    },
    {
      question: 'A security engineer is performing a vulnerability management scan on multihomed Linux systems. The engineer notices that the vulnerability count is high due to the fact that each vulnerability is multiplied by the number of NICs on each system. Which of the following should the engineer do to deduplicate the vulnerabilities and to associate the vulnerabilities with a particular host?',
      answer: 'Deploy an agent.',
      distractors: [
        'Use a SCAP scanner.',
        'Initiate a discovery scan.',
        'Perform an Nmap scan.'
      ],
      explanation: '',
      questionNumber: 52
    },
    {
      question: 'Which of the following best describes a risk associated with using facial recognition to locally authenticate to a mobile device?',
      answer: 'Biometric impersonation',
      distractors: ['Data remanence', 'Deepfake', 'Metadata scraping'],
      explanation: '',
      questionNumber: 53
    },
    {
      question: 'The principal security analyst for a global manufacturer is investigating a security incident related to abnormal behavior in the ICS network. A controller was restarted as part of the troubleshooting process, and the following issue was identified when the controller was restarted:\n' +
      'SECURE BOOT FAILED:\n' +
      'FIRMWARE MISMATCH EXPECTED UXFDC479 ACTUAL 0x79F31B\n' +
      'During the investigation, this modified firmware version was identified on several other controllers at the site. The official vendor firmware versions do not have this checksum. Which of the following stages of the MITRE ATT&CK framework for ICS includes this technique?',
      answer: 'Persistence',
      distractors: ['Evasion', 'Collection', 'Lateral movement'],
      explanation: '',
      questionNumber: 54
    },
    {
      question: 'An analyst is working to address a potential compromise of a corporate endpoint and discovers the attacker accessed a user\'s credentials. However, it is unclear if the system baseline was modified to achieve persistence. Which of the following would most likely support forensic activities in this scenario?',
      answer: 'Bit-level disk duplication',
      distractors: ['Software composition analysis', 'Side-channel analysis', 'SCAP scanner'],
      explanation: '',
      questionNumber: 56
    },
    {
      question: 'A company is decommissioning old servers and hard drives that contain sensitive data. Which of the following best protects against data leakage?',
      answer: 'Purging',
      distractors: ['Clearing', 'Shredding', 'Degaussing'],
      explanation: '',
      questionNumber: 57
    },
    {
      question: 'An engineer has had scaling issues with a web application hosted on premises and would like to move to a serverless architecture. Which of the following cloud benefits would be best to utilize for this project?',
      answer: 'Automation of resource provisioning',
      distractors: ['Cost savings for hosting', 'Eliminating need to patch', 'Providing geo-redundant hosting'],
      explanation: '',
      questionNumber: 58
    },
    {
      question: 'An organization needs to classify its systems and data in accordance with external requirements. Which of the following roles is best qualified to perform this task?',
      answer: 'Data owner',
      distractors: ['Systems administrator', 'Data processor', 'Data custodian', 'Data steward', ''],
      explanation: '',
      questionNumber: 59
    },
    {
      question: 'A company is developing an application that will be used to perform e-commerce transactions for a subscription-based service. The application must be able to use previously saved payment methods to perform recurring transactions. Which of the following is the most appropriate?',
      answer: 'Tokenization through an HSM',
      distractors: [
        'Self-encrypting disks with field-level encryption',
        'NX/XN Implementation to minimize data retention',
        'Token-based access for application users',
        'Address space layout randomization'
      ],
      explanation: '',
      questionNumber: 60
    },
    {
      question: 'A security technician is trying to connect a remote site to the central office over a site-to-site VPN. The technician has verified the source and destination IP addresses are correct, but the technician is unable to get the remote site to connect. The following error message keeps repeating:\n' +
      'An error has occurred during Phase 1 handshake. Deleting keys and retrying...\n' +
      'Which of the following is most likely the reason the connection is failing?',
      answer: 'The IKE hashing algorithm uses different key lengths on each VPN device.',
      distractors: [
        'The remote VPN is attempting to connect with a protocol other than SSL/TLS.',
        'The IPSec settings allow more than one cipher suite on both devices.',
        'The Diffie-Hellman group on both sides matches but is a legacy group.'
      ],
      explanation: '',
      questionNumber: 61
    },
    {
      question: 'A security analyst discovers a new device on the company\'s dedicated IoT subnet during the most recent vulnerability scan. The scan results show numerous open ports and insecure protocols in addition to default usernames and passwords. A camera needs to transmit video to the security server in the IoT subnet. Which of the following should the security analyst recommend to securely operate the camera?',
      answer: 'Harden the camera configuration.',
      distractors: ['Send camera logs to the SIEM.', 'Encrypt the camera\'s video stream.', 'Place the camera on an isolated segment.'],
      explanation: '',
      questionNumber: 63
    },
    {
      question: 'The Chief Information Security Officer of a large multinational organization has asked the security risk manager to use risk scenarios during a risk analysis. Which of the following is the most likely reason for this approach?',
      answer: 'To provide context to the relevancy of risk',
      distractors: [
        'To connect risks to business objectives',
        'To ensure a consistent approach to risk',
        'To ensure a consistent approach to risk'
      ],
      explanation: '',
      questionNumber: 64
    },
    {
      question: 'A pharmaceutical company uses a cloud provider to host thousands of independent resources in object storage. The company needs a practical and effective means of discovering data, monitoring changes, and identifying suspicious activity. Which of the following would best meet these requirements?',
      answer: 'A machine-learning-based data security service',
      distractors: ['A cloud configuration assessment and compliance service', 'An automated data classification system', 'A file integrity monitoring service'],
      explanation: '',
      questionNumber: 66
    },
    {
      question: 'A security analyst is assessing a new application written in Java. The security analyst must determine which vulnerabilities exist during runtime. Which of the following would provide the most exhaustive list of vulnerabilities while meeting the objective?',
      answer: 'Dynamic analysis',
      distractors: ['Input validation', 'Static analysis', 'Fuzz testing', 'Side-channel analysis'],
      explanation: '',
      questionNumber: 67
    },
    {
      question: 'Recently, two large engineering companies in the same line of business decided to approach cyberthreats in a united way. Which of the following best describes this unified approach?',
      answer: 'MOU',
      distractors: ['SOW', 'NDA', 'SLA'],
      explanation: '',
      questionNumber: 68
    },
    {
      question: 'A regulated company is in the process of refreshing its entire infrastructure. The company has a business-critical process running on an old 2008 Windows server. If this server fails, the company would lose millions of dollars in revenue. Which of the following actions should the company should take?',
      answer: 'Create an organizational risk register for project prioritization.',
      distractors: ['Accept the risk as the cost of doing business.', 'Purchase insurance to offset the cost if a failure occurred.', 'Implement network compensating controls.'],
      explanation: '',
      questionNumber: 69
    },
    {
      question: 'A security engineer needs to ensure production containers are automatically scanned for vulnerabilities before they are accepted into the production environment. Which of the following should the engineer use to automatically incorporate vulnerability scanning on every commit?',
      answer: 'CI/CD pipeline',
      distractors: ['Integrated development environment', 'Container orchestrator', 'Code repository'],
      explanation: '',
      questionNumber: 70
    },
    {
      question: 'A security architect recommends replacing the company\'s monolithic software application with a containerized solution. Historically, secrets have been stored in the application\'s configuration files. Which of the following changes should the security architect make in the new system?',
      answer: 'Use a secrets management tool.',
      distractors: ['Save secrets in key escrow.', 'Store the secrets inside the Dockerfiles.', 'Run all Dockerfiles in a randomized namespace.'],
      explanation: '',
      questionNumber: 71
    },
    {
      question: 'A security engineer is assessing a new tool to segment data and communications between domains. The assessment must determine how data transmission controls can be bypassed without detection. Which of the following techniques should the security engineer use?',
      answer: 'Covert channel analysis',
      distractors: ['Fuzz testing', 'Machine-learning statistical analysis', 'Protocol analysis'],
      explanation: '',
      questionNumber: 72
    },
    {
      question: 'During an adversarial simulation exercise, an external team was able to gain access to sensitive information and systems without the organization detecting this activity. Which of the following mitigation strategies should the organization use to best resolve the findings?',
      answer: 'Utilizing decoy accounts and documents',
      distractors: [
        'Leveraging simulators for attackers',
        'Configuring a honeypot for adversary characterization',
        'Setting up a honey network for attackers'
      ],
      explanation: '',
      questionNumber: 73
    },
    {
      question: 'A help desk technician is troubleshooting an issue with an employee\'s laptop that will not boot into its operating system. The employee reported the laptop had been stolen but then found it one day later. The employee has asked the technician for help recovering important data. The technician has identified the following:\n' +
      'The laptop operating system was not configured with BitLocker.\n' +
      'The hard drive has no hardware failures.\n' +
      'Data is present and readable on the hard drive, although it appears to be illegible.\n' +
      'Which of the following is the most likely reason the technician is unable to retrieve legible data from the hard drive?',
      answer: 'The hard drive experienced crypto-shredding.',
      distractors: [
        'The technician is using the incorrect cipher to read the data.',
        'The PKI certificate was revoked, and a new one must be installed.',
        'he employee\'s password was changed, and the new password needs to be used.'
      ],
      explanation: '',
      questionNumber: 74
    },
    {
      question: 'A company wants to invest in research capabilities with the goal to operationalize the research output. Which of the following is the best option for a security architect to recommend?',
      answer: 'Threat intelligence platform',
      distractors: ['Dark web monitoring', 'Honeypots', 'Continuous adversary emulation'],
      explanation: '',
      questionNumber: 82
    },
    {
      question: 'A company is concerned about the security of customer data. The IT department has configured all web applications with appropriate access controls to restrict to only authorized users. Which of the following solutions addresses this concern?',
      answer: 'DLP',
      distractors: ['Vulnerability scanner', 'Threat intelligence platform', 'SIEM'],
      explanation: '',
      questionNumber: 83
    },
    {
      question: 'A security researcher tells a company that one of its solutions is vulnerable to buffer overflow, leading to a malicious coding execution. Which of the following is the best way to avoid this vulnerability in future versions?',
      answer: 'Using SAST tools to find vulnerabilities as part of the pipeline',
      distractors: [
        'Testing for CSRF vulnerabilities before the application goes to production',
        'Implementing pair programming to improve development capabilities',
        'Implementing canary protection in an earlier life-cycle stage'
      ],
      explanation: '',
      questionNumber: 85
    },
    {
      question: 'A developer needs to improve the cryptographic strength of a password-storage component in a web application without completely replacing the crypto-module. Which of the following is the most appropriate technique?',
      answer: 'Key stretching',
      distractors: ['Key encryption', 'Key rotation', 'Key escrow', 'Key splitting'],
      explanation: '',
      questionNumber: 88
    },
    {
      question: 'A company wants to implement hardware security key authentication for accessing sensitive information systems. The goal is to prevent unauthorized users from gaining access with a stolen password. Which of the following models should the company implement to best solve this issue?',
      answer: 'Context-based',
      distractors: ['Time-based', 'Role-based', 'Rule-based'],
      explanation: 'Context-based access control (CBAC) considers real-time conditions before granting access. This means authentication factors like location, device type, and the presence of a hardware security key are analyzed before a user is allowed into a system. Hardware security keys act as strong authentication mechanisms that prevent unauthorized logins, even if an attacker has stolen a valid password. CBAC ensures that users only access sensitive information under approved conditions, reducing risks from credential theft.',
      questionNumber: 89
    },
    {
      question: 'Which of the following is the main reason quantum computing advancements are leading companies and countries to deploy new encryption algorithms?',
      answer: 'Encryption systems based on large prime numbers will be vulnerable to exploitation.',
      distractors: [
        'Quantum computers will enable malicious actors to capture IP traffic in real time.',
        'Zero Trust security architectures will require homomorphic encryption.',
        'Perfect forward secrecy will prevent deployment of advanced firewall monitoring techniques.'
      ],
      explanation: '',
      questionNumber: 90
    },
    {
      question: 'A company is adopting microservice architecture in order to quickly remediate vulnerabilities and deploy to production. All of the microservices run on the same Linux platform. Significant time was spent updating the base OS before deploying code. Which of the following should the company do to make the process efficient?',
      answer: 'Use Terraform scripts while creating golden images.',
      distractors: [
        'Create a cron job to run apt-update every 30 days.',
        'Deploy a centralized update server.',
        'Use snapshots to deploy code to existing compute instances.'
      ],
      explanation: 'Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually. Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually.',
      questionNumber: 91
    },
    {
      question: 'An organization has several systems deployed in a public cloud and wants to confirm that when data retention periods are reached, the data is properly disposed of. Which of the following best meets the organization\'s needs?',
      answer: 'Encrypting the data with customer-managed keys and then deleting both the encryption key and the volume',
      distractors: [
        'Double encrypting the data using both asymmetric and symmetric keys managed by the cloud service provider',
        'Utilizing a data-wiping software to overwrite the existing data',
        'Asking the cloud provider for copies of certificates of destruction'
      ],
      explanation: '',
      questionNumber: 93
    },
    {
      question: 'A security engineer reviews an after-action report from a previous security breach and notes a long lag time between detection and containment of a compromised account. The engineer suggests using SOAR to address this concern. Which of the following best explains the engineer\'s goal?',
      answer: 'To prepare runbooks to automate future incident response',
      distractors: [
        'To prevent accounts from being compromised',
        'To enable log correlation using machine learning',
        'To orchestrate additional reporting for the security operations center'
      ],
      explanation: '',
      questionNumber: 94
    },
    {
      question: 'During an audit at an organization, auditors find that developers are able to promote code to production. The auditors request a full review of all production changes. Which of the following should the organization implement to prevent a full review in the future?',
      answer: 'Change control board',
      distractors: [
        'Centralized code repositories',
        'Branch protection',
        'Interactive application security testing'
      ],
      explanation: '',
      questionNumber: 95
    },
    {
      question: 'A systems engineer is configuring SSO for a business that will be using SaaS applications for its remote-only workforce. Privileged actions in SaaS applications must be allowed only from corporate mobile devices that meet minimum security requirements, but BYOD must also be permitted for other activity. Which of the following would best meet this objective?',
      answer: 'Configure device attestations and continuous authorization controls.',
      distractors: [
        'Deploy application protection policies using a corporate, cloud-based MDM solution.',
        'Block any connections from outside the business\'s network security boundary.',
        'Install machine certificates on corporate devices and perform checks against the clients.'
      ],
      explanation: 'Device attestation ensures that only approved corporate devices can perform privileged actions by validating security posture, ownership, and compliance. Continuous authorization controls dynamically assess security risk, preventing unauthorized access even if credentials are compromised. This approach supports BYOD for non-privileged tasks while enforcing strict security for sensitive operations.',
      questionNumber: 96
    },
    {
      question: 'A systems administrator wants to reduce the number of failed patch deployments in an organization. The administrator discovers that system owners modify systems or applications in an ad hoc manner. Which of the following is the best way to reduce the number of failed patch deployments?',
      answer: 'Change management',
      distractors: ['Compliance tracking', 'Situational awareness', 'Quality assurance'],
      explanation: '',
      questionNumber: 97
    },
    {
      question: 'A network engineer must ensure that always-on VPN access is enabled but restricted to company assets. Which of the following best describes what the engineer needs to do?',
      answer: 'Generate device certificates using the specific template settings needed.',
      distractors: [
        'Modify signing certificates in order to support IKE version 2.',
        'Create a wildcard certificate for connections from public networks.',
        'Add the VPN hostname as a SAN entry on the root certificate.'
      ],
      explanation: 'Device certificates uniquely identify company-owned assets, allowing the VPN to restrict access only to authorized devices. Certificate-based authentication ensures that only approved machines can connect, preventing unauthorized external devices from accessing the corporate network. This approach is commonly used in enterprise environments to enforce security policies without relying solely on usernames and passwords.',
      questionNumber: 98
    },
    {
      question: 'An organization wants to implement a platform to better identify which specific assets are affected by a given vulnerability. Which of the following components provides the best foundation to achieve this goal?',
      answer: 'CMDB',
      distractors: ['SASE', 'SBoM', 'SIEM'],
      explanation: 'A CMDB maintains detailed records of IT assets, including software, hardware, and configurations. When a vulnerability is identified, the CMDB can map affected assets, helping security teams prioritize patching efforts. It ensures better visibility and tracking, reducing response time to threats.',
      questionNumber: 100
    },
    {
      question: 'Which of the following best explains why AI output could be inaccurate?',
      answer: 'Model poisoning',
      distractors: ['Social engineering', 'Output handling', 'Prompt injections'],
      explanation: '',
      questionNumber: 101
    },
    {
      question: 'A company runs a DAST scan on a web application. The tool outputs the following recommendations:\n' +
      '• Use Cookie prefixes.\n' +
      '• "Content Security Policy - SameSite=strict" is not set.\n' +
      'Which of the following vulnerabilities has the tool identified?',
      answer: 'CSRF',
      distractors: ['RCE', 'XSS', 'TOCTOU'],
      explanation: '',
      questionNumber: 102
    },
    {
      question: 'Which of the following best describes the reason a network architect would enable forward secrecy on all VPN tunnels?',
      answer: 'This process reduces the success of attackers performing cryptanalysis.',
      distractors: [
        'This process is a requirement to enable hardware-accelerated cryptography.',
        'The business requirements state that confidentiality is a critical success factor.',
        'Modern cryptographic protocols list this process as a prerequisite for use.'
      ],
      explanation: '',
      questionNumber: 103
    },
    {
      question: 'Which of the following best explains the importance of determining organizational risk appetite when operating with a constrained budget?',
      answer: 'Risk appetite directly impacts acceptance of high-impact, low-likelihood events.',
      distractors: [
        'Organizational risk appetite varies from organization to organization.',
        'Budgetary pressure drives risk mitigation planning in all companies.',
        'Risk appetite directly influences which breaches are disclosed publicly.'
      ],
      explanation: '',
      questionNumber: 104
    },
    // {
    //   question: 'A company hired an email service provider called my-email.com to deliver company emails. The company started having several issues during the migration. A security engineer is troubleshooting and observes the following configuration snippet: IMAGE',
    //   answer: [
    //     'The email CNAME record must be changed to a type A record pointing to 192.168.1.10',
    //     'The TXT record must be changed to "v=spf ip4:192.168.1.10 include:my-email.com ~all"'
    //   ],
    //   distractors: [
    //     'The email CNAME record must be changed to a type A record pointing to 192.168.1.11',
    //     'The TXT record must be changed to "v=dmarc ip4:192.168.1.10 include:my-email.com ~all"',
    //     'The srv01 A record must be changed to a type CNAME record pointing to the email server',
    //     'The TXT record must be changed to "v=dkim ip4:192.168.1.11 include:my-email.com ~all"',
    //     'The srv01 A record must be changed to a type CNAME record pointing to the web01 server'
    //   ],
    //   explanation: '',
    //   questionNumber: 105
    // },
    {
      question: 'After a company discovered a zero-day vulnerability in its VPN solution, the company plans to deploy cloud-hosted resources to replace its current on-premises systems. An engineer must find an appropriate solution to facilitate trusted connectivity. Which of the following capabilities is the most relevant?',
      answer: 'Secure access service edge',
      distractors: [
        'Container orchestration',
        'Microsegmentation',
        'Conditional access'
      ],
      explanation: '',
      questionNumber: 106
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 107
    // },
    {
      question: 'The identity and access management team is sending logs to the SIEM for continuous monitoring. The deployed log collector is forwarding logs to the SIEM. However, only false positive alerts are being generated. Which of the following is the most likely reason for the inaccurate alerts?',
      answer: 'The data is not being properly parsed.',
      distractors: [
        'The compute resources are insufficient to support the SIEM.',
        'The SIEM indexes are too large.',
        'The retention policy is not properly configured.'
      ],
      explanation: '',
      questionNumber: 108
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   link: 'Topic:  #109'
    // },
    {
      question: 'A company acquires a location with a large infrastructure of legacy devices. Because of the hardware\'s age and the legacy software\'s limitations, the OS cannot be upgraded, and the machines cannot be virtualized. These machines are not publicly facing, but they do have internet access. The following controls are currently in place:\n' +
      '• "EDR"\n' +
      '• "Anti-malware"\n' +
      '• "Logging and monitoring"\n' +
      '• "Host-based firewall"\n' +
      '• "Proxied internet access"\n' +
      'A security architect needs to supplement the existing control strategy with one that restricts unauthorized software. Which of the following controls should the architect recommend to best supplement the existing environment?',
      answer: 'Application control',
      distractors: ['SIEM', 'Isolation', 'Conditional access'],
      explanation: '',
      questionNumber: 110
    },
    {
      question: 'An organization wants to create a threat model to identify vulnerabilities in its infrastructure. Which of the following should be prioritized first?',
      answer: 'External-facing infrastructure with known exploited vulnerabilities',
      distractors: [
        'Internal infrastructure with high-severity and known exploited vulnerabilities',
        'External-facing infrastructure with a low risk score and no known exploited vulnerabilities',
        'External-facing infrastructure with a high risk score that can only be exploited with local access to the resource'
      ],
      explanation: '',
      questionNumber: 111
    },
    {
      question: 'A Chief Information Security Officer requests an action plan to remediate vulnerabilities. A security analyst reviews the output from a recent vulnerability scan and notices hundreds of unique vulnerabilities. The output includes the CVSS score, IP address, hostname, and the list of vulnerabilities. The analyst determines more information is needed in order to decide which vulnerabilities should be fixed immediately. Which of the following is the best source for this information?',
      answer: 'Business impact analysis',
      distractors: [
        'Third-party risk review',
        'Incident response playbook',
        'Crisis management plan'
      ],
      explanation: '',
      questionNumber: 112
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 113
    // },
    {
      question: 'A company has a requirement in customer contracts that states applications must undergo external audits to identify vulnerabilities. Which of the following is the best action for the company to complete before hiring an external auditor?',
      answer: 'Conduct an internal audit assessment.',
      distractors: [
        'Gather evidence for the audit.',
        'Identify lessons learned from the audit.',
        'Select samples for audit testing.'
      ],
      explanation: '',
      questionNumber: 114
    },
    {
      question: 'During DAST scanning, applications are consistently reporting code defects in open-source libraries that were used to build web applications. Most of the code defects are from using libraries with known vulnerabilities. The code defects are causing product deployment delays. Which of the following is the best way to uncover these issues earlier in the life cycle?',
      answer: 'Using a software dependency management solution',
      distractors: [
        'Directing application logs to the SIEM for continuous monitoring',
        'Modifying the WAF polices to block against known vulnerabilities',
        'Completing an IAST scan against the web application'
      ],
      explanation: '',
      questionNumber: 115
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: ['', '', ''],
    //   explanation: '',
    //   questionNumber: 116
    // },
    {
      question: 'A developer receives feedback about code quality and efficiency. The developer needs to identify and resolve the following coding issues before submitting the code changes for peer review:\n' +
      '• "Indexing beyond arrays", \n' +
      '• "Dereferencing null pointers", \n' +
      '• "Potentially dangerous data type combos", \n' +
      '• "Unreachable code", \n' +
      '• "Non-portable constructs":\n' +
      'Which of the following would be most appropriate for the developer to use in this situation?',
      answer: 'Linting',
      distractors: ['SBoM', 'DAST', 'Branch protection', 'Software composition analysis'],
      explanation: '',
      questionNumber: 117
    },
    {
      question: 'A company wants to improve and automate the compliance of its cloud environments to meet industry standards. Which of the following resources should the company use to best achieve this goal?',
      answer: 'Ansible',
      distractors: ['Jenkins', 'Python', 'PowerShell'],
      explanation: '',
      questionNumber: 118
    },
    {
      question: 'A company wants to protect against the most common attacks and rapidly integrate with different programming languages. Which of the following technologies is most likely to meet this need?',
      answer: 'RASP',
      distractors: ['Cloud-based IDE', 'DAST', 'NIPS'],
      explanation: '',
      questionNumber: 119
    },
    {
      question: 'An organization is concerned about insider threats from employees who have individual access to encrypted material. Which of the following techniques best addresses this issue?',
      answer: 'Key splitting',
      distractors: ['SSO with MFA', 'Salting and hashing', 'Account federation with hardware tokens', 'SAE'],
      explanation: '',
      questionNumber: 120
    },
    {
      question: 'A manufacturing plant is updating its IT services. During discussions, the senior management team created the following list of considerations:\n' +
      '- "Staff turnover is high and seasonal", \n' +
      '- "Extreme conditions often damage endpoints, "\n' +
      '- "Losses from downtime must be minimized", \n' +
      '- "Regulatory data retention requirements exist" => \n' +
      'Which of the following best addresses the considerations?',
      answer: 'Using a non-persistent virtual desktop interface with thin clients',
      distractors: [
        'Establishing further environmental controls to limit equipment damage',
        'Deploying redundant file servers and configuring database journaling',
        'Maintaining an inventory of spare endpoints for rapid deployment'
      ],
      explanation: '',
      questionNumber: 121
    },
    {
      question: 'A software vendor provides routine functionality and security updates to its global customer base. The vendor would like to ensure distributed updates are authorized, originate from only the company, and have not been modified by others. Which of the following solutions best supports these objectives?',
      answer: 'Code signing',
      distractors: ['Envelope encryption', 'File integrity monitoring', 'Application control'],
      explanation: '',
      questionNumber: 122
    },
    {
      question: 'A security analyst detects a possible RAT infection on a computer in the internal network. After reviewing the details of the alert, the analyst identifies the initial vector of the attack was an email that was forwarded to multiple recipients in the same organizational unit. Which of the following should the analyst do first to minimize this type of threat in the future?',
      answer: 'Implement a security awareness program in the organization.',
      distractors: [
        'Move from an anti-malware software to an EDR solution.',
        'Perform a penetration test to detect technology gaps on the anti-spam solution.',
        'Configure an IPS solution in the internal network to mitigate infections.'
      ],
      explanation: '',
      questionNumber: 123
    },
    {
      question: 'A cloud engineer needs to identify appropriate solutions to: \n=n' +
      '- "Provide secure access to internal and external cloud resources.", \n' +
      '- "Eliminate split-tunnel traffic flows.", \n' +
      '- "Enable identity and access management capabilities." => \n' +
      'Which of the following solutions is the most appropriate?',
      answer: 'SASE',
      distractors: ['Micro-segmentation', 'PAM', 'SD-WAN'],
      explanation: '',
      questionNumber: 124
    },
    {
      question: 'A security engineer is building a solution to disable weak CBC configurations for remote access connections to Linux systems. Which of the following should the security engineer modify?',
      answer: 'The /etc/sshd/ssh_config file, updating the ciphers',
      distractors: [
        'The /etc/openssl.conf file, updating the virtual site parameter',
        'The /etc/nsswitch.conf file, updating the name server',
        'The /etc/hosts file, updating the IP parameter'
      ],
      explanation: '',
      questionNumber: 125
    },
    {
      question: 'A security engineer is reviewing the results of an annual penetration test. The report lists one of the results as "critical severity" on several domain-joined workstations:\n' +
      '"SSL/TLS Weak Protocols Supported TLS 1.0, TLS 1.1" =>\n' +
      'Which of the following should the security engineer implement to remediate this finding in the most centralized manner?',
      answer: 'A GPO to disable weak protocols in the Schannel hive',
      distractors: [
        'An SCCM patch to disable weak protocols in the Schannel hive',
        'A PowerShell script to disable weak protocols in the HKLM Schannel hive',
        'A registry script to disable weak protocols in the Schannel hive'
      ],
      explanation: '',
      questionNumber: 126
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   questionNumber: 127
    // },
    {
      question: 'A company wants to implement a three-tier approach to separate the web, database, and application servers. A security administrator must harden the environment. Which of the following is the best solution?',
      answer: 'Implementing micro-segmentation on the server VLANs',
      distractors: [
        'Deploying a VPN to prevent remote locations from accessing server VLANs',
        'Configuring a SASE solution to restrict users to server communication',
        'Installing a firewall and making it the network core'
      ],
      explanation: '',
      questionNumber: 128
    },
    {
      question: 'A systems administrator wants to use existing resources to automate reporting from disparate security appliances that do not currently communicate. Which of the following is the best way to meet this objective?',
      answer: 'Configuring an API integration to aggregate the different data sets',
      distractors: [
        'Combining back-end application storage into a single, relational database',
        'Purchasing and deploying commercial off-the-shelf aggregation software',
        'Migrating application usage logs to on-premises storage'
      ],
      explanation: '',
      questionNumber: 129
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   questionNumber: 130
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   questionNumber: 131
    // },
    {
      question: 'A financial services organization is using AI to fully automate the process of deciding client loan rates. Which of the following should the organization be most concerned about from a regulatory perspective?',
      answer: 'Model explain ability',
      distractors: [
        'Credential theft',
        'Possible prompt injections',
        'Exposure to social engineering'
      ],
      explanation: '',
      questionNumber: 132
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   questionNumber: 133
    // },
    {
      question: 'A security operations engineer needs to prevent inadvertent data disclosure when encrypted SSDs are reused within an enterprise. Which of the following is the most secure way to achieve this goal?',
      answer: 'Securely deleting the encryption keys used by the SSD',
      distractors: [
        'A security operations engineer needs to prevent inadvertent data disclosure when encrypted SSDs are reused within an enterprise. Which of the following is the most secure way to achieve this goal?',
        'Wiping the SSD through degaussing',
        'Writing non-zero, random data to all cells of the SSD'
      ],
      explanation: '',
      questionNumber: 134
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   questionNumber: 135
    // },
    {
      question: 'A company established a new process for business analysts to receive emails that contain links for purchase requests. The new process requires links to be submitted through new emails. Which of the following is the best way to secure this process without disrupting order fulfillment?',
      answer: 'Deploying a browser isolation solution',
      distractors: [
        'Blocking all potentially malicious links',
        'Enforcing security awareness training',
        'Implementing DNS filtering'
      ],
      explanation: '',
      questionNumber: 136
    },
    {
      question: 'An organization receives OSINT reports about an increase in ransomware targeting fileshares at peer companies. The organization wants to deploy hardening policies to its servers and workstations in order to contain potential ransomware. Which of the following should an engineer do to best achieve this goal?',
      answer: 'Allow only interactive log-in for users on workstations and restrict port 445 traffic to fileshares.',
      distractors: [
        'Enable biometric authentication mechanisms on user workstations and block port 53 traffic.',
        'Instruct users to use a password manager when generating new credentials and secure port 443 traffic.',
        'Give users permission to rotate administrator passwords and deny port 80 traffic.'
      ],
      explanation: '',
      questionNumber: 137
    },
    {
      question: 'A malicious actor exploited firmware vulnerabilities and used rootkits in an attack on an organization. After the organization recovered from the incident, an engineer needs to recommend a solution that reduces the likelihood of the same type of attack in the future. Which of the following is the most relevant solution?',
      answer: 'Implementing measured boot',
      distractors: [
        'Enabling software integrity checks',
        'Installing self-encrypting drives',
        'Configuring host-based encryption'
      ],
      explanation: '',
      questionNumber: 138
    },
    {
      question: 'Which of the following enables the meaningful manipulation of encrypted data when the processor does not know the encryption key?',
      answer: 'Homomorphic encryption',
      distractors: [
        'Simultaneous authentication of equals',
        'Envelope encryption',
        'Authenticated encryption with associated data'
      ],
      explanation: '',
      questionNumber: 139
    },
    // {
    //   question: 'Emails that the marketing department is sending to customers are going to the customers’ spam folders. The security team is investigating the issue and discovers that the certificates used by the email server were reissued, but DNS records had not been updated. Which of the following should the security team update in order to fix this issue? (Choose three.)',
    //   answer: ['DMARC', 'SPF', 'DKIM'],
    //   distractors: ['DNSSEC', 'SASE', 'SAN', 'SOA', 'MX'],
    //   explanation: '',
    //   questionNumber: 140
    // },
    {
      question: 'A security engineer performed a code scan that resulted in many false positives. The security engineer must find a solution that improves the quality of scanning results before application deployment. Which of the following is the best solution?',
      answer: 'Limiting the tool to a specific coding language and tuning the rule set',
      distractors: [
        'Performing updates on code libraries before code development',
        'Configuring branch protection rules and dependency checks',
        'Using an application vulnerability scanner to identify coding flaws in production'
      ],
      explanation: '',
      questionNumber: 141
    },
    {
      question: 'A global company with a remote workforce implemented a new VPN solution. After deploying the VPN solution to several hundred users, the help desk starts receiving reports of slow access to both internally and externally available applications. A security analyst reviews the following:\n' +
      'VPN client routing:\n' +
      '"0.0.0.0/0 eth1"\n' +
      'Which of the following solutions should the analyst use to fix this issue?',
      answer: 'Enable split tunneling.',
      distractors: [
        'Move the servers to a screened subnet.',
        'Configure an NAC solution.',
        'Implement DNS over HTTPS.'
      ],
      explanation: '',
      link: 'Topic: '
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 143
    // },
    {
      question: 'An organization determined its preparedness for a ransomware attack is inadequate. A security administrator is working on ways to improve and monitor the organization\'s response to ransomware attacks. Which of the following is the best action for the administrator to take?',
      answer: 'Conduct backup testing.',
      distractors: [
        'Define the recovery point objective.',
        'Perform a business impact analysis.',
        'Verify the encryption key length.'
      ],
      explanation: '',
      questionNumber: 144
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 145
    // },
    {
      question: 'A security engineer must integrate device attestation into user authentication and authorization workflows for mobile devices. Which of the following best meets the requirements?',
      answer: 'Configuring device profiling for patch level and jailbreak status',
      distractors: [
        'Enforcing a security boundary for all devices outside the perimeter network',
        'Enabling multifactor authentication using biometrics on access attempts',
        'Implementing single sign-on to centralize access control enforcement'
      ],
      explanation: '',
      questionNumber: 146
    },
    {
      question: 'An organization is developing an AI-enabled digital worker to help employees complete common tasks, such as template development, editing, research, and scheduling. As part of the AI workload, the organization wants to implement guardrails within the platform. Which of the following should the company do to secure the AI environment?',
      answer: 'Limit the platform\'s abilities to only non-sensitive functions.',
      distractors: [
        'Enhance the training model\'s effectiveness.',
        'Grant the system the ability to self-govern.',
        'Require end-user acknowledgement of organizational policies.'
      ],
      explanation: '',
      questionNumber: 147
    },
    {
      question: 'A security analyst discovered requests associated with IP addresses known for both legitimate and bot-related traffic. Which of the following should the analyst use to determine whether the requests are malicious?',
      answer: 'User-agent string',
      distractors: [
        'Byte length of the request',
        'Web application headers',
        'HTML encoding field'
      ],
      explanation: '',
      questionNumber: 148
    },
    {
      question: 'A security analyst received a report that an internal web page is down after a company-wide update to the web browser. Given the following error message:\n' +
      'Your connection is not private.\n' +
      'Attackers might be trying to steal your information for www. internalwebsite.company.com.\n' +
      '"NET::ERR_CERT_WEAK_SIGNATURE_ALGORITHM"\n' +
      'Which of the following is the best way to fix this issue?',
      answer: 'Disabling all deprecated ciphers',
      distractors: [
        'Rewriting any legacy web functions',
        'Blocking all non-essential ports',
        'Discontinuing the use of self-signed certificates'
      ],
      explanation: '',
      questionNumber: 149
    },
    {
      question: 'A company receives reports about misconfigurations and vulnerabilities in a third-party hardware device that is part of its released products. Which of the following solutions is the best way for the company to identify possible issues at an earlier stage?',
      answer: 'Implementing a proper supply chain risk management program',
      distractors: [
        'Performing vulnerability tests on each device delivered by the providers',
        'Performing regular red-team exercises on the vendor production line',
        'Implementing a monitoring process for the integration between the application and the vendor appliance'
      ],
      explanation: '',
      questionNumber: 150
    },
    {
      question: 'A company implemented a new NAC solution based on 802.1X. However, the IT support team notices that some devices are not being enrolled in the new policies, causing access disruptions for key users. Which of the following solutions will most likely solve this issue and prevent reoccurrence?',
      answer: 'Include the monitoring agent and digital certificate as part of the patching/updating program, keeping all the corporate devices updated and enrolled.',
      distractors: [
        'Check whether the certificate is signed by a certification authority and manually deployed to each device.',
        'Check all the devices without proper access, enrolling them via the solution agent and authenticating to the network.',
        'Implement default credentials to automate RADIUS authentication and grant access to the network if the device owner is an employee.'
      ],
      explanation: '',
      questionNumber: 151
    },
    {
      question: 'While performing threat-hunting functions, an analyst is using the Diamond Model of Intrusion Analysis. The analyst identifies the likely adversary, the infrastructure involved, and the target. Which of the following must the threat hunter document to use the model effectively?',
      answer: 'Capabilities',
      distractors: [
        'Knowledge',
        'Phase',
        'Methodologies'
      ],
      explanation: '',
      questionNumber: 152
    },
    {
      question: 'A systems administrator needs to improve the security assurance in a company\'s cloud storage environment. The administrator determines that the best approach is to identify whether any data has been maliciously or inadvertently modified. Which of the following techniques should the systems administrator periodically use?',
      answer: 'Hashing',
      distractors: [
        'Interference',
        'Antitampering',
        'Journaling'
      ],
      explanation: '',
      questionNumber: 153
    },
    {
      question: 'A security engineer wants to enhance the security posture of end-user systems in a zero trust environment. Given the following requirements:\n' +
      '• Reduce the ability for potentially compromised endpoints to contact C2 infrastructure.\n' +
      '• Track the requests that the malware makes to the IPs.\n' +
      '• Avoid the download of additional payloads.\n' +
      'Which of the following should the engineer deploy to meet these requirements?',
      answer: 'DNS sinkholing',
      distractors: [
        'Browser isolation',
        'Zone transfer protection',
        'HIDS'
      ],
      explanation: '',
      questionNumber: 154
    },
    {
      question: 'Developers have been creating and managing cryptographic material on their personal laptops for use in the production environment. A security engineer needs to initiate a more secure process. Which of the following is the best strategy for the engineer to use?',
      answer: 'Managing key material on a HSM',
      distractors: [
        'Disabling the BIOS and moving to UEFI',
        'Managing secrets on the vTPM hardware',
        'Employing shielding to prevent EMI'
      ],
      explanation: '',
      questionNumber: 155
    },
    {
      question: 'A nation-state actor is exposed for attacking large corporations by establishing persistence in smaller companies that are likely to be acquired by these large corporations. The actor then provisions user accounts in the companies for use post-acquisition. Before an upcoming acquisition, a security officer conducts threat modeling with this attack vector. Which of the following practices is the best way to investigate this threat?',
      answer: 'Comparing all existing credentials to personnel and services',
      distractors: [
        'Restricting internet traffic originating from countries in which the nation-state actor is known to operate',
        'Auditing vendors to mitigate supply chain risk during the acquisition',
        'Placing a hold on all information about corporate interest in acquisitions'
      ],
      explanation: '',
      questionNumber: 156
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 157
    // },
    {
      question: 'An organization is required to:\n' +
      '• Respond to internal and external inquiries in a timely manner.\n' +
      '• Provide transparency.\n' +
      '• Comply with regulatory requirements.\n' +
      'The organization has not experienced any reportable breaches but wants to be prepared if a breach occurs in the future. Which of the following is the best way for the organization to prepare?',
      answer: 'Developing communication templates that have been vetted by internal and external counsel',
      distractors: [
        'Outsourcing the handling of necessary regulatory filings to an external consultant',
        'Integrating automated response mechanisms into the data subject access request process',
        'Conducting lessons-learned activities and integrating observations into the crisis management plan'
      ],
      explanation: '',
      questionNumber: 158
    },
    {
      question: 'An incident response team is analyzing malware and observes the following:\n' +
      '- Does not execute in a sandbox\n' +
      '- No network IoCs\n' +
      '- No publicly known hash match\n' +
      '- No process injection method detected\n\n' +
      'Which of the following should the team do next to proceed with further analysis?',
      answer: 'Check for an anti-virtualization code in the sample.',
      distractors: [
        'Use an online virus analysis tool to analyze the sample.',
        'Utilize a new deployed machine to run the sample.',
        'Search other internal sources for a new sample.'
      ],
      explanation: '',
      questionNumber: 159
    },
    {
      question: 'Which of the following best explains the business requirement a healthcare provider fulfills by encrypting patient data at rest?',
      answer: 'Protecting privacy while supporting portability',
      distractors: [
        'Securing data transfer between hospitals',
        'Providing for non-repudiation of data',
        'Reducing liability from identity theft'
      ],
      explanation: '',
      questionNumber: 160
    },
    {
      question: 'A security engineer is implementing security measures on new hardware in preparation for its launch. During the development phase, a risk related to protections at the UEFI level was found. Which of the following should the engineer recommend to reduce this risk?',
      answer: 'Enabling Secure Boot',
      distractors: [
        'Configuring paravirtualization protection',
        'Installing cryptography at the operational system level',
        'Implementing hardware root of trust'
      ],
      explanation: '',
      questionNumber: 161
    }
  ]};

export default securityQuiz;

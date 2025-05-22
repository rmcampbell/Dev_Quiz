import imageMap from '../../assets.ts';

const base = './images/CAS-005_';
// TODO: Optimize image loading/rendering
const imgPath = (num: number|string) => {
  let numStr = num;
  if (typeof num === 'number') {
    numStr = num.toString().padStart(3, '0');
  }

  return imageMap?.[`${base}${numStr}.webp`] || imageMap?.[`${base}${numStr}.png`];
};

const securityQuiz = {
  category: 'SecurityX',
  questions: [
    {
      question: 'A security engineer is reviewing event logs because an employee successfully connected a personal Windows laptop to the corporate network, which is against company policy. Company policy allows all Windows 10 and 11 laptops to connect to the system as long as the MDM agent installed by IT is running. Only compliant devices can connect, and the logic in the system to evaluate compliant laptops is as follows:\n\n' +
        `![Question](${imgPath(1)})\n\n` +
        'Which of the following most likely occurred when the employee connected a personally owned Windows laptop and was allowed on the network?',
      answer: 'The OS was running a Windows version below 10 and triggered a false negative',
      distractors: [
        'The agent was not running on the laptop, which triggered a false positive',
        'The OS was a valid version, but the MDM agent was not installed, triggering a true positive',
        'The OS version was higher than 11, and the MDM agent was running, triggering a true negative'
      ],
      explanation: '',
      questionNumber: 1
    },
    {
      question: 'An organization is working to secure its development process to ensure developers cannot deploy artifacts directly into the production environment. Which of the following security practice recommendations would be the best to accomplish this objective?',
      answer: 'Set up policies and systems with separation of duties',
      distractors: [
        'Implement least privilege access to all systems',
        'Roll out security awareness training for all users',
        'Enforce job rotations for all developers and administrators',
        'Utilize mandatory vacations for all developers',
        'Review all access to production systems on a quarterly basis'
      ],
      explanation: '2',
      questionNumber: 2
    },
    {
      question: `A security architect discovers the following while reviewing code for a company's website:\n` +
        '`selection = "SELECT Item FROM Catalog WHERE ItemID = " & Request("ItemID")`\n\n' +
      'Which of the following should the security architect recommend?',
      answer: 'Query parameterization',
      distractors: [
        'Client-side processing',
        'Data normalization',
        'Escape character blocking',
        'URL encoding'
      ],
      explanation: '3',
      questionNumber: 3
    },
    {
      question: 'A security architect needs to enable a container orchestrator for DevSecOps and SOAR initiatives. The engineer has discovered that several Ansible YAML files used for the automation of configuration management have the following content:\n\n' +
        `![Question](${imgPath(4)})\n\n` +
        'Which of the following should the engineer do to correct the security issues presented within this content?',
      answer: 'Update or remove the ansible.cfg file',
      distractors: [
        'Update the kubernetes.core.k8s module to kubernetes.core.k8s_service in the main.yml file',
        'Update the COMPTIA001 hostname to localhost using the hostnamectl command',
        'Update the state: present module to state: absent in the main.yml file',
        'Update the insecure-bind-address from localhost to the COMPTIA001 in the manifests file'
      ],
      explanation: '4',
      questionNumber: 4
    },
    {
      question: 'A CRM company leverages a CSP PaaS service to host and publish Its SaaS product. Recently, a large customer requested that all infrastructure components must meet strict regulatory requirements, including configuration management, patch management, and life-cycle management. Which of the following organizations is responsible for ensuring those regulatory requirements are met?',
      answer: 'The CRM company',
      distractors: [`The CRM company's customer`, 'The CSP', 'The regulatory body'],
      explanation: '5',
      questionNumber: 5
    },
    {
      question: 'Company A is merging with Company B. Company A is a small, local company. Company B has a large, global presence. The two companies have a lot of duplication in their IT systems, processes, and procedures. On the new Chief Information Officer\'s (CIO\'s) first day, a fire breaks out at Company B\'s main data center. Which of the following actions should the CIO take first?',
      answer: 'Review the incident response plans, and engage the disaster recovery plan while relying on the IT leaders from both companies',
      distractors: [
        'Determine whether the incident response plan has been tested at both companies, and use it to respond',
        `Ensure hot, warm, and mobile disaster recovery sites are available, and give an update to the companies' leadership teams`,
        `Initiate Company A's IT systems processes and procedures, assess the damage, and perform a BIA`
      ],
      explanation: '6',
      questionNumber: 6
    },
    {
      question: 'The results of an internal audit indicate several employees reused passwords that were previously included in a published list of compromised passwords.\n' +
        'The company has the following employee password policy:\n\n' +
        `![Question](${imgPath(7)})\n\n` +
        'Which of the following should be implemented to best address the password reuse issue?',
      answer: ['Increase the minimum age to two days', 'Increase the history to 20'],
      distractors: [
        'Increase the character length to 12',
        'Add case-sensitive requirements to character class',
        'Decrease the maximum age to 30 days',
        'Remove the complexity requirements',
        'Increase the maximum age to 120 days'
      ],
      explanation: '',
      questionNumber: 7
    },
    {
      question: 'A mobile administrator is reviewing the following mobile device DHCP logs to ensure the proper mobile settings are applied to managed devices:\n\n' +
        `![Question 8](${imgPath(8)})\n\n` +
        'Which of the following mobile configuration settings is the mobile administrator verifying?',
      answer: 'Association MAC address randomization',
      distractors: [
        'Service set identifier authentication',
        'Wireless network auto joining',
        '802.1X with mutual authentication'
      ],
      explanation: '8',
      questionNumber: 8
    },
    {
      question: 'A security analyst is investigating a possible insider threat incident that involves the use of an unauthorized USB from a shared account to exfiltrate data. The event did not create an alert. The analyst has confirmed the USB hardware ID is not on the device allow list, but has not yet confirmed the owner of the USB device. Which of the following actions should the analyst take next?',
      answer: 'Classify the incident as a false negative',
      distractors: [
        'Classify the incident as a false positive',
        'Classify the incident as a true positive',
        'Classify the incident as a true negative'
      ],
      explanation: '9',
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
      explanation: '(10) Non-repudiation: This means the sender cannot deny sending the message, because the digital signature proves the email came from them and was not altered in transit.',
      questionNumber: 10
    },
    {
      question: 'A software development company wants to ensure that users can confirm the software is legitimate when installing it. Which of the following is the best way for the company to achieve this security objective?',
      answer: 'Code signing',
      distractors: ['Non-repudiation', 'Key escrow', 'Private keys'],
      explanation: 'Code signing uses a digital signature to verify that software has: Come from a trusted source (authenticity). Not been altered since it was signed (integrity). This allows users to confirm the software is legitimate during installation.',
      questionNumber: 11
    },
    {
      question: 'While performing mandatory monthly patch updates on a production application server, the security analyst reports an instance of buffer overflow for a new application that was migrated to the cloud and is also publicly exposed. Security policy requires that only internal users have access to the application. Which of the following should the analyst implement to mitigate the issues reported?',
      answer: [
        'Configure firewall rules to block all external traffic',
        'Enable input validation for all fields'
      ],
      distractors: [
        'Enable automatic updates to be installed on all servers',
        'Configure the security group to enable external traffic',
        'Set up a DLP policy to alert for exfiltration on all application servers',
        'Enable nightly vulnerability scans'
      ],
      explanation: 'A. Configure firewall rules to block all external traffic -> This Restricts access so only internal users can connect, aligning with policy. B. Enable input validation for all fields -> Input validation is critical to prevent buffer overflow and other injection attacks.',
      questionNumber: 12
    },
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
    {
      question: 'Which of the following best explain why organizations prefer to utilize code that is digitally signed?',
      answer: ['It provides origin assurance', 'It verifies integrity'],
      distractors: [
        'It provides increased confidentiality',
        'It integrates with DRMs',
        `It verifies the recipient's identity`,
        'It ensures the code is free of malware'
      ],
      explanation: 'Digitally signed code uses cryptographic techniques to: Provide origin assurance – Confirms the software came from a trusted, verified publisher. Verify integrity – Ensures the code has not been modified or tampered with after it was signed. These are the two main security benefits of digital code signing.',
      questionNumber: 16
    },
    {
      question: `A security engineer receives reports through the organization's bug bounty program about remote code execution in a specific component in a custom application. Management wants to properly secure the component and proactively avoid similar issues. Which of the following is the best approach to uncover additional vulnerable paths in the application?`,
      answer: 'Use fuzz testing to uncover potential vulnerabilities in the application',
      distractors: [
        'Leverage an exploitation framework to uncover vulnerabilities',
        'Utilize a software composition analysis tool to report known vulnerabilities',
        'Reverse engineer the application to look for vulnerable code paths',
        'Analyze the use of an HTTP intercepting proxy to dynamically uncover issues'
      ],
      explanation: 'Fuzz testing (fuzzing) is a proactive dynamic application security testing technique where the system is bombarded with random, malformed, or unexpected inputs to discover: "Buffer overflows", "Input validation issues", "Memory corruption", "Remote code execution flaws". Since the report is about remote code execution, fuzzing is ideal to uncover other vulnerable paths in the same component or similar logic areas.',
      questionNumber: 17
    },
    {
      question: 'A security technician is investigating a system that tracks inventory via a batch update each night. The technician is concerned that the system poses a risk to the business, as errors are occasionally generated and reported inventory appears incorrect. The following output log is provided:\n\n' +
        `![Question 18](${imgPath(18)})\n\n` +
        'The technician reviews the output of the batch job and discovers that the inventory was never less than zero, and the final inventory was 100 rather than 60. Which of the following should the technician do to resolve this issue?',
      answer: 'Require the developers to include exception handlers to accommodate out-of-bounds results',
      distractors: [
        'Ensure that the application is using memory-safe functions to prevent integer overflows',
        'Recommend thread-safe processes in the code to eliminate race conditions',
        'Move the batch processing from client side to server side to remove client processing inconsistencies'
      ],
      explanation: '',
      questionNumber: 18
    },
    {
      question: 'A programmer is reviewing the following proprietary piece of code that was identified as a vulnerability due to users being authenticated when they provide incorrect credentials:\n\n' +
        `![Question 19](${imgPath(19)})\n\n` +
        'Which of the following should the programmer implement to remediate the code vulnerability?',
      answer: 'Input validation in the first two lines of code',
      distractors: [
        'Salted hashing via the proprietary SHASH function',
        'Atomic execution of subroutines',
        'TOCTOU remediation in SET USERACL',
        'Database connection over encrypted channels'
      ],
      explanation: '',
      questionNumber: 19
    },
    {
      question: 'A senior cybersecurity engineer is solving a digital certificate issue in which the CA denied certificate issuance due to failed subject identity validation. At which of the following steps within the PKI enrollment process would the denial have occurred?',
      answer: 'RA',
      distractors: ['OCSP', 'IdP', 'CA'],
      explanation: 'RA (✅ Correct Answer): Verifies the subject’s identity during enrollment. CA: Issues or denies certificates, but relies on the RA for identity validation. If the RA fails the subject, the CA doesn’t proceed. OCSP: Checks revocation status of an already issued certificate. Not part of the issuance process. IdP (Identity Provider): Used in federated identity or SSO systems, not standard PKI enrollment.',
      questionNumber: 20
    },
    {
      question: 'An internal user can send encrypted emails successfully to all recipients, except one. at an external organization. When the internal user attempts to send encrypted emails to this external recipient, a security error message appears. The issue does not affect unencrypted emails. The external recipient can send encrypted emails to internal users. Which of the following is the most likely cause of the issue?',
      answer: `The external recipient's email address and the email address associated with the external recipient's public key are mismatched`,
      distractors: [
        'The validity dates of the external recipient’s private key do not match the SSH keys with which the internal user is accessing the system',
        'The external recipient has an expired public/private key pair that has not been revoked by the CA',
        `The internal user's company email servers have an incorrect implementation of OCSP and CRL settings`
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
      answer: 'Review NetFlow logs for unexpected increases in egress traffic',
      distractors: [
        'Monitor for IoCs associated with C&C communications',
        'Tune alerts to Identify changes to administrative groups',
        'Perform binary hash comparisons to identify infected devices'
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
    {
      question: 'A company that provides services to clients who work with highly sensitive data would like to provide assurance that the data\'s confidentiality is maintained in a dynamic, low-risk environment. Which of the following would best achieve this goal?',
      answer: [
        'Encrypt all data and files at rest, in transit, and in use',
        'Implement file integrity monitoring'
      ],
      distractors: [
        'Install a SOAR on all endpoints',
        'Hash all files',
        'Install SIEM within a SOC',
        'Configure SOAR to monitor and intercept files and data leaving the network'
      ],
      explanation: '',
      questionNumber: 28
    },
    {
      question: 'An organization wants to implement an access control system based on its data classification policy that includes the following data types: \n\n' +
        '`- Confidential`\n\n' +
        '`- Restricted`\n\n' +
        '`- Internal`\n\n' +
        '`- Public Flag for Review`\n\n' +
        'The access control system should support SSO federation to map users into groups. Each group should only access systems that process and store data at the classification assigned to the group.\n\n' +
        'Which of the following should the organization implement to enforce its requirements with a minimal impact to systems and resources?',
      answer: 'A tagging strategy in which all resources are assigned a tag based on the data classification type, and a system that enforces attribute-based access control',
      distractors: [
        `Role-based access control that maps data types to internal roles, which are defined in the human resources department's source of truth system`,
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
      question: `The company's client service team is receiving a large number of inquiries from clients regarding a new vulnerability. Which of the following would provide the customer service team with a consistent message to deliver directly to clients?`,
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
    {
      question: 'An incident response team completed recovery from offline backup for several workstations. The workstations were subjected to a ransomware attack after users fell victim to a spear-phishing campaign, despite a robust training program. Which of the following questions should be considered during the lessons-learned phase to most likely reduce the risk of reoccurrence?',
      answer: [
        'What measurable user behaviors were exhibited that contributed to the compromise?',
        'Which technical controls, if implemented, would provide defense when user training fails?'
      ],
      distractors: [
        'Are there opportunities for legal recourse against the originators of the spear-phishing campaign?',
        'What internal and external stakeholders need to be notified of the breach?',
        'Which methods can be implemented to increase speed of offline backup recovery?',
        'Which user roles are most often targeted by spear phishing attacks?'
      ],
      explanation: '',
      questionNumber: 34
    },
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
      distractors: ['Horizontal scalability', 'Vertical scalability', 'Containerization', 'Static code analysis'],
      explanation: '',
      questionNumber: 37
    },
    {
      question: `An organization's board of directors has asked the Chief Information Security Officer to build a third-party management program. Which of the following best explains a reason for this request?`,
      answer: 'Supply chain visibility',
      distractors: ['Risk transference', 'Support availability', 'Vulnerability management'],
      explanation: '',
      questionNumber: 38
    },
    {
      question: `A company is rewriting a vulnerable application and adding the mprotect() system call in multiple parts of the application's code that was being leveraged by a recent exploitation tool. Which of the following should be enabled to ensure the application can leverage the new system call against similar attacks in the future?`,
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
      answer: 'They are constrained by available compute',
      distractors: ['They lack x86-64 processors', 'They lack EEPROM', 'They are not logic-bearing devices'],
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
      question: `A security architect wants to ensure a remote host's identity and decides that pinning the X.509 certificate to the device is the most effective solution. Which of the following must happen first?`,
      answer: 'Use an out-of-band method to obtain the certificate',
      distractors: [
        'Use Distinguished Encoding Rules (DER) for the certificate',
        'Extract the private key from the certificate',
        'Compare the retrieved certificate with the embedded certificate'
      ],
      explanation: '',
      questionNumber: 44
    },
    {
      question: 'A company hired a third-party consultant to run a cybersecurity incident simulation in order to identify security gaps and prepare stakeholders for a potential incident. Which of the following best describes this activity?',
      answer: 'Tabletop exercise',
      distractors: ['Walk-through review', 'Lessons learned', 'Business impact analysis'],
      explanation: '',
      questionNumber: 45
    },
    {
      question: 'A security officer is requiring all personnel working on a special project to obtain a security clearance requisite with the level of all information being accessed. Data on this network must be protected at the same level of each clearance holder. The need to know must be verified by the data owner. Which of the following should the security officer do to meet these requirements?',
      answer: 'Assign labels to the files and require formal access authorization',
      distractors: [
        'Create a rule to authorize personnel only from certain IPs to access the files',
        'Assign attributes to each file and allow authorized users to share the files',
        'Assign roles to users and authorize access to files based on the roles'
      ],
      explanation: '',
      questionNumber: 46
    },
    {
      question: 'A security team receives alerts regarding impossible travel and possible brute-force attacks after normal business hours. After reviewing more logs, the team determines that specific users were targeted and attempts were made to transfer data to an unknown site. Which of the following should the team do to help mitigate these issues?',
      answer: 'Restrict uploading activity to only authorized sites',
      distractors: [
        'Create a firewall rule to prevent those users from accessing sensitive data',
        'Enable packet captures to continue to run for the source and destination related to the file transfer',
        'Disable login activity for those users after business hours'
      ],
      explanation: '',
      questionNumber: 47
    },
    {
      question: 'A company recently acquired a SaaS company and performed a gap analysis. The results of the gap analysis Indicate security controls are absent throughout the SDLC and have led to several vulnerable production releases. Which of the following security tools best reduces the risk of vulnerable code being pushed to production in the future?',
      answer: 'Static application security testing',
      distractors: ['Regression testing', 'Code signing', 'Sandboxing'],
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
    {
      question: 'A security analyst is using data provided from a recent penetration test to calculate CVSS scores to prioritize remediation. Which of the following metric groups would the analyst need to determine to get the overall scores?',
      answer: ['Temporal', 'Base', 'Environmental'],
      distractors: [
        'Availability',
        'Integrity',
        'Confidentiality',
        'Impact',
        'Attack vector'
      ],
      explanation: '',
      questionNumber: 50
    },
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
      answer: 'Deploy an agent',
      distractors: ['Use a SCAP scanner', 'Initiate a discovery scan', 'Perform an Nmap scan'],
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
      question: 'The principal security analyst for a global manufacturer is investigating a security incident related to abnormal behavior in the ICS network. A controller was restarted as part of the troubleshooting process, and the following issue was identified when the controller was restarted:\n\n' +
      '`- SECURE BOOT FAILED:`\n\n' +
      '`- FIRMWARE MISMATCH EXPECTED UXFDC479 ACTUAL 0x79F31B`\n\n' +
      'During the investigation, this modified firmware version was identified on several other controllers at the site. The official vendor firmware versions do not have this checksum.\n\nWhich of the following stages of the `MITRE ATT&CK framework` for ICS includes this technique?',
      answer: 'Persistence',
      distractors: ['Evasion', 'Collection', 'Lateral movement'],
      explanation: '',
      questionNumber: 54
    },
    {
      question: 'A web service provider has just taken on a very large contract that comes with requirements that are currently not being implemented. In order to meet contractual requirements, the company must achieve the following thresholds:\n\n' +
        '`- 99.99% uptime`\n\n' +
        '`- Load time in 3 seconds`\n\n' +
        '`- Response time = <1.0 seconds`\n\n' +
        'Starting with the computing environment, which of the following should a security engineer recommend to best meet the requirements?',
      answer: [
        'Deploying a content delivery network',
        'Lowering storage input/output',
        'Implementing server clusters'
      ],
      distractors: [
        'Installing a firewall at corporate headquarters',
        'Employing bare-metal loading of applications',
        'Implementing RAID on the backup servers',
        'Utilizing redundant power for all developer workstations'
      ],
      explanation: '55',
      questionNumber: 55
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
      answer: 'The IKE hashing algorithm uses different key lengths on each VPN device',
      distractors: [
        'The remote VPN is attempting to connect with a protocol other than SSL/TLS',
        'The IPSec settings allow more than one cipher suite on both devices',
        'The Diffie-Hellman group on both sides matches but is a legacy group'
      ],
      explanation: '',
      questionNumber: 61
    },
    {
      question: 'A security analyst received the following finding from a cloud security assessment tool:\n\n' +
        '`- Virtual Machine Data Disk is encrypted with the default encryption key.`\n\n' +
        'Because the organization hosts highly sensitive data files, regulations dictate it must be encrypted so It is unreadable to the CSP. Which of the following should be implemented to remediate the finding and meet the regulatory requirement?',
      answer: ['Disk encryption with customer-provided keys', 'File-level encryption with customer-provided keys'],
      distractors: [
        'Disk encryption with keys from a third party',
        'Row-level encryption with a key escrow',
        'File-level encryption with cloud vendor-provided keys',
        'Disk-level encryption with a cross-signed certificate'
      ],
      explanation: '',
      questionNumber: 62
    },
    {
      question: `A security analyst discovers a new device on the company's dedicated IoT subnet during the most recent vulnerability scan. The scan results show numerous open ports and insecure protocols in addition to default usernames and passwords. A camera needs to transmit video to the security server in the IoT subnet. Which of the following should the security analyst recommend to securely operate the camera?`,
      answer: 'Harden the camera configuration',
      distractors: ['Send camera logs to the SIEM', `Encrypt the camera's video stream`, 'Place the camera on an isolated segment'],
      explanation: '63',
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
      question: 'A security engineer would like to control configurations on mobile devices while fulfilling the following requirements:\n\n' +
        '`- Support and control Apple and Android devices.`\n\n' +
        '`- The device must be corporate-owned.`\n\n' +
        'Which of the following would enable the engineer to meet these requirements?',
      answer: ['Implement an MDM solution', 'Update policy to prohibit the use of BYOD devices'],
      distractors: [
        'Create a group policy to lock down mobile devices',
        'Update verbiage in the acceptable use policy for the internet',
        'Implement a captive portal solution',
        'Implement a RADIUS solution'
      ],
      explanation: '',
      questionNumber: 65
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
      answer: 'Create an organizational risk register for project prioritization',
      distractors: ['Accept the risk as the cost of doing business', 'Purchase insurance to offset the cost if a failure occurred', 'Implement network compensating controls'],
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
      question: `A security architect recommends replacing the company's monolithic software application with a containerized solution. Historically, secrets have been stored in the application's configuration files. Which of the following changes should the security architect make in the new system?`,
      answer: 'Use a secrets management tool',
      distractors: ['Save secrets in key escrow', 'Store the secrets inside the Dockerfiles', 'Run all Dockerfiles in a randomized namespace'],
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
      question: `A help desk technician is troubleshooting an issue with an employee's laptop that will not boot into its operating system. The employee reported the laptop had been stolen but then found it one day later. The employee has asked the technician for help recovering important data. The technician has identified the following:\n\n` +
      'The laptop operating system was not configured with BitLocker.\n\n' +
      'The hard drive has no hardware failures.\n\n' +
      'Data is present and readable on the hard drive, although it appears to be illegible.\n\n' +
      'Which of the following is the most likely reason the technician is unable to retrieve legible data from the hard drive?',
      answer: 'The hard drive experienced crypto-shredding',
      distractors: [
        'The technician is using the incorrect cipher to read the data',
        'The PKI certificate was revoked, and a new one must be installed',
        `The employee's password was changed, and the new password needs to be used`
      ],
      explanation: '74',
      questionNumber: 74
    },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 75
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 76
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 77
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 78
    // },
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [],
    //   explanation: '',
    //   questionNumber: 79
    // },
    {
      question: 'A security administrator needs to automate alerting. The server generates structured log files that need to be parsed to determine whether an alarm has been triggered. Given the following code function:\n\n' +
        `![Question 80](${imgPath(80)})\n\n` +
        'Which of the following is most likely the log input that the code will parse?',
      answer: '["error_log"] ["system_1"] ["InAlarmState": True]',
      distractors: [
        '<"error_log"><"system_1">',
        'error_log: - system_1: InAlarmState: True',
        '<"error_log": {"system_1": {"InAlarmState": True }}}'
      ],
      explanation: '80',
      questionNumber: 80
    },
    {
      question: 'A financial technology firm works collaboratively with business partners in the industry to share threat intelligence within a central platform. This collaboration gives partner organizations the ability to obtain and share data associated with emerging threats from a variety of adversaries. Which of the following should the organization most likely leverage to facilitate this activity?',
      answer: ['STIX', 'TAXII'],
      distractors: ['CWPP', 'YARA', 'ATT&CK', 'JTAG'],
      explanation: '',
      questionNumber: 81
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
      question: 'A security analyst reviews the following report:\n\n' +
        `![Question 84](${imgPath(84)})\n\n` +
        'Which of the following assessments is the analyst performing?',
      answer: 'Supply chain',
      distractors: ['System', 'Quantitative', 'Organizational'],
      explanation: '84',
      questionNumber: 84
    },
    {
      question: 'A security researcher tells a company that one of its solutions is vulnerable to buffer overflow, leading to a malicious coding execution. Which of the following is the best way to avoid this vulnerability in future versions?',
      answer: 'Using SAST tools to find vulnerabilities as part of the pipeline',
      distractors: [
        'Testing for CSRF vulnerabilities before the application goes to production',
        'Implementing pair programming to improve development capabilities',
        'Implementing canary protection in an earlier life-cycle stage'
      ],
      explanation: '85',
      questionNumber: 85
    },
    {
      question: 'Users are experiencing a variety of issues when trying to access corporate resources. Examples include:\n\n' +
        '`- Connectivity issues between local computers and file servers between branch offices`\n\n' +
        '`- Inability to download corporate applications on mobile endpoints while working remotely`\n\n' +
        '`- Certificate errors when accessing internal web applications`\n\n' +
        'Which of the following actions are the most relevant when troubleshooting the reported issues?',
      answer: [
        'Review VPN throughput',
        'Validate MDM asset compliance'
      ],
      distractors: [
        'Check IDS rules',
        'Restore static content on the CDN',
        'Enable secure authentication using NAC',
        'Implement advanced WAF rules'
      ],
      explanation: '86',
      questionNumber: 86
    },
    {
      question: 'A network engineer recorded the following test results:\n\n' +
        `![Question 87](${imgPath('087_1')})\n\n` +
        'After a new network security appliance was deployed, the results of the network test are as follows:\n\n' +
        `![Question 87](${imgPath('087_2')})\n\n` +
        'Which of the following network infrastructure components most likely produced these results?',
      answer: 'IPS',
      distractors: ['CDN', 'VPN', 'IDS'],
      explanation: '87',
      questionNumber: 87
    },
    {
      question: 'A developer needs to improve the cryptographic strength of a password-storage component in a web application without completely replacing the crypto-module. Which of the following is the most appropriate technique?',
      answer: 'Key stretching',
      distractors: ['Key encryption', 'Key rotation', 'Key escrow', 'Key splitting'],
      explanation: '88',
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
      answer: 'Encryption systems based on large prime numbers will be vulnerable to exploitation',
      distractors: [
        'Quantum computers will enable malicious actors to capture IP traffic in real time',
        'Zero Trust security architectures will require homomorphic encryption',
        'Perfect forward secrecy will prevent deployment of advanced firewall monitoring techniques'
      ],
      explanation: '90',
      questionNumber: 90
    },
    {
      question: 'A company is adopting microservice architecture in order to quickly remediate vulnerabilities and deploy to production. All of the microservices run on the same Linux platform. Significant time was spent updating the base OS before deploying code. Which of the following should the company do to make the process efficient?',
      answer: 'Use Terraform scripts while creating golden images',
      distractors: [
        'Create a cron job to run apt-update every 30 days',
        'Deploy a centralized update server',
        'Use snapshots to deploy code to existing compute instances'
      ],
      explanation: 'Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually. Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually.',
      questionNumber: 91
    },
    {
      question: `During a gap assessment, an organization notes that BYOD usage is a significant risk. The organization implemented administrative policies prohibiting BYOD usage. However, the organization has not implemented technical controls to prevent the unauthorized use of BYOD assets when accessing the organization's resources. Which of the following solutions should the organization implement to best reduce the risk of BYOD devices?`,
      answer: [
        'Conditional access, to enforce user-to-device binding',
        'NAC, to enforce device configuration requirements'
      ],
      distractors: [
        'Cloud IAM, to enforce the use of token-based MFA',
        'PAM, to enforce local password policies',
        'SD-WAN, to enforce web content filtering through external proxies',
        'DLP, to enforce data protection capabilities'
      ],
      explanation: '92',
      questionNumber: 92
    },
    {
      question: 'An organization has several systems deployed in a public cloud and wants to confirm that when data retention periods are reached, the data is properly disposed of. Which of the following best meets the organization\'s needs?',
      answer: 'Encrypting the data with customer-managed keys and then deleting both the encryption key and the volume',
      distractors: [
        'Double encrypting the data using both asymmetric and symmetric keys managed by the cloud service provider',
        'Utilizing a data-wiping software to overwrite the existing data',
        'Asking the cloud provider for copies of certificates of destruction'
      ],
      explanation: '93',
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
      explanation: '94',
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
      answer: 'Configure device attestations and continuous authorization controls',
      distractors: [
        'Deploy application protection policies using a corporate, cloud-based MDM solution',
        `Block any connections from outside the business's network security boundary`,
        'Install machine certificates on corporate devices and perform checks against the clients'
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
      answer: 'Generate device certificates using the specific template settings needed',
      distractors: [
        'Modify signing certificates in order to support IKE version 2',
        'Create a wildcard certificate for connections from public networks',
        'Add the VPN hostname as a SAN entry on the root certificate'
      ],
      explanation: 'Device certificates uniquely identify company-owned assets, allowing the VPN to restrict access only to authorized devices. Certificate-based authentication ensures that only approved machines can connect, preventing unauthorized external devices from accessing the corporate network. This approach is commonly used in enterprise environments to enforce security policies without relying solely on usernames and passwords.',
      questionNumber: 98
    },
    {
      question: 'A security administrator is reviewing the following code snippet from a website component:\n\n' +
        `![Question 99](${imgPath(99)})\n\n` +
        'A review of the inc.tmp file shows the following:\n\n' +
        '`214875925793253420385093450834534324525234352353455234532423534245234534523453896276563857932578395378543620382630532804508325`\n\n' +
        'Which of the following is most likely the reason for inaccuracies?',
      answer: 'A content management solution plug-in has been exploited',
      distractors: [
        `A search engine's bots are being blocked at the firewall`,
        'The relevant stylesheet has become corrupted',
        'The WAF is configured to be in transparent mode'
      ],
      explanation: '99',
      questionNumber: 99
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
      explanation: '101',
      questionNumber: 101
    },
    {
      question: 'A company runs a DAST scan on a web application. The tool outputs the following recommendations:\n\n' +
        '`- Use Cookie prefixes.`\n\n' +
        '`- Content Security Policy - SameSite=strict is not set.`\n\n' +
        'Which of the following vulnerabilities has the tool identified?',
      answer: 'CSRF',
      distractors: ['RCE', 'XSS', 'TOCTOU'],
      explanation: '102',
      questionNumber: 102
    },
    {
      question: 'Which of the following best describes the reason a network architect would enable forward secrecy on all VPN tunnels?',
      answer: 'This process reduces the success of attackers performing cryptanalysis',
      distractors: [
        'This process is a requirement to enable hardware-accelerated cryptography',
        'The business requirements state that confidentiality is a critical success factor',
        'Modern cryptographic protocols list this process as a prerequisite for use'
      ],
      explanation: '103',
      questionNumber: 103
    },
    {
      question: 'Which of the following best explains the importance of determining organizational risk appetite when operating with a constrained budget?',
      answer: 'Risk appetite directly impacts acceptance of high-impact, low-likelihood events',
      distractors: [
        'Organizational risk appetite varies from organization to organization',
        'Budgetary pressure drives risk mitigation planning in all companies',
        'Risk appetite directly influences which breaches are disclosed publicly'
      ],
      explanation: '',
      questionNumber: 104
    },
    {
      question: 'A company hired an email service provider called my-email.com to deliver company emails. The company started having several issues during the migration. A security engineer is troubleshooting and observes the following configuration snippet:\n\n' +
        `![Question 105](${imgPath(105)})\n\n` +
        'Which of the following should the security engineer modify to fix the issue?',
      answer: [
        'The email CNAME record must be changed to a type A record pointing to 192.168.1.10',
        'The TXT record must be changed to "v=spf ip4:192.168.1.10 include:my-email.com ~all"'
      ],
      distractors: [
        'The email CNAME record must be changed to a type A record pointing to 192.168.1.11',
        'The TXT record must be changed to "v=dmarc ip4:192.168.1.10 include:my-email.com ~all"',
        'The srv01 A record must be changed to a type CNAME record pointing to the email server',
        'The TXT record must be changed to "v=dkim ip4:192.168.1.11 include:my-email.com ~all"',
        'The srv01 A record must be changed to a type CNAME record pointing to the web01 server'
      ],
      explanation: '105',
      questionNumber: 105
    },
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
    {
      question: 'Recent reports indicate that a software tool is being exploited. Attackers were able to bypass user access controls and load a database. A security analyst needs to find the vulnerability and recommend a mitigation. The analyst generates the following output:\n\n' +
        `![Question 107](${imgPath(107)})\n\n` +
        'Which of the following would the analyst most likely recommend?',
      answer: 'Removing hard-coded credentials from the source code',
      distractors: [
        'Installing appropriate EDR tools to block pass-the-hash attempts',
        'Adding additional time to software development to perform fuzz testing',
        'Removing hard-coded credentials from the source code',
        'Not allowing users to change their local passwords'
      ],
      explanation: '',
      questionNumber: 107
    },
    {
      question: 'The identity and access management team is sending logs to the SIEM for continuous monitoring. The deployed log collector is forwarding logs to the SIEM. However, only false positive alerts are being generated. Which of the following is the most likely reason for the inaccurate alerts?',
      answer: 'The data is not being properly parsed',
      distractors: [
        'The compute resources are insufficient to support the SIEM',
        'The SIEM indexes are too large',
        'The retention policy is not properly configured'
      ],
      explanation: '',
      questionNumber: 108
    },
    {
      question: `The security team is receiving escalated support tickets stating that one of the company's publicly available websites is not loading as expected. Given the following observations:\n\n` +
        `![Question 109](${imgPath(109)})\n\n` +
        'Which of the following is most likely the root cause?',
      answer: 'A certificate signed by a global root certification authority has expired',
      distractors: [
        'A protocol mismatch error is expected to occur when using outdated browsers',
        'One certificate is being bound to multiple websites on the same server',
        'Subject alternative names were not used appropriately for subdomains'
      ],
      explanation: '',
      questionNumber: 109
    },
    {
      question: `A company acquires a location with a large infrastructure of legacy devices. Because of the hardware's age and the legacy software's limitations, the OS cannot be upgraded, and the machines cannot be virtualized. These machines are not publicly facing, but they do have internet access. The following controls are currently in place:\n\n` +
      '`- EDR`\n\n' +
      '`- Anti-malware`\n\n' +
      '`- Logging and monitoring`\n\n' +
      '`- Host-based firewall`\n\n' +
      '`- Proxied internet access`\n\n' +
      'A security architect needs to supplement the existing control strategy with one that restricts unauthorized software. Which of the following controls should the architect recommend to best supplement the existing environment?',
      answer: 'Application control',
      distractors: ['SIEM', 'Isolation', 'Conditional access'],
      explanation: '110',
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
    {
      question: 'A security operations analyst is reviewing network traffic baselines for nightly database backups. Given the following information:\n\n' +
            `![Question 113](${imgPath(113)})\n\n` +
            'Which of the following should the security analyst do next?',
      answer: 'Refer to the incident response playbook for the proper response',
      distractors: [
        'Consult with a network engineer to determine the impact of bandwidth usage',
        'Quarantine PRDDB01 and then alert the database engineers',
        'Review all the network logs for further data exfiltration'
      ],
      explanation: '',
      questionNumber: 113
    },
    {
      question: 'A company has a requirement in customer contracts that states applications must undergo external audits to identify vulnerabilities. Which of the following is the best action for the company to complete before hiring an external auditor?',
      answer: 'Conduct an internal audit assessment',
      distractors: [
        'Gather evidence for the audit',
        'Identify lessons learned from the audit',
        'Select samples for audit testing'
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
    {
      question: `A company's SIEM is designed to associate the company’s asset inventory with user events. Given the following report:\n\n` +
        `![Question 116](${imgPath(116)})\n\n` +
        'Which of the following should a security engineer investigate first as part of a log audit?',
      answer: 'Unauthorized usage attempts of the administrator account',
      distractors: [
        'An endpoint that is not submitting any logs',
        'Potential activity indicating an attacker moving laterally in the network',
        'A misconfigured syslog server creating false negatives'
      ],
      explanation: '',
      questionNumber: 116
    },
    {
      question: 'A developer receives feedback about code quality and efficiency. The developer needs to identify and resolve the following coding issues before submitting the code changes for peer review:\n\n' +
      '`- Indexing beyond arrays`\n\n' +
      '`- Dereferencing null pointers`\n\n' +
      '`- Potentially dangerous data type combos`\n\n' +
      '`- Unreachable code`\n\n' +
      '`- Non-portable constructs`\n\n' +
      'Which of the following would be most appropriate for the developer to use in this situation?',
      answer: 'Linting',
      distractors: ['SBoM', 'DAST', 'Branch protection', 'Software composition analysis'],
      explanation: '117',
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
      question: 'A manufacturing plant is updating its IT services. During discussions, the senior management team created the following list of considerations:\n\n' +
      '`- Staff turnover is high and seasonal`\n\n' +
      '`- Extreme conditions often damage endpoints`\n\n' +
      '`- Losses from downtime must be minimized`\n\n' +
      '`- Regulatory data retention requirements exist`\n\n' +
      'Which of the following best addresses the considerations?',
      answer: 'Using a non-persistent virtual desktop interface with thin clients',
      distractors: [
        'Establishing further environmental controls to limit equipment damage',
        'Deploying redundant file servers and configuring database journaling',
        'Maintaining an inventory of spare endpoints for rapid deployment'
      ],
      explanation: '121',
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
      answer: 'Implement a security awareness program in the organization',
      distractors: [
        'Move from an anti-malware software to an EDR solution',
        'Perform a penetration test to detect technology gaps on the anti-spam solution',
        'Configure an IPS solution in the internal network to mitigate infections'
      ],
      explanation: '',
      questionNumber: 123
    },
    {
      question: 'A cloud engineer needs to identify appropriate solutions to: \n\n' +
      '`- Provide secure access to internal and external cloud resources`\n\n' +
      '`- Eliminate split-tunnel traffic flows`\n\n' +
      '`- Enable identity and access management capabilities`\n\n' +
      'Which of the following solutions is the most appropriate?',
      answer: 'SASE',
      distractors: ['Micro-segmentation', 'PAM', 'SD-WAN'],
      explanation: '124',
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
    {
      question: 'An analyst reviews a SIEM and generates the following report:\n\n' +
        `![Question 127](${imgPath(127)})\n\n` +
        'Only HOST002 is authorized for internet traffic. Which of the following statements is accurate?',
      answer: 'The VM002 host is misconfigured and needs to be revised by the network team',
      distractors: [
        'The HOST002 host is under attack, and a security incident should be declared',
        'The SIEM platform is reporting multiple false positives on the alerts',
        'The network connection activity is unusual, and a network infection is highly possible'
      ],
      explanation: '',
      questionNumber: 127
    },
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
    {
      question: 'A vulnerability scan on a web server identified the following:\n\n' +
        `![Question 130](${imgPath(130)})\n\n` +
        'Which of the following actions would most likely eliminate on-path decryption attacks?',
      answer: [
        'Removing support for CBC-based key exchange and signing algorithms',
        'Adding `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA256`'
      ],
      distractors: [
        'Disallowing cipher suites that use ephemeral modes of operation for key agreement',
        'Implementing HIPS rules to identify and block BEAST attack attempts',
        'Restricting cipher suites to only allow `TLS_RSA_WITH_AES_128_CBC_SHA`',
        'Increasing the key length to 256 for `TLS_RSA_WITH_AES_128_CBC_SHA`'
      ],
      explanation: '',
      questionNumber: 130
    },
    {
      question: 'A company’s help desk is experiencing a large number of calls from the finance department stating access issues to www.bank.com. The security operations center reviewed the following security logs:\n\n' +
        `![Question 131](${imgPath(131)})\n\n` +
        'Which of the following is most likely the cause of the issue?',
      answer: 'The DNS record has been poisoned',
      distractors: [
        'Recursive DNS resolution is failing',
        'DNS traffic is being sinkholed',
        'The DNS was set up incorrectly'
      ],
      explanation: '',
      questionNumber: 131
    },
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
    {
      question: 'A security analyst is reviewing the following log:\n\n' +
        `![Question 133](${imgPath(133)})\n\n` +
        'Which of the following possible events should the security analyst investigate further?',
      answer: 'A malicious file that was run in this environment',
      distractors: [
        'A macro that was prevented from running',
        'A text file containing passwords that were leaked',
        'A PDF that exposed sensitive information improperly'
      ],
      explanation: '',
      questionNumber: 133
    },
    {
      question: 'A security operations engineer needs to prevent inadvertent data disclosure when encrypted SSDs are reused within an enterprise. Which of the following is the most secure way to achieve this goal?',
      answer: 'Securely deleting the encryption keys used by the SSD',
      distractors: [
        'Executing a script that deletes and overwrites all data on the SSD three times',
        'Wiping the SSD through degaussing',
        'Writing non-zero, random data to all cells of the SSD'
      ],
      explanation: '',
      questionNumber: 134
    },
    {
      question: 'A security professional is investigating a trend in vulnerability findings for newly deployed cloud systems. Given the following output:\n\n' +
        `![Question 135](${imgPath(135)})\n\n` +
        'Which of the following actions would address the root cause of this issue?',
      answer: 'Automating the patching system to update base images',
      distractors: [
        'Recompiling the affected programs with the most current patches',
        'Disabling unused/unneeded ports on all servers',
        'Deploying a WAF with virtual patching upstream of the affected systems'
      ],
      explanation: '',
      questionNumber: 135
    },
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
      answer: 'Allow only interactive log-in for users on workstations and restrict port 445 traffic to fileshares',
      distractors: [
        'Enable biometric authentication mechanisms on user workstations and block port 53 traffic',
        'Instruct users to use a password manager when generating new credentials and secure port 443 traffic',
        'Give users permission to rotate administrator passwords and deny port 80 traffic'
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
    {
      question: 'Emails that the marketing department is sending to customers are going to the customers’ spam folders. The security team is investigating the issue and discovers that the certificates used by the email server were reissued, but DNS records had not been updated. Which of the following should the security team update in order to fix this issue?',
      answer: ['DMARC', 'SPF', 'DKIM'],
      distractors: ['DNSSEC', 'SASE', 'SAN', 'SOA', 'MX'],
      explanation: '',
      questionNumber: 140
    },
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
      question: 'A global company with a remote workforce implemented a new VPN solution. After deploying the VPN solution to several hundred users, the help desk starts receiving reports of slow access to both internally and externally available applications. A security analyst reviews the following:\n\n' +
      'VPN client routing:\n' +
      '"0.0.0.0/0 eth1"\n\n' +
      'Which of the following solutions should the analyst use to fix this issue?',
      answer: 'Enable split tunneling',
      distractors: ['Move the servers to a screened subnet', 'Configure an NAC solution', 'Implement DNS over HTTPS'],
      explanation: '',
      questionNumber: 142
    },
    {
      question: 'A security analyst is reviewing suspicious log-in activity and sees the following data in the SIEM:\n\n' +
        `![Question 143](${imgPath(143)})\n\n` +
        'Which of the following is the most appropriate action for the analyst to take?',
      answer: 'Implement automation to disable accounts that have been associated with high-risk activity',
      distractors: [
        'Update the log configuration settings on the directory server that is not being captured properly',
        'Have the admin account owner change their password to avoid credential stuffing',
        'Block employees from logging in to applications that are not part of their business area'
      ],
      explanation: '',
      questionNumber: 143
    },
    {
      question: 'An organization determined its preparedness for a ransomware attack is inadequate. A security administrator is working on ways to improve and monitor the organization\'s response to ransomware attacks. Which of the following is the best action for the administrator to take?',
      answer: 'Conduct backup testing',
      distractors: [
        'Define the recovery point objective',
        'Perform a business impact analysis',
        'Verify the encryption key length'
      ],
      explanation: '',
      questionNumber: 144
    },
    {
      question: 'A security engineer receives an alert from the SIEM platform indicating a possible malicious action on the internal network. The engineer generates a report that outputs the logs associated with the incident:\n\n' +
        `![Question 145](${imgPath(145)})\n\n` +
        'Which of the following actions best enables the engineer to investigate further?',
      answer: 'Reviewing audit logs from privileged actions',
      distractors: [
        'Consulting logs from the enterprise password manager',
        'Searching dark web monitoring resources for exposure',
        'Querying user behavior analytics data'
      ],
      explanation: '',
      questionNumber: 145
    },
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
      answer: `Limit the platform's abilities to only non-sensitive functions`,
      distractors: [
        `Enhance the training model's effectiveness`,
        'Grant the system the ability to self-govern',
        'Require end-user acknowledgement of organizational policies'
      ],
      explanation: '',
      questionNumber: 147
    },
    {
      question: 'A security analyst discovered requests associated with IP addresses known for both legitimate and bot-related traffic. Which of the following should the analyst use to determine whether the requests are malicious?',
      answer: 'User-agent string',
      distractors: ['Byte length of the request', 'Web application headers', 'HTML encoding field'],
      explanation: '',
      questionNumber: 148
    },
    {
      question: 'A security analyst received a report that an internal web page is down after a company-wide update to the web browser. Given the following error message:\n\n' +
      'Your connection is not private.\n\n' +
      'Attackers might be trying to steal your information for www. internalwebsite.company.com.\n\n' +
      '"NET::ERR_CERT_WEAK_SIGNATURE_ALGORITHM"\n\n' +
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
      answer: 'Include the monitoring agent and digital certificate as part of the patching/updating program, keeping all the corporate devices updated and enrolled',
      distractors: [
        'Check whether the certificate is signed by a certification authority and manually deployed to each device',
        'Check all the devices without proper access, enrolling them via the solution agent and authenticating to the network',
        'Implement default credentials to automate RADIUS authentication and grant access to the network if the device owner is an employee'
      ],
      explanation: '',
      questionNumber: 151
    },
    {
      question: 'While performing threat-hunting functions, an analyst is using the Diamond Model of Intrusion Analysis. The analyst identifies the likely adversary, the infrastructure involved, and the target. Which of the following must the threat hunter document to use the model effectively?',
      answer: 'Capabilities',
      distractors: ['Knowledge', 'Phase', 'Methodologies'],
      explanation: '',
      questionNumber: 152
    },
    {
      question: 'A systems administrator needs to improve the security assurance in a company\'s cloud storage environment. The administrator determines that the best approach is to identify whether any data has been maliciously or inadvertently modified. Which of the following techniques should the systems administrator periodically use?',
      answer: 'Hashing',
      distractors: ['Interference', 'Antitampering', 'Journaling'],
      explanation: '',
      questionNumber: 153
    },
    {
      question: 'A security engineer wants to enhance the security posture of end-user systems in a zero trust environment. Given the following requirements:\n\n' +
      '`- Reduce the ability for potentially compromised endpoints to contact C2 infrastructure`\n\n' +
      '`- Track the requests that the malware makes to the IPs`\n\n' +
      '`- Avoid the download of additional payloads`\n\n' +
      'Which of the following should the engineer deploy to meet these requirements?',
      answer: 'DNS sinkholing',
      distractors: [
        'Browser isolation',
        'Zone transfer protection',
        'HIDS'
      ],
      explanation: '154',
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
    {
      question: 'After an incident response exercise, a security administrator reviews the following table:\n\n' +
        `![Question 157](${imgPath(157)})\n\n` +
        'Which of the following should the administrator do to best support rapid incident response in the future?',
      answer: 'Enable dashboards for service status monitoring',
      distractors: [
        'Automate alerting to IT support for phone system outages',
        'Send emails for failed log-in attempts on the public website',
        'Configure automated isolation of human resources systems'
      ],
      explanation: '',
      questionNumber: 157
    },
    {
      question: 'An organization is required to:\n\n' +
      '`- Respond to internal and external inquiries in a timely manner`\n\n' +
      '`- Provide transparency`\n\n' +
      '`- Comply with regulatory requirements`\n\n' +
      'The organization has not experienced any reportable breaches but wants to be prepared if a breach occurs in the future. Which of the following is the best way for the organization to prepare?',
      answer: 'Developing communication templates that have been vetted by internal and external counsel',
      distractors: [
        'Outsourcing the handling of necessary regulatory filings to an external consultant',
        'Integrating automated response mechanisms into the data subject access request process',
        'Conducting lessons-learned activities and integrating observations into the crisis management plan'
      ],
      explanation: '158',
      questionNumber: 158
    },
    {
      question: 'An incident response team is analyzing malware and observes the following:\n\n' +
      '`- Does not execute in a sandbox`\n\n' +
      '`- No network IoCs`\n\n' +
      '`- No publicly known hash match`\n\n' +
      '`- No process injection method detected`\n\n' +
      'Which of the following should the team do next to proceed with further analysis?',
      answer: 'Check for an anti-virtualization code in the sample',
      distractors: [
        'Use an online virus analysis tool to analyze the sample',
        'Utilize a new deployed machine to run the sample',
        'Search other internal sources for a new sample'
      ],
      explanation: '159',
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
      explanation: '160',
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
    },
    {
      question: `A development team must create a website to share indicators of compromise. The team wants to use APIs between industry peers to aid in configuring SIEM and SOAR. The team needs to create a free tier of service, and the senior developer insists on configuring rate limiting. Which of the following best describes the senior developer's reasoning?`,
      answer: 'To limit the likelihood of resource exhaustion occurring on the API server',
      distractors: [
        'To prevent password-spraying attacks on the services hosting the API',
        'To address concerns the team has about API bandwidth utilization',
        'To reduce attack surface exposure of the API endpoints connecting peers'
      ],
      explanation: '162',
      questionNumber: 162
    },
    {
      question: 'A hotel chain wants to use point-of-sale systems to allow customers to check in and out of their rooms without employee assistance. These systems should limit access to a specific set of programs approved to run, with all other programs blocked. Which of the following should the company configure to best support this goal?',
      answer: 'Application control using a fresh image, with the applications fully configured as a baseline to build and block other applications from execution',
      distractors: [
        'A host-based intrusion detection system to monitor and block all suspicious activities if they occur on the systems',
        'Anti-malware on these systems and only approved application file locations can be bypassed',
        'Event logs to be collected from the systems for all security events and some custom application logs'
      ],
      explanation: '',
      questionNumber: 163
    },
    {
      question: 'A user reports application access issues to the help desk. The help desk reviews the logs for the user:\n\n' +
        `![Question 164](${imgPath(164)})\n\n` +
        'Which of the following is most likely the reason for the issue?',
      answer: `A threat actor has compromised the user's account and attempted to log in`,
      distractors: [
        'The user inadvertently tripped the geoblock rule in NGFW',
        'The user is not allowed to access the human resources system outside of business hours',
        'The user did not attempt to connect from an approved subnet'
      ],
      explanation: '',
      questionNumber: 164
    },
    {
      question: `A company's security team is notified about vulnerabilities in the company's application. The security team determined these vulnerabilities were previously disclosed in third-party libraries. Which of the following solutions best allows the company to identify third-party vulnerabilities in the future?`,
      answer: 'Integrating a SCAtool as part of the pipeline',
      distractors: [
        'Using IaC to include the newest dependencies',
        'Creating a bug bounty program',
        'Implementing a continuous security assessment program'
      ],
      explanation: '165',
      questionNumber: 165
    },
    {
      question: 'A global organization wants to manage all endpoint and user telemetry. The organization also needs to differentiate this data based on which office it is correlated to. Which of the following strategies best aligns with this goal?',
      answer: 'Data labeling',
      distractors: ['Sensor placement', 'Continuous monitoring', 'Centralized logging'],
      explanation: '',
      questionNumber: 166
    },
    {
      question: 'A security architect must make sure that the least number of services as possible is exposed in order to limit an adversary\'s ability to access the systems. Which of the following should the architect do first?',
      answer: 'Perform attack surface reduction',
      distractors: [
        'Enforce Secure Boot',
        'Perform attack surface reduction',
        'Disable third-party integrations',
        'Limit access to the systems'
      ],
      explanation: '',
      questionNumber: 167
    },
    {
      question: 'A security officer performs due diligence activities before implementing a third-party solution into the enterprise environment. The security officer needs evidence from the third party that a data subject access request handling process is in place. Which of the following is the security officer most likely seeking to maintain compliance?',
      answer: 'Privacy regulations',
      distractors: [
        'Information security standards',
        'E-discovery requirements',
        'Certification requirements',
        'Reporting frameworks'
      ],
      explanation: '',
      questionNumber: 168
    },
    {
      question: 'An administrator needs to craft a single certificate-signing request for a web-server certificate. The server should be able to use the following identities to mutually authenticate other resources over TLS:\n\n' +
        '`- www.int.comptia.org`\n\n' +
        '`- webserver01 .int.comptia.org`\n\n' +
        '`- 10.5.100.10`\n\n' +
        'Which of the following certificate fields must be set properly to support this objective?',
      answer: 'Subject alternative name',
      distractors: [
        'Organizational unit',
        'Extended key usage',
        'Certificate extension'
      ],
      explanation: '169',
      questionNumber: 169
    },
    {
      question: 'A security analyst reviews the following event timeline from an EDR solution:\n\n' +
        `![Question 170](${imgPath(170)})\n\n` +
        'Which of the following has most likely occurred and needs to be fixed?',
      answer: 'A logic flaw has introduced a TOCTOU vulnerability and must be addressed by the vendor',
      distractors: [
        'The DLP has failed to block malicious exfiltration, and data tagging is not being utilized properly',
        'A NIDS bypass was utilized by a threat actor, and updates must be installed by the administrator',
        'A potential insider threat is being investigated and will be addressed by the senior management team'
      ],
      explanation: '',
      questionNumber: 170
    },
    {
      question: 'A hospital provides tablets to its medical staff to enable them to more quickly access and edit patients\' charts. The hospital wants to ensure that if a tablet is identified as lost or stolen and a remote command is issued, the risk of data loss can be mitigated within seconds. The tablets are configured as follows to meet hospital policy:\n\n' +
        '`- Full disk encryption is enabled`\n\n' +
        '`- `Always On` corporate VPN is enabled`\n\n' +
        '`- eFuse-backed keystore is enabled/ready`\n\n' +
        '`- Wi-Fi 6 is configured with SAE`\n\n' +
        '`- Location services is disabled`\n\n' +
        '`- Application allow list is unconfigured.`\n\n' +
        'Assuming the hospital policy cannot be changed, which of the following is the best way to meet the hospital\'s objective?',
      answer: 'Cryptographically erase FDE volumes',
      distractors: [
        'Revoke the user VPN and Wi-Fi certificates',
        'Issue new MFA credentials to all users',
        'Configure the application allow list'
      ],
      explanation: '171',
      questionNumber: 171
    },
    {
      question: 'A compliance officer is facilitating a business impact analysis and wants business unit leaders to collect meaningful data. Several business unit leaders want more information about the types of data the officer needs. Which of the following data types would be the most beneficial for the compliance officer?',
      answer: [
        'Costs associated with downtime',
        'Critical processes'
      ],
      distractors: [
        'Inventory details',
        'Applicable contract obligations',
        'Network diagrams',
        'Contingency plans'
      ],
      explanation: '',
      questionNumber: 172
    },
    {
      question: 'An ISAC supplied recent threat intelligence information about pictures used on social media that provide reconnaissance of systems in use in secure facilities. In response, the Chief Information Security Officer (CISO) wants several configuration changes implemented via the MDM to ensure the following:\n\n' +
        '`- Camera functions and location services are blocked for corporate mobile devices`\n\n' +
        '`- All social media is blocked on the corporate and guest wireless networks`\n\n' +
        'Which of the following is the CISO practicing to safeguard against the threat?',
      answer: 'Operational security',
      distractors: [
        'Adversary emulation',
        'Open-source intelligence',
        'Social engineering'
      ],
      explanation: '173',
      questionNumber: 173
    },
    {
      question: 'A company needs to define a new road map for improving secure coding practices in the software development life cycle and implementing better security standards. Which of the following is the best way for the company to achieve this goal?',
      answer: 'Performing a Software Assurance Maturity Model assessment and generating a road map as a final result',
      distractors: [
        'Conducting a threat-modeling exercise for the main applications and developing a road map based on the necessary security implementations',
        'Developing a new road map, including secure coding best practices, based on the security area road map and annual goals defined by the Chief Information Security Officer',
        'Using the best practices in the OWASP secure coding manual to define a new road map'
      ],
      explanation: '',
      questionNumber: 174
    },
    {
      question: 'A security architect wants to develop a baseline of security configurations. These configurations automatically will be utilized every time a new virtual machine is created. Which of the following technologies should the security architect deploy to accomplish this goal?',
      answer: 'Ansible',
      distractors: ['Snort', 'CASВ', 'CMDB'],
      explanation: '',
      questionNumber: 175
    },
    {
      question: 'A company wants to modify its process to comply with privacy requirements after an incident involving PII data in a development environment. In order to perform functionality tests, the QA team still needs to use valid data in the specified format. Which of the following best addresses the risk without impacting the development life cycle?',
      answer: 'Utilizing tokenization for sensitive fields',
      distractors: [
        'Encrypting the data before moving Into the QA environment',
        'Truncating the data to make it not personally identifiable',
        'Using a large language model to generate synthetic data'
      ],
      explanation: '',
      questionNumber: 176
    },
    {
      question: `A global organization is reviewing potential vendors to outsource a critical payroll function. Each vendor's plan includes using local resources in multiple regions to ensure compliance with all regulations. The organization's Chief Information Security Officer is conducting a risk assessment on the potential outsourcing vendors' subprocessors. Which of the following best explains the need for this risk assessment?`,
      answer: 'The responsibility of protecting PII remains with the organization',
      distractors: [
        'Risk mitigations must be more comprehensive than the existing payroll provider',
        'Due care must be exercised during all procurement activities',
        'Specific regulatory requirements must be met in each jurisdiction'
      ],
      explanation: '',
      questionNumber: 177
    },
    {
      question: 'An organization plans to deploy new software. The project manager compiles a list of roles that will be involved in different phases of the deployment life cycle. Which of the following should the project manager use to track these roles?',
      answer: 'RACI matrix',
      distractors: ['CMDB', 'Recall tree', 'ITIL'],
      explanation: '',
      questionNumber: 178
    },
    {
      question: 'An organization decides to move to a distributed workforce model. Several legacy systems exist on premises and cannot be migrated because of existing compliance requirements. However, all new systems are required to be cloud-based. Which of the following would best ensure network access security?',
      answer: 'Utilizing a VPN for all users who require legacy system access',
      distractors: [
        'Shifting all legacy systems to the existing public cloud infrastructure',
        'Configuring an SDN to block malicious traffic to on-premises networks',
        'Deploying microsegmentation with a firewall acting as the core router'
      ],
      explanation: '',
      questionNumber: 179
    },
    {
      question: 'A web application server that provides services to hybrid modern and legacy financial applications recently underwent a scheduled upgrade to update common libraries, including OpenSSL. Multiple users are now reporting failed connection attempts to the server. The technician performing initial triage identified the following:\n\n' +
        '`- Client applications more than five years old appear to be the most affected`\n\n' +
        '`- Web server logs show initial connection attempts by affected hosts`\n\n' +
        '`- For the failed connections, logs indicate `cipher unavailable``\n\n' +
        'Which of the following is most likely to safely remediate this situation?',
      answer: 'The client applications need to be modified to support AES in Galois/Counter Mode or equivalent',
      distractors: [
        'The server needs to be configured for backward compatibility to SSL 3.0 applications',
        'The client TLS configuration must be set to enforce electronic codebook modes of operation',
        'The server-side digital signature algorithm needs to be modified to support elliptic curve cryptography'
      ],
      explanation: '180',
      questionNumber: 180
    },
    {
      question: 'An organization recently migrated data to a new file management system. The architect decides to use a discretionary authorization model on the new system. Which of the following best explains the architect’s choice?',
      answer: 'The permissions were not able to be migrated to the new system, and several stakeholders were made responsible for granting appropriate access',
      distractors: [
        'The responsibility of migrating data to the new file management system was outsourced to the vendor providing the platform',
        'The legacy file management system did not support modern authentication techniques despite the business requirements',
        'The data custodians were selected by business stakeholders to ensure backups of the file management system are maintained off site'
      ],
      explanation: '',
      questionNumber: 181
    },
    {
      question: 'An organization recently acquired another company that is running a different EDR solution. A SOC analyst wants to automate the isolation of endpoints that are found to be compromised. Which of the following workflows best mitigates the risk of false positives and reduces the spread of malicious code?',
      answer: 'Using a SOAR solution to look up entities via a TIP platform and isolate endpoints via APIs',
      distractors: [
        'Setting a policy on each EDR management console to isolate all endpoints that trigger any alerts',
        'Reviewing all alerts manually in the various portals and taking action to isolate them',
        'Automating the suppression of all alerts that are not critical and sending an email asking SOC analysts to review these alerts'
      ],
      explanation: '',
      questionNumber: 182
    },
    {
      question: 'While reviewing recent incident reports a security officer discovers that several employees were contacted by the same individual who impersonated a recruiter. Which of the following best describes this type of correlation?',
      answer: 'Attack pattern analysis',
      distractors: ['Spear-phishing campaign', 'Threat modeling', 'Red-team assessment'],
      explanation: '',
      questionNumber: 183
    },
    {
      question: 'A news organization wants to implement workflows that allow users to request that untruthful data be retraced and scrubbed from online publications to comply with the right to be forgotten. Which of the following regulations is the organization most likely trying to address?',
      answer: 'GDPR',
      distractors: ['COPPA', 'CCPA', 'DORA'],
      explanation: '',
      questionNumber: 184
    },
    {
      question: 'An analyst wants to conduct a risk assessment on a new application that is being deployed. Given the following information:\n\n' +
        '`- Total budget allocation for the new application is unavailable`\n\n' +
        '`- Recovery time objectives have not been set`\n\n' +
        '`- Downtime loss calculations cannot be provided`\n\n' +
        'Which of the following statements describes the reason a qualitative assessment is the best option?',
      answer: 'Sufficient metrics are not available to conduct other risk assessment types',
      distractors: [
        'The analyst has previous work experience in application development',
        'An organizational risk register tracks all risks and mitigations across business units',
        'The organization wants to find the monetary value of any outages'
      ],
      explanation: '185',
      questionNumber: 185
    },
    {
      question: 'A software company deployed a new application based on its internal code repository. Several customers are reporting anti-malware alerts on workstations used to test the application. Which of the following is the most likely cause of the alerts?',
      answer: 'Unsecure bundled libraries',
      distractors: ['Misconfigured code commit', 'Invalid code signing certificate', 'Data leakage'],
      explanation: '',
      questionNumber: 186
    },
    {
      question: 'A security engineer is reviewing the following vulnerability scan report:\n\n' +
        `![Question 187](${imgPath(187)})\n\n` +
        'Which of the following should the engineer prioritize for remediation?',
      answer: 'OpenSSH',
      distractors: ['Apache HTTP Server', 'Google Chrome', 'Migration to TLS 1.3'],
      explanation: '',
      questionNumber: 187
    },
    {
      question: 'A company notices that cloud environment costs increased after using a new serverless solution based on API requests. Many invalid requests from unknown IPs were found, often within a short time. Which of the following solutions would most likely solve this issue, reduce cost, and improve security?',
      answer: 'Setting authentication processes for the API requests as well as proper rate limits according to regular usage',
      distractors: [
        'Using digital certificates for known customers and performing API authorization through those certificates',
        'Defining request rate limits and comparing new requests from unknown IPs with a list of known-malicious IPs',
        'Only allowing API requests coming from regions with known customers'
      ],
      explanation: '',
      questionNumber: 188
    },
    {
      question: 'A large organization deployed a generative AI platform for its global user population to use. Based on feedback received during beta testing, engineers have identified issues with user interface latency and page-loading performance for international users. The infrastructure is currently maintained within two separate data centers, which are connected using high-availability networking and load balancers. Which of the following is the best way to address the performance issues?',
      answer: 'Configuring the application to use a CDN',
      distractors: [
        'Implementing RASP to enable large language models queuing',
        'Remote journaling within a third data center',
        'Traffic shaping through the use of a SASE'
      ],
      explanation: '',
      questionNumber: 189
    },
    {
      question: 'A company reduced its staff 60 days ago, and applications are now starting to fail. The security analyst is investigating to determine if there is malicious intent for the application failures. The security analyst reviews the following logs:\n\n\n' +
        `![Question 190](${imgPath(190)})\n\n` +
        'Which of the following is the most likely reason for the application failures?',
      answer: 'The user’s account was set as a service account',
      distractors: [
        `The user's account was set as a service account`,
        `The user's home directory was deleted`,
        'The user does not have sudo access',
        'The root password has been changed'
      ],
      explanation: '',
      questionNumber: 190
    },
    {
      question: 'A security analyst detected unusual network traffic related to program updating processes. The analyst collected artifacts from compromised user workstations. The discovered artifacts were binary files with the same name as existing valid binaries but with different hashes. Which of the following solutions would most likely prevent this situation from reoccurring?',
      answer: 'Implementing digital signature',
      distractors: [
        'Improving patching processes',
        'Performing manual updates via USB ports',
        'Allowing only files from internal sources'
      ],
      explanation: '',
      questionNumber: 191
    },
    {
      question: 'Source code snippets for two separate malware samples are shown below:\n\n' +
        `![Question 192](${imgPath(192)})\n\n` +
        'Which of the following describes the most important observation about the two samples?',
      answer: 'The samples were probably written by the same developer',
      distractors: [
        'Telemetry is first buffered and then transmitted in paranoid mode',
        'Both samples use IP connectivity for command and control',
        'Sample 1 is the target agent while Sample 2 is the C2 server'
      ],
      explanation: '',
      questionNumber: 192
    },
    {
      question: 'A systems engineer is configuring a system baseline for servers that will provide email services. As part of the architecture design, the engineer needs to improve performance of the systems by using an access vector cache, facilitating mandatory access control, and protecting against:\n\n' +
        '`- Unauthorized reading and modification of data and programs`\n\n' +
        '`- Bypassing application security mechanisms`\n\n' +
        '`- Privilege escalation`\n\n' +
        '`- Interference with other processes`\n\n' +
        'Which of the following is the most appropriate for the engineer to deploy?',
      answer: 'SELinux',
      distractors: [
        'Privileged access management',
        'Self-encrypting disks',
        'NIPS'
      ],
      explanation: '193',
      questionNumber: 193
    },
    {
      question: 'A company migrated a critical workload from its data center to the cloud. The workload uses a very large data set that requires computational-intensive data processing. The business unit that uses the workload is projecting the following growth pattern:\n\n' +
        '`- Storage requirements will double every six months`\n\n' +
        '`- Computational requirements will fluctuate throughout the year`\n\n' +
        '`- Average computational requirements will double every year`\n\n' +
        `Which of the following should the company do to address the business unit's requirements?`,
      answer: 'Plan for a horizontally scaling computing and storage infrastructure',
      distractors: [
        'Deploy a cloud-based CDN for storage and a load balancer for compute',
        'Combine compute and storage in vertically autoscaling mode',
        'Implement a load balancer for computing and storage resources'
      ],
      explanation: '194',
      questionNumber: 194
    },
    {
      question: 'A security analyst received a notification from a cloud service provider regarding an attack detected on a web server. The cloud service provider shared the following information about the attack:\n\n' +
        '`- The attack came from inside the network`\n\n' +
        '`- The attacking source IP was from the internal vulnerability scanners`\n\n' +
        '`- The scanner is not configured to target the cloud servers`\n\n' +
        'Which of the following actions should the security analyst take first?',
      answer: 'Configure the scan policy to avoid targeting an out-of-scope host',
      distractors: [
        'Create an allow list for the vulnerability scanner IPs in order to avoid false positives',
        'Set network behavior analysis rules',
        'Quarantine the scanner sensor to perform a forensic analysis'
      ],
      explanation: '195',
      questionNumber: 195
    },
    {
      question: 'A company implemented a NIDS and a NIPS on the most critical environments. Since this implementation the company has been experiencing network connectivity issues. Which of the following should the security architect recommend for a new NIDS/NIPS implementation?',
      answer: 'Implementing the NIDS with a port mirror in the core switch and the NIPS in the main firewall',
      distractors: [
        'Implementing the NIDS and the NIPS together with the main firewall',
        'Implementing a NIDS without a NIPS to increase the detection capability',
        'Implementing the NIDS in the bastion host and the NIPS in the branch network router'
      ],
      explanation: '196',
      questionNumber: 196
    },
    {
      question: 'The material findings from a recent compliance audit indicate a company has an issue with excessive permissions. The findings show that employees changing roles or departments results in privilege creep. Which of the following solutions are the best ways to mitigate this issue?',
      answer: ['Implementing a role-based access policy', 'Performing periodic access reviews'],
      distractors: [
        'Setting different access controls defined by business area',
        'Implementing a role-based access policy',
        'Designing a least-needed privilege policy',
        'Establishing a mandatory vacation policy',
        'Performing periodic access reviews',
        'Requiring periodic job rotation'
      ],
      explanation: '',
      questionNumber: 197
    },
    {
      question: 'A security analyst is reviewing a SIEM and generates the following report:\n\n' +
        `![Question 198](${imgPath(198)})\n\n` +
        'Later, the incident response team notices an attack was executed on the VM001 host. Which of the following should the security analyst do to enhance the alerting process on the SIEM platform?',
      answer: 'Perform a log correlation on the SIEM solution',
      distractors: [
        'Include the EDR solution on the SIEM as a new log source',
        'Improve parsing of data on the SIEM',
        'Create a new rule set to detect malware'
      ],
      explanation: '',
      questionNumber: 198
    },
    {
      question: 'A security administrator is performing a gap assessment against a specific OS benchmark. The benchmark requires the following configurations be applied to endpoints:\n\n' +
        '`- Full disk encryption`\n\n' +
        '`- Host-based firewall`\n\n' +
        '`- Time synchronization`\n\n' +
        '`- Password policies`\n\n' +
        '`- Application allow listing`\n\n' +
        '`- Zero Trust application access`\n\n' +
        'Which of the following solutions best addresses the requirements?',
      answer: ['MDM', 'SCAP'],
      distractors: ['MDM', 'CASB', 'SBoM', 'SCAP', 'SASE', 'HIDS'],
      explanation: '199',
      questionNumber: 199
    },
    {
      question: 'A security analyst is reviewing the following authentication logs:\n\n' +
        `![Question 200](${imgPath(200)})\n\n` +
        'Which of the following should the analyst do first?',
      answer: 'Disable User1’s account',
      distractors: [`Disable User2's account`, `Disable User12's account`, `Disable User8's account`],
      explanation: '200',
      questionNumber: 200
    },
    {
      question: 'A game developer wants to reach new markets and is advised by legal counsel to include specific age-related sign-up requirements. Which of the following best describes the legal counsel\'s concerns?',
      answer: 'COPPA',
      distractors: ['GDPR', 'LGPD', 'PCI DSS'],
      explanation: '',
      questionNumber: 201
    },
    {
      question: 'Which of the following AI concerns is most adequately addressed by input sanitization?',
      answer: 'Prompt injection',
      distractors: ['Model inversion', 'Data poisoning', 'Non-explainable model'],
      explanation: '',
      questionNumber: 202
    },
    {
      question: 'A company that operates in different countries has local email infrastructure for each of its business units. A breach occurred in which email communications were intercepted between the headquarters and one of the overseas business units.\n\n' +
        'During an investigation, the security analyst finds the following email log:\n\n' +
        `![Question 203](${imgPath(203)})\n\n` +
        'Which of the following actions should the security analyst take to best address the issue?',
      answer: 'Change the TLS configuration from opportunistic to enforced',
      distractors: [
        'Revoke the expired TLS certificate and replace it with a valid one',
        'Disable the NTLM authentication and replace it with TLS 1.2',
        'Create a new TLS certificate using a stronger algorithm and larger key'
      ],
      explanation: '',
      questionNumber: 203
    },
    {
      question: `During a recent audit, a company's systems were assessed Given the following information:\n\n` +
        `![Question 204](${imgPath(204)})\n\n` +
        'Which of the following is the best way to reduce the attack surface?',
      answer: 'Implementing an application-aware firewall and writing strict rules for the application access',
      distractors: [
        'Deploying an EDR solution to all impacted machines in manufacturing',
        'Segmenting the manufacturing network with a firewall and placing the rules in monitor mode',
        'Setting up an IDS inline to monitor and detect any threats to the software'
      ],
      explanation: '',
      questionNumber: 204
    },
    {
      question: 'A global manufacturing company has an internal application that is critical to making products. This application cannot be updated and must be available in the production area. A security architect is implementing security for the application. Which of the following best describes the action the architect should take?',
      answer: 'Create a separate network for users who need access to the application',
      distractors: [
        'Disallow wireless access to the application',
        'Deploy intrusion detection capabilities using a network tap',
        'Create an acceptable use policy for the use of the application'
      ],
      explanation: '',
      questionNumber: 205
    },
    {
      question: 'A company wants to perform threat modeling on an internally developed, business-critical application. The Chief Information Security Officer (CISO) is most concerned that the application should maintain 99.999% availability and authorized users should only be able to gain access to data they are explicitly authorized to view. Which of the following threat-modeling frameworks directly addresses the CISO’s concerns about this system?',
      answer: 'STRIDE',
      distractors: ['CAPEC', 'ATT&CK', 'TAXII'],
      explanation: '',
      questionNumber: 206
    },
    {
      question: 'A company\'s internal network is experiencing a security breach and the threat actor is still active Due to business requirements, users in this environment are allowed to utilize multiple machines at the same time. Given the following log snippet:\n\n' +
        `![Question 207](${imgPath(207)})\n\n` +
        'Which of the following accounts should a security analyst disable to best contain the incident without impacting valid users?',
      answer: 'user-d',
      distractors: ['user-а', 'user-b', 'user-с'],
      explanation: '',
      questionNumber: 207
    },
    {
      question: 'A security team is responding to malicious activity and needs to determine the scope of impact. The malicious activity appears to affect a certain version of an application used by the organization. Which of the following actions best enables the team to determine the scope of impact?',
      answer: 'Reviewing the asset inventory',
      distractors: ['Performing a port scan', 'Inspecting egress network traffic', 'Analyzing user behavior'],
      explanation: '',
      questionNumber: 208
    },
    {
      question: 'An organization recently implemented a policy that requires all passwords to be rotated every 90 days. An administrator sees a large volume of failed sign-on logs from multiple servers that are often accessed by users. The administrator determines users are disconnecting from the RDP session but not logging off. Which of the following should the administrator do to prevent account lockouts?',
      answer: 'Automate logout of inactive sessions',
      distractors: [
        'Increase the account lockout threshold',
        'Enforce password complexity',
        'Extend the allowed session length'
      ],
      explanation: '',
      questionNumber: 209
    },
    {
      question: 'A security review revealed that not all of the client proxy traffic is being captured. Which of the following architectural changes best enables the capture of traffic for analysis?',
      answer: 'Adding an additional proxy server to each segmented VLAN',
      distractors: [
        'Setting up a reverse proxy for client logging at the gateway',
        'Configuring a span port on the perimeter firewall to ingest logs',
        'Enabling client device logging and system event auditing'
      ],
      explanation: '',
      questionNumber: 210
    },
    {
      question: 'A subcontractor develops safety critical avionics software for a major aircraft manufacturer. After an incident, a third-party investigator recommends the company begin to employ formal methods in the development life cycle. Which of the following findings from the investigation most directly supports the investigator\'s recommendation?',
      answer: 'The codebase lacks traceability to functional and non-functional requirements',
      distractors: [
        'The system’s bill of materials failed to include commercial and open-source libraries',
        'The company lacks dynamic and interactive application security testing standards',
        'The implemented software inefficiently manages compute and memory resources'
      ],
      explanation: '',
      questionNumber: 211
    },
    {
      question: 'A security architect is onboarding a new EDR agent on servers that traditionally do not have internet access. In order for the agent to receive updates and report back to the management console, some changes must be made. Which of the following should the architect do to best accomplish this requirement?',
      answer: [
        'Create a firewall rule to only allow traffic from the subnet to the internet via a proxy',
        'Configure a proxy policy that allows only fully qualified domain names needed to communicate to a portal'
      ],
      distractors: [
        'Configure a proxy policy that blocks all traffic on port 443',
        'Create a firewall rule to only allow traffic from the subnet to the internet via port 443',
        'Create a firewall rule to only allow traffic from the subnet to the internet to fully qualified names that are not identified as malicious by the firewall vendor',
        'Configure a proxy policy that blocks only lists of known-bad fully qualified domain names'
      ],
      explanation: '',
      questionNumber: 212
    },
    {
      question: 'Due to an infrastructure optimization plan, a company has moved from a unified architecture to a federated architecture divided by region. Long-term employees now have a better experience, but new employees are experiencing major performance issues when traveling between regions. The company is reviewing the following information:\n\n' +
        `![Question 213](${imgPath(213)})\n\n` +
        'Which of the following is the most effective action to remediate the issue?',
      answer: `Synchronizing all regions' user identities and ensuring ongoing synchronization`,
      distractors: [
        'Creating a new user entry in the affected region for the affected employee',
        'Restarting European region physical access control systems',
        'Resyncing single sign-on application with connected security appliances'
      ],
      explanation: '',
      questionNumber: 213
    },
    {
      question: 'A company hosts a platform-as-a-service solution with a web-based front end, through which customers interact with data sets. A security administrator needs to deploy controls to prevent application-focused attacks. Which of the following most directly supports the administrator’s objective?',
      answer: 'Creating WAF policies for relevant programming languages',
      distractors: [
        'Improving security dashboard visualization on SIEM',
        'Rotating API access and authorization keys every two months',
        'Implementing application load balancing and cross-region availability'
      ],
      explanation: '',
      questionNumber: 214
    },
    {
      question: `A software engineer is creating a CI/CD pipeline to support the development of a web application. The DevSecOps team is required to identify syntax errors. Which of the following is the most relevant to the DevSecOps team's task?`,
      answer: 'Static application security testing',
      distractors: [
        'Software composition analysis',
        'Runtime application self-protection',
        'Web application vulnerability scanning'
      ],
      explanation: '',
      questionNumber: 215
    },
    {
      question: 'A security officer received several complaints from users about excessive MFA push notifications at night. The security team investigates and suspects malicious activities regarding user account authentication. Which of the following is the best way for the security officer to restrict MFA notifications?',
      answer: 'Configuring prompt-driven MFA',
      distractors: [
        'Provisioning FIDO2 devices',
        'Deploying a text message based on MFA',
        'Enabling OTP via email'
      ],
      explanation: '',
      questionNumber: 216
    },
    {
      question: 'A security analyst is troubleshooting the reason a specific user is having difficulty accessing company resources.\n\n' +
        'The analyst reviews the following information:\n' +
        `![Question 217](${imgPath(217)})\n\n` +
        'Which of the following is most likely the cause of the issue?',
      answer: 'A network geolocation is being misidentified by the authentication server',
      distractors: [
        'The local network access has been configured to bypass MFA requirements',
        'Administrator access from an alternate location is blocked by company policy',
        'Several users have not configured their mobile devices to receive OTP codes'
      ],
      explanation: '',
      questionNumber: 217
    },
    {
      question: 'An organization is looking for gaps in its detection capabilities based on the APTs that may target the industry. Which of the following should the security analyst use to perform threat modeling?',
      answer: 'АТТ&СК',
      distractors: ['ОWASP', 'САРЕС', 'STRIDE'],
      explanation: '',
      questionNumber: 218
    },
    {
      question: 'A security analyst needs to ensure email domains that send phishing attempts without previous communications are not delivered to mailboxes. The following email headers are being reviewed:\n\n' +
        `![Question 219](${imgPath(219)})\n\n` +
        'Which of the following is the best action for the security analyst to take?',
      answer: 'Quarantine all messages with sales-mail com in the email header',
      distractors: [
        'Block messages from hr-saas.com because it is not a recognized domain',
        'Reroute all messages with unusual security warning notices to the IT administrator',
        'Block vendor com for repeated attempts to send suspicious messages'
      ],
      explanation: '',
      questionNumber: 219
    },
    {
      question: 'A systems administrator needs to identify new attacks that could be carried out against the environment. The administrator plans to proactively seek out and observe new attacks. Which of the following is the best way to accomplish this goal?',
      answer: 'Deploying a honeypot',
      distractors: ['Configuring an IPS', 'Implementing sandboxing', 'Scanning for IoCs'],
      explanation: '',
      questionNumber: 220
    },
    {
      question: 'A company experienced a data breach, resulting in the disclosure of extremely sensitive data regarding a merger. As a regulated entity, the company must comply with reporting and disclosure requirements. The company is concerned about its public image and shareholder values. Which of the following best supports the organization in addressing its concerns?',
      answer: 'Crisis management plan',
      distractors: ['Data subject access request', 'Business impact analysis', 'Supply chain management program'],
      explanation: '',
      questionNumber: 221
    },
    {
      question: 'Company A acquired Company В and needs to determine how the acquisition will impact the attack surface of the organization as a whole. Which of the following is the best way to achieve this goal?',
      answer: [
        `Documenting third-party connections used by Company В`,
        `Performing an architectural review of Company B's network`
      ],
      distractors: [
        `Implementing DLP controls preventing sensitive data from leaving Company B's network`,
        'Reviewing the privacy policies currently adopted by Company В',
        'Requiring data sensitivity labeling for all files shared with Company В',
        `Forcing a password reset requiring more stringent passwords for users on Company B's network`
      ],
      explanation: '',
      questionNumber: 222
    },
    {
      question: 'After an incident occurred, a team reported during the lessons-learned review that the team:\n\n' +
        '`- Lost important information for further analysis`\n\n' +
        '`- Did not utilize the chain of communication`\n\n' +
        '`- Did not follow the right steps for a proper response`\n\n' +
        'Which of the following solutions is the best way to address these findings?',
      answer: 'Building playbooks for different scenarios and performing regular table-top exercises',
      distractors: [
        'Requesting budget for better forensic tools to improve technical capabilities for incident response operations',
        'Requiring professional incident response certifications for each new team member',
        'Publishing the incident response policy and enforcing it as part of the security awareness program'
      ],
      explanation: '223',
      questionNumber: 223
    },
    {
      question: 'A security analyst is reviewing the following code in the public repository for potential risk concerns:\n\n' +
        `![Question 224](${imgPath(224)})\n\n` +
        'Which of the following should the security analyst recommend first to remediate the vulnerability?',
      answer: 'Revoking the secret used in the solution',
      distractors: [
        'Developing role-based security awareness training',
        'Purging code from public view',
        'Scanning the application with SAST'
      ],
      explanation: '',
      questionNumber: 224
    },
    {
      question: 'After remote desktop capabilities were deployed in the environment various vulnerabilities were noticed:\n\n' +
        '`- Exfiltration of intellectual property`\n\n' +
        '`- Unencrypted files`\n\n' +
        '`- Weak user passwords`\n\n' +
        'Which of the following is the best way to mitigate these vulnerabilities?',
      answer: [
        'Implementing data loss prevention',
        'Deploying directory-based group policies'
      ],
      distractors: [
        'Deploying file integrity monitoring',
        'Restricting access to critical file services only',
        'Enabling modem authentication that supports MFA',
        'Implementing a version control system',
        'Implementing a CMDB platform'
      ],
      explanation: '225',
      questionNumber: 225
    },
    {
      question: 'An audit finding reveals that a legacy platform has not retained logs for more than 30 days. The platform has been segmented due to its interoperability with newer technology. As a temporary solution, the IT department changed the log retention to 120 days. Which of the following should the security engineer do to ensure the logs are being properly retained?',
      answer: 'Configure the SIEM to aggregate the logs',
      distractors: [
        'Configure a scheduled task nightly to save the logs',
        'Configure event-based triggers to export the logs at a threshold',
        'Configure a Python script to move the logs into a SQL database'
      ],
      explanation: '',
      questionNumber: 226
    },
    {
      question: 'A company recently experienced an incident in which an advanced threat actor was able to shim malicious code against the hardware stack of a domain controller. The forensic team cryptographically validated that both the underlying firmware of the box and the operating system had not been compromised. However, the attacker was able to exfiltrate information from the server using a steganographic technique within LDAP. Which of the following is the best way to reduce the risk of reoccurrence?',
      answer: 'Enforcing allow lists for authorized network ports and protocols',
      distractors: [
        'Measuring and attesting to the entire boot chain',
        'Rolling the cryptographic keys used for hardware security modules',
        'Using code signing to verify the source of OS updates'
      ],
      explanation: '',
      questionNumber: 227
    },
    {
      question: 'A company designs policies and procedures for hardening containers deployed in the production environment. However, a security assessment reveals that deployed containers are not complying with the security baseline. Which of the following solutions best addresses this issue throughout early life-cycle stages?',
      answer: 'Creating a pipeline to check the containers through security gates and validating the baseline controls before the final deployment',
      distractors: [
        'Installing endpoint agents on each container and setting them to report when configurations drift from the baseline',
        'Finding hardened container images and enforcing them as the baseline for new deployments',
        'Running security assessments regularly and checking for the security baseline on containers already in production'
      ],
      explanation: '',
      questionNumber: 228
    },
    {
      question: 'A security architect for a global organization with a distributed workforce recently received funding to deploy a CASB solution. Which of the following most likely explains the choice to use a proxy-based CASB?',
      answer: 'The capability to block unapproved applications and services is possible',
      distractors: [
        'Privacy compliance obligations are bypassed when using a user-based deployment',
        'Protecting and regularly rotating API secret keys requires a significant time commitment',
        'Corporate devices cannot receive certificates when not connected to on-premises devices'
      ],
      explanation: '',
      questionNumber: 229
    },
    {
      question: 'A user tried to access a web page at http://10.1.11. Previously the web page did not require authentication, and now the browser is prompting for credentials. Which of the following actions would best prevent the issue from reoccurring and reduce the likelihood of credential exposure?',
      answer: 'Modifying web server configuration and utilizing X509 certificates for authentication',
      distractors: [
        'Implementing 802.1x EAP-TTLS on access points to reduce the risk of evil twins',
        'Transitioning internal services to use DNS security',
        'Installing new rules for the IDS to detect impersonation attacks'
      ],
      explanation: '',
      questionNumber: 230
    },
    {
      question: 'A compliance officer is reviewing the data sovereignty laws in several countries where the organization has no presence. Which of the following is the most likely reason for reviewing these laws?',
      answer: 'The organization is concerned with new regulatory enforcement in other countries',
      distractors: [
        'The organization is performing due diligence of potential tax issues',
        'The organization has been subject to legal proceedings in countries where it has a presence',
        'The organization has suffered brand reputation damage from incorrect media coverage'
      ],
      explanation: '',
      questionNumber: 231
    },
    {
      question: 'Audit findings indicate several user endpoints are not utilizing full disk encryption. During the remediation process, a compliance analyst reviews the testing details for the endpoints and notes the endpoint device configuration does not support full disk encryption. Which of the following is the most likely reason the device must be replaced?',
      answer: 'The motherboard was not configured with a TPM from the OEM supplier',
      distractors: [
        'The HSM is outdated and no longer supported by the manufacturer',
        'The vTPM was not properly initialized and is corrupt',
        'The HSM is vulnerable to common exploits and a firmware upgrade is needed',
        'The HSM does not support sealing storage'
      ],
      explanation: '',
      questionNumber: 232
    },
    {
      question: 'A company\'s security policy states that any publicly available server must be patched within 12 hours after a patch is released. A recent IIS zero-day vulnerability was discovered that affects all versions of the Windows Server OS:\n\n' +
        `![Question 233](${imgPath(233)})\n\n` +
        'Which of the following hosts should a security analyst patch first once a patch is available?',
      answer: '4',
      distractors: ['1', '2', '3', '5', '6'],
      explanation: '',
      questionNumber: 233
    },
    {
      question: 'A central bank implements strict risk mitigations for the hardware supply chain, including an allow list for specific countries of origin. Which of the following best describes the cyberthreat to the bank?',
      answer: 'Physical implants and tampering',
      distractors: [
        'Ability to obtain components during wartime',
        'Fragility to DDoS and other availability attacks',
        'Non-conformance to accepted manufacturing standards'
      ],
      explanation: '',
      questionNumber: 234
    },
    {
      question: 'An organization has noticed an increase in phishing campaigns utilizing typosquatting. A security analyst needs to enrich the data for commonly used domains against the domains used in phishing campaigns. The analyst uses a log forwarder to forward network logs to the SIEM. Which of the following would allow the security analyst to perform this analysis?',
      answer: 'Create a parser that matches domains',
      distractors: [
        'Use a cron job to regularly update and compare domains',
        'Develop a query that filters out all matching domain names',
        'Implement a dashboard on the SIEM that shows the percentage of traffic by domain'
      ],
      explanation: '',
      questionNumber: 235
    },
    {
      question: 'A security analyst wants to use lessons learned from a prior incident response to reduce dwell time in the future. The analyst is using the following data points:\n\n' +
        `![Question 236](${imgPath(236)})\n\n` +
        'Which of the following would the analyst most likely recommend?',
      answer: 'Adjusting the SIEM to alert on attempts to visit phishing sites',
      distractors: [
        'Allowing TRACE method traffic to enable better log correlation',
        'Enabling alerting on all suspicious administrator behavior',
        'Utilizing allow lists on the WAF for all users using GET methods'
      ],
      explanation: '',
      questionNumber: 236
    },
    {
      question: 'After a penetration test on the internal network the following report was generated:\n\n' +
        `![Question 237](${imgPath(237)})\n\n` +
        'Which of the following should be recommended to remediate the attack?',
      answer: 'Rotating KRBTGT password',
      distractors: ['Deleting SQLSV', 'Reimaging ADMIN01$', 'Resetting the local domain'],
      explanation: '',
      questionNumber: 237
    },
    {
      question: 'A security engineer is given the following requirements:\n\n' +
        '`- An endpoint must only execute internally signed applications.`\n\n' +
        '`- Administrator accounts cannot install unauthorized software`\n\n' +
        '`- Attempts to run unauthorized software must be logged`\n\n' +
        'Which of the following best meets these requirements?',
      answer: 'Configuring application control with blocked hashes and enterprise-trusted root certificates',
      distractors: [
        'Maintaining appropriate account access through directory management and controls',
        'Implementing a CSPM platform to monitor updates being pushed to applications',
        'Deploying an EDR solution to monitor and respond to software installation attempts'
      ],
      explanation: '238',
      questionNumber: 238
    },
    {
      question: 'After an organization met with its ISAC, the organization decided to test the resiliency of its security controls against a small number of advanced threat actors. Which of the following will enable the security administrator to accomplish this task?',
      answer: 'Adversary emulation',
      distractors: ['Reliability factors', 'Deployment of a honeypot', 'Internal reconnaissance'],
      explanation: '',
      questionNumber: 239
    },
    {
      question: 'After a cybersecurity incident, a security analyst was able to collect a binary that the attacker used on the compromised server. Then the analyst ran the following command:\n\n' +
        `![Question 240](${imgPath(240)})\n\n` +
        'Which of the following options describes what the analyst is trying to do?',
      answer: 'To extract IoCs from the binary used on the attack',
      distractors: [
        'To reconstruct the timeline of commands executed by the binary',
        'To replicate the attack in a secure environment',
        'To debug the binary to analyze low-level instructions'
      ],
      explanation: '',
      questionNumber: 240
    },
    {
      question: `A senior security engineer flags the following log file snippet as having likely facilitated an attacker's lateral movement in a recent breach:\n\n` +
        `![Question 241](${imgPath(241)})\n\n` +
        'Which of the following solutions, if implemented, would mitigate the risk of this issue reoccurring?',
      answer: 'Disabling DNS zone transfers',
      distractors: [
        'Restricting DNS traffic to UDP/53',
        'Implementing DNS masking on internal servers',
        'Permitting only clients from internal networks to query DNS'
      ],
      explanation: '',
      questionNumber: 241
    },
    {
      question: 'To prevent data breaches, security leaders at a company decide to expand user education to:\n\n' +
        '`- Create a healthy security culture`\n\n' +
        '`- Comply with regulatory requirements`\n\n' +
        '`- Improve incident reporting`\n\n' +
        'Which of the following would best meet their objective?',
      answer: 'Simulating a phishing campaign',
      distractors: [
        'Performing a DoS attack',
        'Scheduling regular penetration tests',
        'Deploying fake ransomware'
      ],
      explanation: '242',
      questionNumber: 242
    },
    {
      question: '',
      answer: '',
      distractors: [
        '',
        '',
        ''
      ],
      explanation: '',
      questionNumber: 243
    }
  ]
};

export default securityQuiz;

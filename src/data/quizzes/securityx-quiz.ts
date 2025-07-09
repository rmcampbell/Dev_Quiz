import imageMap from '../../utils/assets.ts';
import { Acronym, Term } from '../../types';

const imgPath = (num: number|string) => {
  const numStr = typeof num === 'number' ? num.toString().padStart(3, '0') : num;
  return imageMap?.[`../images/CAS-005_${numStr}.webp`] || imageMap?.[`../images/CAS-005_${numStr}.png`];
};

// Security-related terms
const terms: Term[] = [
  {
    term: 'Collision Resistance',
    definition: 'In the context of cryptographic hash functions, means that it is computationally difficult to find ' +
      'two different input values that produce the same hash output. This property is crucial for ensuring the ' +
      'integrity and security of various cryptographic applications. ',
    notes: 'A collision occurs when two different inputs produce the same hash output.',
    example: 'Imagine a hash function that outputs a 10-bit hash. A naive approach to finding a collision would be ' +
      'to try all possible 10-bit outputs. However, a collision-resistant hash function makes this computationally ' +
      'infeasible. '
  },
  {
    term: 'Key Stretching',
    definition: '',
    notes: '',
    example: ''
  },
  {
    term: 'Port Mirroring',
    definition: '',
    notes: '',
    example: ''
  },
  {
    term: 'Port Security',
    definition: '',
    notes: '',
    example: ''
  },
  {
    term: 'Rainbow Table',
    definition: '',
    notes: '',
    example: ''
  },
  {
    term: 'Salting',
    definition: '',
    notes: '',
    example: ''
  },
  {
    term: 'Separation of duties',
    definition: 'Helps prevent fraud by ensuring no single person has control over all aspects of a process.',
    notes: '',
    example: ''
  },
  {
    term: 'Split Knowledge',
    definition: '',
    notes: '',
    example: ''
  }
];

// Security-related acronyms
const acronyms: Acronym[] = [
  {
    acronym: '2FA',
    actual: 'Two Factor Authentication',
    definition: 'Adds an extra layer of security to online accounts by requiring two separate verification methods, typically a password and a code sent to a mobile device.  This makes it significantly harder for unauthorized users to gain access, even if they have stolen or guessed a password. MFA essentially creates a barrier that requires more than just a password to be bypassed.',
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'SWG',
    actual: 'Secure Web Gateway',
    definition: `a network security solution that monitors and controls user access to the internet, protecting against web-based threats and enforcing security policies. It acts as an intermediary between users and the internet, filtering web traffic to ensure it meets the organization's security requirements.`,
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'ZTA',
    actual: 'Zero Trust Architecture',
    definition: 'A cybersecurity approach that assumes no user or device, regardless of location, can be trusted by default and requires continuous verification and authorization for access to resources.',
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'YARA',
    actual: 'Yet Another Ridiculous Acronym',
    definition: 'an open-source tool used in cybersecurity for creating and applying rules to detect malware and other malicious files based on textual and binary patterns.  These rules, known as YARA rules, allow security analysts to identify and classify threats, enabling them to respond more effectively to cyberattacks.',
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'TOC/TOU',
    actual: 'Time-of-check/Time-of-Use',
    definition: `a class of software bugs caused by a race condition involving the checking of the state of a part of a system (such as a security credential) and the use of the results of that check. also known as TOCTOU or TOCTTOU) refers to a type of race condition vulnerability. It occurs when a system checks the state of a resource (like a file or socket) and then uses that state, but the resource's state changes between the check and its use. This change can cause the system to behave incorrectly or create a security vulnerability.`,
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'SIEM',
    actual: 'Security Information and Event Management',
    definition: 'Refers to the process of collecting, storing, and analyzing log data from various sources within an IT environment to gain a comprehensive understanding of security events and activities. SIM is a core component of SIEM (Security Information and Event Management), which also includes SEM (Security Event Management) for real-time monitoring and analysis of security events.',
    additionalAcronyms: [''],
    notes: ''
  },
  {
    acronym: 'SASE',
    actual: 'Secure Access Service Edge',
    definition: 'A cloud-based network architecture that combines wide area networking (WAN) capabilities with security services, like secure web gateways (SWG), cloud access security brokers (CASB), and zero-trust network access (ZTNA), to provide secure and optimized access to applications and data, regardless of user or resource location.',
    additionalAcronyms: [''],
    notes: ''
  }
];

const securityXQuiz = {
  category: 'SecurityX',
  terms,
  acronyms,
  questions: [
    {
      question: 'A security engineer is reviewing event logs because an employee successfully connected a personal Windows laptop to the corporate network, which is against company policy. Company policy allows all Windows 10 and 11 laptops to connect to the system as long as the MDM agent installed by IT is running. Only compliant devices can connect, and the logic in the system to evaluate compliant laptops is as follows:\n\n' +
        `![Question](${imgPath(1)})\n\n` +
        'Which of the following most likely occurred when the employee connected a personally owned Windows laptop and was allowed on the network?',
      answer: 'The OS was a valid version, but the MDM agent was not installed, triggering a true positive',
      distractors: [
        'The OS was running a Windows version below 10 and triggered a false negative',
        'The agent was not running on the laptop, which triggered a false positive',
        'The OS version was higher than 11, and the MDM agent was running, triggering a true negative'
      ],
      explanation: '(1) Many organizations require a Mobile Device Management (MDM) agent or similar endpoint security software to be installed on any device connecting to their network for security and compliance. A personally owned laptop is unlikely to have this corporate-mandated agent pre-installed. If the network access control (NAC) or endpoint detection system identifies the absence of the required MDM agent and flags the device as non-compliant, this is a true positive (a correct detection of a non-compliant condition).\n\n' +
      'A false negative occurs when a security system fails to detect a genuine threat, incorrectly classifying it as harmless. This means a malicious activity, vulnerability, or attack is not identified by the security tool, allowing it to operate undetected and potentially cause significant damage.\n\n' +
      'A false positive occurs when a security system incorrectly identifies legitimate activity or a safe file as a threat. This can lead to wasted time, alert fatigue, and even the overlooking of actual threats.\n\n' +
      `A true positive occurs when a security system correcty identifies a malicious activity or threat. This means the system's detection mechanisms accurately flag a real attack or vulnerability, and the system responds appropriately, such as by triggering an alert, blocking an intrusion, or initiating other security measures.\n\n` +
      `A true negative (TN) occurs when a security system correctly identifies and classifies a situation as non-threatening or benign, and there is indeed no actual threat present. Essentially, it's a correct "no threat" determination by the system.`,
      references: [
        {
          title: 'Mobile Device Management Overview',
          url: 'https://learn.microsoft.com/en-us/windows/client-management/mdm-overview'
        },
        {
          title: 'Understanding False Negatives',
          url: 'https://www.checkpoint.com/cyber-hub/cyber-security/understanding-false-negatives-in-cybersecurity/#:~:text=In%20cybersecurity%2C%20a%20false%20negative,instead%20of%20a%20positive%20one'
        },
        {
          title: 'Understanding False Positives',
          url: 'https://www.checkpoint.com/cyber-hub/cyber-security/understanding-false-positives-in-cybersecurity/#:~:text=False%20positives%20in%20cybersecurity%20are,categorizing%20an%20email%20as%20unsafe'
        },
        {
          title: 'Catching True Positives',
          url: 'https://securityboulevard.com/2022/01/catching-true-positives-in-network-security/'
        },
        {
          title: 'What is a True Negative',
          url: 'https://www.cycognito.com/glossary/true-negative.php'
        }
      ],
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
      explanation: '(2) Separation of duties, also known as segregation of duties, is a principle that ensures no single individual has complete control over a process or system. It involves dividing key tasks and responsibilities among multiple people to reduce the risk of fraud, error, and unauthorized access. This principle is crucial in various fields like finance, IT, and cybersecurity.\n\n' +
      'The principle of least privilege in cybersecurity dictates that users, applications, and processes should only be granted the minimum necessary access to resources needed to perform their tasks. This limits the potential damage from security breaches and errors by restricting access to only what is essential.\n\n' +
      `Security awareness training is crucial for bolstering an organization's cybersecurity posture by educating employees on cyber threats and best practices. It equips individuals with the knowledge to identify and mitigate risks, reducing the likelihood of successful attacks. This training is essential for all levels of employees and should be tailored to the organization's specific needs and policies.\n\n` +
      'Job rotations involves moving employees between different roles or teams within an organization to enhance their skills and knowledge while also improving security posture. These rotations can be formal programs or informal practices. They are beneficial for developing a well-rounded cybersecurity workforce, reducing insider threats, and improving access control.\n\n' +
      `Mandatory vacation policies, also known as mandatory time-off, are a cybersecurity control designed to detect potential fraud, errors, or other malicious activities by requiring employees to take a set period of time away from their work duties. During this period, another employee can step into the absent employee's role and review their work, potentially uncovering inconsistencies, errors, or fraudulent activities.\n\n` +
      'Quarterly access reviews are a crucial part of a strong cybersecurity strategy. They involve systematically evaluating and verifying user access rights to systems, applications, and data to ensure they align with job roles and regulatory requirements. By conducting these reviews regularly, organizations can identify and address potential security risks, maintain compliance, and protect sensitive information.',
      references: [
        {
          title: 'Separation of Duties',
          url: 'https://pathlock.com/learn/separation-of-duties-in-your-organization/'
        },
        {
          title: 'What is the principal of least privilege?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege#:~:text=The%20principle%20of%20least%20privilege%20(PoLP)%20is%20an%20information%20security,to%20complete%20a%20required%20task'
        },
        {
          title: '7 reasons why security awareness training is important',
          url: 'https://www.cybsafe.com/blog/7-reasons-why-security-awareness-training-is-important/#:~:text=Security%20awareness%20training%20helps%20protect,potential%20threats%20and%20respond%20appropriately'
        },
        {
          title: 'Why is Job Rotation important?',
          url: 'https://www.hibob.com/hr-glossary/job-rotation/#:~:text=Job%20rotation%20programs%20involve%20systematically,deeper%20understanding%20of%20the%20business'
        },
        {
          title: 'What is a Mandatory Vacation Policy?',
          url: 'https://day-off.app/2024/02/18/understanding-the-mandatory-vacation-policy/'
        },
        {
          title: 'What is a user access review?',
          url: 'https://secureframe.com/blog/user-access-reviews'
        }
      ],
      questionNumber: 2
    },
    {
      question: `A security architect discovers the following while reviewing code for a company's website:\n\n` +
        '`selection = "SELECT Item FROM Catalog WHERE ItemID = " & Request("ItemID")`\n\n' +
      'Which of the following should the security architect recommend?',
      answer: 'Query parameterization',
      distractors: [
        'Client-side processing',
        'Data normalization',
        'Escape character blocking',
        'URL encoding'
      ],
      explanation: '(3) query parameterization is a vital technique for securing database applications and improving query performance. It helps prevent SQL injection attacks by separating the query logic from user-supplied data and can also lead to performance improvements through caching and pre-compilation.\n\n' +
      `Client-side processing, in the context of cybersecurity, refers to the security measures taken to protect the parts of a web application that run directly on the user's device, typically within their web browser. Client-side security is crucial because modern web applications rely heavily on client-side processing to provide dynamic and interactive experiences, but this also exposes them to various security vulnerabilities.\n\n` +
      'Data normalization in cybersecurity is the process of standardizing data from various sources into a consistent format for easier analysis and correlation. This process is crucial for effective incident response, threat detection, and overall security posture management. By transforming diverse data types and structures into a unified format, security teams can overcome the challenges of analyzing information from multiple security tools and platforms.\n\n' +
      '"Escape character blocking" refers to a technique used to prevent injection attacks, which are a major security vulnerability. Attackers can use special characters that have different meanings in a programming language or command shell to inject malicious code into an application.\n\n' +
      `URL encoding, also known as percent-encoding, is a mechanism to represent characters in URLs that are not allowed or might cause issues during transmission. It's a fundamental part of cybersecurity as it ensures URLs are correctly interpreted by web browsers and servers, preventing potential vulnerabilities like cross-site scripting (XSS) or SQL injection attacks.`,
      references: [
        {
          title: 'Parameterized Queries, How and Why on Utilization',
          url: 'https://techcommunity.microsoft.com/blog/sqlserver/how-and-why-to-use-parameterized-queries/383483'
        },
        {
          title: 'What is Client-Side Security?',
          url: 'https://www.feroot.com/education-center/what-is-client-side-security/#:~:text=Client%2Dside%20security%20protects%20the,privacy%2C%20compliance%2C%20and%20trust'
        },
        {
          title: 'Data Normalization for Security and Why It Matters',
          url: 'https://www.leen.dev/post/data-normalization-for-security-why-it-matters#:~:text=your%20best%20ally.-,Understanding%20Data%20Normalization%20in%20Cybersecurity,each%20with%20its%20own%20format'
        },
        {
          title: 'What are some common characters to prevent command injection attacks?',
          url: 'https://eitca.org/cybersecurity/eitc-is-wapt-web-applications-penetration-testing/overthewire-natas/overthewire-natas-walkthrough-level-5-10-lfi-and-command-injection/examination-review-overthewire-natas-walkthrough-level-5-10-lfi-and-command-injection/what-are-some-common-characters-or-sequences-that-are-blocked-or-sanitized-to-prevent-command-injection-attacks/' 
        },
        {
          title: 'The Importance of URL Encoding in Web Security',
          url: 'https://bluegoatcyber.com/blog/the-importance-of-url-encoding-in-web-security/#:~:text=URL%20encoding%20is%20a%20process,by%20web%20servers%20and%20browsers'
        }
      ],
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
      explanation: '(4) `ansible.cfg` is a configuration file that allows you to customize various aspects of Ansible\'s behavior. It\'s used to define settings like the default inventory file, module search paths, and connection parameters, among others.\n\n' +
      'Kubernetes security involves protecting containerized applications running on Kubernetes from various threats, including unauthorized access, misconfigurations, and vulnerabilities. It encompasses securing clusters, nodes, containers, applications, and the network infrastructure. Key areas include RBAC, network policies, container image security, and secret management.\n\n' +
      'Ansible, while not a cybersecurity tool in itself, plays a crucial role in automating and enhancing cybersecurity practices. It can be used to automate security tasks like patching, vulnerability scanning, compliance auditing, and incident response, strengthening overall security posture.\n\n' +
      'In Kubernetes, the "--insecure-bind-address" flag, when set, allows the API server to listen on an insecure port (typically 8080 by default, but configurable) without requiring authentication or encryption. This creates a significant security risk, as anyone who can reach that port can potentially interact with the cluster without proper authorization. Therefore, it is generally recommended to avoid using this flag and instead rely on secure communication channels for accessing the API server.',
      references: [
        {
          title: 'Basic Ansible',
          url: 'https://www.youtube.com/watch?v=F5LsMndrTrs&t=50'
        },
        {
          title: 'What is Kubernetes? - Cheatsheet',
          url: 'https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html'
        },
        {
          title: 'How Ansible Works',
          url: 'https://www.redhat.com/en/ansible-collaborative/how-ansible-works#:~:text=Ansible%20is%20an%20open%20source,simplicity%20and%20ease%20of%20use'
        },
        {
          title: 'Enhancing Security of the Kubernetes API',
          url: 'https://kubeops.net/kubernetes-security-library/measures/1-enhancing-security-of-the-kubernetes-api-server'
        }
      ],
      questionNumber: 4
    },
    {
      question: 'A CRM company leverages a CSP PaaS service to host and publish Its SaaS product. Recently, a large customer requested that all infrastructure components must meet strict regulatory requirements, including configuration management, patch management, and life-cycle management. Which of the following organizations is responsible for ensuring those regulatory requirements are met?',
      answer: 'The CRM company',
      distractors: [`The CRM company's customer`, 'The CSP', 'The regulatory body'],
      explanation: '(5) Customer Relationship Management (CRM) system is a software application used to manage and automate various aspects of customer interactions, including sales, marketing, and customer service. Examples of CRM systems include Salesforce, HubSpot CRM, and Microsoft Dynamics 365.\n\n' +
      'Cloud service providers (CSPs) are third-party companies that offer on-demand access to computing resources like servers, storage, and applications over the internet. They allow businesses to rent these resources instead of purchasing and maintaining their own physical infrastructure. Think of it like renting an apartment instead of buying a house – you get the benefits of having a place to live without the long-term commitment and responsibility of ownership.\n\n' +
      'A regulatory body is a public authority or government agency responsible for overseeing and enforcing rules and regulations within a specific industry or sector, ensuring compliance and promoting standards. In the context of Information Technology (IT), this often involves setting and enforcing standards for data privacy, security, and the responsible use of technology.\n\n' +
      'PaaS (Platform as a Service) cybersecurity focuses on protecting the applications, data, and underlying infrastructure within a PaaS environment. This involves securing the platform itself, as well as the applications and data deployed on it, from various threats. PaaS providers and users share responsibility for security, with providers typically handling infrastructure security and users focusing on application and data security.',
      references: [
        {
          title: 'What is CRM?',
          url: 'https://www.zendesk.com/dk/sell/crm/what-is-crm/'
        },
        {
          title: 'What is a cloud service provider?',
          url: 'https://cloud.google.com/learn/what-is-a-cloud-service-provider'
        },
        {
          title: 'Regulatory Body',
          url: 'https://www.sciencedirect.com/topics/computer-science/regulatory-body#:~:text=A%20regulatory%20body%20is%20an,practices%20in%20their%20respective%20domains'
        },
        {
          title: 'What is Platform as a Service?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/platform-as-a-service-paas#:~:text=Platform%20as%20a%20service%20(PaaS)%2C%20is%20a%20cloud%20computing,quickly%20develop%20software%20and%20applications'
        }
      ],
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
      explanation: '(6) incident response plan is a documented strategy outlining how an organization will detect, respond to, and recover from cybersecurity incidents or other disruptions.\n\n Disaster recovery plan (DRP), on the other hand, addresses broader disruptions, including natural disasters, equipment failures, and cyberattacks, with the goal of restoring systems and operations after a major incident.\n\n' +
      'Hot, warm, and cold sites are three different approaches to disaster recovery (DR) sites, each offering varying levels of preparedness and cost. A hot site is a fully operational, mirrored environment ready to take over immediately, while a cold site is a basic facility requiring significant setup, and a warm site is a compromise between the two.\n\n' +
      `BIA stands for Business Impact Analysis. It's a systematic process used to identify and assess the potential effects of disruptions to critical business operations due to cyber incidents or other events. The primary goal of a BIA is to understand the financial, operational, and reputational consequences that could arise from such disruptions.`,
      references: [
        {
          title: 'Incident response vs Disaster Recovery',
          url: 'https://www.zengrc.com/blog/incident-response-plan-vs-disaster-recovery-plan/#:~:text=Where%20an%20IRP%20focuses%20on,business%20functions%20across%20all%20departments'
        },
        {
          title: 'Types of Disaster Recovery Sites',
          url: 'https://blog.icorps.com/bid/101789/types-of-disaster-recovery-sites'
        },
        {
          title: 'What is BIA?',
          url: 'https://www.geeksforgeeks.org/ethical-hacking/what-is-bia-in-cyber-security/'
        }
      ],
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
      explanation: '(7) Minimum length of the passwords should be enforced by the application. Passwords shorter than 8 characters are considered to be weak (NIST SP800-63B). Maximum password length should be at least 64 characters to allow passphrases (NIST SP800-63B).\n\n' +
      'Require passwords to be a minimum of eight characters, with a recommended minimal length of 15 characters. Allow passwords to be up to 64 characters long. Accept all printing ASCII [RFC20] characters and the space character in passwords.',
      references: [
        {
          title: 'Authentication Cheat Sheet',
          url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html'
        },
        {
          title: 'NIST Password Guidelines',
          url: 'https://www.strongdm.com/blog/nist-password-guidelines'
        }
      ],
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
      explanation: '(8) Association MAC address randomization is a security and privacy feature in Wi-Fi where a device, when connecting to a network, uses a randomized MAC address instead of its actual hardware MAC address.\n\n' +
      `A Service Set Identifier (SSID) is the name of a Wi-Fi network that devices use to connect. While SSIDs themselves don't provide security, they are a crucial part of the authentication process. Strong security measures like WPA2/3 encryption and strong passwords, combined with proper SSID configuration (like changing the default and potentially disabling broadcasting), are vital for protecting a Wi-Fi network.\n\n` +
      'Wireless network auto-joining, while convenient, presents significant cybersecurity risks, particularly with open or unsecured networks. Automatically connecting to unknown or malicious networks can expose your device and data to potential threats like hacking, malware, and data interception.\n\n' +
      '802.1X with mutual authentication provides a robust security framework for network access control. It ensures both the client and the network authenticate each other before granting access, enhancing security against unauthorized access and various network attacks. This is typically achieved through the use of digital certificates and encryption, making it more secure than traditional password-based authentication.',
      references: [
        {
          title: 'WiFi Mac Randomization',
          url: 'https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior'
        },
        {
          title: 'What is a Service Set Identifier?',
          url: 'https://www.fortinet.com/resources/cyberglossary/service-set-identifier-ssid'
        },
        {
          title: '12 Best Practices for Wireless Network Security',
          url: 'https://www.globalsign.com/en/blog/12-best-practices-wireless-network-security'
        },
        {
          title: '802.1X Overview and EAP Types',
          url: 'https://www.intel.com/content/www/us/en/support/articles/000006999/wireless/legacy-intel-wireless-products.html'
        },
        {
          title: '802.1x: The Key to Secure Network Access',
          url: 'https://www.numberanalytics.com/blog/8021x-secure-network-access'
        }
      ],
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
      explanation: '(9) false negative occurs when a security system fails to detect a threat or vulnerability that actually exists. This means a threat is missed, and the security system incorrectly indicates that no issues were found when a problem exists.\n\n' +
      'A false negative occurs when a security system fails to detect a genuine threat, incorrectly classifying it as harmless. This means a malicious activity, vulnerability, or attack is not identified by the security tool, allowing it to operate undetected and potentially cause significant damage.\n\n' +
      'A false positive occurs when a security system incorrectly identifies legitimate activity or a safe file as a threat. This can lead to wasted time, alert fatigue, and even the overlooking of actual threats.\n\n' +
      `A true positive occurs when a security system correcty identifies a malicious activity or threat. This means the system's detection mechanisms accurately flag a real attack or vulnerability, and the system responds appropriately, such as by triggering an alert, blocking an intrusion, or initiating other security measures.\n\n` +
      `A true negative (TN) occurs when a security system correctly identifies and classifies a situation as non-threatening or benign, and there is indeed no actual threat present. Essentially, it's a correct "no threat" determination by the system.`,
      references: [
        {
          title: 'False Negative',
          url: 'https://www.contrastsecurity.com/glossary/false-negative'
        },
        {
          title: 'Understanding False Positives',
          url: 'https://www.checkpoint.com/cyber-hub/cyber-security/understanding-false-positives-in-cybersecurity/#:~:text=False%20positives%20in%20cybersecurity%20are,categorizing%20an%20email%20as%20unsafe'
        },
        {
          title: 'Catching True Positives',
          url: 'https://securityboulevard.com/2022/01/catching-true-positives-in-network-security/'
        },
        {
          title: 'What is a True Negative',
          url: 'https://www.cycognito.com/glossary/true-negative.php'
        }
      ],
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
      explanation: '(10) Non-repudiation: This means the sender cannot deny sending the message, because the digital signature proves the email came from them and was not altered in transit.\n\n' +
      'Body encryption in cybersecurity refers to the process of encrypting the content (body) of a message or data packet to protect it from unauthorized access or modification during transmission or storage. This is a crucial aspect of data security, ensuring sensitive information remains confidential and unreadable to anyone without the decryption key.\n\n' +
      `Code signing is a cyber security practice where a digital signature is added to software or code to verify its authenticity and integrity. This process ensures that the software hasn't been tampered with since it was signed and that it comes from a legitimate source. It helps users trust the software they are downloading and installing.\n\n` +
      `Sender authentication in cybersecurity, particularly for email, is a crucial method to verify the legitimacy of email senders and prevent spoofing and phishing attacks. It involves using protocols like SPF, DKIM, and DMARC to ensure emails are actually from the claimed sender and haven't been tampered with. These protocols work by checking the sender's domain, IP address, and message integrity, helping to block malicious emails and improve email deliverability.\n\n` +
      `A chain of custody refers to the documented trail of digital evidence from its collection to its use in legal proceedings, ensuring its integrity and admissibility in court. It's a meticulous process of tracking who accessed, handled, or modified the evidence, when, and why. This documentation is crucial for proving the evidence's authenticity and preventing it from being compromised or deemed unreliable.`,
      references: [
        {
          title: 'Non-repudation',
          url: 'https://www.sciencedirect.com/topics/computer-science/nonrepudiation#:~:text=Nonrepudiation%20refers%20to%20the%20inability,and%20accountability%20in%20computing%20environments'
        },
        {
          title: `Data Encryption Methods & Types: A Beginner's Guide`,
          url: 'https://www.splunk.com/en_us/blog/learn/data-encryption-methods-types.html'
        },
        {
          title: 'What is Code Signing?  How does Code Signing work?',
          url: 'https://www.encryptionconsulting.com/education-center/what-is-code-signing/'
        },
        {
          title: 'What is Email Authentication?',
          url: 'https://www.proofpoint.com/us/threat-reference/email-authentication'
        },
        {
          title: 'Why Chain of Custody is Key for Data Security and Business Growth',
          url: 'https://www.grax.com/blog/why-chain-of-custody-is-key-for-data-security-and-business-growth/'
        }
      ],
      questionNumber: 10
    },
    {
      question: 'A software development company wants to ensure that users can confirm the software is legitimate when installing it. Which of the following is the best way for the company to achieve this security objective?',
      answer: 'Code signing',
      distractors: ['Non-repudiation', 'Key escrow', 'Private keys'],
      explanation: '(11) Code signing uses a digital signature to verify that software has: Come from a trusted source (authenticity). Not been altered since it was signed (integrity). This allows users to confirm the software is legitimate during installation.\n\n' +
      'Non-repudiation: This means the sender cannot deny sending the message, because the digital signature proves the email came from them and was not altered in transit.\n\n' +
      `Key escrow is a system where encryption keys are securely stored by a trusted third party, allowing access to encrypted data under specific, authorized circumstances. It's a method for maintaining data accessibility while also potentially enabling access for law enforcement or in situations where the original key holder is unavailable.\n\n` +
      'Private keys are a critical component of cybersecurity, particularly in cryptography and digital signatures. They are used to encrypt and decrypt data, and also to verify the authenticity of digital signatures. Private keys should be kept secret and secure, as their compromise can lead to serious security breaches.',
      references: [
        {
          title: 'What is code signing?',
          url: 'https://www.digicert.com/faq/code-signing-trust/what-is-code-signing'
        },
        {
          title: 'Non-repudiation: Your Virtual Shield in Cybersecurity',
          url: 'https://www.tripwire.com/state-of-security/nonrepudiation-your-virtual-shield-cybersecurity'
        },
        {
          title: 'What is Escrow?  No, not related to mortgages!',
          url: 'https://www.twingate.com/blog/glossary/escrow'
        },
        {
          title: 'What is a Private Key and How Does it Work?',
          url: 'https://www.1kosmos.com/authentication/private-key/'
        }
      ],
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
      explanation: '(12) A. Configure firewall rules to block all external traffic -> This Restricts access so only internal users can connect, aligning with policy. B. Enable input validation for all fields -> Input validation is critical to prevent buffer overflow and other injection attacks.\n\n' +
      'Automatic updates are crucial for cybersecurity because they promptly deliver software patches and security fixes, closing potential vulnerabilities that cybercriminals exploit. By enabling automatic updates, users ensure their systems are protected against the latest threats without needing to manually check for and install updates. This proactive approach to security helps minimize the risk of malware, data breaches, and other cyberattacks.\n\n' +
      `To configure a security group to enable external traffic for cybersecurity, you need to add specific inbound rules to allow necessary traffic while ensuring outbound traffic is also managed securely. This involves identifying the type of traffic (e.g., HTTP, HTTPS, SSH), specifying the source (e.g., specific IP addresses, CIDR blocks, or other security groups), and defining the port(s) for communication. It's crucial to carefully consider security implications when allowing external traffic and restrict access to only what's needed.\n]n` +
      `A Data Loss Prevention (DLP) policy designed to alert for exfiltration cyber security involves creating rules that monitor and detect the unauthorized movement of sensitive data outside of an organization's control. This policy aims to identify and prevent data breaches, ensuring sensitive information remains protected and within the organization's security perimeter.\n\n` +
      'Nightly vulnerability scans are a crucial part of a comprehensive cyber security strategy, helping organizations identify and address potential security weaknesses in their systems and networks before they can be exploited by malicious actors. These automated scans proactively detect vulnerabilities, allowing for timely remediation and reducing the risk of cyberattacks.',
      references: [
        {
          title: 'Buffer Overflaw prevention',
          url: 'https://www.fortinet.com/resources/cyberglossary/buffer-overflow#:~:text=Application%20developers%20can%20prevent%20buffer,to%20detect%20and%20fix%20errors'
        },
        {
          title: 'Harnessing Automatic Updates: Stay Current, Stay Safe',
          url: 'https://www.lenovo.com/gb/en/glossary/automatic-updates/?orgRef=https%253A%252F%252Fwww.google.com%252F'
        },
        {
          title: 'Steps to Configure AWS Security Groups',
          url: 'https://skyhawk.security/steps-to-configure-aws-security-groups/'
        },
        {
          title: 'How to prevent data exfiltration in the cloud?',
          url: 'https://www.nightfall.ai/blog/dlp-101-how-to-prevent-data-exfiltration-in-the-cloud'
        },
        {
          title: 'What is Vulnerability Scanning?',
          url: 'https://www.beyondtrust.com/resources/glossary/vulnerability-scanning#:~:text=Vulnerability%20scanning%20is%20the%20process,hardware%2C%20software%2C%20and%20systems'
        }
      ],
      questionNumber: 12
    },
    {
      question: 'PKI can be used to support security requirements in the change management process. Which of the following capabilities does PKI provide for messages?',
      answer: 'Non-repudiation',
      distractors: ['Confidentiality', 'Delivery receipts', 'Attestation'],
      explanation: '(13) PKI (Public Key Infrastructure) supports several security goals, and one of its key features is non-repudiation — ensuring that: A sender cannot deny having sent a message. This is achieved through digital signatures, which use a sender’s private key to sign messages.\n\n' +
      'Non-repudiation in cybersecurity refers to the assurance that a party involved in a transaction or communication cannot deny the authenticity of their signature or the sending of a message at a later time.\n\n' +
      `Confidentiality in cybersecurity refers to protecting sensitive information from unauthorized access, ensuring that only authorized individuals can view or use it. It's a core principle of information security, alongside integrity and availability, often referred to as the CIA triad.\n\n` +
      'Delivery receipts, in the context of cybersecurity, involve the confirmation that a message or document has been delivered successfully to the intended recipient. While beneficial for user experience and operational efficiency, they can also introduce potential cybersecurity risks if not properly secured.\n\n' +
      'Attestation is the process of verifying the integrity, authenticity, and compliance of a system, identity, or workload—most often through cryptographic means.',
      references: [
        {
          title: 'Non-repudiation Definition',
          url: 'https://www.techtarget.com/searchsecurity/definition/nonrepudiation'
        },
        {
          title: 'What is Non Repudiation?',
          url: 'https://www.bitsight.com/glossary/non-repudiation-cyber-security#:~:text=Non%2Drepudiation%20in%20cybersecurity%20refers,message%20at%20a%20later%20time'
        },
        {
          title: 'What is the CIA Triad?  No, not that CIA!',
          url: 'https://www.fortinet.com/resources/cyberglossary/cia-triad#:~:text=1.,data%E2%80%94whether%20intentional%20or%20accidental'
        },
        {
          title: 'What are Delivery Receipts?',
          url: 'https://sendbird.com/learn/what-are-delivery-receipts'
        },
        {
          title: 'What is attestation?',
          url: 'https://www.oasis.security/glossary/attestation#:~:text=In%20cybersecurity%2C%20attestation%20is%20the,most%20often%20through%20cryptographic%20means'
        }
      ],
      questionNumber: 13
    },
    {
      question: 'Several unlabeled documents in a cloud document repository contain cardholder information. Which of the following configuration changes should be made to the DLP system to correctly label these documents in the future?',
      answer: 'Regular expressions',
      distractors: ['Digital rights management', 'Network traffic decryption', 'Watermarking'],
      explanation: '(14) DLP (Data Loss Prevention) systems use pattern matching to identify sensitive information like:"Credit card numbers", "Social Security numbers", "Bank account details". To detect cardholder information, DLP systems typically rely on: Regular expressions (regex) to match patterns such as the 16-digit format of credit card numbers. Additional logic like Luhn checks to validate numbers. By configuring the DLP system with appropriate regex patterns, it can automatically identify and label documents containing cardholder data in the future.\n\n' +
      `A regular expression (regex or regexp) is a sequence of characters that defines a search pattern. It's used to find, match, or validate specific text patterns within data, such as logs, files, or network traffic. Essentially, regex empowers security professionals to efficiently search for and analyze data by identifying patterns instead of specific words or phrases.\n\n` +
      'Digital rights management (DRM) is the use of technology to control and manage access to copyrighted material. Another DRM meaning is taking control of digital content away from the person who possesses it and handing it to a computer program. DRM aims to protect the copyright holder’s rights and prevents content from unauthorized distribution and modification.\n\n' +
      'Network traffic decryption involves intercepting and decrypting encrypted network traffic to inspect its contents for potential threats, such as malware or unauthorized access attempts. This process is crucial for maintaining a secure network environment, as it allows security systems to detect and respond to threats that may be hidden within encrypted communication.\n\n' +
      'Digital watermarking is a cybersecurity technique used to embed imperceptible identifiers within digital content (like documents, images, or audio) to verify ownership, track usage, and prevent unauthorized access or distribution. It acts as a security measure to protect sensitive information, deter data leakage, and enable tracing of content back to its source.',
      references: [
        {
          title: 'Regex Known Gibberish',
          url: 'https://www.splunk.com/en_us/blog/security/regex-regular-expression.html#:~:text=Known%20as%20RegEx%20(or%20gibberish,a%20log%2C%20regex%20is%20invaluable'
        },
        {
          title: 'Regular Expressions: A Quick Intro for Security Professionals',
          url: 'https://dzone.com/articles/regular-expressions-a-quick-intro-for-security-pro'
        },
        {
          title: 'What is Digital Rights Management (DRM)?',
          url: 'https://www.fortinet.com/resources/cyberglossary/digital-rights-management-drm#:~:text=File%20privacy%3A%20DRM%20helps%20organizations,reading%20confidential%20or%20sensitive%20information'
        },
        {
          title: 'What is SSL Decryption?',
          url: 'https://www.zscaler.com/resources/security-terms-glossary/what-is-ssl-decryption'
        },
        {
          title: 'Decryption Basics',
          url: 'https://docs.paloaltonetworks.com/network-security/decryption/administration/decryption-overview'
        },
        {
          title: 'What is Digital Watermarking?',
          url: 'https://www.digitalguardian.com/blog/digital-watermarking'
        }
      ],
      questionNumber: 14
    },
    {
      question: 'A systems administrator at a web-hosting provider has been tasked with renewing the public certificates of all customer sites. Which of the following would best support multiple domain names while minimizing the amount of certificates needed?',
      answer: 'SAN',
      distractors: ['OCSP', 'CRL', 'CAs'],
      explanation: '(15) The Subject Alternative Name (SAN) extension in an SSL/TLS certificate allows multiple domain names to be secured using a single certificate. This is ideal for a web hosting provider managing many customer sites, such as: "www.customer1.com", "mail.customer1.com", "customer2.net". Instead of issuing separate certificates for each domain, a SAN certificate consolidates them, minimizing overhead and simplifying management.\n\n' +
      'OCSP, or Online Certificate Status Protocol, is a security protocol used to verify the validity of digital certificates in real-time, primarily for SSL/TLS connections. It allows browsers to check if a certificate has been revoked by the issuing Certificate Authority (CA) before establishing a connection, adding a layer of security to online interactions.\n\n' +
      `A Certificate Revocation List (CRL) in cyber security is a list of digital certificates that have been revoked by a Certificate Authority (CA) before their expiration date. It's a crucial component of Public Key Infrastructure (PKI), used to ensure the validity and trustworthiness of digital certificates, which are essential for secure online communication. Essentially, a CRL helps prevent the use of potentially compromised or untrusted certificates.\n\n` +
      'Certificate Authorities (CAs) are vital for cybersecurity as they issue and manage digital certificates, which are essential for verifying the identity of websites and other entities online. These certificates enable secure communication and transactions by providing a chain of trust between users, websites, and other online services. Without CAs, the internet would be vulnerable to impersonation and fraud, making secure online activities like shopping and banking risky.',
      references: [
        {
          title: 'Subject Alternative Name',
          url: 'https://www.sectigo.com/knowledge-base/detail/Subject-Alternative-Name-SAN-1527076087222/kA01N000000zFKm'
        },
        {
          title: 'What is OCSP?',
          url: 'https://www.sectigo.com/resource-library/how-the-online-certificate-status-protocol-and-ocsp-stapling-work-more'
        },
        {
          title: 'Waht is a certificate revocation list?',
          url: 'https://www.portnox.com/cybersecurity-101/certificate-revocation-list/'
        },
        {
          title: 'What is a certificate authority?',
          url: 'https://www.ssl.com/article/what-is-a-certificate-authority-ca/#:~:text=A%20certificate%20authority%20is%20a,documents%20known%20as%20digital%20certificates'
        }
      ],
      questionNumber: 15
    },
    {
      question: 'Which of the following best explains why organizations prefer to utilize code that is digitally signed?',
      answer: ['It provides origin assurance', 'It verifies integrity'],
      distractors: [
        'It provides increased confidentiality',
        'It integrates with DRMs',
        `It verifies the recipient's identity`,
        'It ensures the code is free of malware'
      ],
      explanation: '(16) Digitally signed code uses cryptographic techniques to: Provide origin assurance – Confirms the software came from a trusted, verified publisher. Verify integrity – Ensures the code has not been modified or tampered with after it was signed. These are the two main security benefits of digital code signing.\n\n' +
      'Checking code for malware is a critical component due to the potential for malicious code to cause significant damage, disruptions, and breaches.\n\n' +
      `Digital signatures provide a secure way to verify the identity of a recipient in cybersecurity by cryptographically linking a digital message or document to the sender's identity. This process ensures both the authenticity of the sender and the integrity of the message. By using a digital signature, the recipient can be confident that the message or document has not been tampered with and that it genuinely originated from the claimed sender.\n\n` +
      `Ensure confidentiality by encrypting the entire message with the recipient's public key. This means that only the recipient, who is in possession of the corresponding private key, can read the message. Verify the user's identity using the public key and checking it against a certificate authority.`,
      references: [
        {
          title: 'Securing Digital Trust',
          url: 'https://www.encryptionconsulting.com/securing-digital-trust-the-essentials-of-origin-verification/'
        },
        {
          title: 'Malicious Code: What it is and How to prevent it?',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/malicious-code/'
        },
        {
          title: 'Understanding Digital Signatures',
          url: 'https://www.cisa.gov/news-events/news/understanding-digital-signatures#:~:text=Digital%20signatures%20create%20a%20virtual,part%20of%20the%20digital%20signature'
        },
        {
          title: 'How to overcome Vulnerabilities in Digital Signatures',
          url: 'https://cybelangel.com/digital-signatures-are-the-cybersecurity-vulnerability-you-need-to-stop-ignoring/'
        }
      ],
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
      explanation: '(17) Fuzz testing (fuzzing) is a proactive dynamic application security testing technique where the system is bombarded with random, malformed, or unexpected inputs to discover: "Buffer overflows", "Input validation issues", "Memory corruption", "Remote code execution flaws". Since the report is about remote code execution, fuzzing is ideal to uncover other vulnerable paths in the same component or similar logic areas.\n\n' +
      'Exploitation frameworks are crucial tools in cybersecurity for uncovering vulnerabilities. They enable security professionals to simulate real-world attacks, identify weaknesses, and test security measures in a controlled environment. By using these frameworks, organizations can proactively address vulnerabilities before attackers can exploit them, improving their overall security posture.\n\n' +
      `Software Composition Analysis (SCA) tools are essential for identifying known vulnerabilities within the open-source and third-party components of software projects. These tools scan applications to detect security flaws, license compliance issues, and even malicious components within the software's supply chain. By flagging these vulnerabilities, SCA tools enable developers and security teams to proactively address risks and strengthen overall application security.\n\n` +
      `Reverse engineering in cybersecurity involves analyzing an application to understand its functionality, identify vulnerabilities, and potentially create countermeasures. This process can be used by security professionals to enhance security by finding flaws and by malicious actors to exploit them. It involves examining compiled code, understanding data handling, and potentially recreating the application's logic.\n\n` +
      'Vulnerable code paths refer to specific sections of software code that contain weaknesses, or vulnerabilities, that can be exploited by attackers to gain unauthorized access, execute malicious code, or cause other security breaches. These vulnerabilities often arise from insecure coding practices, insufficient input validation, or misconfigurations.\n\n' +
      `An HTTP intercepting proxy is a security tool that sits between a user's browser and a web server, allowing for the interception, inspection, and modification of HTTP traffic. This capability is valuable for cybersecurity in several ways, including: testing web application security, identifying and mitigating vulnerabilities, and enhancing online privacy and security.`,
      references: [
        {
          title: 'What is fuzz testing?',
          url: 'https://github.com/resources/articles/security/what-is-fuzz-testing'
        },
        {
          title: 'Exploit Frameworks',
          url: 'https://www.prosec-networks.com/en/blog/exploit-frameworks/'
        },
        {
          title: 'What is Software Composition Analysis?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-sca'
        },
        {
          title: 'What is Reverse Engineering Technique in Cybersecurity?',
          url: 'https://www.geeksforgeeks.org/computer-networks/what-is-reverse-engineering-technique-in-cybersecurity/'
        },
        {
          title: 'Identifying Vulnerable Code',
          url: 'https://www.infosecinstitute.com/resources/secure-coding/identifying-vulnerable-code/'
        },
        {
          title: 'What is an intercepting proxy?',
          url: 'https://www.pakiki.co.nz/blog/what-is-an-intercepting-proxy/'
        }
      ],
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
      explanation: `(18) Exception Handlers are mechanisms within a program's code that allow it to gracefully respond to unexpected events or errors that occur during execution. These errors, often called exceptions, can disrupt the normal flow of a program. Exception handling provides a way to manage these disruptions, potentially allowing the program to continue running or to recover from the error.\n\n` +
      'To use memory-safe functions to prevent integer overflow and improve cybersecurity, you can utilize libraries, built-in functions, and secure coding practices.\n\n' +
      'Thread safety is a crucial concept in concurrent programming, and its importance extends significantly to cybersecurity. In multi-threaded applications, multiple threads can access and modify shared data simultaneously. If these operations are not handled carefully, it can lead to vulnerabilities that attackers can exploit.\n\n' +
      `Eliminating race conditions involves preventing vulnerabilities that arise when a system's outcome depends on the unpredictable timing or sequence of events. Race conditions can be exploited by attackers to gain unauthorized access, manipulate data, or cause denial of service.\n\n` +
      'Batch processing from client-side to server-side involves grouping multiple requests from a client and sending them as a single batch to the server for processing. This approach aims to improve efficiency by reducing network overhead and potentially optimizing server resource utilization.\n\n' +
      'One of the most common security vulnerabilities in client-side rendering is cross-site scripting (XSS). XSS occurs when an attacker injects malicious scripts into your web application, which then get executed in the browser of unsuspecting users.',
      references: [
        {
          title: 'Exception Handler',
          url: 'https://www.theserverside.com/definition/exception-handler'
        },
        {
          title: 'Preventing Integer Overflow and Underflow Vulnerabilities',
          url: 'https://www.infosecinstitute.com/resources/secure-coding/how-to-mitigate-integer-overflow-and-underflow-vulnerabilities/'
        },
        {
          title: 'What is Thread-Safey and How to Achieve It?',
          url: 'https://www.baeldung.com/java-thread-safety'
        },
        {
          title: 'What is a Race Condition Vulnerability?',
          url: 'https://www.indusface.com/learning/what-is-a-race-condition-vulnerability/'
        },
        {
          title: 'Client-Side vs Server-Side Form Input Validation',
          url: 'https://surveyjs.io/stay-updated/blog/client-server-data-validation#:~:text=Because%20server%2Dside%20validation%20occurs,for%20feedback%20on%20their%20input.&text=With%20server%2Dside%20validation%2C%20the,even%20if%20it%20is%20invalid'
        },
        {
          title: 'The Power of Consistency in Cybersecurity: Why It Matters',
          url: 'https://medium.com/@psychomong/the-power-of-consistency-in-cybersecurity-why-it-matters-8b85cfea740e'
        }
      ],
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
      explanation: '(19) Remediating code vulnerabilities involves identifying and fixing weaknesses in software that could be exploited by attackers. This process often includes patching, updating, or reconfiguring code to address identified security flaws. Remediation strategies can also involve compensating controls, such as implementing additional security measures to mitigate the risk of exploitation until a permanent fix can be applied.\n\n' +
      'Salted hashing is a crucial technique used to enhance password security by adding a unique, random string (the "salt") to a password before hashing it. This prevents attackers from using pre-computed hash tables (like rainbow tables) to crack passwords, making it significantly harder to compromise user accounts even if the database is breached.\n\n' +
      'The more accurate and commonly used term is SHA, which stands for Secure Hash Algorithm. SHA functions are a family of cryptographic hash functions widely used in cybersecurity. In essence, a SHA function is a one-way mathematical algorithm that takes any input data (of any size) and produces a unique, fixed-length output string called a hash value or message digest. This hash value acts like a digital fingerprint for the original data.\n\n' +
      '"atomic execution of subroutines" means that a subroutine call is treated as a single, indivisible operation. This is particularly crucial in concurrent or multi-threaded environments, where multiple threads or processes might attempt to access and modify shared resources simultaneously.\n\n' +
      `A Time-of-Check to Time-of-Use (TOCTOU) vulnerability in the context of SET USERACL could arise if a system checks a user's permissions to perform an action, and then an attacker is able to modify the user's ACLs between the check and the actual action being performed. This window of opportunity could be exploited to grant unauthorized permissions to the user, allowing them to perform actions they shouldn't be able to.\n\n` +
      'Encrypting database connections, often referred to as using encrypted channels or data-in-transit encryption, is a crucial security practice. It ensures that data being exchanged between a database server and a client application (like a website, application, or database tool) is transformed into an unreadable format, preventing unauthorized access, modification, or theft during transmission.',
      references: [
        {
          title: 'Vulnerability remediation',
          url: 'https://www.upguard.com/blog/vulnerability-remediation'
        },
        {
          title: 'What is Salted Password Hashing',
          url: 'https://www.geeksforgeeks.org/ethical-hacking/what-is-salted-password-hashing/'
        },
        {
          title: 'Cryptographic Hash Functions: A Hands on Introduction',
          url: 'https://medium.com/@mohaisen/cryptographic-hash-functions-a-hands-on-introduction-100c93a79f65'
        },
        {
          title: 'Atomic Action',
          url: 'https://www.sciencedirect.com/topics/computer-science/atomic-action#:~:text=The%20atomic%20execution%20of%20a,but%20only%20before%20and%20after'
        },
        {
          title: 'How to mitigate the risk of a TOCTTOU attack',
          url: 'https://www.techtarget.com/searchsecurity/answer/How-to-mitigate-the-risk-of-a-TOCTTOU-attack'
        },
        {
          title: 'What is data encryption definition and Why Should a Database Have it?',
          url: 'https://www.druva.com/glossary/what-is-data-encryption-definition-and-related-faqs'
        }
      ],
      questionNumber: 19
    },
    {
      question: 'A senior cybersecurity engineer is solving a digital certificate issue in which the CA denied certificate issuance due to failed subject identity validation. At which of the following steps within the PKI enrollment process would the denial have occurred?',
      answer: 'RA',
      distractors: ['OCSP', 'IdP', 'CA'],
      explanation: '(20) RA (Registration Authority) (✅ Correct Answer): Verifies the subject’s identity during enrollment. CA: Issues or denies certificates, but relies on the RA for identity validation. If the RA fails the subject, the CA doesn’t proceed. OCSP: Checks revocation status of an already issued certificate. Not part of the issuance process. IdP (Identity Provider): Used in federated identity or SSO systems, not standard PKI enrollment.\n\n' +
      `The Online Certificate Status Protocol (OCSP) is a method for verifying the validity of digital certificates in real-time. It's used to check if a certificate, commonly used for secure websites (HTTPS), has been revoked by the Certificate Authority (CA). OCSP acts as an alternative to Certificate Revocation Lists (CRLs), offering a potentially faster and more efficient way to ensure certificate validity during the TLS/SSL handshake.\n\n` +
      'An Identity Provider (IdP) is a system that manages and verifies user identities, acting as a trusted entity that authenticates users and grants access to various applications and services. IdPs are crucial for secure access management, especially in the context of single sign-on (SSO) and multi-factor authentication (MFA).\n\n' +
      'A certificate authority (CA) is a trusted entity that issues digital certificates to authenticate content sent from web servers. These certificates are data files used to cryptographically link an entity with a public key.',
      references: [
        {
          title: 'What is a Registration Authority?',
          url: 'https://www.keyfactor.com/blog/what-is-a-registration-authority/'
        },
        {
          title: 'What is the Online Certificate Status Protocol (OCSP)?',
          url: 'https://www.fortinet.com/resources/cyberglossary/ocsp'
        },
        {
          title: 'What is an Identity Provider',
          url: 'https://www.cloudflare.com/learning/access-management/what-is-an-identity-provider/'
        },
        {
          title: 'What is a Certificate Authority?',
          url: 'https://www.techtarget.com/searchsecurity/definition/certificate-authority#:~:text=A%20certificate%20authority%20(CA)%20is,entity%20with%20a%20public%20key'
        }
      ],
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
      explanation: `(21) A "public key mismatch" error indicates a problem with the keys used for secure communication, often in the context of SSH, SSL, or Wi-Fi connections. It means the public key being used (the one that can be shared) doesn't match the expected public key derived from the private key. This can cause authentication failures or prevent secure communication.`,
      references: [
        {
          title: 'Resolving the SSH Key Mismatch',
          url: 'https://latisresearch.umn.edu/resolve-ssh-key-mismatch'
        }
      ],
      questionNumber: 21
    },
    {
      question: 'A security administrator is setting up a virtualization solution that needs to run services from a single host. Each service should be the only one running in its environment. Each environment needs to have its own operating system as a base but share the kernel version and properties of the running host. Which of the following technologies would best meet these requirements',
      answer: 'Containers',
      distractors: ['Type 1 hypervisor', 'Type 2 hypervisor', 'Virtual desktop infrastructure', 'Emulation'],
      explanation: '(22) A container is a package of software and its dependencies — such as code, system tools, settings, and libraries — that can run reliably on any operating system and infrastructure.',
      references: [
        {
          title: 'What are containers?',
          url: 'https://cloud.google.com/learn/what-are-containers'
        }
      ],
      questionNumber: 22
    },
    {
      question: 'A company has data it would like to aggregate from its PLCs for data visualization and predictive maintenance purposes. Which of the following is the most likely destination for the tag data from the PLCs?',
      answer: 'Local historian',
      distractors: ['External drive', 'Cloud storage', 'System aggregator'],
      explanation: '(23) A local historian is specifically designed to collect, store, and manage time-series data from PLCs. It is optimized for high-speed data collection and is commonly used for data visualization and predictive maintenance because it maintains historical context and trends. Given that the question emphasizes aggregating PLC data for visualization and predictive maintenance, D. Local historian is indeed the most appropriate and accurate answer.',
      references: [
        {
          title: '',
          url: 'https://claroty.com/team82/research/hacking-ics-historians-the-pivot-point-from-it-to-ot'
        }
      ],
      questionNumber: 23
    },
    {
      question: 'Which of the following is the best way to protect the website browsing history for an executive who travels to foreign countries where internet usage is closely monitored?',
      answer: 'DOH',
      distractors: ['EAP-TLS', 'Geofencing', 'Private browsing mode'],
      explanation: '(24) DOH (DNS over HTTPS):\n DNS over HTTPS encrypts DNS queries, preventing third parties (like governments or ISPs in foreign countries) from seeing which websites the executive is trying to visit. This helps protect privacy by obscuring the domain names being accessed, which are typically exposed during DNS resolution.',
      references: [
        {
          title: 'DNS over HTTPS',
          url: 'https://blog.netwrix.com/dns-over-https'
        }
      ],
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
      explanation: '(25) NetFlow logs track network traffic patterns, helping detect anomalies like sudden spikes in outbound connections, which may indicate ransomware exfiltrating data or contacting command-and-control (C&C) servers. Ransomware often generates abnormal egress traffic as it sends encrypted data to attackers, making NetFlow analysis critical for early detection.',
      references: [
        {
          title: 'Netflow Log Collection',
          url: 'https://www.manageengine.com/log-management/siem/log-netflow-collection-processing.html'
        }
      ],
      questionNumber: 25
    },
    {
      question: 'A retail organization wants to properly test and verify its capabilities to detect and/or prevent specific TTPs as mapped to the MITRE ATTACK framework specific to APTs. Which of the following should be used by the organization to accomplish this goal?',
      answer: 'Penetration test',
      distractors: ['Tabletop exercise', 'Sandbox detonation', 'Honeypot'],
      explanation: `(26) Penetration testing (or pen testing) is a security exercise where a cyber-security expert attempts to find and exploit vulnerabilities in a computer system. The purpose of this simulated attack is to identify any weak spots in a system's defenses which attackers could take advantage of.`,
      references: [
        {
          title: 'Penetration Testing',
          url: 'https://www.cloudflare.com/learning/security/glossary/what-is-penetration-testing/#:~:text=Penetration%20testing%20(or%20pen%20testing,attackers%20could%20take%20advantage%20of'
        }
      ],
      questionNumber: 26
    },
    {
      question: 'IoCs were missed during a recent security incident due to the reliance on a signature-based detection platform. A security engineer must recommend a solution that can be implemented to address this shortcoming. Which of the following would be the most appropriate recommendation?',
      answer: 'UEBA',
      distractors: ['FIM', 'SASE', 'CSPM', 'EAP'],
      explanation: '(27) UEBA (User and Entity Behavior Analytics), as it provides advanced, behavioral-based detection that can identify suspicious activities, even those not matching known attack signatures.',
      references: [
        {
          title: 'What is UEBA?',
          url: 'https://www.fortinet.com/resources/cyberglossary/what-is-ueba'
        }
      ],
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
      explanation: '(28) File Integrity Monitoring (FIM) is a security process that verifies the integrity of critical assets like files, directories, databases, and OS components by comparing them to a baseline and detecting unauthorized changes. It helps identify potential cyberattacks, data breaches, and malware infections by monitoring for any drift from the established baseline.',
      references: [
        {
          title: 'File Integrity Monitoring Unraveled',
          url: 'https://www.youtube.com/watch?v=NK96Txxt9qo&t=58'
        }
      ],
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
      explanation: '(29) Data classification and tagging are processes for organizing data assets based on defined criteria to improve organization, security, and discoverability. Data classification involves categorizing data based on its type, sensitivity, and business value. Tagging is a specific technique used within data classification, where labels or keywords are assigned to data assets to make them easier to find and manage.',
      references: [
        {
          title: 'Introduction to Data Tagging',
          url: 'https://www.cybersecuritytribe.com/articles/an-introduction-to-data-tagging-and-classification-in-the-cloud#:~:text=Data%20tagging%20and%20classification%20entail,%2C%20access%20control%2C%20and%20protection'
        }
      ],
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
      explanation: '(30) An Advanced Persistent Threat (APT) is a sophisticated, sustained cyberattack where an intruder gains unauthorized access to a network and remains undetected for an extended period to steal sensitive data or disrupt operations. While APTs can be conducted by various actors, they are often linked to nation-states, meaning they are sponsored or supported by governments.',
      references: [
        {
          title: 'APT Cyber Espionage',
          url: 'https://www.lookout.com/blog/mobile-apt-cyber-espionage'
        }
      ],
      questionNumber: 30
    },
    {
      question: `The company's client service team is receiving a large number of inquiries from clients regarding a new vulnerability. Which of the following would provide the customer service team with a consistent message to deliver directly to clients?`,
      answer: 'Response playbook',
      distractors: ['Communication plan', 'Disaster recovery procedure', 'Automated runbook'],
      explanation: '(31) An incident response playbook is a structured set of guidelines and procedures that organizations follow to detect, respond to, and recover from cybersecurity incidents. It provides a step-by-step approach for handling specific types of threats, ensuring a swift and coordinated response to minimize damage and downtime.',
      references: [
        {
          title: 'Incident Response Playbooks',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-an-incident-response-playbook#:~:text=An%20incident%20response%20playbook%20is,to%20minimize%20damage%20and%20downtime'
        }
      ],
      questionNumber: 31
    },
    {
      question: 'A company wants to use a process to embed a sign of ownership covertly inside a proprietary document without adding any identifying attributes. Which of the following would be best to use as part of the process to support copyright protections of the document?',
      answer: 'Steganography',
      distractors: ['E-signature', 'Watermarking', 'Cryptography'],
      explanation: '(32) Steganography is the practice of concealing information within another message or physical object to avoid detection. Steganography can be used to hide virtually any type of digital content, including text, image, video, or audio content. That hidden data is then extracted at its destination.',
      references: [
        {
          title: 'What is Steganography?  Definitely not a Dinosaur!',
          url: 'https://www.kaspersky.com/resource-center/definitions/what-is-steganography'
        }
      ],
      questionNumber: 32
    },
    {
      question: 'Which of the following utilizes policies that route packets to ensure only specific types of traffic are being sent to the correct destination based on application usage?',
      answer: 'SDN',
      distractors: ['DNSSEC', 'pcap', 'vmstat', 'VPC'],
      explanation: '(33) Software Defined Networking (SDN) is a networking approach that uses software to manage and control network devices, separating the control plane from the data plane. This separation allows for a more centralized and flexible way to manage and configure networks. SDN enables network administrators to use software to program and manage network devices, making it easier to automate tasks, improve security, and optimize network performance.',
      references: [
        {
          title: 'Software Defined Networking',
          url: 'https://www.vmware.com/topics/software-defined-networking'
        }
      ],
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
      explanation: '(34) UEBA (User and Entity Behavior Analytics) functions as a technical control by analyzing user and machine behavior to detect suspicious activity. It uses machine learning to identify anomalies and deviations from established baselines, alerting security teams to potential threats. This proactive approach complements traditional security measures by providing a layer of detection for sophisticated attacks and insider threats.',
      references: [
        {
          title: 'User Entity and Behavior Analytics',
          url: 'https://www.varonis.com/blog/user-entity-behavior-analytics-ueba'
        }
      ],
      questionNumber: 34
    },
    {
      question: 'Two companies that recently merged would like to unify application access between the companies, without initially merging internal authentication stores. Which of the following technical strategies would best meet this objective?',
      answer: 'Federation',
      distractors: ['RADIUS', 'TACACS+', 'MFA', 'ABAC'],
      explanation: `(35) federation refers to a collaborative arrangement where multiple organizations share and mutually trust each other's security information and systems. This sharing allows for enhanced security measures and potentially reduces the attack surface by enabling dynamic defenses and intelligence sharing.`,
      references: [
        {
          title: 'Active Directory and Federation',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/identity-protection/active-directory-federation-service-adfs/'
        }
      ],
      questionNumber: 35
    },
    {
      question: 'An analyst needs to evaluate all images and documents that are publicly shared on a website. Which of the following would be the best tool to evaluate the metadata of these files?',
      answer: 'ExifTool',
      distractors: ['OllyDbg', 'Volatility', 'Ghidra'],
      explanation: '(36) ExifTool is a powerful tool for cybersecurity professionals, enabling them to analyze various types of media files and extract valuable information for threat detection, incident response, and penetration testing.',
      references: [
        {
          title: 'Metadata and Information Security',
          url: 'https://www.infosecinstitute.com/resources/general-security/metadata-and-information-security/'
        }
      ],
      questionNumber: 36
    },
    {
      question: 'An organization has deployed a cloud-based application that provides virtual event services globally to clients. During a typical event, thousands of users access various entry pages within a short period of time. The entry pages include sponsor-related content that is relatively static and is pulled from a database. When the first major event occurs, users report poor response time on the entry pages. Which of the following features is the most appropriate for the company to implement?',
      answer: 'Caching',
      distractors: ['Horizontal scalability', 'Vertical scalability', 'Containerization', 'Static code analysis'],
      explanation: `(37) Caching can improve browser performance, but it also risks users' confidential or sensitive information being exposed to cyber criminals. Caching data could result in authentication data, browsing history, or session tokens being vulnerable, especially if a browser is left open or if another user has access to it.`,
      references: [
        {
          title: 'Caching to improve browser performance',
          url: 'https://www.fortinet.com/resources/cyberglossary/what-is-caching#:~:text=Caching%20can%20improve%20browser%20performance,user%20has%20access%20to%20it'
        }
      ],
      questionNumber: 37
    },
    {
      question: `An organization's board of directors has asked the Chief Information Security Officer to build a third-party management program. Which of the following best explains a reason for this request?`,
      answer: 'Supply chain visibility',
      distractors: ['Risk transference', 'Support availability', 'Vulnerability management'],
      explanation: `(38) Supply chain visibility (SCV) is the ability to track and monitor a product's journey from raw materials to the end customer, encompassing all stages of the supply chain. This includes order status, shipment status, and real-time location of goods, providing stakeholders with insights into inventory management, logistics, and potential disruptions.`,
      references: [
        {
          title: 'The Supply Chain Visibility',
          url: 'https://www.chrobinson.com/en-us/resources/blog/why-is-supply-chain-visibility-so/#:~:text=The%20goal%20of%20supply%20chain,be%20as%20efficient%20as%20possible'
        }
      ],
      questionNumber: 38
    },
    {
      question: `A company is rewriting a vulnerable application and adding the mprotect() system call in multiple parts of the application's code that was being leveraged by a recent exploitation tool. Which of the following should be enabled to ensure the application can leverage the new system call against similar attacks in the future?`,
      answer: 'NX bit',
      distractors: ['TPM', 'Secure boot', 'HSM'],
      explanation: `(39) The NX bit, also known as No eXecute or Data Execution Prevention (DEP), is a CPU feature that prevents code from executing in certain memory regions, specifically those designated as data. It's a security measure that helps to mitigate vulnerabilities like buffer overflows and shellcode injection by preventing malicious code from being executed in unexpected locations.`,
      references: [
        {
          title: 'Security with NX Bit',
          url: 'https://medium.com/@boutnaru/security-nx-bit-non-executable-18759fd2802e'
        }
      ],
      questionNumber: 39
    },
    {
      question: 'Which of the following items should be included when crafting a disaster recovery plan?',
      answer: 'Testing exercises',
      distractors: ['Redundancy', 'Autoscaling', 'Competitor locations'],
      explanation: `(40) Cybersecurity testing exercises are simulated scenarios used to assess and improve an organization's ability to detect, respond to, and mitigate cyber threats. These exercises help organizations identify vulnerabilities, test their security controls, and enhance their incident response plans.`,
      references: [
        {
          title: 'Using a functional cybersecurity exercise to test incident response plans',
          url: 'https://www.isaca.org/resources/news-and-trends/industry-news/2024/using-a-functional-cybersecurity-exercise-to-test-incident-response-plans'
        }
      ],
      questionNumber: 40
    },
    {
      question: 'A web application server is running a legacy operating system with an unpatched RCE vulnerability. The server cannot be upgraded until the corresponding application code is changed. Which of the following compensating controls would best prevent successful exploitation?',
      answer: 'Segmentation',
      distractors: ['CASB', 'UEBA', 'HIPS'],
      explanation: '(41) Segmentation divides a computer network into smaller parts. The purpose is to improve network performance and security. Other terms that often mean the same thing are network segregation, network partitioning, and network isolation.',
      references: [
        {
          title: 'Segmentation and Dividing Networks',
          url: 'https://www.cisco.com/c/en/us/products/security/what-is-network-segmentation.html#:~:text=Segmentation%20divides%20a%20computer%20network,network%20partitioning%2C%20and%20network%20isolation'
        }
      ],
      questionNumber: 41
    },
    {
      question: 'Which of the following is the reason why security engineers often cannot upgrade the security of embedded facility automation systems?',
      answer: 'They are constrained by available compute',
      distractors: ['They lack x86-64 processors', 'They lack EEPROM', 'They are not logic-bearing devices'],
      explanation: '(42) Embedded systems, by their nature, are often constrained by the available computing resources, especially in terms of memory and processing power. These constraints are a key characteristic of embedded systems, which are designed for specific tasks within other devices.',
      references: [
        {
          title: 'Embedding Computing 101',
          url: 'https://dedicatedcomputing.com/embedded-computing-systems-101/'
        }
      ],
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
      explanation: '(43) Configuring an Intrusion Prevention System (IPS) and a Web Application Firewall (WAF) involves setting up rules and policies to filter and monitor network traffic, protecting against various attacks and vulnerabilities. IPS focuses on network-level threats, while WAF specifically targets application-layer attacks like SQL injection and cross-site scripting.',
      references: [
        {
          title: 'The difference between the web is the Next Generation Firewall',
          url: 'https://www.f5.com/glossary/web-application-firewall-waf#:~:text=The%20difference%20between%20a%20web,is%20a%20next%2Dgeneration%20firewall'
        }
      ],
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
      explanation: '(44) Out-of-band certificate obtaining refers to securing a certificate through a communication channel separate from the primary network. This can be done by using a separate communication channel for exchanging the certificate or by using a physical medium like a storage device to transport the certificate.',
      references: [
        {
          title: 'Out of Band Authentication',
          url: 'https://doubleoctopus.com/security-wiki/authentication/out-of-band-authentication/'
        }
      ],
      questionNumber: 44
    },
    {
      question: 'A company hired a third-party consultant to run a cybersecurity incident simulation in order to identify security gaps and prepare stakeholders for a potential incident. Which of the following best describes this activity?',
      answer: 'Tabletop exercise',
      distractors: ['Walk-through review', 'Lessons learned', 'Business impact analysis'],
      explanation: '(45) A tabletop exercise is a discussion-based activity where participants gather to simulate a real-world incident, like a cyberattack, without physically enacting the response. It focuses on clarifying roles, discussing strategies, and evaluating existing plans in a low-stress environment.',
      references: [
        {
          title: 'Tabletop Exercises',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/advisory-services/tabletop-exercise/'
        }
      ],
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
      explanation: '(46) Formal access authorization in cybersecurity is the process of granting or denying access to resources based on predefined policies and procedures. It ensures that only authorized users or entities can access specific systems, data, or applications. This process is crucial for maintaining the confidentiality, integrity, and availability of information assets.',
      references: [
        {
          title: 'Access Control',
          url: 'https://www.fortinet.com/resources/cyberglossary/access-control'
        }
      ],
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
      explanation: '(47) To restrict uploading activity, you can control which file types are allowed, limit file sizes, and implement security measures like file type validation and malware detection. You can also restrict uploads based on the application or service being used, or by controlling which websites or domains users can upload to.',
      references: [
        {
          title: 'File Upload Restrictions',
          url: 'https://spyboy.blog/2025/02/02/bypassing-file-upload-restrictions-a-deep-dive-into-security-and-exploitation/'
        }
      ],
      questionNumber: 47
    },
    {
      question: 'A company recently acquired a SaaS company and performed a gap analysis. The results of the gap analysis Indicate security controls are absent throughout the SDLC and have led to several vulnerable production releases. Which of the following security tools best reduces the risk of vulnerable code being pushed to production in the future?',
      answer: 'Static application security testing',
      distractors: ['Regression testing', 'Code signing', 'Sandboxing'],
      explanation: `(48) SAST (Static Application Security Testing) is a proactive cybersecurity technique that analyzes an application's source code, bytecode, or binaries before it is deployed to identify potential vulnerabilities. It helps developers and security professionals discover and fix security flaws early in the development process, preventing costly errors and enforcing compliance.`,
      references: [
        {
          title: 'Static Application Security Testing',
          url: 'https://www.blackduck.com/glossary/what-is-sast.html#:~:text=Static%20application%20security%20testing%20(SAST,before%20the%20code%20is%20compiled'
        }
      ],
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
      explanation: `(49) To validate file integrity, you can use checksums (also known as hashes) to verify if a file has been altered or corrupted. A checksum is a unique numerical representation of a file's content, and by comparing the checksum of a file to its expected checksum (from the source), you can confirm that the file remains unchanged.`,
      references: [
        {
          title: 'How to check and verify file integrity',
          url: 'https://www.techtarget.com/searchcontentmanagement/tip/How-to-check-and-verify-file-integrity#:~:text=Create%20a%20hash%20value%20%2D%2D,Algorithm%201%20and%20SHA%2D256'
        }
      ],
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
      explanation: `(50) In the Common Vulnerability Scoring System (CVSS, the three main metric groups are Base, Temporal, and Environmental. Base metrics describe the intrinsic characteristics of a vulnerability, which remain constant over time and across different environments. Temporal metrics adjust the base score based on factors that change over time, such as the availability of exploits. Environmental metrics further refine the score to reflect an organization's specific environment and its unique vulnerabilities.`,
      references: [
        {
          title: 'CVS Scoring',
          url: 'https://www.balbix.com/insights/base-cvss-scores/'
        }
      ],
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
      explanation: `(51) A cybersecurity risk assessment is a systematic process aimed at identifying vulnerabilities and threats within an organization's IT environment, assessing the likelihood of a security event, and determining the potential impact of such occurrences.`,
      references: [
        {
          title: 'Cybersecurity Risk Assessment',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/advisory-services/cybersecurity-risk-assessment/'
        }
      ],
      questionNumber: 51
    },
    {
      question: 'A security engineer is performing a vulnerability management scan on multihomed Linux systems. The engineer notices that the vulnerability count is high due to the fact that each vulnerability is multiplied by the number of NICs on each system. Which of the following should the engineer do to deduplicate the vulnerabilities and to associate the vulnerabilities with a particular host?',
      answer: 'Deploy an agent',
      distractors: ['Use a SCAP scanner', 'Initiate a discovery scan', 'Perform an Nmap scan'],
      explanation: '(52) The Deployment Agent is a software agent that must be deployed to all clients managed by the Management Center. The Deployment Agent runs as a Windows Service and performs tasks on the client when instructed by the Management Server.',
      references: [
        {
          title: 'Deploy an Agent',
          url: 'https://hstechdocs.helpsystems.com/manuals/corects/impact/current/userguide/content/topics/appx_controlagents_deploy-agents.html'
        }
      ],
      questionNumber: 52
    },
    {
      question: 'Which of the following best describes a risk associated with using facial recognition to locally authenticate to a mobile device?',
      answer: 'Biometric impersonation',
      distractors: ['Data remanence', 'Deepfake', 'Metadata scraping'],
      explanation: '(53) Biometric impersonation, also known as biometric spoofing, is a method used by fraudsters to mimic or forge biometric identifiers to gain unauthorized access to systems or accounts that rely on biometric authentication. This could involve imitating fingerprints, facial patterns, iris scans, or even voice patterns to deceive the security system into believing they are a legitimate user.',
      references: [
        {
          title: 'Biometric Spoofing',
          url: 'https://nordvpn.com/cybersecurity/glossary/biometric-spoofing/'
        }
      ],
      questionNumber: 53
    },
    {
      question: 'The principal security analyst for a global manufacturer is investigating a security incident related to abnormal behavior in the ICS network. A controller was restarted as part of the troubleshooting process, and the following issue was identified when the controller was restarted:\n\n' +
      '`- SECURE BOOT FAILED:`\n\n' +
      '`- FIRMWARE MISMATCH EXPECTED UXFDC479 ACTUAL 0x79F31B`\n\n' +
      'During the investigation, this modified firmware version was identified on several other controllers at the site. The official vendor firmware versions do not have this checksum.\n\n Which of the following stages of the `MITRE ATT&CK framework` for ICS includes this technique?',
      answer: 'Persistence',
      distractors: ['Evasion', 'Collection', 'Lateral movement'],
      explanation: `(54) persistence refers to a threat actor's ability to maintain long-term access to a system or network, even after attempted removal or disruption. This allows attackers to remain undetected and hidden, potentially launching further attacks or stealing data over time.`,
      references: [
        {
          title: 'Persistence in Cybersecurity',
          url: 'https://www.beyondtrust.com/blog/entry/what-is-persistence-in-cybersecurity'
        }
      ],
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
      explanation:
        '(55) Content Delivery Networks (CDNs) process static content such as images and scripts, dynamic content, and live streams, making them vital to global business. They add security layers against DDoS attacks and unauthorized access by moving traffic from origin servers.' +
        'Storage input/output (I/O) refers to the security considerations related to how data is input to and output from storage devices and systems. This includes measures to protect data in transit (e.g., encryption during I/O) and data at rest (e.g., secure storage media).' +
        'Server clusters offers high availability and redundancy, but it also presents unique cybersecurity challenges. A well-secured cluster must address the same general security concerns as a single server, but also account for the complexities of distributed systems.',
      references: [
        {
          title: 'Understanding the Basics',
          url: 'https://medium.com/@codedconversations/understanding-the-basics-029a6a8ab2ee'
        },
        {
          title: 'What is CDN',
          url: 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/'
        },
        {
          title: 'Server Clusters, A Complete Guide',
          url: 'https://www.fs.com/blog/a-complete-guide-to-server-clusters-6961.html'
        }
      ],
      questionNumber: 55
    },
    {
      question: 'An analyst is working to address a potential compromise of a corporate endpoint and discovers the attacker accessed a user\'s credentials. However, it is unclear if the system baseline was modified to achieve persistence. Which of the following would most likely support forensic activities in this scenario?',
      answer: 'Bit-level disk duplication',
      distractors: ['Software composition analysis', 'Side-channel analysis', 'SCAP scanner'],
      explanation: '(56) Bit-level disk duplication, also known as a bit-by-bit copy or sector-by-sector clone, creates an exact replica of a hard drive by copying every single bit of data, including used, unused, and even logically bad sectors. This process ensures the copied disk is bit-for-bit identical to the original, preserving all data and features like drive size, formatting, and number of volumes.',
      references: [
        {
          title: 'Bit by Bit Hard Drive Copy',
          url: 'https://www.easeus.com/disk-copy/clone-resource/bit-for-bit-copy-hard-drive.html#:~:text=Making%20a%20bit%2Dby%2Dbit,sector%2Dby%2Dsector%20clone'
        }
      ],
      questionNumber: 56
    },
    {
      question: 'A company is decommissioning old servers and hard drives that contain sensitive data. Which of the following best protects against data leakage?',
      answer: 'Purging',
      distractors: ['Clearing', 'Shredding', 'Degaussing'],
      explanation: `(57) purging refers to the process of permanently and securely erasing data from storage media, making it irretrievable even with advanced laboratory techniques. It's a stronger method of data removal than "clearing," which may allow for data recovery in some cases.`,
      references: [
        {
          title: 'Purge.  Not the Movie!',
          url: 'https://www.lenovo.com/in/en/glossary/purge/?orgRef=https%253A%252F%252Fwww.google.com%252F'
        }
      ],
      questionNumber: 57
    },
    {
      question: 'An engineer has had scaling issues with a web application hosted on premises and would like to move to a serverless architecture. Which of the following cloud benefits would be best to utilize for this project?',
      answer: 'Automation of resource provisioning',
      distractors: ['Cost savings for hosting', 'Eliminating need to patch', 'Providing geo-redundant hosting'],
      explanation: `(58) Automated provisioning is an approach for controlling user access within an organization's IT systems, applications, and resources using software that automatically creates, modifies, and revokes accounts and their associated privileges without manual intervention.`,
      references: [
        {
          title: 'Automated Provisioning',
          url: 'https://www.strongdm.com/blog/automated-provisioning'
        }
      ],
      questionNumber: 58
    },
    {
      question: 'An organization needs to classify its systems and data in accordance with external requirements. Which of the following roles is best qualified to perform this task?',
      answer: 'Data owner',
      distractors: ['Systems administrator', 'Data processor', 'Data custodian', 'Data steward', ''],
      explanation: '(59) The data owner defines the rules and criteria for access, while data custodians (often IT) implement the provisioning based on those rules. The individual or entity accountable for a specific dataset within an organization.',
      references: [
        {
          title: 'Data Owner Responsibilities',
          url: 'https://www.montecarlodata.com/blog-data-owner-responsibilities/'
        }
      ],
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
      explanation: '(60) Tokenization using an Hardware Security Module (HSM) involves replacing sensitive data with unique tokens, while securely managing the cryptographic keys within the HSM. This process enhances cybersecurity by reducing the scope of data that needs to be protected and making it harder for attackers to compromise sensitive information.',
      references: [
        {
          title: 'HSM Tokenization',
          url: 'https://paylosophy.com/hsm-tokenization-appliance/'
        }
      ],
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
      explanation: '(61) In IKE (Internet Key Exchange), hash algorithms are used for data integrity and authentication, particularly in the creation of message digests and as part of pseudo-random functions (PRFs). They play a crucial role in ensuring the integrity of messages exchanged during the key exchange process.',
      references: [
        {
          title: `What is IKE?  Don't kick the Baby!`,
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-ike'
        }
      ],
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
      explanation: '(62) Disk-level encryption, like Full Disk Encryption (FDE), encrypts the entire drive, protecting data at rest. File-level encryption, on the other hand, encrypts individual files or directories. File-level encryption offers granular control and can protect files even if the system is compromised, while disk-level encryption protects the entire drive but may slow down the system.',
      references: [
        {
          title: 'File encryption vs Disk encryption',
          url: 'https://axcrypt.net/blog/the-ultimate-guide-to-file-encryption-vs-disk-encryption-which-one-is-best-for-you/?srsltid=AfmBOoq1B_oloCqv-q9Hz-l6CSb2nGQ5yLTRjyQ5eLmrZpGPKpmNjpKz'
        }
      ],
      questionNumber: 62
    },
    {
      question: `A security analyst discovers a new device on the company's dedicated IoT subnet during the most recent vulnerability scan. The scan results show numerous open ports and insecure protocols in addition to default usernames and passwords. A camera needs to transmit video to the security server in the IoT subnet. Which of the following should the security analyst recommend to securely operate the camera?`,
      answer: 'Harden the camera configuration',
      distractors: ['Send camera logs to the SIEM', `Encrypt the camera's video stream`, 'Place the camera on an isolated segment'],
      explanation: '(63) Configuration hardening is the process of securing computer systems by adjusting their settings to reduce vulnerabilities and strengthen security. It involves removing unnecessary software, disabling services, limiting user privileges, and applying security patches. This proactive approach aims to make systems more resistant to cyber threats and reduce the potential attack surface.',
      references: [
        {
          title: 'Hardening Compute Systems',
          url: `https://www.tripwire.com/state-of-security/automation-action-proactively-hardening-systems-intrusion#:~:text=Configuration%20hardening%20is%20the%20process,posed%20by%20a%20system's%20configurations.`
        }
      ],
      questionNumber: 63
    },
    {
      question: 'The Chief Information Security Officer of a large multinational organization has asked the security risk manager to use risk scenarios during a risk analysis. Which of the following is the most likely reason for this approach?',
      answer: 'To provide context to the relevancy of risk',
      distractors: [
        'To connect risks to business objectives',
        'To ensure a consistent approach to assessment',
        'To ensure a consistent approach to risk'
      ],
      explanation: `(64) Risk is highly relevant to cybersecurity because it's the foundation for understanding and managing vulnerabilities within an organization's systems and data. By identifying, assessing, and prioritizing risks, organizations can effectively allocate resources to implement security controls and mitigate potential threats. This proactive approach helps reduce the likelihood and impact of cyber incidents, protects sensitive data, and ensures compliance with regulatory requirements.`,
      references: [
        {
          title: 'Why Risk Management is important?',
          url: 'https://www.evotix.com/resources/blog/reasons-why-risk-management-is-important#:~:text=of%20their%20employees.-,Importance%20of%20Risk%20Management%20in%20the%20Workplace,liabilities%2C%20to%20name%20a%20few'
        }
      ],
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
      explanation: '(65) Mobile Device Management (MDM) is a cybersecurity solution that helps organizations secure, monitor, and manage mobile devices used by employees. It allows IT administrators to enforce security policies, manage device settings, and monitor device usage, ensuring devices connected to the corporate network adhere to security protocols. This helps protect sensitive data from unauthorized access, breaches, or loss.',
      references: [
        {
          title: 'Mobile Device Management',
          url: 'https://www.forcepoint.com/cyber-edu/mobile-device-management-mdm'
        }
      ],
      questionNumber: 65
    },
    {
      question: 'A pharmaceutical company uses a cloud provider to host thousands of independent resources in object storage. The company needs a practical and effective means of discovering data, monitoring changes, and identifying suspicious activity. Which of the following would best meet these requirements?',
      answer: 'A machine-learning-based data security service',
      distractors: ['A cloud configuration assessment and compliance service', 'An automated data classification system', 'A file integrity monitoring service'],
      explanation: `(66) A machine-learning-based data security service is a service that leverages machine learning (ML) algorithms to enhance data security measures, including data protection, threat detection, and incident response. It's a proactive and adaptable approach that uses vast datasets to learn and identify patterns and anomalies that might indicate security threats, thus improving the speed and accuracy of threat detection and mitigation.`,
      references: [
        {
          title: 'Machine-learning, they are taking over!',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/artificial-intelligence/machine-learning/'
        }
      ],
      questionNumber: 66
    },
    {
      question: 'A security analyst is assessing a new application written in Java. The security analyst must determine which vulnerabilities exist during runtime. Which of the following would provide the most exhaustive list of vulnerabilities while meeting the objective?',
      answer: 'Dynamic analysis',
      distractors: ['Input validation', 'Static analysis', 'Fuzz testing', 'Side-channel analysis'],
      explanation: `(67) Dynamic analysis in cybersecurity involves observing a program or system in real-time while it's running to identify potential vulnerabilities and malicious behavior. It complements static analysis, which examines code without execution, by providing insights into how software behaves under different conditions and inputs. This approach helps uncover runtime errors, security weaknesses, and performance issues that might not be apparent through static analysis alone.`,
      references: [
        {
          title: 'Dynamic Analysis',
          url: 'https://www.vmray.com/glossary/dynamic-analysis/#:~:text=Dynamic%20analysis%20allows%20security%20analysts,conditions%2C%20inputs%2C%20and%20scenarios'
        }
      ],
      questionNumber: 67
    },
    {
      question: 'Recently, two large engineering companies in the same line of business decided to approach cyberthreats in a united way. Which of the following best describes this unified approach?',
      answer: 'MOU',
      distractors: ['SOW', 'NDA', 'SLA'],
      explanation: '(68) A Memorandum of Understanding (MOU) in cybersecurity is a formal agreement between two or more parties outlining their mutual goals, expectations, and responsibilities related to cybersecurity collaboration. These agreements often facilitate information sharing, cooperation in areas like policy, strategy, and incident response, and can serve as a framework for broader partnerships.',
      references: [
        {
          title: 'Memorandum of Understanding.',
          url: 'https://corpslakes.erdc.dren.mil/partners/moumoa.cfm#:~:text=Memoranda%20of%20Understanding%2FAgreement%20(MOU%2FMOA)&text=These%20%E2%80%9Cagreements%20to%20agree%E2%80%9D%20or,which%20are%20not%20legally%20binding'
        }
      ],
      questionNumber: 68
    },
    {
      question: 'A regulated company is in the process of refreshing its entire infrastructure. The company has a business-critical process running on an old 2008 Windows server. If this server fails, the company would lose millions of dollars in revenue. Which of the following actions should the company should take?',
      answer: 'Create an organizational risk register for project prioritization',
      distractors: ['Accept the risk as the cost of doing business', 'Purchase insurance to offset the cost if a failure occurred', 'Implement network compensating controls'],
      explanation: `(69) A cybersecurity risk register is a structured document that helps organizations identify, assess, and prioritize cybersecurity risks, enabling effective project prioritization and resource allocation. It's a central repository for all identified risks, their likelihood, potential impact, and mitigation strategies.`,
      references: [
        {
          title: 'Risk Register for Cybersecurity',
          url: 'https://www.cybersaint.io/blog/risk-register-examples-for-cybersecurity'
        }
      ],
      questionNumber: 69
    },
    {
      question: 'A security engineer needs to ensure production containers are automatically scanned for vulnerabilities before they are accepted into the production environment. Which of the following should the engineer use to automatically incorporate vulnerability scanning on every commit?',
      answer: 'CI/CD pipeline',
      distractors: ['Integrated development environment', 'Container orchestrator', 'Code repository'],
      explanation: '(70) A continuous integration and continuous deployment (CI/CD) pipeline is a series of established steps that developers must follow in order to deliver a new version of software. CI/CD pipelines are a practice focused on improving software delivery throughout the software development life cycle via automation.',
      references: [
        {
          title: 'Continuous Integration/Continuous Deployment Basics',
          url: 'https://www.youtube.com/watch?v=G1u4WBdlWgU&t=211'
        }
      ],
      questionNumber: 70
    },
    {
      question: `A security architect recommends replacing the company's monolithic software application with a containerized solution. Historically, secrets have been stored in the application's configuration files. Which of the following changes should the security architect make in the new system?`,
      answer: 'Use a secrets management tool',
      distractors: ['Save secrets in key escrow', 'Store the secrets inside the Dockerfiles', 'Run all Dockerfiles in a randomized namespace'],
      explanation: '(71) Secret management tools allow companies to maintain confidentiality for data like passwords, encryption keys, SSH keys, API keys, database credentials, tokens, and certificates—including TLS/SSL certificates and private certificates. These tools can securely store, transmit, and manage digital credentials.',
      references: [
        {
          title: '',
          url: 'https://www.imperva.com/learn/data-security/secret-management/#:~:text=Secret%20management%20tools%20allow%20companies,transmit%2C%20and%20manage%20digital%20credentials'
        }
      ],
      questionNumber: 71
    },
    {
      question: 'A security engineer is assessing a new tool to segment data and communications between domains. The assessment must determine how data transmission controls can be bypassed without detection. Which of the following techniques should the security engineer use?',
      answer: 'Covert channel analysis',
      distractors: ['Fuzz testing', 'Machine-learning statistical analysis', 'Protocol analysis'],
      explanation: '(72) Covert channel analysis is a security analysis technique that identifies and analyzes potential vulnerabilities in a system where unauthorized information flow could occur due to covert communication. These channels involve unintended or unauthorized communication between system entities that violates security policies.',
      references: [
        {
          title: 'Covert Channel Analysis',
          url: 'https://www.cybrary.it/blog/covert-channel-analysis'
        }
      ],
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
      explanation: '(73) Decoy accounts and documents are fake assets, like user accounts or files, used to trap and detect attackers. They are designed to appear legitimate, enticing attackers to access them and trigger alerts. These decoys help identify advanced in-network threats that have bypassed existing defenses.',
      references: [
        {
          title: 'File Decoys for Endpoints',
          url: 'https://www.infosecinstitute.com/resources/penetration-testing/file-decoys-endpoints/'
        }
      ],
      questionNumber: 73
    },
    {
      question: `A help desk technician is troubleshooting an issue with an employee's laptop that will not boot into its operating system. The employee reported the laptop had been stolen but then found it one day later. The employee has asked the technician for help recovering important data. The technician has identified the following:\n\n` +
      '- The laptop operating system was not configured with BitLocker.\n\n' +
      '- The hard drive has no hardware failures.\n\n' +
      '- Data is present and readable on the hard drive, although it appears to be illegible.\n\n' +
      'Which of the following is the most likely reason the technician is unable to retrieve legible data from the hard drive?',
      answer: 'The hard drive experienced crypto-shredding',
      distractors: [
        'The technician is using the incorrect cipher to read the data',
        'The PKI certificate was revoked, and a new one must be installed',
        `The employee's password was changed, and the new password needs to be used`
      ],
      explanation: `(74) Crypto-shredding, also known as cryptographic erasure, is a data destruction technique that renders encrypted data unusable by destroying the keys needed to decrypt it. This effectively makes the data unrecoverable, similar to how you can't open a safe without the combination.`,
      references: [
        {
          title: 'Crypto Shredding',
          url: 'https://www.youtube.com/watch?v=DDOb-Gr1HN8&t=557'
        }
      ],
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
      explanation: '(80) Log parsing involves extracting meaningful information from unstructured log data. This process typically transforms raw log messages into a structured format, making it easier to analyze and search for specific events or trends. Log parsers utilize various techniques, such as regular expressions and machine learning, to identify patterns and extract key fields from the log data.',
      references: [
        {
          title: 'Log Parsing',
          url: 'https://signoz.io/guides/log-parsing/'
        }
      ],
      questionNumber: 80
    },
    {
      question: 'A financial technology firm works collaboratively with business partners in the industry to share threat intelligence within a central platform. This collaboration gives partner organizations the ability to obtain and share data associated with emerging threats from a variety of adversaries. Which of the following should the organization most likely leverage to facilitate this activity?',
      answer: ['STIX', 'TAXII'],
      distractors: ['CWPP', 'YARA', 'ATT&CK', 'JTAG'],
      explanation: '(81) STIX (Structured Threat Information eXpression) is a language for describing cyber threats in a structured, machine-readable format, while TAXII (Trusted Automated Exchange of Indicator Information) is a protocol for sharing STIX information. In essence, STIX defines the "what" (the structure of threat information), and TAXII defines the "how" (the protocol for sharing).',
      references: [
        {
          title: 'STIX and TAXII!  Not the Band or downtown transport provider!',
          url: 'https://www.anomali.com/resources/videos/what-are-stixx-taxi#:~:text=STIX%20states%20the%20what%20of,anyone%20new%20to%20threat%20intelligence'
        }
      ],
      questionNumber: 81
    },
    {
      question: 'A company wants to invest in research capabilities with the goal to operationalize the research output. Which of the following is the best option for a security architect to recommend?',
      answer: 'Threat intelligence platform',
      distractors: ['Dark web monitoring', 'Honeypots', 'Continuous adversary emulation'],
      explanation: '(82) A threat intelligence platform (TIP) is a software solution that collects, analyzes, and disseminates threat intelligence data to help organizations better understand and respond to cyber threats. Essentially, it acts as a centralized hub for threat information, providing security teams with the insights they need to make informed decisions about how to protect their systems.',
      references: [
        {
          title: 'What is a threat Intelligence Platform?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-a-threat-intelligence-platform'
        }
      ],
      questionNumber: 82
    },
    {
      question: 'A company is concerned about the security of customer data. The IT department has configured all web applications with appropriate access controls to restrict to only authorized users. Which of the following solutions addresses this concern?',
      answer: 'DLP',
      distractors: ['Vulnerability scanner', 'Threat intelligence platform', 'SIEM'],
      explanation: '(83) Data Loss Prevention (DLP) is a security strategy that protects sensitive data from unauthorized access, misuse, or loss. It involves classifying data, implementing policies to control its access and sharing, and monitoring data in transit and at rest. DLP helps organizations comply with regulations, protect intellectual property, and reduce the risk of data breaches.',
      references: [
        {
          title: 'Data Loss Prevention',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/data-protection/data-loss-prevention-dlp/'
        }
      ],
      questionNumber: 83
    },
    {
      question: 'A security analyst reviews the following report:\n\n' +
        `![Question 84](${imgPath(84)})\n\n` +
        'Which of the following assessments is the analyst performing?',
      answer: 'Supply chain',
      distractors: ['System', 'Quantitative', 'Organizational'],
      explanation: `(84) A supply chain cyber security assessment is a process of identifying, assessing, and mitigating cybersecurity risks associated with an organization's supply chain. This involves evaluating the security posture of suppliers, vendors, and third-party services, as well as your own internal security controls, to identify vulnerabilities and potential threats.`,
      references: [
        {
          title: 'What is Supply Chain Security?',
          url: 'https://www.checkpoint.com/cyber-hub/cloud-security/what-is-supply-chain-security/'
        }
      ],
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
      explanation: `(85) SAST (Static Application Security Testing) tools analyze a software application's source code to identify potential security vulnerabilities before the code is deployed or run. These tools help developers proactively address security issues, improve code quality, and reduce the risk of introducing vulnerabilities into production. A white-box testing tool, it identifies the root cause of vulnerabilities and helps remediate the underlying security flaws.`,
      references: [
        {
          title: 'Static Application Testing',
          url: 'https://www.opentext.com/what-is/sast#:~:text=Static%20Application%20Security%20Testing%20(SAST)%20is%20a%20frequently%20used%20Application,remediate%20the%20underlying%20security%20flaws'
        }
      ],
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
      explanation: '(86) Troubleshooting Network Access Control (NAC) issues with mobile devices can involve checking network settings, device compatibility, and NAC system configurations. Common problems include outdated firmware, incompatible operating systems, misconfigured VLANs, and issues with certificates.',
      references: [
        {
          title: 'Troubleshooting common issues in NAC (Network Access Control) implementations',
          url: 'https://eoxs.com/new_blog/troubleshooting-common-issues-in-nac-implementation/'
        }
      ],
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
      explanation: '(87) An Intrusion Prevention System (IPS) is a cybersecurity tool that monitors network traffic and system activities for malicious behavior and takes action to prevent or stop attacks in real-time. Unlike Intrusion Detection Systems (IDS) which only alert about suspicious activity, IPS actively blocks or prevents attacks from succeeding. IPS solutions can be deployed at the network level (NIPS) or on individual endpoints (HIPS).',
      references: [
        {
          title: 'Intrusions Prevention Systems',
          url: 'https://www.vmware.com/topics/intrusion-prevention-system'
        }
      ],
      questionNumber: 87
    },
    {
      question: 'A developer needs to improve the cryptographic strength of a password-storage component in a web application without completely replacing the crypto-module. Which of the following is the most appropriate technique?',
      answer: 'Key stretching',
      distractors: ['Key encryption', 'Key rotation', 'Key escrow', 'Key splitting'],
      explanation: '(88) Key stretching is a crucial cybersecurity technique that enhances the security of encryption keys, particularly passwords, by making them much more difficult to crack through brute-force attacks. It achieves this by repeatedly hashing a password or key, increasing the computational effort required to test each possible password candidate, effectively slowing down attacks.',
      references: [
        {
          title: 'What is Key Stretching?',
          url: 'https://jumpcloud.com/it-index/what-is-key-stretching#:~:text=Key%20stretching%20is%20a%20cryptographic,significantly%20more%20time%20and%20resources'
        }
      ],
      questionNumber: 88
    },
    {
      question: 'A company wants to implement hardware security key authentication for accessing sensitive information systems. The goal is to prevent unauthorized users from gaining access with a stolen password. Which of the following models should the company implement to best solve this issue?',
      answer: 'Context-based',
      distractors: ['Time-based', 'Role-based', 'Rule-based'],
      explanation: '(89) Context-Based Access Control (CBAC) is an access control model that considers various contextual factors when deciding whether to grant or deny access to resources. It extends traditional access control methods like RBAC (Role-Based Access Control) and ABAC (Attribute-Based Access Control) by incorporating dynamic information about users, resources, and the environment.',
      references: [
        {
          title: 'Context Based Access Control',
          url: 'https://www.apono.io/wiki/context-based-access-control-cbac/'
        }
      ],
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
      explanation: '(90) Encryption systems based on large prime numbers are currently robust against classical computers, the potential of quantum computing poses a significant future threat. Transitioning to post-quantum cryptography is crucial to ensure long-term data security.',
      references: [
        {
          title: 'Encryption Systems',
          url: 'https://www.youtube.com/watch?v=g_IaVepNDT4&t=1'
        }
      ],
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
      explanation: '(91) Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually. Terraform enables infrastructure-as-code, allowing teams to automate the creation of consistent environments. Instead of manually updating base OS images every time, Terraform helps deploy pre-configured golden images that already contain the necessary updates. Automating infrastructure provisioning ensures that each microservice deployment happens smoothly, without delays related to updating the OS manually.',
      references: [
        {
          title: 'What is Terraform?',
          url: 'https://www.varonis.com/blog/what-is-terraform#:~:text=Terraform%20is%20an%20IAC%20tool,language%20and%20created%20by%20HashiCorp'
        }
      ],
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
      explanation: '(92) Troubleshooting Network Access Control (NAC) issues with mobile devices can involve checking network settings, device compatibility, and NAC system configurations. Common problems include outdated firmware, incompatible operating systems, misconfigured VLANs, and issues with certificates.',
      references: [
        {
          title: 'Troubleshooting common issues in NAC implementation',
          url: 'https://eoxs.com/new_blog/troubleshooting-common-issues-in-nac-implementation/'
        }
      ],
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
      explanation: '(93)  Deleting the encryption key and the volume key is a method of secure data destruction. While it ensures that the data is permanently inaccessible, it also means you will lose access to the data unless you have a backup of the encryption key. ',
      references: [
        {
          title: 'Managing VPC Encryption',
          url: 'https://cloud.ibm.com/docs/vpc?topic=vpc-vpc-encryption-managing&interface=ui'
        }
      ],
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
      explanation: '(94) Automating runbooks for incident response empowers teams to respond to incidents faster, minimize downtime, and improve overall operational efficiency. By following best practices, leveraging appropriate tools, and maintaining a culture of continuous improvement, organizations can enhance their incident response capabilities and ensure resilience in the face of evolving IT challenges.',
      references: [
        {
          title: 'What are the best practices for Runbook Automation?',
          url: 'https://firehydrant.com/blog/what-is-runbook-automation-best-practices/'
        }
      ],
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
      explanation: '(95) A Change Control Board (CCB) is a group of stakeholders, typically including experts and managers, responsible for reviewing and deciding on proposed changes within a project or organization. Its primary goal is to manage changes systematically, ensuring they align with project objectives and organizational goals.',
      references: [
        {
          title: 'Change Control Boards explained',
          url: 'https://www.arenasolutions.com/resources/glossary/change-control-board/#:~:text=An%20engineering%20change%20control%20board,associated%20with%20the%20proposed%20change'
        }
      ],
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
      explanation: `(96) Device attestation is a security mechanism that verifies the authenticity and integrity of a device's hardware and software. It ensures that a device is genuine, hasn't been tampered with, and is running authorized and secure software. Continuous authorization is a dynamic security process that validates a user's access rights and trustworthiness throughout a session, not just at the initial login. It goes beyond initial authentication to continuously monitor user behavior, device posture, and other contextual factors to ensure ongoing security.`,
      references: [
        {
          title: 'Streamlining Device Security Attestation',
          url: 'https://utimaco.com/news/blog-posts/streamlining-device-security-device-attestation'
        }
      ],
      questionNumber: 96
    },
    {
      question: 'A systems administrator wants to reduce the number of failed patch deployments in an organization. The administrator discovers that system owners modify systems or applications in an ad hoc manner. Which of the following is the best way to reduce the number of failed patch deployments?',
      answer: 'Change management',
      distractors: ['Compliance tracking', 'Situational awareness', 'Quality assurance'],
      explanation: '(97) Change management is a structured process that organizations implement to handle system or service changes related to information security. By effectively managing these changes, businesses can mitigate security risks, adapt to new cyber threats, and ensure the smooth implementation of cybersecurity initiatives.',
      references: [
        {
          title: 'Change Management Structures for smooth implemenations',
          url: 'https://www.vivantio.com/blog/what-is-change-management-in-cyber-security/#:~:text=Change%20management%20is%20a%20structured,smooth%20implementation%20of%20cybersecurity%20initiatives'
        }
      ],
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
      explanation: '(98) Device certificates uniquely identify company-owned assets, allowing the VPN to restrict access only to authorized devices. Certificate-based authentication ensures that only approved machines can connect, preventing unauthorized external devices from accessing the corporate network. This approach is commonly used in enterprise environments to enforce security policies without relying solely on usernames and passwords.',
      references: [
        {
          title: 'What is a device certificate?',
          url: 'https://www.thesslstore.com/blog/what-is-a-device-certificate-device-certificates-explained/'
        }
      ],
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
      explanation: '(99) Content Management Systems (CMS) are essential for managing and publishing digital content, but their security is crucial to protect against cyber threats. Robust CMS security measures involve implementing strong authentication, authorization, encryption, and regular backups, as well as ongoing security scanning and patching. These measures help safeguard data, prevent unauthorized access, and mitigate risks like malware and ransomware attacks.',
      references: [
        {
          title: 'Context Management Systems',
          url: 'https://kinsta.com/knowledgebase/content-management-system/#:~:text=A%20content%20management%20system%20(CMS)%20is%20software%20that%20helps%20users,how%20to%20code%20at%20all)'
        }
      ],
      questionNumber: 99
    },
    {
      question: 'An organization wants to implement a platform to better identify which specific assets are affected by a given vulnerability. Which of the following components provides the best foundation to achieve this goal?',
      answer: 'CMDB',
      distractors: ['SASE', 'SBoM', 'SIEM'],
      explanation: '(100) A CMDB maintains detailed records of IT assets, including software, hardware, and configurations. When a vulnerability is identified, the CMDB can map affected assets, helping security teams prioritize patching efforts. It ensures better visibility and tracking, reducing response time to threats.',
      references: [
        {
          title: 'Using a CMDB for Incident Relationship',
          url: 'https://www.opentext.com/what-is/cmdb#:~:text=Avoid%20tier%2D1%20incidents%20with,their%20relationships%20with%20one%20another'
        }
      ],
      questionNumber: 100
    },
    {
      question: 'Which of the following best explains why AI output could be inaccurate?',
      answer: 'Model poisoning',
      distractors: ['Social engineering', 'Output handling', 'Prompt injections'],
      explanation: `(101) Model poisoning, a type of cybersecurity threat, involves attackers manipulating a machine learning model's training data or parameters to compromise its performance or behavior. This can lead to various issues, including biased outputs, degraded performance, and the introduction of vulnerabilities or backdoors.`,
      references: [
        {
          title: 'Model Poisoning',
          url: 'https://www.startupdefense.io/cyberattacks/model-poisoning-ml#:~:text=This%20can%20happen%20through%20various,the%20model%20performs%20in%20deployment'
        }
      ],
      questionNumber: 101
    },
    {
      question: 'A company runs a DAST scan on a web application. The tool outputs the following recommendations:\n\n' +
        '`- Use Cookie prefixes.`\n\n' +
        '`- Content Security Policy - SameSite=strict is not set.`\n\n' +
        'Which of the following vulnerabilities has the tool identified?',
      answer: 'CSRF',
      distractors: ['RCE', 'XSS', 'TOCTOU'],
      explanation: `(102) Cross-Site Request Forgery (CSRF) is a web security vulnerability where an attacker tricks a user into performing actions on a website they are already logged into, without the user's knowledge or consent. It exploits the fact that web browsers send requests to a website with the user's cookies, including authentication details, even when the user is on a different, potentially malicious, website. This allows an attacker to make unauthorized requests to the trusted website, potentially changing the user's email, password, or making funds transfers.`,
      references: [
        {
          title: 'Cross-site Request Forgery Definition',
          url: 'https://www.fortinet.com/resources/cyberglossary/csrf#:~:text=CSRF%20Definition%20And%20Meaning,has%20already%20granted%20them%20authentication'
        }
      ],
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
      explanation: '(103) Cryptanalysis is the art and science of analyzing and decrypting encrypted messages without knowing the encryption key. It involves understanding the workings of ciphers, cryptosystems, and ciphertext to find and exploit weaknesses for decryption. Essentially, cryptanalysis is the practice of breaking encryption.',
      references: [
        {
          title: 'Cryptanalysis to defeat weak encryption',
          url: 'https://www.techtarget.com/searchsecurity/definition/cryptanalysis#:~:text=Cryptanalysis%20is%20the%20study%20of,for%20defeating%20or%20weakening%20them'
        }
      ],
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
      explanation: `(104) In cybersecurity, risk appetite refers to the amount and type of risk an organization is willing to accept in pursuit of its business objectives. It's a formal statement outlining the organization's acceptable level of cyber risk, ensuring security measures align with strategic goals. Risk appetite helps with decision-making, provides direction for cybersecurity, and communicates the organization's approach to stakeholders.`,
      references: [
        {
          title: 'Risk Appetite',
          url: 'https://www.unit21.ai/fraud-aml-dictionary/risk-appetite'
        }
      ],
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
      explanation: `(105) A CNAME (Canonical Name) record is a type of DNS record that acts as an alias, pointing one domain name to another domain name. It's used to associate multiple domain names with a single IP address, often in conjunction with content delivery networks (CDNs). SPF (Sender Policy Framework) is a cybersecurity measure that helps authenticate emails and prevent email spoofing. It works by listing which mail servers are authorized to send emails on behalf of a specific domain, allowing recipient servers to verify the sender's legitimacy. This helps protect against phishing and other email scams where attackers impersonate legitimate senders.`,
      references: [
        {
          title: 'DMARC, DKIM, and SPF explained',
          url: 'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/'
        }
      ],
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
      explanation: '(106) Secure Access Service Edge (SASE) is a cloud-based architecture that combines network and security services into a single, unified platform, offering a more agile and secure way to connect users and applications, regardless of location. It consolidates traditional networking and security functions, like SD-WAN, firewall-as-a-service, zero trust network access, and cloud access security brokers, into a single cloud-delivered service.',
      references: [
        {
          title: 'Secure Access Service Edge',
          url: 'https://www.fortinet.com/resources/cyberglossary/sase#:~:text=SASE%20allows%20organizations%20to%20extend,WAN%2C%20cloud%2C%20data%20center'
        }
      ],
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
        'Not allowing users to change their local passwords'
      ],
      explanation: '(107) Hard-coded credentials are passwords or other secrets embedded directly into the source code of an application, firmware, or configuration file. This practice poses a significant security risk because these credentials can be easily discovered by anyone who gains access to the code or binaries.',
      references: [
        {
          title: 'Use of Hard Coded Passwords',
          url: 'https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password#:~:text=The%20use%20of%20a%20hard%2Dcoded%20password%20increases,possibility%20of%20password%20guessing%20tremendously.&text=Authentication%3A%20If%20hard%2Dcoded%20passwords,through%20the%20account%20in%20question'
        }
      ],
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
      explanation: '(108) Properly parsed data is data that has been successfully transformed from its raw format into a structured, organized, and easily understandable format for processing or analysis. This process, known as parsing, involves analyzing a sequence of characters or symbols to extract meaningful information and often results in a structured format like JSON, XML, or CSV.',
      references: [
        {
          title: 'How does Log Parsing Work?',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/next-gen-siem/log-parsing/#:~:text=log%20management%20system.-,What%20is%20Log%20Parsing?,W3C'
        }
      ],
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
      explanation: '(109) A Global Root Certification Authority (CA) is a trusted entity that issues root certificates, which are the foundational trust anchors for digital certificate hierarchies. These root certificates are pre-installed in operating systems, browsers, and other software, allowing them to verify the authenticity of other certificates issued by subordinate CAs.',
      references: [
        {
          title: 'The difference in root certificates vs intermediate certificates?',
          url: 'https://www.keyfactor.com/education-center/the-difference-in-root-certificates-vs-intermediate-certificates/#:~:text=a%20valid%20CA.-,Root%20Certificate,the%20CAs%20that%20issue%20them'
        }
      ],
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
      explanation: '(110) Application control is a cybersecurity measure that regulates and manages the execution of software applications on a computer or network.',
      references: [
        {
          title: 'Application Control',
          url: 'https://www.perimeter81.com/glossary/application-control'
        }
      ],
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
      explanation: `(111) External-facing infrastructure cybersecurity focuses on securing an organization's assets accessible from the internet, such as websites, applications, and cloud resources. This involves identifying potential vulnerabilities and implementing measures to protect them from external threats. Key aspects include vulnerability assessments, penetration testing, and ongoing monitoring of the external attack surface.`,
      references: [
        {
          title: 'What is external penetration testing?',
          url: 'https://tesserent.com/resources/what-is-external-penetration-testing-explained?utm_source=organic'
        }
      ],
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
      explanation: `(112) A Business Impact Analysis (BIA) in cybersecurity helps organizations understand the potential consequences of cyber incidents or disruptions to critical business operations. It identifies the business functions, systems, and resources that are most critical, assesses the impact of a disruption, and helps prioritize recovery efforts and resource allocation. Essentially, it's a "health check" for the business, identifying vulnerabilities and dependencies to improve resilience and preparedness for cyberattacks and other disruptions.`,
      references: [
        {
          title: 'What is the BIA in CyberSecurity?',
          url: 'https://www.geeksforgeeks.org/what-is-bia-in-cyber-security/'
        }
      ],
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
      explanation: '(113) An incident response playbook is a structured guide that organizations use to handle cybersecurity incidents. It outlines the steps for detecting, responding to, and recovering from incidents, ensuring a coordinated and efficient response. Playbooks help to minimize damage and downtime by providing a standardized approach to different types of threats.',
      references: [
        {
          title: 'What is an incident response playbook?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-an-incident-response-playbook#:~:text=The%20Role%20of%20Incident%20Response%20Playbooks,-Incident%20response%20playbooks&text=This%20ensures%20that%20team%20members,responsibilities%2C%20promoting%20accountability%20and%20clarity'
        }
      ],
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
      explanation: `(114) An internal cybersecurity audit assessment is a systematic review of an organization's information systems, policies, and procedures to ensure they align with security standards and best practices. It identifies potential vulnerabilities, verifies compliance with regulations, and provides actionable insights for improving cybersecurity posture.`,
      references: [
        {
          title: 'The Crucial Role of Internal Audit in Cybersecurity Strategy',
          url: 'https://internalaudit360.com/the-crucial-role-of-internal-audit-in-cybersecurity-strategy/'
        }
      ],
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
      explanation: '(115) Software dependency management is crucial in cybersecurity as it involves controlling and maintaining external components (like libraries and frameworks) that software relies on. This helps prevent vulnerabilities, ensures software stability, and improves overall security. By carefully managing dependencies, developers can minimize the risk of cyberattacks that exploit weaknesses in third-party components.',
      references: [
        {
          title: 'Understanding Dependency Management in Software Development',
          url: 'https://teamhub.com/blog/understanding-dependency-management-in-software-development/#:~:text=Dependency%20management%20refers%20to%20the,types%3A%20static%20and%20dynamic%20dependencies'
        }
      ],
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
      explanation: `(116) Unauthorized access in cybersecurity occurs when “a person gains logical or physical access without permission to a network, system, application, data, or other resource,” according to NIST. Unauthorized access involves bypassing security measures or exploiting vulnerabilities in IT infrastructure to get access to systems that should be accessible only to authorized users.`,
      references: [
        {
          title: 'Unauthorized Access',
          url: 'https://www.syteca.com/en/blog/detecting-and-responding-to-unauthorized-access'
        }
      ],
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
      explanation: `(117) Linting, in the context of cybersecurity, refers to the automated analysis of code, configuration files, or API specifications to identify potential errors, vulnerabilities, and security issues. It's a form of static analysis that helps to improve code quality, reduce the risk of bugs, and proactively address security concerns before they become real-world threats.`,
      references: [
        {
          title: 'Linting!  Not related to not eating!',
          url: 'https://www.youtube.com/watch?v=H1hMnHJBdqg&t=3'
        }
      ],
      questionNumber: 117
    },
    {
      question: 'A company wants to improve and automate the compliance of its cloud environments to meet industry standards. Which of the following resources should the company use to best achieve this goal?',
      answer: 'Ansible',
      distractors: ['Jenkins', 'Python', 'PowerShell'],
      explanation: `(118) Ansible is an open source, command-line IT automation software application written in Python. It can configure systems, deploy software, and orchestrate advanced workflows to support application deployment, system updates, and more. Ansible's main strengths are simplicity and ease of use.`,
      references: [
        {
          title: 'Getting Started with Ansible',
          url: 'https://docs.ansible.com/ansible/latest/getting_started/index.html'
        }
      ],
      questionNumber: 118
    },
    {
      question: 'A company wants to protect against the most common attacks and rapidly integrate with different programming languages. Which of the following technologies is most likely to meet this need?',
      answer: 'RASP',
      distractors: ['Cloud-based IDE', 'DAST', 'NIPS'],
      explanation: `(119) Runtime application self-protection (RASP) is a cybersecurity technology that enhances application security by integrating directly into the application's runtime environment. It works by monitoring the application's behavior, detecting and preventing real-time attacks, and closing the gap where traditional perimeter security might fall short. RASP aims to protect applications from various threats, including zero-day attacks, malware, and SQL injection.`,
      references: [
        {
          title: 'Runtime Application Self Protection explained',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/cloud-security/runtime-application-self-protection-rasp/'
        }
      ],
      questionNumber: 119
    },
    {
      question: 'An organization is concerned about insider threats from employees who have individual access to encrypted material. Which of the following techniques best addresses this issue?',
      answer: 'Key splitting',
      distractors: ['SSO with MFA', 'Salting and hashing', 'Account federation with hardware tokens', 'SAE'],
      explanation: '(120) Split-key encryption, also known as cryptographic splitting or key splitting, is a security technique that divides a cryptographic key into multiple parts (shares) and distributes them to different entities or locations. No single entity or location holds the entire key; instead, multiple parties are required to combine their shares to reconstruct the full key. This enhances security by preventing a single point of failure or compromise.',
      references: [
        {
          title: 'Key Splitting',
          url: 'https://www.hypr.com/security-encyclopedia/key-splitting'
        }
      ],
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
      explanation: '(121) A non-persistent virtual desktop infrastructure (VDI) provides users with a generic virtual desktop that resets to its original state after each session, meaning no user data or customizations are saved. This approach is cost-effective and simplifies management, as it requires less storage and easier maintenance by always providing a fresh desktop environment.',
      references: [
        {
          title: 'Persisence vs Non Persistence',
          url: 'https://phoenixnap.com/kb/persistent-vs-non-persistent-vdi#:~:text=A%20non%2Dpersistent%20VDI%20is,state%20for%20the%20next%20session'
        }
      ],
      questionNumber: 121
    },
    {
      question: 'A software vendor provides routine functionality and security updates to its global customer base. The vendor would like to ensure distributed updates are authorized, originate from only the company, and have not been modified by others. Which of the following solutions best supports these objectives?',
      answer: 'Code signing',
      distractors: ['Envelope encryption', 'File integrity monitoring', 'Application control'],
      explanation: `(122) Code signing in cybersecurity is a process where a digital signature is applied to software, ensuring its authenticity and integrity from the developer to the end user. This signature verifies the software's origin and proves that it hasn't been altered since it was signed. Code signing helps build trust in software, preventing users from installing or running malicious or tampered software.\n\n` +
        'Envelope encryption, a key component of cybersecurity, is a technique where data is encrypted using a symmetric key (Data Encryption Key (DEK)) and then the DEK itself is encrypted with an asymmetric key (Key Encryption Key (KEK)). This method offers improved performance and security compared to traditional methods. The term "envelope" refers to the concept of wrapping one layer of encryption around another, akin to sealing a letter in multiple envelopes.',
      references: [
        {
          title: 'Key Protect the Envelope',
          url: 'https://cloud.ibm.com/docs/key-protect?topic=key-protect-envelope-encryption'
        }
      ],
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
      explanation: `(123) A Security Awareness Program is a structured initiative designed to educate employees on cybersecurity threats and best practices to protect an organization's data and infrastructure. These programs aim to empower employees to recognize and avoid common threats like phishing, social engineering, and malware, ultimately reducing the risk of human error that can lead to breaches.`,
      references: [
        {
          title: 'What is Security Awareness Training?',
          url: 'https://www.kaspersky.com/resource-center/definitions/what-is-security-awareness-training'
        }
      ],
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
      explanation: '(124) SASE (Secure Access Service Edge) is a cloud-based cybersecurity approach that integrates network and security functions into a single, unified service. This architecture aims to provide secure and optimized access to resources for users and devices, regardless of their location, by combining networking technologies like SD-WAN with security features like CASB, FWaaS, and ZTNA.',
      references: [
        {
          title: 'Secure Access Service Edge, What is it?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-sase#:~:text=What%20is%20the%20SASE%20framework,and%20adapt%20to%20changing%20needs'
        }
      ],
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
      explanation: '(125) Updating cipher suites in cybersecurity involves ensuring your system uses the most secure and up-to-date encryption algorithms, known as ciphers. This is crucial for protecting data from various cryptographic attacks and maintaining strong security standards.',
      references: [
        {
          title: 'How to fix weak ciphers and strengthen your data security?',
          url: 'https://www.emagined.com/blog/how-to-fix-weak-ciphers-and-strengthen-your-data-security'
        }
      ],
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
      explanation: `(126) Disabling weak protocols in the Schannel hive is a critical security measure because older, outdated protocols and weak cipher suites within Schannel (Windows' implementation of TLS/SSL) have known vulnerabilities that attackers can exploit.`,
      references: [
        {
          title: 'Disabling Weak TLS Cipher Suites',
          url: 'https://medium.com/soluto-engineering/lesson-learned-disabling-weak-tls-cipher-suites-without-breaking-up-everything-3028164c6413'
        }
      ],
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
      explanation: '(127) A security misconfiguration occurs when system or application settings are not configured properly, leaving systems vulnerable to attacks. This can happen due to default settings, incomplete setups, or overly permissive access controls. Misconfigurations can be exploited by attackers to gain unauthorized access, steal sensitive data, or disrupt operations.',
      references: [
        {
          title: 'Security Misconfigurations',
          url: 'https://www.balbix.com/insights/security-misconfiguration-impact-examples-and-prevention/'
        }
      ],
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
      explanation: '(128) Microsegmentation in cybersecurity is a technique that divides a network into smaller, isolated segments, often at the level of individual applications or workloads, to enhance security and reduce the impact of potential breaches. It creates secure zones by isolating individual applications, limiting the ability of attackers to move laterally within the network.',
      references: [
        {
          title: 'What is Microsegmentation?',
          url: 'https://www.cloudflare.com/learning/access-management/what-is-microsegmentation/'
        }
      ],
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
      explanation: '(129) API integration is a vital component for effective cybersecurity data aggregation, leading to enhanced threat detection, improved visibility, and more streamlined incident response. While challenges exist, implementing strong security measures, utilizing automation, and employing specialized tools can empower organizations to leverage APIs for a robust and proactive cybersecurity framework.',
      references: [
        {
          title: 'Solution to API Integration and Aggregation Challenges',
          url: 'https://hasura.io/blog/a-supergraph-solution-to-api-integration-and-api-aggregation-challenges-in-the-enterprise'
        }
      ],
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
      explanation: '(130) CBC-based key exchange and signing algorithms are generally not directly used for key exchange in the typical sense of generating and distributing cryptographic keys.\n\n' +
        'Key Exchange Algorithms (KEX) are specifically designed to establish a shared secret between parties over an insecure channel. Examples include Diffie-Hellman or Elliptic Curve Diffie-Hellman.\n\n' +
        `Adding TLS_RSA_WITH_AES_256_CBC_SHA256 as a cipher suite is done to enable a more secure connection using Transport Layer Security (TLS). This specific cipher suite uses the following encryption method: RSA for key exchange, AES-256 in CBC mode for encryption, and SHA256 for hashing.`,
      references: [
        {
          title: 'Cipher Suites Algorithm Security Settings',
          url: 'https://www.thesslstore.com/blog/cipher-suites-algorithms-security-settings/'
        }
      ],
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
      explanation: `(131) DNS record poisoning, also known as DNS spoofing or DNS cache poisoning, is a type of cyber attack where an attacker modifies a DNS server's cache to redirect users to malicious websites. This attack exploits the way DNS servers store and retrieve IP addresses associated with domain names, allowing attackers to intercept and alter this information.`,
      references: [
        {
          title: 'DNS-Poisoning',
          url: 'https://www.fortinet.com/resources/cyberglossary/dns-poisoning'
        }
      ],
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
      explanation: '(132) Model explainability, especially in cybersecurity, refers to the ability to understand how and why a machine learning model makes a specific prediction. This is crucial because cybersecurity AI models, often acting as "black boxes," can be difficult to interpret, potentially leading to reduced trust and difficulty in debugging or improving their performance.',
      references: [
        {
          title: 'AI Explainability',
          url: 'https://www.paloaltonetworks.com/cyberpedia/ai-explainability'
        }
      ],
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
      explanation: '(133) Malicious files are programs designed to cause harm to a computer system or network. These files can be disguised as legitimate documents or software, exploiting user trust to gain access and spread malicious code. Common examples include malware like viruses, worms, ransomware, and spyware. Understanding how cybercriminals use these files and implementing effective defense strategies is crucial for maintaining cybersecurity.',
      references: [
        {
          title: 'Malicious Code',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/malicious-code/'
        }
      ],
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
      explanation: `(134) Deleting encryption keys in cybersecurity is a serious action that makes encrypted data permanently unreadable and inaccessible. It's crucial to understand that once a key is deleted, the data encrypted with that key cannot be recovered unless a backup of the key exists. Deleting keys is equivalent to securely destroying the data they protect.`,
      references: [
        {
          title: 'Introduction to Crypto Shredding',
          url: 'https://www.encryptionconsulting.com/introduction-to-crypto-shredding/'
        }
      ],
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
      explanation: '(135) By automating the patching system to update base images, organizations can significantly improve their cybersecurity posture, reduce operational burden, and protect their systems from costly breaches.',
      references: [
        {
          title: 'What is automated Patch Management?',
          url: 'https://www.pdq.com/blog/what-is-automated-patch-management/'
        }
      ],
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
      explanation: `(136) Browser isolation solutions, also known as Remote Browser Isolation (RBI), are cybersecurity technologies that separate web browsing activity from a user's device, protecting against online threats. They work by running web browsing sessions in a remote, isolated environment, often in the cloud, and streaming only the visual output to the user's device.`,
      references: [
        {
          title: 'What is browser isolation?',
          url: 'https://www.skyhighsecurity.com/cybersecurity-defined/what-is-browser-isolation.html#:~:text=Browser%20Isolation%20technology%20provides%20malware,in%20an%20isolated%20virtual%20environment'
        }
      ],
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
      explanation: '(137) Interactive logon cybersecurity focuses on securing the process where users interactively log into a system, often through a username and password. This includes measures to prevent unauthorized access, monitor user activity, and investigate potential security breaches related to interactive logins.\n\n' +
        `Port 445 is primarily used for file sharing and printer sharing across a network, utilizing the Server Message Block (SMB) protocol. It is also used for accessing Active Directory. SMB on port 445 operates over TCP and is a key component of modern Windows file sharing.`,
      references: [
        {
          title: 'Interactive Login vs Non-Interactive Login',
          url: 'https://graxoconsulting.com/interactive-login-and-non-interactive-login/'
        }
      ],
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
      explanation: `(138) Measured boot is a cybersecurity technique that verifies the integrity of a device's boot process, ensuring that only trusted software is loaded. It involves measuring (hashing) the state of each component loaded during boot and storing these measurements in a secure location like the TPM, allowing for later verification and attestation of the system's trustworthiness.\n\n` +
        'Self-encrypting drives (SEDs) are a hardware-based encryption solution that encrypts data on storage devices, like hard drives and SSDs, automatically, without the need for software. This encryption occurs at the hardware level, ensuring data remains secure even if the drive is stolen or physically accessed. SEDs offer a robust defense against data breaches, compliance violations, and unauthorized access, making them a valuable tool for organizations handling sensitive information.',
      references: [
        {
          title: 'Secure and Measured Boot',
          url: 'https://infohub.delltechnologies.com/l/dell-powermax-cybersecurity/secure-boot-and-measured-boot-1/#:~:text=Measured%20Boot%20is%20the%20process,keys%2C%20and%20the%20various%20signatures'
        }
      ],
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
      explanation: '(139) Homomorphic encryption is a form of encryption with an additional evaluation capability for computing over encrypted data without access to the secret key. The result of such a computation remains encrypted. Homomorphic encryption can be viewed as an extension of public-key cryptography.\n\n' +
      'Simultaneous Authentication of Equals (SAE) is a password-based authentication and key agreement method used in wireless networks, particularly in the context of WPA3-Personal and mesh networks. It allows two parties to authenticate each other simultaneously, ensuring mutual verification without a central authority. SAE utilizes the Dragonfly key exchange and Protected Management Frames (PMF) to enhance security.',
      references: [
        {
          title: 'Homomorphic Encryption difference from normal encryption',
          url: 'https://www.geeksforgeeks.org/difference-between-homomorphic-encryption-and-end-to-end-encryption/'
        }
      ],
      questionNumber: 139
    },
    {
      question: 'Emails that the marketing department is sending to customers are going to the customers’ spam folders. The security team is investigating the issue and discovers that the certificates used by the email server were reissued, but DNS records had not been updated. Which of the following should the security team update in order to fix this issue?',
      answer: ['DMARC', 'SPF', 'DKIM'],
      distractors: ['DNSSEC', 'SASE', 'SAN', 'SOA', 'MX'],
      explanation: '(140) DMARC, DKIM, and SPF are email authentication protocols that work together to improve email security and reduce spoofing. DMARC provides a policy for how receiving email servers should handle emails that fail DKIM or SPF authentication. DKIM uses cryptographic signatures to verify email content and authenticity, while SPF defines authorized IP addresses for a domain.',
      references: [
        {
          title: 'DMARC, SPF, and DKIM Explained',
          url: 'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/'
        }
      ],
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
      explanation: '(141) choosing the right programming language for an AI project depends on specific needs like performance, scalability, or rapid prototyping. Tuning rule sets in AI is crucial for optimizing system performance, accuracy, and overall effectiveness by adjusting and refining the predefined rules.',
      references: [
        {
          title: '12 Rules for Beginners',
          url: 'https://www.callstack.com/blog/12-rules-and-approaches-of-code-writing-for-beginners'
        }
      ],
      questionNumber: 141
    },
    {
      question: 'A global company with a remote workforce implemented a new VPN solution. After deploying the VPN solution to several hundred users, the help desk starts receiving reports of slow access to both internally and externally available applications. A security analyst reviews the following:\n\n' +
      'VPN client routing:\n' +
      '"0.0.0.0/0 eth1"\n\n' +
      'Which of the following solutions should the analyst use to fix this issue?',
      answer: 'Enable split tunneling',
      distractors: ['Move the servers to a screened subnet', 'Configure an NAC solution', 'Implement DNS over HTTPS'],
      explanation: '(142) The process of allowing a remote user or device to establish a non-remote connection with a system and simultaneously communicate via some other connection to a resource in an external network. This method of network access enables a user to access remote devices, and simultaneously, access uncontrolled networks.',
      references: [
        {
          title: 'Split-Tunneling',
          url: 'https://us.norton.com/blog/privacy/split-tunneling'
        }
      ],
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
      explanation: '(143) Automating the disabling of user accounts provides significant benefits for organizations, primarily by enhancing security, improving efficiency, and reducing manual tasks. It streamlines user account management, allowing for quicker responses to security threats, and ensures inactive accounts are addressed promptly, minimizing potential vulnerabilities.',
      references: [
        {
          title: 'Using Powershell to disable inactive user accounts',
          url: 'https://blog.netwrix.com/2015/03/17/how-to-disable-inactive-user-accounts-using-powershell/'
        }
      ],
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
      explanation: '(144) Conducting regular backup testing is crucial in cybersecurity for validating the effectiveness of data recovery in the event of a disaster or cyberattack. This involves simulating recovery scenarios and verifying the integrity and accessibility of backed-up data. By testing backups, organizations can ensure they can restore their data quickly and efficiently, minimizing business disruption and data loss.',
      references: [
        {
          title: 'Why backup testing is important',
          url: 'https://www.morganstanley.com/articles/data-backup-importance-cybersecurity#:~:text=The%20goal%20of%20the%20backup,and%20will%20be%20easily%20recoverable'
        }
      ],
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
      explanation: '(145) Reviewing audit logs related to privileged actions in cybersecurity involves analyzing records of high-permission user activities to identify and address potential security risks. This process helps in ensuring compliance, detecting malicious activity, and verifying that privileged access is being used responsibly.',
      references: [
        {
          title: 'Monitoring Privileged Accounts',
          url: 'https://www.cybersecuritydive.com/spons/how-do-i-monitor-privileged-accounts/631347/'
        }
      ],
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
      explanation: `(146) Device profiling is a security practice that involves gathering information about a device to assess its security posture and compliance with policies. This information can include details like the device's operating system, software versions, security patch level, and whether it has been jailbroken or rooted.`,
      references: [
        {
          title: 'Device Posture Profiles and Checks',
          url: 'https://support.catonetworks.com/hc/en-us/articles/7387501459357-Creating-Device-Posture-Profiles-and-Device-Checks'
        }
      ],
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
      explanation: `(147) The principle of limiting a platform's abilities to non-sensitive cybersecurity functions aligns with the Principle of Least Privilege (PoLP), which dictates that entities should only have access to the specific resources required to complete a task. This minimizes the potential impact of a compromise.\n\n` +
      'In the context of cybersecurity, sensitive data refers to information that, if disclosed, misused, or accessed without authorization, could lead to harm, discrimination, or adverse consequences for individuals or organizations.',
      references: [
        {
          title: 'Zero Trust Security',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/zero-trust-security/'
        }
      ],
      questionNumber: 147
    },
    {
      question: 'A security analyst discovered requests associated with IP addresses known for both legitimate and bot-related traffic. Which of the following should the analyst use to determine whether the requests are malicious?',
      answer: 'User-agent string',
      distractors: ['Byte length of the request', 'Web application headers', 'HTML encoding field'],
      explanation: '(148) User-agent strings, while primarily designed for browser identification and website personalization, can also be used in cybersecurity. They can be analyzed for suspicious activity, such as identifying malware or bots, and can be spoofed by malicious actors to bypass security measures or mask their origin.',
      references: [
        {
          title: 'User Agent Strings',
          url: 'https://51degrees.com/blog/understanding-user-agent-string'
        }
      ],
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
      explanation: '(149) Deprecated ciphers in cybersecurity refer to encryption algorithms that are no longer considered secure and have been phased out of use due to vulnerabilities or the availability of stronger alternatives. Organizations should regularly assess their systems and applications for deprecated ciphers and upgrade to more secure options.',
      references: [
        {
          title: 'Weak Cipher Suites',
          url: 'https://notifications.qualys.com/product/2024/08/12/deprecating-weak-cipher-suites-across-all-public-facing-product-urls'
        }
      ],
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
      explanation: `(150) A Supply Chain Risk Management (SCRM) program is a systematic approach to identifying, assessing, and mitigating potential disruptions within a company's supply chain. It aims to minimize the impact of risks on operations, reputation, and financial performance. By proactively addressing vulnerabilities, SCRM helps ensure business continuity and resilience.`,
      references: [
        {
          title: 'Supply Chain Best Management Practices',
          url: 'https://auditboard.com/blog/supply-chain-risk-management-best-practices'
        }
      ],
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
      explanation: '(151)  Patch management helps keep computers and networks secure, reliable and up to date with features and functionality the organization considers important. It is an essential process for ensuring and documenting compliance with security and privacy regulations.',
      references: [
        {
          title: 'Patch Management Demystified',
          url: 'https://www.manageengine.com/patch-management/what-is-patch-management.html'
        }
      ],
      questionNumber: 151
    },
    {
      question: 'While performing threat-hunting functions, an analyst is using the Diamond Model of Intrusion Analysis. The analyst identifies the likely adversary, the infrastructure involved, and the target. Which of the following must the threat hunter document to use the model effectively?',
      answer: 'Capabilities',
      distractors: ['Knowledge', 'Phase', 'Methodologies'],
      explanation: '(152) Cybersecurity capabilities refer to the skills, knowledge, and tools an organization uses to protect its systems and data from cyber threats. These capabilities encompass various areas, including threat detection, incident response, vulnerability management, and security awareness training.',
      references: [
        {
          title: 'Core Cybersecurity Capabilities',
          url: 'https://www.spiceworks.com/it-security/cyber-risk-management/articles/practical-guide-core-cybersecurity-capabilities/'
        }
      ],
      questionNumber: 152
    },
    {
      question: 'A systems administrator needs to improve the security assurance in a company\'s cloud storage environment. The administrator determines that the best approach is to identify whether any data has been maliciously or inadvertently modified. Which of the following techniques should the systems administrator periodically use?',
      answer: 'Hashing',
      distractors: ['Interference', 'Antitampering', 'Journaling'],
      explanation: '(153)  Hashing is a data security technique used to convert data values into alternate, unique identifiers called hashes for quick and secure access. Hashing can be used for data security because the one-way process prevents access to or tampering with the source data.',
      references: [
        {
          title: 'Hashing Data',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/data-protection/data-hashing/'
        }
      ],
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
      explanation: '(154)  A DNS sinkhole is a Domain Name System (DNS) server configured to redirect malicious DNS traffic to a controlled server, preventing devices from reaching harmful destinations. It effectively acts as a "trap" for malicious traffic, allowing security professionals to intercept, analyze, and neutralize threats.',
      references: [
        {
          title: 'Sinkholing Malicious Domains',
          url: 'https://www.catchpoint.com/network-admin-guide/dns-sinkhole#:~:text=A%20DNS%20sinkhole%20is%20used,list%20of%20known%20malicious%20domains'
        }
      ],
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
      explanation: '(155) Managing key material securely on a Hardware Security Module (HSM) (HSM) is crucial for cyber security. HSMs offer a robust, tamper-resistant environment for key generation, storage, and usage, safeguarding cryptographic processes and protecting sensitive data. Key management on an HSM involves several key aspects: secure key generation using True Random Number Generators (TRNGs), limiting key access and usage to specific authorized applications, and ensuring secure key destruction when no longer needed.',
      references: [
        {
          title: 'Explaining Hardware Security Modules',
          url: 'https://www.spiceworks.com/it-security/vulnerability-management/articles/what-is-a-hardware-security-module/'
        }
      ],
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
      explanation: '(156) Credential harvesting is a cyberattack technique where cybercriminals gather user credentials — such as user IDs, email addresses, passwords, and other login information — en masse. The hacker can then use the credentials to access systems and gather data or other sensitive information, sell or share them on the dark web, and/or advance a more sophisticated attack.\n\n' +
      'Threat modeling is the process of using hypothetical scenarios, system diagrams, and testing to help secure systems and data. By identifying vulnerabilities, helping with risk assessment, and suggesting corrective action, threat modeling helps improve cybersecurity and trust in key business systems.',
      references: [
        {
          title: 'Harvesting Credentials',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/credential-harvesting/'
        },
        {
          title: 'Threat Modeling',
          url: 'https://www.fortinet.com/resources/cyberglossary/threat-modeling'
        }
      ],
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
      explanation: '(157) Service status monitoring in cybersecurity involves continuously observing and analyzing network traffic and system activity to detect and respond to security threats. It focuses on identifying potential security breaches, malicious activity, and vulnerabilities before they cause significant damage. This monitoring helps organizations maintain a secure environment and improve their overall cybersecurity posture.',
      references: [
        {
          title: 'Service Status Monitoring',
          url: 'https://nordlayer.com/blog/cybersecurity-monitoring/'
        }
      ],
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
      explanation: '(158) Cybersecurity communication templates streamline how organizations communicate about security incidents, both internally and externally. These templates help ensure clear, consistent, and timely communication, especially during a crisis. They cover various stages of an incident, from initial notification to resolution and post-incident communication.',
      references: [
        {
          title: 'Using Incident Templates for Communications',
          url: 'https://www.atlassian.com/incident-management/incident-communication/templates'
        }
      ],
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
      explanation: `(159) anti-virtualization code refers to code intentionally embedded within malware to detect if it's running inside a virtual machine (VM) or sandbox environment. If it detects such an environment, the malware might alter its behavior to evade analysis, conceal its true nature, or even terminate its execution.`,
      references: [
        {
          title: 'Sandbox Evasion for Malware Analysis',
          url: 'https://www.picussecurity.com/resource/virtualization/sandbox-evasion-how-attackers-avoid-malware-analysis'
        }
      ],
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
      explanation: '(160) Data privacy is the right to control how your personal information is viewed and used, while security is the protection against threats through the application of safeguards. In the digital world, security generally refers to the protection against unauthorized access of data, often against hackers or cyber criminals.',
      references: [
        {
          title: 'Privacy vs Security',
          url: 'https://www.okta.com/identity-101/privacy-vs-security/#:~:text=Data%20privacy%20is%20the%20right,against%20hackers%20or%20cyber%20criminals'
        }
      ],
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
      explanation: `(161) Secure boot is a fundamental security feature in Windows that ensures the integrity of your system's boot process. It functions by verifying the digital signatures of the bootloader and operating system, allowing only trusted and signed code to be executed during startup.`,
      references: [
        {
          title: 'Secure Boot Protection',
          url: 'https://www.n-able.com/blog/enable-secure-boot-protection-for-your-it-systems'
        }
      ],
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
      explanation: `(162) Resource exhaustion, in the context of cybersecurity, refers to attacks that drain a system's limited resources, like memory, processing power, or bandwidth, making them unavailable to legitimate users or applications. This can lead to system slowdowns, crashes, or even complete unavailability. Essentially, resource exhaustion attacks are a form of denial of service (DoS) or distributed denial of service (DDoS) where the attacker aims to overwhelm a system with requests, causing it to become unstable or unresponsive.`,
      references: [
        {
          title: 'Resource Exhaustion',
          url: 'https://www.twingate.com/blog/glossary/resource-exhaustion'
        }
      ],
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
      explanation: '(163) Application control and baseline configuration are crucial cybersecurity practices. Application control involves managing and regulating the execution of software applications to protect against unauthorized access and potential threats. Baseline configurations establish standardized settings for IT systems, ensuring consistent and secure setups.',
      references: [
        {
          title: 'Application Security Controls',
          url: 'https://pathlock.com/learn/application-security-controls-benefits-types-and-frameworks/'
        }
      ],
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
      explanation: `(164) A compromised user account refers to an online account that has been accessed by an unauthorized individual with the legitimate user's login credentials. This can happen due to various factors, including weak passwords, successful phishing attacks, or other security breaches.`,
      references: [
        {
          title: 'Compromised Account',
          url: 'https://www.proofpoint.com/us/threat-reference/compromised-account'
        }
      ],
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
      explanation: '(165) SCA provides vital visibility into the open-source components used in software applications, helping organizations proactively identify and mitigate security risks and ensure compliance.',
      references: [
        {
          title: 'SAST vs SCA',
          url: 'https://www.contrastsecurity.com/glossary/sast-vs-sca'
        }
      ],
      questionNumber: 165
    },
    {
      question: 'A global organization wants to manage all endpoint and user telemetry. The organization also needs to differentiate this data based on which office it is correlated to. Which of the following strategies best aligns with this goal?',
      answer: 'Data labeling',
      distractors: ['Sensor placement', 'Continuous monitoring', 'Centralized logging'],
      explanation: '(166) Data labeling is the process of identifying raw data (images, text files, videos, etc.) and adding one or more meaningful and informative labels to provide context so that a machine learning model can learn from it. Data labeling is required for a variety of use cases including computer vision, natural language processing, and speech recognition.',
      references: [
        {
          title: 'Data Labeling',
          url: 'https://www.proofpoint.com/us/threat-reference/data-labeling'
        }
      ],
      questionNumber: 166
    },
    {
      question: 'A security architect must make sure that the least number of services as possible is exposed in order to limit an adversary\'s ability to access the systems. Which of the following should the architect do first?',
      answer: 'Perform attack surface reduction',
      distractors: [
        'Enforce Secure Boot',
        'Disable third-party integrations',
        'Limit access to the systems'
      ],
      explanation: `(167)  Attack surface reduction in cybersecurity involves minimizing the points where a system can be breached by attackers. This is achieved by identifying and eliminating unnecessary functionalities, services, and permissions, effectively reducing the potential entry points for malicious actors. It's a proactive approach that aims to make it harder for attackers to compromise a system, thereby lowering the overall cyber risk.`,
      references: [
        {
          title: 'What is an attack surface',
          url: 'https://www.okta.com/identity-101/what-is-an-attack-surface/'
        }
      ],
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
      explanation: '(168) Privacy regulations in cybersecurity ensure the protection of sensitive data while also adhering to ethical and legal requirements. These regulations cover a wide range of topics, including data collection, storage, use, and disclosure, as well as requirements for security measures and incident response.',
      references: [
        {
          title: 'Data Privacy against Cyber Criminals',
          url: 'https://www.okta.com/identity-101/privacy-vs-security/#:~:text=Data%20privacy%20is%20the%20right,against%20hackers%20or%20cyber%20criminals'
        }
      ],
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
      explanation: '(169) A Subject Alternative Name (SAN) certificate, also known as a Multi-Domain certificate, secures multiple domains with a single SSL/TLS certificate. This is important in cybersecurity because it allows you to protect multiple domains and subdomains using a single certificate, simplifying management and reducing costs.',
      references: [
        {
          title: 'Subject Alternative Name SAN',
          url: 'https://www.keyfactor.com/blog/what-is-a-subject-alternative-name-ssl-certificate-and-why-does-it-matter/'
        }
      ],
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
      explanation: '(170) A TOCTOU (Time of Check, Time of Use) vulnerability is a cybersecurity risk that arises when a system checks a resource or condition at one point in time, and then uses that resource or condition at a later time, but an attacker can alter the resource between the check and the use. This can lead to unauthorized actions or security breaches.',
      references: [
        {
          title: 'TOCTOU Vulnerabilities',
          url: 'https://arunprakashpj.medium.com/understanding-toctou-vulnerability-a-timeless-security-risk-c2be4fb10b3b'
        }
      ],
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
      explanation: '(171) Cryptographic Erase is the process of permanently erasing all data on an ISE-capable physical disk. You must execute Cryptographic Erase on ISE-capable drives that are either in Ready or Non-RAID state.',
      references: [
        {
          title: 'Crypto Erasure',
          url: 'https://jetico.com/blog/cryptographic-erasure-crypto-erase-is-it-a-secure-option-for-data-sanitization/'
        }
      ],
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
      explanation: '(172) Cybersecurity downtime costs can be staggering, encompassing both direct financial losses and less obvious, but equally damaging, hidden costs. Direct costs include lost revenue, regulatory fines, and increased insurance premiums. Hidden costs involve reputational damage, loss of customer trust, and decreased productivity.\n\n' +
      'Critical processes in cybersecurity refer to the essential functions, systems, and data that an organization relies on for its operations and survival. These processes are often the most vulnerable to cyberattacks and, if compromised, can lead to significant disruptions, financial losses, and reputational damage.',
      references: [
        {
          title: 'Cost of Downtime',
          url: 'https://dotsecurity.com/insights/blog-what-is-the-cost-of-downtime'
        }
      ],
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
      explanation: `(173) OPSEC is a proactive approach to security that involves understanding your vulnerabilities, taking steps to mitigate risks, and continuously assessing your security posture. It's not just about technology, but also about fostering a culture of security awareness and responsibility.`,
      references: [
        {
          title: 'Operational Security',
          url: 'https://www.fortinet.com/resources/cyberglossary/operational-security#:~:text=Operational%20security%20(OPSEC)%20is%20a,data%20to%20a%20cyber%20criminal'
        }
      ],
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
      explanation: '(174) The Software Assurance Maturity Model (SAMM) is a framework developed by OWASP (Open Web Application Security Project) to help organizations assess, improve, and track their software security practices. It provides a structured way to evaluate an organizations current security posture, identify areas for improvement, and build a balanced security program incrementally. SAMM is designed to be adaptable to various organizational sizes, development methodologies, and business functions.',
      references: [
        {
          title: 'OWASP SAMM',
          url: 'https://codific.com/owasp-samm-comprehensive-introduction/'
        }
      ],
      questionNumber: 174
    },
    {
      question: 'A security architect wants to develop a baseline of security configurations. These configurations automatically will be utilized every time a new virtual machine is created. Which of the following technologies should the security architect deploy to accomplish this goal?',
      answer: 'Ansible',
      distractors: ['Snort', 'CASВ', 'CMDB'],
      explanation: '(175) Ansible, a powerful automation tool, can be effectively used to enhance cybersecurity by automating tasks like vulnerability management, configuration management, compliance monitoring, and incident response. It helps enforce consistent security policies, reduce human error, improve security event visibility, and accelerate incident response.',
      references: [
        {
          title: 'How Ansible Works',
          url: 'https://www.redhat.com/en/ansible-collaborative/how-ansible-works#:~:text=Ansible%20is%20an%20open%20source,simplicity%20and%20ease%20of%20use'
        }
      ],
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
      explanation: `(176) Tokenization is a data security technique that replaces sensitive data elements with unique, non-sensitive identifiers called tokens. This approach helps protect sensitive information by rendering it meaningless to unauthorized parties while maintaining the data's usability for authorized operations. Tokenization is particularly valuable in cybersecurity for minimizing the impact of data breaches and complying with data privacy regulations.`,
      references: [
        {
          title: 'Tokenization Process',
          url: 'https://www.skyhighsecurity.com/cybersecurity-defined/tokenization-vs-encryption.html#:~:text=Tokenization%20is%20the%20process%20of,used%20to%20guess%20those%20values'
        }
      ],
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
      explanation: `(177) PII (Personally Identifiable Information) refers to any data that can be used to identify, contact, or locate a specific individual. Protecting PII is crucial because it's often targeted in data breaches and can lead to identity theft and other malicious activities.`,
      references: [
        {
          title: 'Personally Identifiable Information',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/identity-protection/personally-identifiable-information-pii/'
        }
      ],
      questionNumber: 177
    },
    {
      question: 'An organization plans to deploy new software. The project manager compiles a list of roles that will be involved in different phases of the deployment life cycle. Which of the following should the project manager use to track these roles?',
      answer: 'RACI matrix',
      distractors: ['CMDB', 'Recall tree', 'ITIL'],
      explanation: '(178) A RACI matrix in cybersecurity is a tool used to define and assign roles and responsibilities for tasks related to cybersecurity efforts. It helps ensure clarity, accountability, and efficient resource allocation during both routine security tasks and incident response. By clearly outlining who is responsible, accountable, consulted, and informed for each task, a RACI matrix promotes better communication, reduces ambiguity, and improves overall cybersecurity effectiveness.',
      references: [
        {
          title: 'Raci Chart',
          url: 'https://www.atlassian.com/work-management/project-management/raci-chart'
        }
      ],
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
      explanation: '(179) Legacy systems present significant cybersecurity risks due to their outdated technology and security protocols, making them attractive targets for cyberattacks. These systems often lack modern security features like multi-factor authentication and are vulnerable to exploits targeting their inherent weaknesses. Protecting legacy systems requires a multi-faceted approach including access control, network segmentation, and regular monitoring.',
      references: [
        {
          title: 'Risk of Legacy Access Systems',
          url: 'https://www.genetec.com/blog/cybersecurity/cyber-risks-of-a-legacy-access-control-system'
        }
      ],
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
      explanation: `(180) AES in Galois/Counter Mode (AES-GCM) is a widely used symmetric encryption method that combines the Advanced Encryption Standard (AES) with Galois/Counter Mode (GCM) to provide both confidentiality and data integrity. It's a popular choice for secure communication protocols like TLS and IPsec, due to its performance and security features.`,
      references: [
        {
          title: 'Galois Counter Mode',
          url: 'https://en.wikipedia.org/wiki/Galois/Counter_Mode#:~:text=The%20GCM%20algorithm%20provides%20both,associated%20data%20(AEAD)%20methods'
        }
      ],
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
      explanation: '(181) In discretionary access control (DAC), resource owners have the power to decide who can access their resources and what permissions those users have. This model grants users more flexibility and control over their data but also introduces potential security risks if not managed carefully.',
      references: [
        {
          title: 'Discretionary Access Control',
          url: 'https://nordlayer.com/learn/access-control/discretionary-access-control/'
        }
      ],
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
      explanation: '(182) SOAR, which stands for Security Orchestration, Automation, and Response, is a category of cybersecurity solutions that integrates and automates various security tools and processes. It helps organizations detect, investigate, and remediate security threats more quickly and efficiently by orchestrating workflows and automating repetitive tasks.\n\n' +
      `A Threat Intelligence Platform (TIP) is a cybersecurity tool that acts as a central hub for threat data, collecting, analyzing, and sharing information to help organizations proactively identify and respond to cyber threats. It gathers data from various sources, analyzes it for actionable insights, and integrates with other security systems to enhance an organization's overall security posture.\n\n` +
      'Isolating endpoints via APIs refers to using Application Programming Interfaces (APIs) provided by endpoint security solutions to programmatically isolate endpoints (devices) from the network. This is a crucial response action in cybersecurity incident handling and threat containment.',
      references: [
        {
          title: 'Understanding the Basics of SOAR',
          url: 'https://www.googlecloudcommunity.com/gc/SecOps-SOAR/Part-1-Dipping-Your-Toe-into-SOAR-Understanding-the-Basics/m-p/717159'
        }
      ],
      questionNumber: 182
    },
    {
      question: 'While reviewing recent incident reports a security officer discovers that several employees were contacted by the same individual who impersonated a recruiter. Which of the following best describes this type of correlation?',
      answer: 'Attack pattern analysis',
      distractors: ['Spear-phishing campaign', 'Threat modeling', 'Red-team assessment'],
      explanation: '(183) Attack pattern analysis, in the context of cybersecurity, refers to the systematic examination of how attackers exploit vulnerabilities to reach their targets. It involves mapping potential "paths" an attacker could take from initial access to achieving their objectives, such as gaining control of a system or accessing sensitive data. This analysis helps security professionals understand threat actor behavior, prioritize vulnerabilities, and improve defenses.',
      references: [
        {
          title: 'Analyzing Attack Patterns',
          url: 'https://www.maltego.com/blog/analyzing-attack-patterns-and-ttps/'
        }
      ],
      questionNumber: 183
    },
    {
      question: 'A news organization wants to implement workflows that allow users to request that untruthful data be retraced and scrubbed from online publications to comply with the right to be forgotten. Which of the following regulations is the organization most likely trying to address?',
      answer: 'GDPR',
      distractors: ['COPPA', 'CCPA', 'DORA'],
      explanation: '(184 GDPR is an EU law with mandatory rules for how organisations and companies must use personal data in an integrity friendly way. Personal data means any information which, directly or indirectly, could identify a living person. Name, phone number, and address are schoolbook examples of personal data.',
      references: [
        {
          title: 'General Data Protection Regulations',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/data-protection/general-data-protection-regulation-gdpr/'
        }
      ],
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
      explanation: '(185) Cybersecurity risk assessments are a proactive and essential component of a comprehensive security strategy, enabling organizations to protect their valuable assets and maintain business continuity in the face of evolving cyber threats.',
      references: [
        {
          title: 'Security Assessment Process',
          url: 'https://www.hackerone.com/knowledge-center/5-step-security-assessment-process'
        }
      ],
      questionNumber: 185
    },
    {
      question: 'A software company deployed a new application based on its internal code repository. Several customers are reporting anti-malware alerts on workstations used to test the application. Which of the following is the most likely cause of the alerts?',
      answer: 'Unsecure bundled libraries',
      distractors: ['Misconfigured code commit', 'Invalid code signing certificate', 'Data leakage'],
      explanation: '(186) Unsecure bundled libraries refer to software components, dependencies, or modules included within an application that contain known security vulnerabilities.',
      references: [
        {
          title: 'Insecure library bundles',
          url: 'https://flameeyes.blog/2009/01/02/bundling-libraries-for-despair-and-insecurity/'
        }
      ],
      questionNumber: 186
    },
    {
      question: 'A security engineer is reviewing the following vulnerability scan report:\n\n' +
        `![Question 187](${imgPath(187)})\n\n` +
        'Which of the following should the engineer prioritize for remediation?',
      answer: 'OpenSSH',
      distractors: ['Apache HTTP Server', 'Google Chrome', 'Migration to TLS 1.3'],
      explanation: '(187) OpenSSH is a widely used, free, and open-source implementation of the SSH (Secure Shell) protocol, crucial for secure communication over insecure networks. It provides tools for secure remote login, file transfers, and tunneling, making it vital for remote server management, DevOps, and other secure data communication tasks.',
      references: [
        {
          title: 'OpenSSH',
          url: 'https://www.ssh.com/academy/ssh/openssh'
        }
      ],
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
      explanation: '(188) Rate limiting is a critical cybersecurity technique used to control the number of API requests within a specific timeframe, preventing abuse and denial-of-service attacks. By setting limits on how frequently a user or application can access an API, rate limiting ensures fair resource allocation and protects against malicious activities like brute-force attacks and excessive data consumption.',
      references: [
        {
          title: 'Rate Limiting',
          url: 'https://www.radware.com/cyberpedia/bot-management/rate-limiting/#:~:text=In%20summary%2C%20API%20rate%20limiting,fair%20use%20of%20API%20resources'
        }
      ],
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
      explanation: '(189) Content Delivery Networks (CDNs) process static content such as images and scripts, dynamic content, and live streams, making them vital to global business. They add security layers against DDoS attacks and unauthorized access by moving traffic from origin servers.\n\n' +
      'Generative AI security refers to the practices and tools used to secure systems that can produce new content from abuse or protection against misuse. It covers everything from data privacy to the potential for AI-generated misinformation.',
      references: [
        {
          title: 'Generative AI Security',
          url: 'https://www.sentinelone.com/cybersecurity-101/data-and-ai/generative-ai-security-risks/#:~:text=Generative%20AI%20security%20refers%20to,potential%20for%20AI%2Dgenerated%20misinformation'
        }
      ],
      questionNumber: 189
    },
    {
      question: 'A company reduced its staff 60 days ago, and applications are now starting to fail. The security analyst is investigating to determine if there is malicious intent for the application failures. The security analyst reviews the following logs:\n\n\n' +
        `![Question 190](${imgPath(190)})\n\n` +
        'Which of the following is the most likely reason for the application failures?',
      answer: 'The user’s account was set as a service account',
      distractors: [
        `The user's home directory was deleted`,
        'The user does not have sudo access',
        'The root password has been changed'
      ],
      explanation: '(190) Service accounts and user accounts are both used to manage access to systems and resources, but they serve different purposes. User accounts are designed for human users to interact with systems, while service accounts are used by applications and automated processes to perform tasks without direct human intervention.',
      references: [
        {
          title: 'Service Accounts vs User Accounts',
          url: 'https://www.zluri.com/blog/service-accounts-vs-user-accounts'
        }
      ],
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
      explanation: `(191) A digital signature in cybersecurity is a cryptographic technique that verifies the authenticity and integrity of digital documents, messages, or software. It acts like a digital fingerprint, ensuring the document hasn't been altered and proving the sender's identity.`,
      references: [
        {
          title: 'Digital Signature Integrity',
          url: 'https://www.proofpoint.com/us/threat-reference/digital-signature#:~:text=A%20digital%20signature%20is%20a%20mathematical%20protocol,and%20integrity%20of%20digital%20messages%20or%20documents.&text=The%20signer%20uses%20their%20private%20key%20to,it%20with%20the%20corresponding%20message%20or%20file'
        }
      ],
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
      explanation: '(192) A code snippet has a title that you use to select the snippet, and can have a shortcut name you can type to insert the snippet. Snippets can also contain replacement parameters, which act as placeholders. Snippets are available for many languages, including C#, C++, and Visual Basic.',
      references: [
        {
          title: 'Code-Snippets',
          url: 'https://learn.microsoft.com/en-us/visualstudio/ide/code-snippets?view=vs-2022#:~:text=A%20code%20snippet%20has%20a,C%2B%2B%2C%20and%20Visual%20Basic'
        }
      ],
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
      explanation: '(193) SELinux is a Linux kernel security module that enhances security by implementing mandatory access control (MAC). It controls access to system resources, like files and processes, based on labels and defined policies. This helps prevent unauthorized access and limits the impact of security breaches.',
      references: [
        {
          title: 'What is SE Linux',
          url: 'https://www.blackdown.org/what-is-selinux/'
        }
      ],
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
      explanation: '(194) Horizontally scaling computing in cyber security refers to increasing the capacity of a system by adding more servers or computing nodes to distribute the workload and enhance performance, rather than increasing the resources of a single server (vertical scaling). This approach improves scalability, resilience, and fault tolerance in security systems.',
      references: [
        {
          title: 'Horizontal Scaling',
          url: 'https://www.cockroachlabs.com/blog/vertical-scaling-vs-horizontal-scaling/#:~:text=Horizontal%20scaling%20refers%20to%20increasing,is%20also%20called%20scaling%20out'
        }
      ],
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
      explanation: `(195) A vulnerability scan policy in cybersecurity outlines how an organization identifies and addresses security weaknesses in its systems, networks, and applications. It's a crucial part of a broader vulnerability management program, ensuring consistent and effective security practices. The policy defines the scope, frequency, and responsibilities for conducting vulnerability scans, as well as how to handle and remediate identified vulnerabilities.\n\n` +
      `In the context of cybersecurity and vulnerability scanning, "out of scope" refers to assets, systems, or environments that are intentionally excluded from a vulnerability scan or assessment.`,
      references: [
        {
          title: 'Vulnerability Identifiers',
          url: 'https://www.indusface.com/learning/what-is-vulnerability-scanning/#:~:text=Vulnerability%20scanning%20identifies%20exploitable%20weaknesses,actors%20to%20leverage%20and%20abuse'
        }
      ],
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
      explanation: '(196) A Network Intrusion Detection System (NIDS) (NIDS) with port mirroring is a crucial cybersecurity setup for monitoring network traffic and detecting malicious activity. Port mirroring, also known as SPAN port, allows a network switch to send a copy of network traffic to a designated port, where the NIDS can analyze it without affecting the live network traffic. This setup provides a passive monitoring approach, enhancing network security by enabling the detection of potential threats that might bypass other security measures like firewalls.\n\n' +
      `A NIPS (Network Intrusion Prevention System) is a security system that analyzes network traffic to detect and prevent malicious activity, often working in conjunction with a firewall. While firewalls primarily control traffic based on rules, NIPS actively monitor and respond to threats, potentially blocking or mitigating attacks. A firewall acts as a gatekeeper, while a NIPS acts as a proactive security guard, detecting and stopping threats before they can impact the network.`,
      references: [
        {
          title: 'Intrusion Detection',
          url: 'https://owasp.org/www-community/controls/Intrusion_Detection#:~:text=However%2C%20the%20main%20distinction%20is,signature%20based%20or%20behavioral%20based'
        }
      ],
      questionNumber: 196
    },
    {
      question: 'The material findings from a recent compliance audit indicate a company has an issue with excessive permissions. The findings show that employees changing roles or departments results in privilege creep. Which of the following solutions are the best ways to mitigate this issue?',
      answer: ['Implementing a role-based access policy', 'Performing periodic access reviews'],
      distractors: [
        'Setting different access controls defined by business area',
        'Designing a least-needed privilege policy',
        'Establishing a mandatory vacation policy',
        'Requiring periodic job rotation'
      ],
      explanation: '(197) Role-Based Access Control (RBAC) is a cybersecurity strategy that restricts system access to users based on their roles within an organization, ensuring they only have the permissions needed for their job functions. This approach enhances security by minimizing the potential for unauthorized access and data breaches, and it also simplifies user management.\n\n' +
      `Periodic access reviews are a crucial part of a robust cybersecurity strategy, involving the systematic evaluation and validation of user access rights to systems, applications, and data at regular intervals. These reviews ensure that access permissions align with users' current roles and responsibilities, reducing security risks and maintaining compliance.`,
      references: [
        {
          title: 'What is Role-Based Access Control?',
          url: `https://www.ibm.com/think/topics/rbac#:~:text=Role%2Dbased%20access%20control%20(RBAC)%20is%20a%20model%20for,can't%20touch%20firewall%20settings`
        },
        {
          title: 'Periodic User Access Review',
          url: 'https://www.zluri.com/blog/periodic-user-access-review#:~:text=The%20periodic%20user%20access%20review,permissions%20or%20inactive%20user%20accounts'
        }
      ],
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
      explanation: '(198) Log correlation is the process of gathering and analyzing log data from different sources to identify potential security breaches. This involves aggregating logs from various systems, such as antivirus software, firewalls, and network devices, to create a comprehensive view of network activity.',
      references: [
        {
          title: 'What is log correlation?',
          url: 'https://cyberpedia.reasonlabs.com/EN/log%20correlation.html#:~:text=Log%20correlation%20is%20the%20process,comprehensive%20view%20of%20network%20activity'
        }
      ],
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
      distractors: ['CASB', 'SBoM', 'SASE', 'HIDS'],
      explanation: '(199) Mobile Device Management (MDM) is a cybersecurity strategy that secures, monitors, and manages mobile devices used within an organization. It helps businesses control how employees use devices like smartphones, tablets, and laptops, ensuring data protection and adherence to company policies.\n\n' +
      'The Security Content Automation Protocol (SCAP) is a suite of open standards that enables the automation of vulnerability management, measurement, and policy compliance evaluation. It provides a standardized way to communicate information about software flaws and security configurations, allowing for automated assessment and remediation of systems. Essentially, SCAP helps organizations improve their security posture by automating tasks that would otherwise be manual and time-consuming.',
      references: [
        {
          title: 'Mobile Device Management, How it Works',
          url: `https://www.fortinet.com/resources/cyberglossary/mobile-device-management#:~:text=Mobile%20device%20management%20(MDM)%20is,policies%20on%20employees'%20mobile%20devices`
        },
        {
          title: 'The Power of SCAP',
          url: 'https://www.cisecurity.org/insights/blog/secure-configurations-and-the-power-of-scap'
        }
      ],
      questionNumber: 199
    },
    {
      question: 'A security analyst is reviewing the following authentication logs:\n\n' +
        `![Question 200](${imgPath(200)})\n\n` +
        'Which of the following should the analyst do first?',
      answer: 'Disable User1’s account',
      distractors: [`Disable User2's account`, `Disable User12's account`, `Disable User8's account`],
      explanation: '(200) Disabling user accounts is a crucial cybersecurity practice to mitigate risks associated with unauthorized access and data breaches. When employees leave or accounts become inactive, disabling them prevents former employees, malicious actors, or even automated scripts from exploiting those accounts to access sensitive information or systems. This practice is especially important for accounts with high privileges or those that have remained inactive for extended periods.',
      references: [
        {
          title: 'Why inactive accounts are a security risk',
          url: 'https://www.stratospherenetworks.com/blog/why-you-need-to-disable-inactive-accounts-right-now-the-cybersecurity-risks-of-ghost-accounts/'
        }
      ],
      questionNumber: 200
    },
    {
      question: 'A game developer wants to reach new markets and is advised by legal counsel to include specific age-related sign-up requirements. Which of the following best describes the legal counsel\'s concerns?',
      answer: 'COPPA',
      distractors: ['GDPR', 'LGPD', 'PCI DSS'],
      explanation: `(201) COPPA stands for the Children's Online Privacy Protection Act. It's a U.S. federal law designed to protect the privacy of children under 13 by regulating how websites and online services collect, use, and disclose personal information. Essentially, it gives parents more control over what information is collected from their young children online.`,
      references: [
        {
          title: 'COPPA',
          url: 'https://www.kiteworks.com/risk-compliance-glossary/coppa-childrens-online-privacy-protection-act/'
        }
      ],
      questionNumber: 201
    },
    {
      question: 'Which of the following AI concerns is most adequately addressed by input sanitization?',
      answer: 'Prompt injection',
      distractors: ['Model inversion', 'Data poisoning', 'Non-explainable model'],
      explanation: `(202) Prompt injection refers to a security threat where attackers manipulate large language models (LLMs) by crafting deceptive inputs, potentially causing the LLM to bypass safety measures, reveal confidential information, or perform unauthorized actions. These attacks exploit the LLM's reliance on natural language for both instructions and data, blurring the lines between what's intended as a prompt and what's meant as data.`,
      references: [
        {
          title: 'What is a Prompt Injection Attack?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-a-prompt-injection-attack#:~:text=A%20prompt%20injection%20attack%20is%20a%20type%20of%20GenAI%20security,into%20ignoring%20its%20intended%20instructions.&text=%22We%20recently%20assessed%20mainstream%20large,attacks%2C%20which%20revealed%20significant%20vulnerabilities'
        }
      ],
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
      explanation: '(203) Moving from Opportunistic TLS to Enforced TLS in cybersecurity significantly increases email security by requiring encrypted connections, preventing downgrade attacks, and ensuring sensitive data is protected during transit. While Opportunistic TLS attempts encryption when available, it can fail open to unencrypted communication, whereas Enforced TLS guarantees encryption or prevents delivery if a secure connection cannot be established.',
      references: [
        {
          title: 'The difference between opportunistic and enforced tls',
          url: 'https://resend.com/docs/knowledge-base/whats-the-difference-between-opportunistic-tls-vs-enforced-tls'
        }
      ],
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
      explanation: '(204) An application-aware firewall is a cybersecurity tool that analyzes network traffic based on the specific applications attempting to communicate, rather than just relying on IP addresses or port numbers. This deeper level of inspection allows for more granular control and protection against application-layer attacks. Traditional firewalls primarily focus on network layers (like IP addresses and ports), while application-aware firewalls operate at the application layer (Layer 7 of the OSI model).\n\n' +
      `Reducing the attack surface means minimizing the number of possible points of entry through which an attacker could potentially gain unauthorized access to a system, network, or organization's data. This involves identifying and eliminating vulnerabilities that could be exploited.`,
      references: [
        {
          title: 'What is an attack surface?',
          url: 'https://www.youtube.com/watch?v=6D-iK8_sMw0'
        },
        {
          title: 'Why application awareness is essential for firewall security',
          url: 'https://www.catonetworks.com/blog/why-application-awareness-is-essential-for-firewall-security/'
        }
      ],
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
      explanation: '(205) Application segmentation in cybersecurity is a strategy of dividing an application into smaller, isolated parts (segments) to enhance security and limit the impact of potential breaches. This approach reduces the attack surface by restricting access to sensitive data and resources to only those who need it.',
      references: [
        {
          title: 'What is application Segmentation?',
          url: 'https://www.tigera.io/learn/guides/microsegmentation/application-segmentation/#:~:text=Application%20segmentation%20traditionally%20occurred%20at,regulates%20who%20may%20access%20it'
        }
      ],
      questionNumber: 205
    },
    {
      question: 'A company wants to perform threat modeling on an internally developed, business-critical application. The Chief Information Security Officer (CISO) is most concerned that the application should maintain 99.999% availability and authorized users should only be able to gain access to data they are explicitly authorized to view. Which of the following threat-modeling frameworks directly addresses the CISO’s concerns about this system?',
      answer: 'STRIDE',
      distractors: ['CAPEC', 'ATT&CK', 'TAXII'],
      explanation: `(206) STRIDE is a security framework developed by Microsoft that helps in identifying potential threats to a system by categorizing them into six threat types: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. It's a mnemonic device to help security professionals systematically assess vulnerabilities and risks in a system.`,
      references: [
        {
          title: 'What is the STRIDE Threat Model?',
          url: 'https://www.practical-devsecops.com/what-is-stride-threat-model/#:~:text=TL%3BDR,)%2C%20and%20Elevation%20of%20Privilege'
        }
      ],
      questionNumber: 206
    },
    {
      question: 'A company\'s internal network is experiencing a security breach and the threat actor is still active Due to business requirements, users in this environment are allowed to utilize multiple machines at the same time. Given the following log snippet:\n\n' +
        `![Question 207](${imgPath(207)})\n\n` +
        'Which of the following accounts should a security analyst disable to best contain the incident without impacting valid users?',
      answer: 'user-d',
      distractors: ['user-а', 'user-b', 'user-с'],
      explanation: '(207) Containing a cybersecurity incident involves taking immediate actions to limit the scope and impact of a security breach or attack. This includes isolating compromised systems, blocking malicious network traffic, and disabling affected accounts to prevent further damage and data loss. Effective containment is crucial for minimizing the long-term consequences of a cyber incident.',
      references: [
        {
          title: 'How to Beat Cyber Threats in Real Time',
          url: 'https://zeronetworks.com/blog/data-breach-containment-guide#:~:text=Data%20breach%20containment%20refers%20to,t%20pivot%20through%20your%20environment'
        }
      ],
      questionNumber: 207
    },
    {
      question: 'A security team is responding to malicious activity and needs to determine the scope of impact. The malicious activity appears to affect a certain version of an application used by the organization. Which of the following actions best enables the team to determine the scope of impact?',
      answer: 'Reviewing the asset inventory',
      distractors: ['Performing a port scan', 'Inspecting egress network traffic', 'Analyzing user behavior'],
      explanation: `(208) An asset inventory in cybersecurity is a comprehensive list of all hardware, software, and other digital assets within an organization's IT environment. It's a foundational element for a strong cybersecurity posture, providing visibility into the attack surface and enabling effective risk management. By identifying and tracking assets, organizations can better protect their systems and data from cyber threats.`,
      references: [
        {
          title: 'What is Asset Inventory Management?',
          url: 'https://www.balbix.com/insights/what-is-asset-inventory-management/#:~:text=Asset%20inventory%20management%20tracks%20and,operational%20efficiency%2C%20and%20maintain%20compliance'
        }
      ],
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
      explanation: `(209) It's crucial to implement automatic logout mechanisms for inactive sessions. This prevents unauthorized access to sensitive data if a user leaves their session unattended. Session timeouts should be configured for both the admin console and user interfaces, with recommended settings varying based on risk level, such as 2-5 minutes for high-risk applications and up to 30 minutes for lower-risk ones.`,
      references: [
        {
          title: 'The risk of no session timeouts',
          url: 'https://turingsecure.com/knowledge-base/issues/no-session-timeout/#:~:text=By%20not%20having%20a%20session,as%20identity%20theft%20or%20fraud'
        }
      ],
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
      explanation: '(210) A proxy server and segmented VLANs are both security measures that can be used to protect a network, and they can be used together to enhance security. VLANs provide network segmentation, isolating traffic and limiting the impact of a breach, while proxy servers act as intermediaries, controlling access to the internet and potentially filtering malicious traffic.',
      references: [
        {
          title: 'VLAN Segmentation and Security',
          url: 'https://www.checkpoint.com/cyber-hub/network-security/what-is-network-segmentation/vlan-segmentation-and-security/'
        },
        {
          title: 'The role of proxy servers',
          url: 'https://packetstream.io/the-role-of-proxy-servers-in-cybersecurity/'
        }
      ],
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
      explanation: '(211) In the software development lifecycle, functional and non-functional requirements are both crucial for building secure and effective systems. Functional requirements define what the system should do, while non-functional requirements define how well it should do it, including security aspects.',
      references: [
        {
          title: 'Functional and Non-Functional Requirements',
          url: 'https://byjus.com/gate/difference-between-functional-and-non-functional-requirments/#:~:text=Functional%20requirements%20allow%20you%20to,the%20performance%20of%20the%20system.&text=System%2C%20Integration%2C%20End%20to%20End,etc%20are%20non%2Dfunctional%20testing'
        }
      ],
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
      explanation: '(212) Configuring a firewall involves several key steps: securing the firewall itself, defining network zones and IP addresses, configuring access control lists (ACLs), enabling necessary services and logging, and finally, testing and monitoring the configuration.\n\n' +
      'Configuring a proxy firewall in cybersecurity involves setting up a system that acts as an intermediary between users and the internet, enhancing security by filtering traffic, masking IP addresses, and potentially improving network performance. This setup can involve both explicit proxy configurations, where users manually configure their systems to use a proxy, and transparent proxy configurations, where the proxy operates invisibly in the background.',
      references: [
        {
          title: 'What is a Firewall Configuration?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-firewall-configuration'
        },
        {
          title: 'What is a Proxy Firewall and How does it work?',
          url: 'https://www.zenarmor.com/docs/network-security-tutorials/what-is-proxy-firewall#:~:text=Go%20to%20the%20Control%20Panel,for%20firewalls%20and%20other%20services'
        }
      ],
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
      explanation: '(213) Synchronizing regions in a federation in the context of cybersecurity is a crucial aspect of ensuring a strong and unified defense against cyber threats across multiple systems, organizations, or geographical locations.\n\n' +
      `Federated security involves sharing security measures and data across multiple systems or organizations, allowing for a common authentication method for access to different domains or resources. This approach allows users to access resources securely while maintaining each domain's individual control and policies.`,
      references: [
        {
          title: 'Federation Identity Strategies',
          url: 'https://www.cloudoptimo.com/blog/iam-sso-and-federation-identity-strategies-for-the-cloud/'
        }
      ],
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
      explanation: '(214) a WAF policy provides a crucial layer of security, acting as an intermediary between users and the web application. It analyzes HTTP/S requests at the application layer, which is where traditional firewalls and intrusion prevention systems often lack sufficient protection.',
      references: [
        {
          title: 'What is a WAF?',
          url: 'https://www.cisco.com/site/us/en/learn/topics/security/what-is-web-application-firewall-waf.html#:~:text=A%20web%20application%20firewall%20or,filtering%2C%20and%20blocking%20data%20packets'
        }
      ],
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
      explanation: `(215) Static Application Security Testing (SAST) is a cybersecurity method that analyzes an application's source code to identify potential security vulnerabilities before the application is deployed. It's a "white box" testing approach, meaning it examines the code itself rather than the running application. SAST helps developers find and fix security flaws early in the development lifecycle, reducing the risk and cost associated with later remediation.`,
      references: [
        {
          title: 'What is SAST and How Does It Work?',
          url: 'https://www.blackduck.com/glossary/what-is-sast.html#:~:text=Definition,known%20as%20white%20box%20testing'
        }
      ],
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
      explanation: `(216) "Prompt Driven MFA" most likely refers to the type of multi-factor authentication (MFA) that uses push notifications or prompts to the user's registered device as a verification factor. This means, after entering their username and password, the user receives a notification on their smartphone or other device asking them to approve or deny the login attempt.`,
      references: [
        {
          title: 'What is MFA?',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/identity-protection/multifactor-authentication-mfa/'
        }
      ],
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
      explanation: `(217) Network geolocation misidentification poses a significant risk to cybersecurity by enabling malicious actors to bypass security measures, hide their true location, and potentially conduct fraudulent activities. This occurs when systems incorrectly identify a device's geographic location, often due to the use of VPNs, proxies, or inaccurate geolocation databases.`,
      references: [
        {
          title: 'Geolocation for Fraud Prevention',
          url: 'https://www.locationscloud.com/geolocation-cybersecurity-fraud-prevention/?srsltid=AfmBOormy76P-z67lB9hjfOuapJbR9pJMfWG4mMhEHEHz38ptXdKPcVh'
        }
      ],
      questionNumber: 217
    },
    {
      question: 'An organization is looking for gaps in its detection capabilities based on the APTs that may target the industry. Which of the following should the security analyst use to perform threat modeling?',
      answer: 'АТТ&СК',
      distractors: ['ОWASP', 'САРЕС', 'STRIDE'],
      explanation: '(218) MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a globally-recognized knowledge base and framework used in cybersecurity to understand and combat cyber adversary behavior. It catalogs the tactics and techniques used by attackers during cyberattacks, providing a structured way for defenders to identify, analyze, and respond to threats. Essentially, ATT&CK helps security professionals understand how attackers operate, allowing them to build more effective defenses and improve their overall security posture.',
      references: [
        {
          title: 'What is the MITRE ATT&CK?',
          url: 'https://www.exabeam.com/explainers/mitre-attck/what-is-mitre-attck-an-explainer/#:~:text=ATT%26CK%20stands%20for%20adversarial%20tactics,an%20attack%20is%20in%20progress'
        }
      ],
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
      explanation: `(219) Email quarantine is a security feature that isolates potentially dangerous or unwanted emails, preventing them from reaching users' inboxes. These emails are typically flagged as spam, malware, or phishing attempts and are held in a secure, separate space for review by administrators or, in some cases, users, according to Abnormal AI and Wayne State University. This helps protect users from falling victim to cyber threats and minimizes the risk of security breaches.`,
      references: [
        {
          title: 'What is quarantined email?',
          url: 'https://www.paubox.com/blog/what-is-quarantined-email'
        }
      ],
      questionNumber: 219
    },
    {
      question: 'A systems administrator needs to identify new attacks that could be carried out against the environment. The administrator plans to proactively seek out and observe new attacks. Which of the following is the best way to accomplish this goal?',
      answer: 'Deploying a honeypot',
      distractors: ['Configuring an IPS', 'Implementing sandboxing', 'Scanning for IoCs'],
      explanation: '(220) Deploying a honeypot is a strategic move to lure, detect, and analyze cyberattacks. Honeypots are essentially decoy systems designed to attract attackers and gain valuable intelligence on their tactics, techniques, and procedures (TTPs) without risking your real systems.',
      references: [
        {
          title: 'What are Honeypots?',
          url: 'https://www.fortinet.com/resources/cyberglossary/what-is-honeypot#:~:text=In%20cybersecurity%20honeypots%20are%20decoy,organization%20actually%20uses%20for%20production'
        }
      ],
      questionNumber: 220
    },
    {
      question: 'A company experienced a data breach, resulting in the disclosure of extremely sensitive data regarding a merger. As a regulated entity, the company must comply with reporting and disclosure requirements. The company is concerned about its public image and shareholder values. Which of the following best supports the organization in addressing its concerns?',
      answer: 'Crisis management plan',
      distractors: ['Data subject access request', 'Business impact analysis', 'Supply chain management program'],
      explanation: `(221) A crisis management plan prepares your organization for a disaster or unforeseen event. With a plan in place, you can lessen the impact of the crisis on your employees and your business operations. When the team is properly trained for the unexpected, there's less chance of long-term damage.`,
      references: [
        {
          title: 'Understanding Crisis Management',
          url: 'https://www.shadowhq.io/crisis-management-vs-cyber-crisis-management/'
        }
      ],
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
      explanation: '(222) Documenting third-party involves creating and maintaining detailed records of how third-party vendors and service providers are assessed and managed for security risks. This includes documenting vendor inventory, risk assessments, security questionnaires, evidence requests, and ongoing monitoring efforts. Effective documentation helps organizations identify, assess, and mitigate potential cyber risks associated with third-party relationships.\n\n' +
      `A security architecture review (SAR) is a comprehensive evaluation of an organization's cybersecurity infrastructure to identify vulnerabilities and ensure it aligns with best practices and business objectives. This review examines the design, implementation, and operation of systems, networks, and applications, looking for weaknesses that could be exploited by cyberattacks.`,
      references: [
        {
          title: 'Security Architecture, What is it?',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-security-architecture'
        },
        {
          title: 'How to Manage Third-Party Cybersecurity Risks',
          url: 'https://business.bofa.com/en-us/content/third-party-cyber-risk-management.html'
        }
      ],
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
      explanation: '(223) Cybersecurity playbooks are detailed, step-by-step guides that outline procedures for handling cybersecurity incidents. They are crucial for a consistent and efficient response to security threats, minimizing damage and ensuring a rapid recovery. Building these playbooks involves defining objectives, assembling a team, identifying potential incidents, developing response procedures, creating communication plans, and establishing documentation and reporting requirements.\n\n' +
      `Tabletop exercises are a discussion-based simulation used to assess an organization's readiness to respond to potential cyber incidents. It involves stakeholders collaboratively walking through hypothetical scenarios to identify weaknesses in their incident response plans, communication protocols, and overall preparedness.`,
      references: [
        {
          title: 'Understanding Tabletop Exercises',
          url: 'https://www.youtube.com/watch?v=WUPTZlrTPQE&t=113'
        },
        {
          title: 'Understanding cybersecurity playbooks',
          url: 'https://medium.com/@trout.software/understanding-playbooks-in-cyber-security-2afc93ff8029#:~:text=Cybersecurity%20playbooks%20are%20not%20meant,when%20a%20real%20incident%20occurs'
        }
      ],
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
      explanation: '(224) Revoking a secret refers to the process of invalidating or deactivating a credential that grants access to a system or resource. This could be a password, API key, token, or any other type of sensitive information used for authentication or authorization.',
      references: [
        {
          title: 'What is Secrets Management?',
          url: 'https://www.beyondtrust.com/resources/glossary/secrets-management#:~:text=Secrets%20management%20refers%20to%20the,parts%20of%20the%20IT%20ecosystem'
        }
      ],
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
      explanation: '(225) Data Loss Prevention (DLP) is a strategy and set of tools designed to detect, prevent, and manage the unauthorized access, use, or transmission of sensitive data. DLP solutions work to safeguard critical information from falling into the wrong hands, whether through malicious attacks, accidental exposure, or insider threats.\n\n' +
      'Directory-based Group Policies provide a powerful means of managing and securing computer and user configurations within an Active Directory environment. By centrally managing these settings, organizations can enforce security policies, automate tasks, and improve overall operational efficiency.',
      references: [
        {
          title: 'What is DLP? Yea, you know me!',
          url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-data-loss-prevention-dlp'
        },
        {
          title: 'What is Group Policy in Active Directory?',
          url: 'https://www.ninjaone.com/blog/what-is-group-policy-in-active-directory/'
        }
      ],
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
      explanation: `(226) SIEM (Security Information and Event Management) is a cybersecurity solution that aggregates and analyzes security data from various sources to provide a centralized view of an organization's security posture. It helps in detecting, analyzing, and responding to security threats in real-time by correlating events and identifying potential incidents.`,
      references: [
        {
          title: 'What is log aggregation?',
          url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/next-gen-siem/log-aggregation/'
        }
      ],
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
      explanation: '(227) Allow lists define which network traffic is permitted, enhancing security by restricting access to only necessary ports and protocols. This contrasts with denial lists, which block specific traffic. Implementing allow lists involves identifying essential network services and configuring firewalls to permit only traffic related to those services, minimizing the attack surface and improving overall security posture.',
      references: [
        {
          title: '6 Network Security Protocols',
          url: 'https://www.catonetworks.com/network-security/network-security-protocols/'
        }
      ],
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
      explanation: '(228) Creating a robust pipeline for checking container cybersecurity involves implementing security measures throughout the various stages of the container lifecycle, from build to deployment and runtime. This is commonly referred to as integrating security into the Continuous Integration/Continuous Deployment (CI/CD) pipeline, often following a "shift-left" security approach.\n\n' +
      'Pipeline security gates, particularly in the context of CI/CD (Continuous Integration/Continuous Delivery) pipelines, are critical for enhancing cybersecurity. These gates act as checkpoints within the automated software development and deployment process, enforcing security policies and mitigating risks at various stages. By integrating security checks into the pipeline, organizations can identify and address vulnerabilities earlier, improving overall security posture and reducing the likelihood of breaches.\n\n' +
      `Validating baseline security controls involves systematically testing and confirming that security measures are functioning as intended and providing adequate protection against cyber threats. This process ensures that an organization's security infrastructure is resilient and capable of mitigating risks.`,
      references: [
        {
          title: 'What is Security Control Validation?',
          url: 'https://www.picussecurity.com/resource/glossary/what-is-security-control-validation'
        },
        {
          title: 'CI CD Pipeline Security Best Practices',
          url: 'https://cycode.com/blog/ci-cd-pipeline-security-best-practices/'
        },
        {
          title: 'What is a container pipeline?',
          url: 'https://blogs.bmc.com/devops-container-pipeline/?print-posts=pdf#:~:text=Container%20Pipelines%20are%20software%20delivery,speeding%20up%20the%20development%20process'
        }
      ],
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
      explanation: '(229) To block unapproved applications and services for cybersecurity, you can utilize a combination of tools and strategies, including firewalls, application control software, and access control policies. These methods help prevent unauthorized software from being installed or executed, enhancing overall security and productivity.',
      references: [
        {
          title: 'Application Control',
          url: 'https://www.beyondtrust.com/resources/glossary/application-control'
        }
      ],
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
      explanation: '(230) Securing a web server involves a combination of strategies focused on preventing unauthorized access and protecting data. Key practices include using strong passwords, enabling HTTPS with SSL/TLS, keeping software updated, configuring firewalls, monitoring logs, and implementing web application firewalls (WAFs).\n\n' +
      'X.509 certificates are digital documents used to verify the identity of entities (users, devices, servers, etc.) online, playing a crucial role in cybersecurity by enabling secure communication and authentication. They are fundamental to protocols like TLS/SSL for secure web browsing and are also used in email encryption (S/MIME), VPNs, and code signing.',
      references: [
        {
          title: 'What is an X509 Certificate?',
          url: 'https://www.encryptionconsulting.com/what-is-an-x-509-certificate/'
        },
        {
          title: 'What is a secure web server?',
          url: 'https://www.ninjaone.com/it-hub/endpoint-security/secure-web-server/'
        }
      ],
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
      explanation: '(231) Regulatory enforcement in cybersecurity involves government agencies and industry-specific bodies issuing and enforcing rules to protect data and systems from cyber threats. These regulations mandate specific cybersecurity practices, and non-compliance can lead to penalties, fines, or legal action. Key agencies include the Federal Trade Commission (FTC) and the Cybersecurity and Infrastructure Security Agency (CISA).',
      references: [
        {
          title: 'Cyber Security Regulations',
          url: 'https://www.bitsight.com/glossary/cyber-security-regulations#:~:text=Confidentiality%3A%20Ensuring%20that%20information%20is,to%20authorized%20users%20when%20needed'
        }
      ],
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
      explanation: '(232) Original Equipment Manufacturers (OEMs) play a crucial role in cybersecurity by integrating Trusted Platform Modules (TPMs) into their devices and systems.\n\n' +
      'A TPM is a specialized chip, either integrated into the CPU or as a separate component on the motherboard, designed to enhance security through hardware-based cryptographic operations. TPMs securely store sensitive information like passwords, certificates, and encryption keys, providing a hardware root of trust.',
      references: [
        {
          title: 'What is a Trusted Platform Module?',
          url: 'https://trustedcomputinggroup.org/about/what-is-a-trusted-platform-module-tpm/'
        }
      ],
      questionNumber: 232
    },
    {
      question: 'A company\'s security policy states that any publicly available server must be patched within 12 hours after a patch is released. A recent IIS zero-day vulnerability was discovered that affects all versions of the Windows Server OS:\n\n' +
        `![Question 233](${imgPath(233)})\n\n` +
        'Which of the following hosts should a security analyst patch first once a patch is available?',
      answer: '4',
      distractors: ['1', '2', '3', '5', '6'],
      explanation: '(233) Critical servers to patch for cybersecurity include those running operating systems like Windows Server, Linux distributions, and macOS, as well as those hosting essential applications like web servers (Apache, IIS), database servers (SQL Server, MySQL), and virtualization platforms (VMware, Hyper-V). Additionally, network infrastructure devices such as firewalls, routers, and switches, along with firmware for these devices, should be prioritized.',
      references: [
        {
          title: 'What is Server Patching?',
          url: 'https://www.ninjaone.com/blog/what-is-server-patching-why-its-important/'
        }
      ],
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
      explanation: '(234) Physical implants, like those used in medical devices or even computer hardware, introduce unique cybersecurity challenges due to their physical nature and potential for remote access and manipulation. These implants, while offering potential benefits, can be vulnerable to attacks that compromise patient safety, data privacy, or system functionality.\n\n' +
      'Tampering refers to the unauthorized modification, alteration, or interference with systems, devices, processes, or data. This can be done with malicious intent.',
      references: [
        {
          title: 'Data Tampering Protection',
          url: 'https://www.sealpath.com/blog/data-tampering-protection-business/'
        },
        {
          title: 'Implants as an infection method',
          url: 'https://blog.barracuda.com/2023/09/14/malware-101-implants'
        }
      ],
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
      explanation: '(235) Log parsing in cybersecurity is the process of transforming raw, unstructured log data into a structured format that can be analyzed for security threats and anomalies. This structured data helps security teams quickly identify and respond to potential breaches, troubleshoot issues, and maintain a strong security posture.',
      references: [
        {
          title: 'What is log parsing?',
          url: `https://www.dynatrace.com/knowledge-base/log-parsing/#:~:text=Log%20parsing%20is%20a%20process,an%20application's%20behavior%20and%20performance`
        }
      ],
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
      explanation: '(236) Adjusting SIEM (Security Information and Event Management) notifications is a crucial process in cybersecurity for optimizing threat detection and minimizing alert fatigue. It involves fine-tuning alert rules to reduce false positives and ensure that security teams focus on genuine threats. This process helps organizations streamline incident response, improve security posture, and optimize resource allocation.',
      references: [
        {
          title: 'What are SIEM Alerts',
          url: 'https://www.microsoft.com/en-us/security/business/security-101/what-is-siem'
        }
      ],
      questionNumber: 236
    },
    {
      question: 'After a penetration test on the internal network the following report was generated:\n\n' +
        `![Question 237](${imgPath(237)})\n\n` +
        'Which of the following should be recommended to remediate the attack?',
      answer: 'Rotating KRBTGT password',
      distractors: ['Deleting SQLSV', 'Reimaging ADMIN01$', 'Resetting the local domain'],
      explanation: `(237) KRBTGT is a built-in account specifically used by the Kerberos authentication service. It's essentially the "Key Distribution Center" service account, responsible for encrypting and signing all Kerberos tickets within the domain. Essentially, it validates that a user's authentication request is legitimate, and it's a key target for Golden Ticket attacks.`,
      references: [
        {
          title: 'KRBTG Password resets',
          url: 'https://infrastructureinsider.co.uk/active-directory-you-need-to-know-about-krbtgt-password-resets/#:~:text=First%20off%2C%20KRBTGT%20stands%20for,takes%20place%20via%20%E2%80%9Ctickets%E2%80%9D'
        }
      ],
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
      explanation: '(238) Application control, when coupled with blocked hashes, is a cybersecurity technique that enhances security by regulating which applications can run on a system and by blocking known malicious or untrusted applications based on their cryptographic hash values. This approach helps prevent the execution of unauthorized or potentially harmful software, including zero-day exploits, and strengthens overall system security.\n\n' +
      'Enterprise-trusted root certificates are crucial for establishing a secure and trusted environment within an organization. They act as the foundation for verifying the authenticity of other certificates, enabling secure communication, and mitigating various cyber security risks. By deploying these certificates to devices and users, organizations can ensure that only trusted entities are allowed to access network resources and participate in secure communication.',
      references: [
        {
          title: 'What is Application Control?',
          url: 'https://www.beyondtrust.com/resources/glossary/application-control#:~:text=Application%20control%20is%20a%20cybersecurity,on%20a%20computer%20or%20network'
        },
        {
          title: 'What are Root Certificates, and Why Do They Matter?',
          url: 'https://www.ssl.com/article/what-are-root-certificates-and-why-do-they-matter/#:~:text=Root%20certificates%20are%20sometimes%20called,back%20to%20a%20trusted%20root'
        }
      ],
      questionNumber: 238
    },
    {
      question: 'After an organization met with its ISAC, the organization decided to test the resiliency of its security controls against a small number of advanced threat actors. Which of the following will enable the security administrator to accomplish this task?',
      answer: 'Adversary emulation',
      distractors: ['Reliability factors', 'Deployment of a honeypot', 'Internal reconnaissance'],
      explanation: `(239) Adversary emulation in cybersecurity is the practice of simulating real-world cyberattacks to test and improve an organization's defenses. It involves mimicking the tactics, techniques, and procedures (TTPs) of specific threat actors to identify vulnerabilities and assess the effectiveness of security controls. Unlike penetration testing, which focuses on finding vulnerabilities, adversary emulation focuses on replicating the behavior of known adversaries to provide a more realistic assessment of an organization's security posture.`,
      references: [
        {
          title: 'What is Adversary Emulation?',
          url: 'https://www.picussecurity.com/resource/glossary/what-is-adversary-emulation#:~:text=Adversary%20emulation%20identifies%20gaps%20in,undetected%2C%20thus%20enabling%20timely%20remediation'
        }
      ],
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
      explanation: '(240) Indicators of compromise (IoCs) are information about a specific security breach that can help security teams determine if an attack has taken place. This data can include details about the attack, such as the type of malware used, the IP addresses involved, and other technical details.',
      references: [
        {
          title: 'What are indicators of compromise?',
          url: 'https://www.cloudflare.com/learning/security/what-are-indicators-of-compromise/#:~:text=Indicators%20of%20compromise%20(IoCs)%20are,involved%2C%20and%20other%20technical%20details'
        }
      ],
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
      explanation: `(241) DNS zone transfers, while essential for redundancy and synchronization between DNS servers, can pose significant security risks if not properly configured. An attacker can exploit insecure zone transfers to gain a comprehensive map of an organization's network infrastructure, including potentially sensitive information about servers, subdomains, and other internal resources. This information can then be used to launch targeted attacks, such as phishing campaigns, malware deployment, or even DDoS attacks.`,
      references: [
        {
          title: 'What are DNS Zone Transfers?',
          url: 'https://www.cbtnuggets.com/blog/technology/networking/what-are-dns-zone-transfers'
        }
      ],
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
      explanation: '(242) phishing is a type of social engineering attack where cybercriminals impersonate trusted entities to trick individuals into revealing sensitive information like passwords, credit card details, or other personal data. They often use deceptive emails, text messages, or malicious websites to lure victims into divulging information or clicking on malicious links that can install malware.',
      references: [
        {
          title: 'What is a phishing campaign?',
          url: 'https://www.barracuda.com/support/glossary/phishing-campaign'
        }
      ],
      questionNumber: 242
    }
    // {
    //   question: '',
    //   answer: '',
    //   distractors: [
    //     '',
    //     '',
    //     ''
    //   ],
    //   explanation: '',
    //   references: [
    //         {
    //           title: '',
    //           url: ''
    //         }
    //       ],
    //   questionNumber: 243
    // }
  ]
};

export { terms, acronyms };
export default securityXQuiz;

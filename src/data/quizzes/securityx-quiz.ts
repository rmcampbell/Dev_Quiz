const securityQuiz = [
  {
    Question: 'Dion Training is using a cloud service provider under an Infrastructure as a Service (IaaS) model. Assuming there is a shared responsibility model between the two organizations, which of the following is MOST likely the security responsibility of Dion Training under this IaaS model?',
    Answer: 'Data and application security configuration',
    Distractors: [
      'Tenant resource identity and access control',
      'Managing the data centers across regions',
      'Physical security of the infrastructure'
    ],
    Explanation: 'The shared responsibility model identifies that responsibility for the implementation of security as applications, data, and workloads are transitioned into a cloud platform and shared between the customer and the cloud service provider (CSP). Using an Infrastructure as a Service (IaaS) model provides hardware hosted at a provider facility using the provider\'s physical security controls and utilities. Identifying the boundary between customer and cloud provider responsibilities, in terms of security, is imperative for reducing the risk of introducing vulnerabilities into your environment. In this scenario, since an IaaS model was chosen, the cloud customer (Dion Training) will be responsible for the data and application security configurations, while the cloud service provider will be responsible for the physical data centers, equipment, and the access control to the tenant resources',
    Link: 'Topic: 2.0 - Security Architecture'
  },
  {
    Question: 'During a routine security audit, a network administrator discovers unauthorized devices communicating across VLANs. The organization recently added several new switches to expand the network, and some ports were manually configured. Which of the following most likely led to this issue?',
    Answer: 'Switch port misconfiguration',
    Distractors: [
      'Incorrect DNS records',
      'Lack of VPN usage',
      'Overly permissive ACLs'
    ],
    Explanation: 'Misconfigured switch ports can result in unintended VLAN communications. Lack of VPN usage does not impact VLAN operations. Incorrect DNS records involve name resolution, not VLAN segregation. Overly permissive ACLs impact network access but not VLAN communication.',
    Link: 'Topic: 3.0 Security Engineering'
  },
  {
    Question: 'A network technician is diligent about maintaining all system servers at the most current service pack level available. After performing upgrades, users experience issues with server-based applications. Which of the following should be used to prevent issues in the future?',
    Answer: 'Configure a test lab for updates',
    Distractors: [
      'Configure an automated patching server',
      'Configure a honeypot for application testing',
      'Virtualize the servers and take daily snapshots'
    ],
    Explanation: 'To prevent the service pack issues, make sure to validate them in a test/lab environment first before going ahead and applying a new Service Pack in your production environment. While using an automated patching server is a good idea, no patches should be deployed before being tested in a lab first.',
    Link: 'Topic: 3.0 - Security Engineering'
  },
  {
    Question: 'A public figure’s social media accounts were compromised, and a realistic video was released showing them endorsing a fraudulent investment scheme. Investigators discovered the video was generated using artificial intelligence. What type of AI-enabled attack does this scenario represent?',
    Answer: 'Deepfake manipulation',
    Distractors: [
      'AI pipeline injection',
      'Prompt engineering misuse',
      'Automated exploit generation'
    ],
    Explanation: 'his scenario exemplifies a deepfake attack, where AI is used to create realistic but false media, such as videos or images, to deceive viewers. AI pipeline injection and prompt engineering involve manipulating AI workflows, while automated exploit generation focuses on creating software vulnerabilities, none of which directly relate to fabricated video content.',
    Link: 'Topic: 1.0 - Governance, Risk, and Compliance'
  }
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   },
//   {
//     Question: "",
//     Answer: "",
//     Distractors: ["", "", ""],
//     Explanation: "",
//     Link: "Topic: "
//   }
];

export default securityQuiz;

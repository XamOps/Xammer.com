/* ─────────────────────────────────────────────────────────────
   caseStudiesData.js — Source of truth for the home-page "Case
   Studies" section and the individual /case-studies/:slug pages.

   To add a new case study: append another object to this array.
   `slug` drives the route (/case-studies/<slug>), everything else
   feeds both the home card and the full detail page.

   Notes on optional fields:
   - `website` and `contact` (on the hero/about) are optional.
   - `overview` is a flat list of {label, value} rows rendered as-is
     in the Client Overview table — include only what's known.
   - `outcomes` items may be a plain string, or {title, desc} for a
     richer card.
   - `approach` (intro/closing/roles) is optional — only render the
     "Xammer's Approach" section when a case study provides it.
   - `businessImpact` is an array of paragraphs (usually just one).
   ───────────────────────────────────────────────────────────── */

import { SITE_URL, OG_IMAGE } from './seoData';

export const caseStudies = [
  {
    slug: 'metaverze',
    client: 'Metaverze',
    industry: 'Professional Services / Technology',
    location: 'India',
    website: 'metaverze.cloud',
    service: 'AWS Infrastructure Operations & Patch Management',
    engagementType: 'Net New Business',
    accent: 'teal',

    tagline: 'Securing and Automating AWS Infrastructure Operations',
    heroSubtitle:
      "How Metaverze strengthened its AWS security posture and simplified patch management with Xammer — building a centralized, automated operations framework in place of manual maintenance.",

    overview: [
      { label: 'Industry', value: 'Professional Services / Technology' },
      { label: 'Location', value: 'India' },
      { label: 'Website', value: 'metaverze.cloud' },
      { label: 'AWS Engagement', value: 'AWS Infrastructure Operations & Patch Management' },
      { label: 'Engagement Type', value: 'Net New Business' },
      { label: 'Client Contact', value: 'Monika Singh, Founder' },
    ],

    about:
      'Metaverze is an AI-focused technology and professional services company based in India, specializing in generative AI, neural rendering, spatial computing, and intelligent spatial realities. The company develops adaptive and responsive virtual environments and solutions across areas such as metaverse experiences, AI-driven digital humans, and real-time rendering. As its cloud environment and workloads grew, Metaverze required a more structured approach to infrastructure operations, security, and system patch management.',

    challenge: {
      intro:
        'As Metaverze continued to build and operate its technology environment on AWS, managing infrastructure updates and maintaining a strong security posture became increasingly important. The existing approach required greater automation and centralization to reduce the operational effort associated with system maintenance and patch management.',
      points: [
        'Managing system updates across AWS infrastructure efficiently',
        'Reducing dependency on manual patching activities',
        'Maintaining a consistent security posture across workloads',
        'Minimizing operational overhead associated with infrastructure maintenance',
        'Establishing a centralized and scalable approach to patch management',
        'Ensuring infrastructure remained updated while supporting ongoing business operations',
      ],
    },

    objective: {
      intro:
        'Xammer worked with Metaverze to establish a more automated, centralized, and secure infrastructure operations framework.',
      points: [
        'Automate infrastructure patch management',
        'Improve overall AWS security posture',
        'Reduce manual infrastructure maintenance',
        'Improve operational efficiency',
        'Establish a repeatable process for system updates',
        'Support scalable AWS infrastructure operations',
        'Minimize the risk associated with outdated systems and unpatched infrastructure',
      ],
    },

    solution: [
      {
        icon: 'ShieldCheck',
        title: 'Centralized Patch Management',
        desc: 'A structured approach to managing and applying system updates across the AWS environment.',
      },
      {
        icon: 'Cog',
        title: 'Infrastructure Automation',
        desc: 'Automation of repetitive system maintenance activities to reduce manual intervention.',
      },
      {
        icon: 'Lock',
        title: 'Security Enhancement',
        desc: "Keeping infrastructure updated to help strengthen the customer's overall security posture.",
      },
      {
        icon: 'Gauge',
        title: 'Operational Optimization',
        desc: 'Reducing the effort required from teams to manage routine infrastructure maintenance.',
      },
      {
        icon: 'Cloud',
        title: 'AWS-Native Approach',
        desc: "Deployed within the customer's AWS environment, allowing Metaverze to leverage AWS infrastructure and services as part of its operational framework.",
      },
    ],

    implementation: [
      {
        title: 'Infrastructure Assessment',
        desc: 'Xammer evaluated the existing AWS environment and identified the infrastructure and patch-management requirements.',
      },
      {
        title: 'Solution Deployment',
        desc: "Xammer initiated deployment within the customer's AWS account and configured the required infrastructure operations and patch-management capabilities.",
      },
      {
        title: 'Technical Validation',
        desc: 'The deployed solution underwent technical validation to ensure the implementation was functioning as expected — completed successfully.',
      },
      {
        title: 'Final Launch Preparation',
        desc: 'Following successful technical validation, Xammer proceeded with the final activities required before launch.',
      },
    ],

    outcomes: [
      'Automated infrastructure updates',
      'Reduced manual maintenance effort',
      'Improved infrastructure security posture',
      'Centralized patch management',
      'More consistent system maintenance',
      'Improved operational efficiency',
      'A scalable foundation for continued AWS infrastructure growth',
    ],

    beforeAfter: [
      { before: 'Manual infrastructure maintenance', after: 'Automated infrastructure operations' },
      { before: 'Greater operational effort', after: 'Reduced manual intervention' },
      { before: 'Patch management required greater oversight', after: 'Centralized patch-management approach' },
      { before: 'Infrastructure updates could be operationally intensive', after: 'Structured and automated updates' },
      { before: 'Security maintenance required ongoing manual effort', after: 'Improved security posture through systematic patching' },
      { before: 'Less centralized infrastructure operations', after: 'More centralized and repeatable operations' },
    ],

    technology: [
      { name: 'AWS', desc: "The solution was implemented within the customer's AWS environment." },
      { name: 'Infrastructure Operations', desc: 'Used to streamline and automate routine infrastructure-management activities.' },
      { name: 'Patch Management', desc: 'Implemented to provide a structured approach to keeping systems updated.' },
      { name: 'Cloud Automation', desc: 'Automation was used to reduce repetitive manual infrastructure-management activities.' },
    ],

    businessImpact: [
      "Beyond simply addressing patch management, the engagement helped Metaverze establish a stronger operational foundation for its AWS environment. By reducing manual infrastructure maintenance and introducing a more systematic approach to updates, Xammer helped the customer focus more of its operational effort on its core technology initiatives. For a company operating in AI, spatial computing and metaverse technologies, this provides a more reliable foundation for continued development and cloud growth.",
    ],

    seo: {
      title: 'Metaverze Case Study | AWS Infrastructure Security & Patch Automation | Xammer',
      description:
        'How Xammer helped Metaverze automate AWS patch management and strengthen its infrastructure security posture with a centralized, scalable operations framework.',
      keywords:
        'Metaverze case study, AWS patch management, AWS infrastructure security, Xammer AWS case study, cloud infrastructure automation',
      canonical: `${SITE_URL}/case-studies/metaverze`,
      ogImage: OG_IMAGE,
    },
  },

  {
    slug: 'sparkapp',
    client: 'SparkApp',
    industry: 'Professional Services',
    location: 'Delhi, India',
    service: 'Cloud Infrastructure Modernization',
    engagementType: 'Net New Business',
    accent: 'blue',

    tagline: "Modernizing SparkApp's Application Infrastructure with Amazon EKS",
    heroSubtitle:
      'How Xammer helped SparkApp establish a secure, scalable, and automated cloud foundation for its containerized workloads.',

    overview: [
      { label: 'Industry', value: 'Professional Services' },
      { label: 'Location', value: 'Delhi, India' },
      { label: 'Business Model', value: 'B2B SaaS' },
      { label: 'Cloud Platform', value: 'Amazon Web Services' },
      { label: 'Engagement', value: 'Cloud Infrastructure Modernization' },
      { label: 'Core Technology', value: 'Amazon EKS & Containerization' },
      { label: 'Engagement Type', value: 'Net New Business' },
    ],

    about:
      'SparkApp is a technology company building an AI-native platform designed to improve connections and engagement within organizations through intelligent discovery and activity matching. As the platform evolved toward a containerized microservices environment, SparkApp needed a modern infrastructure foundation that could support its workloads with greater scalability, security, automation, and operational visibility.',

    challenge: {
      intro:
        "As SparkApp's application environment evolved toward a containerized microservices architecture, its underlying infrastructure needed to evolve with it. The customer needed a stronger cloud foundation capable of supporting containerized workloads while improving scalability, security, reliability, deployment automation, and operational visibility. SparkApp selected Amazon EKS as the foundation for its container modernization initiative and partnered with Xammer to design and implement the solution.",
      points: [
        'Establishing a robust platform for containerized workloads',
        'Supporting scalability and high availability',
        'Creating a more automated application deployment process',
        'Strengthening infrastructure and workload security',
        'Improving monitoring and operational visibility',
        'Reducing manual effort across infrastructure and application operations',
        'Establishing an infrastructure foundation aligned with AWS best practices',
        'Creating a platform that could support continued application modernization',
      ],
    },

    objective: {
      intro:
        'Xammer worked with SparkApp to establish a secure, scalable, and production-oriented container platform on AWS. Success criteria included EKS provisioning, secure networking and access controls, CI/CD, monitoring, auto-scaling, and alignment with AWS Well-Architected practices.',
      points: [
        'Modernizing the infrastructure with Amazon EKS',
        'Establishing a scalable AWS environment for containerized workloads',
        'Automating application deployment through CI/CD',
        'Strengthening security and access controls',
        'Improving monitoring and observability',
        'Enabling workload and infrastructure auto-scaling',
        'Following AWS Well-Architected best practices',
        'Creating a foundation for continued cloud modernization',
      ],
    },

    solution: [
      {
        icon: 'Boxes',
        title: 'A Modern AWS Foundation',
        desc: 'Amazon EKS as the core orchestration layer, supported by EC2 managed node groups, ECR, VPC networking, an Application Load Balancer, RDS, and S3/EBS storage — aligned with the AWS Well-Architected Framework.',
      },
      {
        icon: 'Workflow',
        title: 'From Code to Production',
        desc: 'A CI/CD workflow integrating GitHub with AWS CodePipeline and CodeBuild — a repeatable path from source code through build and deployment, with auto-scaling for pods and node groups.',
      },
      {
        icon: 'KeyRound',
        title: 'Security Built Into the Architecture',
        desc: 'IAM-based access controls, IRSA, Kubernetes RBAC, security groups, private networking, encrypted storage, and AWS Secrets Manager — incorporated across the environment rather than as a separate layer.',
      },
      {
        icon: 'Eye',
        title: 'Visibility Across the Environment',
        desc: 'Amazon CloudWatch and Fluent Bit for centralized logging, metrics, and monitoring, with CloudWatch dashboards providing a foundation for ongoing operational visibility.',
      },
    ],

    implementation: [
      {
        title: 'Infrastructure Foundation',
        desc: 'Xammer provisioned the core AWS infrastructure, including the VPC, public and private subnets, IAM configuration, and the Amazon EKS cluster.',
      },
      {
        title: 'EKS & Container Deployment',
        desc: "The EKS environment was configured with managed node groups, access controls, and the supporting infrastructure required for SparkApp's containerized workloads.",
      },
      {
        title: 'CI/CD Integration',
        desc: 'GitHub was integrated with AWS CodePipeline and CodeBuild to establish an automated application build and deployment workflow.',
      },
      {
        title: 'Security & Access Controls',
        desc: 'Xammer implemented IAM, IRSA, RBAC, security groups, encrypted storage, and secure secret management to strengthen the security of the environment.',
      },
      {
        title: 'Monitoring & Observability',
        desc: 'CloudWatch and Fluent Bit were configured for logging, metrics, and monitoring, providing greater visibility into the environment.',
      },
      {
        title: 'Documentation & Handover',
        desc: "The engagement included documentation, access handover, and training to support SparkApp's ongoing operations.",
      },
    ],

    outcomes: [
      { title: 'Scalable Container Infrastructure', desc: 'Amazon EKS and auto-scaling capabilities created a foundation for managing scalable containerized workloads.' },
      { title: 'Automated Application Delivery', desc: 'CI/CD automation established a more consistent and repeatable approach to application deployments.' },
      { title: 'Stronger Security', desc: 'Identity, access, networking, secrets, and storage security were incorporated throughout the environment.' },
      { title: 'Improved Observability', desc: 'CloudWatch and Fluent Bit provided centralized monitoring and logging capabilities.' },
      { title: 'Modern Cloud Foundation', desc: "The solution established an AWS environment designed to support SparkApp's continued application and infrastructure modernization." },
    ],

    beforeAfter: [
      { before: 'Infrastructure required modernization for containerized workloads', after: 'Container platform established with Amazon EKS' },
      { before: 'Application deployment needed greater automation', after: 'CI/CD implemented using AWS CodePipeline & CodeBuild' },
      { before: 'Security needed to be addressed across workloads', after: 'IAM, IRSA, RBAC, security groups and Secrets Manager incorporated' },
      { before: 'Monitoring requirements were evolving with the container environment', after: 'Centralized monitoring and logging established' },
      { before: 'Infrastructure needed greater scalability', after: 'Auto-scaling capabilities incorporated' },
      { before: 'Cloud environment required a more structured operating foundation', after: 'AWS environment aligned with Well-Architected practices' },
    ],

    technology: [
      { name: 'Amazon EKS', desc: 'Managed Kubernetes — the core orchestration layer for containerized workloads.' },
      { name: 'Amazon EC2', desc: 'Managed node groups providing compute capacity for the cluster.' },
      { name: 'Amazon ECR', desc: 'Container image management for the deployment pipeline.' },
      { name: 'Amazon VPC', desc: 'Public and private subnets for secure application networking.' },
      { name: 'Amazon RDS', desc: 'Managed database service for application data.' },
      { name: 'Amazon S3 & EBS', desc: 'Object and block storage for application and platform data.' },
      { name: 'AWS IAM & IRSA', desc: 'Controlled workload access via IAM roles for service accounts.' },
      { name: 'AWS Secrets Manager', desc: 'Secure storage and management of application secrets.' },
      { name: 'AWS CodePipeline', desc: 'Automated build-to-deploy release pipeline.' },
      { name: 'AWS CodeBuild', desc: 'Managed build service powering the CI/CD workflow.' },
      { name: 'Amazon CloudWatch', desc: 'Centralized metrics, logs, and operational dashboards.' },
      { name: 'Fluent Bit', desc: 'Log forwarding and collection across the cluster.' },
    ],

    approach: {
      intro:
        'Xammer combined AWS cloud architecture, DevOps automation, containerization, security, and observability to help SparkApp modernize its infrastructure. The engagement covered the full technical foundation required to operate the environment — from infrastructure provisioning and EKS deployment to CI/CD, monitoring, security, documentation, and handover.',
      closing: 'It was the foundation for a more scalable, secure, and automated cloud operating model.',
      roles: ['Cloud Architecture', 'DevOps', 'Containerization', 'Security', 'CI/CD', 'Monitoring & Observability'],
    },

    businessImpact: [
      'The engagement went beyond implementing Amazon EKS. Xammer helped SparkApp establish the cloud and DevOps foundation required to operate a modern containerized application environment.',
      'By combining container orchestration, CI/CD automation, security controls, monitoring, and scalability capabilities, SparkApp gained a more structured foundation for managing its application workloads on AWS — one that supports its continued application, infrastructure, and cloud modernization journey.',
    ],

    seo: {
      title: 'SparkApp Case Study | Amazon EKS Cloud Infrastructure Modernization | Xammer',
      description:
        'How Xammer helped SparkApp modernize its application infrastructure on Amazon EKS — secure networking, CI/CD automation, monitoring, and auto-scaling on AWS.',
      keywords:
        'SparkApp case study, Amazon EKS case study, AWS container modernization, Xammer AWS case study, Kubernetes AWS case study, CI/CD AWS CodePipeline',
      canonical: `${SITE_URL}/case-studies/sparkapp`,
      ogImage: OG_IMAGE,
    },
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((cs) => cs.slug === slug);

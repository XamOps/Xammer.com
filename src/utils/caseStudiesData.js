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
    logo: '/images/metaverze-logo.png',
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
    logo: '/images/sparkapp-logo.jpg',
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

  {
    slug: 'onfinance',
    client: 'OnFinance AI',
    logo: '/images/OnFinance.png',
    industry: 'FinTech / BFSI',
    location: 'Bengaluru, India',
    service: 'Cloud Infrastructure Modernization',
    engagementType: 'Net New Business',
    accent: 'violet',

    tagline: "Modernizing OnFinance AI's AI Infrastructure with Amazon EKS",
    heroSubtitle:
      'How Xammer helped OnFinance AI build a scalable, secure and cost-efficient cloud foundation for financial AI workloads.',

    overview: [
      { label: 'Industry', value: 'FinTech / BFSI' },
      { label: 'Location', value: 'Bengaluru, India' },
      { label: 'Business Model', value: 'B2B Enterprise AI SaaS' },
      { label: 'Cloud Platform', value: 'Amazon Web Services' },
      { label: 'Engagement', value: 'Cloud Infrastructure Modernization' },
      { label: 'Core Technology', value: 'Amazon EKS & AI/ML Workloads' },
      { label: 'Engagement Type', value: 'Net New Business' },
    ],

    about:
      "OnFinance AI is a Bengaluru-based fintech company building domain-specific generative AI platforms for the Banking, Financial Services, and Insurance (BFSI) sector. Founded in 2022, OnFinance AI helps financial institutions streamline complex workflows across regulatory compliance, financial research, and market intelligence. Its proprietary financial-domain LLM, NeoGPT, powers specialized financial use cases, while its flagship ComplianceOS platform acts as an automated regulatory co-pilot — tracking regulatory updates, converting circulars into actionable tasks, automating evidence collection, and generating audit-ready reports. As OnFinance AI scaled its AI workloads and expanded its enterprise footprint, it required a cloud infrastructure foundation capable of supporting demanding AI inference and compliance workloads with greater scalability, security, reliability, and cost efficiency.",

    challenge: {
      intro:
        "As OnFinance AI's financial AI platforms evolved, the underlying infrastructure needed to support increasingly demanding LLM inference, compliance processing, and application workloads. The customer required an environment capable of dynamically scaling compute resources while maintaining the security, availability, observability, and cost efficiency expected for enterprise BFSI workloads.",
      points: [
        'High AI inference latency — serving specialized financial LLM workloads required efficient compute infrastructure for responsive inference and document processing',
        'Variable compute requirements as AI/ML workload demand fluctuated significantly',
        'Unpredictable infrastructure costs from maintaining capacity for peak workloads',
        'Enterprise security requirements around identity, access, encryption, and workload isolation',
        'Slow release cycles for AI-powered compliance capabilities and application services',
        'Scalability needed to support enterprise growth and future international expansion',
      ],
    },

    objective: {
      intro:
        'Xammer worked with OnFinance AI to establish a scalable, secure, and cost-efficient cloud foundation for its AI and financial application workloads.',
      points: [
        'Modernize application infrastructure using Amazon EKS',
        'Enable scalable containerized application and AI workloads',
        'Dynamically provision compute resources based on workload demand',
        'Improve compute utilization and infrastructure cost efficiency',
        'Establish security controls appropriate for enterprise financial workloads',
        'Improve infrastructure and application observability',
        'Create a more standardized environment for application deployment',
        'Establish a portable cloud foundation to support future multi-region expansion',
      ],
    },

    solution: [
      {
        icon: 'Boxes',
        title: 'Container Orchestration',
        desc: 'Amazon EKS as the central platform for managing, deploying, and scaling containerized application and AI/ML workloads.',
      },
      {
        icon: 'Workflow',
        title: 'Dynamic Compute Scaling',
        desc: 'AWS Karpenter and EC2 Auto Scaling dynamically provision compute capacity based on workload demand, including specialized resources for AI/ML.',
      },
      {
        icon: 'Server',
        title: 'Container Registry',
        desc: 'Amazon ECR provides secure storage and management of container images for application and model-serving workloads.',
      },
      {
        icon: 'Database',
        title: 'Database & Caching',
        desc: 'Amazon Aurora PostgreSQL supports relational compliance data, metadata, and audit information, with Amazon ElastiCache for high-speed caching.',
      },
      {
        icon: 'Search',
        title: 'Storage & Vector Search',
        desc: 'Amazon S3 stores compliance documents and unstructured data, while Amazon OpenSearch Service supports search and vector-based retrieval for RAG-driven financial applications.',
      },
      {
        icon: 'KeyRound',
        title: 'Networking & Security',
        desc: 'AWS Application Load Balancer and API Gateway route application traffic, while AWS IAM and AWS KMS provide identity, access control, and encryption.',
      },
      {
        icon: 'Eye',
        title: 'Observability',
        desc: 'Amazon CloudWatch and AWS X-Ray provide visibility into application performance, infrastructure health, and service interactions.',
      },
    ],

    implementation: [
      {
        title: 'Infrastructure Foundation',
        desc: "Xammer established the AWS infrastructure foundation required to support OnFinance AI's containerized workloads, including compute, networking, identity, and security components.",
      },
      {
        title: 'EKS & Container Deployment',
        desc: 'The Amazon EKS environment was configured as the central orchestration layer for application microservices and AI/ML workloads, with Amazon ECR integrated for container image management.',
      },
      {
        title: 'Dynamic Compute Provisioning',
        desc: 'Karpenter-based provisioning enabled compute resources to be dynamically provisioned based on cluster requirements, improving resource utilization.',
      },
      {
        title: 'AI Workload Infrastructure',
        desc: 'The architecture was designed to support specialized AI inference compute, including GPU-backed compute where required for model-serving workloads powering NeoGPT and ComplianceOS.',
      },
      {
        title: 'Data, Storage & Search',
        desc: 'Managed AWS data services were incorporated to support compliance information, application metadata, regulatory documents, caching, and retrieval workloads.',
      },
      {
        title: 'Security Implementation',
        desc: 'Security controls were incorporated across identity, access, encryption, and workload infrastructure using AWS IAM, AWS KMS, IRSA, and Kubernetes-based workload isolation.',
      },
      {
        title: 'Monitoring & Observability',
        desc: 'Amazon CloudWatch and AWS X-Ray were incorporated to provide visibility into infrastructure health, application performance, and service interactions.',
      },
    ],

    outcomes: [
      { title: '~40–45% Reduction in Total Monthly AWS Spend', desc: 'Improved infrastructure utilization and dynamic resource provisioning helped reduce overall AWS infrastructure expenditure.' },
      { title: '~50–60% Inference & Compute Savings', desc: 'Optimization of compute resources for AI workloads reduced infrastructure overhead associated with inference and processing.' },
      { title: '~30–40% Reduction in Operational Overhead', desc: 'The modernized containerized environment and automated infrastructure operations reduced manual management effort.' },
      { title: 'Scalable AI Infrastructure', desc: 'Amazon EKS and dynamic compute provisioning established a foundation capable of scaling application and AI workloads on demand.' },
      { title: 'Improved Enterprise Security', desc: 'Identity, encryption, access control, and workload isolation strengthened the infrastructure foundation for enterprise BFSI workloads.' },
      { title: 'Centralized Observability', desc: 'CloudWatch and X-Ray provided improved visibility across infrastructure and application workloads.' },
      { title: 'Foundation for Multi-Region Expansion', desc: 'A standardized, portable containerized architecture ready to support future expansion into the US, UK, and MENA regions.' },
    ],

    beforeAfter: [
      { before: 'Infrastructure required modernization for demanding AI workloads', after: 'AWS infrastructure modernized around Amazon EKS' },
      { before: 'Compute capacity needed to accommodate variable AI workloads', after: 'Dynamic compute provisioning and autoscaling incorporated' },
      { before: 'AI workloads could result in underutilized compute resources', after: 'Compute capacity aligned more closely with workload demand' },
      { before: 'Infrastructure costs were affected by variable resource utilization', after: 'Automated scaling and optimization improved cost efficiency' },
      { before: 'Application workloads required a more standardized infrastructure platform', after: 'Containerized operating environment established through Amazon EKS' },
      { before: 'Enterprise security requirements needed to be addressed across workloads', after: 'IAM, KMS, IRSA, and workload isolation incorporated' },
      { before: 'Infrastructure and application visibility needed improvement', after: 'CloudWatch and X-Ray established centralized observability' },
      { before: 'Future geographic expansion required a scalable and portable foundation', after: 'Containerized architecture provides a standardized baseline for expansion' },
    ],

    technology: [
      { name: 'Amazon EKS', desc: 'Central container orchestration platform for application and AI/ML workloads.' },
      { name: 'Amazon EC2', desc: 'Compute capacity for the EKS cluster.' },
      { name: 'AWS Karpenter', desc: 'Dynamic, workload-aware compute provisioning and scaling.' },
      { name: 'Amazon ECR', desc: 'Secure storage and management of container images.' },
      { name: 'Amazon Aurora PostgreSQL', desc: 'Relational compliance data, metadata, and audit information.' },
      { name: 'Amazon ElastiCache', desc: 'High-speed caching for frequently accessed data and application responses.' },
      { name: 'Amazon S3', desc: 'Scalable storage for compliance documents and unstructured data.' },
      { name: 'Amazon OpenSearch Service', desc: 'Search and vector-based retrieval for RAG-driven financial applications.' },
      { name: 'AWS Application Load Balancer & API Gateway', desc: 'Application traffic routing.' },
      { name: 'AWS IAM & AWS KMS', desc: 'Identity, access control, and encryption capabilities.' },
      { name: 'Amazon CloudWatch & AWS X-Ray', desc: 'Observability into application performance, infrastructure health, and service interactions.' },
    ],

    approach: {
      intro:
        'Xammer designed the solution around Amazon EKS as the central container orchestration platform for OnFinance AI\'s application and AI/ML workloads, combining container orchestration, dynamic compute provisioning, managed databases, caching, storage, search, networking, security, and observability.',
      closing:
        "The improved infrastructure foundation supports the continued development of NeoGPT and ComplianceOS, while enabling OnFinance AI's engineering team to focus more on financial AI innovation and less on manual infrastructure management.",
      roles: ['Cloud Architecture', 'AWS', 'Containerization', 'Kubernetes', 'AI/ML Infrastructure', 'Cost Optimization', 'Security', 'Observability'],
    },

    businessImpact: [
      'The engagement was not simply about introducing Kubernetes. It helped OnFinance AI establish the cloud foundation required to operate and scale AI-powered financial applications more efficiently.',
      "By combining Amazon EKS with dynamic compute provisioning, managed data services, security controls, and centralized observability, Xammer helped create a more structured infrastructure environment for OnFinance AI's growing AI workloads — and a scalable baseline for its continued enterprise growth and planned expansion into the US, UK, and MENA regions.",
    ],

    seo: {
      title: 'OnFinance AI Case Study | Amazon EKS AI Infrastructure Modernization | Xammer',
      description:
        'How Xammer helped OnFinance AI modernize its AI infrastructure on Amazon EKS — scalable AI inference, dynamic compute provisioning, and enterprise-grade security for BFSI workloads.',
      keywords:
        'OnFinance AI case study, Amazon EKS case study, AI infrastructure AWS, Xammer AWS case study, fintech AI infrastructure, Kubernetes AI workloads, AWS Karpenter',
      canonical: `${SITE_URL}/case-studies/onfinance`,
      ogImage: OG_IMAGE,
    },
  },

  {
    slug: 'swiftseed-ventures',
    client: 'Swiftseed Ventures',
    logo: '/images/Swiiftseed-Ventures.png',
    industry: 'Technology / SaaS',
    location: 'India',
    service: 'Production Infrastructure & Disaster Recovery',
    engagementType: 'Net New Business',
    accent: 'green',

    tagline: 'Building a Resilient, Secure & Cost-Optimized AWS Infrastructure for Swiftseed Ventures',
    heroSubtitle:
      'How Xammer helped Swiftseed Ventures establish a secure, scalable and disaster-resilient production environment on AWS.',

    overview: [
      { label: 'Industry', value: 'Technology / SaaS' },
      { label: 'Cloud Platform', value: 'Amazon Web Services' },
      { label: 'Engagement', value: 'Production Infrastructure & Disaster Recovery' },
      { label: 'Primary Region', value: 'Mumbai (ap-south-1)' },
      { label: 'DR Region', value: 'N. Virginia (us-east-1)' },
      { label: 'Core Technology', value: 'Amazon EC2, Auto Scaling, RDS MySQL' },
      { label: 'DR Strategy', value: 'Warm Standby' },
      { label: 'Engagement Type', value: 'Net New Business' },
    ],

    about:
      'Swiftseed Ventures is a technology-driven business operating a task management application that required a scalable, secure, and highly available production environment on AWS. As the application moved into production, Swiftseed needed a cloud infrastructure foundation capable of supporting application scalability while providing business continuity, disaster recovery, security, monitoring, and cost efficiency.',

    challenge: {
      intro:
        'Swiftseed Ventures required a production-ready AWS environment capable of supporting a scalable task management application while maintaining strong availability and business continuity. The customer required an architecture that could support scalability, security, minimal downtime, cross-region disaster recovery, and controlled infrastructure costs.',
      points: [
        'Establishing a scalable and highly available application environment',
        'Implementing cross-region Disaster Recovery for business continuity',
        'Minimizing downtime during a potential regional AWS outage',
        'Establishing a practical recovery process with a defined RTO',
        'Maintaining near-zero data loss through cross-region database replication',
        'Securing application and database workloads through private networking and encryption',
        'Implementing monitoring and operational visibility',
        'Designing the DR environment without the cost of a fully active secondary production environment',
      ],
    },

    objective: {
      intro:
        'Xammer worked with Swiftseed Ventures to establish a secure, scalable and disaster-resilient production environment on AWS.',
      points: [
        'Deploy a scalable task management application on AWS',
        'Establish a highly available production architecture',
        'Implement cross-region Disaster Recovery',
        'Minimize downtime during a regional outage',
        'Achieve an approximately 15-minute RTO',
        'Maintain a near-zero RPO through cross-region database replication',
        'Secure infrastructure using private networking and encryption',
        'Implement centralized monitoring and operational visibility',
        'Optimize DR infrastructure costs through a warm-standby approach',
      ],
    },

    solution: [
      {
        icon: 'Server',
        title: 'Scalable Application Infrastructure',
        desc: 'An EC2 Auto Scaling Group deployed within private subnets to support scalable application workloads.',
      },
      {
        icon: 'Workflow',
        title: 'Application Load Balancing',
        desc: 'An Application Load Balancer receives application traffic and distributes requests to the EC2 application layer.',
      },
      {
        icon: 'Database',
        title: 'Managed Database',
        desc: 'Amazon RDS for MySQL deployed within the private network as the production database.',
      },
      {
        icon: 'RefreshCw',
        title: 'Cross-Region Disaster Recovery',
        desc: 'A cross-region RDS Read Replica established in N. Virginia provides a recovery path in the event of a Mumbai regional outage.',
      },
      {
        icon: 'Cloud',
        title: 'Warm Standby Architecture',
        desc: 'The DR environment was designed as a warm standby rather than a fully active secondary production environment, balancing recovery capability with cost.',
      },
      {
        icon: 'Lock',
        title: 'Security',
        desc: 'Private subnets, Security Groups, IAM roles, KMS encryption, and AWS Systems Manager Parameter Store incorporated into the architecture.',
      },
      {
        icon: 'Eye',
        title: 'Monitoring & Observability',
        desc: 'Amazon CloudWatch, RDS Enhanced Monitoring, RDS Performance Insights, ALB access logs, and Auto Scaling activity monitoring for operational visibility.',
      },
    ],

    implementation: [
      {
        title: 'Production Infrastructure',
        desc: 'Xammer established the AWS networking and infrastructure foundation, including VPC configuration, subnets, Security Groups, IAM roles, EC2 instances, Auto Scaling, and the Application Load Balancer.',
      },
      {
        title: 'Database Deployment',
        desc: "Amazon RDS for MySQL was configured within the private network as the application's production database.",
      },
      {
        title: 'Cross-Region DR',
        desc: 'Xammer configured the N. Virginia DR environment and established the cross-region RDS Read Replica to support database recovery during a regional outage.',
      },
      {
        title: 'Security Implementation',
        desc: 'Security controls were incorporated through private networking, KMS encryption, IAM roles, Security Groups, and AWS Systems Manager Parameter Store.',
      },
      {
        title: 'Monitoring & Observability',
        desc: 'CloudWatch monitoring was configured for EC2 CPU utilization, RDS connections, ALB 5xx errors, and operational events, with RDS Enhanced Monitoring and Performance Insights for additional database visibility.',
      },
      {
        title: 'Backup & Recovery',
        desc: 'RDS automated backups, database snapshots, AMI snapshots, and cross-region AMI copies were incorporated into the recovery strategy.',
      },
    ],

    outcomes: [
      { title: '~15-Minute Recovery Target', desc: 'The warm-standby DR architecture established a recovery workflow targeting approximately 15 minutes from regional failure detection to application availability.' },
      { title: 'Near-Zero Data Loss Target', desc: 'Cross-region RDS replication supports a near-zero RPO target through continuous replication.' },
      { title: 'Scalable Application Infrastructure', desc: 'EC2 Auto Scaling provides the ability to scale application capacity based on workload requirements.' },
      { title: 'Secure Production Environment', desc: 'Private networking, KMS encryption, IAM roles, Security Groups, and secure parameter management incorporated throughout.' },
      { title: 'Operational Visibility', desc: 'CloudWatch, RDS monitoring, Performance Insights, ALB logs, and Auto Scaling activity provide visibility across the production environment.' },
      { title: 'Cost-Efficient Disaster Recovery', desc: 'The warm-standby approach provides cross-region recovery capability without maintaining a fully active secondary application environment.' },
    ],

    beforeAfter: [
      { before: 'Required a scalable production environment for the task management application', after: 'AWS production environment established with EC2 + Auto Scaling' },
      { before: 'Required a defined cross-region DR strategy', after: 'Warm-standby DR environment established in N. Virginia' },
      { before: 'Needed minimal downtime during regional failure', after: 'Recovery workflow designed around ~15-minute RTO' },
      { before: 'Required cross-region database protection', after: 'RDS MySQL Read Replica established in N. Virginia' },
      { before: 'Required secure application and database networking', after: 'Private subnets and Security Groups implemented' },
      { before: 'Required encryption and controlled access', after: 'KMS encryption and IAM roles implemented' },
      { before: 'Required operational visibility', after: 'CloudWatch, RDS monitoring and ALB logging implemented' },
      { before: 'Needed DR without excessive infrastructure cost', after: 'Warm-standby architecture used to optimize DR spend' },
    ],

    technology: [
      { name: 'Amazon EC2 & Auto Scaling', desc: 'Compute layer for the scalable task management application.' },
      { name: 'Application Load Balancer', desc: 'Distributes application traffic across the EC2 layer.' },
      { name: 'Amazon RDS for MySQL', desc: 'Production database, with a cross-region Read Replica for disaster recovery.' },
      { name: 'Amazon VPC', desc: 'Public and private subnets for secure application and database networking.' },
      { name: 'AWS KMS', desc: 'Encryption for RDS and EBS data at rest.' },
      { name: 'AWS IAM', desc: 'Least-privilege access control via IAM roles.' },
      { name: 'AWS Systems Manager Parameter Store', desc: 'Secure management of application secrets and configuration.' },
      { name: 'Amazon CloudWatch', desc: 'Monitoring for EC2, RDS, ALB, and Auto Scaling activity.' },
      { name: 'Amazon Machine Images (AMI)', desc: 'Snapshot-based backup and cross-region recovery for compute instances.' },
    ],

    approach: {
      intro:
        'Xammer designed and implemented an AWS architecture centered around Amazon EC2, Auto Scaling, Application Load Balancing, and Amazon RDS for MySQL — establishing the supporting cloud infrastructure required to operate the production workload securely while maintaining a cross-region recovery path.',
      closing:
        'The architecture connects the production application environment in Mumbai with the N. Virginia recovery environment, providing a defined regional disaster recovery path built around business continuity and cost efficiency.',
      roles: ['Cloud Architecture', 'AWS Infrastructure', 'Disaster Recovery', 'Security', 'Monitoring', 'Cost Optimization'],
    },

    businessImpact: [
      'The engagement was not simply about deploying an application on AWS. It helped Swiftseed Ventures establish the cloud infrastructure and disaster recovery foundation required to operate a production application with greater resilience, security, and operational readiness.',
      'By combining EC2 Auto Scaling, Application Load Balancing, Amazon RDS, cross-region replication, monitoring, security controls, and a warm-standby DR strategy, Xammer helped create a structured infrastructure model designed around business continuity and cost efficiency — providing Swiftseed a defined recovery path in the event of a regional disruption while avoiding the cost of a fully active secondary environment.',
    ],

    seo: {
      title: 'Swiftseed Ventures Case Study | AWS Disaster Recovery & Production Infrastructure | Xammer',
      description:
        'How Xammer helped Swiftseed Ventures build a resilient, secure, and cost-optimized AWS production environment with cross-region disaster recovery.',
      keywords:
        'Swiftseed Ventures case study, AWS disaster recovery case study, cross-region RDS replica, Xammer AWS case study, warm standby DR AWS, AWS production infrastructure',
      canonical: `${SITE_URL}/case-studies/swiftseed-ventures`,
      ogImage: OG_IMAGE,
    },
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((cs) => cs.slug === slug);

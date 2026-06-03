import {
  Cloud, Shield, DollarSign, Globe, Zap,
  Settings, Database, Server, Eye, RefreshCw, Terminal,
  TrendingDown, Clock, CheckCircle,
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 80, suffix: '%', label: 'Max Cost Reduction', color: 'orange' },
  { value: 1000, suffix: '+', label: 'Projects Delivered', color: 'blue' },
  { value: 10,  suffix: '+', label: 'Years AWS Expertise', color: 'teal' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime SLA', color: 'green' },
];

const benefits = [
  { icon: <Cloud size={22} />,       color: 'orange', title: 'Enterprise-Grade Reliability', desc: 'Built on Amazon\'s global infrastructure — Availability Zones, Multi-Region deployments, and automated failover keep your environment up even when individual components fail.' },
  { icon: <Settings size={22} />,    color: 'blue',   title: 'Flexible Architecture', desc: 'From EKS containers to Lambda serverless, from EMR analytics to Kinesis streaming — AWS gives your team the right tool for every workload without lock-in.' },
  { icon: <Shield size={22} />,      color: 'violet', title: 'Industry-Leading Security', desc: 'IAM, GuardDuty, Macie, Inspector, and AWS Shield work together across every layer. 90+ compliance certifications including SOC 2, ISO 27001, PCI DSS, and HIPAA.' },
  { icon: <DollarSign size={22} />,  color: 'green',  title: 'Pay-As-You-Go Model', desc: 'Reserved Instances, Savings Plans, Spot fleets, and right-sizing consistently deliver 40–70% reduction vs. on-premise or unmanaged cloud environments.' },
  { icon: <Globe size={22} />,       color: 'teal',   title: 'Global Infrastructure', desc: '33 regions, 105 Availability Zones, hundreds of edge locations — including Mumbai and Hyderabad — for low-latency delivery and Indian data sovereignty compliance.' },
  { icon: <Zap size={22} />,         color: 'cyan',   title: 'DevOps & Automation-First', desc: 'CodePipeline, CodeBuild, CloudFormation, and Systems Manager give DevOps teams everything needed for fully automated, IaC-driven environments.' },
  { icon: <TrendingDown size={22} />,color: 'blue',   title: 'Cutting-Edge Innovation', desc: 'Amazon Bedrock for GenAI, SageMaker for ML, QuickSight for BI, IoT Greengrass for edge — AWS releases hundreds of features annually to keep you at the frontier.' },
  { icon: <Clock size={22} />,       color: 'violet', title: '24x7 Enterprise Support', desc: 'AWS tiered support with 15-minute response for business-critical issues. Xammer extends this as your dedicated cloud operations team with proactive 24x7 SRE.' },
];

const solutions = [
  {
    icon: <Server size={20} />, color: 'orange', title: 'Compute & Storage',
    items: ['Amazon EC2 — auto-scaling, cost scheduling', 'AWS Fargate — serverless containers', 'AWS Lambda — event-driven serverless', 'Amazon S3 — lifecycle policies, intelligent tiering', 'Amazon EBS / EFS — managed storage', 'AWS Snowball — large-scale data migration'],
  },
  {
    icon: <Database size={20} />, color: 'blue', title: 'Cloud Databases',
    items: ['Amazon Aurora — HA PostgreSQL/MySQL clusters', 'Amazon RDS — Multi-AZ, read replicas', 'Amazon DynamoDB — NoSQL, DAX caching', 'AWS DMS — zero-downtime migration'],
  },
  {
    icon: <Zap size={20} />, color: 'violet', title: 'Gen AI & Analytics',
    items: ['AWS Bedrock — foundation model deployment', 'AWS SageMaker — ML pipeline automation', 'AWS QuickSight — BI & SPICE optimization', 'Amazon MSK — real-time Kafka streaming'],
  },
  {
    icon: <Shield size={20} />, color: 'red', title: 'Cloud Security',
    items: ['AWS IAM — least-privilege policy design', 'Amazon GuardDuty — threat detection', 'Amazon Inspector — vulnerability assessment', 'Amazon Macie — S3 data classification', 'AWS Certificate Manager — SSL automation'],
  },
  {
    icon: <Globe size={20} />, color: 'teal', title: 'Cloud Networking',
    items: ['Amazon VPC — multi-AZ design, Transit Gateway', 'Amazon Route 53 — DNS & health routing', 'Amazon API Gateway — REST & WebSocket APIs', 'AWS Direct Connect — dedicated connectivity'],
  },
  {
    icon: <Eye size={20} />, color: 'green', title: 'Cloud Management',
    items: ['Amazon CloudWatch — metrics, alarms, dashboards', 'AWS CloudFormation — Infrastructure as Code', 'AWS CloudTrail — governance logging', 'AWS Config — conformance packs, drift detection', 'AWS Control Tower — account vending'],
  },
  {
    icon: <RefreshCw size={20} />, color: 'cyan', title: 'Media Services',
    items: ['Amazon Transcribe — speech-to-text', 'AWS CloudFront — global CDN optimization', 'AWS MediaConvert — video transcoding pipelines'],
  },
  {
    icon: <Terminal size={20} />, color: 'blue', title: 'AWS Systems Manager',
    items: ['Automated patch management fleet-wide', 'Session Manager — no bastion hosts needed', 'Run Command — fleet operations at scale', 'Parameter Store — KMS-encrypted secrets', 'SSM Automation — zero-touch runbooks'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,       title: 'Free Cloud Assessment', desc: 'Trusted Advisor, Cost Explorer, and Security Hub analysis identifying cost waste, security gaps, and architecture anti-patterns. Detailed report at zero cost.', sub: 'Week 1' },
  { icon: <CheckCircle size={24} />, title: 'Strategy & Roadmap',   desc: 'Our architects build a 90-day optimization roadmap with cost targets, security hardening steps, automation opportunities, and migration requirements.', sub: 'Week 2' },
  { icon: <Settings size={24} />,  title: 'Hands-On Implementation', desc: 'Infrastructure changes are version-controlled in Terraform, reviewed via pull requests, and deployed through automated pipelines. Every change is documented and reversible.', sub: 'Weeks 3–8' },
  { icon: <Cloud size={24} />,     title: '24x7 Managed Operations', desc: 'Round-the-clock monitoring, incident response, capacity management, continuous cost optimization, and monthly business reviews with full spend transparency.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'Xammer made our cloud move seamless. Within three months, our monthly AWS bill dropped by 62% and our deployment frequency tripled.', author: 'Priyesh', role: 'Co-Founder & CTO, OnFinance' },
  { quote: 'Their depth with AWS Systems Manager impressed us most — they automated patch management across our entire fleet in the first two weeks.', author: 'Dhirendra', role: 'CTO, Parchaa AI' },
  { quote: 'We evaluated five AWS consulting partners before choosing Xammer. Six months in, we are ahead of every projection they set.', author: 'Ankit', role: 'VP Engineering, HealthTech Startup' },
  { quote: 'Xammer\'s SRE team feels like an extension of our own. Their cost governance has saved us lakhs every month.', author: 'Ravi', role: 'Director of Infrastructure, EdTech Platform' },
  { quote: 'They are not just a vendor — they are genuinely part of our engineering team. Their expertise has been pivotal in our digital transformation.', author: 'Krishant', role: 'Co-Founder & CTO, Inspire AI' },
];

const faqs = [
  { q: 'What does an AWS Managed Services provider like Xammer actually do?', a: 'Xammer takes full responsibility for your cloud environment — covering monitoring, security, cost management, patch management, infrastructure automation, incident response, and ongoing optimization. We act as your dedicated cloud operations team, so your internal engineers can focus on building products rather than managing infrastructure.' },
  { q: 'How does Xammer reduce AWS costs by 50–80%?', a: 'We achieve this through a combination of rightsizing underutilized instances, replacing on-demand capacity with Reserved Instances and Savings Plans, implementing Spot Instance fleets for non-critical workloads, automating environment scheduling, eliminating orphaned resources, optimizing data transfer costs, and implementing intelligent S3 lifecycle policies. Most clients see 40–70% reduction within the first 90 days.' },
  { q: 'Is Xammer an official AWS Partner?', a: 'Yes. Xammer is an AWS Select Tier Consulting Partner with certified professionals across multiple specialty tracks including Solutions Architecture, DevOps Engineering, and Security. We have met AWS\'s technical and customer satisfaction requirements to be recognized as a trusted AWS partner.' },
  { q: 'What is AWS Systems Manager and why does it matter?', a: 'AWS Systems Manager is a suite of tools that gives you unified visibility and control over your entire AWS infrastructure. It enables automated patch management, secure remote access without bastion hosts, fleet-wide command execution, configuration compliance, and centralized secrets management. Xammer uses SSM to build fully automated, zero-touch operations environments.' },
  { q: 'How quickly can you start managing our AWS environment?', a: 'We can begin with a free AWS assessment within 48 hours of first contact. Full managed services onboarding typically takes two to four weeks, depending on the complexity of your environment. For urgent situations — security incidents, cost overruns, or failed migrations — we can mobilize a response team within hours.' },
  { q: 'Do you support multi-account AWS Organizations environments?', a: 'Absolutely. Multi-account governance is one of our core competencies. We design and manage AWS Organizations structures with AWS Control Tower, Service Control Policies (SCPs), centralized logging accounts, security tooling accounts, and shared services architecture following AWS Landing Zone best practices.' },
  { q: 'Do you offer AWS migration services?', a: 'Yes. Xammer handles the full migration lifecycle — from initial discovery and dependency mapping to pilot migration, wave planning, cutover execution, and post-migration optimization. We have migrated workloads from on-premise data centers, other cloud providers, and legacy managed hosting environments to AWS.' },
  { q: 'Do you provide 24x7 support?', a: 'Yes. Every Xammer managed services engagement includes 24x7 monitoring and SRE support. P1 incidents (production down) receive a response within 15 minutes, around the clock, including weekends and holidays.' },
];

const AWSPage = () => (
  <>
    <SEO
      title="AWS Managed Services India | Cut Cloud Costs by 80% | Xammer"
      description="Xammer is an AWS Select Tier Consulting Partner in India. We reduce AWS infrastructure costs by 50–80%, automate cloud operations, and deliver 99.9% uptime SLA. Free AWS cost audit."
      keywords="AWS managed services India, AWS consulting partner India, cloud cost reduction AWS, AWS Systems Manager experts, cloud migration AWS India"
    />
    <main>
      <ServiceHero
        badge="AWS Select Tier Consulting Partner"
        title="AWS Managed Services India —"
        highlight="Cut Your Cloud Costs by Up to 80%"
        subtitle="Xammer is a Select Tier AWS Consulting Partner based in Delhi, India. We help growing businesses and enterprises reduce AWS infrastructure costs by 50% to 80%, automate cloud operations end-to-end, and build a resilient, secure, and high-performance cloud environment — without adding headcount."
        stats={heroStats}
        accent="orange"
        ctaPrimary={{ text: 'Get Free AWS Cost Audit', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to an AWS Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why AWS"
        title="Why Businesses Choose AWS for Cloud Infrastructure"
        subtitle="Amazon Web Services remains the world's most comprehensive and widely adopted cloud platform — with over 200 fully featured services spanning compute, storage, databases, AI, machine learning, networking, and security."
        items={benefits}
        accent="orange"
      />
      <ServiceSolutions
        label="Complete Coverage"
        title="AWS Solutions We Manage — Every Service, Every Workload"
        subtitle="Xammer manages the full spectrum of AWS services. Whether you need a single managed database or a complete multi-account, multi-region cloud platform — our team has done it before."
        categories={solutions}
        accent="orange"
      />
      <ServiceProcess
        label="How We Work"
        title="How Xammer Delivers AWS Managed Services"
        steps={processSteps}
        accent="orange"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Clients Say About Xammer's AWS Managed Services"
        items={testimonials}
        accent="orange"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — AWS Managed Services India"
        items={faqs}
        accent="orange"
      />
      <ServiceCTA
        title="Ready to Reduce Your AWS Costs and"
        highlight="Automate Your Cloud Operations?"
        body="Xammer's AWS Managed Services team will conduct a free, no-obligation audit of your current AWS environment — identifying your biggest cost savings opportunities, security gaps, and automation wins backed by data from AWS Cost Explorer, Trusted Advisor, and Security Hub."
        ctaText="Get My Free AWS Audit"
        ctaTo="/contact"
        accent="orange"
        stats={[
          { value: '1,000+', label: 'Projects Delivered' },
          { value: '50–80%', label: 'Avg Cost Reduction' },
          { value: '10+', label: 'Years AWS Expertise' },
        ]}
      />
    </main>
  </>
);

export default AWSPage;

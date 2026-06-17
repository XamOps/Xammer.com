import {
  Cloud, Shield, DollarSign, Globe, Zap,
  Settings, Database, Server, Eye,
  Clock, CheckCircle,
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import { ORACLE_SEO } from '../../utils/seoData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 50,    suffix: '%',   label: 'Avg Cost Reduction',  color: 'red' },
  { value: 500,   suffix: '+',   label: 'OCI Deployments',     color: 'blue' },
  { value: 8,     suffix: '+',   label: 'Years OCI Expertise',  color: 'teal' },
  { value: 99.95, suffix: '%', decimals: 2, label: 'Uptime SLA', color: 'green' },
];

const benefits = [
  { icon: <Cloud size={22} />,       color: 'red',    title: 'High-Performance Bare Metal', desc: "Oracle's bare-metal servers, dedicated VMs, and HPC clusters deliver consistently high compute performance with no noisy-neighbor interference — critical for latency-sensitive Oracle workloads." },
  { icon: <DollarSign size={22} />,  color: 'green',  title: 'Predictable 50% Lower Pricing', desc: 'Oracle Cloud offers up to 50% lower pricing than comparable AWS/Azure configurations. Universal Credits provide flexibility across all OCI services without per-service commitments.' },
  { icon: <Database size={22} />,    color: 'blue',   title: 'Autonomous Database', desc: 'Oracle Autonomous Database self-tunes, self-patches, and self-scales — eliminating 80% of routine DBA tasks while delivering up to 100x higher performance than manually managed databases.' },
  { icon: <Shield size={22} />,      color: 'violet', title: 'Security by Default', desc: 'OCI Security Zones, Cloud Guard, and Vault provide defense-in-depth across every layer. Every service is encrypted by default using customer-managed keys with no additional cost.' },
  { icon: <Globe size={22} />,       color: 'teal',   title: 'India Data Residency', desc: "OCI's regions in Mumbai and Hyderabad ensure Indian data residency compliance. Dedicated regions and sovereign cloud options are available for highly regulated industries." },
  { icon: <Zap size={22} />,         color: 'cyan',   title: 'RDMA Cluster Networking', desc: 'FastConnect provides dedicated private connectivity between your data centre and OCI. The RDMA cluster network delivers the lowest latency for HPC, AI, and Oracle Real Application Clusters (RAC).' },
  { icon: <Settings size={22} />,    color: 'orange', title: 'Oracle Workload Optimisation', desc: 'Running Oracle Database, E-Business Suite, JD Edwards, PeopleSoft, or Siebel on OCI delivers the best performance and licence compliance — certified and endorsed by Oracle itself.' },
  { icon: <Clock size={22} />,       color: 'violet', title: '24x7 Managed OCI Support', desc: "Xammer provides round-the-clock OCI operations with SRE-grade incident response, proactive monitoring, patching management, and continuous cost governance across your entire OCI estate." },
];

const solutions = [
  {
    icon: <Server size={20} />, color: 'red', title: 'Compute & Containers',
    items: [
      'OCI Compute — bare metal, VM, dedicated host',
      'Oracle Kubernetes Engine (OKE) — managed K8s',
      'OCI Container Instances — serverless containers',
      'OCI Functions — serverless FaaS',
      'HPC Cluster Networks — RDMA interconnect',
    ],
  },
  {
    icon: <Database size={20} />, color: 'blue', title: 'Database Services',
    items: [
      'Autonomous Transaction Processing (ATP)',
      'Autonomous Data Warehouse (ADW)',
      'Oracle Base Database Service',
      'MySQL HeatWave — analytics + OLTP in one',
      'NoSQL Database Cloud Service',
    ],
  },
  {
    icon: <Shield size={20} />, color: 'violet', title: 'Security & Identity',
    items: [
      'OCI Identity & Access Management (IAM)',
      'OCI Cloud Guard — threat detection',
      'OCI Security Zones — policy guardrails',
      'OCI Vault — key & secrets management',
      'Web Application Firewall (WAF)',
    ],
  },
  {
    icon: <Globe size={20} />, color: 'teal', title: 'Networking',
    items: [
      'Virtual Cloud Network (VCN) design',
      'OCI FastConnect — dedicated connectivity',
      'Flexible & Network Load Balancing',
      'DNS & Traffic Management',
      'OCI Network Firewall',
    ],
  },
  {
    icon: <Zap size={20} />, color: 'cyan', title: 'AI & Analytics',
    items: [
      'OCI Generative AI — LLM deployment',
      'Oracle Analytics Cloud (OAC)',
      'Data Integration — ETL/ELT pipelines',
      'Big Data Service — Apache Spark / Hadoop',
      'OCI Data Science — ML model lifecycle',
    ],
  },
  {
    icon: <Eye size={20} />, color: 'green', title: 'Observability & Management',
    items: [
      'OCI Monitoring — metrics & alarms',
      'OCI Logging & Logging Analytics',
      'Application Performance Monitoring (APM)',
      'OCI Operations Insights',
      'Resource Manager — Terraform IaC',
    ],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,          title: 'Free OCI Assessment',        desc: 'We audit your existing infrastructure and Oracle workloads to identify migration opportunities, cost savings, and performance improvements specific to OCI architecture.', sub: 'Week 1' },
  { icon: <CheckCircle size={24} />,  title: 'OCI Architecture Design',    desc: "Our architects design your target OCI environment — VCN topology, Security Zones, Autonomous Database configurations, and the optimal compute mix for your organisation's workloads.", sub: 'Week 2' },
  { icon: <Settings size={24} />,     title: 'Migration & Implementation', desc: 'We execute migration using OCI Resource Manager (Terraform), Database Migration Service, and Zero Downtime Migration (ZDM) — with comprehensive cutover planning and rollback procedures.', sub: 'Weeks 3–8' },
  { icon: <Cloud size={24} />,        title: '24x7 Managed OCI Operations', desc: 'Continuous monitoring, incident response, patching, capacity planning, cost optimisation, and monthly business reviews — all included in our managed OCI service engagement.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'Moving our Oracle EBS to OCI with Xammer was seamless. Performance improved dramatically and our licensing costs dropped significantly.', author: 'Rajesh', role: 'IT Director, Manufacturing Enterprise' },
  { quote: 'The Autonomous Database has transformed our BI reporting. Xammer set it up and tuned it perfectly — we see 10x query performance on the same data.', author: 'Meena', role: 'Head of Analytics, Retail Group' },
  { quote: "Xammer's OCI expertise is exceptional. They designed a multi-region DR architecture that gives us true disaster recovery for the first time in our company's history.", author: 'Suresh', role: 'CTO, BFSI Platform' },
];

const faqs = [
  { q: 'Why should we choose Oracle Cloud (OCI) over AWS or Azure?', a: "OCI is the optimal choice for Oracle workloads (Database, E-Business Suite, JD Edwards, Siebel, PeopleSoft), high-performance computing, and cost-sensitive deployments. OCI consistently offers 50% lower pricing for compute and storage versus equivalent AWS/Azure configurations, and Oracle Autonomous Database eliminates most DBA overhead while delivering superior performance." },
  { q: 'What is Oracle Autonomous Database and how does it work?', a: 'Oracle Autonomous Database is a fully managed cloud database that uses machine learning to automate tuning, security, patching, backups, and other manual tasks. It comes in two main variants: Autonomous Transaction Processing (ATP) for OLTP workloads, and Autonomous Data Warehouse (ADW) for analytics. Both self-tune, self-scale, and self-secure without human intervention.' },
  { q: 'Can Xammer migrate our on-premise Oracle databases to OCI?', a: 'Yes. Xammer handles the complete Oracle database migration lifecycle — from initial assessment and schema analysis to pilot migration, data replication, cutover planning, and post-migration optimisation. We use OCI Database Migration Service and Zero Downtime Migration (ZDM) to minimise or eliminate downtime during cutover.' },
  { q: 'Is OCI suitable for non-Oracle workloads?', a: 'Absolutely. OCI supports all major open-source databases (PostgreSQL, MySQL, MongoDB-compatible NoSQL), containerised applications via OKE, serverless functions, and modern cloud-native architectures. Many organisations use OCI as their primary cloud for all workloads due to its competitive pricing and high-performance networking.' },
  { q: 'What Oracle certifications does Xammer hold?', a: "Xammer is an Oracle Cloud Infrastructure (OCI) specialist partner. Our team includes OCI Certified Architects, database administrators, and DevOps engineers with hands-on experience across OCI's full service catalogue." },
  { q: 'How does OCI pricing compare to AWS and Azure?', a: 'OCI typically offers 50% lower pricing for compute, 75% lower for outbound data transfer, and significantly lower database licensing costs when combining Oracle Database licences with OCI Licence Included options. Oracle Universal Credits allow full flexibility to use any OCI service without service-specific commitments.' },
];

const OracleCloudPage = () => (
  <>
    <SEO
      title={ORACLE_SEO.title}
      description={ORACLE_SEO.description}
      keywords={ORACLE_SEO.keywords}
      canonical={ORACLE_SEO.canonical}
      ogImage={ORACLE_SEO.ogImage}
    />
    <main>
      <ServiceHero
        badge="Oracle Cloud OCI Specialist Partner"
        title="Oracle Cloud (OCI) Managed Services —"
        highlight="Performance & Savings for Oracle Workloads"
        subtitle="Xammer is a specialist Oracle Cloud Infrastructure (OCI) partner in India. We help enterprises migrate Oracle workloads to OCI, deploy Autonomous Database, and manage OCI environments — delivering up to 50% cost reduction with enterprise-grade reliability."
        stats={heroStats}
        accent="red"
        ctaPrimary={{ text: 'Get Free OCI Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to an OCI Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Oracle Cloud"
        title="Why Enterprises Choose Oracle Cloud Infrastructure"
        subtitle="Oracle Cloud Infrastructure is purpose-built for enterprise workloads — combining dedicated bare-metal performance, Autonomous Database self-management, and predictable pricing that consistently beats AWS and Azure."
        items={benefits}
        accent="red"
      />
      <ServiceSolutions
        label="OCI Services We Manage"
        title="Complete Oracle Cloud Coverage — Every Service, Every Workload"
        subtitle="From Autonomous Database to OKE containers, from OCI AI services to FastConnect networking — Xammer manages the full OCI service catalogue for your enterprise."
        categories={solutions}
        accent="red"
      />
      <ServiceProcess
        label="How We Work"
        title="How Xammer Delivers Oracle Cloud Managed Services"
        steps={processSteps}
        accent="red"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Clients Say About Xammer's OCI Services"
        items={testimonials}
        accent="red"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Oracle Cloud Managed Services"
        items={faqs}
        accent="red"
      />
      <ServiceCTA
        title="Ready to Unlock Oracle Cloud's Full Potential?"
        highlight="Start with a Free OCI Assessment"
        body="Xammer's OCI specialists will conduct a free, no-obligation assessment of your Oracle workloads — identifying the optimal OCI architecture, migration path, and cost savings opportunities specific to your environment."
        ctaText="Get My Free OCI Assessment"
        ctaTo="/contact"
        accent="red"
        stats={[
          { value: '500+', label: 'OCI Deployments' },
          { value: '50%',  label: 'Avg Cost Reduction' },
          { value: '8+',   label: 'Years OCI Expertise' },
        ]}
      />
    </main>
  </>
);

export default OracleCloudPage;

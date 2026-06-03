import {
  Lock, Shield, Globe, Server, Zap, Database,
  Settings, Eye, TrendingDown, Cloud, RefreshCw, CheckCircle,
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
  { value: 100, suffix: '%', label: 'Data Stays in India', color: 'green' },
  { value: 99.995, suffix: '%', decimals: 3, label: 'Tier IV Uptime', color: 'teal' },
  { value: 40, suffix: '%', label: 'GPU Cost Savings', color: 'violet' },
  { value: 50, suffix: '%', label: 'TCO Reduction', color: 'blue' },
];

const benefits = [
  { icon: <Lock size={22} />,      color: 'green',  title: 'MeitY-Compliant Sovereign Cloud', desc: 'Yotta\'s data centers are MeitY-empanelled — certified by India\'s Ministry of Electronics and IT for government and regulated industry workloads. Your data never leaves Indian jurisdiction.' },
  { icon: <Server size={22} />,    color: 'teal',   title: 'Tier IV Infrastructure — 99.995% Uptime', desc: 'Fully redundant power, cooling, and networking with the highest certified data center reliability tier. Built for production workloads that cannot afford downtime.' },
  { icon: <Shield size={22} />,    color: 'blue',   title: 'DPDPA & Regulatory Compliance', desc: 'Meets India\'s Digital Personal Data Protection Act requirements for data localization and processing. Compliant with RBI, SEBI, IRDAI, and MEITY data sovereignty requirements.' },
  { icon: <Zap size={22} />,       color: 'violet', title: 'AI-Ready GPU Infrastructure', desc: 'Yotta Shakti Cloud provides NVIDIA GPU-powered infrastructure in India — enabling model training, LLM fine-tuning, and inference serving entirely within India\'s sovereign cloud.' },
  { icon: <TrendingDown size={22} />, color: 'orange', title: '35–50% TCO Reduction', desc: 'Eliminates hardware procurement, data center costs, and system administrator overhead. Pay-as-you-go infrastructure with Xammer FinOps optimization delivers predictable, controlled costs.' },
  { icon: <Globe size={22} />,     color: 'teal',   title: 'Multi-Cloud Integration', desc: 'Unified management across Yotta, AWS, Azure, and GCP. Xammer provides single-pane-of-glass visibility, policy-driven governance, and centralized identity across all cloud environments.' },
];

const solutions = [
  {
    icon: <Lock size={20} />, color: 'green', title: 'Sovereign Cloud Strategy',
    desc: 'Regulatory requirements mapping, data classification, sovereign cloud architecture design, compliance documentation, and hybrid sovereign cloud strategy.',
    items: ['BFSI — RBI data localization compliance', 'Healthcare — HIPAA + DPDPA ready', 'Government — MEITY empanelment certified', 'Capital markets — SEBI cloud framework'],
  },
  {
    icon: <Cloud size={20} />, color: 'teal', title: 'Multi-Cloud Automation',
    items: ['Single-pane monitoring — Yotta + AWS + Azure + GCP', 'Policy-driven governance across all clouds', 'Unified identity and access management', 'Cross-cloud secure networking', 'Terraform IaC for multi-cloud management'],
  },
  {
    icon: <TrendingDown size={20} />, color: 'violet', title: 'Cloud Cost Optimization',
    items: ['TCO analysis vs. on-premise and public cloud', 'Real-time cost intelligence dashboards', 'Resource right-sizing and auto-scheduling', 'Automation-driven efficiency improvements', 'Departmental chargeback reporting'],
  },
  {
    icon: <Settings size={20} />, color: 'blue', title: 'DevSecOps & IaC on Yotta',
    items: ['Infrastructure as Code with Terraform', 'CI/CD pipelines on Yotta infrastructure', 'Kubernetes container orchestration', 'Security automation in all pipelines', '24x7 SRE operations'],
  },
  {
    icon: <Zap size={20} />, color: 'green', title: 'AI-Ready — Shakti Cloud',
    desc: 'GPU-powered AI infrastructure for model training and inference within India\'s sovereign cloud.',
    items: ['NVIDIA GPU infrastructure in India', 'MLOps pipeline on Shakti Cloud', 'LLM fine-tuning and deployment', 'Cost-optimized GPU utilization', 'Sovereign AI for regulated industries'],
  },
  {
    icon: <RefreshCw size={20} />, color: 'teal', title: 'Cloud Migration Programme',
    items: ['Discovery and workload assessment', 'Compliance architecture design', 'Pilot migration and validation', 'Wave-based production migration', 'Post-migration managed operations'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,      title: 'Discovery & Assessment', desc: 'Thorough inventory of current infrastructure — all workloads, dependencies, compliance requirements, performance characteristics, and migration complexity. Every workload gets a migration approach assessment.' },
  { icon: <Lock size={24} />,     title: 'Compliance Architecture', desc: 'Compliance architects map regulatory obligations to technical controls — encryption requirements, access logging, network isolation, backup retention, and audit trail specifications built in before migration begins.' },
  { icon: <Settings size={24} />, title: 'Pilot Migration', desc: 'Low-risk non-production workload validates migration tooling, tests Yotta performance, and confirms compliance controls are functioning as designed. Completed in 2–4 weeks.' },
  { icon: <Cloud size={24} />,    title: 'Wave Migration & Operations', desc: 'Production migration in risk-managed waves with defined cutover plans and rollback procedures. Post-migration: 24x7 SRE support, cost optimization, and compliance maintenance.' },
];

const testimonials = [
  { quote: 'The compliance documentation Xammer produced for our RBI audit was detailed, accurate, and got through review without a single finding.', author: 'Sunil', role: 'CISO, Regional NBFC' },
  { quote: 'We needed GPU infrastructure in India for our AI model training — sovereign, compliant, and cost-effective. Xammer set up our MLOps pipeline on Yotta Shakti Cloud in three weeks. Training costs are 40% lower than public cloud.', author: 'Priya', role: 'Head of AI, HealthTech Startup' },
  { quote: 'The multi-cloud management Xammer built spanning Yotta, AWS, and Azure has completely transformed how our IT team operates. One dashboard, one partner. The operational complexity just disappeared.', author: 'Ramesh', role: 'VP Infrastructure, Manufacturing Enterprise' },
  { quote: 'Xammer\'s TCO analysis proved definitively that Yotta sovereign cloud was less expensive than our colocation contract for regulated workloads, while giving us significantly better compliance posture.', author: 'Aisha', role: 'CFO, Insurance Technology Company' },
  { quote: 'Every infrastructure change is documented, version-controlled, and auditable. What used to take our team days to reconstruct for auditors is now available in a single report.', author: 'Vikram', role: 'Head of Engineering, Government Technology Contractor' },
];

const faqs = [
  { q: 'What is Yotta sovereign cloud and why does it matter?', a: 'Yotta Infrastructure operates India\'s largest hyperscale data centers — Tier IV certified facilities in Navi Mumbai with MeitY empanelment. Sovereign cloud on Yotta means your data is hosted in India, on infrastructure audited by Indian government agencies, with full data sovereignty guarantees. This is fundamentally different from an "India region" on a US-based public cloud, where the ultimate parent company remains subject to US law and data requests.' },
  { q: 'Which industries most need Yotta sovereign cloud?', a: 'Banking and financial services (RBI data localization requirements), insurance (IRDAI guidelines), healthcare (patient data privacy), capital markets (SEBI framework), government and defense, e-governance platforms, critical infrastructure operators, and any enterprise handling sensitive Indian citizen data under DPDPA.' },
  { q: 'What is MeitY empanelment and why does it matter?', a: 'MeitY (Ministry of Electronics and Information Technology) empanels cloud service providers that meet Indian government standards for security, compliance, and data sovereignty. For enterprises subject to government procurement rules or regulated by Indian financial authorities, MeitY empanelment is often a requirement — not just a preference.' },
  { q: 'Can we run both public cloud (AWS/Azure/GCP) and Yotta sovereign cloud simultaneously?', a: 'Absolutely — and this is one of the most common architectures Xammer designs. Regulated, sensitive workloads run on Yotta sovereign cloud. Non-regulated workloads, development environments, and globally distributed services run on public cloud. Xammer manages both through unified tooling and governance.' },
  { q: 'What is Yotta Shakti Cloud?', a: 'Yotta Shakti is Yotta\'s GPU-powered cloud platform specifically designed for AI, machine learning, and high-performance computing workloads. It provides NVIDIA GPU infrastructure within Yotta\'s sovereign, MeitY-compliant facilities — enabling Indian enterprises to run model training and inference workloads within India, on infrastructure that meets Indian regulatory standards.' },
  { q: 'How does Yotta Cloud pricing compare to AWS, Azure, and GCP?', a: 'For regulated Indian workloads, Yotta sovereign cloud is typically cost-competitive with or lower in total cost than equivalent public cloud infrastructure when compliance, data transfer, and sovereignty requirements are factored in. Xammer conducts a detailed TCO analysis for every Yotta engagement to give clients a complete financial picture before any commitment.' },
];

const YottaPage = () => (
  <>
    <SEO
      title="Yotta Cloud Services India | MeitY-Compliant Sovereign Cloud | Xammer"
      description="Xammer is an official Yotta Infrastructure partner. We deliver MeitY-compliant sovereign cloud services, AI-ready GPU infrastructure on Shakti Cloud, and 24x7 managed operations in India."
      keywords="Yotta cloud services India, Yotta sovereign cloud partner, MeitY compliant cloud India, India sovereign cloud data center, Yotta GPU cloud AI workloads"
    />
    <main>
      <ServiceHero
        badge="Official Yotta Infrastructure Partner"
        title="Yotta Cloud Services —"
        highlight="Sovereign, Secure & AI-Ready Cloud in India"
        subtitle="Xammer is an official partner of Yotta Infrastructure — India's leading hyperscale data center and sovereign cloud provider. Together, we deliver MeitY-compliant, data-sovereign, AI-ready cloud infrastructure with full automation — giving Indian enterprises a platform that meets the most stringent regulatory requirements while delivering modern cloud speed and cost efficiency."
        stats={heroStats}
        accent="green"
        ctaPrimary={{ text: 'Explore Yotta Cloud', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a Sovereign Cloud Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Yotta Sovereign Cloud"
        title="India's Most Powerful Sovereign Cloud Partnership"
        subtitle="Yotta brings enterprise-grade, MeitY-compliant Tier IV data center infrastructure. Xammer brings cloud automation, DevOps expertise, FinOps governance, and 24x7 managed operations."
        items={benefits}
        accent="green"
      />
      <ServiceSolutions
        label="Our Yotta Services"
        title="Xammer's Yotta Cloud Managed Services — Complete Sovereign Solutions"
        categories={solutions}
        accent="green"
      />
      <ServiceProcess
        label="Migration Programme"
        title="Secure Infrastructure Modernization on Yotta Cloud"
        steps={processSteps}
        accent="green"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Clients Say About Xammer's Yotta Cloud Services"
        items={testimonials}
        accent="green"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Yotta Sovereign Cloud Services India"
        items={faqs}
        accent="green"
      />
      <ServiceCTA
        title="India's Sovereign Cloud is Ready."
        highlight="Is Your Business?"
        body="Don't let regulatory uncertainty slow your cloud journey. Xammer and Yotta give you sovereign cloud infrastructure, automation, and expertise to modernize confidently — keeping your data in India, operations automated, and costs under control."
        ctaText="Talk to a Sovereign Cloud Expert"
        ctaTo="/contact"
        accent="green"
        stats={[
          { value: '100%', label: 'Data in India' },
          { value: 'MeitY', label: 'Empanelled' },
          { value: '24x7', label: 'SRE Support' },
        ]}
      />
    </main>
  </>
);

export default YottaPage;

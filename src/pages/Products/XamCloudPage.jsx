import {
  Cloud, Shield, DollarSign, Globe, Zap,
  Settings, Eye, RefreshCw,
  Clock, CheckCircle, BarChart2,
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import { XAMCLOUD_SEO } from '../../utils/seoData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 40,    suffix: '%',   label: 'Avg Cost Reduction',  color: 'blue' },
  { value: 3,     suffix: '+',   label: 'Clouds Managed',      color: 'teal' },
  { value: 200,   suffix: '+',   label: 'Multi-Cloud Clients', color: 'violet' },
  { value: 99.99, suffix: '%', decimals: 2, label: 'Cross-Cloud Uptime', color: 'green' },
];

const benefits = [
  { icon: <Cloud size={22} />,       color: 'blue',   title: 'True Multi-Cloud Management', desc: 'XamCloud manages your workloads across AWS, Azure, Google Cloud, and Oracle Cloud under a single managed service. One team, one SLA, one point of contact — regardless of how complex your cloud estate is.' },
  { icon: <DollarSign size={22} />,  color: 'green',  title: 'Unified Cost Governance', desc: 'XamCloud provides consolidated cost visibility and optimisation across all your clouds — identifying arbitrage opportunities, right-sizing instances, and enforcing spend guardrails across every provider.' },
  { icon: <Shield size={22} />,      color: 'violet', title: 'Centralised Security & Compliance', desc: 'Security policies, identity federation, and compliance controls are applied consistently across all clouds. XamCloud eliminates the security gaps that arise from managing each cloud in isolation.' },
  { icon: <Globe size={22} />,       color: 'teal',   title: 'Cloud-Agnostic Architecture', desc: 'Avoid vendor lock-in with cloud-agnostic IaC, containerised workloads, and portable data strategies. XamCloud designs environments that can shift between providers as your business needs evolve.' },
  { icon: <Zap size={22} />,         color: 'cyan',   title: 'Workload Placement Intelligence', desc: 'XamCloud continuously analyses performance, cost, and compliance requirements to recommend the optimal cloud placement for each workload — so you always get the best fit, not just inertia.' },
  { icon: <BarChart2 size={22} />,   color: 'orange', title: 'Unified Observability', desc: "Metrics, logs, and traces from all your clouds are aggregated into a single observability platform — giving your team and Xammer's SREs complete visibility across your entire multi-cloud estate." },
  { icon: <RefreshCw size={22} />,   color: 'blue',   title: 'Cross-Cloud Disaster Recovery', desc: 'XamCloud designs and manages cross-cloud DR — using multiple providers as failover targets for true geographic and vendor-level redundancy that single-cloud DR simply cannot match.' },
  { icon: <Clock size={22} />,       color: 'violet', title: '24x7 Multi-Cloud SRE', desc: "Xammer's SRE team monitors and responds to incidents across all your clouds around the clock — with unified runbooks, escalation paths, and SLAs regardless of which cloud is involved." },
];

const solutions = [
  {
    icon: <Cloud size={20} />, color: 'blue', title: 'Cloud Platforms Managed',
    items: [
      'Amazon Web Services (AWS) — Select Tier Partner',
      'Microsoft Azure — Gold Partner',
      'Google Cloud Platform (GCP) — Specialised Partner',
      'Oracle Cloud Infrastructure (OCI) — Specialist Partner',
      'Hybrid & private cloud integration',
    ],
  },
  {
    icon: <DollarSign size={20} />, color: 'green', title: 'Cost Management & FinOps',
    items: [
      'Multi-cloud cost visibility dashboard',
      'Cross-cloud right-sizing analysis',
      'Reserved / committed use optimisation',
      'Spot / preemptible instance management',
      'Idle resource detection and cleanup',
      'FinOps governance — showback & chargeback',
    ],
  },
  {
    icon: <Shield size={20} />, color: 'violet', title: 'Security & Governance',
    items: [
      'Unified identity & access management',
      'Cross-cloud security policy enforcement',
      'Compliance automation (SOC 2, ISO 27001, PCI)',
      'Cloud Security Posture Management (CSPM)',
      'Multi-cloud secrets and key management',
      'Zero-trust network architecture',
    ],
  },
  {
    icon: <Settings size={20} />, color: 'teal', title: 'Infrastructure & Automation',
    items: [
      'Cloud-agnostic Terraform modules',
      'Multi-cloud Kubernetes management',
      'Unified CI/CD pipelines across clouds',
      'Policy as Code across all providers',
      'Automated drift detection & remediation',
      'Environment cloning and disaster recovery',
    ],
  },
  {
    icon: <Eye size={20} />, color: 'cyan', title: 'Observability & Operations',
    items: [
      'Unified metrics aggregation across clouds',
      'Centralised log management platform',
      'Cross-cloud distributed tracing',
      'Multi-cloud alerting and on-call integration',
      'Capacity planning across providers',
      '24x7 NOC with multi-cloud runbooks',
    ],
  },
  {
    icon: <Globe size={20} />, color: 'orange', title: 'Networking & Connectivity',
    items: [
      'Cross-cloud VPN and SD-WAN design',
      'Multi-cloud transit architecture',
      'Direct connectivity (Direct Connect, ExpressRoute, FastConnect)',
      'Global load balancing across clouds',
      'DNS management across providers',
      'CDN strategy and optimisation',
    ],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,          title: 'Multi-Cloud Discovery',          desc: 'We map your entire cloud estate — across all providers — identifying redundancies, security gaps, cost waste, and integration opportunities. Full inventory and dependency mapping included.', sub: 'Week 1' },
  { icon: <CheckCircle size={24} />,  title: 'Unified Architecture Design',    desc: 'Our architects design your target multi-cloud operating model — governance framework, security baseline, observability platform, IaC strategy, and workload placement recommendations.', sub: 'Week 2' },
  { icon: <Settings size={24} />,     title: 'Platform Implementation',        desc: 'We deploy the unified management layer — observability, cost governance, security controls, IaC automation, and cross-cloud networking — bringing all your clouds under XamCloud management.', sub: 'Weeks 3–8' },
  { icon: <Cloud size={24} />,        title: 'Ongoing XamCloud Operations',    desc: '24x7 managed operations across all your clouds — monitoring, incident response, cost optimisation, security patching, capacity management, and continuous architecture improvement.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'XamCloud gave us a single pane of glass across AWS and Azure for the first time. Cost visibility alone saved us ₹40 lakhs in the first quarter.', author: 'Vikram', role: 'CIO, Enterprise Software Company' },
  { quote: 'Managing three clouds was overwhelming our infrastructure team. XamCloud took it all over — now we have better coverage and our team focuses purely on product.', author: 'Ananya', role: 'Head of Cloud, Media & Entertainment Group' },
  { quote: "Xammer's multi-cloud expertise is unmatched. They designed a cross-cloud DR architecture that we couldn't have built ourselves in a year.", author: 'Karthik', role: 'VP Infrastructure, Global Retail Platform' },
];

const faqs = [
  { q: 'What is XamCloud and how does it work?', a: "XamCloud is Xammer's managed multi-cloud service. We take operational responsibility for your workloads across multiple cloud providers — AWS, Azure, GCP, OCI, and others — under a single managed service engagement. You get unified cost visibility, security governance, observability, and 24x7 SRE support regardless of which cloud your workloads run on." },
  { q: 'Which cloud providers does XamCloud support?', a: 'XamCloud supports AWS (Select Tier Partner), Microsoft Azure (Gold Partner), Google Cloud Platform (Specialised Partner), and Oracle Cloud Infrastructure (OCI Specialist). We also support hybrid configurations that include on-premise infrastructure and private clouds.' },
  { q: 'How does XamCloud reduce cloud costs across multiple providers?', a: 'XamCloud provides consolidated cost visibility across all providers, enabling us to identify cross-cloud optimisation opportunities that single-cloud tools miss. We right-size instances across all clouds simultaneously, identify workloads that can migrate to lower-cost providers, optimise reserved/committed use commitments, eliminate idle resources, and enforce spend guardrails through unified governance policies.' },
  { q: 'How does XamCloud handle security across multiple clouds?', a: 'XamCloud implements a unified security framework across all your cloud providers — centralising identity and access management, applying consistent security policies through Policy as Code, deploying Cloud Security Posture Management (CSPM) across all environments, and maintaining compliance controls for standards like SOC 2, ISO 27001, and PCI DSS regardless of which cloud the workload runs on.' },
  { q: 'Can XamCloud help us reduce vendor lock-in?', a: 'Yes. Reducing vendor lock-in is a core principle of XamCloud. We use cloud-agnostic Terraform modules, containerised workloads on Kubernetes, provider-neutral databases where possible, and portable observability tools. This gives you the flexibility to shift workloads between providers as pricing, features, or business requirements change.' },
  { q: 'What is the difference between XamCloud and Xamops?', a: 'XamCloud focuses on multi-cloud management — the operational management of your cloud infrastructure across multiple providers, covering cost, security, observability, and 24x7 operations. Xamops focuses on DevOps — CI/CD pipelines, infrastructure as code, platform engineering, and developer tooling. Many clients use both together for complete cloud platform coverage.' },
];

const XamCloudPage = () => (
  <>
    <SEO
      title={XAMCLOUD_SEO.title}
      description={XAMCLOUD_SEO.description}
      keywords={XAMCLOUD_SEO.keywords}
      canonical={XAMCLOUD_SEO.canonical}
      ogImage={XAMCLOUD_SEO.ogImage}
    />
    <main>
      <ServiceHero
        badge="XamCloud — Managed Multi-Cloud Operations"
        title="XamCloud — One Team for"
        highlight="All Your Clouds, Zero Complexity"
        subtitle="XamCloud is Xammer's fully managed multi-cloud service. We manage your workloads across AWS, Azure, Google Cloud, Oracle Cloud, and more — delivering unified cost governance, security, observability, and 24x7 SRE operations under a single managed service engagement."
        stats={heroStats}
        accent="blue"
        ctaPrimary={{ text: 'Get Free Multi-Cloud Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a Cloud Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why XamCloud"
        title="The Smarter Way to Operate Across Multiple Clouds"
        subtitle="Managing multiple cloud providers in silos creates cost waste, security gaps, and operational overhead. XamCloud unifies your entire cloud estate under expert management — so you get the benefits of multi-cloud without the complexity."
        items={benefits}
        accent="blue"
      />
      <ServiceSolutions
        label="What XamCloud Covers"
        title="Complete Multi-Cloud Operations — Every Provider, Every Layer"
        subtitle="XamCloud covers all your cloud providers and every operational layer — from cost management to security to observability to 24x7 SRE. Nothing falls through the cracks."
        categories={solutions}
        accent="blue"
      />
      <ServiceProcess
        label="How We Work"
        title="How XamCloud Unifies Your Multi-Cloud Environment"
        steps={processSteps}
        accent="blue"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Multi-Cloud Clients Say About XamCloud"
        items={testimonials}
        accent="blue"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — XamCloud Multi-Cloud Operations"
        items={faqs}
        accent="blue"
      />
      <ServiceCTA
        title="Ready to Simplify Your"
        highlight="Multi-Cloud Operations?"
        body="Get a free multi-cloud assessment from Xammer's engineers. We'll map your entire cloud estate, identify cost savings, security gaps, and operational inefficiencies across all your providers — then show you how XamCloud can bring it all under unified, expert management."
        ctaText="Get My Free Multi-Cloud Assessment"
        ctaTo="/contact"
        accent="blue"
        stats={[
          { value: '200+', label: 'Multi-Cloud Clients' },
          { value: '40%',  label: 'Avg Cost Reduction' },
          { value: '24x7', label: 'Multi-Cloud SRE' },
        ]}
      />
    </main>
  </>
);

export default XamCloudPage;

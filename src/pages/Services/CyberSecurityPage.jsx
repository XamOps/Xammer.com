import {
  Shield, Lock, Eye, AlertTriangle, Database,
  Search, RefreshCw, CheckCircle, Zap, Globe,
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import { CYBER_SEO } from '../../utils/seoData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 15, suffix: ' min', label: 'P1 Incident Response', color: 'red' },
  { value: 70, suffix: '%', label: 'Breaches from Misconfigs', color: 'violet' },
  { value: 24, suffix: 'x7', animated: false, display: '24x7', label: 'Threat Monitoring', color: 'blue' },
  { value: 218, suffix: '%', label: 'Ransomware Rise in India', color: 'teal' },
];

const benefits = [
  { icon: <Eye size={22} />,       color: 'red',    title: 'Proactive Over Reactive', desc: 'We use threat intelligence feeds, behavioral analytics, and continuous security scanning to identify attack indicators before they materialize into incidents — finding misconfigurations before attackers do.' },
  { icon: <Zap size={22} />,       color: 'violet', title: 'Automation Over Manual', desc: 'Manual security checks are inconsistent and don\'t scale. Xammer automates controls from infrastructure provisioning to compliance scanning, vulnerability management, and incident response playbooks.' },
  { icon: <Shield size={22} />,    color: 'blue',   title: 'Security Built Into Operations', desc: 'CI/CD pipelines scan for vulnerabilities before deployment, infrastructure is provisioned with correct security controls by default, and cloud configurations are validated against baselines continuously.' },
  { icon: <Lock size={22} />,      color: 'teal',   title: 'Zero-Trust Architecture', desc: 'Every access request is treated as untrusted — regardless of network location. Identity-aware, context-sensitive access controls verify every user, every device, and every connection.' },
  { icon: <Search size={22} />,    color: 'red',    title: 'Continuous Misconfiguration Scanning', desc: 'CSPM scanning against CIS controls, AWS Security Hub standards, and ISO 27001 — identifying and classifying every misconfiguration by risk with automated remediation workflows.' },
  { icon: <Database size={22} />,  color: 'violet', title: 'Data Protection & Encryption', desc: 'AES-256 encryption at rest, TLS 1.3 in transit, customer-managed KMS keys, automated data classification, immutable ransomware-proof backups, and zero-secret-in-code enforcement.' },
];

const solutions = [
  {
    icon: <Eye size={20} />, color: 'red', title: 'Cloud Security Posture Management (CSPM)',
    desc: 'Continuous misconfiguration scanning, real-time drift detection, and security baseline enforcement across AWS, Azure, and GCP.',
    items: ['CIS Controls, AWS Security Hub, ISO 27001 scanning', 'Real-time drift detection and auto-remediation', 'Attack surface reduction — open ports, public endpoints', 'Policy-as-code enforcement with AWS Config / OPA'],
  },
  {
    icon: <Lock size={20} />, color: 'violet', title: 'IAM Security — Zero-Trust Access',
    items: ['IAM policy audit — least-privilege enforcement', 'MFA enforcement for all human identities', 'Just-in-time privileged access management (PAM)', 'Service account hygiene and credential rotation', 'SSO and identity federation (Okta, Azure AD)'],
  },
  {
    icon: <Globe size={20} />, color: 'blue', title: 'Network Security & Segmentation',
    items: ['Security-first VPC/VNet architecture', 'WAF — OWASP Top 10 protection', 'DDoS protection — AWS Shield, Azure DDoS', 'Zero-Trust Network Access (ZTNA)', 'VPC Flow Logs analysis for anomaly detection'],
  },
  {
    icon: <AlertTriangle size={20} />, color: 'teal', title: '24x7 Threat Detection & IR',
    items: ['SIEM — AWS Security Lake, Microsoft Sentinel', 'AI-powered behavioral analytics', 'GuardDuty / Defender for Cloud management', 'Automated incident response playbooks', 'Security incident response retainer'],
  },
  {
    icon: <Database size={20} />, color: 'red', title: 'Data Protection & Encryption',
    items: ['Encryption everywhere — at rest and in transit', 'Amazon Macie / Microsoft Purview data classification', 'Immutable ransomware-proof backup configuration', 'AWS Secrets Manager / Azure Key Vault migration', 'Automated secrets rotation'],
  },
  {
    icon: <Search size={20} />, color: 'violet', title: 'Vulnerability Management',
    items: ['Amazon Inspector continuous scanning', 'Automated patch deployment via SSM', 'Container image scanning with ECR / Snyk', 'Annual/quarterly penetration testing', 'Red team and purple team exercises'],
  },
  {
    icon: <CheckCircle size={20} />, color: 'blue', title: 'Compliance & Audit Readiness',
    items: ['ISO 27001 / SOC 2 readiness and controls', 'PCI DSS cardholder environment management', 'HIPAA / DPDPA data privacy controls', 'RBI IT Framework / SEBI Cloud Framework', 'Compliance-as-code continuous monitoring'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,     title: 'Free Security Assessment', desc: 'CSPM scan of your cloud environment identifying misconfigurations, IAM policy gaps, exposed attack surfaces, and compliance violations — with prioritized risk scoring.' },
  { icon: <AlertTriangle size={24} />, title: 'Risk Prioritization', desc: 'Findings classified by severity, exploitability, and business impact. A clear remediation roadmap with estimated effort and timelines presented to your leadership team.' },
  { icon: <Shield size={24} />,  title: 'Controls Implementation', desc: 'Automated remediation of high and critical findings. Security baseline enforcement via policy-as-code. IAM hardening, network segmentation, and encryption implementation.' },
  { icon: <RefreshCw size={24} />, title: '24x7 Managed Security', desc: 'Continuous CSPM scanning, threat detection with automated response playbooks, vulnerability management, compliance monitoring, and monthly security posture reviews.' },
];

const testimonials = [
  { quote: 'Their CSPM assessment found 47 high-severity findings — three could have exposed sensitive customer data. They remediated everything in two weeks and set up automated controls. I sleep much better now.', author: 'Nikhil', role: 'CTO, FinTech Platform' },
  { quote: 'Their WAF rules blocked three real attack attempts in the first month, and network flow analysis caught an anomalous traffic pattern — an app trying to exfiltrate data. Caught before any data left the environment.', author: 'Sunita', role: 'Head of Information Security, Healthcare Provider' },
  { quote: 'With Xammer\'s compliance-as-code implementation, we walked into our last ISO 27001 audit with complete automated evidence packages. Audit preparation dropped from eight weeks to five days.', author: 'Aditya', role: 'CISO, Insurance Technology Company' },
  { quote: 'Now we have full visibility — when something happens, the automated response fires in seconds and the Xammer team is on a call within minutes.', author: 'Pooja', role: 'VP Engineering, E-Commerce Company' },
  { quote: 'Xammer identified our IAM policies were significantly over-privileged — service accounts with admin permissions created years ago and forgotten. Their remediation hardened access controls without breaking a single application.', author: 'Rajan', role: 'Director of Infrastructure, Media Company' },
];

const faqs = [
  { q: 'What does cyber security managed services actually include?', a: 'Xammer\'s Cyber Security Managed Services covers the full security operations lifecycle: continuous misconfiguration scanning, identity and access management hardening, network security architecture, 24x7 threat detection and response, vulnerability management, data protection, and compliance management. Rather than a one-time security assessment, you get continuous security operations as an ongoing service.' },
  { q: 'What is CSPM (Cloud Security Posture Management)?', a: 'CSPM is a category of security tools and practices focused on continuously monitoring cloud environments for misconfigurations, policy violations, and compliance gaps. Xammer implements and manages CSPM using cloud-native tools (AWS Security Hub, Microsoft Defender for Cloud, Google Security Command Center) combined with third-party platforms where needed.' },
  { q: 'What is zero-trust security and do I need it?', a: 'Zero-trust security treats every access request as untrusted — regardless of whether it comes from inside or outside your network perimeter. Instead of trusting everything inside the corporate network, zero-trust verifies every user, every device, and every access request based on identity, context, and the minimum necessary permission. For cloud environments, zero-trust is not optional — it is the only architecture that works when your infrastructure has no physical perimeter.' },
  { q: 'How quickly can you respond to a security incident?', a: 'Xammer\'s incident response SLA for P1 security incidents (active breach, data exfiltration, ransomware) is 15 minutes from detection to initial response, 24x7 including weekends and public holidays. For P2 incidents, initial response is within one hour. Automated playbooks for common incident types execute containment actions in seconds — before human response is even needed.' },
  { q: 'Do you perform penetration testing?', a: 'Yes. Xammer conducts both external and internal penetration testing — simulating real-world attack scenarios against your cloud environment, web applications, APIs, and network infrastructure. We deliver a detailed findings report with CVSS severity scoring and prioritized remediation guidance. We also offer purple team exercises combining red team attacks with blue team detection to validate your detection capabilities.' },
  { q: 'What compliance standards does Xammer support?', a: 'We support ISO 27001, SOC 2 Type I and II, PCI DSS v4.0, HIPAA, India\'s Digital Personal Data Protection Act (DPDPA), RBI IT Framework, SEBI Cloud Adoption Framework, IRDAI IT Guidelines, and CIS Benchmarks. We implement continuous compliance monitoring using policy-as-code frameworks so compliance is maintained automatically.' },
  { q: 'Can you respond to an active security incident right now?', a: 'Yes. If you are experiencing an active security incident — ransomware, unauthorized access, data breach, or any other security emergency — contact us immediately at operations@xammer.com or call +91-8769254249. Our incident response team will engage within 15 minutes.' },
];

const CyberSecurityPage = () => (
  <>
    <SEO
      title={CYBER_SEO.title}
      description={CYBER_SEO.description}
      keywords={CYBER_SEO.keywords}
      canonical={CYBER_SEO.canonical}
      ogImage={CYBER_SEO.ogImage}
    />
    <main>
      <ServiceHero
        badge="Proactive Threat Monitoring 24x7"
        title="Cyber Security Managed Services —"
        highlight="Proactive Protection for Your Cloud & IT Infrastructure"
        subtitle="In a world where cyberattacks hit Indian businesses every 11 seconds, reactive security is no longer good enough. Xammer delivers Cyber Security Managed Services that protect your cloud infrastructure proactively — detecting threats before they become incidents, automating compliance, and keeping your business running without interruption."
        stats={heroStats}
        accent="red"
        ctaPrimary={{ text: 'Get Free Security Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a Security Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Our Security Philosophy"
        title="Security as an Operational Discipline — Not a One-Time Project"
        subtitle="Most organizations treat cybersecurity as a project: do a penetration test, fix the findings, move on. Xammer treats it as an ongoing operational discipline integrated into every aspect of your cloud operations."
        items={benefits}
        accent="red"
      />
      <ServiceSolutions
        label="Our Security Services"
        title="Xammer's Cyber Security Managed Services — Complete Coverage"
        categories={solutions}
        accent="red"
      />
      <ServiceProcess
        label="How We Work"
        title="Xammer's Security Engagement Model"
        steps={processSteps}
        accent="red"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Clients Say About Xammer's Cyber Security Services"
        items={testimonials}
        accent="red"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Cyber Security Managed Services India"
        items={faqs}
        accent="red"
      />
      <ServiceCTA
        title="Don't Wait for a Breach to"
        highlight="Take Security Seriously"
        body="The question is not whether your cloud environment has security gaps — it is whether you know about them before the attackers do. Xammer's free security assessment identifies your highest-priority vulnerabilities, misconfigured cloud resources, and IAM policy gaps — giving you a clear remediation roadmap before they become an incident."
        ctaText="Get My Free Security Assessment"
        ctaTo="/contact"
        accent="red"
        stats={[
          { value: '15 min', label: 'P1 Response Time' },
          { value: '24x7', label: 'Threat Monitoring' },
          { value: '90+', label: 'Compliance Standards' },
        ]}
      />
    </main>
  </>
);

export default CyberSecurityPage;

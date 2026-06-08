import {
  Zap, Shield, Globe, Settings,
  Server, Eye, RefreshCw, Cloud, CheckCircle,
  GitBranch, Terminal, TrendingUp, Clock,
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
  { value: 10,   suffix: 'x',   label: 'Faster Deployments',  color: 'violet' },
  { value: 70,   suffix: '%',   label: 'Reduced Incident Rate', color: 'blue' },
  { value: 500,  suffix: '+',   label: 'Pipelines Built',      color: 'teal' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Pipeline Uptime', color: 'green' },
];

const benefits = [
  { icon: <Zap size={22} />,       color: 'violet', title: 'Automated CI/CD Pipelines', desc: 'Ship code up to 10x faster with fully automated build, test, and deployment pipelines. Xammer designs and manages CI/CD workflows tailored to your stack — from GitHub Actions to Jenkins to ArgoCD.' },
  { icon: <Shield size={22} />,    color: 'blue',   title: 'DevSecOps Built In', desc: 'Security is integrated at every pipeline stage — SAST, DAST, container scanning, dependency auditing, and secrets detection — so vulnerabilities are caught before they ever reach production.' },
  { icon: <Server size={22} />,    color: 'teal',   title: 'Infrastructure as Code', desc: 'Every cloud resource is version-controlled in Terraform or Pulumi. Changes go through peer-reviewed pull requests, automated testing, and staged deployments — zero manual click-ops.' },
  { icon: <Globe size={22} />,     color: 'cyan',   title: 'Kubernetes Orchestration', desc: 'From cluster provisioning to horizontal pod autoscaling, canary deployments to GitOps workflows — Xammer manages your Kubernetes environments on any cloud or on-premise.' },
  { icon: <Eye size={22} />,       color: 'green',  title: 'Full-Stack Observability', desc: 'Metrics, logs, and traces unified in a single pane of glass. Xammer deploys and manages Prometheus, Grafana, ELK/OpenSearch, Datadog, or New Relic — giving your team real-time visibility.' },
  { icon: <RefreshCw size={22} />, color: 'orange', title: 'SRE-Grade Operations', desc: 'Site Reliability Engineers monitor your systems 24x7, respond to P1 incidents within 15 minutes, and drive continuous reliability improvements through blameless post-incident reviews.' },
  { icon: <TrendingUp size={22} />,color: 'violet', title: 'Cloud Cost Engineering', desc: 'Xamops includes continuous cloud cost optimisation — right-sizing, scheduling, Spot/Reserved instance management — reducing your cloud bill by 30–60% without sacrificing performance.' },
  { icon: <Clock size={22} />,     color: 'blue',   title: '24x7 On-Call SRE Team', desc: 'Your dedicated Xammer SRE team is always on call. We handle incidents, deployments, infrastructure scaling, and change management — so your engineers can focus on building products.' },
];

const solutions = [
  {
    icon: <GitBranch size={20} />, color: 'violet', title: 'CI/CD & Release Automation',
    items: [
      'GitHub Actions / GitLab CI pipeline design',
      'Jenkins declarative pipeline migration',
      'ArgoCD / Flux GitOps workflows',
      'Blue/green and canary deployment strategies',
      'Automated rollback and release gating',
      'Multi-environment promotion pipelines',
    ],
  },
  {
    icon: <Server size={20} />, color: 'teal', title: 'Container & Kubernetes',
    items: [
      'Kubernetes cluster setup (EKS, GKE, AKS, OKE)',
      'Helm chart development and management',
      'Service mesh (Istio, Linkerd) implementation',
      'Horizontal & vertical pod autoscaling',
      'Multi-cluster management with ArgoCD',
      'Docker image optimisation & private registries',
    ],
  },
  {
    icon: <Settings size={20} />, color: 'blue', title: 'Infrastructure as Code',
    items: [
      'Terraform module library development',
      'Terragrunt DRY configuration management',
      'Pulumi for multi-language IaC',
      'Ansible configuration management',
      'Drift detection and automated remediation',
      'State management and workspace governance',
    ],
  },
  {
    icon: <Shield size={20} />, color: 'red', title: 'DevSecOps',
    items: [
      'SAST with SonarQube / Semgrep',
      'Container scanning with Trivy / Snyk',
      'Dependency vulnerability management',
      'Secrets detection (GitLeaks, TruffleHog)',
      'Policy as Code with OPA / Checkov',
      'Compliance automation (SOC 2, ISO 27001)',
    ],
  },
  {
    icon: <Eye size={20} />, color: 'green', title: 'Observability Stack',
    items: [
      'Prometheus + Grafana deployment & dashboards',
      'ELK / OpenSearch centralised logging',
      'Distributed tracing (Jaeger, Tempo)',
      'Datadog / New Relic managed integration',
      'Custom alerting and on-call runbooks',
      'SLO/SLA monitoring and error budgets',
    ],
  },
  {
    icon: <Terminal size={20} />, color: 'cyan', title: 'Platform Engineering',
    items: [
      'Internal developer platform (IDP) design',
      'Self-service infrastructure provisioning',
      'Environment as a Service (EaaS)',
      'Developer portal with Backstage',
      'Golden path template libraries',
      'Automated compliance & cost guardrails',
    ],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,          title: 'DevOps Maturity Assessment',  desc: 'We evaluate your current deployment frequency, lead time, change failure rate, and MTTR against DORA metrics — identifying your highest-leverage DevOps improvement opportunities.', sub: 'Week 1' },
  { icon: <CheckCircle size={24} />,  title: 'Roadmap & Quick Wins',        desc: 'Our engineers design your target DevOps architecture and identify quick wins — automations that deliver measurable value within the first two weeks while the broader platform is being built.', sub: 'Week 2' },
  { icon: <Settings size={24} />,     title: 'Pipeline & Platform Build',   desc: 'We implement your CI/CD pipelines, IaC modules, Kubernetes platform, observability stack, and DevSecOps toolchain — all documented, version-controlled, and handed over with full knowledge transfer.', sub: 'Weeks 3–8' },
  { icon: <Cloud size={24} />,        title: 'Ongoing Managed DevOps',      desc: '24x7 SRE operations, pipeline maintenance, security patching, platform upgrades, capacity planning, and continuous improvement sprints — all included in the Xamops managed service.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'Xamops transformed our deployment process. We went from monthly releases to multiple deployments per day — with higher quality and far fewer incidents.', author: 'Arjun', role: 'VP Engineering, SaaS Platform' },
  { quote: "The CI/CD pipelines Xammer built cut our build times by 70% and completely eliminated manual deployment steps. Game-changing for our team's velocity.", author: 'Priya', role: 'CTO, FinTech Startup' },
  { quote: "Their SRE team responds faster than our own on-call rotation ever did. Having 24x7 experts watching our infrastructure is invaluable peace of mind.", author: 'Rahul', role: 'Head of Infrastructure, EdTech Platform' },
  { quote: "Xammer built our entire Kubernetes platform from scratch in six weeks. It's been rock-solid for over a year — zero downtime deployments every time.", author: 'Deepak', role: 'Director of Engineering, HealthTech' },
];

const faqs = [
  { q: 'What is Xamops and how is it different from standard DevOps consulting?', a: "Xamops is Xammer's fully managed DevOps-as-a-Service offering. Unlike project-based consulting, Xamops is an ongoing managed service — we become your dedicated DevOps and SRE team, responsible for your pipelines, infrastructure, platform, and 24x7 operations. You get senior DevOps expertise without the hiring, training, and retention overhead of building an internal team." },
  { q: 'What technologies does the Xamops team work with?', a: 'Xamops covers the full modern DevOps stack: GitHub Actions, GitLab CI, Jenkins, ArgoCD, Flux for CI/CD; Terraform, Pulumi, Ansible for IaC; Kubernetes (EKS, GKE, AKS, OKE, on-prem) for containers; Prometheus, Grafana, Datadog, New Relic, ELK for observability; SonarQube, Snyk, Trivy, OPA for DevSecOps; and all major cloud providers.' },
  { q: 'How quickly can Xamops get our CI/CD pipeline running?', a: 'For a standard application, we can have a working CI/CD pipeline in production within one week. For complex multi-service or multi-environment setups, a complete pipeline implementation typically takes two to four weeks. We always start with quick wins that deliver value within the first few days.' },
  { q: 'Can Xamops work alongside our existing internal DevOps team?', a: 'Yes, this is one of the most common engagement models. Xamops can augment your internal team — taking ownership of specific areas (e.g., platform engineering, 24x7 on-call) while your team focuses on others. We work transparently with all code in your repositories and provide full knowledge transfer throughout.' },
  { q: 'How does Xamops handle incidents and on-call?', a: 'Xamops includes 24x7 SRE coverage with defined SLAs: P1 (production down) — 15-minute response; P2 (significant degradation) — 30-minute response; P3 (non-critical) — 2-hour response. We integrate with your existing alerting tools or set up a complete observability stack, and every incident is followed by a blameless post-incident review.' },
  { q: 'What DORA metrics improvement can we expect with Xamops?', a: 'Organisations adopting Xamops typically see deployment frequency increase from monthly to daily or multiple-per-day, lead time for changes reduce from weeks to hours, change failure rate drop by 60–70%, and MTTR (mean time to recovery) reduce from hours to minutes. Exact improvements vary by starting point and workload complexity.' },
];

const XamopsPage = () => (
  <>
    <SEO
      title="Xamops — DevOps-as-a-Service | Xammer"
      description="Xamops is Xammer's fully managed DevOps-as-a-Service. We build and manage your CI/CD pipelines, Kubernetes platform, IaC, DevSecOps, and 24x7 SRE operations. Free DevOps assessment."
      keywords="DevOps as a Service India, managed DevOps, CI/CD pipeline management, Kubernetes managed service, SRE as a service India"
    />
    <main>
      <ServiceHero
        badge="Xamops — DevOps-as-a-Service by Xammer"
        title="Xamops — Ship Faster,"
        highlight="Operate Smarter, Scale Confidently"
        subtitle="Xamops is Xammer's fully managed DevOps-as-a-Service. We design, build, and operate your entire DevOps platform — CI/CD pipelines, Kubernetes infrastructure, IaC, DevSecOps, observability, and 24x7 SRE operations — so your engineers can focus on building products, not managing infrastructure."
        stats={heroStats}
        accent="violet"
        ctaPrimary={{ text: 'Get Free DevOps Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a DevOps Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Xamops"
        title="Everything Your DevOps Platform Needs — Managed for You"
        subtitle="Xamops delivers elite DevOps engineering without the hiring headache. From CI/CD automation to Kubernetes orchestration to 24x7 SRE — we manage it all so your team can ship faster with confidence."
        items={benefits}
        accent="violet"
      />
      <ServiceSolutions
        label="What's Included"
        title="Xamops DevOps Services — Full Stack, Fully Managed"
        subtitle="Xamops covers the complete DevOps lifecycle — from code commit to production monitoring. Every service is set up, documented, and operated by our dedicated engineers."
        categories={solutions}
        accent="violet"
      />
      <ServiceProcess
        label="How We Work"
        title="How Xamops Transforms Your DevOps in 8 Weeks"
        steps={processSteps}
        accent="violet"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Engineering Teams Say About Xamops"
        items={testimonials}
        accent="violet"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Xamops DevOps-as-a-Service"
        items={faqs}
        accent="violet"
      />
      <ServiceCTA
        title="Ready to Ship Faster and"
        highlight="Eliminate DevOps Toil?"
        body="Get a free DevOps maturity assessment from Xammer's engineers. We'll evaluate your current deployment pipeline, infrastructure, and operations — then show you exactly where Xamops can deliver the biggest improvements in speed, reliability, and cost."
        ctaText="Get My Free DevOps Assessment"
        ctaTo="/contact"
        accent="violet"
        stats={[
          { value: '500+', label: 'Pipelines Built' },
          { value: '10x',  label: 'Faster Deployments' },
          { value: '24x7', label: 'SRE Coverage' },
        ]}
      />
    </main>
  </>
);

export default XamopsPage;

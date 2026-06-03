import { GitBranch, Server, Shield, Zap, Eye, RefreshCw, Settings, Lock, Cloud, CheckCircle } from 'lucide-react';
import SEO from '../../components/common/SEO';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 70,  suffix: '%',    label: 'Faster Deployment Cycles', color: 'blue' },
  { value: 90,  suffix: '%',    label: 'Fewer Deployment Failures', color: 'teal' },
  { value: 99.9,suffix: '%', decimals: 1, label: 'Pipeline Uptime', color: 'green' },
  { value: 1000,suffix: '+',   label: 'Pipelines Built', color: 'violet' },
];

const benefits = [
  { icon: <Zap size={22} />,       color: 'blue',   title: 'Deploy in Minutes, Not Days', desc: 'Automated CI/CD pipelines built on GitHub Actions, GitLab CI, Azure DevOps, or AWS CodePipeline eliminate manual deployment steps and cut release cycles from weeks to hours.' },
  { icon: <Shield size={22} />,    color: 'violet', title: 'Security Built Into Every Pipeline', desc: 'DevSecOps practices embed security scanning, SAST/DAST, container image scanning, and compliance checks directly into your CI/CD pipeline — security before deployment, not after.' },
  { icon: <Settings size={22} />,  color: 'teal',   title: 'Infrastructure as Code', desc: 'Every infrastructure resource defined in Terraform, reviewed in pull requests, and deployed through automated pipelines. Reproducible, auditable, and rollback-able environments.' },
  { icon: <Eye size={22} />,       color: 'green',  title: 'Full Observability', desc: 'Comprehensive monitoring, logging, and alerting across your entire stack — CloudWatch, Prometheus, Grafana, PagerDuty — so you know about issues before your users do.' },
  { icon: <RefreshCw size={22} />, color: 'blue',   title: 'Zero-Downtime Releases', desc: 'Blue-green deployments, canary releases, and feature flags let your team ship confidently — even for high-traffic production systems — with instant rollback capability.' },
  { icon: <Server size={22} />,    color: 'violet', title: 'Container Orchestration', desc: 'Kubernetes on EKS, AKS, GKE, or self-managed clusters — configured, secured, and managed by certified engineers. Microservices at scale with automated scaling and self-healing.' },
];

const solutions = [
  {
    icon: <GitBranch size={20} />, color: 'blue', title: 'CI/CD Pipeline Design & Build',
    desc: 'End-to-end automated pipelines covering code commit through production deployment.',
    items: ['GitHub Actions, GitLab CI, Azure DevOps, AWS CodePipeline', 'Automated testing — unit, integration, E2E', 'Security scanning — SAST, DAST, dependency audit', 'Artifact management — ECR, ACR, Artifact Registry', 'Deployment automation — ECS, EKS, App Service, GKE'],
  },
  {
    icon: <Settings size={20} />, color: 'teal', title: 'Infrastructure as Code (IaC)',
    items: ['Terraform modules for AWS, Azure, GCP, Yotta', 'CloudFormation, ARM Templates, Pulumi', 'IaC code review and approval workflows', 'Drift detection and automated remediation', 'State management — S3, Azure Storage, Terraform Cloud'],
  },
  {
    icon: <Server size={20} />, color: 'violet', title: 'Kubernetes & Container Orchestration',
    items: ['EKS, AKS, GKE cluster design and hardening', 'Helm chart development and management', 'Service mesh — Istio, Linkerd', 'Horizontal Pod Autoscaling and Cluster Autoscaler', 'Multi-environment namespace management'],
  },
  {
    icon: <Eye size={20} />, color: 'green', title: 'Monitoring & Observability',
    items: ['Prometheus + Grafana stack deployment', 'AWS CloudWatch custom dashboards and alarms', 'Distributed tracing — Jaeger, AWS X-Ray', 'Log aggregation — ELK, CloudWatch Logs Insights', 'Incident alerting — PagerDuty, OpsGenie integration'],
  },
  {
    icon: <Shield size={20} />, color: 'blue', title: 'DevSecOps',
    items: ['SAST scanning — SonarQube, Checkmarx', 'Container image scanning — Trivy, Snyk, ECR', 'Secrets management — AWS Secrets Manager, Vault', 'Policy-as-code — OPA, Conftest', 'Pipeline security gate enforcement'],
  },
  {
    icon: <Cloud size={20} />, color: 'teal', title: 'Cloud-Native Development Enablement',
    items: ['Development environment standardisation', 'Local Kubernetes — minikube, kind, Docker Desktop', 'Developer portal and internal documentation', 'Runbook automation and self-service ops', 'On-call process design and SRE handover'],
  },
];

const steps = [
  { icon: <Eye size={24} />,     title: 'DevOps Assessment', desc: 'Audit current deployment processes, tool chain, pipeline maturity, and pain points. Benchmark against DevOps best practices and identify the highest-impact improvements.', sub: 'Week 1' },
  { icon: <Settings size={24}/>, title: 'Pipeline Design',   desc: 'Design the target CI/CD architecture, IaC approach, and observability stack. Define branching strategy, environment promotion rules, and rollback procedures.', sub: 'Week 2' },
  { icon: <GitBranch size={24}/>,title: 'Build & Migrate',   desc: 'Implement pipelines, Terraform modules, and Kubernetes manifests. Migrate existing deployments incrementally with zero disruption to ongoing releases.', sub: 'Weeks 3–8' },
  { icon: <RefreshCw size={24}/>,title: 'Optimise & Operate',desc: 'Continuous pipeline performance improvement, cost optimisation of build infrastructure, capacity planning, and ongoing DevOps consulting for your engineering team.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'What was a brittle, slow-moving monolith is now a microservices platform that deploys dozens of times per day. Our engineering team\'s productivity has doubled.', author: 'Deepa', role: 'CTO, EdTech Platform' },
  { quote: 'Xammer rebuilt our entire deployment pipeline from scratch. Releases that used to take 4 hours now take 12 minutes with full automated testing.', author: 'Sanjay', role: 'VP Engineering, SaaS Platform' },
  { quote: 'The Terraform modules Xammer built let us spin up identical environments in under 10 minutes. Infrastructure drift is now a thing of the past.', author: 'Kavita', role: 'Head of Platform Engineering, FinTech' },
  { quote: 'DevSecOps implementation meant our last security audit had zero pipeline-related findings. Security is now a gate, not an afterthought.', author: 'Nikhil', role: 'CISO, InsurTech Company' },
];

const faqs = [
  { q: 'What CI/CD tools does Xammer work with?', a: 'We work with all major CI/CD platforms: GitHub Actions, GitLab CI/CD, Azure DevOps Pipelines, AWS CodePipeline/CodeBuild, Jenkins, CircleCI, and Bitbucket Pipelines. We recommend the tool that best fits your existing tech stack and team skills — not what\'s most convenient for us.' },
  { q: 'How do you migrate from our current manual deployment process?', a: 'We use a phased approach: first we build the new pipeline alongside your current process, then migrate one application or service at a time. This means your team continues shipping throughout the migration with zero disruption. The full migration typically takes 4–8 weeks depending on the number of applications.' },
  { q: 'Do you support on-premise Kubernetes as well as managed (EKS/AKS/GKE)?', a: 'Yes. We support managed Kubernetes on all major cloud providers (EKS, AKS, GKE) as well as self-managed clusters on bare metal or VM infrastructure. For regulated industries requiring sovereign infrastructure, we also implement Kubernetes on Yotta\'s MeitY-compliant data centers.' },
  { q: 'What is DevSecOps and why should we implement it?', a: 'DevSecOps integrates security practices directly into the DevOps pipeline — so every code commit is scanned for vulnerabilities, every container image is checked before deployment, and every infrastructure change is validated against security policies automatically. It shifts security left (earlier in the process) where issues are far cheaper to fix than in production.' },
  { q: 'How do you handle multi-environment deployments (dev/staging/prod)?', a: 'We design environment promotion workflows where code flows automatically from feature branches through development and staging environments before reaching production — with automated testing gates at each stage and manual approval for production deployments where required. Environment configuration is managed via Terraform workspaces and environment-specific variable injection.' },
];

const DevOpsPage = () => (
  <>
    <SEO
      title="DevOps Automation Services India | CI/CD, Kubernetes, IaC | Xammer"
      description="Xammer delivers DevOps automation services in India — CI/CD pipelines, Terraform IaC, Kubernetes, DevSecOps, and observability. Deploy faster with fewer failures. Free DevOps assessment."
      keywords="DevOps services India, CI/CD pipeline India, Kubernetes managed services, DevSecOps India, Terraform IaC India, DevOps automation Delhi"
    />
    <main>
      <ServiceHero
        badge="DevOps & Platform Engineering"
        title="DevOps Automation Services —"
        highlight="Ship Faster, Break Less, Scale Confidently"
        subtitle="Xammer's DevOps practice designs and builds the CI/CD pipelines, Infrastructure as Code, Kubernetes environments, and observability stacks that let your engineering team ship with confidence — from multiple times a day to truly continuous deployment."
        stats={heroStats}
        accent="blue"
        ctaPrimary={{ text: 'Get Free DevOps Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a DevOps Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why DevOps Matters"
        title="What Modern DevOps Actually Delivers"
        subtitle="DevOps is not just about tools — it is about compressing the time between a developer committing code and that code running reliably in production, with confidence at every step."
        items={benefits}
        accent="blue"
      />
      <ServiceSolutions
        label="Our DevOps Services"
        title="Xammer's DevOps Automation Services — Complete Coverage"
        categories={solutions}
        accent="blue"
      />
      <ServiceProcess
        label="How We Work"
        title="Xammer's DevOps Engagement Model"
        steps={steps}
        accent="blue"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Clients Say About Xammer's DevOps Services"
        items={testimonials}
        accent="blue"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — DevOps Automation Services India"
        items={faqs}
        accent="blue"
      />
      <ServiceCTA
        title="Ready to Deploy Faster with"
        highlight="Zero-Downtime Pipelines?"
        body="Xammer's DevOps team will assess your current deployment process, identify your biggest bottlenecks, and show you exactly what a modern CI/CD pipeline looks like for your stack — in a free 60-minute assessment."
        ctaText="Get My Free DevOps Assessment"
        ctaTo="/contact"
        accent="blue"
        stats={[
          { value: '70%', label: 'Faster Deployments' },
          { value: '90%', label: 'Fewer Failures' },
          { value: '1,000+', label: 'Pipelines Built' },
        ]}
      />
    </main>
  </>
);

export default DevOpsPage;

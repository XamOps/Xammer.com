import { Link } from 'react-router-dom';
import {
  ArrowRight, Cloud, Server, GitBranch,
  Globe, Layers, ShieldCheck, Zap,
} from 'lucide-react';
import './WhatWeOffer.css';

const services = [
  {
    id: 'aws',
    icon: <Cloud size={22} />,
    iconBg: 'rgba(255, 153, 0, 0.12)',
    iconColor: '#FF9900',
    accentColor: '#FF9900',
    name: 'AWS Managed Services',
    badge: 'AWS Partner',
    desc: 'End-to-end Amazon Web Services management — from architecture design and migration to ongoing cost optimisation, security hardening, and 24×7 NOC monitoring for Indian enterprises.',
    features: [
      'AWS Well-Architected Reviews & Cost Audits',
      'EC2, RDS, EKS, Lambda, and S3 management',
      'Reserved Instance and Savings Plan optimisation',
      'Multi-region disaster recovery and backup',
    ],
    href: '/services/aws',
    accent: 'rgba(255, 153, 0, 0.3)',
    cardClass: 'offer__card--aws',
  },
  {
    id: 'azure',
    icon: <Server size={22} />,
    iconBg: 'rgba(0, 120, 212, 0.12)',
    iconColor: '#0078D4',
    name: 'Microsoft Azure Consulting',
    badge: null,
    desc: 'Comprehensive Azure cloud consulting for enterprises moving off on-prem infrastructure. We handle Azure AD, Office 365 integration, AKS, and hybrid cloud setups with end-to-end compliance.',
    features: [
      'Azure Landing Zone design and governance',
      'Azure Kubernetes Service (AKS) management',
      'Hybrid cloud with Azure Arc',
      'Microsoft 365 and Azure AD integration',
    ],
    href: '/services/azure',
    accent: 'rgba(0, 120, 212, 0.3)',
    cardClass: 'offer__card--azure',
  },
  {
    id: 'devops',
    icon: <GitBranch size={22} />,
    iconBg: 'rgba(187, 134, 252, 0.12)',
    iconColor: '#BB86FC',
    name: 'DevOps Automation',
    badge: 'Most Popular',
    desc: 'We design and implement enterprise-grade DevOps pipelines that cut deployment cycles by up to 70%. From Jenkins, GitLab CI, and GitHub Actions to Terraform IaC and Kubernetes orchestration.',
    features: [
      'CI/CD pipeline design, build, and optimisation',
      'Kubernetes (EKS/AKS/GKE) cluster management',
      'Infrastructure-as-Code with Terraform & Ansible',
      'Container security scanning and DAST/SAST integration',
    ],
    href: '/services/devops',
    accent: 'rgba(187, 134, 252, 0.4)',
    cardClass: 'offer__card--devops',
    featured: true,
  },
  {
    id: 'gcp',
    icon: <Globe size={22} />,
    iconBg: 'rgba(66, 133, 244, 0.12)',
    iconColor: '#4285F4',
    name: 'Google Cloud Platform',
    badge: null,
    desc: 'Google Cloud consulting for data-intensive workloads, AI/ML platforms, and modern app development. We specialise in BigQuery, GKE, Vertex AI, and Cloud Run deployments.',
    features: [
      'GKE and Cloud Run deployment management',
      'BigQuery and Looker Studio analytics setup',
      'Vertex AI and Gemini API integration',
      'GCP cost governance with Billing Budgets',
    ],
    href: '/services/google-cloud',
    accent: 'rgba(66, 133, 244, 0.3)',
    cardClass: 'offer__card--gcp',
  },
  {
    id: 'transform',
    icon: <Layers size={22} />,
    iconBg: 'rgba(3, 218, 198, 0.12)',
    iconColor: '#03DAC6',
    name: 'Digital Transformation',
    badge: null,
    desc: 'We help legacy enterprises modernise their IT landscape — moving from on-premise systems to cloud-native architectures, automating manual processes, and enabling data-driven decision making.',
    features: [
      'Legacy application modernisation roadmaps',
      'API-first microservices migration',
      'Business process automation and RPA',
      'Data platform and analytics modernisation',
    ],
    href: '/services/digital-transformation',
    accent: 'rgba(3, 218, 198, 0.3)',
    cardClass: 'offer__card--transform',
  },
  {
    id: 'security',
    icon: <ShieldCheck size={22} />,
    iconBg: 'rgba(88, 166, 255, 0.12)',
    iconColor: '#58A6FF',
    name: 'Cyber Security',
    badge: null,
    desc: 'Protect your cloud infrastructure and data from modern threats with Xammer\'s managed security services — VAPT, SOC monitoring, compliance (ISO 27001, GDPR, RBI), and zero-trust architecture.',
    features: [
      'Vulnerability Assessment & Penetration Testing',
      '24×7 Security Operations Centre (SOC)',
      'Zero-trust network architecture implementation',
      'ISO 27001, SOC 2, and RBI compliance advisory',
    ],
    href: '/services/cyber-security',
    accent: 'rgba(88, 166, 255, 0.3)',
    cardClass: 'offer__card--security',
  },
];

const WhatWeOffer = () => (
  <section className="offer section" id="services" aria-labelledby="offer-heading">
    <div className="container">
      <div className="offer__head">
        <div className="section-label">
          <Zap size={13} /> Our Services
        </div>
        <h2 className="section-title" id="offer-heading">
          Everything Your Cloud Stack Needs,<br />
          <span className="gradient-text">Under One Roof</span>
        </h2>
        <p className="section-subtitle">
          From choosing the right cloud platform to automating every deployment — Xammer is the
          end-to-end IT partner Indian enterprises trust when cloud complexity starts slowing growth.
        </p>
      </div>

      <div className="offer__grid">
        {services.map((svc) => (
          <article
            key={svc.id}
            className={`offer__card ${svc.cardClass}${svc.featured ? ' offer__card--featured' : ''}`}
            style={{ '--card-accent': `linear-gradient(90deg, ${svc.accent}, transparent)` }}
            aria-label={svc.name}
          >
            <div className="offer__card-top">
              <div
                className="offer__card-icon"
                style={{ background: svc.iconBg, color: svc.iconColor }}
              >
                {svc.icon}
              </div>
              {svc.badge && <span className="offer__card-badge">{svc.badge}</span>}
            </div>

            <div className="offer__card-name">{svc.name}</div>
            <p className="offer__card-desc">{svc.desc}</p>

            <div className="offer__card-features">
              {svc.features.map((f, i) => (
                <div key={i} className="offer__card-feature">
                  <span
                    className="offer__card-feature-dot"
                    style={{ background: svc.accentColor || 'var(--violet)' }}
                  />
                  {f}
                </div>
              ))}
            </div>

            <Link to={svc.href} className="offer__card-link">
              Explore {svc.name} <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOffer;

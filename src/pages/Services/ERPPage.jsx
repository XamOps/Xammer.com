import {
  Database, Globe, Settings, Zap, BarChart2, TrendingDown,
  DollarSign, Users, Shield, Eye, RefreshCw, Cloud,
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
  { value: 50, suffix: '%', label: 'Infrastructure Cost Reduction', color: 'blue' },
  { value: 100, suffix: '%', label: 'Zero Data Loss Migrations', color: 'teal' },
  { value: 4, suffix: ' months', label: 'Average ROI Payback', color: 'green' },
  { value: 2, suffix: ' days', label: 'Month-End Close (was 2 wks)', color: 'violet' },
];

const benefits = [
  { icon: <DollarSign size={22} />, color: 'blue',   title: 'Eliminate Data Silos', desc: 'Finance, HR, supply chain, procurement, manufacturing, and customer management in a single source of truth. No more reconciliation between disconnected systems. No more month-end close taking two weeks.' },
  { icon: <BarChart2 size={22} />, color: 'teal',    title: 'Real-Time Business Visibility', desc: 'Replace monthly reports prepared three weeks late with real-time dashboards. Every leadership role gets the metrics that matter most, updated live from ERP transactions.' },
  { icon: <Zap size={22} />,       color: 'green',   title: 'Automated Workflows', desc: 'Purchase requests, expense reports, inventory checks, and order tracking — automated and flowing through the system without manual intervention or email chains that take days.' },
  { icon: <Shield size={22} />,    color: 'violet',  title: 'Compliance & GST Automation', desc: 'GST calculations, e-invoice generation, TDS/TCS, bank reconciliation, and statutory reporting — automated from day one with Xammer\'s Indian compliance configuration.' },
  { icon: <Settings size={22} />,  color: 'blue',    title: 'AI-Powered Business Intelligence', desc: 'AI models trained on your ERP data predict demand, forecast cash flow, detect anomalies, identify churn risk, and answer natural language questions about your business in real time.' },
  { icon: <Users size={22} />,     color: 'teal',    title: 'End-to-End ERP Expertise', desc: 'Xammer covers the full ERP lifecycle: system selection, customization, full implementation, data migration, integrations, training, go-live hypercare, and ongoing managed support — all under one roof.' },
];

const solutions = [
  {
    icon: <Database size={20} />, color: 'blue', title: 'ERP System Selection',
    desc: 'Requirements gathering across all business units, vendor market assessment, proof of concept demos, TCO analysis over 5 years, and customization architecture design.',
    items: ['SAP S/4HANA — large enterprise', 'Microsoft Dynamics 365 — Microsoft ecosystem', 'Oracle NetSuite — cloud-native mid-market', 'Odoo — flexible open-source ERP', 'Custom ERP — specialized requirements'],
  },
  {
    icon: <Settings size={20} />, color: 'teal', title: 'Full ERP Implementation',
    items: ['Project governance and planning', 'Module configuration and customization development', 'GST, TDS, PF, ESI compliance setup', 'User role and permission design', 'Performance and UAT testing', 'Go-live with 2-4 week hypercare'],
  },
  {
    icon: <Database size={20} />, color: 'green', title: 'Data Migration',
    desc: 'Xammer\'s zero-loss data migration methodology across hundreds of ERP projects.',
    items: ['Data extraction from all source systems', 'Data cleansing and deduplication', 'Transformation to target ERP data model', 'Staged migration with reconciliation', 'Parallel run period validation', 'Final cutover with zero-tolerance validation'],
  },
  {
    icon: <Globe size={20} />, color: 'violet', title: 'ERP Integration',
    items: ['CRM — Salesforce, HubSpot, Dynamics 365', 'E-commerce — Shopify, WooCommerce, Magento', 'Banking and payment gateway automation', 'GST portal, e-invoice, e-way bill', 'Logistics and supply chain partners', 'HR and payroll integration'],
  },
  {
    icon: <BarChart2 size={20} />, color: 'blue', title: 'AI for Business Intelligence',
    items: ['Executive dashboards — real-time KPIs per role', 'Demand and cash flow forecasting', 'Anomaly detection in financial transactions', 'Natural language ERP queries', 'Customer churn and inventory risk prediction'],
  },
  {
    icon: <Users size={20} />, color: 'teal', title: 'Training & Ongoing Support',
    items: ['Role-specific end-user training', 'Train-the-trainer programmes', 'SLA-based helpdesk support', 'Performance monitoring and optimization', 'Compliance updates (GST rule changes)', 'Enhancement request delivery'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,      title: 'Free ERP Consultation', desc: 'We assess your current operational challenges, map your existing systems and processes, identify the highest-impact ERP opportunities, and recommend the right platform and scope.', sub: 'Week 1' },
  { icon: <Settings size={24} />, title: 'Selection & Planning', desc: 'Vendor evaluation, TCO modeling over 5 years, proof-of-concept demos using your actual business scenarios, and a detailed implementation plan with milestones and resource requirements.', sub: 'Weeks 2–4' },
  { icon: <Database size={24} />, title: 'Implementation & Migration', desc: 'Module configuration, customization development, zero-loss data migration, integration development, comprehensive testing (unit, integration, performance, UAT), and training delivery.', sub: '3–6 Months' },
  { icon: <TrendingDown size={24} />, title: 'Go-Live & Managed Support', desc: 'Managed go-live with intensive hypercare. Post-launch: SLA-based helpdesk, performance monitoring, compliance updates, AI dashboard delivery, and continuous enhancement.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'We went from running a business on spreadsheets to having real-time visibility into every corner of the company. Month-end close went from two weeks to two days. The ROI was visible in the first quarter.', author: 'Rajesh', role: 'MD, Manufacturing SME' },
  { quote: 'We had 12 years of customer and transaction history that needed to move cleanly. Xammer\'s migration process was methodical, thoroughly tested, and executed with zero data loss.', author: 'Priti', role: 'CFO, Distribution Company' },
  { quote: 'We had tried two previous ERP implementations that both failed at go-live. Xammer invested more time understanding our business before touching configuration than the other vendors spent on the entire project.', author: 'Manish', role: 'CEO, Retail Chain' },
  { quote: 'Xammer\'s ERP integration connecting our Dynamics 365 to our e-commerce platform and logistics partners eliminated 45 minutes of manual order processing per order. The integration paid for itself in the first month.', author: 'Sonal', role: 'Head of Operations, E-Commerce Business' },
  { quote: 'The AI-powered dashboards Xammer built on top of our ERP data have transformed how our leadership team operates. What used to take three days now takes three minutes.', author: 'Ankit', role: 'COO, FMCG Company' },
];

const faqs = [
  { q: 'How long does an ERP implementation take?', a: 'A focused Odoo or NetSuite implementation for a mid-size business (50–200 users, three to five modules) typically takes three to five months. A full-scale SAP S/4HANA implementation for a large enterprise can take twelve to eighteen months. Xammer provides detailed project plans with milestones before any engagement begins — so there are no surprises.' },
  { q: 'What is the biggest risk in ERP implementation and how do you mitigate it?', a: 'The biggest risks are data migration failure, scope creep, user adoption failure, and going live with critical issues unresolved. Xammer mitigates all four: data migration is executed with extensive staging and validation; scope is managed through a formal change control process; user adoption is invested in through comprehensive training and hypercare; and our testing process identifies critical issues before go-live, not after.' },
  { q: 'Should we go on-premise or cloud for our ERP?', a: 'For most new ERP implementations, Xammer recommends cloud deployment — whether a SaaS ERP like NetSuite or Odoo Online, or cloud-hosted SAP or Dynamics 365. Cloud ERP eliminates infrastructure management overhead, provides automatic updates, and scales without hardware procurement. For organizations with Indian data sovereignty requirements, Xammer deploys ERP on Yotta sovereign cloud.' },
  { q: 'Can you migrate us from our existing ERP to a new one?', a: 'Yes — ERP migration is one of our most common engagements. We handle migrations from legacy SAP versions to S/4HANA, from on-premise Dynamics to Dynamics 365 cloud, from custom legacy systems to Odoo or NetSuite, and between any combination of ERP platforms. Data migration is always the most complex part — and our methodology has been refined over hundreds of migrations.' },
  { q: 'Can your ERP implementation handle GST compliance automatically?', a: 'Yes. Every Xammer ERP implementation for Indian businesses includes full GST compliance configuration: HSN code mapping, GSTIN management, automatic GST calculation, e-invoice generation and IRN fetching, e-way bill creation, GSTR-1/3B/2A reconciliation, and integration with the GST portal. We stay current with CBIC notifications and implement compliance updates as they are announced.' },
  { q: 'How do you handle customization requests?', a: 'Our default recommendation is minimal customization — modifying standard ERP processes to match your current (often inefficient) workflows typically creates more problems than it solves. We first review whether your process can be adjusted to work within standard ERP functionality. Where customization is genuinely required, we implement it with full documentation, code review, and version control to ensure it doesn\'t break with system updates.' },
  { q: 'What ongoing support do you provide after go-live?', a: 'Xammer provides post-implementation support through a tiered support model: standard support (business-hours helpdesk), enhanced support (extended hours, faster SLA, proactive monitoring), and managed ERP operations (full IT administration outsourcing). We also provide regular system health reviews, performance optimization, compliance updates, and enhancement delivery.' },
];

const ERPPage = () => (
  <>
    <SEO
      title="ERP Implementation Services India | SAP, Odoo, Dynamics 365 | Xammer"
      description="Xammer delivers end-to-end ERP Implementation Services in India — system selection, full implementation, zero-loss data migration, integrations, and 24x7 support for SAP, Odoo, NetSuite, and Dynamics 365."
      keywords="ERP implementation services India, enterprise ERP consulting India, ERP system implementation Delhi, ERP cloud migration India, cloud ERP managed services"
    />
    <main>
      <ServiceHero
        badge="End-to-End ERP Implementation"
        title="ERP Implementation Services —"
        highlight="Streamline Operations, Unify Your Business, Drive Growth"
        subtitle="An ERP system is the operational backbone of your enterprise — connecting finance, HR, supply chain, procurement, manufacturing, and customer management into a single source of truth. Xammer provides comprehensive ERP Implementation Services across India — from initial system selection to end-to-end implementation, cloud migration, integration, training, and ongoing managed support."
        stats={heroStats}
        accent="blue"
        ctaPrimary={{ text: 'Get Free ERP Consultation', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to an ERP Specialist', to: '/contact' }}
      />
      <ServiceBenefits
        label="The Cost of No ERP"
        title="The Cost of Operating Without a Proper ERP System"
        subtitle="Many Indian businesses are running on a patchwork of disconnected tools. The operational cost of this fragmentation is enormous — and a properly implemented ERP system eliminates every one of these problems."
        items={benefits}
        accent="blue"
      />
      <ServiceSolutions
        label="ERP Services"
        title="Xammer's ERP Implementation Services — Complete End-to-End Delivery"
        categories={solutions}
        accent="blue"
      />
      <ServiceProcess
        label="How We Work"
        title="Xammer's ERP Implementation Engagement Model"
        steps={processSteps}
        accent="blue"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Clients Say About Xammer's ERP Implementation Services"
        items={testimonials}
        accent="blue"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — ERP Implementation Services India"
        items={faqs}
        accent="blue"
      />
      <ServiceCTA
        title="Ready to Transform Your Business Operations"
        highlight="With the Right ERP?"
        body="A properly implemented ERP system is the single highest-ROI technology investment most businesses can make. It eliminates data silos, automates manual processes, and gives leadership the real-time visibility to make better decisions faster. Start with a free ERP consultation — we will assess your challenges, recommend the right platform, and show you what implementation looks like for your specific business."
        ctaText="Get My Free ERP Consultation"
        ctaTo="/contact"
        accent="blue"
        stats={[
          { value: '100%', label: 'Zero Data Loss' },
          { value: '4 months', label: 'Avg ROI Payback' },
          { value: '24x7', label: 'Post-Go-Live Support' },
        ]}
      />
    </main>
  </>
);

export default ERPPage;

import {
  Database, Globe, Shield, Zap, Settings,
  Users, DollarSign, Eye, Cloud,
} from 'lucide-react';
import SEO from '../../components/common/SEO';
import { ODOO_SEO } from '../../utils/seoData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceSolutions from '../../components/services/ServiceSolutions';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceTestimonials from '../../components/services/ServiceTestimonials';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const heroStats = [
  { value: 7,    suffix: 'M+', label: 'Businesses on Odoo', color: 'violet' },
  { value: 12,   suffix: ' wks', label: 'Typical Go-Live', color: 'blue' },
  { value: 50,   suffix: '%', label: 'TCO Reduction', color: 'teal' },
  { value: 100,  suffix: '%', label: 'MeitY-Compliant Hosting', color: 'green' },
];

const benefits = [
  { icon: <Database size={22} />, color: 'violet', title: 'All-in-One Business Platform', desc: 'Replace your patchwork of disconnected tools with one integrated platform where every module shares the same data. Sales order confirmed → inventory reserved. PO received → bill created automatically.' },
  { icon: <Settings size={22} />, color: 'blue',   title: 'Unmatched Flexibility', desc: 'Start with the modules you need and add more as you grow. Odoo\'s modular architecture and open-source customization framework let Xammer build exactly what you need — without the SAP or Oracle customization costs.' },
  { icon: <DollarSign size={22} />, color: 'teal', title: 'Price-to-Value', desc: 'Odoo Enterprise adds advanced modules including full Indian localization at a fraction of the per-user cost of SAP or Microsoft Dynamics. For Indian mid-market businesses needing enterprise ERP without enterprise pricing.' },
  { icon: <Users size={22} />,    color: 'green',  title: 'Modern UI — Users Actually Adopt It', desc: 'Odoo\'s modern, web-based interface is genuinely easy to use. Mobile apps for iOS and Android put ERP functionality in the hands of field teams and warehouse workers. Users adopt Odoo — which means your implementation delivers ROI.' },
  { icon: <Shield size={22} />,   color: 'violet', title: 'Built for Indian Compliance', desc: 'Full GST (CGST, SGST, IGST, CESS), TDS/TCS, e-invoicing with IRN generation, e-way bills, and Indian accounting standards. Xammer ensures your Odoo system is correctly configured for Indian compliance from day one.' },
  { icon: <Cloud size={22} />,    color: 'blue',   title: 'Data Sovereignty — India-Hosted', desc: 'Xammer deploys Odoo on MeitY-empanelled data center infrastructure. Your business data never leaves Indian jurisdiction — physically located within India, compliant with DPDPA, and auditable for regulatory inspection.' },
];

const solutions = [
  {
    icon: <DollarSign size={20} />, color: 'violet', title: 'Odoo Accounting & Finance',
    desc: 'Complete financial management with full Indian localization — GST, TDS/TCS, e-invoicing, bank reconciliation, and automated financial reporting.',
    items: ['GST — CGST, SGST, IGST, CESS', 'E-invoicing with IRN fetching from IRP', 'E-way bill generation', 'Bank reconciliation automation', 'India chart of accounts', 'Multi-currency and multi-company'],
  },
  {
    icon: <Users size={20} />, color: 'blue', title: 'Odoo Sales & CRM',
    items: ['Lead-to-cash pipeline management', 'Quotation and order management', 'Customer communication history', 'Sales analytics and forecasting', 'Marketing automation integration'],
  },
  {
    icon: <Database size={20} />, color: 'teal', title: 'Odoo Inventory & WMS',
    items: ['Multi-warehouse real-time tracking', 'Automated reorder rules', 'Lot and serial number tracking', 'Batch picking and put-away strategies', 'Barcode scanning support', 'FIFO, AVCO, standard price valuation'],
  },
  {
    icon: <Settings size={20} />, color: 'green', title: 'Odoo Manufacturing (MRP)',
    items: ['Bill of materials management', 'Production order planning', 'Work center scheduling', 'Shop floor control', 'Quality management', 'Actual vs. planned cost analysis'],
  },
  {
    icon: <Users size={20} />, color: 'violet', title: 'Odoo HR & Payroll',
    items: ['Employee master and leave management', 'Attendance with biometric integration', 'Indian payroll — PF, ESI, PT, IT', 'Salary slip and Form 16 generation', 'Performance appraisal workflows'],
  },
  {
    icon: <Globe size={20} />, color: 'blue', title: 'Odoo E-Commerce & Field Service',
    items: ['B2C and B2B online storefront', 'Razorpay, PayU, CCAvenue integration', 'Real-time inventory sync', 'Field service work order management', 'Mobile app for field technicians', 'Customer signature capture'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,      title: 'Discovery & Requirements', desc: 'Workshops with each department head to map current processes, pain points, data flows, and requirements. Gap analysis showing where standard Odoo meets your needs and where customization is required.', sub: 'Weeks 1–2' },
  { icon: <Cloud size={24} />,    title: 'Setup & Configuration', desc: 'Odoo environment provisioned on MeitY-compliant sovereign infrastructure. Indian localization modules installed. Module-by-module configuration with weekly reviews to catch misunderstandings early.', sub: 'Weeks 2–10' },
  { icon: <Database size={20} />, title: 'Data Migration & Integration', desc: 'Data extraction, cleansing, transformation, and staged migration with reconciliation at each step. API integrations for GST portal, bank feeds, payment gateways, and e-commerce platforms.', sub: 'Weeks 8–12' },
  { icon: <Zap size={24} />,      title: 'Training, Go-Live & Support', desc: 'Role-specific training for all user groups. Managed go-live with intensive hypercare — same-day issue resolution and daily check-ins. Ongoing managed support with helpdesk and compliance updates.', sub: 'Weeks 11–14+' },
];

const testimonials = [
  { quote: 'We went from running our business on Tally and Excel to having real-time inventory visibility across three warehouses. Month-end close now takes three days instead of three weeks. ROI was visible in the first quarter.', author: 'Suresh', role: 'MD, Distribution Company (Mumbai)' },
  { quote: 'Xammer set up GST, e-invoicing, TDS, and payroll correctly from day one — something our previous vendor had spent four months getting wrong. Our CA was happy with the books from the very first month.', author: 'Rekha', role: 'CFO, Manufacturing Company (Pune)' },
  { quote: 'Xammer built integrations that work flawlessly — orders flow from our website through Odoo to our logistics partner automatically, and the accounting entries post without any manual intervention.', author: 'Arun', role: 'CTO, E-Commerce Platform (Delhi)' },
  { quote: 'The data sovereignty aspect was non-negotiable for us — we work with government clients and the data has to stay in India on compliant infrastructure. Xammer\'s India-hosted Odoo deployment was the only option that met our compliance requirements.', author: 'Priya', role: 'Director, Government Technology Services' },
  { quote: 'When we had a complex manufacturing costing issue six months after go-live, their team understood both the Odoo technical side and our business process deeply enough to resolve it in hours. That level of expertise is rare.', author: 'Mohit', role: 'Head of Operations, Auto Parts Manufacturer' },
];

const faqs = [
  { q: 'What is Odoo and is it suitable for Indian businesses?', a: 'Odoo is an open-source, all-in-one business management platform covering accounting, CRM, sales, inventory, manufacturing, HR, project management, and more. It has full Indian localization — GST, TDS, e-invoicing, Indian payroll — and is used by businesses across industries in India at every scale, from 10-person startups to multi-thousand-employee enterprises.' },
  { q: 'How does Xammer\'s Odoo cloud hosting compare to Odoo Online (Odoo.com)?', a: 'Odoo.com (Odoo Online) hosts your data on Odoo\'s servers located outside India. For businesses that need Indian data sovereignty — whether due to regulatory requirements or security preference — this is a concern. Xammer\'s Odoo deployment on MeitY-empanelled infrastructure keeps your data in India, with full sovereignty guarantees. We also provide more customization flexibility than Odoo Online allows, and more responsive local support.' },
  { q: 'Can Odoo replace our current Tally system?', a: 'Yes. Tally replacement with Odoo is one of our most common implementation scenarios in India. We migrate your Tally masters (customers, suppliers, items, opening balances) to Odoo and configure Odoo accounting to replicate your current workflows — with the significant additional capabilities that Odoo brings beyond Tally\'s accounting focus.' },
  { q: 'Can Odoo handle our GST and e-invoicing requirements?', a: 'Yes, fully. Odoo with proper Indian localization handles all GST requirements: CGST/SGST/IGST/CESS calculation, multi-GSTIN companies, e-invoice generation with IRN fetching from the IRP portal, e-way bill generation, GSTR-1 data export, and purchase reconciliation with GSTR-2A/2B. Xammer keeps the compliance configuration current with CBIC notifications.' },
  { q: 'How long does Odoo implementation take?', a: 'For a standard implementation covering three to five modules (accounting, sales, inventory, and purchasing) for a 20–50 user business, Xammer typically completes implementation in eight to twelve weeks. Larger, more complex implementations with manufacturing, custom development, or extensive integration requirements take twelve to twenty weeks.' },
  { q: 'What happens when Odoo releases a new version — do you handle upgrades?', a: 'Yes. Odoo upgrades are included in Xammer\'s managed support plans. We manage the upgrade process: testing in a staging environment, validating custom module compatibility, performing the production upgrade during a scheduled maintenance window, and providing post-upgrade support.' },
  { q: 'Can you integrate Odoo with Shopify / WooCommerce / Amazon?', a: 'Yes. E-commerce integration is one of our most common Odoo integration requests. We build real-time integrations with Shopify, WooCommerce, Magento, Amazon Seller Central, Flipkart, and custom e-commerce platforms — syncing products, inventory, orders, shipping status, and customer data between Odoo and your online channels.' },
];

const OdooPage = () => (
  <>
    <SEO
      title={ODOO_SEO.title}
      description={ODOO_SEO.description}
      keywords={ODOO_SEO.keywords}
      canonical={ODOO_SEO.canonical}
      ogImage={ODOO_SEO.ogImage}
    />
    <main>
      <ServiceHero
        badge="Odoo Implementation Partner India"
        title="Odoo ERP Implementation —"
        highlight="Fast, Secure & Cloud-Native on India's Sovereign Cloud"
        subtitle="Odoo is one of the world's most powerful and flexible open-source ERP platforms — trusted by over 7 million businesses globally. Xammer delivers Odoo ERP Implementation across India with cloud-native deployment on MeitY-compliant sovereign infrastructure, full end-to-end implementation, deep customization, and 24x7 managed hosting."
        stats={heroStats}
        accent="violet"
        ctaPrimary={{ text: 'Get Free Odoo Demo', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to an Odoo Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Odoo"
        title="Why Indian Businesses Are Choosing Odoo ERP"
        subtitle="The Indian ERP market has historically been dominated by expensive, rigid platforms. Odoo has disrupted that model completely — and it is why over 7 million businesses worldwide have chosen it as their business management platform."
        items={benefits}
        accent="violet"
      />
      <ServiceSolutions
        label="Odoo Modules"
        title="Odoo Modules Xammer Implements for Indian Businesses"
        categories={solutions}
        accent="violet"
      />
      <ServiceProcess
        label="Implementation Process"
        title="How Xammer Implements Odoo — A Proven Process"
        steps={processSteps}
        accent="violet"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Clients Say About Xammer's Odoo Implementation"
        items={testimonials}
        accent="violet"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Odoo ERP Implementation India"
        items={faqs}
        accent="violet"
      />
      <ServiceCTA
        title="Ready to Transform Your Business With"
        highlight="Odoo on India's Sovereign Cloud?"
        body="Odoo's flexibility combined with Xammer's implementation expertise and India's sovereign cloud infrastructure creates a business management platform that is powerful, compliant, and built for the Indian market. Start with a free Odoo demo customized to your industry — 60 minutes, no obligation."
        ctaText="Get My Free Odoo Demo"
        ctaTo="/contact"
        accent="violet"
        stats={[
          { value: '7M+', label: 'Businesses on Odoo' },
          { value: '12 wks', label: 'Typical Go-Live' },
          { value: 'MeitY', label: 'Compliant Hosting' },
        ]}
      />
    </main>
  </>
);

export default OdooPage;

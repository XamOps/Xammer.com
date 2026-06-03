import {
  Cloud, Database, Zap, Globe, Lock,
  Server, TrendingDown, Map, BarChart2, Eye, Settings,
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
  { value: 41, suffix: '%', label: 'GCP Cost Reduction', color: 'blue' },
  { value: 1000, suffix: '+', label: 'Projects Delivered', color: 'teal' },
  { value: 200, suffix: '+', label: 'GCP Services Covered', color: 'green' },
  { value: 57, suffix: '%', label: 'Max CUD Discount', color: 'violet' },
];

const benefits = [
  { icon: <Zap size={22} />,       color: 'blue',   title: 'World-Class AI & ML', desc: 'Google invented TensorFlow, Kubernetes, and MapReduce. Vertex AI, BigQuery ML, AutoML, and the Gemini API give your business unmatched AI and data-driven product capabilities.' },
  { icon: <Globe size={22} />,     color: 'teal',   title: 'Most Advanced Global Network', desc: 'Google\'s private global fiber network spans every continent. Traffic travels on Google\'s own infrastructure — delivering lower latency, higher reliability, and better security than any competitor.' },
  { icon: <Lock size={22} />,      color: 'green',  title: 'Open Source at Heart', desc: 'Kubernetes, Istio, Knative, TensorFlow, Apache Beam — Google contributes more to open-source cloud technology than any other major provider. No vendor lock-in for engineering teams that value portability.' },
  { icon: <Database size={22} />,  color: 'violet', title: 'Unmatched Data Analytics', desc: 'BigQuery queries petabytes in seconds with serverless, pay-per-query pricing. Combined with Looker, Dataflow, and Pub/Sub — Google Cloud gives data teams a complete, integrated analytics platform.' },
  { icon: <Server size={22} />,    color: 'blue',   title: 'Kubernetes-Native Architecture', desc: 'Google created Kubernetes and operates GKE — the most mature, feature-rich managed Kubernetes service. Containerized applications, microservices, and cloud-native platforms perform best on GCP.' },
  { icon: <BarChart2 size={22} />, color: 'teal',   title: 'Google Workspace Integration', desc: 'Native integration across Gmail, Drive, Meet, Calendar, and Docs — enabling intelligent workflows, Duet AI features, and unified identity management that simplifies hybrid work environments.' },
];

const solutions = [
  {
    icon: <Cloud size={20} />, color: 'blue', title: 'Cloud Transformation',
    desc: 'GCP cloud maturity assessment, target architecture design, and wave-based migration using Google\'s PLAN → DESIGN → MIGRATE → OPERATE methodology.',
    items: ['Migrate to Virtual Machines — lift-and-shift', 'Database Migration Service', 'GKE and Cloud Run modernization', 'Cloud Spanner global databases'],
  },
  {
    icon: <Map size={20} />, color: 'teal', title: 'Google Maps Platform',
    desc: 'Location intelligence for logistics, delivery, retail, real estate, and field services — as a fully managed solution.',
    items: ['Route optimization — reduce fuel costs 28%+', 'Real-time fleet tracking dashboards', 'Geofencing and location triggers', 'Address validation and geocoding', 'Store locator and Places integration'],
  },
  {
    icon: <TrendingDown size={20} />, color: 'green', title: 'GCP FinOps',
    items: ['Committed Use Discounts — up to 57% savings', 'Sustained Use Discount optimization', 'BigQuery cost and slot management', 'Cloud Storage lifecycle tiering', 'Network egress cost optimization'],
  },
  {
    icon: <Database size={20} />, color: 'violet', title: 'Data & Analytics',
    items: ['BigQuery — petabyte-scale data warehouse', 'Dataflow — stream and batch processing', 'Pub/Sub — real-time event streaming', 'Cloud Composer — Apache Airflow managed', 'Looker / Looker Studio — BI dashboards'],
  },
  {
    icon: <Zap size={20} />, color: 'blue', title: 'AI & Machine Learning',
    items: ['Vertex AI — end-to-end MLOps platform', 'AutoML — no-code model training', 'BigQuery ML — in-warehouse models', 'Gemini API — generative AI applications', 'Document AI and Vision API'],
  },
  {
    icon: <Lock size={20} />, color: 'teal', title: 'Security & Identity',
    items: ['Cloud IAM — fine-grained access control', 'Security Command Center — unified posture', 'BeyondCorp Zero Trust access', 'VPC Service Controls — data perimeter', 'Chronicle SIEM — threat detection'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,     title: 'Free GCP Assessment', desc: 'Infrastructure inventory, workload profiles, cost analysis, security posture review, and cloud readiness scoring. Detailed report with prioritized recommendations within one week.' },
  { icon: <Settings size={24} />, title: 'Architecture & Roadmap', desc: 'GCP architects design your target-state architecture tailored to workloads, performance requirements, compliance obligations, and budget — with phased migration roadmap.' },
  { icon: <Cloud size={24} />,   title: 'Migration & Modernization', desc: 'Agile migration execution — workloads running in GCP from the first month, with Cloud Run and GKE modernization applied progressively across waves.' },
  { icon: <TrendingDown size={24} />, title: 'Ongoing Optimization', desc: 'Continuous FinOps governance, committed use planning, BigQuery optimization, and monthly cost reviews ensuring your GCP investment keeps delivering increasing value.' },
];

const testimonials = [
  { quote: 'Xammer understood our infrastructure needs, data requirements, and modernization goals simultaneously. The BigQuery implementation transformed how our data science team operates.', author: 'Arun', role: 'Chief Data Officer, Series-B Analytics Startup' },
  { quote: 'Xammer\'s Google Maps Platform implementation reduced our delivery route costs by 28% in the first quarter. Their location services team is genuinely best-in-class.', author: 'Nisha', role: 'VP Operations, Logistics Platform' },
  { quote: 'Before Xammer, our GCP bill was completely out of control. In the first month, they cut our monthly GCP spend by 41%. The ROI on their fees is extraordinary.', author: 'Kabir', role: 'CFO, SaaS Company' },
  { quote: 'What was a brittle monolith is now a microservices platform on GKE that deploys dozens of times per day. Our engineering productivity doubled and infrastructure costs halved.', author: 'Deepa', role: 'CTO, EdTech Platform' },
  { quote: 'The Vertex AI implementation Xammer delivered gave us AI capabilities we never thought were accessible to a company our size.', author: 'Rohan', role: 'Head of Product, HealthTech Company' },
];

const faqs = [
  { q: 'Why should I choose Google Cloud over AWS or Azure?', a: 'Google Cloud is the strongest choice for organizations with data-intensive workloads, AI/ML requirements, Kubernetes-based architectures, or Google Workspace integration needs. BigQuery is widely considered the best cloud data warehouse. GKE is the most mature managed Kubernetes service. That said, the right cloud depends on your specific workloads — Xammer provides vendor-agnostic advice and will recommend the platform that genuinely serves your business best.' },
  { q: 'Is Xammer a certified Google Cloud Partner?', a: 'Yes. Xammer is a certified Google Cloud Partner with expertise in infrastructure, application modernization, data and analytics, and location services. Our team holds active certifications across Professional Cloud Architect, Data Engineer, DevOps Engineer, and Security Engineer tracks.' },
  { q: 'What is Google Maps Platform and what can it do for my business?', a: 'Google Maps Platform is a suite of APIs that lets you embed maps, routes, and location intelligence into your applications. For logistics companies, it enables route optimization. For retailers, it powers store locators. For field service businesses, it tracks technician locations in real time. Xammer designs, builds, and manages Google Maps Platform integrations as a fully managed service.' },
  { q: 'Can you migrate our existing AWS or Azure workloads to Google Cloud?', a: 'Yes. Xammer has delivered multi-cloud migration projects moving workloads from AWS and Azure to Google Cloud. We use Migrate to Virtual Machines for compute, Database Migration Service for databases, and Transfer Service for object storage. We also design hybrid and multi-cloud architectures using Anthos where clients want to maintain workloads across providers.' },
  { q: 'Can you implement BigQuery for our data warehouse needs?', a: 'Absolutely — BigQuery implementation is one of our most common data engagements. We design your BigQuery architecture, build ingestion pipelines using Cloud Dataflow or Data Fusion, implement data models optimized for query performance and cost, integrate Looker for visualization, and provide ongoing BigQuery performance and cost optimization.' },
  { q: 'How does Google Cloud pricing compare to AWS and Azure?', a: 'Google Cloud is often most competitively priced for compute-intensive workloads, thanks to Sustained Use Discounts (automatically applied without reservations), Committed Use Discounts up to 57%, and per-second billing. BigQuery\'s serverless pricing is particularly cost-effective for variable analytics workloads.' },
];

const GoogleCloudPage = () => (
  <>
    <SEO
      title="Google Cloud Managed Services India | Certified GCP Partner | Xammer"
      description="Xammer is a certified Google Cloud Partner in India. We deliver GCP cloud transformation, BigQuery data warehousing, Google Maps Platform, and cost optimization. Free GCP assessment."
      keywords="Google Cloud managed services India, Google Cloud Partner India, GCP consulting Delhi, Google Maps Platform partner, GCP cost optimization India"
    />
    <main>
      <ServiceHero
        badge="Certified Google Cloud Partner"
        title="Google Cloud Managed Services —"
        highlight="Certified GCP Partner for Enterprise Transformation"
        subtitle="Xammer is a certified Google Cloud Partner in India delivering comprehensive cloud transformation, managed services, cost optimization, and digital solutions on Google Cloud Platform. Our GCP-certified engineers bring commercial and technical depth to help businesses leverage Google's infrastructure, AI, data, and developer platform for measurable competitive advantage."
        stats={heroStats}
        accent="teal"
        ctaPrimary={{ text: 'Get Free GCP Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a Google Cloud Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Google Cloud"
        title="Why Google Cloud is the Right Platform for Forward-Thinking Enterprises"
        subtitle="Google Cloud is built on the same infrastructure that powers Google Search, YouTube, Gmail, and Google Maps — handling billions of requests every single day."
        items={benefits}
        accent="teal"
      />
      <ServiceSolutions
        label="Our GCP Services"
        title="Xammer's Google Cloud Managed Services — Everything Your Business Needs"
        categories={solutions}
        accent="teal"
      />
      <ServiceProcess
        label="How We Work"
        title="Xammer's GCP Engagement Model"
        steps={processSteps}
        accent="teal"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Clients Say About Xammer's Google Cloud Services"
        items={testimonials}
        accent="teal"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Google Cloud Managed Services India"
        items={faqs}
        accent="teal"
      />
      <ServiceCTA
        title="Ready to Unlock the Full Power of"
        highlight="Google Cloud for Your Business?"
        body="Xammer's Google Cloud team is ready to assess your environment, design your transformation roadmap, and deliver results — from first migration to full cloud-native operations with BigQuery, Vertex AI, and Google Maps Platform."
        ctaText="Start My Free GCP Assessment"
        ctaTo="/contact"
        accent="teal"
        stats={[
          { value: '41%', label: 'Avg Cost Reduction' },
          { value: '57%', label: 'Max CUD Discount' },
          { value: '24x7', label: 'Managed Support' },
        ]}
      />
    </main>
  </>
);

export default GoogleCloudPage;

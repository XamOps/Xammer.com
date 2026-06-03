import {
  Zap, Globe, Database, Settings, Cloud, Shield,
  TrendingUp, Users, RefreshCw, BarChart2, Cpu, Eye,
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
  { value: 40, suffix: '%', label: 'Operational Cost Reduction', color: 'violet' },
  { value: 5,  suffix: 'x', label: 'Faster Development Velocity', color: 'blue' },
  { value: 1000, suffix: '+', label: 'Transformations Delivered', color: 'teal' },
  { value: 90, suffix: ' Days', label: 'First Quick Wins', color: 'green' },
];

const benefits = [
  { icon: <TrendingUp size={22} />, color: 'violet', title: 'Business Outcomes First', desc: 'We start with business outcomes, not technology choices. Every phase has defined wins — 70% of transformation failures come from technology-first thinking without business alignment. Xammer does it differently.' },
  { icon: <RefreshCw size={22} />, color: 'blue',   title: 'Iterative 90-Day Phases', desc: 'Transformation delivered in sprint-based phases. At the end of each phase, your stakeholders see working software, deployed infrastructure, or automated processes — not just status updates.' },
  { icon: <Users size={22} />,     color: 'teal',   title: 'Embedded Partnership', desc: 'Xammer embeds with your internal teams — not an external vendor throwing deliverables over a wall. We understand your culture, constraints, and growth trajectory before recommending solutions.' },
  { icon: <Globe size={22} />,     color: 'green',  title: 'End-to-End Delivery', desc: 'Strategy and consulting, architecture design, engineering implementation, and ongoing managed operations — all under one roof. No "it looked good on paper" problem.' },
  { icon: <Cpu size={22} />,       color: 'violet', title: 'AI as a Practical Tool', desc: 'We deploy AI that works in your business — demand forecasting, churn prediction, fraud detection, document processing, LLM deployment. Not proof-of-concepts that never reach production.' },
  { icon: <Shield size={22} />,    color: 'blue',   title: 'Change Management Included', desc: 'Technology delivered but not adopted is transformation value wasted. Xammer invests in structured change management — stakeholder communications, training programs, and adoption tracking metrics.' },
];

const solutions = [
  {
    icon: <Cloud size={20} />, color: 'violet', title: 'Cloud Infrastructure Transformation',
    desc: 'Migrating from on-premise or legacy cloud to modern, cloud-native infrastructure on AWS, Azure, GCP, or Yotta — automated, secure, cost-optimized, and scalable from day one.',
    items: ['Multi-cloud architecture design', 'DPDPA, RBI, SEBI, IRDAI compliance', 'Infrastructure as Code with Terraform', 'Zero-downtime migration execution'],
  },
  {
    icon: <Settings size={20} />, color: 'blue', title: 'Application Modernization',
    items: ['Containerization — Docker and Kubernetes', 'Microservices decomposition from monoliths', 'Serverless refactoring for event-driven workloads', 'API-first architecture redesign', 'Database modernization to cloud-native'],
  },
  {
    icon: <RefreshCw size={20} />, color: 'teal', title: 'DevOps & CI/CD Transformation',
    items: ['Git-based source control and branching', 'Automated CI/CD (GitHub Actions, Azure DevOps)', 'Infrastructure as Code (Terraform, CloudFormation)', 'Blue-green and canary deployment strategies', 'Feature flag frameworks for controlled rollout'],
  },
  {
    icon: <Database size={20} />, color: 'green', title: 'Data & Analytics Transformation',
    items: ['Modern data warehouse / data lakehouse (Snowflake, BigQuery, Redshift)', 'Real-time streaming (Kafka, Kinesis, Event Hubs)', 'ETL/ELT pipelines (dbt, Airflow, AWS Glue)', 'Power BI, Tableau, Looker dashboards', 'Self-service analytics enablement'],
  },
  {
    icon: <Cpu size={20} />, color: 'violet', title: 'AI & Automation Transformation',
    items: ['Predictive analytics for demand, churn, fraud', 'NLP for customer service and document processing', 'LLM deployment for internal knowledge assistants', 'Computer vision for quality control', 'MLOps infrastructure for production AI'],
  },
  {
    icon: <Globe size={20} />, color: 'blue', title: 'Business Process Automation',
    items: ['Finance — invoice processing, reconciliation', 'HR and onboarding workflows', 'Customer onboarding and KYC automation', 'Supply chain and procurement processes', 'Compliance reporting and audit evidence collection'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,       title: 'Discover & Assess', desc: 'Technology inventory, business process analysis, digital maturity scoring across 6 dimensions, and prioritized transformation opportunity identification. Free and no-obligation.', sub: 'Week 1–2' },
  { icon: <BarChart2 size={24} />, title: 'Strategy & Roadmap', desc: 'Target architecture design, phased 12–24 month transformation plan, business case development with ROI modeling, technology selection, and change management strategy.', sub: 'Week 3–4' },
  { icon: <Settings size={24} />, title: 'Execute & Deliver', desc: 'Sprint-based delivery with working software every two weeks. Cloud infrastructure build-out, application migration and modernization, data platform build, and process automation implementation.', sub: '3–18 Months' },
  { icon: <TrendingUp size={24} />, title: 'Operate & Optimize', desc: 'Managed cloud operations, adoption tracking, continuous optimization reviews, and an ongoing innovation pipeline. Transformation doesn\'t end at go-live — it becomes an organizational capability.', sub: 'Ongoing' },
];

const testimonials = [
  { quote: 'Xammer did not just modernize our technology — they transformed how our entire organization thinks about technology. Eighteen months later, we are consistently shipping features that previously would have taken two years.', author: 'Kavita', role: 'CEO, SaaS Platform' },
  { quote: 'The roadmap they built was genuinely aligned to our business priorities — and every milestone they committed to, they delivered.', author: 'Sanjay', role: 'CTO, Manufacturing Company' },
  { quote: 'The data platform Xammer built completely changed our decision-making process. We went from monthly reports that were three weeks late to real-time dashboards that every department head uses daily.', author: 'Neeraj', role: 'Chief Digital Officer, Retail Chain' },
  { quote: 'Xammer\'s process automation work eliminated 60% of our manual data entry operations. The transformation paid for itself in four months through operational efficiency alone.', author: 'Ananya', role: 'CFO, Healthcare Services Company' },
  { quote: 'Xammer is still with us two years later, continuously improving what they built and making sure the transformation keeps delivering value.', author: 'Vijay', role: 'VP Operations, Logistics Platform' },
];

const faqs = [
  { q: 'How long does a digital transformation project take?', a: 'Transformation is not a project with a single end date — it is an ongoing journey. Phase 1 (quick wins and foundational infrastructure) is typically 90 days. Phase 2 (core application and process modernization) is three to six months. Phase 3 (advanced capabilities — AI, advanced analytics, full cloud-native architecture) is six to eighteen months. You see measurable value starting in month one — not after a multi-year program.' },
  { q: 'We have tried digital transformation before and it failed. Why would working with Xammer be different?', a: 'Most transformation failures come down to four causes: technology-first thinking without business alignment, big-bang delivery without iterative value, insufficient change management, and poor execution. Xammer\'s model explicitly addresses all four: we start with business outcomes, deliver in 90-day phases with defined wins, invest in change management, and have a track record of over 1,000 successful projects.' },
  { q: 'What is legacy modernization and does my business need it?', a: 'Legacy modernization refers to updating or replacing outdated technology systems — often 10–20-year-old applications — with modern, cloud-native alternatives. Signs you need it: development velocity is slow because engineers fear changing legacy code; recruitment is difficult because developers don\'t want to work on the technology; system performance or reliability is poor; integrating with modern tools is costly and complex.' },
  { q: 'Can you transform just one part of our business, or does it need to be everything at once?', a: 'Absolutely — and in fact, starting focused is usually the right approach. Xammer typically recommends beginning with the highest-impact, most tractable opportunity rather than attempting an organization-wide transformation simultaneously. A successful first phase builds internal confidence, demonstrates ROI, and creates a template for subsequent phases.' },
  { q: 'How do you handle the change management aspect of transformation?', a: 'Xammer\'s engagement model includes structured change management: stakeholder communication plans, end-user training programs, adoption tracking metrics, and feedback loops that identify and address adoption blockers early. Technology delivered but not adopted is transformation value wasted — so change management is not an afterthought in our engagements.' },
  { q: 'What is your approach to AI as part of digital transformation?', a: 'We treat AI as a practical business tool, not a technology trend to chase. For each client, we identify the specific AI use cases that deliver measurable business value in their context — demand forecasting, customer churn prediction, document processing automation, quality control, or customer service automation — and implement them in production. We do not build AI proof-of-concepts that never reach production.' },
  { q: 'How much does digital transformation cost?', a: 'Transformation investment varies enormously based on the scope of change, the size of your organization, and your starting point. What is consistent is the return: organizations that execute digital transformation effectively consistently reduce operational costs by 20–40%, increase development velocity by 3–5x, and unlock revenue opportunities not possible on legacy infrastructure. Xammer builds a detailed business case before any commitment.' },
];

const DigitalTransformationPage = () => (
  <>
    <SEO
      title="Digital Transformation Services India | Cloud-Native Modernization | Xammer"
      description="Xammer is India's trusted Digital Transformation Services partner. We help enterprises modernize legacy systems, automate processes, and adopt AI, cloud, and DevOps for competitive advantage. Free assessment."
      keywords="digital transformation services India, cloud digital transformation consulting Delhi, legacy system modernization India, enterprise digital transformation partner, IT modernization services India"
    />
    <main>
      <ServiceHero
        badge="1,000+ Transformations Delivered"
        title="Digital Transformation Services —"
        highlight="Modernize, Automate & Compete in the Digital Economy"
        subtitle="Digital transformation is no longer a choice for Indian enterprises — it is the difference between leading your market and watching competitors pass you by. Xammer is India's trusted Digital Transformation Services partner, helping organizations re-imagine how they operate, deliver value to customers, and use technology to create sustainable competitive advantage."
        stats={heroStats}
        accent="violet"
        ctaPrimary={{ text: 'Start Your Transformation', to: '/contact' }}
        ctaSecondary={{ text: 'Talk to a Transformation Expert', to: '/contact' }}
      />
      <ServiceBenefits
        label="Our Approach"
        title="Why 70% of Transformations Fail — And How Xammer Does It Differently"
        subtitle="Industry research consistently shows that 70% of digital transformation initiatives fail to achieve their objectives. The reasons are well-documented: technology-first thinking, big-bang implementation, lack of change management, and poor vendor execution."
        items={benefits}
        accent="violet"
      />
      <ServiceSolutions
        label="Transformation Service Areas"
        title="What Xammer Transforms — Service Areas & Capabilities"
        categories={solutions}
        accent="violet"
      />
      <ServiceProcess
        label="Our Framework"
        title="The Xammer Digital Transformation Framework — A Proven Path to Results"
        steps={processSteps}
        accent="violet"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Our Clients Say About Xammer's Digital Transformation Services"
        items={testimonials}
        accent="violet"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Digital Transformation Services India"
        items={faqs}
        accent="violet"
      />
      <ServiceCTA
        title="Your Digital Transformation Starts"
        highlight="With a Conversation"
        body="Whether you are just beginning to think about transformation or have already started and need a better partner to get it across the finish line — Xammer is ready to help. Our digital transformation practice has guided over 1,000 organizations through the complexity of technology change."
        ctaText="Start My Transformation Journey"
        ctaTo="/contact"
        accent="violet"
        stats={[
          { value: '1,000+', label: 'Projects Delivered' },
          { value: '90 Days', label: 'First Quick Wins' },
          { value: '3–5x', label: 'Dev Velocity Increase' },
        ]}
      />
    </main>
  </>
);

export default DigitalTransformationPage;

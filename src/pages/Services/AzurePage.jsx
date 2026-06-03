import {
  Cloud, Shield, Database, Server, Zap, Globe,
  TrendingDown, Settings, Eye, RefreshCw,
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
  { value: 55, suffix: '%', label: 'Average Cost Reduction', color: 'blue' },
  { value: 1000, suffix: '+', label: 'Projects Delivered', color: 'violet' },
  { value: 10,  suffix: '+', label: 'Years Cloud Experience', color: 'teal' },
  { value: 95,  suffix: '%', label: 'Fortune 500 Trust Azure', color: 'green' },
];

const benefits = [
  { icon: <Server size={22} />,     color: 'blue',   title: 'Seamless Hybrid Cloud', desc: 'Azure Arc extends management to on-premise servers and edge locations. ExpressRoute delivers dedicated private connectivity. The most practical path for organizations with existing on-premise infrastructure.' },
  { icon: <Globe size={22} />,      color: 'violet', title: 'Deep Microsoft Ecosystem', desc: 'Native integration with Office 365, Teams, SharePoint, Active Directory, SQL Server, Dynamics 365, and Power Platform. Migrating to Azure often unlocks licensing benefits and consolidates vendor relationships.' },
  { icon: <Shield size={22} />,     color: 'teal',   title: 'Enterprise Security & Compliance', desc: '90+ compliance certifications including ISO 27001, SOC 2, PCI DSS, HIPAA, and India-specific MEITY requirements. Microsoft Sentinel delivers intelligent SIEM/SOAR capabilities.' },
  { icon: <Zap size={22} />,        color: 'green',  title: 'AI & Data at Enterprise Scale', desc: 'Azure OpenAI Service gives enterprises secure access to GPT-4. Azure Synapse Analytics unifies big data and warehousing. Azure ML provides end-to-end MLOps for building and deploying models at scale.' },
  { icon: <TrendingDown size={22} />,color: 'orange', title: 'Azure Hybrid Benefit Savings', desc: 'For organizations with Microsoft 365 or Windows Server licenses, Azure Hybrid Benefit reduces VM costs by up to 40%. Combined with Reserved Instances and Savings Plan — achieving 35–55% total cost reduction.' },
  { icon: <Settings size={22} />,   color: 'blue',   title: 'DevOps & CI/CD Ready', desc: 'Azure DevOps, GitHub Actions, Azure Pipelines, and Azure Arc for multi-cloud management give engineering teams a complete DevOps platform tightly integrated with Azure infrastructure.' },
];

const solutions = [
  {
    icon: <Cloud size={20} />, color: 'blue', title: 'Azure Cloud Advisory',
    desc: 'Current-state assessment, TCO analysis, Azure Hybrid Benefit audit, target architecture design, and 12–18 month transformation roadmap.',
    items: ['Azure Migrate — discovery and dependency mapping', 'Microsoft AMM Programme funding support', 'Azure Landing Zone best practices', 'Licensing optimization review'],
  },
  {
    icon: <Server size={20} />, color: 'violet', title: 'Azure Migration Services',
    desc: 'Enterprise workload migrations with proven tooling and zero-downtime strategies.',
    items: ['SQL Server, SharePoint, Exchange migrations', 'SAP HANA on Azure', 'Oracle workloads on Azure', 'Azure Site Recovery for zero-downtime cutover'],
  },
  {
    icon: <RefreshCw size={20} />, color: 'teal', title: 'Application Modernization',
    items: ['.NET apps to Azure App Service / Container Apps', 'Microservices on AKS', 'Serverless with Azure Functions & Logic Apps', 'API Management with Azure APIM', 'Database migration to Azure SQL MI'],
  },
  {
    icon: <Database size={20} />, color: 'green', title: 'Azure Data & AI',
    items: ['Azure Synapse Analytics — unified data warehouse', 'Azure Databricks — Spark processing', 'Azure OpenAI Service — GPT-4 deployment', 'Power BI — executive dashboards', 'Azure Purview — data governance'],
  },
  {
    icon: <TrendingDown size={20} />, color: 'orange', title: 'Azure FinOps',
    items: ['Reserved Instance & Savings Plan optimization', 'Azure Hybrid Benefit maximization', 'Orphaned resource cleanup automation', 'Tagging strategy and chargeback reporting', 'Budget alerts and cost anomaly detection'],
  },
  {
    icon: <Eye size={20} />, color: 'blue', title: '24x7 Managed Operations',
    items: ['Azure Monitor — custom alerting and dashboards', 'Patch management across all VM workloads', 'Backup management and DR testing', 'Microsoft Defender for Cloud integration', 'Monthly business reviews and reporting'],
  },
];

const processSteps = [
  { icon: <Eye size={24} />,     title: 'Free Azure Assessment', desc: 'Current-state inventory, TCO analysis, cloud readiness scoring, and Azure Hybrid Benefit audit. Detailed recommendations at zero cost — including available AMM funding.' },
  { icon: <Settings size={24} />, title: 'Strategy & Roadmap',  desc: '12–18 month transformation roadmap with Microsoft incentive identification, licensing review, and phased workload migration plan.' },
  { icon: <Cloud size={24} />,   title: 'Migration & Modernization', desc: 'Wave-based migration execution with rigorous testing, zero-downtime cutover strategies, and immediate post-migration performance validation.' },
  { icon: <Shield size={24} />,  title: '24x7 Managed Operations', desc: 'Continuous monitoring, proactive incident detection, Security Center management, FinOps governance, and monthly transparency reviews.' },
];

const testimonials = [
  { quote: 'Xammer identified Azure Hybrid Benefit opportunities we were missing that cut our VM costs by 35% from day one. The migration itself was flawless — zero production downtime.', author: 'Rahul', role: 'Head of IT, Manufacturing Enterprise' },
  { quote: 'The AMM funding Xammer helped us access covered nearly 40% of our migration costs. No other partner navigated our Microsoft licensing complexity this well.', author: 'Meera', role: 'CTO, FinTech Company' },
  { quote: 'After struggling with two other Azure partners, finding Xammer felt like finally finding an engineering team that speaks our language. They rebuilt our architecture and cut our bill by half.', author: 'Suresh', role: 'VP Technology, E-Commerce Platform' },
  { quote: 'Their Azure Data Platform implementation transformed how our leadership team accesses business insights — what used to take three days now takes three minutes.', author: 'Dhirendra', role: 'CTO, Parchaa AI' },
  { quote: 'Xammer\'s Azure managed services team monitors our environment 24x7 and has caught and resolved issues before we even knew there was a problem.', author: 'Priyesh', role: 'Co-Founder & CTO, OnFinance' },
];

const faqs = [
  { q: 'What is an Azure Expert MSP and why does it matter?', a: 'Azure Expert MSP is Microsoft\'s highest designation for managed service providers. To earn it, a partner must demonstrate deep technical expertise, customer satisfaction above Microsoft\'s threshold, and adherence to Microsoft\'s operational standards. Fewer than 100 partners globally hold this designation. When you work with an Azure Expert MSP like Xammer, you know you are getting a partner Microsoft itself has vetted and trusts.' },
  { q: 'Can Xammer help us reduce costs if we are already on Azure?', a: 'Absolutely. We conduct a FinOps assessment of your existing Azure environment, identify rightsizing opportunities, Reserved Instance gaps, unused resources, and licensing optimization potential. Most clients already on Azure see 25–45% cost reduction within 90 days of a Xammer FinOps engagement.' },
  { q: 'How does the Azure Migration and Modernisation Programme funding work?', a: 'Microsoft provides funding through AMM to offset the cost of cloud migrations delivered by qualified Azure Expert MSP partners. The funding can cover assessment costs, migration execution, and training. Eligibility depends on your Microsoft agreement status and the workloads being migrated. Xammer\'s commercial team navigates this process on your behalf — most clients are surprised by how much funding is available.' },
  { q: 'Do you support hybrid environments (on-premise + Azure)?', a: 'Yes. Hybrid is one of Azure\'s greatest strengths, and one of Xammer\'s core competencies. We design and manage Azure Arc-based hybrid environments, implement Azure Stack HCI for edge deployments, configure ExpressRoute for dedicated connectivity, and manage workloads spanning on-premise and Azure seamlessly.' },
  { q: 'Can you migrate SAP and Oracle workloads to Azure?', a: 'Yes. Xammer has delivered SAP HANA on Azure migrations and SAP S/4HANA implementations for enterprise clients. We are also experienced in Oracle Database and Oracle E-Business Suite migrations to Azure using OCI-Azure interconnect architectures.' },
  { q: 'What is JioAzure and should my business use it?', a: 'JioAzure is a collaboration between Microsoft and Reliance Jio that brings Azure infrastructure to India with local data hosting. If your business is subject to Indian data localization requirements (banking, healthcare, government, insurance), or if the majority of your users are in India, JioAzure is worth serious consideration. Xammer evaluates your compliance and performance requirements and recommends the right Azure region strategy.' },
  { q: 'Do you provide 24x7 Azure support?', a: 'Yes. Every Xammer Azure managed services engagement includes 24x7 monitoring and SRE support. P1 incidents receive a response within 15 minutes around the clock, including weekends and public holidays.' },
];

const AzurePage = () => (
  <>
    <SEO
      title="Microsoft Azure Managed Services India | Azure Expert MSP | Xammer"
      description="Xammer is a Microsoft Azure Expert MSP in India. We architect, migrate, and manage Azure environments — reducing costs by 35–55%, unlocking AMM funding, and delivering 24x7 managed operations."
      keywords="Microsoft Azure managed services India, Azure consulting partner India, Azure Expert MSP Delhi, Azure cloud migration India, JioAzure partner"
    />
    <main>
      <ServiceHero
        badge="Microsoft Azure Expert MSP Partner"
        title="Microsoft Azure Managed Services —"
        highlight="Your Certified Azure Expert Partner in India"
        subtitle="Xammer is a Microsoft Azure Expert MSP and trusted Azure commercial and technical partner in India. We help enterprises architect, migrate, manage, and continuously optimize their Azure environments — reducing costs, accelerating digital transformation, and empowering your teams with Microsoft's evolving cloud platform."
        stats={heroStats}
        accent="blue"
        ctaPrimary={{ text: 'Get Free Azure Assessment', to: '/contact' }}
        ctaSecondary={{ text: 'Speak to an Azure Architect', to: '/contact' }}
      />
      <ServiceBenefits
        label="Why Azure"
        title="Why Leading Enterprises Choose Microsoft Azure"
        subtitle="Trusted by over 95% of Fortune 500 companies, Azure delivers unmatched hybrid cloud capabilities, deep Microsoft 365 integration, best-in-class security tools, and a rapidly expanding AI portfolio."
        items={benefits}
        accent="blue"
      />
      <ServiceSolutions
        label="Our Azure Services"
        title="What Xammer Delivers as Your Azure Managed Services Partner"
        categories={solutions}
        accent="blue"
      />
      <ServiceProcess
        label="How We Work"
        title="Xammer's Azure Engagement Model"
        steps={processSteps}
        accent="blue"
      />
      <ServiceTestimonials
        label="Client Reviews"
        title="What Clients Say About Xammer's Azure Managed Services"
        items={testimonials}
        accent="blue"
      />
      <ServiceFAQ
        label="FAQ"
        title="Frequently Asked Questions — Azure Managed Services India"
        items={faqs}
        accent="blue"
      />
      <ServiceCTA
        title="Start Your Azure Transformation with"
        highlight="India's Most Trusted Azure Expert MSP"
        body="Whether you are planning your first Azure migration, struggling with uncontrolled costs, or looking for a partner to manage your Azure environment 24x7 — Xammer has the expertise, the certifications, and the proven track record to deliver results."
        ctaText="Get My Free Azure Assessment"
        ctaTo="/contact"
        accent="blue"
        stats={[
          { value: '35–55%', label: 'Cost Reduction' },
          { value: 'AMM', label: 'Migration Funding' },
          { value: '24x7', label: 'SRE Support' },
        ]}
      />
    </main>
  </>
);

export default AzurePage;

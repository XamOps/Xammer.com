import SEO from '../../components/common/SEO';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import StatsBar from '../../components/home/StatsBar/StatsBar';
import USPSection from '../../components/home/USPSection/USPSection';
import WhatWeOffer from '../../components/home/WhatWeOffer/WhatWeOffer';
// import FounderMessage from '../../components/home/FounderMessage/FounderMessage';
import PartnerLogos from '../../components/home/PartnerLogos/PartnerLogos';
import EventsSection from '../../components/home/EventsSection/EventsSection';
import CustomerExperience from '../../components/home/CustomerExperience/CustomerExperience';
import ReviewsSection from '../../components/home/ReviewsSection/ReviewsSection';
import WhyNumberOne from '../../components/home/WhyNumberOne/WhyNumberOne';
import {
  HOME_SEO,
  organizationSchema,
  websiteSchema,
  serviceSchemas,
} from '../../utils/seoData';

const HomePage = () => (
  <>
    <SEO
      title={HOME_SEO.title}
      description={HOME_SEO.description}
      keywords={HOME_SEO.keywords}
      canonical={HOME_SEO.canonical}
      ogImage={HOME_SEO.ogImage}
      schemas={[organizationSchema, websiteSchema, ...serviceSchemas]}
    />
    <main id="main-content">
      <HeroSection />
      <StatsBar />
      <USPSection />
      <WhatWeOffer />
      {/* <FounderMessage /> */}
      <PartnerLogos />
      <EventsSection />
      <CustomerExperience />
      <ReviewsSection />
      <WhyNumberOne />
    </main>
  </>
);

export default HomePage;

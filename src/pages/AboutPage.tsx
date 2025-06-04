import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import AboutSection from '../components/home/AboutSection';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Wokxstation</title>
        <meta name="description" content="Learn about Wokxstation's mission to provide high-impact remote work training and job placement." />
      </Helmet>
      
      <Section background="light" className="pt-28">
        <SectionHeader
          title="About Wokxstation"
          subtitle="Changing lives through remote work opportunities and accessible skills training."
        />
        
        <div className="prose prose-lg mx-auto">
          <p>
            At Wokxstation, we believe that meaningful work shouldn't be limited by location. Our mission is to provide high-impact training in essential remote skills, preparing people from all backgrounds for real jobs in today's digital economy.
          </p>
          
          <p>
            Founded in 2023, we've already helped hundreds of individuals transition to rewarding remote careers, creating life-changing opportunities regardless of their geographical location.
          </p>
        </div>
      </Section>
      
      <AboutSection />
      
      {/* Additional about page content would go here */}
    </>
  );
};

export default AboutPage;
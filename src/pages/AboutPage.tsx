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
        
        <div className="prose prose-lg mx-auto text-center">
          <p>
          The Wokxstation is a mission-driven organization committed to empowering Nigerians by connecting them to global opportunities through remote work.
          </p>
          
          <p>
          We provide comprehensive training, career development, and recruitment services tailored to the rapidly growing work-from-home economy.
          </p>
        </div>
      </Section>
      
      <AboutSection />
      
      {/* Additional about page content would go here */}
    </>
  );
};

export default AboutPage;
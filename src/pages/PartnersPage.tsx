import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import PartnersSection from '../components/home/PartnersSection';

const PartnersPage = () => {
  return (
    <>
      <Helmet>
        <title>Partners | Wokxstation</title>
        <meta name="description" content="Partner with Wokxstation to access pre-vetted, remote-ready talent for your organization." />
      </Helmet>
      
      <Section background="light" className="pt-28">
        <SectionHeader
          title="Partner With Us"
          subtitle="Access pre-trained, remote-ready talent to grow your business."
        />
        
        <div className="prose prose-lg mx-auto">
          <p>
            Wokxstation partners with forward-thinking companies that understand the value of skilled remote workers. We provide access to a pool of pre-vetted candidates who have been specifically trained in the skills you need.
          </p>
          
          <p>
            Our talent matching service saves you time and resources in the hiring process, connecting you with candidates who are already prepared to contribute to your team's success from day one.
          </p>
        </div>
      </Section>
      
      <PartnersSection />
      
      {/* Additional partners page content would go here */}
    </>
  );
};

export default PartnersPage;
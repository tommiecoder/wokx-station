import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import ContactSection from '../components/home/ContactSection';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Wokxstation</title>
        <meta name="description" content="Get in touch with the Wokxstation team for inquiries about our training programs or partnership opportunities." />
      </Helmet>
      
      <Section background="light" className="pt-28">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions? We're here to help you start your remote career journey."
        />
        
        <div className="prose prose-lg mx-auto text-center">
          <p>
            Whether you're interested in our training programs, looking to hire remote talent, or just want to learn more about what we do, our team is ready to assist you.
          </p>
          
          <p>
            Feel free to reach out using any of the contact methods below, and we'll get back to you as soon as possible.
          </p>
        </div>
      </Section>
      
      <ContactSection />
    </>
  );
};

export default ContactPage;
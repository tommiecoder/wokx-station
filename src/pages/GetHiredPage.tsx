import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import GetHiredSection from '../components/home/GetHiredSection';

const GetHiredPage = () => {
  return (
    <>
      <Helmet>
        <title>Get Hired | Wokxstation</title>
        <meta name="description" content="Learn how Wokxstation connects you with remote job opportunities after completing our training programs." />
      </Helmet>
      
      <Section background="light" className="pt-28">
        <SectionHeader
          title="Get Hired"
          subtitle="Your path to landing a rewarding remote job starts here."
        />
        
        <div className="prose prose-lg mx-auto text-center">
          <p>
            At Wokxstation, we don't just train you - we're committed to helping you land a great remote job. Our comprehensive job placement support is designed to connect you with employers who value your newly acquired skills.
          </p>
          
          <p>
            With a network of over 200 employer partners actively hiring for remote positions, we provide direct pathways to employment opportunities that match your skills and career goals.
          </p>
        </div>
      </Section>
      
      <GetHiredSection />
      
      {/* Additional get hired page content would go here */}
    </>
  );
};

export default GetHiredPage;
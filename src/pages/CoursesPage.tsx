import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import CoursesSection from '../components/home/CoursesSection';

const CoursesPage = () => {
  return (
    <>
      <Helmet>
        <title>Courses | Wokxstation</title>
        <meta name="description" content="Explore our range of remote work training programs designed to help you land your dream remote job." />
      </Helmet>
      
      <Section background="light" className="pt-28">
        <SectionHeader
          title="Our Courses"
          subtitle="Practical training programs designed to prepare you for in-demand remote careers."
        />
        
        <div className="prose prose-lg mx-auto">
          <p>
            Wokxstation offers specialized training programs focused on the most in-demand remote skills. Our courses are designed with input from industry experts and hiring managers to ensure you're learning exactly what employers need.
          </p>
          
          <p>
            Each program combines practical skills training, mentorship, and job placement support to maximize your chances of success in the remote job market.
          </p>
        </div>
      </Section>
      
      <CoursesSection />
      
      {/* Additional courses page content would go here */}
    </>
  );
};

export default CoursesPage;
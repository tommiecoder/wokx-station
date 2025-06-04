import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import CoursesSection from '../components/home/CoursesSection';
import GetHiredSection from '../components/home/GetHiredSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Wokxstation | Work Anywhere, Grow Everywhere</title>
        <meta name="description" content="Hands-on training for remote work — and direct access to companies hiring remote talent." />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <GetHiredSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
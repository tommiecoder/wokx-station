import { motion } from 'framer-motion';
import { BadgeCheck, Building, Search, UserCheck } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const PartnersSection = () => {
  const benefits = [
    {
      icon: <BadgeCheck size={24} className="text-secondary-600" />,
      title: 'Pre-vetted Talent',
      description: 'All candidates have been screened and trained specifically for remote work environments.',
    },
    {
      icon: <Search size={24} className="text-secondary-600" />,
      title: 'Specialized Matching',
      description: 'We match candidates based on your specific requirements and company culture.',
    },
    {
      icon: <UserCheck size={24} className="text-secondary-600" />,
      title: 'Remote-ready Skills',
      description: 'Our graduates are trained in virtual collaboration tools and remote work best practices.',
    },
  ];

  const companyLogos = [
    'https://via.placeholder.com/150x60?text=Company+1',
    'https://via.placeholder.com/150x60?text=Company+2',
    'https://via.placeholder.com/150x60?text=Company+3',
    'https://via.placeholder.com/150x60?text=Company+4',
    'https://via.placeholder.com/150x60?text=Company+5',
  ];

  return (
    <Section background="white" id="partners">
      <SectionHeader
        title="Looking for Remote-Ready Talent?"
        subtitle="Partner with us to access pre-trained professionals ready to contribute to your remote team from day one."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600">
              Our graduates are pre-vetted, trained in remote collaboration tools, and ready to work across
              time zones. Whether you need a customer success rep or a skilled VA, we'll connect you with
              someone who's already trained and job-ready.
            </p>

            <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded">
              <div className="flex items-start">
                <Building size={24} className="text-secondary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-secondary-800">For Employers</h3>
                  <p className="text-gray-700">
                    Join our network of forward-thinking companies hiring remote talent. We offer flexible
                    recruitment solutions tailored to your hiring needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="/partners" size="lg">
              Partner With Us
            </Button>
            <Button variant="outline" href="/talent-match" size="lg">
              Request a Talent Match
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Remote team collaboration"
            className="rounded-lg shadow-lg mb-8"
          />

          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Trusted by Companies Like</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companyLogos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Partner company ${index + 1}`}
                  className="h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default PartnersSection;
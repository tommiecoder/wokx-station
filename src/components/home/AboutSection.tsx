import { motion } from 'framer-motion';
import { Globe, Users, Zap } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const AboutSection = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Global Opportunities',
      description: 'Connect with remote jobs from companies around the world, breaking geographical barriers.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Inclusive Community',
      description: 'Join a supportive network of professionals from diverse backgrounds and experiences.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Practical Skills',
      description: 'Learn industry-relevant skills that directly translate to real remote work opportunities.',
    },
  ];

  return (
    <Section background="white" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team collaboration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <div>
          <SectionHeader
            title="Changing Lives Through Remote Work"
            centered={false}
          />

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We believe meaningful work shouldn't be limited by location. At Wokxstation, we provide
            high-impact training in essential remote skills, preparing people for real jobs in today's digital
            economy. Our programs are built for accessibility, mentorship, and results — no fluff, no
            overpriced bootcamps.
          </motion.p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-500 rounded"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="font-semibold text-primary-700">Our Mission</h3>
            <p className="text-gray-700">
              To train and connect talent from underrepresented communities with remote job opportunities worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
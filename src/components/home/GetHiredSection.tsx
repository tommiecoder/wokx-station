import { motion } from 'framer-motion';
import { Award, FileCheck, Presentation, Users } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const GetHiredSection = () => {
  const steps = [
    {
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: 'Resume & Portfolio Review',
      description: 'Our experts review and optimize your resume and portfolio to highlight your remote-ready skills.',
    },
    {
      icon: <Presentation className="h-8 w-8 text-white" />,
      title: 'Interview Preparation',
      description: 'Participate in mock interviews and receive feedback to sharpen your virtual interviewing skills.',
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Direct Employer Connections',
      description: 'Get introduced to companies in our network that are actively hiring for remote positions.',
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Ongoing Career Support',
      description: 'Receive continued guidance and resources to help you advance in your remote career.',
    },
  ];

  return (
    <Section background="primary" id="get-hired" className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <SectionHeader
        title="We Don't Just Train You. We Connect You."
        subtitle="Our job placement process ensures you're not just skilled, but also connected to real opportunities."
        className="text-white"
      />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-primary-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="secondary"
              href="/get-hired"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold shadow-lg"
            >
              Join Our Talent Pool
            </Button>
            <Button
              variant="outline"
              href="/success-stories"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold shadow-lg"
              size="lg"
            >
              See Success Stories
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Job placement process"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default GetHiredSection;
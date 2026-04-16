import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import { talents } from '../../data/talents';

const TalentShowcase = () => {
  return (
    <Section background="white" id="available-talent">
      <SectionHeader
        title="Available Talent"
        subtitle="Browse the skilled professionals ready to join your team"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talents.map((talent, index) => {
          const Icon = talent.icon;

          return (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
                  <Icon size={28} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{talent.title}</h3>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{talent.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full border border-primary-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default TalentShowcase;

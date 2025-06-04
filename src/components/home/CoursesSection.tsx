import { motion } from 'framer-motion';
import { Clock, Medal, Users } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { courses } from '../../data/courses';

const CoursesSection = () => {
  return (
    <Section background="light" id="courses">
      <SectionHeader
        title="Practical Training. Remote-Ready Skills."
        subtitle="Our focused programs prepare you for in-demand remote roles with hands-on experience and direct mentorship."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-2 text-primary-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-2 text-primary-500" />
                  <span>{course.mode}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Medal size={16} className="mr-2 text-primary-500" />
                  <span>{course.certification ? 'Includes certification' : 'No certification'}</span>
                </div>
              </div>
              
              <Button variant="outline" href={`/courses/${course.id}`} className="w-full">
                Learn More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/courses" size="lg">
          View All Programs
        </Button>
      </div>
    </Section>
  );
};

export default CoursesSection;
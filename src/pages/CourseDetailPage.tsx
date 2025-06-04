import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Medal, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <Section background="light\" className="pt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Button href="/courses">View All Courses</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Wokxstation</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <Section background="light" className="pt-28">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            />

            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p className="text-gray-600">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium">Mode</h3>
                  <p className="text-gray-600">{course.mode}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Medal className="text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium">Certification</h3>
                  <p className="text-gray-600">{course.certification ? 'Included' : 'Not included'}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Calendar className="text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium">Next Start Date</h3>
                  <p className="text-gray-600">
                    {new Date(course.startDates[0]).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {section.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {course.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ${course.price}
                </div>
                <p className="text-gray-600">Full course access</p>
              </div>

              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Download Syllabus
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Upcoming Start Dates:</h3>
                <ul className="space-y-2">
                  {course.startDates.map((date, index) => (
                    <li key={index} className="text-gray-600">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Need help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our advisors are here to help you choose the right program and answer any questions.
                </p>
                <Button variant="outline" href="/contact" className="w-full">
                  Contact an Advisor
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default CourseDetailPage;
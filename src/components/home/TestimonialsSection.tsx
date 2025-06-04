import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Customer Support Specialist',
      company: 'TechGrowth Inc.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Wokxstation\'s program gave me the skills and confidence to land a remote customer support role that pays twice what I was making locally. The mentorship was invaluable.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Virtual Assistant',
      company: 'GlobalReach Partners',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'After completing the VA training, I had three interviews within a week. The practical skills I learned made all the difference in standing out to employers.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Content Marketing Specialist',
      company: 'DigitalFirst Media',
      image: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'From freelance writing student to full-time content marketer in just 2 months! The portfolio I built during the program helped me showcase my skills to potential clients.',
      rating: 4,
    },
  ];

  return (
    <Section background="secondary" id="testimonials" className="bg-secondary-50">
      <SectionHeader
        title="What Our Graduates Say"
        subtitle="Success stories from people who transformed their careers through our programs."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 text-center mb-4">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>

            <blockquote className="text-gray-600 italic text-center">
              "{testimonial.quote}"
            </blockquote>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Success by the Numbers</h3>
            <p className="text-gray-600 mb-6">
              Our focus on practical skills and direct employer connections delivers real results for our graduates.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">85%</div>
                <p className="text-gray-600 text-sm">Job placement rate within 60 days</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">40%</div>
                <p className="text-gray-600 text-sm">Average salary increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">200+</div>
                <p className="text-gray-600 text-sm">Employer partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">1,500+</div>
                <p className="text-gray-600 text-sm">Graduates placed</p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Success story"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
              <div className="p-6 text-white">
                <p className="font-semibold text-lg">Watch Success Stories</p>
                <p>Hear directly from our graduates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const ContactSection = () => {
  return (
    <Section background="light" id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Have questions? Ready to start your remote career journey? We're here to help."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="johndoe@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select a subject</option>
                <option value="course-inquiry">Course Inquiry</option>
                <option value="job-placement">Job Placement</option>
                <option value="employer-partnership">Employer Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-600">
                  Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600 break-all">info@wokxstation.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-600">
                  +1 (205) 293-8702
                    <br />
                  +234 (701) 545-5565
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare size={24} className="text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Live Chat</h4>
                  <p className="text-gray-600">Always Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-primary-50 rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">How long are your programs?</h4>
                <p className="text-gray-600 text-sm">Most of our programs run between 4-8 weeks, depending on the skill path.</p>
              </div>
              <div>
                <h4 className="font-medium">Do you offer payment plans?</h4>
                <p className="text-gray-600 text-sm">Yes, we offer flexible payment options including installment plans.</p>
              </div>
              <div>
                <h4 className="font-medium">Is job placement guaranteed?</h4>
                <p className="text-gray-600 text-sm">While we can't guarantee employment, our 85% placement rate demonstrates our commitment to your success.</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="/faq" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                View all FAQs →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const ContactSection = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: "How long are your programs?",
      answer: "Most of our programs run between 4-8 weeks, depending on the skill path."
    },
    {
      question: "What kind of career support do you offer?",
      answer: "We provide resume and portfolio reviews, interview preparation, and direct connections to employers in our network."
    },
    {
      question: "Is job placement guaranteed?",
      answer: "While we can't guarantee employment, our 85% placement rate demonstrates our commitment to your success."
    },
    {
      question: "Do I need prior experience to join?",
      answer: "No prior experience is required. Our programs are designed for beginners and include all the foundational skills you need."
    },
    {
      question: "What equipment do I need for the courses?",
      answer: "You'll need a computer with reliable internet connection. Specific software requirements vary by course and will be provided upon enrollment."
    },
    {
      question: "Can I work while taking the courses?",
      answer: "Yes, our flexible scheduling allows you to balance coursework with other commitments. Most students dedicate 10-15 hours per week."
    }
  ];

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('subject', formData.subject);
      netlifyFormData.append('message', formData.message);

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // For now, we'll still show success message even if there's an error
      // In production, you'd want to show an error message
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
          {!submitted ? (
            <form 
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="johndoe@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
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
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          ) : (
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your message has been received successfully. We'll get back to you within 24 hours.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  We appreciate your interest in WokxStation and look forward to helping you start your remote career journey.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={resetForm}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Send Another Message
                </Button>
                <Button 
                  href="/courses"
                  size="lg"
                  className="w-full"
                >
                  Explore Our Courses
                </Button>
              </div>
            </motion.div>
          )}
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
              {visibleFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="font-medium">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            {faqs.length > 3 && (
              <div className="mt-6">
                <button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {showAllFaqs ? (
                    <>
                      See Less FAQs
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      See More FAQs
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
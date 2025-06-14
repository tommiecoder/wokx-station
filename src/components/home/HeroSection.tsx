import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Work anywhere, 
              <span className="text-primary-600 block mt-2">grow everywhere.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hands-on training for remote work — and direct access to companies hiring remote talent.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button href="/courses" size="lg" className="w-full sm:w-auto">
                Get Trained <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" href="/partners" size="lg" className="w-full sm:w-auto">
                Partner With Us
              </Button>
              <Button variant="text" href="/courses" size="lg" className="w-full sm:w-auto">
                View Courses <ArrowRight size={16} className="ml-1" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/6937875/pexels-photo-6937875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Remote work professionals collaborating" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
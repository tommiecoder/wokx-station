import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight, XIcon } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Logo from '../ui/Logo';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo size="md" className="brightness-0 invert" />
            </div>
            <p className="text-gray-400 pr-4">
              Hands-on training for remote work — and direct access to companies hiring remote talent.
            </p>
            <div className="flex space-x-4">
              <a href="https://whatsapp.com/channel/0029VbBFbPDHrDZiRM7sB543" className="text-gray-400 hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://x.com/wokxstation?t=3IloMDxZCK7uDlTety2zwQ&s=09" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/the-wokxstation/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/wokxstation?igsh=MWEzOTR6Nmk3OXQ1eg==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Courses', 'Get Hired', 'For Employers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {[
                'Remote Customer Support',
                'Virtual Assistant Training',
                'Freelance Writing',
                'Tech Sales',
                'Digital Marketing',
                'Project Management',
              ].map((course) => (
                <li key={course}>
                  <Link 
                    to="/courses" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@wokxstation.com</li>
              <li>Phone: +1 (205) 293-8702, +234 (701) 545-5565</li>
              <li>Address: Nigeria</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} WokxStation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
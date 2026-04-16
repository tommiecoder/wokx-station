import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import TalentSelector from '../components/home/TalentSelector';
import { talents } from '../data/talents';

const TalentMatchPage = () => {
  const [selectedTalent, setSelectedTalent] = useState<string | null>(null);
  const [positions, setPositions] = useState<number | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [requirements, setRequirements] = useState('');

  const positionOptions = [1, 2, 3, 5, 10];
  const selectedTalentData = talents.find(t => t.id === selectedTalent);

  const handleWhatsApp = () => {
    if (!selectedTalent || !positions) return;

    const talentTitle = selectedTalentData?.title || 'talent';
    let message = `Hi! I'm interested in hiring ${talentTitle} - ${positions} position${positions > 1 ? 's' : ''}.`;

    if (companyName.trim()) {
      message += ` Company: ${companyName.trim()}.`;
    }

    if (requirements.trim()) {
      message += ` Requirements: ${requirements.trim()}.`;
    }

    message += ' Can we discuss?';

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '2349034771629';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Request a Talent Match | Wokxstation</title>
        <meta name="description" content="Find and request the perfect remote talent for your business needs." />
      </Helmet>

      <Section background="light" className="pt-28">
        <SectionHeader
          title="Request a Talent Match"
          subtitle="Tell us what talent you need, and we'll connect you with the perfect fit."
        />
      </Section>

      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">1. Select Your Talent</h3>
              <TalentSelector
                talents={talents}
                selectedId={selectedTalent}
                onSelect={setSelectedTalent}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">2. How Many Positions?</h3>
                <div className="space-y-3">
                  {positionOptions.map(num => (
                    <motion.button
                      key={num}
                      onClick={() => setPositions(num)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                        positions === num
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {num === 10 ? '10+ Positions' : `${num} Position${num > 1 ? 's' : ''}`}
                    </motion.button>
                  ))}
                </div>
              </div>

              {selectedTalent && positions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      3. Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      4. Additional Requirements (Optional)
                    </label>
                    <textarea
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="e.g., specific experience, timezone preference, language requirements..."
                      rows={4}
                      maxLength={200}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">{requirements.length}/200</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-semibold mb-4">Your Selection</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Talent Type:</span>
                        <span className="font-bold text-primary-600">{selectedTalentData?.title}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Positions Needed:</span>
                        <span className="font-bold text-primary-600">{positions}</span>
                      </div>
                      {companyName.trim() && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Company:</span>
                          <span className="font-bold text-primary-600">{companyName}</span>
                        </div>
                      )}
                      {requirements.trim() && (
                        <div className="flex justify-between items-start">
                          <span className="text-gray-700">Requirements:</span>
                          <span className="font-bold text-primary-600 text-right max-w-xs">{requirements}</span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      onClick={handleWhatsApp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send size={20} />
                      Connect via WhatsApp
                    </motion.button>

                    <p className="text-sm text-gray-600 text-center mt-4">
                      We'll respond to your inquiry within 24 hours.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TalentMatchPage;

import { motion } from 'framer-motion';
import { Talent } from '../../data/talents';

interface TalentSelectorProps {
  talents: Talent[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const TalentSelector = ({ talents, selectedId, onSelect }: TalentSelectorProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {talents.map((talent, index) => {
        const Icon = talent.icon;
        const isSelected = selectedId === talent.id;

        return (
          <motion.button
            key={talent.id}
            onClick={() => onSelect(talent.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              isSelected
                ? 'border-primary-500 bg-primary-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg flex-shrink-0 ${
                  isSelected ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 mb-1">{talent.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{talent.description}</p>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default TalentSelector;

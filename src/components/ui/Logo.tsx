import { Activity } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center bg-primary-600 text-white p-2 rounded-md ${className}`}>
      <Activity size={20} />
    </div>
  );
};

export default Logo;
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <div className={`text-gray-600 text-lg max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
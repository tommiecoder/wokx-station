interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <img 
      src="/src/assets/WokxStation_Logo_Resized_PhotoGrid.png" 
      alt="WokxStation - Work Anywhere, Grow Everywhere" 
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
import React, { useState, useEffect } from 'react';
import { SectionData } from '../types';

interface HeaderProps {
  sections: SectionData[];
  activeSection: string;
  handleNavigate: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection, handleNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLocalNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
        handleNavigate(e, `/#${sectionId}`);
    } else {
        // If already on the home page, just scroll smoothly
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="/" 
          className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={(e) => handleNavigate(e, '/')}
        >
          Pilares de Portugal
        </a>
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/#${section.id}`}
              onClick={(e) => handleLocalNavClick(e, section.id)}
              className={`text-sm font-semibold transition-all duration-200 ${
                activeSection === section.id
                  ? 'text-teal-500 border-b-2 border-teal-500'
                  : isScrolled ? 'text-gray-600 hover:text-teal-500' : 'text-gray-200 hover:text-white'
              }`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
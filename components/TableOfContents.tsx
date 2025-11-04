import React, { useState, useEffect } from 'react';
import { FiList } from 'react-icons/fi';

interface Section {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-24 bg-white rounded-lg shadow-md p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
        <FiList className="text-teal-600 text-xl mr-2" />
        <h3 className="font-bold text-gray-900 text-lg">Table of Contents</h3>
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`${section.level === 2 ? 'ml-4' : ''}`}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className={`text-left w-full py-2 px-3 rounded transition-colors ${
                activeSection === section.id
                  ? 'bg-teal-100 text-teal-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;

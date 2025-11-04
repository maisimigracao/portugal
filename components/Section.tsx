
import React from 'react';
import { IconType } from 'react-icons';

interface SectionProps {
  title: string;
  summary: string;
  icon: IconType;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, summary, icon: Icon, children }) => {
  return (
    <div className="container mx-auto text-center w-full">
      <div className="mb-12">
        <Icon className="text-5xl text-teal-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{summary}</p>
      </div>
      <div className="w-full max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Section;

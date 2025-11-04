
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-2">Pilares de Portugal</p>
        <p className="text-sm text-gray-400">
          Um projeto informativo baseado em dados oficiais de instituições governamentais e de investigação.
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Visualizar os dados para promover uma conversa informada sobre a imigração em Portugal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
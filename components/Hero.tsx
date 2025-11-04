import React from 'react';
import coverImage from '../assets/cover.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-start justify-center text-white pt-28" style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4">
          Imigração:<br />O Pilar Essencial do Portugal Moderno
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
          Explore a história, baseada em dados, de como a imigração está a construir um futuro mais forte e sustentável para a nação.
        </p>
      </div>
    </section>
  );
};

export default Hero;
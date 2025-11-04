import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sections } from './constants';
import { SectionData } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import StatCard from './components/StatCard';
import ContributionChart from './components/charts/ContributionChart';
import UnemploymentChart from './components/charts/UnemploymentChart';
import PopulationCrimeChart from './components/charts/PopulationCrimeChart';
import BirthsChart from './components/charts/BirthsChart';
import Footer from './components/Footer';
import StudyPage from './pages/StudyPage';

const App: React.FC = () => {
  // --- Nova Lógica de Roteamento com History API ---
  const [locationPath, setLocationPath] = useState(window.location.pathname);

  const handleLocationChange = () => {
    setLocationPath(window.location.pathname);
  };
  
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    handleLocationChange();
  };

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Derivar a rota do estado da localização
  let currentPage = 'home';
  let studyParam = '';
  const pathParts = locationPath.split('/').filter(Boolean);
  if (pathParts[0] === 'study' && sections.some(s => s.id === pathParts[1])) {
    currentPage = 'study';
    studyParam = pathParts[1];
    window.scrollTo(0, 0);
  }

  // --- Lógica Original da Página Inicial ---
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const pageYOffset = window.scrollY;
    let newActiveSection = 'home';

    sections.forEach((section, index) => {
      const ref = sectionRefs.current[index];
      if (ref) {
        const sectionTop = ref.offsetTop - 100;
        const sectionHeight = ref.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          newActiveSection = section.id;
        }
      }
    });
    
    if (pageYOffset < (sectionRefs.current[0]?.offsetTop ?? 500) - 100) {
        newActiveSection = 'home';
    }

    setActiveSection(newActiveSection);
  }, []);

  useEffect(() => {
    // Adiciona o listener de scroll apenas na página inicial
    if (currentPage === 'home') {
      window.addEventListener('scroll', handleScroll);
      
      const hash = window.location.hash.substring(1);
      if (hash && sections.some(s => s.id === hash)) {
          setTimeout(() => {
              document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
      }
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, currentPage]);


  const renderSectionContent = (section: SectionData) => {
    const button = (
       <div className="mt-24 md:mt-12 text-center">
        <a 
          href={`/study/${section.id}`} 
          onClick={(e) => handleNavigate(e, `/study/${section.id}`)}
          className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Ver Análise Detalhada
        </a>
      </div>
    );

    switch (section.id) {
      case 'social-security':
        return (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <StatCard title="Contribuição Líquida (2023)" value="+1.820M€" description="Um saldo positivo recorde, que mais do que duplicou em 3 anos." />
              <StatCard title="Base Contributiva" value="14,4%" description="do total de contribuintes da Segurança Social em 2023 eram imigrantes." />
              <StatCard title="Contribuição vs. Prestações" value="7x" description="Em 2022, os imigrantes contribuíram sete vezes mais do que receberam." />
            </div>
            <ContributionChart />
            {button}
          </>
        );
      case 'labor-market':
        return (
          <>
            <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Os dados refutam o "mito da substituição", mostrando que os imigrantes preenchem funções essenciais em setores com falta de mão-de-obra, complementando a força de trabalho nacional em vez de competir com ela.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               <StatCard title="Agricultura e Pescas" value="41%" description="dos trabalhadores são imigrantes, fortalecendo um setor vital." />
               <StatCard title="Hotelaria e Restauração" value="31%" description="dos trabalhadores são imigrantes, sustentando a indústria do turismo." />
               <StatCard title="Construção" value="23%" description="dos trabalhadores são imigrantes, ajudando a construir as infraestruturas de Portugal." />
            </div>
            <UnemploymentChart />
            {button}
          </>
        );
      case 'public-safety':
        return (
          <>
            <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Os dados oficiais mostram uma clara dissociação entre o crescimento da população imigrante e as taxas de criminalidade. De facto, uma análise de uma década revela uma correlação inversa.
            </p>
             <div className="grid md:grid-cols-2 gap-6 mb-12">
               <StatCard title="Reclusos Estrangeiros" value="-23%" description="Diminuição entre 2013-2023, durante um período de enorme crescimento da imigração." />
               <StatCard title="Perfil do Crime Grave" value="Relacional" description="Relatórios oficiais mostram que os crimes graves estão predominantemente ligados a relações (família, vizinhos), e não à nacionalidade." />
            </div>
            <PopulationCrimeChart />
            {button}
          </>
        );
      case 'demographics':
        return (
          <>
            <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
             Num Portugal envelhecido, a imigração é o único motor do crescimento populacional e um pilar crucial para a estabilidade demográfica futura, rejuvenescendo ativamente o país.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               <StatCard title="Crescimento Populacional" value="100%" description="Desde 2017, todo o crescimento populacional deve-se exclusivamente a um saldo migratório positivo." />
               <StatCard title="Índice de Envelhecimento (Imigrantes)" value="101" description="Perfil significativamente mais jovem vs. o índice nacional de 189 idosos por cada 100 jovens." />
               <StatCard title="Impacto Nacional" value="+2,3M" description="Diferença populacional projetada para 2100 num cenário com vs. sem migração." />
            </div>
            <BirthsChart />
            {button}
          </>
        );
      default:
        return null;
    }
  };

  if (currentPage === 'study') {
    return <StudyPage studyId={studyParam} handleNavigate={handleNavigate} />;
  }

  return (
    <div className="bg-gray-50">
      <Header sections={sections} activeSection={activeSection} handleNavigate={handleNavigate} />
      <main>
        <Hero />
        {sections.map((section: SectionData, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
          >
            <Section title={section.title} summary={section.summary} icon={section.icon}>
              {renderSectionContent(section)}
            </Section>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
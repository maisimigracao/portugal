import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { studyDetails } from '../studyDetails';
import { sections } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import EnhancedTable from '../components/EnhancedTable';
import Callout from '../components/Callout';
import Quote from '../components/Quote';
import ReadingProgress from '../components/ReadingProgress';
import TableOfContents from '../components/TableOfContents';
import { ContentBlock, TableData, CalloutData, QuoteData, ChartConfig } from '../types';

interface StudyPageProps {
  studyId?: string;
}

const Table: React.FC<{ data: TableData }> = ({ data }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="bg-gray-100">
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-gray-800">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="whitespace-nowrap px-4 py-3 font-medium text-gray-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Helper function to render text with clickable links
const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={i} 
          href={part} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-800 underline break-all"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const renderContentBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'title':
      return (
        <h2 
          key={index} 
          id={`section-${index}`}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-12 mb-6 scroll-mt-24"
        >
          {block.content}
        </h2>
      );
    case 'subtitle':
      return (
        <h3 
          key={index} 
          id={`subsection-${index}`}
          className="text-2xl font-bold text-gray-800 mt-8 mb-4 scroll-mt-24"
        >
          {block.content}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
          {block.content}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-outside space-y-3 text-base text-gray-700 leading-relaxed mb-6 ml-8">
          {block.content.map((item, i) => (
            <li key={i} className="pl-2">
              {renderTextWithLinks(item)}
            </li>
          ))}
        </ul>
      );
    case 'table':
      return <EnhancedTable key={index} data={block.content} sortable striped />;
    case 'callout':
      return <Callout key={index} data={block.content} />;
    case 'quote':
      return <Quote key={index} data={block.content} />;
    case 'reference':
      return (
        <p key={index} className="text-sm text-gray-500 italic border-l-2 border-gray-300 pl-4 my-4">
          {block.content}
        </p>
      );
    case 'chart':
      return (
        <div key={index} className="my-8 bg-white p-6 rounded-lg shadow-md">
          {block.content.title && (
            <h4 className="text-xl font-bold text-gray-800 mb-4">{block.content.title}</h4>
          )}
          {/* Chart rendering would go here based on chartType */}
        </div>
      );
    default:
      return null;
  }
};

const StudyPage: React.FC<StudyPageProps> = ({ studyId: propStudyId }) => {
  const params = useParams<{ studyId: string }>();
  const navigate = useNavigate();
  
  // Fallback para extrair studyId da URL se useParams falhar (durante SSR/prerender)
  let studyId = propStudyId || params.studyId || '';
  if (!studyId && typeof window !== 'undefined') {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts[0] === 'study' && pathParts[1]) {
      studyId = pathParts[1];
    }
  }
  
  const details = studyDetails[studyId];

  if (!details) {
    return <div>Estudo não encontrado. StudyId: {studyId}</div>;
  }

  const { title, summary, icon: Icon, stats, chart: Chart, detailedContent } = details;

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  // Extract sections for table of contents
  const tocSections = useMemo(() => {
    return detailedContent
      .map((block, index) => {
        if (block.type === 'title') {
          return { id: `section-${index}`, title: block.content, level: 1 };
        }
        if (block.type === 'subtitle') {
          return { id: `subsection-${index}`, title: block.content, level: 2 };
        }
        return null;
      })
      .filter((item): item is { id: string; title: string; level: number } => item !== null);
  }, [detailedContent]);

  return (
    <div className="bg-white">
      <ReadingProgress />
      <Header sections={sections} activeSection={studyId} handleNavigate={handleNavigate} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <Icon className="text-6xl text-teal-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{summary}</p>
          </div>
        </section>

        {/* Stats and Chart Section */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
            </div>
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
              <Chart />
            </div>
          </div>
        </section>

        {/* Detailed Content Section with TOC */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Análise Detalhada</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Table of Contents - Sidebar */}
              {tocSections.length > 0 && (
                <aside className="lg:w-1/4 flex-shrink-0">
                  <TableOfContents sections={tocSections} />
                </aside>
              )}
              
              {/* Main Content */}
              <article className={`flex-1 ${tocSections.length > 0 ? 'lg:w-3/4' : 'max-w-4xl mx-auto'}`}>
                <div className="prose prose-lg max-w-none">
                  {detailedContent.map(renderContentBlock)}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudyPage;
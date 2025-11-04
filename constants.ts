
import { SectionData } from './types';
import { FaPiggyBank, FaBriefcase, FaShieldAlt, FaUsers } from 'react-icons/fa';

export const sections: SectionData[] = [
  {
    id: 'social-security',
    title: 'Sustentabilidade da Segurança Social',
    summary: 'Os imigrantes fornecem um "subsídio demográfico" crucial para o sistema de segurança social português, com as suas contribuições líquidas a crescer exponencialmente e a garantir a sua sustentabilidade.',
    icon: FaPiggyBank,
  },
  {
    id: 'labor-market',
    title: 'Dinamizar a Economia',
    summary: 'Longe de "roubar empregos", os imigrantes são essenciais para setores chave da economia portuguesa, preenchendo a falta de mão-de-obra e demonstrando uma poderosa complementaridade estrutural.',
    icon: FaBriefcase,
  },
  {
    id: 'public-safety',
    title: 'Desmistificar Mitos da Criminalidade',
    summary: 'Os dados oficiais não mostram uma ligação causal entre a imigração e o aumento da criminalidade. Na verdade, na última década, à medida que a população imigrante cresceu, o número de reclusos estrangeiros diminuiu.',
    icon: FaShieldAlt,
  },
  {
    id: 'demographics',
    title: 'Rejuvenescer Portugal',
    summary: 'Perante uma grave crise de envelhecimento, a imigração é o único fator que previne o declínio populacional e é uma força vital para a renovação demográfica e a viabilidade futura.',
    icon: FaUsers,
  },
];

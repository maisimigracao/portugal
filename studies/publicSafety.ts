import PopulationCrimeChart from '@/components/charts/PopulationCrimeChart';
import { sections } from '../constants';

const [socialSecurity, laborMarket, publicSafety, demographics] = sections;

export const safetyContent: any = {
    ...publicSafety,
    stats: [
        { title: "Reclusos Estrangeiros", value: "-23%", description: "Diminuição entre 2013-2023, durante um período de enorme crescimento da imigração." },
        { title: "Perfil do Crime Grave", value: "Relacional", description: "Relatórios oficiais mostram que os crimes graves estão predominantemente ligados a relações (família, vizinhos), e não à nacionalidade." }
    ],
    chart: PopulationCrimeChart,
    detailedContent: [
      { type: 'subtitle', content: 'Uma Correlação Inversa' },
      { type: 'paragraph', content: 'Os dados da Direção-Geral de Reinserção e Serviços Prisionais (DGRSP) são inequívocos: não existe uma relação de causa-efeito entre o aumento da população imigrante e um aumento da criminalidade. Pelo contrário, na década de 2013 a 2023, enquanto a população estrangeira residente em Portugal cresceu mais de 160%, o número de reclusos de nacionalidade estrangeira diminuiu 23%.'},
      { type: 'paragraph', content: 'Esta dissociação estatística é fundamental para combater narrativas xenófobas. A criminalidade é um fenómeno complexo, influenciado por fatores socioeconómicos, e não pela nacionalidade.'},
      { type: 'subtitle', content: 'População vs. Reclusos (Índice, Base 100 em 2013)' },
      {
        type: 'table',
        content: {
          headers: ['Ano', 'Índice População Estrangeira', 'Índice População Reclusa Estrangeira'],
          rows: [
            ['2013', 100, 100],
            ['2015', 99, 89],
            ['2018', 121, 80],
            ['2020', 171, 75],
            ['2023', 262, 77],
          ]
        }
      }
    ]
  }
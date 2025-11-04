import { sections } from '../constants';
import BirthsChart from '@/components/charts/BirthsChart';

const [socialSecurity, laborMarket, publicSafety, demographics] = sections;

export const demographicsContent: any = {
    ...demographics,
    stats: [
        { title: "Crescimento Populacional", value: "100%", description: "Desde 2017, todo o crescimento populacional deve-se exclusivamente a um saldo migratório positivo." },
        { title: "Índice de Envelhecimento (Imigrantes)", value: "101", description: "Perfil significativamente mais jovem vs. o índice nacional de 189 idosos por cada 100 jovens." },
        { title: "Impacto Nacional", value: "+2,3M", description: "Diferença populacional projetada para 2100 num cenário com vs. sem migração." }
    ],
    chart: BirthsChart,
    detailedContent: [
      { type: 'subtitle', content: 'O Motor da Renovação' },
      { type: 'paragraph', content: 'Portugal enfrenta uma das crises demográficas mais severas da Europa, com uma taxa de natalidade baixa e uma população em rápido envelhecimento. Neste cenário, a imigração não é apenas um fator positivo, é o único fator que tem prevenido o declínio populacional do país desde 2017. O saldo migratório positivo tem sido a única variável a compensar o saldo natural negativo (mais mortes do que nascimentos).'},
      { type: 'list', content: [
        'Os imigrantes têm uma estrutura etária muito mais jovem, com um índice de envelhecimento de 101, comparado com o índice nacional de 189.',
        'As mães de nacionalidade estrangeira foram responsáveis por 29,2% de todos os nados-vivos em Portugal em 2023, uma contribuição vital para a natalidade.',
        'Sem migração, as projeções do INE indicam que a população de Portugal poderia cair para 7,9 milhões até 2100. Com migração, o cenário aponta para 10,2 milhões.',
      ]},
       { type: 'subtitle', content: 'Comparativo Demográfico' },
      {
        type: 'table',
        content: {
          headers: ['Métrica', 'População Imigrante', 'Média Nacional'],
          rows: [
            ['Índice de Envelhecimento', 101, 189],
            ['Idade Mediana', '37 anos', '47 anos'],
            ['% de Nados-Vivos (2023)', '29,2%', '70,8%'],
          ]
        }
      }
    ]
  }
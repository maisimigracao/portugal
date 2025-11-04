import { StudyDetail } from './types';
import ContributionChart from './components/charts/ContributionChart';
import UnemploymentChart from './components/charts/UnemploymentChart';
import PopulationCrimeChart from './components/charts/PopulationCrimeChart';
import BirthsChart from './components/charts/BirthsChart';
import { sections } from './constants';

const [socialSecurity, laborMarket, publicSafety, demographics] = sections;

export const studyDetails: { [key: string]: StudyDetail } = {
  'social-security': {
    ...socialSecurity,
    stats: [
        { title: "Contribuição Líquida (2023)", value: "+1.820M€", description: "Um saldo positivo recorde, que mais do que duplicou em 3 anos." },
        { title: "Base Contributiva", value: "14,4%", description: "do total de contribuintes da Segurança Social em 2023 eram imigrantes." },
        { title: "Contribuição vs. Prestações", value: "7x", description: "Em 2022, os imigrantes contribuíram sete vezes mais do que receberam." }
    ],
    chart: ContributionChart,
    detailedContent: [
  { type: 'title', content: 'I. Introdução: O Paradigma Demográfico e a Arquitetura da Segurança Social Portuguesa' },
  { type: 'paragraph', content: 'A análise da sustentabilidade do sistema de Segurança Social em Portugal é indissociável do seu profundo desafio demográfico. O sistema português assenta, na sua esmagadora maioria, num modelo de repartição, conhecido internacionalmente como Pay-As-You-Go. Este modelo de financiamento define-se como um pacto intergeracional: as contribuições sociais pagas pelos trabalhadores ativos num determinado momento destinam-se a financiar diretamente as prestações sociais, primariamente pensões de velhice, invalidez e sobrevivência, dos beneficiários atuais.' },
  { type: 'paragraph', content: 'A viabilidade deste pacto depende criticamente de um rácio demográfico saudável entre o número de contribuintes (população ativa) e o número de beneficiários (população inativa). Num cenário, como o português, caracterizado por um envelhecimento populacional acentuado, baixas taxas de natalidade e um aumento da esperança média de vida, a base contributiva nacional contrai-se enquanto a despesa com pensões se expande.' },
  { type: 'paragraph', content: 'Neste contexto, a imigração cessa de ser uma variável social acessória e torna-se um fator económico e demográfico central para o equilíbrio e sustentabilidade do sistema. O influxo de trabalhadores migrantes, tipicamente mais jovens e em idade ativa, tem o potencial de alargar a base contributiva e mitigar os desequilíbrios estruturais.' },
  { type: 'paragraph', content: 'Este relatório visa quantificar, com base estrita em dados oficiais do Observatório das Migrações (OM), do Conselho das Finanças Públicas (CFP), da Direção-Geral do Orçamento (DGO) e do Tribunal de Contas, o contributo líquido da população imigrante para a Segurança Social no período de 2020 a 2024. O objetivo é analisar factualmente o impacto financeiro desta população, desconstruir mitos e validar, através de uma análise contrafactual, qual seria o saldo do sistema sem este contributo e em que medida estes trabalhadores financiam as pensões dos beneficiários nacionais.' },
  
  { type: 'title', content: 'II. Quantificação da Posição Contributiva dos Imigrantes (2020-2023)' },
  { type: 'paragraph', content: 'A análise dos dados oficiais dos últimos quatro anos revela que a população imigrante não só é uma contribuinte líquida para a Segurança Social, como o seu impacto positivo tem registado um crescimento exponencial. Os dados provêm maioritariamente dos relatórios anuais "Indicadores de Integração de Imigrantes" do Observatório das Migrações (OM).' },
  { type: 'paragraph', content: 'A evolução ano a ano do saldo financeiro (diferença entre o total de contribuições pagas pelos imigrantes e o total de prestações sociais por eles recebidas) demonstra esta tendência de forma inequívoca:' },
  { type: 'list', content: [
    '2020: O saldo financeiro (contribuições menos prestações) dos imigrantes para a Segurança Social foi positivo em +802,3 milhões de euros.',
    '2021: O número de contribuintes estrangeiros atingiu as 475.892 pessoas, representando 10,1% do total de contribuintes do sistema. (A) Contribuições: Um recorde (à data) de 1.293,2 milhões de euros. (B) Prestações Sociais Recebidas: 325,2 milhões de euros. (A-B) Saldo Líquido: O saldo positivo atingiu +968 milhões de euros.',
    '2022: A presença de contribuintes estrangeiros aumentou significativamente, passando a representar 13,5% do total de contribuintes do sistema. (A) Contribuições: Registou-se um novo máximo histórico de 1.861 milhões de euros. (B) Prestações Sociais Recebidas: Os imigrantes beneficiaram de apenas 257 milhões de euros em prestações. (A-B) Saldo Líquido: O saldo disparou para +1.604,2 milhões de euros. Como noticiado, os imigrantes contribuíram sete vezes mais do que receberam do sistema.',
    '2023: A tendência de crescimento consolidou-se. Os cidadãos estrangeiros passaram a representar 14,4% do total de contribuintes do sistema de Segurança Social. (A) Contribuições: O valor aproximou-se dos 2.200 milhões de euros. (B) Prestações Sociais Recebidas: As prestações recebidas totalizaram cerca de 380 milhões de euros. (A-B) Saldo Líquido: O saldo líquido positivo atingiu um novo recorde de +1.820 milhões de euros.'
  ]},
  { type: 'paragraph', content: 'A trajetória do saldo líquido — de +802,3 M€ em 2020 para +1.820 M€ em 2023 — demonstra um crescimento de mais de 127% em apenas três anos. Este facto sublinha que a população imigrante não é apenas um contribuinte líquido estático, mas sim uma fonte crescente e acelerada de financiamento para o sistema.' },
  
  { type: 'subtitle', content: 'Tabela 1: Evolução do Saldo Contributivo Líquido da População Imigrante (2020-2023)' },
  {
    type: 'table',
    content: {
      headers: ['Ano', '(A) Contribuições Totais (M€)', '(B) Prestações Sociais Recebidas (M€)', '(A-B) Saldo Líquido (M€)', 'Crescimento Anual do Saldo Líquido (%)'],
      rows: [
        ['2020', 'n/d', 'n/d', '+802,3', '-'],
        ['2021', '1.293,2', '325,2', '+968,0', '+20,5%'],
        ['2022', '1.861,0', '257,0', '+1.604,2', '+65,7%'],
        ['2023', 'aprox. 2.200,0', 'aprox. 380,0', '+1.820,0', '+13,5%']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: Dados compilados de relatórios do Observatório das Migrações (OM).' },
  
  { type: 'title', content: 'III. O Perfil Estrutural do Contribuinte Imigrante: O Motor Demográfico do Saldo Positivo' },
  { type: 'paragraph', content: 'O saldo financeiro consistentemente positivo e crescente detalhado na secção anterior não é acidental. É o resultado direto e estrutural do perfil demográfico da população imigrante residente em Portugal.' },
  
  { type: 'subtitle', content: 'A Estrutura Etária e o "Subsídio Demográfico"' },
  { type: 'paragraph', content: 'A principal razão para o elevado saldo líquido reside na estrutura etária da população estrangeira. Enquanto a população portuguesa envelhece, a população imigrante é estruturalmente jovem:' },
  { type: 'list', content: [
    'Idade Ativa: Relatórios oficiais indicam que 80,5% dos cidadãos estrangeiros residentes em Portugal estão em "idade potencialmente ativa".',
    'Concentração Etária: O grupo etário predominante é o de 25-44 anos, que totaliza 532.214 pessoas.',
    'Baixa População Idosa: Apenas 7,9% da população estrangeira residente tem mais de 65 anos.'
  ]},
  { type: 'paragraph', content: 'Este perfil demográfico cria um "subsídio demográfico" para o sistema de Segurança Social. O sistema de repartição gasta a sua maior fatia em prestações de elevado custo e longa duração, nomeadamente as Pensões de Velhice. Como verificado nos dados de execução orçamental de 2024, só esta rubrica (Pensões de Velhice) ascendeu a 17.375 milhões de euros.' },
  { type: 'paragraph', content: 'Os trabalhadores imigrantes (com apenas 7,9% acima dos 65 anos) contribuem ativamente para o sistema que paga estas pensões, mas, como grupo, ainda não as utilizam de forma significativa.' },
  
  { type: 'subtitle', content: 'Taxas de Atividade e Natureza das Prestações' },
  { type: 'paragraph', content: 'Para além da idade, os dados mostram que os imigrantes têm uma propensão para o trabalho superior à média nacional. Em 2022, a taxa de atividade dos estrangeiros foi de 76,9%, representando um valor +18,7 pontos percentuais acima da taxa de atividade registada nos nacionais portugueses.' },
  { type: 'paragraph', content: 'Esta combinação de fatores (estrutura etária jovem e elevada taxa de atividade) significa que os imigrantes são contribuintes máximos e beneficiários mínimos (em termos de custo). As prestações que recebem (os 380 M€ em 2023, por exemplo) concentram-se em rubricas de custo muito inferior e de curta duração, como subsídios de desemprego, abono de família ou subsídios de doença.' },
  { type: 'paragraph', content: 'Este fenómeno é de tal forma robusto que persiste apesar de os imigrantes estarem frequentemente concentrados em setores de baixos salários (agricultura, restauração, construção). Mesmo com salários médios por vezes inferiores, o seu impacto fiscal líquido é massivo porque a sua utilização das prestações mais caras do sistema (pensões de velhice) é, estruturalmente, quase nula. O saldo positivo é, portanto, um efeito demográfico puro.' },
  
  { type: 'title', content: 'IV. Análise de Impacto: O Cenário Contrafactual da Ausência de Contribuições' },
  { type: 'paragraph', content: 'Determinar "qual seria o défice se estas contribuições dos imigrantes não existisse" exige uma análise contrafactual.' },
  { type: 'paragraph', content: 'A metodologia correta para esta análise não é subtrair as contribuições brutas (ex: 2.200 M€) do saldo global, mas sim subtrair o saldo líquido (ex: 1.820 M€). Isto deve-se ao facto de que, num cenário de ausência destes imigrantes, o sistema deixaria de ter as suas contribuições (receita), mas também deixaria de pagar as suas prestações (despesa).' },
  
  { type: 'subtitle', content: 'Passo 1: O Saldo Global da Segurança Social' },
  { type: 'paragraph', content: 'Primeiro, é necessário estabelecer o saldo orçamental global (excedente) da Segurança Social, que tem sido apresentado como um sucesso da gestão financeira. De acordo com os relatórios da Unidade Técnica de Apoio Orçamental (UTAO):' },
  { type: 'list', content: [
    'O saldo global da Segurança Social em 2022 foi excedentário em +4.101 milhões de euros.',
    'O saldo global da Segurança Social em 2023 foi excedentário em +5.482 milhões de euros.'
  ]},
  
  { type: 'subtitle', content: 'Passo 2: Cálculo do Saldo Contrafactual' },
  { type: 'paragraph', content: 'Aplicando a metodologia correta, subtraímos o saldo líquido dos imigrantes (identificado na Secção II) ao saldo global do sistema:' },
  { type: 'list', content: [
    'Cenário Contrafactual 2022: Saldo Global Reportado: +4.101 M€. Remoção do Saldo Líquido Imigrante: -1.604,2 M€. Saldo Contrafactual (Sem Imigrantes): +2.496,8 M€',
    'Cenário Contrafactual 2023: Saldo Global Reportado: +5.482 M€. Remoção do Saldo Líquido Imigrante: -1.820 M€. Saldo Contrafactual (Sem Imigrantes): +3.662 M€'
  ]},
  
  { type: 'subtitle', content: 'Passo 3: Interpretação do Impacto' },
  { type: 'paragraph', content: 'O sistema, no seu todo, não entraria tecnicamente em défice em 2022 ou 2023. No entanto, o seu excedente — a poupança vital para a sustentabilidade futura e para o Fundo de Estabilização Financeira da Segurança Social (FEFSS) — seria drasticamente reduzido.' },
  { type: 'paragraph', content: 'A análise percentual revela a dimensão do impacto:' },
  { type: 'list', content: [
    'Em 2022, o saldo líquido dos imigrantes foi responsável por 39,1% (1.604,2 / 4.101) do excedente total da Segurança Social.',
    'Em 2023, o saldo líquido dos imigrantes foi responsável por 33,2% (1.820 / 5.482) do excedente total.'
  ]},
  { type: 'paragraph', content: 'A conclusão é que a "saúde financeira" e o excedente do sistema são estruturalmente dependentes da imigração. Cerca de um terço do excedente anual da Segurança Social não provém da população nativa, mas sim do saldo líquido positivo dos trabalhadores estrangeiros. A sua ausência não criaria um défice imediato, mas sim um "défice de sustentabilidade", pois anularia uma porção substancial da poupança necessária para garantir as pensões futuras, exigindo, como alternativa, um aumento da carga fiscal sobre os nacionais.' },
  
  { type: 'subtitle', content: 'Tabela 2: Análise Contrafactual do Excedente da Segurança Social (2022-2023)' },
  {
    type: 'table',
    content: {
      headers: ['Ano', '(A) Saldo Global SS Reportado (M€)', '(B) Saldo Líquido Imigrante (M€)', '(A-B) Saldo Contrafactual (M€)', 'Impacto: Saldo Imigrante como % do Excedente Global'],
      rows: [
        ['2022', '+4.101,0', '+1.604,2', '+2.496,8', '39,1%'],
        ['2023', '+5.482,0', '+1.820,0', '+3.662,0', '33,2%']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: Cálculo do analista baseado em dados da UTAO e do OM.' },
  
  { type: 'title', content: 'V. Validação: O Financiamento das Pensões de Nacionais Portugueses' },
  { type: 'paragraph', content: 'Afirmar que "muitas reformas são pagas a nacionais portugueses graças às contribuições dos imigrantes" é factualmente correta e pode ser quantificada.' },
  { type: 'paragraph', content: 'A validação assenta na mecânica fundamental do sistema de repartição:' },
  { type: 'list', content: [
    'O sistema não possui "contas individuais" de capitalização. As contribuições pagas (incluindo os aprox. 2.200 M€ dos imigrantes em 2023) entram num fundo comum.',
    'Este fundo comum é imediatamente usado para pagar as despesas correntes.',
    'A maior despesa corrente do sistema são as pensões, pagas esmagadoramente a nacionais portugueses, dado o perfil etário da população.'
  ]},
  { type: 'paragraph', content: 'Para quantificar a validação, comparamos o excedente gerado pelos imigrantes com a despesa total em pensões.' },
  
  { type: 'subtitle', content: 'Custo das Pensões (Dados de Execução 2024)' },
  { type: 'paragraph', content: 'De acordo com o relatório do Conselho das Finanças Públicas (CFP) sobre a execução orçamental da Segurança Social em 2024:' },
  { type: 'list', content: [
    'Despesa total com Pensões (Velhice, Sobrevivência, Invalidez): 23.972 M€',
    'Despesa específica com Pensões de Velhice: 17.375 M€'
  ]},
  
  { type: 'subtitle', content: 'A Validação' },
  { type: 'paragraph', content: 'O saldo líquido (excedente) gerado pelos imigrantes em 2023 foi de +1.820 milhões de euros.' },
  { type: 'paragraph', content: 'Este valor de 1.820 M€ é receita livre que o sistema arrecadou acima do que gastou com esta população. Este excedente foi, por definição mecânica, canalizado para cobrir as restantes despesas do sistema — primariamente, os 17.375 M€ em pensões de velhice.' },
  
  { 
    type: 'callout', 
    content: { 
      title: 'Cálculo de Validação', 
      text: '(Saldo Líquido Imigrante 2023) / (Despesa Total com Pensões de Velhice 2024) = 1.820 M€ / 17.375 M€ = 10,5%',
      type: 'success' as const
    } 
  },
  
  { type: 'paragraph', content: 'A afirmação está, portanto, validada e quantificada. O saldo líquido gerado pelos trabalhadores imigrantes (jovens e ativos) financiou o equivalente a 10,5% da totalidade da despesa com pensões de velhice do sistema de Segurança Social. Sem este contributo líquido, o sistema teria tido uma necessidade de financiamento adicional de 1.820 M€ em 2023 para cobrir integralmente as suas despesas de pensões.' },
  
  { type: 'title', content: 'VI. Conclusões: O Contributo Imigrante como Fator Estrutural de Solvabilidade' },
  { type: 'paragraph', content: 'A análise rigorosa dos dados oficiais da Segurança Social, do Conselho das Finanças Públicas e do Observatório das Migrações para o período 2020-2024 permite solidificar as seguintes conclusões:' },
  { type: 'list', content: [
    'Contribuintes Líquidos: Os imigrantes em Portugal são contribuintes líquidos substanciais para a Segurança Social. O seu saldo positivo (contribuições menos prestações) mais do que duplicou em três anos, crescendo de +802 M€ em 2020 para +1.820 M€ em 2023.',
    'Base Contributiva Crescente: A população imigrante representa uma fatia crescente e vital da base contributiva, totalizando já 14,4% de todos os contribuintes do sistema em 2023.',
    'Motor Demográfico: Este saldo positivo não é aleatório, mas sim estrutural. É impulsionado por um perfil demográfico de trabalhadores jovens (80,5% em idade ativa) e com taxas de atividade superiores às dos nacionais (+18,7 pp), que contribuem para o pilar das pensões de velhice (o mais caro) sem ainda o utilizarem.'
  ]},
  
  { type: 'subtitle', content: 'Respostas Diretas às Questões da Consulta' },
  { type: 'paragraph', content: 'A análise dos dados permite responder objetivamente às questões colocadas:' },
  { type: 'list', content: [
    'A porcentagem de contribuição: Em 2023, os imigrantes representavam 14,4% do total de contribuintes da Segurança Social.',
    'O impacto das contribuições: O impacto é um saldo líquido (excedente) de +1.820 milhões de euros em 2023. Este valor é formalmente descrito como "favorável para contrabalançar as contas públicas nacionais" e uma "dimensão importante do reforço e sustentabilidade da Segurança Social".',
    'O défice contrafactual: Se o contributo líquido dos imigrantes não existisse, o sistema não entraria em défice em 2023, mas o seu excedente (a sua poupança) seria 33,2% menor. O saldo global da SS cairia de +5.482 M€ para +3.662 M€.',
    'A validação do pagamento de reformas: A afirmação está validada. O sistema de repartição utiliza toda a receita para pagar toda a despesa. O excedente líquido de 1.820 M€ gerado pelos imigrantes foi usado para financiar as despesas correntes, financiando o equivalente a 10,5% de toda a despesa com pensões de velhice do sistema.'
  ]},
  
  { type: 'paragraph', content: 'Os dados oficiais dos últimos quatro anos demonstram, sem ambiguidade, que a população imigrante não constitui um "encargo" para a Segurança Social portuguesa. Pelo contrário, é um pilar demográfico e financeiro essencial que garante a solvência de curto prazo do sistema de repartição e financia diretamente uma parte substancial das pensões pagas aos nacionais.' },
  
  { type: 'title', content: 'Trabalhos Citados' },
  { type: 'list', content: [
    '1. MISS: Um Modelo para Avaliação da Sustentabilidade da Segurança Social Pública Portuguesa - Banco de Portugal, https://www.bportugal.pt/sites/default/files/anexos/papers/op200702.pdf',
    '2. Indicadores de Integração de Imigrantes 2023 - Poder360, https://static.poder360.com.br/2024/08/OM-Portugal-2023.pdf',
    '3. Indicadores de Integração de Imigrantes - Relatório Estatístico Anual 2019 - Animar, https://oldwww.animar-dl.pt/site/assets/files/5557/indicadores_de_integracao_de_imigrantes__relatorio_estatistico_anual_2019.pdf',
    '4. Indicadores de Integração de Imigrantes - Rede Social Golegã, https://redesocial.cm-golega.pt/wp-content/uploads/2023/08/Relatorio-Estatistico-Anual-Indicadores-de-Integracao-de-Imigrantes-2022-1.pdf',
    '5. Imigrantes pagam contribuições recorde de 1.200 milhões à Segurança Social em 2021, https://eco.sapo.pt/2022/12/21/imigrantes-pagam-contribuicoes-recorde-de-1-200-milhoes-a-seguranca-social-em-2021/',
    '6. Contribuições de imigrantes para Segurança Social portuguesa aumentam para recorde de 1200 milhões de euros - Observador, https://observador.pt/2022/12/21/contribuicoes-de-imigrantes-para-seguranca-social-portuguesa-aumentam-para-recorde-de-1200-milhoes-de-euros/',
    '7. "Sem imigrantes, havia setores em colapso". Quanto contribuíram? - Notícias ao Minuto, https://www.noticiasaominuto.com/economia/2463594/sem-imigrantes-havia-setores-em-colapso-quanto-contribuiram',
    '8. Nota Técnica n.º 3 - Dinâmica Demográfica e Sustentabilidade da Segurança Social, https://www.gep.mtsss.gov.pt/documents/10182/286709/CSSS_NT03.pdf/2519b2b3-9694-4d55-a606-a664fbdc88fb',
    '9. Imigrantes deram mais de 1,6 mil milhões de lucro à Segurança Social - Jornal Económico, https://jornaleconomico.sapo.pt/noticias/imigrantes-deram-mais-de-16-mil-milhoes-de-lucro-a-seguranca-social/',
    '10. Imigrantes ajudam na sustentabilidade da Previdência portuguesa - Poder360, https://www.poder360.com.br/poder-internacional/imigrantes-ajudam-na-sustentabilidade-da-previdencia-portuguesa/',
    '11. Imigrantes contribuíram com mais de 1600 milhões de euros para a Segurança Social, https://j.planicie.pt/blog/2023/12/21/imigrantes-contribuiram-com-mais-de-1600-milhoes-de-euros-para-a-seguranca-social/',
    '12. Segurança Social: imigrantes deram mais de 1.600 milhões de lucro - Idealista, https://www.idealista.pt/news/financas/mercado-laboral/2023/12/21/60758-seguranca-social-imigrantes-deram-mais-de-1-600-milhoes-de-lucro',
    '13. Imigrantes deram à Segurança Social sete vezes mais do que receberam - CNN Portugal, https://cnnportugal.iol.pt/seguranca-social/observatorio-das-migracoes/imigrantes-contribuiram-com-1-861-000-000-para-a-seguranca-social-quanto-receberam-em-prestacoes-sociais-257-000/20231218/658003e7d34e65afa2f8c417',
    '14. Crescimento da Segurança Social em 2024 foi graças aos trabalhadores imigrantes, https://www.esquerda.net/artigo/crescimento-da-seguranca-social-em-2024-foi-gracas-aos-trabalhadores-imigrantes/95783',
    '15. Relatório de Migrações e Asilo 2023 - AIMA, https://aima.gov.pt/documents/rma-2023.pdf',
    '16. Evolução Orçamental da Segurança Social e da CGA em 2024, https://www.cfp.pt/uploads/publicacoes_ficheiros/cfp-rel-03-2025.pdf',
    '17. Pensão Social de Velhice - Segurança Social Direta, https://www.seg-social.pt/ptss/pssd/menu/trabalho/reforma-invalidez/pensao-social-velhice',
    '18. Evolução Orçamental: janeiro a dezembro de 2023 | Parlamento.pt, https://app.parlamento.pt/webutils/docs/doc.pdf?path=aqtFTznw11TlSNHiyzJ2Y7xL1Lm5D6qCVZfXDSXPIoX5g14Wjh8g7EpIjHAtAzmmry5fs1E0la9LmatV65FGDEteJZTrGiWDpA7rTM2x8XJOcCvig5FyTE5x7ZLHfkecag95zyS20EBZwrzpnD2nwRe2fwN2ECAf0F47pzSyjeQOMr6BGdynoX9dKkrVqco9TnVrrriV0oe7bLzSbkovx5P8W9doPeL%2Fa0Jx%2BHm0gD%2FQvE7Nd00ivnqeNJ8iPQTYCymhPaa6wayMxscum06LX2QCuIiXod3SwYqIb4EIn7wmSVIFy7I87uXsBm4JfPZrfaPoZL7fSXfAUuNep1EVQQoQoWfaLkfdJDffyBxEJBQsNLpELGsYkn3edy7W8MkPq1GeESeqxSpIjxq0ER7PH93PuBjK%2B8fpr1B1uBZSWz5lKSScTne7dlU5XtICJ2vcc025gk0nSHgVmsZ47UplUAuReUajV5HNT5SvGSaYa1ZHcFMwCWX1zRVjMXKQu7rWZwINNEYsUue9VlKAcAC3TB0hAyzXnHoE1AJyxBsEeX8%3D&fich=UTAO-Rel-2-2024_Exec_Orc_Dez2023.pdf&Inline=true',
    '19. Evolução Orçamental da Segurança Social e da CGA em 2023 - Conselho das Finanças Públicas, https://www.cfp.pt/uploads/publicacoes_ficheiros/cfp-rel-06-2024.pdf',
    '20. Estudo mostra que imigrantes aliviam pressão sobre impostos em Portugal - Euro Dicas, https://www.eurodicas.com.br/menos-imigrantes-mais-carga-tributaria/',
    '21. Dados contrariam perceções. Imigração contribui mais para a Segurança Social e está longe de ser encargo - 24 Notícias, https://24noticias.sapo.pt/atualidade/artigos/dados-contrariam-percecoes-imigracao-contribui-mais-para-a-seguranca-social-e-esta-longe-de-ser-encargo'
  ]},
  
  { type: 'reference', content: 'Documento completo: Análise do Impacto das Contribuições de Imigrantes na Sustentabilidade do Sistema de Segurança Social Português (Período 2020-2024)' }
]
  },
  'labor-market': {
    ...laborMarket,
    stats: [
        { title: "Agricultura e Pescas", value: "41%", description: "dos trabalhadores são imigrantes, fortalecendo um setor vital." },
        { title: "Hotelaria e Restauração", value: "31%", description: "dos trabalhadores são imigrantes, sustentando a indústria do turismo." },
        { title: "Construção", value: "23%", description: "dos trabalhadores são imigrantes, ajudando a construir as infraestruturas de Portugal." }
    ],
    chart: UnemploymentChart,
    detailedContent: [
      { type: 'subtitle', content: 'Complementaridade Estrutural' },
      { type: 'paragraph', content: 'A ideia de que os imigrantes "roubam empregos" é um dos mitos mais persistentes e factualmente incorretos. Os dados mostram uma forte complementaridade: os trabalhadores estrangeiros concentram-se em setores e funções onde há uma escassez de mão-de-obra nacional. Esta dinâmica é vital para a saúde de indústrias chave como o turismo, a agricultura e a construção.'},
      { type: 'list', content: [
        'A sua presença permite que as empresas continuem a operar e a crescer.',
        'Preenchem vagas que, de outra forma, poderiam ficar vazias, limitando o crescimento económico.',
        'Apesar de uma taxa de desemprego mais elevada (14,3% vs. 6,1% para nacionais em 2022), isto reflete muitas vezes a vulnerabilidade inicial e barreiras de entrada, não uma competição direta por postos de trabalho.',
      ]},
      { type: 'subtitle', content: 'Presença Imigrante em Setores Chave (2023)' },
      {
        type: 'table',
        content: {
          headers: ['Setor de Atividade', 'Percentagem de Trabalhadores Imigrantes'],
          rows: [
            ['Agricultura, produção animal, caça, floresta e pescas', '41%'],
            ['Alojamento, restauração e similares', '31%'],
            ['Construção', '23%'],
            ['Atividades administrativas e dos serviços de apoio', '20%'],
          ]
        }
      }
    ]
  },
  'public-safety': {
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
  },
  'demographics': {
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
};

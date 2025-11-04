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
  { type: 'title', content: 'Secção 1: O Mito da Substituição: Análise Comparativa do Desemprego' },
  { type: 'paragraph', content: 'A análise da situação do emprego em Portugal nos últimos quatro anos exige, em primeiro lugar, a abordagem da perceção pública de que a mão-de-obra imigrante está a "substituir" os trabalhadores nacionais. Esta hipótese, frequentemente designada como "teoria da substituição", postula que os imigrantes competem diretamente pelos mesmos empregos que os nacionais, levando a um aumento do desemprego entre a população nativa. No entanto, uma análise rigorosa dos dados oficiais do Instituto Nacional de Estatística (INE) e de outras bases de dados estatísticos, como a Pordata, não só falha em validar esta hipótese, como aponta para uma realidade diametralmente oposta.' },
  
  { type: 'subtitle', content: '1.1. Contexto do Mercado de Trabalho Nacional (2021-2025)' },
  { type: 'paragraph', content: 'Para avaliar qualquer impacto de deslocamento, é fundamental primeiro caracterizar o estado geral do mercado de trabalho português. Os dados do INE para o período 2024-2025 demonstram um mercado de trabalho relativamente estável e com taxas de desemprego historicamente baixas, próximas do que muitos economistas considerariam pleno emprego técnico.' },
  { type: 'paragraph', content: 'Os relatórios de conjuntura do INE indicam que a taxa de desemprego global em Portugal tem flutuado numa faixa estreita. Por exemplo, a taxa de desemprego situou-se em 6,7% no quarto trimestre de 2024¹, após se ter fixado em 6,1% no terceiro trimestre de 2024.² Ao longo de 2025, os valores mensais mantiveram-se nesta ordem de grandeza, com registos de 6,3% em maio, 6,0% em junho, 5,8% em julho e 6,0% em setembro.⁴ O Banco de Portugal, compilando dados do INE, corrobora esta tendência de estabilidade.⁵' },
  { type: 'paragraph', content: 'Este cenário, caracterizado por uma taxa de desemprego global baixa e estável (entre 6,0% e 6,7%), não é consistente com uma narrativa de deslocamento laboral em massa. Num cenário de substituição generalizada, seria de esperar uma pressão ascendente significativa sobre a taxa de desemprego nacional, à medida que os trabalhadores nativos fossem sistematicamente preteridos. Os dados não refletem esta pressão.' },
  
  { type: 'subtitle', content: '1.2. O Dado Contrário: Taxas de Desemprego por Nacionalidade' },
  { type: 'paragraph', content: 'A refutação mais direta ao mito da substituição encontra-se na análise comparativa das taxas de desemprego entre nacionais e estrangeiros. Se os imigrantes estivessem a "tomar os empregos", seria logicamente esperado que a sua taxa de desemprego fosse inferior à dos nacionais (indicando que estão a ser selecionados preferencialmente) e que o desemprego nacional estivesse em ascensão.' },
  { type: 'paragraph', content: 'Os dados oficiais mostram exatamente o inverso. Um retrato da Pordata, divulgado por ocasião do Dia Internacional dos Migrantes, concluiu inequivocamente que a "taxa de desemprego entre imigrantes é o dobro da média nacional".⁶' },
  { type: 'paragraph', content: 'Dados mais granulares, citados pelo Jornal Económico com base na Pordata e referentes a 2022, quantificam esta disparidade de forma alarmante⁷:' },
  { type: 'list', content: [
    'Taxa de Desemprego Média Nacional (2022): 6,1%',
    'Taxa de Desemprego de Estrangeiros (Extracomunitários): 14,3%'
  ]},
  { type: 'paragraph', content: 'Esta discrepância de mais de 8 pontos percentuais demonstra que a população imigrante, particularmente a oriunda de países fora da União Europeia, enfrenta barreiras significativamente maiores à entrada e permanência no mercado de trabalho.' }
,
  
  { type: 'subtitle', content: '1.3. Aprofundamento da Análise: Precariedade, Rendimento e Pobreza' },
  { type: 'paragraph', content: 'A vulnerabilidade da população imigrante não se cinge ao desemprego. Os dados indicam que, mesmo quando empregados, os trabalhadores estrangeiros estão sujeitos a condições de maior precariedade e menor remuneração.' },
  { type: 'list', content: [
    'Precariedade Laboral: Em 2022, mais de um terço dos trabalhadores estrangeiros (aproximadamente 33,3%) possuía um contrato de trabalho temporário. Este valor contrasta fortemente com a realidade dos trabalhadores portugueses, onde apenas 16% se encontravam na mesma situação. Portugal foi, nesse ano, o quarto país da UE com maior precariedade laboral entre estrangeiros.⁷',
    'Diferencial Salarial: Em 2021, os trabalhadores estrangeiros ganhavam, em média, menos 94 euros por mês do que a média nacional.⁷',
    'Risco de Pobreza: Como consequência direta, em 2022, um em cada três estrangeiros (30,7%) vivia em risco de pobreza ou exclusão social, um valor 11 pontos percentuais acima do verificado para a população portuguesa (19,8%).⁷'
  ]},
  { type: 'paragraph', content: 'A narrativa que emerge destes dados é, portanto, a oposta à da substituição. A população imigrante não está a deslocar os nacionais de empregos estáveis e bem remunerados; está, em vez disso, a absorver uma parte desproporcional da precariedade e da vulnerabilidade do mercado de trabalho.¹⁰' },
  { type: 'paragraph', content: 'A elevada taxa de desemprego de 14,3% e a acentuada precariedade sugerem que a população imigrante funciona, em termos económicos, como um "exército de reserva" de mão-de-obra. Este grupo é mais vulnerável a flutuações económicas e ocupa posições de maior instabilidade, que os trabalhadores nacionais, beneficiando de uma taxa de desemprego de 6,1%, têm maior capacidade de recusar.' },
  
  { type: 'subtitle', content: 'Tabela 1: Análise Comparativa das Taxas de Desemprego e Precariedade (c. 2022)' },
  {
    type: 'table',
    content: {
      headers: ['Indicador', 'Média Nacional', 'População Estrangeira (Extracomunitária)', 'Conclusão da Análise'],
      rows: [
        ['Taxa de Desemprego (%)', '6,1%', '14,3%', 'Os imigrantes enfrentam o dobro da taxa de desemprego, refutando a ideia de "substituição".'],
        ['Taxa de Contratos Temporários (%)', '16,0%', '≈ 33,3%', 'A precariedade laboral é duas vezes mais prevalente na população imigrante.'],
        ['Risco de Pobreza ou Exclusão Social (%)', '19,8%', '30,7%', 'A vulnerabilidade social é significativamente maior entre os estrangeiros.']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: Pordata, conforme reportado em ⁷; INE ¹' },
  
  { type: 'title', content: 'Secção 2: A Tese da Complementaridade: Escassez Setorial e Vagas Não Preenchidas' },
  { type: 'paragraph', content: 'Tendo refutado a hipótese da substituição, a análise foca-se na validação da narrativa alternativa: a da complementaridade. Esta tese postula que os nacionais portugueses demonstram uma relutância crescente em aceitar empregos em setores específicos — caracterizados por baixos salários, elevada penosidade física ou horários exigentes — e que a mão-de-obra imigrante preenche estas vagas, que de outra forma ficariam por ocupar, garantindo o funcionamento de setores vitais da economia.' },
  
  { type: 'subtitle', content: '2.1. O Diagnóstico Oficial: Escassez de Mão-de-Obra em Portugal' },
  { type: 'paragraph', content: 'Relatórios oficiais recentes confirmam que Portugal enfrenta uma escassez de mão-de-obra estrutural, que não se deve apenas à falta de qualificações, mas também à falta de disponibilidade da população ativa para certas funções.' },
  { type: 'paragraph', content: 'Um relatório de 2024 do Gabinete de Estratégia e Estudos (GEP) do Ministério do Trabalho sobre a escassez de mão-de-obra¹² identifica dois tipos de escassez em Portugal:' },
  { type: 'list', content: [
    'Escassez Quantitativa: Uma insuficiência geral de mão-de-obra causada por tendências demográficas adversas (envelhecimento da população) e pela emigração de nacionais em idade ativa.',
    'Escassez Qualitativa (Desajustamentos): Ocorre quando a oferta de trabalho não corresponde à procura, mesmo com desemprego existente.'
  ]},
  { type: 'paragraph', content: 'Fundamentalmente, o relatório do GEP¹² atribui esta escassez qualitativa, em parte, a "desajustamentos de preferências". Estes desajustamentos são definidos como a relutância da força de trabalho em aceitar vagas devido a perceções negativas sobre a qualidade/imagem desses empregos e, crucialmente, devido às "condições de trabalho oferecidas (remunerações, horários de trabalho, penosidade das tarefas, etc.)".'},
  { type: 'paragraph', content: 'Esta escassez estrutural é visível nos dados do Instituto do Emprego e Formação Profissional (IEFP). Relatórios de 2021 já alertavam para a existência de mais de 20.000 a 23.000 vagas de emprego "que ninguém quer", acumuladas no IEFP, um número que duplicou desde 2017.¹³' },
  { type: 'paragraph', content: 'Os setores identificados com o maior número de ofertas acumuladas e de difícil cobertura são¹³:' },
  { type: 'list', content: [
    'Alojamento e Restauração',
    'Construção',
    'Atividades Imobiliárias e Administrativas (que incluem serviços de limpeza)'
  ]},
  { type: 'paragraph', content: 'Uma consulta direta às ofertas de emprego ativas no portal do IEFP¹⁵ corrobora esta lista, destacando profissões específicas com centenas de vagas por preencher:' },
  { type: 'list', content: [
    'Empregado de Mesa (186 vagas)',
    'Ajudante de Cozinha (165 vagas)',
    'Pedreiro (145 vagas)',
    'Cozinheiro (144 vagas)',
    'Trabalhador de Limpeza em Escritórios, Hotéis e outros (117 vagas)'
  ]},
  { type: 'paragraph', content: 'O presidente do IEFP, citado num artigo sobre estas vagas por preencher, atribuiu esta dificuldade ao "trabalho intensivo" e aos "salários mais baixos" inerentes a estas atividades, que levam os portugueses a rejeitá-las.¹⁴' },
  
  { type: 'subtitle', content: '2.2. A Solução do Mercado: Concentração da Mão-de-Obra Imigrante' },
  { type: 'paragraph', content: 'A tese da complementaridade é validada quando se justapõem os dados das vagas "indesejadas" pelos nacionais (Secção 2.1) com os dados sobre onde, de facto, a mão-de-obra imigrante está a trabalhar. A correspondência é quase perfeita.' },
  { type: 'paragraph', content: 'Dados de dezembro de 2023, compilados pelo Instituto +Liberdade¹⁶, revelam a extraordinária concentração de trabalhadores estrangeiros precisamente nos setores onde a escassez de mão-de-obra nacional é mais aguda:' },
  { type: 'list', content: [
    'Agricultura e Pesca: 41% de todos os trabalhadores são estrangeiros.',
    'Alojamento e Restauração: 31% de todos os trabalhadores são estrangeiros.',
    'Construção: 23% de todos os trabalhadores são estrangeiros.'
  ]},
  { type: 'paragraph', content: 'Outros relatórios de 2023, citando o Banco de Portugal e o Observatório das Migrações¹⁷, confirmam esta dependência estrutural, com números muito semelhantes: 42% na Agricultura, 31% na Construção Civil e 23% no Turismo. Em algumas regiões, a dependência é total: 90% dos trabalhadores das colheitas agrícolas são imigrantes.¹⁷ No setor do turismo, a predominância é clara, com 8 em cada 10 trabalhadores estrangeiros a serem de nacionalidade brasileira.¹⁷' },
  
  { type: 'subtitle', content: '2.3. A Perspetiva dos Empregadores' },
  { type: 'paragraph', content: 'As associações patronais destes setores têm sido vocais sobre a sua incapacidade de recrutar trabalhadores nacionais, validando a narrativa de que estas vagas são preenchidas por imigrantes por necessidade.' },
  { type: 'paragraph', content: 'A AHRESP (Associação da Hotelaria, Restauração e Similares de Portugal) tem reportado consistentemente, em inquéritos de 2023 e 2024, as enormes "dificuldades no recrutamento".¹⁸ Um estudo de outubro de 2024²⁰ detalhou que, para além da "falta de formação" (66%), uma dificuldade primária é a "pouca oferta ou falta de pessoas interessadas" para as vagas disponíveis.' },
  { type: 'paragraph', content: 'Como consequência direta e inevitável, o mesmo estudo da AHRESP concluiu que 59% das empresas de restauração e hotelaria em Portugal já empregam trabalhadores estrangeiros.²⁰' },
  { type: 'paragraph', content: 'Nos setores da Agricultura (CAP) e da Construção, a posição é idêntica, com as confederações a solicitarem ativamente a criação de mais canais para a entrada de mão-de-obra estrangeira, identificando-a como essencial para a sobrevivência e expansão dos seus setores.²¹' },
  { type: 'paragraph', content: 'A análise cruzada destes três conjuntos de dados (escassez oficial, vagas não preenchidas e concentração de imigrantes) valida conclusivamente a Narrativa 1. A imigração não está a competir com os nacionais; está a permitir que setores inteiros da economia portuguesa funcionem, preenchendo as vagas que a força de trabalho nacional, devido a baixos salários, penosidade e melhores alternativas (dada a baixa taxa de desemprego geral), deixou vagas.' },
  
  { type: 'subtitle', content: 'Tabela 2: Escassez de Mão-de-Obra Nacional vs. Concentração de Mão-de-Obra Imigrante (c. 2023-2024)' },
  {
    type: 'table',
    content: {
      headers: ['Setor de Atividade', 'Evidência de Escassez de Mão-de-Obra Nacional', 'Percentagem da Força de Trabalho que é Imigrante'],
      rows: [
        ['Alojamento e Restauração', '"Desajustamento de preferências".¹² Milhares de vagas no IEFP (Empregado de Mesa, Cozinheiro).¹³ AHRESP reporta "falta de pessoas interessadas".²⁰', '31%'],
        ['Agricultura e Pesca', 'Trabalho intensivo e de baixa remuneração.¹⁴ Empregadores pedem ativamente mais mão-de-obra estrangeira.²¹', '41% - 42% (Chegando a 90% em colheitas sazonais¹⁷)'],
        ['Construção', 'Elevado número de vagas "que ninguém quer" no IEFP (Pedreiro).¹³', '23% - 31%'],
        ['Atividades de Limpeza', '"Desajustamento de preferências".¹² Elevado número de vagas (Trabalhador de Limpeza) no IEFP.¹⁵', '(Incluído em "Atividades Administrativas" - 28%)']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: GEP ¹²; IEFP ¹³; AHRESP ²⁰; Instituto +Liberdade ¹⁶; Banco de Portugal ¹⁷' },
  
  { type: 'title', content: 'Secção 3: O Paradoxo Português: Emigração Qualificada e Imigração Essencial' },
  { type: 'paragraph', content: 'A dinâmica de complementaridade descrita na Secção 2 não ocorre num vácuo. É, em grande medida, uma consequência direta de uma segunda narrativa: a transformação demográfica de Portugal. O país enfrenta um paradoxo: enquanto se torna estruturalmente dependente de mão-de-obra imigrante para setores de baixa qualificação, está simultaneamente a "exportar" o seu próprio capital humano jovem e qualificado. Esta "fuga de cérebros" cria o vácuo demográfico e laboral que a imigração (com um perfil distinto) ajuda a mitigar.' },
  
  { type: 'subtitle', content: '3.1. O Vácuo Demográfico: A "Fuga de Cérebros" Nacional' },
  { type: 'paragraph', content: 'Portugal continua a ser, estruturalmente, um país de emigração. Esta saída não é um fenómeno do passado; é uma realidade contemporânea com um impacto profundo na população em idade ativa.' },
  { type: 'list', content: [
    'Fluxo de Saída: Em 2023, estima-se que 70.000 portugueses emigraram, um número que se manteve estável em relação a 2022, com a Suíça a reassumir a posição de principal destino.²³',
    'Impacto no Stock Jovem: O efeito acumulado desta emigração contínua é alarmante. De acordo com dados do Observatório da Emigração, 30% dos jovens nascidos em Portugal vivem atualmente fora do país.²⁵'
  ]},
  { type: 'paragraph', content: 'Esta emigração é crescentemente qualificada, um fenómeno globalmente conhecido como "brain drain" (fuga de cérebros).²⁶ Os dados do relatório "Education at a Glance 2024" da OCDE²⁷ fornecem um contexto comparativo crucial. Embora o relatório não isole a qualificação dos emigrantes, compara a qualificação da população residente em Portugal com a média dos países da OCDE (os principais destinos da emigração qualificada portuguesa).' },
  { type: 'list', content: [
    'População Residente em Portugal (25-64 anos): Apenas 30% possui ensino superior. Uma grande fatia (41%) ainda não possui o ensino secundário completo.',
    'Média da OCDE (25-64 anos): 41% possui ensino superior, e apenas 19% não têm o ensino secundário.'
  ]},
  { type: 'paragraph', content: 'Esta disparidade sugere que os portugueses qualificados (com 30% de prevalência) estão a emigrar para economias onde a sua qualificação é a norma (41% de prevalência), procurando remunerações e oportunidades de carreira compatíveis com a sua formação, que o mercado de trabalho nacional (onde 41% da força de trabalho tem baixas qualificações) não consegue oferecer.' },
  
  { type: 'subtitle', content: '3.2. O Preenchimento Demográfico: O Perfil da Imigração' },
  { type: 'paragraph', content: 'A população nacional portuguesa está a envelhecer a um ritmo acelerado. O relatório do GEP sobre escassez de mão-de-obra¹² identifica o envelhecimento como uma causa primária da escassez quantitativa.' },
  { type: 'paragraph', content: 'Dados da Pordata de 2021²⁸ ilustram esta crise demográfica de forma clara:' },
  { type: 'list', content: [
    'Índice de Envelhecimento (Portugueses): 189 idosos (65+ anos) por cada 100 jovens (menos de 15 anos).'
  ]},
  { type: 'paragraph', content: 'A população imigrante que entra em Portugal apresenta um perfil demográfico vital, que atua como um contrapeso direto a esta tendência.' },
  { type: 'list', content: [
    'Índice de Envelhecimento (Estrangeiros): Apenas 101 idosos por cada 100 jovens.²⁸',
    'População em Idade Ativa: Dados do Relatório de Migração, Asilo e AIMA²⁹ mostram que 80,5% a 85% dos cidadãos estrangeiros residentes estão em idade potencialmente ativa (15-64 anos). O grupo etário mais expressivo é o dos 25-44 anos.'
  ]},
  { type: 'paragraph', content: 'A imigração, portanto, não está apenas a preencher vagas de emprego; está a preencher um vácuo demográfico, injetando juventude numa força de trabalho em rápido envelhecimento.' },
  { type: 'paragraph', content: 'Esta análise valida a Narrativa 2. Portugal está a participar numa "troca assimétrica". Está a exportar os seus jovens (30% da coorte)²⁵ e, em particular, os seus "cérebros"²⁶, para economias de maior qualificação da OCDE.²⁷ Simultaneamente, os nacionais que permanecem, mais velhos e mais qualificados, evitam os empregos de baixa qualificação e alta intensidade descritos na Secção 2.' },
  { type: 'paragraph', content: 'Isto cria um duplo vácuo: um vácuo demográfico (falta de jovens para sustentar o sistema) e um vácuo de mão-de-obra nos setores essenciais (agricultura, construção, restauração). A imigração, que é estruturalmente jovem²⁹ e que se concentra precisamente nesses setores¹⁶, preenche ambos os vácuos em simultâneo.' },
  { type: 'paragraph', content: 'A emigração de nacionais qualificados não "abre espaço" 1-para-1 para os imigrantes. Ela cria uma crise estrutural (demográfica e de mão-de-obra) que a imigração é a principal solução de mercado para mitigar, permitindo que a economia e o Estado Social continuem a funcionar.' },
  
  { type: 'subtitle', content: 'Tabela 3: O Paradoxo Demográfico: Perfis Comparativos (Nacionais vs. Imigrantes)' },
  {
    type: 'table',
    content: {
      headers: ['Indicador Demográfico/Laboral', 'População Nacional / Residente', 'População Emigrante', 'População Imigrante'],
      rows: [
        ['Índice de Envelhecimento (2021)', '189 (idosos p/ 100 jovens)', 'N/A (Maioritariamente jovem)', '101 (idosos p/ 100 jovens)'],
        ['% População em Idade Ativa (15-64)', '(Em declínio)', 'N/A (Maioritariamente em idade ativa)', '80,5% - 85,0%'],
        ['% Jovens (Nascidos em PT) no Estrangeiro', 'N/A', '30%', 'N/A'],
        ['% com Ensino Superior (Pop. 25-64)', '30%', '→ Destinos com 41% (Média OCDE)', 'N/A (Perfil variado, mas concentrado em setores de baixa qualificação)'],
        ['Concentração Laboral', 'Distribuição geral (com relutância em setores-chave)', '→ Empregos qualificados na OCDE', 'Concentração massiva em Agricultura (41%), Restauração (31%), Construção (23%)']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: Pordata ²⁸; AIMA ²⁹; OCDE ²⁷; Observatório da Emigração ²⁵' },
,
  
  { type: 'title', content: 'Secção 4: Cenário Contrafactual: O Impacto Económico e Fiscal de uma "Imigração Zero"' },
  { type: 'paragraph', content: 'A secção final deste relatório executa o exercício de cenário simulado: modelar as consequências económicas e fiscais de uma interrupção abrupta da imigração em Portugal ("imigração zero"), com foco nos setores críticos identificados. Esta análise quantifica a dependência estrutural que as secções anteriores estabeleceram qualitativamente.' },
  
  { type: 'subtitle', content: '4.1. O Pilar da Economia Real: Dependência do PIB' },
  { type: 'paragraph', content: 'Os setores identificados na Secção 2 (Agricultura, Construção, Hotelaria/Restauração) não são periféricos; são pilares centrais da economia portuguesa e do seu perfil exportador.' },
  { type: 'paragraph', content: 'Dados de 2023¹⁷ quantificam o seu peso no Produto Interno Bruto (PIB):' },
  { type: 'list', content: [
    'Agricultura e Construção Civil: Corresponderam, em conjunto, a 7% do PIB português em 2023.',
    'Turismo (Alojamento e Restauração): Equivalia a 10% do PIB no mesmo ano.'
  ]},
  { type: 'paragraph', content: 'Combinados, estes setores altamente dependentes de mão-de-obra estrangeira representam, no mínimo, 17% do PIB de Portugal. A importância do turismo é ainda mais acentuada, tendo sido responsável por 20% das exportações totais e 45% das prestações de serviços em 2023.¹⁷' },
  { type: 'paragraph', content: 'A análise contrafactual é direta: num cenário de "imigração zero", estas vagas não seriam preenchidas pela mão-de-obra nacional. Como demonstrado na Secção 2, existe um "desajustamento de preferências" estrutural¹² e uma "falta de pessoas interessadas"²⁰ para estas funções.' },
  { type: 'paragraph', content: 'A consequência não seria uma substituição de trabalhadores, mas sim um colapso da capacidade produtiva em setores que representam 17% da economia nacional. Sem os 41% de trabalhadores estrangeiros na agricultura, os 31% na restauração e os 23% na construção¹⁶, a capacidade de colheita, de construção de infraestruturas e de resposta à procura turística (que gera 20% das exportações) seria severamente comprometida. O artigo que cita estes dados é conclusivo: "Sem os imigrantes, Portugal não teria a capacidade produtiva que alcançou".¹⁷' },
  
  { type: 'subtitle', content: '4.2. O Pilar da Sustentabilidade Fiscal: A Segurança Social' },
  { type: 'paragraph', content: 'Para além do impacto na economia real (PIB), o impacto mais dramático de um cenário de "imigração zero" seria na sustentabilidade do Estado Social português, especificamente no sistema de pensões (Segurança Social).' },
  { type: 'paragraph', content: 'Como detalhado na Secção 3, a população portuguesa está a envelhecer rapidamente (índice de 189)²⁸, colocando o sistema de Segurança Social sob enorme pressão (mais beneficiários de pensões, menos contribuintes ativos). A população imigrante, sendo estruturalmente mais jovem (índice de 101)²⁸ e com uma taxa de atividade elevada²⁹, funciona como um contribuinte líquido vital para este sistema.' },
  { type: 'paragraph', content: 'Os dados sobre o saldo líquido (contribuições dos imigrantes menos prestações sociais recebidas por eles) são claros e revelam uma tendência de contribuição crescente³⁰:' },
  { type: 'list', content: [
    'Saldo Líquido (2021): Um saldo positivo de +968 milhões de euros (resultante de 1.293 milhões de euros em contribuições contra apenas 325 milhões de euros em prestações sociais).²⁸',
    'Saldo Líquido (2022): O saldo positivo aumentou 19% para +1.604,2 milhões de euros.³¹',
    'Saldo Líquido (2023/2024): O saldo positivo voltou a crescer, atingindo +1.820 milhões de euros (quase 2.200 milhões de euros em contribuições contra aproximadamente 380 milhões de euros em prestações sociais).³²'
  ]},
  { type: 'paragraph', content: 'Esta contribuição líquida de 1,82 mil milhões de euros por ano, gerada por uma população que representava apenas 7,6% do total em 2022⁶, é um pilar fundamental da sustentabilidade fiscal de Portugal.³³' },
  
  { type: 'subtitle', content: '4.3. O Cenário "Imigração Zero": O Colapso Fiscal' },
  { type: 'paragraph', content: 'Um estudo de impacto fiscal, citado pela Eurodicas, modelou precisamente este cenário contrafactual.³⁴ O estudo questionou o que aconteceria se Portugal parasse de receber imigrantes e, consequentemente, perdesse as suas contribuições fiscais e para a Segurança Social.' },
  { type: 'paragraph', content: 'As conclusões são severas:' },
  { type: 'list', content: [
    'Aumento da Carga Fiscal: Para manter o atual nível de serviços públicos (saúde, pensões, educação) sem gerar défice, a carga fiscal total em Portugal teria de subir de cerca de 35% do PIB para 43% do PIB.³⁴',
    'Custo por Cidadão: Este aumento de 8 pontos percentuais do PIB em impostos não é um valor abstrato. O estudo calculou que cada cidadão nacional teria de pagar, em média, mais 1.700 euros por ano em impostos e contribuições para compensar a ausência dos trabalhadores estrangeiros.³⁴'
  ]},
  { type: 'paragraph', content: 'Este cenário demonstra que a imigração, para além de essencial para a economia real, funciona como um subsídio demográfico e fiscal que permite aos cidadãos nacionais usufruir de uma carga fiscal mais baixa do que a que seria necessária para sustentar o seu próprio sistema de bem-estar social, dado o seu perfil demográfico envelhecido.' },
  
  { type: 'subtitle', content: 'Tabela 4: Análise de Impacto do Cenário "Imigração Zero" (c. 2023-2024)' },
  {
    type: 'table',
    content: {
      headers: ['Métrica de Impacto', 'Valor (com Imigração Atual)', 'Projeção (Cenário "Imigração Zero")'],
      rows: [
        ['Saldo Líquido (Imigrantes) p/ Segurança Social', '+1,82 mil milhões € (por ano)', '0 € (Perda imediata desta receita líquida)'],
        ['Carga Fiscal Total (em % do PIB)', '≈ 35% do PIB', '≈ 43% do PIB'],
        ['Custo Fiscal Adicional por Cidadão Nacional', '0 € (Referência)', '+ 1.700 € (por ano)'],
        ['Capacidade Produtiva (Setores-Chave)', '100% (Operacional)', 'Colapso da capacidade em 17% do PIB (Agricultura, Construção, Turismo)']
      ]
    }
  },
  { type: 'reference', content: 'Fontes: Eurodicas ³⁴; Observatório das Migrações ³¹; Pordata ²⁸; Banco de Portugal ¹⁷' }
,
  
  { type: 'title', content: 'Secção 5: Síntese Conclusiva: A Imigração como Complementaridade e Sustentabilidade' },
  { type: 'paragraph', content: 'A análise exaustiva dos dados oficiais e relatórios institucionais do período 2021-2025 permite responder cabalmente às quatro hipóteses levantadas, substituindo a perceção mítica pela realidade empírica.' },
  
  { type: 'subtitle', content: '5.1. Revisão das Hipóteses' },
  { type: 'paragraph', content: 'Mito da Substituição ("Tomar os Empregos"): REJEITADO.' },
  { type: 'paragraph', content: 'Os dados não apoiam esta narrativa. Pelo contrário, refutam-na categoricamente. A população imigrante, especialmente a extracomunitária, enfrenta taxas de desemprego (14,3%) que são mais do dobro da média nacional (6,1%)⁷, além de níveis superiores de precariedade (33% vs 16%)⁷ e risco de pobreza. Isto indica vulnerabilidade e absorção de choques, não o deslocamento de nacionais.' },
  { type: 'paragraph', content: 'Narrativa 1 (Complementaridade Setorial): VALIDADA.' },
  { type: 'paragraph', content: 'A análise valida uma correspondência direta entre as necessidades do mercado e o perfil da mão-de-obra imigrante. Relatórios do GEP¹² e do IEFP¹³ confirmam uma escassez estrutural de mão-de-obra nacional em setores de baixos salários e alta intensidade (construção, restauração, agricultura), devido a "desajustamentos de preferências". Os dados de emprego¹⁶ mostram que os imigrantes estão massivamente concentrados precisamente nesses setores (41% na agricultura, 31% na restauração), provando que preenchem vagas que os nacionais não ocupam.' },
  { type: 'paragraph', content: 'Narrativa 2 (Fuga de Cérebros e Vácuo Demográfico): VALIDADA.' },
  { type: 'paragraph', content: 'Portugal experiencia uma troca demográfica assimétrica. O país "exporta" uma percentagem significativa da sua juventude (30% dos nascidos em Portugal vivem fora)²⁵ e dos seus quadros qualificados ("fuga de cérebros").²⁶ Isto cria um duplo vácuo: (1) um vácuo demográfico, com a população nacional a envelhecer rapidamente (índice de 189)²⁸, e (2) um vácuo de mão-de-obra nos setores essenciais deixados vagos. A imigração, estruturalmente mais jovem (índice de 101)²⁸ e concentrada nesses setores¹⁶, preenche simultaneamente ambos os vácuos.' },
  { type: 'paragraph', content: 'Cenário Contrafactual ("Imigração Zero"): IMPACTO SEVERO CONFIRMADO.' },
  { type: 'paragraph', content: 'O exercício de cenário demonstra que a imigração é um pilar da estabilidade macroeconómica portuguesa. A sua ausência implicaria (1) um colapso da capacidade produtiva em setores que representam 17% do PIB¹⁷ e (2) um colapso fiscal. A perda do saldo líquido de +1,82 mil milhões de euros/ano para a Segurança Social³² exigiria um aumento da carga fiscal de 35% para 43% do PIB, custando a cada cidadão nacional um adicional de 1.700€ por ano.³⁴' },
  
  { type: 'subtitle', content: '5.2. Conclusão Final' },
  { type: 'paragraph', content: 'A análise dos dados oficiais de 2021 a 2025 demonstra que a imigração não é uma ameaça ao emprego dos nacionais portugueses. Pelo contrário, funciona como um mecanismo de complementaridade estrutural e sustentabilidade fiscal.' },
  { type: 'paragraph', content: 'A economia portuguesa, confrontada com os desafios gémeos de uma demografia em envelhecimento²⁸ e da emigração contínua do seu capital humano qualificado²⁵, tornou-se estruturalmente dependente da mão-de-obra imigrante. Esta mão-de-obra ocupa as vagas essenciais que a força de trabalho nacional, mais envelhecida e com maior capacidade de escolha, já não preenche.' },
  { type: 'paragraph', content: 'Simultaneamente, o perfil etário jovem dos imigrantes²⁹ permite-lhes ser contribuintes líquidos massivos para o Estado Social³², financiando o sistema de pensões do qual a população nacional, em envelhecimento, depende. A imigração, portanto, não é a causa dos problemas do mercado de trabalho português; é, de acordo com os dados, uma solução vital para a sua sustentabilidade económica e fiscal.' },
  
  { type: 'title', content: 'Trabalhos Citados' },
  { type: 'list', content: [
    '1. The unemployment rate stood at 6.7% in the 4th quarter of 2024 and at 6.4% in 2024 - Statistics Portugal - Web Portal, https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=695019173&DESTAQUESmodo=2',
    '2. The unemployment rate remained at 6.1% - Statistics Portugal - Web Portal, https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=645506450&DESTAQUESmodo=2&xlang=en',
    '3. Portal do INE, https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_pesquisa&frm_accao=PESQUISAR&frm_show_page_num=1&frm_modo_pesquisa=PESQUISA_SIMPLES&frm_texto=desem&frm_modo_texto=MODO_TEXTO_ALL&frm_data_ini=&frm_data_fim=&frm_tema=QUALQUER_TEMA&frm_area=o_ine_area_Destaques&xlang=pt',
    '4. taxa de desemprego - Portal do INE, https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_pesquisa&frm_accao=PESQUISAR&frm_show_page_num=1&frm_modo_pesquisa=PESQUISA_SIMPLES&frm_texto=desemprego&frm_modo_texto=MODO_TEXTO_ALL&frm_data_ini=&frm_data_fim=&frm_tema=QUALQUER_TEMA&frm_area=o_ine_area_Destaques&xlang=pt',
    '5. Consulte as estatísticas da população, emprego e desemprego para o segundo trimestre de 2025 | BPstat - Banco de Portugal, https://bpstat.bportugal.pt/conteudos/noticias/1301',
    '6. Taxa de desemprego entre imigrantes é o dobro da média nacional - DN, https://www.dn.pt/arquivo/diario-de-noticias/taxa-de-desemprego-entre-imigrantes-e-o-dobro-da-media-nacional-17518904.html',
    '7. Trabalhadores estrangeiros enfrentam mais desemprego e ganham menos, https://jornaleconomico.sapo.pt/noticias/trabalhadores-estrangeiros-enfrentam-mais-desemprego-e-ganham-menos/',
    '8. Number of foreigners in Portugal doubles, https://www.theportugalnews.com/news/2023-12-18/number-of-foreigners-in-portugal-doubles/84301',
    '9. Número de estrangeiros em Portugal duplicou em 10 anos - Diário do Minho, https://www.diariodominho.pt/noticias/nacional/2023-12-18-numero-de-estrangeiros-em-portugal-duplicou-em-10-anos-65800af084e1b',
    '10. Imigrantes ocupam setores com carência de trabalhadores e enfrentam maior precariedade, https://eco.sapo.pt/2025/07/29/imigrantes-ocupam-setores-com-carencia-de-trabalhadores-e-enfrentam-maior-precariedade/',
    '11. Imigrantes em Portugal ocupam setores com escassez de mão-de-obra, mas enfrentam maior precariedade - RHmagazine, https://rhmagazine.pt/imigrantes-em-portugal-ocupam-setores-com-escassez-de-mao-de-obra-mas-enfrentam-maior-precariedade/',
    '12. Escassez de mão-de-obra em Portugal | 2024 - Análises e Notas ..., https://www.gep.mtsss.gov.pt/documents/10182/80545/ANT_Escassez_+de_maode-obra_2024.pdf/de093e2e-de49-4ab6-8433-1611eca4a5a2',
    '13. Há mais de 20 mil vagas de emprego que ninguém quer - ZAP Notícias, https://zap.aeiou.pt/20-mil-vagas-emprego-ninguem-quer-429467',
    '14. Vagas: 19 mil empregos que ninguém quer - TVI Notícias - IOL, https://tvi.iol.pt/noticias/desemprego/iefp/vagas-19-mil-empregos-que-ninguem-quer',
    '15. Pesquisa - Iefponline, https://iefponline.iefp.pt/IEFP/pesquisas/search.do?cat=ofertaEmprego',
    '16. Trabalhadores estrangeiros em Portugal — Instituto +Liberdade, https://maisliberdade.pt/maisfactos/trabalhadores-estrangeiros-em-portugal/',
    '17. Imigrantes sustentam boa parte do crescimento econômico de ..., https://opiniaoempauta.com.br/imigrantes-sustentam-boa-parte-do-crescimento-economico-de-portugal/',
    '18. Metade dos restaurantes tem falta de trabalhadores e maioria quer, https://dinheirovivo.dn.pt/metade-dos-restaurantes-tem-falta-de-trabalhadores-e-maioria-quer-contratar-estrangeiros-16745085.html',
    '19. Inquéritos - Magazine de Negócios AHRESP, https://magazineahresp.com/universo-ahresp/inqueritos/',
    '20. Estudos da AHRESP apontam para redução do negócio e desmotivação dos trabalhadores - Diário de Aveiro, https://www.diarioaveiro.pt/2024/10/15/estudos-da-ahresp-apontam-para-reducao-do-negocio-e-desmotivacao-dos-trabalhadores/',
    '21. Construção, hotelaria e agricultura pedem mais mão de obra estrangeira - Idealista, https://www.idealista.pt/news/imobiliario/construcao/2024/11/19/66776-construcao-hotelaria-e-agricultura-pedem-mais-mao-de-obra-estrangeira',
    '22. Anuário do Sector Agroalimentar de Portugal 2024 - CAP - Confederação dos Agricultores de Portugal, https://www.cap.pt/storage/app/media/2024/Alimental/Alimental%20anuario%20portugal%20interactivo_compressed.pdf',
    '23. 70 mil portugueses emigraram em 2023, aponta relatório. Maioria são homens - DN, https://www.dn.pt/sociedade/70-mil-portugueses-emigraram-em-2023-aponta-relat%C3%B3rio-maioria-s%C3%A3o-homens',
    '24. Em 2023, emigraram 70 mil portugueses, na sua maioria, homens - sinalAberto, https://sinalaberto.pt/em-2023-emigraram-70-mil-portugueses-na-sua-maioria-homens/',
    '25. OEm nos média - Observatório da Emigração, https://observatorioemigracao.pt/np4/1351/',
    '26. Portugal perde nove mil milhões de euros com a fuga de cérebros - Detalhe de Artigo, https://www.compete2020.gov.pt/detalhe/detalhe/noticia_DE',
    '27. Equidade na Educação, https://www.dgeec.medu.pt/api/ficheiros/66e7f3de081cd43c247ab6f9',
    '28. População portuguesa e imigração - Instituto +Liberdade, https://maisliberdade.pt/maisfactos/populacao-portuguesa-e-imigracao/',
    '29. Relatório de Migrações e Asilo 2023 - AIMA, https://aima.gov.pt/documents/rma-2023.pdf',
    '30. Contribuições de imigrantes para Segurança Social portuguesa aumentam para recorde de 1200 milhões de euros - Observador, https://observador.pt/2022/12/21/contribuicoes-de-imigrantes-para-seguranca-social-portuguesa-aumentam-para-recorde-de-1200-milhoes-de-euros/',
    '31. O Impacto Positivo dos Imigrantes na Segurança Social de Portugal ..., https://apmredemut.pt/2024/01/03/o-impacto-positivo-dos-imigrantes-na-seguranca-social-de-portugal/',
    '32. Crescimento da Segurança Social em 2024 foi graças aos trabalhadores imigrantes, https://www.esquerda.net/artigo/crescimento-da-seguranca-social-em-2024-foi-gracas-aos-trabalhadores-imigrantes/95783',
    '33. Imigrantes impulsionam crescimento da Segurança Social em Portugal - Euro Dicas, https://www.eurodicas.com.br/contribuicao-de-imigrantes-para-seguranca-social/',
    '34. Estudo mostra que imigrantes aliviam pressão sobre impostos em Portugal - Euro Dicas, https://www.eurodicas.com.br/menos-imigrantes-mais-carga-tributaria/'
  ]},
  
  { type: 'reference', content: 'Documento completo: O Papel da Imigração no Mercado de Trabalho Português (2021-2025) - Uma Análise de Mitos, Complementaridade Estrutural e Impacto Fiscal' }
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

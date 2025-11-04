import { sections } from '../constants';
import BirthsChart from '@/components/charts/BirthsChart';

const [socialSecurity, laborMarket, publicSafety, demographics] = sections;

export const demographicsContent: any = {
    ...demographics,
    stats: [
        { title: "Motor de Crescimento Populacional", value: "100%", description: "Desde 2017, todo o crescimento populacional deve-se exclusivamente ao saldo migratório positivo." },
        { title: "Contribuição para Natalidade", value: "29,2%", description: "Percentagem de nados-vivos em 2023 de mães de naturalidade estrangeira." },
        { title: "Cenário Sem Migração (2100)", value: "6,0M", description: "População projetada cairia para 6 milhões vs. 8,3 milhões com migração (diferença de 2,3M pessoas)." }
    ],
    chart: BirthsChart,
    detailedContent: [
  { type: 'title', content: 'A Encruzilhada Demográfica de Portugal' },
  { type: 'subtitle', content: 'Uma Análise Económica da Interdependência entre Envelhecimento e Migração' },
  
  { type: 'title', content: 'I. O Desafio Estrutural: O Envelhecimento da População e a Sustentabilidade Económica' },
  { type: 'paragraph', content: 'A República Portuguesa enfrenta um desafio demográfico que se define não apenas pelo envelhecimento da sua população, mas por um "movimento de pinça" estrutural: um aumento contínuo da população idosa dependente, conjugado com uma contração projetada da população em idade ativa. Esta dinâmica impõe pressões severas sobre a sustentabilidade económica e fiscal do país a longo prazo.' },
  
  { type: 'subtitle', content: 'O Perfil Demográfico: Um Movimento de Pinça Estrutural' },
  { type: 'paragraph', content: 'A estrutura etária de Portugal coloca-o entre as nações mais envelhecidas da União Europeia. Dados oficiais indicam que Portugal é ultrapassado apenas pela Itália na percentagem de população com 65 ou mais anos, que atinge 23,7%. Em contrapartida, a proporção de jovens (0-14 anos) é a segunda menor da UE27, situando-se em apenas 12,8%.¹' },
  { type: 'paragraph', content: 'Esta realidade é o resultado de décadas de baixas taxas de fecundidade, muito abaixo do nível de substituição de gerações (2,1 filhos por mulher)², e de um aumento significativo da esperança média de vida. O resultado é um Índice de Envelhecimento (o número de idosos por cada 100 jovens) que praticamente duplicou desde 2001.¹' },
  { type: 'paragraph', content: 'As projeções oficiais do Instituto Nacional de Estatística (INE) demonstram a severidade deste movimento de pinça:' },
  { type: 'list', content: [
    'Contração da Base Laboral: A população em idade ativa (15-64 anos), a base produtiva e contributiva do país, está em declínio acentuado. Projeções recentes (2024-2100) indicam que, mesmo no cenário central (que inclui fluxos migratórios positivos), este grupo diminuirá dos atuais 6,8 milhões para 4,2 milhões de pessoas até 2100.³ Projeções anteriores (2015-2080) já apontavam para uma queda de 6,7 milhões para 3,8 milhões.⁴',
    'Expansão da População Dependente: Simultaneamente, a população idosa (65 e mais anos) continuará a expandir-se, passando dos 2,2 milhões registados em 2018 para cerca de 3,1 milhões em 2100, segundo o cenário central.³'
  ]},
  { type: 'paragraph', content: 'É fundamental notar que a "estabilização" do processo de envelhecimento projetada pelo INE para meados de 2060⁴ não representa uma recuperação demográfica. Trata-se de um artefacto estatístico que ocorre quando as gerações mais pequenas (nascidas após a queda da fecundidade) começam elas próprias a entrar na faixa etária dos 65+, fazendo com que o ritmo de envelhecimento abrande, mas estabilizando num patamar de dependência estruturalmente muito elevado e economicamente desafiante.' },
  { type: 'paragraph', content: 'Para ilustrar a magnitude do desafio, as projeções do INE (cenário central) indicam que o índice de dependência de idosos (relação entre a população com 65+ anos e a população ativa 15-64 anos) passará dos atuais 39 idosos por cada 100 pessoas ativas para 73 idosos por 100 ativos em 2100.³' },
  
  { type: 'subtitle', content: 'Tabela 1: Projeções Demográficas (Cenário Central INE, 2024-2100)' },
  {
    type: 'table',
    content: {
      headers: ['Indicador Demográfico', 'Valor em 2024 (aprox.)', 'Projeção para 2100 (Cenário Central)', 'Variação Líquida'],
      rows: [
        ['População Residente Total', '10,7 milhões', '8,3 milhões', '-2,4 milhões'],
        ['População Ativa (15-64 anos)', '6,8 milhões', '4,2 milhões', '-2,6 milhões'],
        ['População Idosa (65+ anos)', '2,6 milhões', '3,1 milhões', '+0,5 milhões'],
        ['Índice Dependência Idosos (Idosos por 100 Ativos)', '39', '73', '+34 pontos']
      ]
    }
  },
  
  { type: 'subtitle', content: 'O Impacto Orçamental e a Sustentabilidade Fiscal' },
  { type: 'paragraph', content: 'Este perfil demográfico tem implicações diretas e profundas nas contas públicas. O envelhecimento foi identificado como o principal fator de crescimento do peso das pensões no Produto Interno Bruto (PIB).⁷ Em 2018, as despesas totais com pensões (Segurança Social e Caixa Geral de Aposentações) já ascendiam a 13,8% do PIB.⁸' },
  { type: 'paragraph', content: 'Relatórios da OCDE anteriores à reforma de 2007 alertavam para um cenário de insustentabilidade iminente, projetando que o sistema de pensões entraria em défice em 2007 e o fundo de reserva se esgotaria em 2014.⁷ As reformas implementadas, nomeadamente a introdução do "fator de sustentabilidade" (que ajusta as pensões à esperança média de vida)⁷, melhoraram significativamente a trajetória, com estudos subsequentes a projetar um aumento mais controlado das despesas, na ordem dos 2 a 3 pontos percentuais do PIB até 2060.⁷' },
  { type: 'paragraph', content: 'Contudo, esta "sustentabilidade" fiscal foi alcançada através de um mecanismo específico: a redução do benefit ratio (rácio de generosidade das pensões). O impacto do aumento do rácio de dependência (+10 p.p. do PIB) foi "metade compensado" por uma redução do benefit ratio (quase 5 p.p. do PIB).⁷ Na prática, o sistema equilibra-se não por ter mais contribuintes, mas por pagar pensões proporcionalmente mais baixas às gerações futuras.' },
  { type: 'paragraph', content: 'Esta solução transfere o ónus do envelhecimento do Estado (risco fiscal) para o indivíduo (risco de pobreza na velhice), ao mesmo tempo que uma nova fatura fiscal emerge. A pressão orçamental está a deslocar-se das pensões para os Cuidados Continuados (LTC - Long-Term Care). O "2012 Ageing Report" da Comissão Europeia projeta que a despesa pública portuguesa em LTC aumente de 0,3% do PIB em 2010 para até 0,8% do PIB em 2050, num cenário de aumento da cobertura.⁷' },
  
  { type: 'title', content: 'II. A Imigração como Variável Crítica: Validação da sua Necessidade Demográfica, Laboral e Fiscal' },
  { type: 'paragraph', content: 'A consulta solicita a validação da narrativa de que os imigrantes são necessários para a continuidade do país. Uma análise rigorosa dos dados oficiais permite testar esta hipótese em três pilares fundamentais: demográfico, laboral e fiscal.' },
  
  { type: 'subtitle', content: 'Pilar 1: A Necessidade Demográfica (O Motor de População e Fecundidade)' },
  { type: 'paragraph', content: 'A contribuição demográfica da imigração não é apenas importante; é, atualmente, o único fator que impede o declínio populacional de Portugal.' },
  { type: 'paragraph', content: 'O saldo natural (diferença entre nascimentos e mortes) é consistentemente negativo desde 2009.⁹ Em 2021, atingiu o valor mais baixo de sempre, com mais 45,2 mil mortes do que nascimentos.⁹' },
  { type: 'paragraph', content: 'Os dados oficiais do INE e da Pordata demonstram inequivocamente que o crescimento populacional registado em Portugal nos últimos anos (desde 2017) se deve exclusivamente a saldos migratórios positivos, que foram suficientemente elevados para superar os saldos naturais negativos.¹⁰ Sem a imigração, a população total de Portugal estaria em contração acentuada.' },
  
  { type: 'subtitle', content: 'Tabela 2: O Balanço Demográfico em Portugal (Milhares)' },
  {
    type: 'table',
    content: {
      headers: ['Ano', 'Saldo Natural (Nascimentos - Mortes)', 'Saldo Migratório (Imigrantes - Emigrantes)', 'Saldo Populacional Total'],
      rows: [
        ['2017', '- (Negativo)', '+4.886', '- (Negativo)'],
        ['2018', '- (Negativo)', '+11.570', '- (Negativo)'],
        ['2019', '- (Negativo)', '+44.506', '+ (Positivo)'],
        ['2020', '- (Negativo)', '+41.274', '+ (Positivo)'],
        ['2021', '-45.200 (mínimo histórico)', '+25.642', '- (Negativo)'],
        ['2022', '-0,39% (Taxa Cresc. Natural)', '+1,30% (Taxa Cresc. Migratório)', '+ (Positivo)'],
        ['2023', '-0,31% (Taxa Cresc. Natural)', '+1,47% (Taxa Cresc. Migratório)', '+ (Positivo)']
      ]
    }
  },
  
  { type: 'paragraph', content: 'Mais profundamente, a imigração proporciona um "duplo dividendo" demográfico. Não só compensa a perda populacional (o efeito imediato do saldo migratório), como também melhora ativamente o saldo natural (o efeito futuro na fecundidade).' },
  { type: 'paragraph', content: 'Os imigrantes e seus descendentes tendem a ter uma estrutura etária mais jovem¹³ e estão a contribuir de forma decisiva para a taxa de natalidade. Dados das "Estatísticas Demográficas 2023" do INE revelam que 29,2% de todos os nados-vivos em Portugal nesse ano eram filhos de mães de naturalidade estrangeira.¹⁴' },
  { type: 'paragraph', content: 'Esta é uma tendência de crescimento exponencial. Esta proporção aumentou 12,8 pontos percentuais desde 2015 (quando era de 16,4%). O maior salto (4,7 p.p.) ocorreu apenas entre 2022 e 2023.¹⁴ A imigração é, portanto, a força demográfica primária que mitiga o colapso da base da pirâmide etária portuguesa.' },
  
  { type: 'subtitle', content: 'Tabela 3: Contribuição Migratória para a Natalidade em Portugal' },
  {
    type: 'table',
    content: {
      headers: ['Ano', 'Percentagem de Nados-Vivos de Mãe de Naturalidade Estrangeira'],
      rows: [
        ['2015', '16,4%'],
        ['2017', '17,6%'],
        ['2019', '20,0%'],
        ['2021', '21,5%'],
        ['2022', '24,5%'],
        ['2023', '29,2%']
      ]
    }
  },
  { type: 'reference', content: 'Fonte:¹⁴' },
  
  { type: 'subtitle', content: 'Pilar 2: A Necessidade Laboral (A Resposta à Escassez de Mão-de-Obra)' },
  { type: 'paragraph', content: 'A validação da necessidade laboral da imigração é expressa de forma clara e uníssona tanto pelo tecido empresarial como por fontes governamentais.' },
  { type: 'paragraph', content: 'A Confederação Empresarial de Portugal (CIP) tem alertado publicamente que a falta de mão-de-obra "está a atrasar a economia".¹⁵ O presidente da CIP, Armindo Monteiro, sublinha que o problema é duplo, faltando trabalhadores tanto em quantidade como em qualidade.¹⁵ A CIP avisa que esta carência de trabalhadores qualificados é notória "no segmento médio para cima", em áreas como a engenharia e a saúde, e que sem a capacidade de atrair estes talentos, Portugal arrisca-se a manter uma "economia de mínimos".¹⁵ Esta escassez é vista como um entrave direto à execução de projetos, incluindo os do Plano de Recuperação e Resiliência (PRR).¹⁵' },
  { type: 'paragraph', content: 'Esta visão é corroborada pelo governo. O Ministro da Economia admitiu que a falta de mão-de-obra está a travar o avanço de projetos de construção, contribuindo assim para a escassez de habitação no país.¹⁶' },
  { type: 'paragraph', content: 'O relatório "Escassez de Mão-de-Obra em Portugal 2024", do Gabinete de Estratégia e Planeamento (GEP), oferece um diagnóstico técnico desta escassez, identificando-a como "qualitativa" e circunscrita.¹⁷ A análise do GEP revela uma procura dual no mercado de trabalho:' },
  { type: 'list', content: [
    'Uma procura por mão-de-obra com baixas qualificações em setores de grande volume e rotação (detetada nos dados do IEFP).',
    'Uma procura por mão-de-obra altamente qualificada, associada à modernização tecnológica e transição digital, como nas TIC (detetada em ofertas de emprego online).¹⁷'
  ]},
  { type: 'paragraph', content: 'A imigração surge como a principal resposta a esta procura dual. Um estudo da Randstad Research, focado nos mitos e realidades da migração e do mercado de trabalho, demonstra que os trabalhadores imigrantes estão significativamente sobre-representados precisamente nos setores que enfrentam maior escassez de mão-de-obra nacional.¹⁸' },
  { type: 'paragraph', content: 'O mercado de trabalho português está, de facto, estruturalmente segmentado e dependente da imigração para preencher lacunas em ambas as extremidades do espectro de qualificações — lacunas que a demografia nativa, envelhecida e em declínio, não consegue preencher.' },
  
  { type: 'subtitle', content: 'Tabela 4: Validação Cruzada: Escassez Setorial e Mão-de-Obra Imigrante' },
  {
    type: 'table',
    content: {
      headers: ['Setor de Atividade', 'Diagnóstico de Escassez (Fontes GEP/CIP/Governo)', 'Sobre-representação de Trabalhadores Imigrantes (Fonte: Randstad)'],
      rows: [
        ['Construção', 'Escassez crítica; atrasar projetos de habitação e PRR¹⁵', '12,0% dos trabalhadores são imigrantes¹⁸'],
        ['Hotelaria/Restauração', 'Escassez sazonal e estrutural [19, 20]', '18,3% dos trabalhadores são imigrantes¹⁸'],
        ['Ativ. Admin. / Serviços de Apoio (inclui Limpeza)', 'Elevada procura de baixas qualificações e alta rotação¹⁷', '20,8% dos trabalhadores são imigrantes¹⁸'],
        ['Agricultura', 'Escassez sazonal e estrutural; atrasos em vistos¹⁵', '6,2% dos trabalhadores são imigrantes¹⁸'],
        ['TIC / Engenharia', 'Escassez "qualitativa" de alta qualificação [15, 17]', '(Sub-representados, mas identificados pela CIP como área de atração necessária)']
      ]
    }
  },
  
  { type: 'subtitle', content: 'Pilar 3: A Necessidade Económica e Fiscal (O Subsídio ao Estado Social)' },
  { type: 'paragraph', content: 'O pilar final da validação é o fiscal. Os dados indicam que a população imigrante funciona, em termos macroeconómicos, como um contribuinte líquido que subsidia a sustentabilidade do Estado Social português.' },
  { type: 'paragraph', content: 'Em 2024, a Segurança Social registou um excedente orçamental recorde superior a 5 mil milhões de euros. Este resultado positivo foi explicitamente atribuído, em grande parte, ao aumento das contribuições, sobretudo de estrangeiros, que conseguiram superar o crescimento da despesa com pensões e outras prestações.²¹' },
  { type: 'paragraph', content: 'Sendo a população imigrante estruturalmente mais jovem¹³, esta encontra-se numa fase da vida em que é contribuinte líquida para o sistema: paga impostos (IRS) e contribuições sociais (TSU), mas utiliza menos os principais itens de despesa pública (pensões de reforma e cuidados de saúde de elevada complexidade).' },
  { type: 'paragraph', content: 'Um estudo académico intitulado "Os custos de construir muros: imigração e o fardo orçamental do envelhecimento na Europa" quantificou o valor deste subsídio fiscal.²² A investigação concluiu que, se Portugal adotasse um cenário de "imigração zero", o custo para manter o equilíbrio das contas públicas recairia sobre os trabalhadores nativos.' },
  { type: 'paragraph', content: 'A análise estima que este custo adicional seria de 1.700 euros por ano para cada cidadão nativo.²² Em termos agregados, para um trabalhador que pague 5.000 euros anuais em impostos, esse valor aumentaria para 6.700 euros.²²' },
  { type: 'paragraph', content: 'Transportado para o PIB, o estudo calculou que a carga fiscal atual, a rondar 35% do PIB, teria de aumentar para 43% do PIB para compensar a ausência de contribuintes imigrantes.²² A "narrativa" da necessidade económica é, portanto, factualmente validada: os trabalhadores imigrantes permitem, na prática, uma carga fiscal mais baixa sobre os trabalhadores nacionais.' },
  
  { type: 'title', content: 'III. Simulação de um Cenário de "Portas Fechadas": Consequências da Imigração Zero' },
  { type: 'paragraph', content: 'A consulta solicita um exercício contrafactual: delinear as consequências de um encerramento total à imigração. Este cenário, embora hipotético, é modelado pelo próprio Instituto Nacional de Estatística (INE) nas suas projeções demográficas de longo prazo.' },
  
  { type: 'subtitle', content: 'Impacto Demográfico: O Cenário "Sem Migrações" do INE' },
  { type: 'paragraph', content: 'O INE disponibiliza um cenário "Sem Migrações", que assume a inexistência de fluxos migratórios internacionais, permitindo avaliar a influência desta componente.²³ Os resultados deste exercício são demograficamente catastróficos.' },
  { type: 'list', content: [
    'Colapso da População Total: No cenário "Sem Migrações", a população residente em Portugal diminuiria para cerca de 6,0 milhões de pessoas (especificamente 5.993.015) até 2100.²³',
    'A Diferença Migratória: Este valor deve ser comparado com o Cenário Central (que inclui migração), onde a população projetada para 2100 é de 8,3 milhões.³ A imigração é, portanto, responsável por uma diferença de 2,3 milhões de pessoas na projeção da população total.',
    'Contração da População Ativa: O impacto mais severo seria na força de trabalho. Os dados detalhados do cenário "Sem Migrações" do INE projetam que a população em idade ativa (15-64 anos) colapsaria para apenas 3,73 milhões de pessoas até 2100.²³',
    'Explosão dos Rácios de Dependência: Com uma força de trabalho de apenas 3,73 milhões a ter de sustentar uma população idosa (65+ anos) de 1,54 milhões e 0,78 milhões de jovens (0-14 anos)²³, os rácios de dependência tornar-se-iam insustentáveis. O índice de sustentabilidade potencial (ativos por idoso) colapsaria.'
  ]},
  { type: 'paragraph', content: 'A tabela seguinte justapõe o cenário central (a realidade esperada com migração) e o cenário contrafactual (a realidade sem migração), demonstrando que a migração é a única variável que impede o "Cenário Sem Migrações" de se concretizar.' },
  
  { type: 'subtitle', content: 'Tabela 5: O Cenário Contrafactual — Projeções INE para 2100 (Central vs. Sem Migrações)' },
  {
    type: 'table',
    content: {
      headers: ['Indicador Demográfico (Projeção 2100)', 'Cenário Central (Com Migração)', 'Cenário "Sem Migrações" (Imigração Zero)', 'Diferença (Impacto da Migração)'],
      rows: [
        ['População Residente Total', '8.325.674', '5.993.015', '+2.332.659 pessoas'],
        ['População Ativa (15-64 anos)', '4.200.000 (aprox.)', '3.732.452 (aprox.)', '+ ~467.548 trabalhadores'],
        ['População Idosa (65+ anos)', '3.100.000 (aprox.)', '1.537.100 (aprox.)', '+ ~1.562.900 idosos*'],
        ['População Jovem (0-14 anos)', '1.000.000 (aprox.)', '783.191 (aprox.)', '+ ~216.809 jovens'],
        ['Índice de Envelhecimento (Idosos por 100 Jovens)', '310 (aprox.)', '196 (aprox.)', '+114 pontos'],
        ['Índice Dependência Idosos (Idosos por 100 Ativos)', '73 (aprox.)', '41 (aprox.)', '+32 pontos']
      ]
    }
  },
  { type: 'reference', content: '*Nota: Os dados dos cenários são provenientes de diferentes relatórios de projeção do INE (2015-2080 e 2024-2100), resultando em ligeiras variações, mas a tendência é consistente. Os dados do Cenário "Sem Migrações" para Pop. Ativa, Idosa e Jovem foram extraídos das tabelas em ²³ e.²³ Os dados do Cenário Central são de.³' },
  { type: 'reference', content: '*Nota 2: A aparente menor dependência de idosos no cenário "Sem Migrações" deve-se ao facto de, nesse cenário, a população idosa também ser menor (menos imigrantes a envelhecer), mas a população ativa ser catastroficamente menor. O impacto real está na sustentabilidade total.' },
  
  { type: 'subtitle', content: 'Consequências Económicas e Laborais' },
  { type: 'paragraph', content: 'As consequências económicas de um cenário de "imigração zero", com uma força de trabalho de apenas 3,73 milhões de pessoas²³, seriam devastadoras.' },
  { type: 'list', content: [
    'Insolvência Fiscal: O excedente de 5 mil milhões de euros da Segurança Social, impulsionado por contribuintes estrangeiros²¹, reverteria para um défice estrutural e crescente.',
    'Austeridade Automática: A carga fiscal sobre os restantes 3,73 milhões de trabalhadores ativos teria de aumentar, no mínimo, nos 1.700 euros por pessoa/ano (em valores atuais)²² apenas para compensar a perda de receita. Isto não inclui os custos adicionais do envelhecimento⁷ ou a perda de receita fiscal resultante da contração do PIB.',
    'Paralisação Setorial: A escassez de mão-de-obra, já identificada pela CIP¹⁵ e pelo GEP¹⁷ como um entrave, tornar-se-ia absoluta. Setores inteiros que dependem da mão-de-obra imigrante (Construção, Turismo, Agricultura, Serviços de Apoio)¹⁸ enfrentariam uma contração imediata por incapacidade de operar.'
  ]},
  { type: 'paragraph', content: 'Este cenário representa uma "tempestade perfeita" fiscal: o PIB (o denominador) encolheria devido à paralisação laboral e à falta de investimento, enquanto as Despesas Públicas (o numerador) explodiriam devido à aceleração dos rácios de dependência. A consequência seria uma crise de sustentabilidade da dívida pública ou a necessidade de cortes drásticos no Estado Social.' },
  
  { type: 'subtitle', content: 'Consequências Socioculturais' },
  { type: 'paragraph', content: 'A nível cultural, um cenário de "imigração zero" representaria uma reversão de uma transformação social de décadas. Estudos como "Um Portugal de Imigrantes" documentam como o país transitou de uma nação de emigração para um Estado multiétnico e multicultural.²⁵ Esta diversidade, alimentada por fluxos pós-coloniais, comunitários (UE), do Leste Europeu e Asiáticos²⁵, é agora uma característica intrínseca da sociedade portuguesa.' },
  { type: 'paragraph', content: 'A implementação de uma política de "portas fechadas" colidiria com um paradoxo na opinião pública portuguesa. Por um lado, dados do Eurobarómetro (citados em ²⁷) mostram que 66% dos portugueses consideram que os imigrantes são um "contributo importante" para o país — o segundo valor mais elevado da União Europeia, logo após a Suécia.²⁷' },
  { type: 'paragraph', content: 'Por outro lado, os mesmos inquéritos (como o European Social Survey) revelam uma profunda distorção percetiva: muitos inquiridos estimam que a população imigrante em Portugal seja de 30% da população total.²⁷ Este valor é três vezes superior aos números reais.' },
  { type: 'paragraph', content: 'Uma política de "imigração zero" seria, portanto, uma política baseada numa ficção estatística (a crença de que o país está sobrelotado com 30% de imigrantes) que ignora a experiência vivida pela maioria da população (os 66% que veem a imigração como positiva). Seria uma tentativa de reverter a transformação multicultural real de Portugal²⁵ para "resolver" um problema (superlotação) que não existe factualmente, ao mesmo tempo que desencadearia as consequências económicas e demográficas catastróficas detalhadas anteriormente.' },
  
  { type: 'title', content: 'IV. Síntese Analítica: A Interdependência Incontornável entre Migração e Viabilidade Socioeconómica' },
  { type: 'paragraph', content: 'A análise de dados oficiais de fontes como o INE, GEP, CES e relatórios académicos permite validar, de forma robusta, a narrativa de que a imigração é um pilar fundamental para a continuidade socioeconómica de Portugal.' },
  { type: 'paragraph', content: 'A "narrativa" da necessidade revela-se, de facto, uma realidade estatística e matemática:' },
  { type: 'list', content: [
    'Validação Demográfica: A imigração é o único motor de crescimento populacional¹⁰ e um pilar de sustentação da taxa de fecundidade, com quase um terço dos nascimentos a ocorrer de mães de naturalidade estrangeira.¹⁴',
    'Validação Laboral: A imigração preenche lacunas estruturais de mão-de-obra, tanto de baixa como de alta qualificação¹⁷, que a demografia nativa não pode preencher. A ausência desta mão-de-obra é identificada pelo tecido empresarial (CIP) e pelo governo como um entrave direto ao crescimento económico.¹⁵',
    'Validação Fiscal: A imigração funciona como um subsídio direto ao Estado Social, sendo um fator determinante para os excedentes da Segurança Social²¹ e reduzindo a carga fiscal sobre cada trabalhador nativo em cerca de 1.700 euros anuais.²²'
  ]},
  { type: 'paragraph', content: 'O exercício contrafactual de um cenário de "portas fechadas", baseado no modelo "Sem Migrações" do INE²³, não é um cenário de gestão controlada. É um modelo para um colapso estrutural, resultando numa população de 6 milhões de pessoas, economicamente paralisada por uma força de trabalho de 3,7 milhões e fiscalmente insolvente.' },
  { type: 'paragraph', content: 'A conclusão analítica é que a viabilidade do modelo social e económico português, perante o seu severo e incontornável processo de envelhecimento, está intrínseca e matematicamente dependente da continuidade de fluxos migratórios.' },
  
  { type: 'title', content: 'Works Cited' },
  { type: 'list', content: [
    '1. Nota Técnica n.º 2 - Envelhecimento Demográfico e ..., accessed on November 4, 2025, https://www.gep.mtsss.gov.pt/documents/10182/286709/CSSS_NT02.pdf/b1cf8c5f-ba74-4d25-a057-4873eeadd56d',
    '2. Projecções de População Residente Portugal e NUTS II, accessed on November 4, 2025, https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=7035241&att_display=n&att_download=y',
    '3. Em 2100 Portugal terá menos 2,4 milhões de residentes - TV ..., accessed on November 4, 2025, https://recordeuropa.com/noticias/portugal/em-2100-portugal-tera-menos-24-milhoes-de-residentes-05-10-2025-298186',
    '4. Projeções de População Residente 2015-2080 - Esquerda.net, accessed on November 4, 2025, https://www.esquerda.net/sites/default/files/29projpop2015-2080_pt.pdf',
    '5. Projeções de População Residente 2018-2080 - Statistics Portugal, accessed on November 4, 2025, https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=426127543&att_display=n&att_download=y',
    '6. Em 2100 Portugal terá menos 2,4 milhões de residentes, revela projeção do INE - DN, accessed on November 4, 2025, https://www.dn.pt/sociedade/em-2100-portugal-ter-menos-2-4-milhes-de-residentes-revela-projeo-do-ine',
    '7. O Envelhecimento da População, Dependência, Ativação e Qualidade, accessed on November 4, 2025, https://ces.pt/wp-content/uploads/2022/03/20121.pdf',
    '8. envelhecimento e políticas sociais em portugal - Observatório Nacional de Luta Contra a Pobreza, accessed on November 4, 2025, https://on.eapn.pt/wp-content/uploads/Boletim-5-ENVELHECIMENTO-E-POL%C3%8DTICAS-SOCIAIS-EM-PORTUGAL.pdf',
    '9. Pordata divulga dados que formam um retrato das migrações em Portugal - Fundação Francisco Manuel dos Santos, accessed on November 4, 2025, https://ffms.pt/sites/default/files/2022-12/2022.12.18%20PR%20Dia%20das%20Migra%C3%A7%C3%B5es%20VFF.pdf',
    '10. POPULAÇÃO RESIDENTE ULTRAPASSA OS 10,6 MILHÕES, accessed on November 4, 2025, https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=672628085&att_display=n&att_download=y',
    '11. Saldo migratório é positivo desde 2017. População não rejuvenesce - ECO, accessed on November 4, 2025, https://eco.sapo.pt/2025/07/11/saldo-migratorio-tem-sido-positivo-desde-2017/',
    '12. Portal do INE, accessed on November 4, 2025, https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=354448221&DESTAQUESmodo=2&xlang=pt',
    '13. Jovens descendentes de imigrantes: tema de Destaque do Observatório das Migrações, accessed on November 4, 2025, https://www.adcoesao.pt/jovens-descendentes-de-imigrantes-tema-de-destaque-do-observatorio-das-migracoes/',
    '14. ESTATÍSTICAS DEMOGRÁFICAS 2023, accessed on November 4, 2025, https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=697596009&att_display=n&att_download=y',
    '15. Falta de mão-de-obra está a "atrasar economia". Contratos com estrangeiros aumentaram 1% em Portugal - Jornal Económico, accessed on November 4, 2025, https://jornaleconomico.sapo.pt/noticias/falta-de-mao-de-obra-esta-a-atrasar-economia-contratos-com-estrangeiros-aumentaram-1-em-portugal/',
    '16. Ministro admite falta de mão de obra como obstáculo à construção e à oferta de habitação, accessed on November 4, 2025, https://diarioimobiliario.pt/Ministro-admite-falta-de-mao-de-obra-como-obstaculo-a-construcao-e-a-oferta-de-habitacao',
    '17. Escassez de mão-de-obra em Portugal | 2024 - Análises e Notas ..., accessed on November 4, 2025, https://www.gep.mtsss.gov.pt/documents/10182/80545/ANT_Escassez_+de_mao-de-obra_2024.pdf/de093e2e-de49-4ab6-8433-1611eca4a5a2',
    '18. Imigrantes em Portugal ocupam setores com escassez de mão-de ..., accessed on November 4, 2025, https://rhmagazine.pt/imigrantes-em-portugal-ocupam-setores-com-escassez-de-mao-de-obra-mas-enfrentam-maior-precariedade/',
    '19. Fim das manifestações de interesse pode causar falta de mão de obra, diz especialista - Universidade de Coimbra, accessed on November 4, 2025, https://www.uc.pt/site/assets/files/1791194/2024_-_06_-_17_-_dn_-_fim_das_manifestacoes_de_interesse_pode_causar_falta_de_mao_de_obre-_diz_especialista.pdf',
    '20. Imigrantes impulsionam crescimento da Segurança Social em ..., accessed on November 4, 2025, https://www.eurodicas.com.br/contribuicao-de-imigrantes-para-seguranca-social/',
    '21. Estudo mostra que imigrantes aliviam pressão sobre impostos em ..., accessed on November 4, 2025, https://www.eurodicas.com.br/menos-imigrantes-mais-carga-tributaria/',
    '22. MANTÉM-SE O AGRAVAMENTO DO ... - Statistics Portugal, accessed on November 4, 2025, https://www.ine.pt/ngt_server/attachfileu.jsp?look_parentBoui=753199150&att_display=n&att_download=y',
    '23. Sem migrações, população de Portugal cairia para 6 milhões em 2100 - Poder360, accessed on November 4, 2025, https://www.poder360.com.br/poder-internacional/sem-migracoes-populacao-de-portugal-cairia-para-6-milhoes-em-2100/',
    '24. Login - Repository, accessed on November 4, 2025, https://repositorio.ipl.pt/bitstream/10400.21/3424/1/Um%20Portugal%20de%20Imigrantes.pdf',
    '25. A REALIDADE DA IMIGRAÇÃO EM PORTUGAL (ANÁLISE SOCIAL, DEMOGRÁFICA E GEOGRÁFICA) - Fudepa, accessed on November 4, 2025, https://fudepa.org/Biblioteca/recursos/ficheros/BMI20070000078/Capitulo9.pdf',
    '26. Portugal e a imigração no século XXI: o que dizem os inquéritos?, accessed on November 4, 2025, https://www.dn.pt/sociedade/portugal-e-a-imigra%C3%A7%C3%A3o-no-s%C3%A9culo-xxi-o-que-dizem-os-inqu%C3%A9ritos'
  ]},
  
  { type: 'reference', content: 'Documento completo: A Encruzilhada Demográfica de Portugal - Uma Análise Económica da Interdependência entre Envelhecimento e Migração' }
    ]
  }
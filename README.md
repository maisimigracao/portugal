# 🇵🇹 Pilares de Portugal: O Papel Essencial da Imigração

Uma landing page interativa que visualiza e resume dados chave de quatro estudos sobre o impacto positivo da imigração na economia, segurança social, mercado de trabalho e demografia de Portugal.

![Cover](./assets/cover.png)

## 📋 Sobre o Projeto

Este projeto apresenta de forma visual e interativa dados e análises sobre a contribuição dos imigrantes para Portugal, abordando quatro áreas fundamentais:

- **💼 Mercado de Trabalho** - Análise da participação e contribuição dos imigrantes no mercado laboral português
- **🏥 Segurança Social** - Estudo das contribuições e benefícios dos imigrantes no sistema de segurança social
- **🔒 Segurança Pública** - Dados sobre criminalidade e segurança envolvendo população imigrante
- **👥 Demografia** - Análise demográfica e impacto populacional da imigração

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React 19.2** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8** - Superset tipado de JavaScript
- **Vite 6.2** - Build tool e dev server de alta performance
- **React Router DOM 6.28** - Roteamento para aplicações React
- **Recharts 3.3** - Biblioteca de gráficos para React
- **React Icons 5.5** - Biblioteca de ícones
- **Puppeteer 24.28** - Para pré-renderização (SSG)

## 📁 Estrutura do Projeto

```
app/
├── assets/                   # Recursos estáticos
│   ├── estudos/             # Documentos de estudos (PDF, DOCX, MD)
│   └── cover.png            # Imagem de capa
├── components/              # Componentes React
│   ├── charts/             # Componentes de gráficos
│   │   ├── BirthsChart.tsx
│   │   ├── ContributionChart.tsx
│   │   ├── PopulationCrimeChart.tsx
│   │   └── UnemploymentChart.tsx
│   ├── Callout.tsx         # Componente de destaque
│   ├── EnhancedTable.tsx   # Tabela aprimorada
│   ├── Footer.tsx          # Rodapé
│   ├── Header.tsx          # Cabeçalho
│   ├── Hero.tsx            # Seção hero
│   ├── Quote.tsx           # Componente de citação
│   ├── ReadingProgress.tsx # Barra de progresso de leitura
│   ├── Section.tsx         # Seção genérica
│   ├── StatCard.tsx        # Card de estatística
│   └── TableOfContents.tsx # Índice de conteúdo
├── pages/                  # Páginas da aplicação
│   ├── HomePage.tsx        # Página inicial
│   └── StudyPage.tsx       # Página de detalhes do estudo
├── studies/                # Dados dos estudos
│   ├── demographics.ts     # Estudo de demografia
│   ├── laborMarket.ts      # Estudo de mercado de trabalho
│   ├── publicSafety.ts     # Estudo de segurança pública
│   └── socialSecurity.ts   # Estudo de segurança social
├── .gitignore              # Arquivos ignorados pelo Git
├── constants.ts            # Constantes da aplicação
├── index.html              # HTML principal
├── index.tsx               # Entry point React
├── metadata.json           # Metadados do projeto
├── package.json            # Dependências e scripts
├── prerender.mjs           # Script de pré-renderização
├── README.md               # Este arquivo
├── SSG-README.md           # Documentação SSG
├── studyDetails.ts         # Re-export dos estudos
├── tsconfig.json           # Configuração TypeScript
├── types.ts                # Definições de tipos
└── vite.config.ts          # Configuração Vite
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd app

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# A aplicação estará disponível em http://localhost:5173
```

### Build

```bash
# Build completo com pré-renderização
npm run build

# Build apenas (sem pré-renderização)
npm run build:only

# Pré-renderização separada
npm run prerender
```

### Preview

```bash
# Visualize o build de produção
npm run preview
```

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura modular baseada em componentes React com TypeScript. Os estudos são organizados em módulos independentes na pasta `/studies`, cada um contendo:

- Metadados do estudo (título, resumo, ícone, estatísticas)
- Dados para visualização em gráficos
- Conteúdo detalhado estruturado em blocos

### Pré-renderização (SSG)

O projeto implementa Static Site Generation (SSG) usando Puppeteer para pré-renderizar todas as páginas em tempo de build, melhorando:

- **SEO** - Conteúdo indexável pelos motores de busca
- **Performance** - Carregamento inicial mais rápido
- **Acessibilidade** - Conteúdo disponível sem JavaScript

Consulte [SSG-README.md](./SSG-README.md) para mais detalhes sobre a implementação.

## 📊 Estudos Incluídos

### 1. Mercado de Trabalho
Análise da participação dos imigrantes no mercado laboral português, incluindo taxas de emprego, setores de atividade e contribuição económica.

### 2. Segurança Social
Estudo das contribuições dos imigrantes para o sistema de segurança social português e comparação com benefícios recebidos.

### 3. Segurança Pública
Dados estatísticos sobre criminalidade e segurança envolvendo população imigrante em Portugal.

### 4. Demografia
Análise demográfica do impacto da imigração na população portuguesa, incluindo natalidade, envelhecimento e distribuição geográfica.

## 📚 Documentação Adicional

Para mais detalhes sobre a implementação de Static Site Generation (SSG), consulte [SSG-README.md](./SSG-README.md).

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Autores

Desenvolvido com ❤️ para promover uma discussão informada sobre imigração em Portugal.

## 🔗 Links Úteis

- [Documentação React](https://react.dev/)
- [Documentação TypeScript](https://www.typescriptlang.org/)
- [Documentação Vite](https://vitejs.dev/)
- [Documentação Recharts](https://recharts.org/)

---

**Nota**: Este projeto tem fins educacionais e informativos. Os dados apresentados são baseados em estudos e fontes oficiais citadas em cada seção.

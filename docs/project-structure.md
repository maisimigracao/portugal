# 📁 Estrutura do Projeto

## Visão Geral da Estrutura

```
site-imigrantes-docs/
└── app/
    ├── 📄 Configuration Files
    ├── 📦 Source Code
    ├── 🎨 Assets
    ├── 📚 Documentation
    └── 🔧 Build Output
```

## Estrutura Detalhada

```
app/
├── .env.local                 # Variáveis de ambiente locais
├── .gitignore                 # Arquivos ignorados pelo Git
├── index.html                 # HTML principal da aplicação
├── package.json               # Dependências e scripts
├── package-lock.json          # Lock file das dependências
├── tsconfig.json              # Configuração do TypeScript
├── vite.config.ts             # Configuração do Vite
├── metadata.json              # Metadados do projeto AI Studio
├── README.md                  # README principal do projeto
│
├── 📂 src/                    # Código fonte principal
│   ├── index.tsx              # Ponto de entrada da aplicação
│   ├── App.tsx                # Componente raiz
│   ├── types.ts               # Definições de tipos TypeScript
│   ├── constants.ts           # Constantes e dados estáticos
│   └── studyDetails.ts        # Detalhes dos estudos
│
├── 📂 components/             # Componentes React
│   ├── Header.tsx             # Cabeçalho com navegação
│   ├── Hero.tsx               # Seção hero da home
│   ├── Section.tsx            # Componente de seção genérica
│   ├── StatCard.tsx           # Cards de estatísticas
│   ├── Footer.tsx             # Rodapé da aplicação
│   └── 📂 charts/             # Componentes de gráficos
│       ├── ContributionChart.tsx
│       ├── UnemploymentChart.tsx
│       ├── PopulationCrimeChart.tsx
│       └── BirthsChart.tsx
│
├── 📂 pages/                  # Páginas da aplicação
│   └── StudyPage.tsx          # Página de detalhes dos estudos
│
├── 📂 assets/                 # Recursos estáticos
│   ├── images/                # Imagens e ícones
│   ├── fonts/                 # Fontes customizadas
│   └── data/                  # Arquivos de dados JSON/CSV
│
├── 📂 docs/                   # Documentação do projeto
│   ├── README.md              # Índice da documentação
│   ├── project-overview.md    # Visão geral
│   ├── architecture.md        # Arquitetura
│   ├── installation.md        # Guia de instalação
│   ├── project-structure.md   # Este arquivo
│   ├── components.md          # Documentação dos componentes
│   ├── development.md         # Guia de desenvolvimento
│   ├── deployment.md          # Guia de deploy
│   └── contributing.md        # Como contribuir
│
├── 📂 dist/                   # Build de produção (gerado)
│   ├── index.html
│   ├── assets/
│   │   ├── index-[hash].js
│   │   └── index-[hash].css
│   └── ...
│
└── 📂 node_modules/           # Dependências instaladas (gerado)
```

## 📄 Arquivos de Configuração

### `package.json`
Define as dependências, scripts e metadados do projeto.

```json
{
  "scripts": {
    "dev": "vite",           // Desenvolvimento
    "build": "vite build",   // Build produção
    "preview": "vite preview" // Preview do build
  }
}
```

### `tsconfig.json`
Configuração do TypeScript para type checking e compilação.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}
```

### `vite.config.ts`
Configuração do Vite para build e desenvolvimento.

```typescript
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
```

### `.env.local`
Variáveis de ambiente locais (não versionado).

```env
GEMINI_API_KEY=sua_chave_aqui
```

## 📦 Código Fonte (`src/`)

### Arquivos Principais

#### `index.tsx`
- Ponto de entrada da aplicação
- Renderiza o componente App no DOM
- Configura React.StrictMode

#### `App.tsx`
- Componente raiz da aplicação
- Gerencia roteamento client-side
- Controla estado global da aplicação
- Renderiza layout principal

#### `types.ts`
- Interfaces TypeScript
- Tipos customizados
- Definições de props dos componentes

#### `constants.ts`
- Dados das seções principais
- Configurações globais
- Textos e labels

#### `studyDetails.ts`
- Dados detalhados dos estudos
- Conteúdo das páginas de detalhe
- Estatísticas e informações

## 🧩 Componentes (`components/`)

### Componentes de Layout

| Componente | Responsabilidade |
|------------|------------------|
| `Header.tsx` | Navegação principal e logo |
| `Hero.tsx` | Banner principal da home |
| `Footer.tsx` | Informações e links do rodapé |

### Componentes de Dados

| Componente | Responsabilidade |
|------------|------------------|
| `Section.tsx` | Renderiza seções de conteúdo |
| `StatCard.tsx` | Exibe estatísticas em cards |

### Componentes de Gráficos (`charts/`)

| Componente | Tipo de Visualização |
|------------|----------------------|
| `ContributionChart.tsx` | Gráfico de barras - contribuições |
| `UnemploymentChart.tsx` | Gráfico de linhas - desemprego |
| `PopulationCrimeChart.tsx` | Gráfico combinado - população/crime |
| `BirthsChart.tsx` | Gráfico de área - natalidade |

## 📄 Páginas (`pages/`)

### `StudyPage.tsx`
- Página de detalhes dos estudos
- Recebe parâmetro de rota
- Renderiza informações completas
- Inclui gráficos e estatísticas

## 🎨 Assets (`assets/`)

### Organização
```
assets/
├── images/
│   ├── hero-bg.jpg
│   ├── icons/
│   └── illustrations/
├── fonts/
│   └── custom-font.woff2
└── data/
    ├── statistics.json
    └── historical-data.csv
```

## 🏗️ Build Output (`dist/`)

### Estrutura Gerada
```
dist/
├── index.html              # HTML otimizado
├── assets/
│   ├── index-[hash].js    # JavaScript bundled
│   ├── index-[hash].css   # CSS bundled
│   └── images/            # Imagens otimizadas
└── _redirects             # Configuração de rotas (Netlify)
```

## 🔍 Convenções de Nomenclatura

### Arquivos e Pastas
- **Componentes**: PascalCase (`Header.tsx`)
- **Utilitários**: camelCase (`helpers.ts`)
- **Constantes**: camelCase (`constants.ts`)
- **Pastas**: kebab-case ou camelCase

### Código
- **Componentes**: PascalCase
- **Funções**: camelCase
- **Constantes**: UPPER_SNAKE_CASE ou camelCase
- **Interfaces**: PascalCase com prefixo I opcional

## 📝 Padrões de Organização

### Importações
```typescript
// 1. Bibliotecas externas
import React from 'react';
import { IconType } from 'react-icons';

// 2. Componentes internos
import Header from './components/Header';

// 3. Utilitários e tipos
import { SectionData } from './types';
import { sections } from './constants';

// 4. Estilos
import './styles.css';
```

### Exportações
```typescript
// Named exports para utilitários
export const utilFunction = () => {};

// Default export para componentes
export default Component;
```

## 🚀 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `npm run dev` | Inicia servidor de desenvolvimento |
| `build` | `npm run build` | Cria build de produção |
| `preview` | `npm run preview` | Preview do build local |
| `lint` | `npm run lint` | Verifica código com ESLint |
| `type-check` | `npm run type-check` | Verifica tipos TypeScript |

## 🔄 Fluxo de Trabalho

1. **Desenvolvimento**: Código em `src/` e `components/`
2. **Build**: Vite processa e otimiza para `dist/`
3. **Deploy**: Conteúdo de `dist/` enviado para servidor

## 💡 Dicas de Navegação

- **Componentes reutilizáveis**: `/components`
- **Lógica de negócio**: `/src/studyDetails.ts`
- **Configurações**: Arquivos na raiz
- **Tipos TypeScript**: `/src/types.ts`
- **Dados estáticos**: `/src/constants.ts`

---

Para mais detalhes sobre os componentes, consulte a [Documentação dos Componentes](./components.md)

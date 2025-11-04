# 🧩 Documentação dos Componentes

## Visão Geral

Este documento detalha todos os componentes React utilizados no projeto, suas props, funcionalidades e exemplos de uso.

## 📊 Hierarquia de Componentes

```
App
├── Header
├── Hero
├── Section
│   └── StatCard
├── StudyPage
│   ├── StatCard
│   └── [ChartComponent]
└── Footer
```

## 🎯 Componentes Principais

### `App.tsx`

**Descrição**: Componente raiz que gerencia roteamento e estado global.

**Props**: Nenhuma

**Estado**:
- `locationPath`: Caminho atual da URL
- `activeSection`: Seção ativa para scroll spy

**Funcionalidades**:
- Roteamento client-side com History API
- Scroll spy para navegação
- Renderização condicional de páginas

**Exemplo de Uso**:
```tsx
// index.tsx
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

---

### `Header.tsx`

**Descrição**: Barra de navegação fixa no topo com links para seções.

**Props**:
```typescript
interface HeaderProps {
  activeSection: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}
```

**Funcionalidades**:
- Navegação smooth scroll
- Indicador de seção ativa
- Menu responsivo
- Links para páginas de estudo

**Exemplo de Uso**:
```tsx
<Header 
  activeSection="social-security"
  onNavigate={handleNavigate}
/>
```

---

### `Hero.tsx`

**Descrição**: Seção hero com título principal e call-to-action.

**Props**: Nenhuma

**Funcionalidades**:
- Animação de entrada
- Texto de destaque
- Botão CTA
- Background gradiente

**Exemplo de Uso**:
```tsx
<Hero />
```

---

### `Section.tsx`

**Descrição**: Componente genérico para seções de conteúdo.

**Props**:
```typescript
interface SectionProps {
  section: SectionData;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}
```

**Funcionalidades**:
- Renderização de ícone e título
- Texto de resumo
- Link para página detalhada
- Animação ao entrar em viewport

**Exemplo de Uso**:
```tsx
<Section 
  section={sectionData}
  onNavigate={handleNavigate}
/>
```

---

### `StatCard.tsx`

**Descrição**: Card para exibição de estatísticas com animação.

**Props**:
```typescript
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  delay?: number;
}
```

**Funcionalidades**:
- Animação de contagem
- Destaque visual do valor
- Descrição contextual
- Efeito hover

**Exemplo de Uso**:
```tsx
<StatCard
  title="Contribuição Líquida"
  value="€1.3B"
  description="Valor anual para a Segurança Social"
  delay={200}
/>
```

---

### `Footer.tsx`

**Descrição**: Rodapé com informações e links úteis.

**Props**: Nenhuma

**Funcionalidades**:
- Links para recursos
- Informações de copyright
- Links sociais
- Créditos de dados

**Exemplo de Uso**:
```tsx
<Footer />
```

---

## 📈 Componentes de Gráficos

### `ContributionChart.tsx`

**Descrição**: Gráfico de barras mostrando contribuições ao longo do tempo.

**Props**: Nenhuma

**Dados**:
```typescript
const data = [
  { year: '2018', value: 800 },
  { year: '2019', value: 950 },
  // ...
];
```

**Funcionalidades**:
- Barras animadas
- Tooltip interativo
- Cores temáticas
- Responsivo

**Exemplo de Uso**:
```tsx
<ContributionChart />
```

---

### `UnemploymentChart.tsx`

**Descrição**: Gráfico de linhas comparando taxas de desemprego.

**Props**: Nenhuma

**Dados**:
```typescript
const data = [
  { year: '2018', nationals: 7.0, foreigners: 8.5 },
  // ...
];
```

**Funcionalidades**:
- Múltiplas linhas
- Legenda interativa
- Comparação visual
- Grid de referência

**Exemplo de Uso**:
```tsx
<UnemploymentChart />
```

---

### `PopulationCrimeChart.tsx`

**Descrição**: Gráfico combinado de população e criminalidade.

**Props**: Nenhuma

**Dados**:
```typescript
const data = [
  { year: '2014', population: 395, prisoners: 2800 },
  // ...
];
```

**Funcionalidades**:
- Dois eixos Y
- Barras e linha combinadas
- Escala dupla
- Correlação visual

**Exemplo de Uso**:
```tsx
<PopulationCrimeChart />
```

---

### `BirthsChart.tsx`

**Descrição**: Gráfico de área mostrando contribuição para natalidade.

**Props**: Nenhuma

**Dados**:
```typescript
const data = [
  { year: '2018', percentage: 12.5 },
  // ...
];
```

**Funcionalidades**:
- Área preenchida
- Gradiente visual
- Pontos de dados
- Animação suave

**Exemplo de Uso**:
```tsx
<BirthsChart />
```

---

## 📄 Páginas

### `StudyPage.tsx`

**Descrição**: Página detalhada para cada estudo/seção.

**Props**:
```typescript
interface StudyPageProps {
  studyId: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}
```

**Funcionalidades**:
- Renderização de detalhes completos
- Grid de estatísticas
- Gráfico específico do estudo
- Conteúdo estruturado
- Navegação de volta

**Exemplo de Uso**:
```tsx
<StudyPage 
  studyId="social-security"
  onNavigate={handleNavigate}
/>
```

---

## 🎨 Padrões de Estilo

### Inline Styles
Todos os componentes usam estilos inline para encapsulamento:

```tsx
const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9fafb'
  }
};
```

### Temas de Cores
```typescript
const colors = {
  primary: '#10b981',   // Verde
  secondary: '#3b82f6', // Azul
  danger: '#ef4444',    // Vermelho
  neutral: '#6b7280',   // Cinza
  background: '#f9fafb',
  text: '#111827'
};
```

### Breakpoints Responsivos
```typescript
const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};
```

## 🔧 Utilitários de Componentes

### Hooks Customizados

#### `useScrollSpy`
```typescript
const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');
  // Lógica de detecção de scroll
  return activeSection;
};
```

#### `useAnimation`
```typescript
const useAnimation = (trigger: boolean, duration: number) => {
  const [animated, setAnimated] = useState(false);
  // Lógica de animação
  return animated;
};
```

### Funções Helper

#### `formatNumber`
```typescript
const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('pt-PT').format(num);
};
```

#### `calculatePercentage`
```typescript
const calculatePercentage = (value: number, total: number): string => {
  return `${((value / total) * 100).toFixed(1)}%`;
};
```

## 📝 Boas Práticas

### 1. Composição
- Componentes pequenos e focados
- Reutilização através de props
- Composição sobre herança

### 2. Performance
- Uso de `React.memo` para componentes puros
- `useCallback` para funções em props
- `useMemo` para cálculos pesados

### 3. Acessibilidade
- Atributos ARIA apropriados
- Navegação por teclado
- Textos alternativos

### 4. Testes
- Componentes testáveis isoladamente
- Props bem definidas com TypeScript
- Separação de lógica e apresentação

## 🚀 Criando Novos Componentes

### Template Básico
```tsx
import React from 'react';

interface ComponentNameProps {
  // Definir props
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Estado e lógica
  
  const styles = {
    container: {
      // Estilos
    }
  };
  
  return (
    <div style={styles.container}>
      {/* Conteúdo */}
    </div>
  );
};

export default ComponentName;
```

### Checklist
- [ ] Interface TypeScript definida
- [ ] Props documentadas
- [ ] Estilos responsivos
- [ ] Acessibilidade considerada
- [ ] Performance otimizada
- [ ] Exemplo de uso documentado

---

Para padrões de desenvolvimento, consulte o [Guia de Desenvolvimento](./development.md)

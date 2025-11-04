# 🏗️ Arquitetura e Tecnologias

## Stack Tecnológico

### 🎨 Frontend
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.2.0 | Framework principal para UI |
| **TypeScript** | 5.8.2 | Type safety e melhor DX |
| **Vite** | 6.2.0 | Build tool e dev server |
| **Recharts** | 3.3.0 | Visualização de dados |
| **React Icons** | 5.5.0 | Biblioteca de ícones |

### 🛠️ Ferramentas de Desenvolvimento
- **Node.js**: Runtime JavaScript
- **npm**: Gerenciador de pacotes
- **ESLint**: Linting de código (configurado via Vite)
- **Git**: Controle de versão

## 📐 Arquitetura da Aplicação

### Padrão Arquitetural
A aplicação segue uma arquitetura **Component-Based** com separação clara de responsabilidades:

```
┌─────────────────────────────────────┐
│           App Component             │
│         (Roteamento/Estado)         │
└──────────┬──────────────────────────┘
           │
    ┌──────▼──────┐
    │   Páginas   │
    │  (Views)    │
    └──────┬──────┘
           │
    ┌──────▼──────────────┐
    │    Componentes      │
    │   (Reutilizáveis)   │
    └──────┬──────────────┘
           │
    ┌──────▼──────┐
    │    Dados    │
    │  (Constants)│
    └─────────────┘
```

### Fluxo de Dados
1. **Unidirecional**: Props fluem de cima para baixo
2. **Estado Local**: Gerenciado com React Hooks (useState, useEffect)
3. **Dados Estáticos**: Centralizados em arquivos de constantes

## 🗂️ Estrutura de Componentes

### Componentes Principais

#### Layout Components
- **App.tsx**: Componente raiz com roteamento
- **Header.tsx**: Navegação principal
- **Hero.tsx**: Seção hero da página inicial
- **Footer.tsx**: Rodapé com informações

#### Data Display Components
- **Section.tsx**: Seções de conteúdo
- **StatCard.tsx**: Cards de estatísticas
- **StudyPage.tsx**: Página detalhada de estudos

#### Chart Components
- **ContributionChart**: Gráfico de contribuições
- **UnemploymentChart**: Gráfico de desemprego
- **PopulationCrimeChart**: Gráfico população/crime
- **BirthsChart**: Gráfico de natalidade

## 🔄 Sistema de Roteamento

### Implementação
Roteamento client-side usando **History API** nativa do browser:

```typescript
// Navegação programática
window.history.pushState({}, '', path);

// Listener para mudanças
window.addEventListener('popstate', handleLocationChange);
```

### Rotas
| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial com overview |
| `/study/:id` | StudyPage | Página detalhada de cada estudo |

## 📊 Gestão de Dados

### Fonte de Dados
- **Estáticos**: Dados armazenados em `constants.ts` e `studyDetails.ts`
- **Tipagem**: Interfaces TypeScript em `types.ts`

### Estrutura de Dados

```typescript
interface SectionData {
  id: string;
  title: string;
  summary: string;
  icon: IconType;
}

interface StudyDetail extends SectionData {
  stats: StatCardData[];
  chart: React.FC;
  detailedContent: ContentBlock[];
}
```

## 🎨 Sistema de Estilos

### Abordagem
- **Inline Styles**: Estilos definidos diretamente nos componentes
- **Tailwind-inspired**: Classes utilitárias customizadas
- **Responsivo**: Media queries para diferentes tamanhos de tela

### Temas e Cores
```css
/* Paleta Principal */
--primary: #10b981 (verde)
--secondary: #3b82f6 (azul)
--danger: #ef4444 (vermelho)
--background: #f9fafb
--text: #111827
```

## ⚡ Performance

### Otimizações Implementadas
1. **Code Splitting**: Vite automaticamente divide o código
2. **Lazy Loading**: Componentes carregados sob demanda
3. **Memoização**: useCallback e useMemo para funções pesadas
4. **Virtual DOM**: React otimiza renderizações

### Build e Bundle
- **Vite**: Build otimizado com Rollup
- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: JavaScript e CSS minificados
- **Compression**: Gzip/Brotli no servidor

## 🔒 Segurança

### Medidas Implementadas
1. **XSS Protection**: React escapa automaticamente conteúdo
2. **HTTPS**: Recomendado para produção
3. **CSP Headers**: Content Security Policy configurável
4. **Dependências**: Atualizadas regularmente

### Boas Práticas
- Sem armazenamento de dados sensíveis no cliente
- Validação de inputs do usuário
- Sanitização de conteúdo dinâmico

## 🌐 Internacionalização (Futuro)

### Preparação
- Textos centralizados em constantes
- Estrutura preparada para i18n
- Suporte planejado para PT, EN, ES, FR

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Tablets pequenos */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop grande */
```

### Estratégias
- **Mobile First**: Design começa do mobile
- **Flexbox/Grid**: Layouts flexíveis
- **Viewport Units**: Dimensões relativas
- **Touch Friendly**: Áreas de toque adequadas

## 🔄 CI/CD Pipeline (Recomendado)

### Desenvolvimento
```bash
npm install  # Instalar dependências
npm run dev  # Servidor de desenvolvimento
```

### Build
```bash
npm run build    # Build de produção
npm run preview  # Preview do build
```

### Deploy
- **Netlify/Vercel**: Deploy automático do GitHub
- **GitHub Pages**: Hospedagem estática gratuita
- **Docker**: Containerização opcional

## 📈 Monitoramento (Futuro)

### Recomendações
- **Analytics**: Google Analytics ou Plausible
- **Error Tracking**: Sentry para erros em produção
- **Performance**: Lighthouse CI para métricas
- **Uptime**: Monitoring de disponibilidade

## 🔮 Evolução Futura

### Próximas Tecnologias
1. **State Management**: Redux/Zustand para estado complexo
2. **API Integration**: Axios para dados em tempo real
3. **Testing**: Jest + React Testing Library
4. **PWA**: Service Workers para offline
5. **SSR/SSG**: Next.js para SEO melhorado

---

Para configurar o ambiente de desenvolvimento, consulte o [Guia de Instalação](./installation.md)

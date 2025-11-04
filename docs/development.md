# 👨‍💻 Guia de Desenvolvimento

## Configuração do Ambiente

### Pré-requisitos
- Node.js 18+ e npm 8+
- Editor de código (VSCode recomendado)
- Git configurado
- Extensões recomendadas do VSCode:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets

### Setup Inicial
```bash
# Clonar repositório
git clone <repo-url>
cd site-imigrantes-docs/app

# Instalar dependências
npm install

# Configurar ambiente
cp .env.example .env.local

# Iniciar desenvolvimento
npm run dev
```

## 📋 Padrões de Código

### TypeScript

#### Interfaces e Types
```typescript
// ✅ Bom - Interface para props de componentes
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// ✅ Bom - Type para unions
type Status = 'loading' | 'success' | 'error';

// ❌ Evitar - any types
const data: any = fetchData();
```

#### Tipagem Estrita
```typescript
// ✅ Bom - Tipagem explícita
const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// ❌ Evitar - Tipagem implícita
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

### React

#### Componentes Funcionais
```tsx
// ✅ Bom - Componente funcional com TypeScript
const MyComponent: React.FC<Props> = ({ title, children }) => {
  const [state, setState] = useState<string>('');
  
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

// ❌ Evitar - Class components (exceto se necessário)
class MyComponent extends React.Component {
  // ...
}
```

#### Hooks
```tsx
// ✅ Bom - Hooks no topo do componente
const Component = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // efeito
  }, []);
  
  // resto do componente
};

// ❌ Evitar - Hooks condicionais
const Component = ({ shouldLoad }) => {
  if (shouldLoad) {
    useEffect(() => {}); // ❌ Nunca fazer isso
  }
};
```

#### Props e Destructuring
```tsx
// ✅ Bom - Destructuring de props
const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // ...
};

// ❌ Evitar - Uso de props diretamente
const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};
```

### Estilos

#### Inline Styles
```tsx
// ✅ Bom - Estilos organizados
const Component = () => {
  const styles = {
    container: {
      display: 'flex',
      padding: '1rem',
      backgroundColor: '#f9fafb'
    } as React.CSSProperties,
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    } as React.CSSProperties
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Title</h1>
    </div>
  );
};
```

#### Responsividade
```tsx
// ✅ Bom - Considerar diferentes tamanhos de tela
const styles = {
  container: {
    padding: window.innerWidth < 768 ? '1rem' : '2rem',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
  }
};
```

## 🔄 Fluxo de Trabalho Git

### Branches
```bash
# Branch principal
main

# Feature branches
feature/nome-da-feature

# Bugfix branches
bugfix/descricao-do-bug

# Hotfix branches
hotfix/correção-urgente
```

### Commits
```bash
# ✅ Bom - Mensagens descritivas
git commit -m "feat: adicionar gráfico de contribuições"
git commit -m "fix: corrigir cálculo de percentagem"
git commit -m "docs: atualizar README com instruções de deploy"

# ❌ Evitar - Mensagens genéricas
git commit -m "fix bug"
git commit -m "update"
```

### Convenção de Commits
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (sem mudança de lógica)
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

### Pull Requests
```markdown
## Descrição
Breve descrição do que foi feito

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Checklist
- [ ] Código testado localmente
- [ ] TypeScript sem erros
- [ ] Documentação atualizada
```

## 🧪 Testes

### Estrutura de Testes (Futuro)
```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
  
  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    // ...
  });
});
```

### Testes Manuais
- [ ] Navegação funciona corretamente
- [ ] Gráficos carregam sem erros
- [ ] Responsividade em diferentes dispositivos
- [ ] Sem erros no console
- [ ] Performance aceitável

## 🐛 Debugging

### Console Logging
```typescript
// ✅ Bom - Logs informativos durante desenvolvimento
console.log('Data loaded:', data);
console.warn('API key not configured');
console.error('Failed to fetch:', error);

// ❌ Evitar em produção - Remover antes do commit
console.log('test');
console.log(variable);
```

### React DevTools
1. Instalar extensão do browser
2. Inspecionar componentes
3. Verificar props e state
4. Analisar re-renders

### TypeScript Errors
```bash
# Verificar erros de tipo
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

## 📦 Gerenciamento de Dependências

### Adicionar Dependências
```bash
# Produção
npm install package-name

# Desenvolvimento
npm install -D package-name

# Versão específica
npm install package-name@1.2.3
```

### Atualizar Dependências
```bash
# Verificar outdated
npm outdated

# Atualizar minor/patch
npm update

# Atualizar major (cuidado!)
npm install package-name@latest
```

### Auditoria de Segurança
```bash
# Verificar vulnerabilidades
npm audit

# Corrigir automaticamente
npm audit fix

# Forçar correções (cuidado!)
npm audit fix --force
```

## 🚀 Otimização de Performance

### Code Splitting
```tsx
// Lazy loading de componentes
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// Uso com Suspense
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### Memoização
```tsx
// useMemo para cálculos pesados
const expensiveValue = useMemo(() => {
  return calculateExpensive(data);
}, [data]);

// useCallback para funções
const handleClick = useCallback(() => {
  doSomething();
}, [dependency]);

// React.memo para componentes
const MemoizedComponent = React.memo(Component);
```

### Otimização de Re-renders
```tsx
// ✅ Bom - Estado local quando possível
const ChildComponent = () => {
  const [localState, setLocalState] = useState();
  // ...
};

// ❌ Evitar - Estado desnecessário no pai
const ParentComponent = () => {
  const [childState, setChildState] = useState();
  return <Child state={childState} setState={setChildState} />;
};
```

## 📝 Documentação de Código

### JSDoc Comments
```typescript
/**
 * Calcula a contribuição percentual dos imigrantes
 * @param total - Valor total de contribuições
 * @param immigrant - Valor de contribuições de imigrantes
 * @returns Percentagem formatada como string
 */
const calculateContribution = (total: number, immigrant: number): string => {
  return `${((immigrant / total) * 100).toFixed(2)}%`;
};
```

### Comentários Inline
```typescript
// ✅ Bom - Explica o "porquê"
// Usamos setTimeout para evitar blocking do UI durante animação
setTimeout(() => {
  heavyOperation();
}, 100);

// ❌ Evitar - Explica o "o quê" (óbvio)
// Incrementa o contador
counter++;
```

## 🔒 Segurança

### Variáveis de Ambiente
```typescript
// ✅ Bom - Usar variáveis de ambiente
const apiKey = import.meta.env.VITE_API_KEY;

// ❌ Evitar - Hardcode de secrets
const apiKey = 'sk-1234567890abcdef';
```

### Sanitização de Input
```tsx
// ✅ Bom - React escapa automaticamente
<div>{userInput}</div>

// ⚠️ Cuidado - dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
```

## 📊 Monitoramento

### Logs de Desenvolvimento
```typescript
// Criar helper para logs
const logger = {
  info: (message: string, data?: any) => {
    if (import.meta.env.DEV) {
      console.log(`[INFO] ${message}`, data);
    }
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${message}`, error);
    // Enviar para serviço de monitoramento em produção
  }
};
```

## 🎯 Checklist de Desenvolvimento

### Antes de Commitar
- [ ] Código funciona localmente
- [ ] Sem erros TypeScript
- [ ] Sem warnings no console
- [ ] Código formatado corretamente
- [ ] Imports não utilizados removidos
- [ ] Console.logs de debug removidos
- [ ] Comentários TODO resolvidos

### Antes do PR
- [ ] Branch atualizada com main
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Changelog atualizado
- [ ] Screenshots se mudanças visuais
- [ ] Performance verificada

## 📚 Recursos Úteis

### Documentação
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Recharts Examples](https://recharts.org/en-US/examples)

### Ferramentas
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Bundle Analyzer](https://www.npmjs.com/package/rollup-plugin-visualizer)

---

Para informações sobre deploy, consulte o [Guia de Deploy](./deployment.md)

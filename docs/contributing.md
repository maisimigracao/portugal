# 🤝 Guia de Contribuição

## Bem-vindo!

Obrigado pelo seu interesse em contribuir para o projeto **Pilares de Portugal: O Papel Essencial da Imigração**! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

### Nossos Valores
- **Respeito**: Tratar todos com dignidade e respeito
- **Inclusão**: Acolher contribuições de todas as pessoas
- **Colaboração**: Trabalhar juntos para melhorar o projeto
- **Transparência**: Comunicação clara e honesta

### Comportamento Esperado
- Usar linguagem acolhedora e inclusiva
- Respeitar diferentes pontos de vista
- Aceitar críticas construtivas graciosamente
- Focar no que é melhor para a comunidade

### Comportamento Inaceitável
- Linguagem ou imagens sexualizadas
- Comentários insultuosos ou depreciativos
- Assédio público ou privado
- Publicar informações privadas de outros

## 🚀 Como Contribuir

### 1. Reportar Bugs

#### Antes de Criar uma Issue
- Verifique se o bug já foi reportado
- Teste na versão mais recente
- Colete informações relevantes

#### Template de Bug Report
```markdown
## Descrição do Bug
Descrição clara e concisa do problema.

## Como Reproduzir
1. Ir para '...'
2. Clicar em '...'
3. Rolar até '...'
4. Ver erro

## Comportamento Esperado
O que deveria acontecer.

## Comportamento Atual
O que está acontecendo.

## Screenshots
Se aplicável, adicione screenshots.

## Ambiente
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 120]
- Versão: [ex: 1.0.0]

## Contexto Adicional
Qualquer outra informação relevante.
```

### 2. Sugerir Funcionalidades

#### Template de Feature Request
```markdown
## Problema
Descrição do problema que esta feature resolveria.

## Solução Proposta
Descrição clara da solução desejada.

## Alternativas Consideradas
Outras soluções que você considerou.

## Contexto Adicional
Screenshots, mockups, ou outras informações.
```

### 3. Contribuir com Código

#### Setup do Ambiente
```bash
# Fork o repositório
# Clone seu fork
git clone https://github.com/seu-usuario/site-imigrantes-docs.git

# Entre no diretório
cd site-imigrantes-docs/app

# Adicione o upstream
git remote add upstream https://github.com/original/site-imigrantes-docs.git

# Instale dependências
npm install

# Crie uma branch
git checkout -b feature/minha-feature
```

#### Fluxo de Desenvolvimento
1. **Sincronize com upstream**
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

2. **Crie sua branch**
```bash
git checkout -b feature/nome-descritivo
# ou
git checkout -b bugfix/descricao-do-bug
```

3. **Faça suas mudanças**
- Escreva código limpo e legível
- Siga os padrões do projeto
- Adicione comentários quando necessário

4. **Teste suas mudanças**
```bash
# Execute localmente
npm run dev

# Verifique tipos
npx tsc --noEmit

# Build de produção
npm run build
```

5. **Commit suas mudanças**
```bash
# Staged changes
git add .

# Commit com mensagem descritiva
git commit -m "feat: adicionar nova visualização de dados"
```

6. **Push para seu fork**
```bash
git push origin feature/nome-descritivo
```

7. **Abra um Pull Request**

## 📝 Padrões de Código

### TypeScript
```typescript
// ✅ Bom
interface UserData {
  id: string;
  name: string;
  email: string;
}

const processUser = (user: UserData): void => {
  // lógica aqui
};

// ❌ Evitar
const processUser = (user: any) => {
  // sem tipagem
};
```

### React
```tsx
// ✅ Bom
const Component: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

// ❌ Evitar
function Component(props) {
  return <div>{props.title}</div>;
}
```

### Estilos
```typescript
// ✅ Bom - Organizado e tipado
const styles = {
  container: {
    display: 'flex',
    padding: '1rem'
  } as React.CSSProperties
};

// ❌ Evitar - Inline direto
<div style={{display: 'flex', padding: '1rem'}}>
```

## 🔍 Processo de Review

### Checklist do PR
- [ ] Código segue os padrões do projeto
- [ ] Mudanças testadas localmente
- [ ] Documentação atualizada se necessário
- [ ] Sem conflitos com a branch main
- [ ] Commits com mensagens descritivas
- [ ] PR tem descrição clara

### Template de Pull Request
```markdown
## Descrição
Breve descrição das mudanças.

## Tipo de Mudança
- [ ] Bug fix (mudança que corrige um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentação (mudanças na documentação)

## Como Testar
1. Passo 1
2. Passo 2
3. Verificar resultado

## Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Eu testei minhas mudanças
- [ ] Eu atualizei a documentação
- [ ] Minhas mudanças não geram warnings

## Screenshots (se aplicável)
Adicione screenshots das mudanças visuais.

## Issues Relacionadas
Closes #123
```

## 📚 Contribuir com Documentação

### Onde Contribuir
- Melhorar documentação existente
- Adicionar exemplos de código
- Traduzir documentação
- Corrigir erros de digitação
- Clarificar instruções confusas

### Guia de Estilo
- Use Markdown corretamente
- Mantenha tom profissional mas amigável
- Use exemplos práticos
- Estruture com headers claros
- Adicione links relevantes

## 🌍 Traduções

### Como Traduzir
1. Crie pasta para o idioma (`docs/pt`, `docs/en`)
2. Mantenha estrutura de arquivos
3. Traduza conteúdo, não código
4. Preserve formatação Markdown
5. Atualize links internos

### Idiomas Prioritários
- 🇵🇹 Português (principal)
- 🇬🇧 Inglês
- 🇪🇸 Espanhol
- 🇫🇷 Francês

## 🎨 Contribuir com Design

### Assets
- Imagens em formato WebP ou SVG
- Ícones consistentes com o tema
- Paleta de cores definida
- Acessibilidade considerada

### UI/UX
- Mockups em Figma/Sketch
- Protótipos interativos
- Testes de usabilidade
- Feedback de usuários

## 📊 Contribuir com Dados

### Requisitos
- Fontes oficiais e verificáveis
- Dados atualizados
- Formato estruturado (JSON/CSV)
- Documentação da fonte

### Processo
1. Identifique dados relevantes
2. Verifique fonte oficial
3. Estruture em formato adequado
4. Documente metodologia
5. Abra issue para discussão

## 🏆 Reconhecimento

### Contributors
Todos os contribuidores são reconhecidos no arquivo [CONTRIBUTORS.md](../CONTRIBUTORS.md).

### Tipos de Contribuição
- 💻 Código
- 📖 Documentação
- 🎨 Design
- 📊 Dados
- 🐛 Bug reports
- 💡 Ideias
- 🌍 Traduções
- 📢 Divulgação

## ❓ Dúvidas

### Canais de Comunicação
- **GitHub Issues**: Para bugs e features
- **Discussions**: Para perguntas gerais
- **Email**: contato@exemplo.com
- **Discord**: [Link para servidor]

### FAQ

**P: Posso contribuir se sou iniciante?**
R: Sim! Procure issues com a tag "good first issue".

**P: Quanto tempo leva para revisar um PR?**
R: Normalmente 2-5 dias úteis.

**P: Posso sugerir grandes mudanças?**
R: Sim, mas abra uma issue primeiro para discussão.

**P: Como posso ajudar sem programar?**
R: Documentação, traduções, testes, divulgação, design!

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

## 🙏 Agradecimento

Obrigado por dedicar seu tempo para melhorar este projeto! Cada contribuição, grande ou pequena, é valorizada e apreciada.

---

**Lembre-se**: O objetivo deste projeto é educar e informar sobre a importância da imigração em Portugal através de dados factuais. Suas contribuições ajudam a construir uma sociedade mais informada e inclusiva! 🇵🇹✨

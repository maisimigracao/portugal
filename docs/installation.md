# 🚀 Guia de Instalação e Configuração

## Pré-requisitos

### Software Necessário
- **Node.js**: v18.0.0 ou superior
- **npm**: v8.0.0 ou superior (incluído com Node.js)
- **Git**: Para clonar o repositório

### Verificar Instalações
```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Git
git --version
```

## 📥 Instalação

### 1. Clonar o Repositório

```bash
# Via HTTPS
git clone https://github.com/seu-usuario/site-imigrantes-docs.git

# Via SSH
git clone git@github.com:seu-usuario/site-imigrantes-docs.git

# Entrar no diretório
cd site-imigrantes-docs/app
```

### 2. Instalar Dependências

```bash
# Instalar todas as dependências
npm install

# Ou com instalação limpa (recomendado)
npm ci
```

### 3. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar o arquivo .env.local
nano .env.local
```

#### Variáveis de Ambiente Necessárias

```env
# API Key do Gemini (se aplicável)
GEMINI_API_KEY=sua_chave_api_aqui

# Outras configurações (opcional)
VITE_APP_TITLE="Pilares de Portugal"
VITE_API_URL=https://api.exemplo.com
```

## 🏃 Executar o Projeto

### Modo de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# O servidor estará disponível em:
# http://localhost:5173
```

### Modo de Produção (Preview)

```bash
# Criar build de produção
npm run build

# Visualizar build localmente
npm run preview

# Disponível em:
# http://localhost:4173
```

## 🔧 Configurações Opcionais

### Porta Customizada

```bash
# Modificar vite.config.ts
export default defineConfig({
  server: {
    port: 3000, // Sua porta preferida
    host: true  // Expor para rede local
  }
})
```

### Proxy para API

```javascript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
```

## 🐛 Solução de Problemas

### Erro: "npm install" falha

```bash
# Limpar cache do npm
npm cache clean --force

# Deletar node_modules e package-lock
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Erro: Porta já em uso

```bash
# Encontrar processo usando a porta
lsof -i :5173

# Matar o processo
kill -9 <PID>

# Ou usar porta diferente
npm run dev -- --port 3000
```

### Erro: Módulo não encontrado

```bash
# Verificar se está no diretório correto
pwd # Deve mostrar .../site-imigrantes-docs/app

# Reinstalar dependências
npm ci
```

### Erro: TypeScript

```bash
# Verificar erros de TypeScript
npx tsc --noEmit

# Limpar cache do TypeScript
rm -rf node_modules/.vite
```

## 📱 Configuração para Desenvolvimento Mobile

### Acessar de Dispositivo Móvel

1. Certifique-se que o dispositivo está na mesma rede
2. Encontre seu IP local:
```bash
# Linux/Mac
ifconfig | grep inet

# Windows
ipconfig
```

3. Inicie o servidor com host exposto:
```bash
npm run dev -- --host
```

4. Acesse no dispositivo:
```
http://SEU_IP_LOCAL:5173
```

## 🔄 Atualizações

### Atualizar Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar dependências (cuidado!)
npm update

# Atualizar para última versão major
npm install package@latest
```

### Sincronizar com Repositório

```bash
# Buscar atualizações
git fetch origin

# Atualizar branch local
git pull origin main

# Reinstalar dependências se necessário
npm ci
```

## 🧪 Verificação da Instalação

### Checklist de Verificação

- [ ] Node.js instalado e versão correta
- [ ] Dependências instaladas sem erros
- [ ] Arquivo .env.local configurado
- [ ] Servidor de desenvolvimento rodando
- [ ] Aplicação acessível no browser
- [ ] Sem erros no console do browser
- [ ] Gráficos carregando corretamente

### Teste Rápido

```bash
# Script de verificação
npm run check:install

# Se não existir, criar manualmente:
node -e "console.log('Node OK'); require('react'); console.log('React OK');"
```

## 📦 Estrutura de Dependências

### Produção
- `react`: Framework UI
- `react-dom`: Renderização DOM
- `recharts`: Visualização de dados
- `react-icons`: Biblioteca de ícones

### Desenvolvimento
- `vite`: Build tool
- `typescript`: Type checking
- `@vitejs/plugin-react`: Plugin React para Vite
- `@types/node`: Types do Node.js

## 🆘 Suporte

### Recursos de Ajuda

1. **Documentação do Projeto**: `/docs`
2. **Issues do GitHub**: [Link para Issues](https://github.com/seu-usuario/site-imigrantes-docs/issues)
3. **Stack Overflow**: Tags `react`, `vite`, `typescript`
4. **Discord/Slack do Projeto**: [Link para comunidade]

### Contato

- **Email**: suporte@exemplo.com
- **GitHub**: @seu-usuario
- **Twitter**: @seu-handle

## ✅ Próximos Passos

Após a instalação bem-sucedida:

1. Explore a [Estrutura do Projeto](./project-structure.md)
2. Leia o [Guia de Desenvolvimento](./development.md)
3. Consulte a [Documentação dos Componentes](./components.md)
4. Veja como fazer [Deploy](./deployment.md)

---

**Nota**: Se encontrar problemas não listados aqui, por favor abra uma issue no GitHub com detalhes do erro e ambiente.

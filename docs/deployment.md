# 🚀 Guia de Deploy

## Visão Geral

Este guia cobre diferentes opções de deploy para a aplicação, desde soluções gratuitas até configurações empresariais.

## 📦 Build de Produção

### Preparação
```bash
# Verificar que tudo funciona localmente
npm run dev

# Executar build de produção
npm run build

# Testar build localmente
npm run preview
```

### Estrutura do Build
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
└── _redirects (se necessário)
```

### Otimizações Automáticas
- ✅ Minificação de JS/CSS
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Compressão de assets
- ✅ Hashing para cache

## 🌐 Opções de Deploy

### 1. Netlify (Recomendado)

#### Deploy via Git
1. Conectar repositório no [Netlify](https://netlify.com)
2. Configurar build:
```yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. Deploy automático em push para main

#### Deploy Manual
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Variáveis de Ambiente
```bash
# Via CLI
netlify env:set VITE_API_KEY "your-key"

# Via Dashboard
# Settings > Environment Variables
```

---

### 2. Vercel

#### Deploy via Git
1. Importar projeto no [Vercel](https://vercel.com)
2. Configuração automática detectada

#### Deploy via CLI
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Configuração
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### 3. GitHub Pages

#### Setup
```bash
# Instalar gh-pages
npm install -D gh-pages

# Adicionar script no package.json
"scripts": {
  "deploy:gh": "npm run build && gh-pages -d dist"
}
```

#### Configuração
```javascript
// vite.config.ts
export default defineConfig({
  base: '/nome-do-repositorio/', // Para GitHub Pages
  // ...
});
```

#### Deploy
```bash
npm run deploy:gh
```

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

### 4. AWS S3 + CloudFront

#### Setup S3 Bucket
```bash
# Criar bucket
aws s3 mb s3://meu-site-imigrantes

# Configurar como website
aws s3 website s3://meu-site-imigrantes \
  --index-document index.html \
  --error-document index.html
```

#### Deploy
```bash
# Build
npm run build

# Sync com S3
aws s3 sync dist/ s3://meu-site-imigrantes \
  --delete \
  --cache-control max-age=31536000,public

# Invalidar CloudFront
aws cloudfront create-invalidation \
  --distribution-id ABCDEFG \
  --paths "/*"
```

#### Política do Bucket
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::meu-site-imigrantes/*"
    }
  ]
}
```

---

### 5. Docker

#### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Build e Deploy
```bash
# Build imagem
docker build -t site-imigrantes .

# Executar localmente
docker run -p 8080:80 site-imigrantes

# Push para registry
docker tag site-imigrantes:latest registry.exemplo.com/site-imigrantes:latest
docker push registry.exemplo.com/site-imigrantes:latest
```

## ⚙️ Configurações de Produção

### Variáveis de Ambiente
```bash
# .env.production
VITE_API_URL=https://api.producao.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
VITE_SENTRY_DSN=https://sentry.io/...
```

### Headers de Segurança
```javascript
// netlify.toml ou vercel.json
headers = [
  {
    for = "/*",
    values = {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline';"
    }
  }
]
```

### Otimização de Cache
```javascript
// Para assets com hash
Cache-Control: public, max-age=31536000, immutable

// Para index.html
Cache-Control: no-cache, no-store, must-revalidate
```

## 📊 Monitoramento

### Google Analytics
```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)
```typescript
// main.tsx
import * as Sentry from "@sentry/react";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: "production",
    tracesSampleRate: 0.1,
  });
}
```

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci && npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://seu-site.com
          uploadArtifacts: true
```

## 🔄 CI/CD Pipeline

### GitHub Actions Completo
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🔒 Checklist de Segurança

### Antes do Deploy
- [ ] Remover console.logs de debug
- [ ] Verificar variáveis de ambiente
- [ ] Atualizar dependências (`npm audit`)
- [ ] Configurar HTTPS
- [ ] Headers de segurança configurados
- [ ] CORS configurado corretamente
- [ ] Rate limiting (se aplicável)
- [ ] Backup de dados (se aplicável)

## 📈 Performance

### Checklist de Otimização
- [ ] Imagens otimizadas (WebP/AVIF)
- [ ] Lazy loading implementado
- [ ] Code splitting configurado
- [ ] Fonts otimizadas
- [ ] Critical CSS inline
- [ ] Service Worker (PWA)
- [ ] CDN configurado

### Métricas Alvo
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90

## 🚨 Rollback

### Estratégia de Rollback
```bash
# Netlify
netlify rollback

# Vercel
vercel rollback

# Git-based
git revert HEAD
git push origin main

# Docker
docker pull registry.exemplo.com/site-imigrantes:previous
docker stop site-imigrantes
docker run -d --name site-imigrantes registry.exemplo.com/site-imigrantes:previous
```

## 📝 Documentação de Deploy

### Informações para Registrar
- Data e hora do deploy
- Versão deployada (git hash)
- Responsável pelo deploy
- Mudanças incluídas
- Testes realizados
- Métricas de performance

### Template de Release Notes
```markdown
## v1.2.0 - 2024-11-04

### 🎉 Novidades
- Feature X adicionada
- Melhoria Y implementada

### 🐛 Correções
- Bug Z corrigido
- Performance melhorada em W

### 📦 Dependências
- React atualizado para v19.2.0
- Vite atualizado para v6.2.0

### 📊 Métricas
- Lighthouse Score: 95
- Bundle Size: 250KB (gzipped)
```

## 🆘 Troubleshooting

### Erro: Build falha
```bash
# Limpar cache
rm -rf node_modules dist
npm ci
npm run build
```

### Erro: 404 em rotas
```nginx
# Adicionar redirect para SPA
try_files $uri $uri/ /index.html;
```

### Erro: Variáveis de ambiente não funcionam
```bash
# Verificar prefixo VITE_
VITE_API_KEY=xxx # ✅ Correto
API_KEY=xxx      # ❌ Não funcionará
```

---

Para contribuir com o projeto, consulte o [Guia de Contribuição](./contributing.md)

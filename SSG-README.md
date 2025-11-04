# Static Site Generation (SSG)

Este projeto agora suporta **Static Site Generation (SSG)**, gerando HTMLs estáticos pré-renderizados com todo o conteúdo visível antes do JavaScript ser executado.

## Como Funciona

O processo de SSG é dividido em duas etapas:

### 1. Build do Vite
```bash
npm run build:only
```
Gera o bundle JavaScript e os assets na pasta `dist/`.

### 2. Pré-renderização
```bash
npm run prerender
```
Usa Puppeteer para:
- Iniciar um servidor preview local
- Visitar cada rota da aplicação
- Capturar o HTML completamente renderizado
- Salvar os HTMLs estáticos na pasta `dist/`

### Build Completo
```bash
npm run build
```
Executa ambas as etapas automaticamente: `vite build` + `prerender`.

## Rotas Pré-renderizadas

As seguintes rotas são automaticamente pré-renderizadas:

- `/` - Página inicial
- `/study/social-security` - Estudo de Segurança Social
- `/study/labor-market` - Estudo de Mercado de Trabalho
- `/study/public-safety` - Estudo de Segurança Pública
- `/study/demographics` - Estudo de Demografia

## Estrutura de Arquivos Gerados

```
dist/
├── index.html (página inicial pré-renderizada)
├── assets/
│   └── index-[hash].js (bundle JavaScript)
└── study/
    ├── social-security/
    │   └── index.html
    ├── labor-market/
    │   └── index.html
    ├── public-safety/
    │   └── index.html
    └── demographics/
        └── index.html
```

## Vantagens do SSG

1. **SEO Otimizado**: Motores de busca conseguem indexar todo o conteúdo
2. **Performance**: Conteúdo visível imediatamente, sem esperar JavaScript
3. **Acessibilidade**: Funciona mesmo com JavaScript desabilitado (parcialmente)
4. **Hospedagem Simples**: Pode ser hospedado em qualquer servidor estático

## Deploy

A pasta `dist/` pode ser hospedada em:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- **Nginx/Apache**
- Qualquer serviço de hospedagem estática

## Desenvolvimento

Para desenvolvimento local, use:
```bash
npm run dev
```

Isso inicia o servidor Vite em modo desenvolvimento (sem pré-renderização).

## Personalização

Para adicionar novas rotas à pré-renderização, edite o arquivo `prerender.mjs`:

```javascript
const routes = [
  '/',
  '/study/social-security',
  '/study/labor-market',
  '/study/public-safety',
  '/study/demographics',
  // Adicione novas rotas aqui
];
```

## Assets Estáticos (Imagens, Fontes, etc.)

Para que imagens e outros assets estáticos sejam copiados para o build, coloque-os na pasta `public/`:

```
public/
└── assets/
    └── cover.png
```

No código, referencie-os com caminho absoluto:
```tsx
style={{ backgroundImage: "url('/assets/cover.png')" }}
```

O Vite automaticamente copia o conteúdo da pasta `public/` para `dist/` durante o build.

## Tecnologias Utilizadas

- **Vite**: Build tool e bundler
- **React Router**: Roteamento client-side
- **Puppeteer**: Navegador headless para pré-renderização
- **Node.js**: Script de pré-renderização

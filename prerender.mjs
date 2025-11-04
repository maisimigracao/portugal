import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Rotas para pré-renderizar
const routes = [
  '/',
  '/study/social-security',
  '/study/labor-market',
  '/study/public-safety',
  '/study/demographics'
];

async function prerender() {
  console.log('🚀 Starting prerender...\n');
  
  // Iniciar servidor preview do Vite
  const server = await preview({
    preview: { port: 4173 }
  });
  
  const port = server.config.preview.port;
  console.log(`✓ Preview server started on http://localhost:${port}\n`);

  // Iniciar Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const distPath = path.join(__dirname, 'dist');
  
  for (const route of routes) {
    console.log(`📄 Rendering ${route}...`);
    
    const page = await browser.newPage();
    const url = `http://localhost:${port}/portugal${route}`;
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Aguardar renderização completa
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const html = await page.content();
      
      // Determinar o caminho do arquivo
      let filePath;
      if (route === '/') {
        filePath = path.join(distPath, 'index.html');
      } else {
        const routePath = route.slice(1); // Remove leading slash
        const dirPath = path.join(distPath, routePath);
        fs.mkdirSync(dirPath, { recursive: true });
        filePath = path.join(dirPath, 'index.html');
      }
      
      // Salvar o HTML renderizado
      fs.writeFileSync(filePath, html);
      console.log(`   ✓ Saved to ${filePath}\n`);
      
    } catch (error) {
      console.error(`   ✗ Error rendering ${route}:`, error.message, '\n');
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.httpServer.close();
  
  console.log('✅ Prerender complete!');
}

prerender().catch(console.error);

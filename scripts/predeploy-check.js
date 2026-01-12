const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const requiredFiles = [
  'index.html',
  path.join('assets', 'css', 'tailwind.build.css'),
  path.join('assets', 'js', 'script.js'),
];

const errors = [];

for (const relative of requiredFiles) {
  const absolute = path.join(projectRoot, relative);
  if (!fs.existsSync(absolute)) {
    errors.push(`Arquivo ausente: ${relative}`);
    continue;
  }
  const stats = fs.statSync(absolute);
  if (!stats.isFile()) {
    errors.push(`Não é um arquivo válido: ${relative}`);
  }
}

const cssPath = path.join(projectRoot, 'assets', 'css', 'tailwind.build.css');
if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  const hasUtilities = cssContent.includes('.flex') && cssContent.length > 1000;
  if (!hasUtilities) {
    errors.push('tailwind.build.css parece estar vazio (só reset). Rode npm run build:css antes do deploy.');
  }
} else {
  errors.push('tailwind.build.css não encontrado.');
}

if (errors.length > 0) {
  console.error('⚠️  Pré-verificação falhou:');
  errors.forEach((msg) => console.error(` - ${msg}`));
  process.exit(1);
}

console.log('✅ Pré-verificação concluída. Você pode enviar:');
console.log('   • index.html');
console.log('   • pasta assets/ (incluindo assets/css/tailwind.build.css)');
console.log('Lembre-se: não envie node_modules ou arquivos de build local.');

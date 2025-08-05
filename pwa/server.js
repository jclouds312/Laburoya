// server.js  
const express = require('express');  
const next = require('next');  
const path = require('path');  
  
// Detectar si estamos en producción  
const dev = process.env.NODE_ENV !== 'production';  
const app = next({ dev, dir: '.' });  
const handle = app.getRequestHandler();  
  
// Puerto configurable (por defecto 3000)  
const port = parseInt(process.env.PORT, 10) || 3000;  
  
app.prepare().then(() => {  
  const server = express();  
  
  // Archivos estáticos generados por Next.js  
  server.use('/_next', express.static(path.join(__dirname, '.next', 'static')));  
  
  // Archivos públicos (public/)  
  server.use(express.static(path.join(__dirname, 'public')));  
  
  // Todas las demás rutas las maneja Next.js  
  server.all('*', (req, res) => {  
    return handle(req, res);  
  });  
  
  // Iniciar servidor  
  server.listen(port, () => {  
    console.log(`> Servidor listo en http://localhost:${port}`);  
  });  
});

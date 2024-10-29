const express = require('express');
const app = express();
const path = require('path');

const calculadoraRoute = require('./routes/calculadora');
const qrRoute = require('./routes/qr');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/calculadora', calculadoraRoute);
app.use('/qr', qrRoute);

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Herramientas</title>
          <link rel="stylesheet" href="/estilos.css">
        </head>
        <body>
        <header>
          <p>CRISTIAN CRUZ: 319008858</p>
        </header>
          <div class="container">
            <h1>¿Qué herramienta quieres usar?</h1>
            <div class="menu">
              <a href="/calculadora">Calculadora</a>
              <a href="/qr">Generador QR</a>
            </div>
          </div>
        </body>
      </html>
    `);
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

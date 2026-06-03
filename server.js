require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint para entregar la API key
app.get('/api-key', (req, res) => {
  res.json({ key: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

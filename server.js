// server.js
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Endpoint para enviar la API key al frontend
app.get("/api/key", (req, res) => {
  res.json({ key: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

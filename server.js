// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Rutas para cada página
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/iniciar-sesion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'iniciar-sesion.html'));
});

app.get('/tienda.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tienda.html'));
});

app.get('/servicios.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios.html'));
});

app.get('/curso.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'curso.html'));
});

app.get('/acerca.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'acerca.html'));
});

app.get('/contacto.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.html'));
});

app.get('/carrito.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'carrito.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const inmuebles = [
{ id: 1, direccion: 'Calle 123', precio: 150000, tipo: 'Apartamento' },
{ id: 2, direccion: 'Avenida 456', precio: 230000, tipo: 'Casa' },
{ id: 3, direccion: 'Carrera 789', precio: 120000, tipo: 'Estudio' }
];
app.get('/api/inmuebles', (req, res) => {
res.json(inmuebles);
});
module.exports = app;
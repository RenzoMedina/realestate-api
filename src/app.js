const express = require('express');
const app = express();
const estates = [
{ id: 1, address: 'Calle 123', price: 150000, type: 'Apartamento' },
{ id: 2, address: 'Avenida 456', price: 230000, type: 'Casa' },
{ id: 3, address: 'Carrera 789', price: 120000, type: 'Estudio' }
];
app.get('/api/estates', (req, res) => {
res.json(estates);
});
module.exports = app;
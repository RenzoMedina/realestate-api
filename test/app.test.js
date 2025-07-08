const request = require('supertest');
const app = require('../src/app');
describe('GET /api/estates', () => {
it('debería retornar una lista de estates', async () => {
const res = await request(app).get('/api/estates');
expect(res.statusCode).toBe(200);
expect(res.body.length).toBeGreaterThan(0);
expect(res.body[0]).toHaveProperty('address');
expect(res.body[0]).toHaveProperty('price');
});
});
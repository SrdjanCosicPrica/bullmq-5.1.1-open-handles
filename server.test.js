const request = require('supertest');
const { setupServer } = require('./server.js');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
describe('Server', () => {
  it('should return jobs', async () => {
    const { app, shutdown } = await setupServer();
    try {
      await request(app).get('/tasks').expect(200);
    } finally {
      await shutdown();
    }
  });

  it('should return jobs', async () => {
    const { app, shutdown } = await setupServer();
    try {
      await request(app).get('/tasks').expect(200);
    } finally {
      await shutdown();
    }
  });
});

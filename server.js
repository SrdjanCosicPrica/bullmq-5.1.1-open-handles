const { Queue, Worker } = require('bullmq');
const express = require('express');
const http = require('http')
const { createRedis } = require('./redis');

const setupServer = async () => {
  const app = express();
  const redis = createRedis()
  // Commenting this line out will make the test pass.
  // I guess BullMQ handles the connection and waits for it properly
  // when it's not connected from the start.
  await redis.connect();
  const queue = new Queue('test-queue', { connection: redis });
  const worker = new Worker('test-queue', async job => {
  }, { connection: redis, autorun: false, });

  worker.run();

  app.get('/tasks', async (req, res) => {
    const jobs = await queue.getJobs();
    res.json(jobs);
  })

  const server = http.createServer(app);
  server.listen()
  const shutdown = async () => {
    await worker.close(true)
    await queue.close();
    redis.disconnect();
    await new Promise(resolve => {
      // Prevent bleeding during tests
      redis.flushall('SYNC', resolve);
    });
    server.close();
  }
  return { app, shutdown };
}

module.exports = { setupServer };

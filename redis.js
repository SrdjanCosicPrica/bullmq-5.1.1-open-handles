const Redis  = require('ioredis');
const createRedis = () => {
  return new Redis({
    host: 'localhost',
    port: '6378',
    lazyConnect: true,
    enableOfflineQueue: false,
    maxRetriesPerRequest: null
  });
}

module.exports = { createRedis };

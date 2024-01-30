const { setupServer } = require('./server');
const start = async () => {
  await setupServer();
};

(start()).catch((err) => {
  console.error(err);
  process.exit(1);
});

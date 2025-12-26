const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json());

/**
 * ROOT
 * /api/backend-js/
 */
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend JS running in Docker 🚀'
  });
});

/**
 * HELLO
 * /api/backend-js/hello
 */
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from backend-js 👋'
  });
});

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.originalUrl
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend JS listening on port ${PORT}`);
});


// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
};

app.get('/events', cors(corsOptions), (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  // send SSE every Second
  setInterval(() => {
    const data = {
      message: `랜덤 숫자가 도착했습니다. ${Math.floor(Math.random() * 100)} (${new Date().toLocaleString()})`,
    };
    console.log('sent: ', data);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);
});

app.listen(3000, () => console.log('Server is listening on port 3000'));

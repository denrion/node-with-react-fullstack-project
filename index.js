require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} environment, on port ${PORT}`);
});

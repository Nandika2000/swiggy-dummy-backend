const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const { swiggyRouter } = require('./routes/swiggy.routes');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/swiggy', swiggyRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

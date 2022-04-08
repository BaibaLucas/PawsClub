/* Package required */
const express = require('express');
require('dotenv').config({ path: '../.env'});
const bodyParser = require('body-parser');
const cors = require('cors');

/* Local required */
const router = require('./app/routers/router');

/* Server */
const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, UPDATE, DELETE');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.use(router);

app.listen(process.env.PORT, () => {
  ('Server running on :', process.env.PORT);
});

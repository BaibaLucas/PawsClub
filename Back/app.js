/* Package required */
const express = require('express');
require('dotenv').config({ path: '../.env'});

/* Local required */
const router = require('./app/routers/router');

/* Server */
const app = express();

app.use(router);

app.listen(3001, () => {
  console.log('Server running on :', 3001);
});

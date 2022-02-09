/* Package required */
const express = require('express');

/* Local required */

/* Server */

const app = express();

app.get('/', (req, res) => {
  res.send('Server up')
});

app.listen(3001, () => {
  console.log('Server running on :', 3001);
});

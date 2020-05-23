const express = require('express');
const app = express();

const PORT = process.env.PORT || 2626;

app.get('/', (req, res) => {
  res.send('Hello Gabo');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

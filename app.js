const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const www = process.env.WWW || './';
const longestWord = require('./longestWord');

app.use(express.static(www));

console.log(`serving ${www}`);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: www });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

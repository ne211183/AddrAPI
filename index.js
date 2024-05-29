const express = require('express');
const app = express();
const PORT = 8080;

let addrBook = [
  { name: 'Hanako', info: { tel: '0304458823', addr: 'dokoka' } },
  { name: 'Taro', info: { tel: '0304453387', addr: 'tooi' } },
  { name: 'Jiro', info: { tel: '0302238876', addr: 'tokoro' } }
];

app.get('/', (req, res) => {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  res.send({ result: addrBook.length, data: addrBook });
});

app.get('/addr', (req, res) => {
  let result = { result: 0, data: [] };
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');

  addrBook.forEach(e => {
    if (e.name == req.query.name) {
      result.result++;
      result.data.push(e.info);
    }
  });
  res.send(result);
});

app.listen(process.env.PORT || PORT);
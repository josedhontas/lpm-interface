const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs'); // Importe o módulo fs

const app = express();

// Middleware para analisar dados POST no formato x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Habilitar o CORS para permitir solicitações de origens diferentes
app.use(cors());

const dataFilePath = 'data.json'; // Caminho para o arquivo JSON

let data = []; // Array para armazenar os dados

if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]', 'utf-8');
} else {
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  data = JSON.parse(jsonData);
}

app.post('/api/receber-dados', (req, res) => {
  const receivedData = req.body;

  const accelX1 = receivedData['Accel X1'];
  const accelY1 = receivedData['Accel Y1'];
  const accelZ1 = receivedData['Accel Z1'];


  data.push(receivedData);

  if (data.length > 5) {
      data = [];
      fs.writeFileSync(dataFilePath, '[]', 'utf-8');
  } else {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  console.log('Dados recebidos e armazenados:');
  console.log(receivedData);

  res.json({ message: 'Dados recebidos e armazenados com sucesso' });
});

  

app.get('/api/dados', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT ||3000, () => {
  console.log(`Servidor Express rodando`);
});

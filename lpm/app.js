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

// Verifique se o arquivo JSON existe, senão, crie-o
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '[]', 'utf-8');
} else {
  // Caso contrário, leia os dados do arquivo
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  data = JSON.parse(jsonData);
}

// Rota para receber dados POST
app.post('/api/receber-dados', (req, res) => {
  // Dados recebidos no corpo da solicitação POST
  const receivedData = req.body;

  // Adicione os dados ao array
  data.push(receivedData);

  // Salve os dados no arquivo JSON
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');

  // Exibir os dados no console
  console.log('Dados recebidos e armazenados:');
  console.log(receivedData);

  // Responder com uma mensagem de sucesso
  res.json({ message: 'Dados recebidos e armazenados com sucesso' });
});

// Rota para obter todos os dados em formato JSON
app.get('/api/dados', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT ||3000, () => {
  console.log(`Servidor Express rodando`);
});

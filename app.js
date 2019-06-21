const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Teste DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/ranking',(req,res) => {
  res.sendFile(__dirname+'/views/ranking.html');
})

app.get('/mensagem',(req,res) => {
  res.sendFile(__dirname+'/views/mensagem.html');
})

require('./controller/Assinantes')(app);
require('./controller/User')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Serviço disponivel na porta ${PORT}`));
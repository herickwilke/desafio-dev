const express = require('express');
const config = require('config');
const consign = require('consign');
var bodyParser = require('body-parser');
const db = require('./database');

module.exports = () => {
  const app = express();
  db.connect();

  // Setando variáveis da aplicação
  app.use(bodyParser.json());
  app.set('port', process.env.PORT || config.get('server.port'));

  // Configuração de rotas
  consign({ cwd: 'api' }).then('controllers').then('routes').into(app);

  return app;
};

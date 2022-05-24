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
  app.listen(config.get('server.port'), '0.0.0.0');

  // Configuração de rotas
  consign({ cwd: 'api' }).then('controllers').then('routes').into(app);

  // Configurações de banco
  app.on('listening', function () {
    db.seedBase();
  });
  return app;
};

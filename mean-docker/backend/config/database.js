const config = require('config');
const databaseRepositorio = require('../api/repositories/databaseRepositorio');

async function connect() {
  try {
    if (global.connection && global.connection.state !== 'disconnected')
      return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(
      `mysql://${config.get('database.user')}:${config.get(
        'database.password'
      )}@${config.get('database.host')}:${config.get(
        'database.port'
      )}/${config.get('database.name')}`
    );
    global.connection = connection;
    console.log('Banco conectado.');
    return connection;
  } catch (err) {
    setTimeout(() => {
      console.log(err);
      console.log(
        'A conexão com o banco falhou. Tentando novamente em segundos.'
      );
      connect();
    }, 10000);
  }
}

async function seedBase() {
  await databaseRepositorio.verificarBase();
}

module.exports = { connect, seedBase };

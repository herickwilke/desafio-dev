const config = require('config');

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection(
    `mysql://${config.get('database.user')}:${config.get(
      'database.password'
    )}@localhost:${config.get('database.port')}/${config.get('database.name')}`
  );
  global.connection = connection;
  return connection;
}

module.exports = { connect };

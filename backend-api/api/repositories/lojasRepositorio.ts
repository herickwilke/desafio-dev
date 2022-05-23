import { Transacao } from "../models/transacao";
const database = require("../../config/database");

async function listarTransacoesAsync(transacao: Transacao) {
  const conn = await database.connect();

  const query = `SELECT * FROM transacao t 
                    INNER JOIN tipo_transacao tt on tt.id = t.tipo_id
                    INNER JOIN natureza_transacao nt on nt.id = tt.natureza_id`;

  const [rows] = await conn.query(query);
  return rows;
}
module.exports = { listarTransacoesAsync };

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

async function listarTotaisPorLojaTipoAsync(transacao: Transacao) {
  const conn = await database.connect();

  const query = `SELECT DISTINCT nome_loja, sum(valor) as 'valor', descricao, natureza FROM transacao t 
                    INNER JOIN tipo_transacao tt on tt.id = t.tipo_id
                    INNER JOIN natureza_transacao nt on nt.id = tt.natureza_id
                  GROUP BY nome_loja, descricao, natureza`;

  const [rows] = await conn.query(query);
  return rows;
}

module.exports = { listarTransacoesAsync, listarTotaisPorLojaTipoAsync };

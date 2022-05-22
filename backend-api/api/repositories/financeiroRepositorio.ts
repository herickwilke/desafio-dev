import { Transacao } from "../models/transacao";
const database = require("../../config/database");

async function cadastrarTransacao(transacao: Transacao) {
  const conn = await database.connect();

  const query = `INSERT INTO transacao(tipo_id, data, valor, cpf, cartao, hora, nome_proprietario, nome_loja) 
    VALUES ('${transacao.tipo}', '${transacao.data}', '${transacao.valor}', '${transacao.cpf}', '${transacao.cartao}',
    '${transacao.hora}', '${transacao.nomeProprietario}','${transacao.nomeLoja}');`;

  console.log(query);

  const [rows] = await conn.query(query);

  return rows;
}

module.exports = { cadastrarTransacao };

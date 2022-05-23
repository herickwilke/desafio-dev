import { Transacao } from "../models/transacao";
const database = require("../../config/database");

async function cadastrarTransacaoAsync(transacao: Transacao) {
  try {
    const conn = await database.connect();
    const query = `INSERT INTO transacao(tipo_id, data, valor, cpf, cartao, hora, nome_proprietario, nome_loja) 
      VALUES ('${transacao.tipo}', '${transacao.data}', '${transacao.valor}', '${transacao.cpf}', '${transacao.cartao}',
      '${transacao.hora}', '${transacao.nomeProprietario}','${transacao.nomeLoja}');`;

    const [rows] = await conn.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { cadastrarTransacaoAsync };

import { Transacao } from "../models/transacao";
const financeiroRepositorio = require("../repositories/financeiroRepositorio");
import moment, { Moment } from "moment";

async function processarArquivo(arquivo: any) {
  var cnabLinhas = arquivo.split("\r\n");
  cnabLinhas.forEach((linha: any) => {
    var trans = new Transacao();
    trans.tipo = linha.slice(0, 1);
    trans.data = moment(linha.slice(1, 9), "YYYYMMDD").format("YYYY-MM-DD");
    trans.valor = linha.slice(9, 19);
    trans.cpf = linha.slice(19, 30);
    trans.cartao = linha.slice(30, 42);
    trans.hora = linha.slice(42, 48);
    trans.nomeProprietario = linha.slice(48, 62);
    trans.nomeLoja = linha.slice(62, 81);
    financeiroRepositorio.cadastrarTransacaoAsync(trans);
  });

  return true;
}

module.exports = {
  processarArquivo,
};

import { Transacao } from "../models/transacao";
const lojasRepositorio = require("../repositories/lojasRepositorio");

async function listarOperacoes() {
  return await lojasRepositorio.listarTransacoesAsync();
}

module.exports = {
  listarOperacoes,
};

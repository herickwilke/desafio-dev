import { Transacao } from "../models/transacao";
const lojasRepositorio = require("../repositories/lojasRepositorio");

async function listarOperacoes() {
  return await lojasRepositorio.listarTransacoesAsync();
}

async function listarTotaisPorLojaTipo() {
  return await lojasRepositorio.listarTotaisPorLojaTipoAsync();
}

module.exports = {
  listarOperacoes,
  listarTotaisPorLojaTipo,
};

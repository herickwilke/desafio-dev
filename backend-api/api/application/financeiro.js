"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transacao_1 = require("../models/transacao");
const financeiroRepositorio = require("../repositories/financeiroRepositorio");
const moment_1 = __importDefault(require("moment"));
function processarArquivo(arquivo) {
    return __awaiter(this, void 0, void 0, function* () {
        var cnabLinhas = arquivo.split("\r\n");
        cnabLinhas.forEach((linha) => {
            var trans = new transacao_1.Transacao();
            trans.tipo = linha.slice(0, 1);
            trans.data = (0, moment_1.default)(linha.slice(1, 9), "YYYYMMDD").format("YYYY-MM-DD");
            trans.valor = linha.slice(9, 19);
            trans.cpf = linha.slice(19, 30);
            trans.cartao = linha.slice(30, 42);
            trans.hora = linha.slice(42, 48);
            trans.nomeProprietario = linha.slice(48, 62);
            trans.nomeLoja = linha.slice(62, 81);
            console.log(trans);
            financeiroRepositorio.cadastrarTransacao(trans);
        });
        return true;
    });
}
module.exports = {
    processarArquivo,
};

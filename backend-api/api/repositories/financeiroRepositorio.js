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
Object.defineProperty(exports, "__esModule", { value: true });
const database = require("../../config/database");
function cadastrarTransacaoAsync(transacao) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database.connect();
            const query = `INSERT INTO transacao(tipo_id, data, valor, cpf, cartao, hora, nome_proprietario, nome_loja) 
      VALUES ('${transacao.tipo}', '${transacao.data}', '${transacao.valor}', '${transacao.cpf}', '${transacao.cartao}',
      '${transacao.hora}', '${transacao.nomeProprietario}','${transacao.nomeLoja}');`;
            const [rows] = yield conn.query(query);
            return rows;
        }
        catch (error) {
            console.log(error);
        }
    });
}
module.exports = { cadastrarTransacaoAsync };

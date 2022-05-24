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
const database = require("../../config/database");
function verificarBase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database.connect();
            const query = `SELECT * FROM transacao;`;
            const [rows] = yield conn.query(query);
        }
        catch (error) {
            yield seedBaseAsync();
        }
    });
}
function seedBaseAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        // Seeder apenas para aplicação de teste.
        try {
            const conn = yield database.connect();
            query = `DROP TABLE IF EXISTS transacao;`;
            yield conn.query(query);
            query = `DROP TABLE IF EXISTS tipo_transacao;`;
            yield conn.query(query);
            var query = `DROP TABLE IF EXISTS natureza_transacao;`;
            yield conn.query(query);
            query = `CREATE TABLE natureza_transacao (
            id int NOT NULL AUTO_INCREMENT,
            natureza varchar(255) NOT NULL,
            PRIMARY KEY (id)
            );`;
            yield conn.query(query);
            query = `INSERT INTO natureza_transacao VALUES (1,'Entrada'),(2,'Saída');`;
            yield conn.query(query);
            query = `CREATE TABLE tipo_transacao (
                id int NOT NULL AUTO_INCREMENT,
                tipo int NOT NULL,
                descricao varchar(255) NOT NULL,
                natureza_id int NOT NULL,
                sinal varchar(2) NOT NULL,
                PRIMARY KEY (id),
                UNIQUE KEY tipo (tipo),
                KEY natureza_id (natureza_id),
                CONSTRAINT tipo_transacao_ibfk_1 FOREIGN KEY (natureza_id) REFERENCES natureza_transacao (id)
                );`;
            yield conn.query(query);
            query = `INSERT INTO tipo_transacao VALUES (1,1,'Débito',1,'+'),(2,2,'Boleto',2,'-'),
            (3,3,'Financiamento',2,'-'),(4,4,'Crédito',1,'+'),(5,5,'Recebimento Empréstimo',1,'+'),
            (6,6,'Vendas',1,'+'),(7,7,'Recebimento TED',1,'+'),(8,8,'Recebimento DOC',1,'+'),(9,9,'Aluguel',2,'-');`;
            yield conn.query(query);
            query = `CREATE TABLE transacao (
                    id int NOT NULL AUTO_INCREMENT,
                    tipo_id int NOT NULL,
                    data date NOT NULL,
                    valor decimal(10,2) NOT NULL,
                    cpf varchar(15) NOT NULL,
                    cartao varchar(50) NOT NULL,
                    hora time NOT NULL,
                    nome_proprietario varchar(255) NOT NULL,
                    nome_loja varchar(255) NOT NULL,
                    PRIMARY KEY (id),
                    KEY tipo_id (tipo_id),
                    CONSTRAINT transacao_ibfk_1 FOREIGN KEY (tipo_id) REFERENCES tipo_transacao (id)
                    );`;
            yield conn.query(query);
        }
        catch (error) {
            console.log(error);
        }
    });
}
module.exports = { verificarBase, seedBaseAsync };

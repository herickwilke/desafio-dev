const cors = require("cors");

module.exports = (app) => {
  const lojasController = app.controllers.lojasController;

  // Configuração CORS
  app.use(cors());

  // Rotas
  app.route("/api/v1/listar-transacoes").get(lojasController.listarOperacoes);
  app
    .route("/api/v1/listar-totais")
    .get(lojasController.listarTotaisPorLojaTipo);
};

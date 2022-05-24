const cors = require("cors");

module.exports = (app) => {
  const financeiroController = app.controllers.financeiroController;

  // Configuração CORS
  app.use(cors());

  // Rotas
  app
    .route("/api/v1/processar-arquivo")
    .post(financeiroController.processarArquivo);
};

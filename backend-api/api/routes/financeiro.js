module.exports = (app) => {
  const financeiroController = app.controllers.financeiroController;

  app
    .route("/api/v1/processar-arquivo")
    .post(financeiroController.processarArquivo);
};

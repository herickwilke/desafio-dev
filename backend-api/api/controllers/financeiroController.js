module.exports = () => {
  const controller = {};
  const financeiro = require("../application/financeiro");

  // Recebe o arquivo CNAB
  controller.processarArquivo = (req, res) => {
    try {
      if (req.headers["content-type"] == "text/plain") {
        if (financeiro.processarArquivo(req.body)) {
          res.status(200).send("Importado com sucesso.");
        }
      } else {
        res.status(400).send("Verifique o arquivo enviado e tente novamente.");
      }
    } catch (e) {
      res.status(500).send("Houve um erro ao processar o arquivo enviado.");
    }
  };

  return controller;
};

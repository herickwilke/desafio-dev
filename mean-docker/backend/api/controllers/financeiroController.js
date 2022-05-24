module.exports = () => {
  const controller = {};
  const financeiro = require("../application/financeiro");

  // Recebe o arquivo CNAB
  controller.processarArquivo = (req, res) => {
    try {
      if (req.headers["content-type"] == "application/json" && req.body.file) {
        if (financeiro.processarArquivo(req.body.file)) {
          res.status(200).json({ status: "sucesso" });
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

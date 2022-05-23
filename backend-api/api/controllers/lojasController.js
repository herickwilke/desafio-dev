module.exports = () => {
  const controller = {};
  const lojas = require("../application/lojas");

  // Devolve o histórico de importações
  controller.listarOperacoes = async (req, res) => {
    try {
      const operacoes = await lojas.listarOperacoes();
      return res.status(200).json(operacoes);
    } catch (e) {
      console.log(e);
      res.status(500).send("Houve um erro ao consultar as operações.");
    }
  };

  return controller;
};

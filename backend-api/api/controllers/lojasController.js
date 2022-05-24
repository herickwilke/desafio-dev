module.exports = () => {
  const controller = {};
  const lojas = require("../application/lojas");

  // Devolve o histórico de importações
  controller.listarOperacoes = async (req, res) => {
    try {
      const operacoes = await lojas.listarOperacoes();
      return res.status(200).json(operacoes);
    } catch (error) {
      console.log(error);
      res.status(500).send("Houve um erro ao consultar as operações.");
    }
  };

  // Devolve o valor total diferenciando por loja e por tipo de transação
  controller.listarTotaisPorLojaTipo = async (req, res) => {
    try {
      const listaTotais = await lojas.listarTotaisPorLojaTipo();
      return res.status(200).json(listaTotais);
    } catch (error) {
      console.log(error);
      res.status(500).send("Houve um erro ao consultar as operações.");
    }
  };

  return controller;
};

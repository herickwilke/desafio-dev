const app = require("./config/express")();
const port = app.get("port");

// Aplicativo ouvindo na porta definida em ./config/config.json
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

import * as http from "http";
import { app } from "./app";

const port = process.env.PORT;
// importa o app e joga o conteúdo dele dentro do createServer para criar o servidor
// com isso este arquivo fica com a responsabilidade apenas de criar o servidor e o app para criar as rotas
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { HttpMethodsEnum as HttpMethodsEnum } from "./utils/http-methods-enum";
import { Routes } from "./routes/routes";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  // Vai dividr a url em duas, antes do ? será a rota base e depois serão os queryStrings da rota
  const baseUrl = req.url?.split("?")[0] || [""];

  // Definir rotas sem utilizar nenhum framework através do req.url
  if (req.method === HttpMethodsEnum.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res);
  }

  if (req.method === HttpMethodsEnum.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(req, res);
  }
};

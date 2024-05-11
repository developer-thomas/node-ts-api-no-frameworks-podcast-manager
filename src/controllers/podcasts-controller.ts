import { IncomingMessage, ServerResponse } from "http";
import { listEpisodeService } from "../services/listEpisodes-service";
import { serviceFilterEpisodes } from "../services/filterEpisode-service";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";

// A responsabilidade do controller é controlar as req e res, chamando os serviços necessários para cada um
export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: PodcastTransferModel = await listEpisodeService();

  // Pega o status code dinamicamente diretamente do service, por ter definido o PodcastTransferModel ao content
  res.writeHead(content.statusCode, { "Content-Type": "application/json" });
  // Aqui define-se o corpo da resposta
  res.write(JSON.stringify(content.body));
  // Define o ponto final da resposta, opcionalmente pode-se definir um conteúdo
  res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, { "Content-Type": "apllcation/json" });
  res.write(JSON.stringify(content.body));
  res.end();
};

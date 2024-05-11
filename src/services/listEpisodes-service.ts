import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcasts.repository";
import { StatusCode } from "../utils/status-code-enum";

export const listEpisodeService = async (): Promise<PodcastTransferModel> => {
  // Definir o contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // Busca os dados
  const data = await repositoryPodcast();

  // Verfiicar o tipo de resposta e
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NoContent;
  }

  responseFormat.body = data;

  return responseFormat;
};

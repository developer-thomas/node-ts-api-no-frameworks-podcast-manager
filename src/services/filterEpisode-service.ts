import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { PodcastModel } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts.repository";
import { StatusCode } from "../utils/status-code-enum";

// Pelo fato de ser asíncrono é preciso definir que o retorno será uma promise
export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
  // definir a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // buscando os dados
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data: PodcastModel[] = await repositoryPodcast(queryString);

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NoContent;
  }

  responseFormat.body = data;

  return responseFormat;
};

import { PodcastModel } from "./podcast-model";

// DTO - Data Transfer Object, quando há um modelo so pra representar uma transferencia
export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}

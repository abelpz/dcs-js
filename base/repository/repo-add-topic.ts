import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { InvalidTopicsError } from "../models/invalid-topics-error";

export interface repoAddTopicParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the topic to add */
  topic: string;
}
/**
 * Add a topic to a repository
 */
export default function repoAddTopic({
  owner,
  repo,
  topic,
  auth,
  options,
}: repoAddTopicParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics/${topic}`,
    query: {
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

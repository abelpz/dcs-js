import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { InvalidTopicsError } from "../models/invalid-topics-error";

export interface repoDeleteTopicParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the topic to delete */
  topic: string;
}
/**
 * Delete a topic from a repository
 */
export default function repoDeleteTopic({
  owner,
  repo,
  topic,
  auth,
  options,
}: repoDeleteTopicParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

import { baseParams, request } from "../utils";
import { RepoTopicOptions } from "../models/repo-topic-options";
import { Empty } from "../models/empty";
import { InvalidTopicsError } from "../models/invalid-topics-error";

export interface repoUpdateTopicsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: RepoTopicOptions;
}
/**
 * Replace list of topics for a repository
 */
export default function repoUpdateTopics({
  owner,
  repo,
  body,
  auth,
  options,
}: repoUpdateTopicsParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/topics`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

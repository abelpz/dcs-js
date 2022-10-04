import { baseParams, request } from "../utils";
import { Repository } from "../models/repository";

export interface repoGetParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Get a repository
 */
export default function repoGet({
  owner,
  repo,
  auth,
  options,
}: repoGetParams): Promise<Repository> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}`,
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

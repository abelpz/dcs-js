import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface repoDeleteParams extends baseParams {
  /** owner of the repo to delete */
  owner: string;
  /** name of the repo to delete */
  repo: string;
}
/**
 * Delete a repository
 */
export default function repoDelete({
  owner,
  repo,
  auth,
  options,
}: repoDeleteParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

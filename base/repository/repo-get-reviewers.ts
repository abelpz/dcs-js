import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface repoGetReviewersParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Return all users that can be requested to review in this repo
 */
export default function repoGetReviewers({
  owner,
  repo,
  auth,
  options,
}: repoGetReviewersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/reviewers`,
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

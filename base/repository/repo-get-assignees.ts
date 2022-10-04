import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface repoGetAssigneesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Return all users that have write access and can be assigned to issues
 */
export default function repoGetAssignees({
  owner,
  repo,
  auth,
  options,
}: repoGetAssigneesParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/assignees`,
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

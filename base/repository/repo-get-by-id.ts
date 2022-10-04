import { baseParams, request } from "../utils";
import { Repository } from "../models/repository";

export interface repoGetByIDParams extends baseParams {
  /** id of the repo to get */
  id: number;
}
/**
 * Get a repository by id
 */
export default function repoGetByID({
  id,
  auth,
  options,
}: repoGetByIDParams): Promise<Repository> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repositories/${id}`,
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

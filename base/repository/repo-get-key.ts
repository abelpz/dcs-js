import { baseParams, request } from "../utils";
import { DeployKey } from "../models/deploy-key";

export interface repoGetKeyParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the key to get */
  id: number;
}
/**
 * Get a repository&#39;s key by id
 */
export default function repoGetKey({
  owner,
  repo,
  id,
  auth,
  options,
}: repoGetKeyParams): Promise<DeployKey> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys/${id}`,
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

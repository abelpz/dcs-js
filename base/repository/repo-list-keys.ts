import { baseParams, request } from "../utils";
import { DeployKeyList } from "../models/deploy-key-list";

export interface repoListKeysParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** the key_id to search for */
  keyId?: number;
  /** fingerprint of the key */
  fingerprint?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a repository&#39;s keys
 */
export default function repoListKeys({
  owner,
  repo,
  keyId,
  fingerprint,
  page,
  limit,
  auth,
  options,
}: repoListKeysParams): Promise<DeployKeyList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys`,
    query: {
      key_id: keyId,
      fingerprint: fingerprint,
      page: page,
      limit: limit,
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

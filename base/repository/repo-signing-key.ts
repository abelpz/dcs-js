import { baseParams, request } from "../utils";

export interface repoSigningKeyParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Get signing-key.gpg for given repository
 */
export default function repoSigningKey({
  owner,
  repo,
  auth,
  options,
}: repoSigningKeyParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/signing-key.gpg`,
    query: {
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "text/plain",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

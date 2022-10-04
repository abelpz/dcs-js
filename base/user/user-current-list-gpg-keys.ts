import { baseParams, request } from "../utils";
import { GpgKeyList } from "../models/gpg-key-list";

export interface userCurrentListGPGKeysParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the authenticated user&#39;s GPG keys
 */
export default function userCurrentListGPGKeys({
  page,
  limit,
  auth,
  options,
}: userCurrentListGPGKeysParams): Promise<GpgKeyList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_keys`,
    query: {
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

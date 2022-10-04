import { baseParams, request } from "../utils";
import { PublicKeyList } from "../models/public-key-list";

export interface userCurrentListKeysParams extends baseParams {
  /** fingerprint of the key */
  fingerprint?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the authenticated user&#39;s public keys
 */
export default function userCurrentListKeys({
  fingerprint,
  page,
  limit,
  auth,
  options,
}: userCurrentListKeysParams): Promise<PublicKeyList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/keys`,
    query: {
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

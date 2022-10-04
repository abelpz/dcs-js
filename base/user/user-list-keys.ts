import { baseParams, request } from "../utils";
import { PublicKeyList } from "../models/public-key-list";

export interface userListKeysParams extends baseParams {
  /** username of user */
  username: string;
  /** fingerprint of the key */
  fingerprint?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the given user&#39;s public keys
 */
export default function userListKeys({
  username,
  fingerprint,
  page,
  limit,
  auth,
  options,
}: userListKeysParams): Promise<PublicKeyList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/keys`,
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

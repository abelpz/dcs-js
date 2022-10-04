import { baseParams, request } from "../utils";
import { GpgKeyList } from "../models/gpg-key-list";

export interface userListGPGKeysParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the given user&#39;s GPG keys
 */
export default function userListGPGKeys({
  username,
  page,
  limit,
  auth,
  options,
}: userListGPGKeysParams): Promise<GpgKeyList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/gpg_keys`,
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

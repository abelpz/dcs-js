import { baseParams, request } from "../utils";
import { AccessTokenList } from "../models/access-token-list";

export interface userGetTokensParams extends baseParams {
  /** username of user */
  username: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the authenticated user&#39;s access tokens
 */
export default function userGetTokens({
  username,
  page,
  limit,
  auth,
  options,
}: userGetTokensParams): Promise<AccessTokenList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/tokens`,
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

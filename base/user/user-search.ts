import { baseParams, request } from "../utils";
import { User } from "../models/user";

export interface userSearchParams extends baseParams {
  /** keyword */
  q?: string;
  /** ID of the user to search for */
  uid?: number;
  /** If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed. */
  lang?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Search for users
 */
export default function userSearch({
  q,
  uid,
  lang,
  page,
  limit,
  auth,
  options,
}: userSearchParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/search`,
    query: {
      q: q,
      uid: uid,
      lang: lang,
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

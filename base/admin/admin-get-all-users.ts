import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";
import { Forbidden } from "../models/forbidden";

export interface adminGetAllUsersParams extends baseParams {
  /** If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang&#39;s are ORed. */
  lang?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List all users
 */
export default function adminGetAllUsers({
  lang,
  page,
  limit,
  auth,
  options,
}: adminGetAllUsersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/users`,
    query: {
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

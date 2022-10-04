import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface orgListPublicMembersParams extends baseParams {
  /** name of the organization */
  org: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List an organization&#39;s public members
 */
export default function orgListPublicMembers({
  org,
  page,
  limit,
  auth,
  options,
}: orgListPublicMembersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members`,
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

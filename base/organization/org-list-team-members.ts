import { baseParams, request } from "../utils";
import { UserList } from "../models/user-list";

export interface orgListTeamMembersParams extends baseParams {
  /** id of the team */
  id: number;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List a team&#39;s members
 */
export default function orgListTeamMembers({
  id,
  page,
  limit,
  auth,
  options,
}: orgListTeamMembersParams): Promise<UserList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/members`,
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

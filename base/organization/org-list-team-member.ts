import { baseParams, request } from "../utils";
import { User } from "../models/user";
import { NotFound } from "../models/not-found";

export interface orgListTeamMemberParams extends baseParams {
  /** id of the team */
  id: number;
  /** username of the member to list */
  username: string;
}
/**
 * List a particular member of team
 */
export default function orgListTeamMember({
  id,
  username,
  auth,
  options,
}: orgListTeamMemberParams): Promise<User> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/teams/${id}/members/${username}`,
    query: {
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

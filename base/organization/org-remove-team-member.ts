import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface orgRemoveTeamMemberParams extends baseParams {
  /** id of the team */
  id: number;
  /** username of the user to remove */
  username: string;
}
/**
 * Remove a team member
 */
export default function orgRemoveTeamMember({
  id,
  username,
  auth,
  options,
}: orgRemoveTeamMemberParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

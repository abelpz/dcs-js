import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface orgAddTeamMemberParams extends baseParams {
  /** id of the team */
  id: number;
  /** username of the user to add */
  username: string;
}
/**
 * Add a team member
 */
export default function orgAddTeamMember({
  id,
  username,
  auth,
  options,
}: orgAddTeamMemberParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
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

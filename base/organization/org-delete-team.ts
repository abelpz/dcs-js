import { baseParams, request } from "../utils";

export interface orgDeleteTeamParams extends baseParams {
  /** id of the team to delete */
  id: number;
}
/**
 * Delete a team
 */
export default function orgDeleteTeam({
  id,
  auth,
  options,
}: orgDeleteTeamParams) {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/teams/${id}`,
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

import { baseParams, request } from "../utils";
import { EditTeamOption } from "../models/edit-team-option";
import { Team } from "../models/team";

export interface orgEditTeamParams extends baseParams {
  /** id of the team to edit */
  id: number;
  body: EditTeamOption;
}
/**
 * Edit a team
 */
export default function orgEditTeam({
  id,
  body,
  auth,
  options,
}: orgEditTeamParams): Promise<Team> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/teams/${id}`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

import { baseParams, request } from "../utils";
import { CreateTeamOption } from "../models/create-team-option";
import { Team } from "../models/team";
import { ValidationError } from "../models/validation-error";

export interface orgCreateTeamParams extends baseParams {
  /** name of the organization */
  org: string;
  body: CreateTeamOption;
}
/**
 * Create a team
 */
export default function orgCreateTeam({
  org,
  body,
  auth,
  options,
}: orgCreateTeamParams): Promise<Team> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/teams`,
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

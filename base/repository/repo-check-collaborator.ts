import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoCheckCollaboratorParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** username of the collaborator */
  collaborator: string;
}
/**
 * Check if a user is a collaborator of a repository
 */
export default function repoCheckCollaborator({
  owner,
  repo,
  collaborator,
  auth,
  options,
}: repoCheckCollaboratorParams): Promise<Empty> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
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

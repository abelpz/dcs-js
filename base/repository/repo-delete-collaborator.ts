import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { ValidationError } from "../models/validation-error";

export interface repoDeleteCollaboratorParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** username of the collaborator to delete */
  collaborator: string;
}
/**
 * Delete a collaborator from a repository
 */
export default function repoDeleteCollaborator({
  owner,
  repo,
  collaborator,
  auth,
  options,
}: repoDeleteCollaboratorParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

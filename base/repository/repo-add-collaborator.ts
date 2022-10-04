import { baseParams, request } from "../utils";
import { AddCollaboratorOption } from "../models/add-collaborator-option";
import { Empty } from "../models/empty";
import { ValidationError } from "../models/validation-error";

export interface repoAddCollaboratorParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** username of the collaborator to add */
  collaborator: string;
  body: AddCollaboratorOption;
}
/**
 * Add a collaborator to a repository
 */
export default function repoAddCollaborator({
  owner,
  repo,
  collaborator,
  body,
  auth,
  options,
}: repoAddCollaboratorParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}`,
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

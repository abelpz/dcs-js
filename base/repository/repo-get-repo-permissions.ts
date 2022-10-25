import { baseParams, request } from "../utils";
import { RepoCollaboratorPermission } from "../models/repo-collaborator-permission";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface repoGetRepoPermissionsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** username of the collaborator */
  collaborator: string;
}
/**
 * Get repository permissions for a user
 */
export default function repoGetRepoPermissions({
  owner,
  repo,
  collaborator,
  auth,
  options,
}: repoGetRepoPermissionsParams): Promise<RepoCollaboratorPermission> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/collaborators/${collaborator}/permission`,
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

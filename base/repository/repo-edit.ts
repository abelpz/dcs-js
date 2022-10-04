import { baseParams, request } from "../utils";
import { EditRepoOption } from "../models/edit-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface repoEditParams extends baseParams {
  /** owner of the repo to edit */
  owner: string;
  /** name of the repo to edit */
  repo: string;
  /** Properties of a repo that you can edit */
  body: EditRepoOption;
}
/**
 * Edit a repository&#39;s properties. Only fields that are set will be changed.
 */
export default function repoEdit({
  owner,
  repo,
  body,
  auth,
  options,
}: repoEditParams): Promise<Repository> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}`,
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

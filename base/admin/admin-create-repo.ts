import { baseParams, request } from "../utils";
import { CreateRepoOption } from "../models/create-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";
import { ValidationError } from "../models/validation-error";

export interface adminCreateRepoParams extends baseParams {
  /** username of the user. This user will own the created repository */
  username: string;
  body: CreateRepoOption;
}
/**
 * Create a repository on behalf of a user
 */
export default function adminCreateRepo({
  username,
  body,
  auth,
  options,
}: adminCreateRepoParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/repos`,
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

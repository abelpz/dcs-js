import { baseParams, request } from "../utils";
import { CreateRepoOption } from "../models/create-repo-option";
import { Repository } from "../models/repository";
import { ValidationError } from "../models/validation-error";

export interface createCurrentUserRepoParams extends baseParams {
  body: CreateRepoOption;
}
/**
 * Create a repository
 */
export default function createCurrentUserRepo({
  body,
  auth,
  options,
}: createCurrentUserRepoParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/repos`,
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

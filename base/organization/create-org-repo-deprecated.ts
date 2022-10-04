import { baseParams, request } from "../utils";
import { CreateRepoOption } from "../models/create-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface createOrgRepoDeprecatedParams extends baseParams {
  /** name of organization */
  org: string;
  body: CreateRepoOption;
}
/**
 * Create a repository in an organization
 */
export default function createOrgRepoDeprecated({
  org,
  body,
  auth,
  options,
}: createOrgRepoDeprecatedParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/org/${org}/repos`,
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

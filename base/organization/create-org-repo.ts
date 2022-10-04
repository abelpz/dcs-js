import { baseParams, request } from "../utils";
import { CreateRepoOption } from "../models/create-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface createOrgRepoParams extends baseParams {
  /** name of organization */
  org: string;
  body: CreateRepoOption;
}
/**
 * Create a repository in an organization
 */
export default function createOrgRepo({
  org,
  body,
  auth,
  options,
}: createOrgRepoParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/repos`,
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

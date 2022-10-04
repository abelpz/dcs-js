import { baseParams, request } from "../utils";
import { CreateForkOption } from "../models/create-fork-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface createForkParams extends baseParams {
  /** owner of the repo to fork */
  owner: string;
  /** name of the repo to fork */
  repo: string;
  body: CreateForkOption;
}
/**
 * Fork a repository
 */
export default function createFork({
  owner,
  repo,
  body,
  auth,
  options,
}: createForkParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/forks`,
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

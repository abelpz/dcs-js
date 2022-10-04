import { baseParams, request } from "../utils";
import { CreateKeyOption } from "../models/create-key-option";
import { DeployKey } from "../models/deploy-key";
import { ValidationError } from "../models/validation-error";

export interface repoCreateKeyParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateKeyOption;
}
/**
 * Add a key to a repository
 */
export default function repoCreateKey({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateKeyParams): Promise<DeployKey> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/keys`,
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

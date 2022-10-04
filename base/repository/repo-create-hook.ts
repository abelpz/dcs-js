import { baseParams, request } from "../utils";
import { CreateHookOption } from "../models/create-hook-option";
import { Hook } from "../models/hook";

export interface repoCreateHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateHookOption;
}
/**
 * Create a hook
 */
export default function repoCreateHook({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateHookParams): Promise<Hook> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks`,
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

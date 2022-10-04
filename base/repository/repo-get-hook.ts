import { baseParams, request } from "../utils";
import { Hook } from "../models/hook";
import { NotFound } from "../models/not-found";

export interface repoGetHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the hook to get */
  id: number;
}
/**
 * Get a hook
 */
export default function repoGetHook({
  owner,
  repo,
  id,
  auth,
  options,
}: repoGetHookParams): Promise<Hook> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}`,
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

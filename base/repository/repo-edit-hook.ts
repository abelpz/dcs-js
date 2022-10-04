import { baseParams, request } from "../utils";
import { EditHookOption } from "../models/edit-hook-option";
import { Hook } from "../models/hook";

export interface repoEditHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the hook */
  id: number;
  body: EditHookOption;
}
/**
 * Edit a hook in a repository
 */
export default function repoEditHook({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: repoEditHookParams): Promise<Hook> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}`,
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

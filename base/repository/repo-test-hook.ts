import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface repoTestHookParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the hook to test */
  id: number;
  /** The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload. */
  ref?: string;
}
/**
 * Test a push webhook
 */
export default function repoTestHook({
  owner,
  repo,
  id,
  ref,
  auth,
  options,
}: repoTestHookParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/hooks/${id}/tests`,
    query: {
      ref: ref,
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

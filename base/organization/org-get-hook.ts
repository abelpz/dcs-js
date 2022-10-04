import { baseParams, request } from "../utils";
import { Hook } from "../models/hook";

export interface orgGetHookParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the hook to get */
  id: number;
}
/**
 * Get a hook
 */
export default function orgGetHook({
  org,
  id,
  auth,
  options,
}: orgGetHookParams): Promise<Hook> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/${id}`,
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

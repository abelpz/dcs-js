import { baseParams, request } from "../utils";
import { HookList } from "../models/hook-list";

export interface orgListHooksParams extends baseParams {
  /** name of the organization */
  org: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List an organization&#39;s webhooks
 */
export default function orgListHooks({
  org,
  page,
  limit,
  auth,
  options,
}: orgListHooksParams): Promise<HookList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks`,
    query: {
      page: page,
      limit: limit,
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

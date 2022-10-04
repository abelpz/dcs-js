import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface orgDeleteHookParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the hook to delete */
  id: number;
}
/**
 * Delete a hook
 */
export default function orgDeleteHook({
  org,
  id,
  auth,
  options,
}: orgDeleteHookParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

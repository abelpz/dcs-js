import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface orgDeleteParams extends baseParams {
  /** organization that is to be deleted */
  org: string;
}
/**
 * Delete an organization
 */
export default function orgDelete({
  org,
  auth,
  options,
}: orgDeleteParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/orgs/${org}`,
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

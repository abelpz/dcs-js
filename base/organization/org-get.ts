import { baseParams, request } from "../utils";
import { Organization } from "../models/organization";

export interface orgGetParams extends baseParams {
  /** name of the organization to get */
  org: string;
}
/**
 * Get an organization
 */
export default function orgGet({
  org,
  auth,
  options,
}: orgGetParams): Promise<Organization> {
  const requestParams = {
    method: "GET",
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

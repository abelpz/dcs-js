import { baseParams, request } from "../utils";

export interface orgIsMemberParams extends baseParams {
  /** name of the organization */
  org: string;
  /** username of the user */
  username: string;
}
/**
 * Check if a user is a member of an organization
 */
export default function orgIsMember({
  org,
  username,
  auth,
  options,
}: orgIsMemberParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/members/${username}`,
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

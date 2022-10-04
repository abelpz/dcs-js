import { baseParams, request } from "../utils";

export interface orgDeleteMemberParams extends baseParams {
  /** name of the organization */
  org: string;
  /** username of the user */
  username: string;
}
/**
 * Remove a member from an organization
 */
export default function orgDeleteMember({
  org,
  username,
  auth,
  options,
}: orgDeleteMemberParams) {
  const requestParams = {
    method: "DELETE",
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

import { baseParams, request } from "../utils";

export interface orgIsPublicMemberParams extends baseParams {
  /** name of the organization */
  org: string;
  /** username of the user */
  username: string;
}
/**
 * Check if a user is a public member of an organization
 */
export default function orgIsPublicMember({
  org,
  username,
  auth,
  options,
}: orgIsPublicMemberParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/public_members/${username}`,
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

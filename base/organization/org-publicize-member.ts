import { baseParams, request } from "../utils";
import { Forbidden } from "../models/forbidden";

export interface orgPublicizeMemberParams extends baseParams {
  /** name of the organization */
  org: string;
  /** username of the user */
  username: string;
}
/**
 * Publicize a user&#39;s membership
 */
export default function orgPublicizeMember({
  org,
  username,
  auth,
  options,
}: orgPublicizeMemberParams) {
  const requestParams = {
    method: "PUT",
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

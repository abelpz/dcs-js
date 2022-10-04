import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface orgConcealMemberParams extends baseParams {
  /** name of the organization */
  org: string;
  /** username of the user */
  username: string;
}
/**
 * Conceal a user&#39;s membership
 */
export default function orgConcealMember({
  org,
  username,
  auth,
  options,
}: orgConcealMemberParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

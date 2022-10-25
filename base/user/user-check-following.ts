import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userCheckFollowingParams extends baseParams {
  /** username of following user */
  username: string;
  /** username of followed user */
  target: string;
}
/**
 * Check if one user is following another user
 */
export default function userCheckFollowing({
  username,
  target,
  auth,
  options,
}: userCheckFollowingParams): Promise<Empty> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/following/${target}`,
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

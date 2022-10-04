import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userCheckFollowingParams extends baseParams {
  /** username of following user */
  follower: string;
  /** username of followed user */
  followee: string;
}
/**
 * Check if one user is following another user
 */
export default function userCheckFollowing({
  follower,
  followee,
  auth,
  options,
}: userCheckFollowingParams): Promise<Empty> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${follower}/following/${followee}`,
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

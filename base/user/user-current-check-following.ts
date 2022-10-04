import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userCurrentCheckFollowingParams extends baseParams {
  /** username of followed user */
  username: string;
}
/**
 * Check whether a user is followed by the authenticated user
 */
export default function userCurrentCheckFollowing({
  username,
  auth,
  options,
}: userCurrentCheckFollowingParams): Promise<Empty> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/following/${username}`,
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

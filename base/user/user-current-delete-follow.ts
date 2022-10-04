import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface userCurrentDeleteFollowParams extends baseParams {
  /** username of user to unfollow */
  username: string;
}
/**
 * Unfollow a user
 */
export default function userCurrentDeleteFollow({
  username,
  auth,
  options,
}: userCurrentDeleteFollowParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

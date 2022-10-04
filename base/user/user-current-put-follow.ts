import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface userCurrentPutFollowParams extends baseParams {
  /** username of user to follow */
  username: string;
}
/**
 * Follow a user
 */
export default function userCurrentPutFollow({
  username,
  auth,
  options,
}: userCurrentPutFollowParams): Promise<Empty> {
  const requestParams = {
    method: "PUT",
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

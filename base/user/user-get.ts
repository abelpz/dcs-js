import { baseParams, request } from "../utils";
import { User } from "../models/user";
import { NotFound } from "../models/not-found";

export interface userGetParams extends baseParams {
  /** username of user to get */
  username: string;
}
/**
 * Get a user
 */
export default function userGet({
  username,
  auth,
  options,
}: userGetParams): Promise<User> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}`,
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

import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";

export interface userDeleteAccessTokenParams extends baseParams {
  /** username of user */
  username: string;
  /** token to be deleted, identified by ID and if not available by name */
  token: string;
}
/**
 * delete an access token
 */
export default function userDeleteAccessToken({
  username,
  token,
  auth,
  options,
}: userDeleteAccessTokenParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/users/${username}/tokens/${token}`,
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

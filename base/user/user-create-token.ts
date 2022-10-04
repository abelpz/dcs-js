import { baseParams, request } from "../utils";
import { CreateAccessTokenOption } from "../models/create-access-token-option";
import { AccessToken } from "../models/access-token";
import { Error } from "../models/error";

export interface userCreateTokenParams extends baseParams {
  /** username of user */
  username: string;
  body: CreateAccessTokenOption;
}
/**
 * Create an access token
 */
export default function userCreateToken({
  username,
  body,
  auth,
  options,
}: userCreateTokenParams): Promise<AccessToken> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/users/${username}/tokens`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

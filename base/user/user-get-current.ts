import { baseParams, request } from "../utils";
import { User } from "../models/user";

export interface userGetCurrentParams extends baseParams {}
/**
 * Get the authenticated user
 */
export default function userGetCurrent({
  auth,
  options,
}: userGetCurrentParams): Promise<User> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user`,
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

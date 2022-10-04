import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface adminDeleteUserParams extends baseParams {
  /** username of user to delete */
  username: string;
}
/**
 * Delete a user
 */
export default function adminDeleteUser({
  username,
  auth,
  options,
}: adminDeleteUserParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/admin/users/${username}`,
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

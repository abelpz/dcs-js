import { baseParams, request } from "../utils";
import { EditUserOption } from "../models/edit-user-option";
import { User } from "../models/user";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface adminEditUserParams extends baseParams {
  /** username of user to edit */
  username: string;
  body: EditUserOption;
}
/**
 * Edit an existing user
 */
export default function adminEditUser({
  username,
  body,
  auth,
  options,
}: adminEditUserParams): Promise<User> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/admin/users/${username}`,
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

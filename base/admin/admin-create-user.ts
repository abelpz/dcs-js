import { baseParams, request } from "../utils";
import { CreateUserOption } from "../models/create-user-option";
import { User } from "../models/user";
import { Error } from "../models/error";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface adminCreateUserParams extends baseParams {
  body: CreateUserOption;
}
/**
 * Create a user
 */
export default function adminCreateUser({
  body,
  auth,
  options,
}: adminCreateUserParams): Promise<User> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users`,
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

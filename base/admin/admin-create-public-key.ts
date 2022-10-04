import { baseParams, request } from "../utils";
import { CreateKeyOption } from "../models/create-key-option";
import { PublicKey } from "../models/public-key";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface adminCreatePublicKeyParams extends baseParams {
  /** username of the user */
  username: string;
  body: CreateKeyOption;
}
/**
 * Add a public key on behalf of a user
 */
export default function adminCreatePublicKey({
  username,
  body,
  auth,
  options,
}: adminCreatePublicKeyParams): Promise<PublicKey> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/admin/users/${username}/keys`,
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

import { baseParams, request } from "../utils";
import { CreateKeyOption } from "../models/create-key-option";
import { PublicKey } from "../models/public-key";
import { ValidationError } from "../models/validation-error";

export interface userCurrentPostKeyParams extends baseParams {
  body: CreateKeyOption;
}
/**
 * Create a public key
 */
export default function userCurrentPostKey({
  body,
  auth,
  options,
}: userCurrentPostKeyParams): Promise<PublicKey> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/keys`,
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

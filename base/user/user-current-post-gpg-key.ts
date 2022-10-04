import { baseParams, request } from "../utils";
import { CreateGpgKeyOption } from "../models/create-gpg-key-option";
import { GpgKey } from "../models/gpg-key";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface userCurrentPostGPGKeyParams extends baseParams {
  body: CreateGpgKeyOption;
}
/**
 * Create a GPG key
 */
export default function userCurrentPostGPGKey({
  body,
  auth,
  options,
}: userCurrentPostGPGKeyParams): Promise<GpgKey> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/gpg_keys`,
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

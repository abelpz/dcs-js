import { baseParams, request } from "../utils";
import { GpgKey } from "../models/gpg-key";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface userVerifyGPGKeyParams extends baseParams {}
/**
 * Verify a GPG key
 */
export default function userVerifyGPGKey({
  auth,
  options,
}: userVerifyGPGKeyParams): Promise<GpgKey> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/gpg_key_verify`,
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

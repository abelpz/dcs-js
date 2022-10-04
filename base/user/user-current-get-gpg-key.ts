import { baseParams, request } from "../utils";
import { GpgKey } from "../models/gpg-key";
import { NotFound } from "../models/not-found";

export interface userCurrentGetGPGKeyParams extends baseParams {
  /** id of key to get */
  id: number;
}
/**
 * Get a GPG key
 */
export default function userCurrentGetGPGKey({
  id,
  auth,
  options,
}: userCurrentGetGPGKeyParams): Promise<GpgKey> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_keys/${id}`,
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

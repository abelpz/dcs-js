import { baseParams, request } from "../utils";
import { PublicKey } from "../models/public-key";
import { NotFound } from "../models/not-found";

export interface userCurrentGetKeyParams extends baseParams {
  /** id of key to get */
  id: number;
}
/**
 * Get a public key
 */
export default function userCurrentGetKey({
  id,
  auth,
  options,
}: userCurrentGetKeyParams): Promise<PublicKey> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/keys/${id}`,
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

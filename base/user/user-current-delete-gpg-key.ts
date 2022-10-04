import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface userCurrentDeleteGPGKeyParams extends baseParams {
  /** id of key to delete */
  id: number;
}
/**
 * Remove a GPG key
 */
export default function userCurrentDeleteGPGKey({
  id,
  auth,
  options,
}: userCurrentDeleteGPGKeyParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface adminDeleteUserPublicKeyParams extends baseParams {
  /** username of user */
  username: string;
  /** id of the key to delete */
  id: number;
}
/**
 * Delete a user&#39;s public key
 */
export default function adminDeleteUserPublicKey({
  username,
  id,
  auth,
  options,
}: adminDeleteUserPublicKeyParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/admin/users/${username}/keys/${id}`,
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

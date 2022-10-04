import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface userCurrentDeleteKeyParams extends baseParams {
  /** id of key to delete */
  id: number;
}
/**
 * Delete a public key
 */
export default function userCurrentDeleteKey({
  id,
  auth,
  options,
}: userCurrentDeleteKeyParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface deletePackageParams extends baseParams {
  /** owner of the package */
  owner: string;
  /** type of the package */
  type: string;
  /** name of the package */
  name: string;
  /** version of the package */
  version: string;
}
/**
 * Delete a package
 */
export default function deletePackage({
  owner,
  type,
  name,
  version,
  auth,
  options,
}: deletePackageParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/packages/${owner}/${type}/${name}/${version}`,
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

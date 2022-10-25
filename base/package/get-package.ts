import { baseParams, request } from "../utils";
import { Package } from "../models/package";
import { NotFound } from "../models/not-found";

export interface getPackageParams extends baseParams {
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
 * Gets a package
 */
export default function getPackage({
  owner,
  type,
  name,
  version,
  auth,
  options,
}: getPackageParams): Promise<Package> {
  const requestParams = {
    method: "GET",
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

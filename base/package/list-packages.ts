import { baseParams, request } from "../utils";
import { PackageList } from "../models/package-list";

export interface listPackagesParams extends baseParams {
  /** owner of the packages */
  owner: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
  /** package type filter */
  type?: string;
  /** name filter */
  q?: string;
}
/**
 * Gets all packages of an owner
 */
export default function listPackages({
  owner,
  page,
  limit,
  type,
  q,
  auth,
  options,
}: listPackagesParams): Promise<PackageList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/packages/${owner}`,
    query: {
      page: page,
      limit: limit,
      type: type,
      q: q,
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

import { baseParams, request } from "../utils";
import { PackageFileList } from "../models/package-file-list";
import { NotFound } from "../models/not-found";

export interface listPackageFilesParams extends baseParams {
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
 * Gets all files of a package
 */
export default function listPackageFiles({
  owner,
  type,
  name,
  version,
  auth,
  options,
}: listPackageFilesParams): Promise<PackageFileList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/packages/${owner}/${type}/${name}/${version}/files`,
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

import { baseParams, request } from "../utils";
import { NotFound } from "../models/not-found";

export interface repoGetArchiveParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** the git reference for download with attached archive format (e.g. master.zip) */
  archive: string;
}
/**
 * Get an archive of a repository
 */
export default function repoGetArchive({
  owner,
  repo,
  archive,
  auth,
  options,
}: repoGetArchiveParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/archive/${archive}`,
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

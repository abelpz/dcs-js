import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";
import { Error } from "../models/error";
import { Conflict } from "../models/conflict";

export interface repoDeleteGitRefParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** name of the ref to be deleted */
  ref: string;
}
/**
 * Delete a reference
 */
export default function repoDeleteGitRef({
  owner,
  repo,
  ref,
  auth,
  options,
}: repoDeleteGitRefParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/refs/${ref}`,
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

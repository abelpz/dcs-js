import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";

export interface repoMirrorSyncParams extends baseParams {
  /** owner of the repo to sync */
  owner: string;
  /** name of the repo to sync */
  repo: string;
}
/**
 * Sync a mirrored repository
 */
export default function repoMirrorSync({
  owner,
  repo,
  auth,
  options,
}: repoMirrorSyncParams): Promise<Empty> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/mirror-sync`,
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

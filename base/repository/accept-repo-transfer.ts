import { baseParams, request } from "../utils";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface acceptRepoTransferParams extends baseParams {
  /** owner of the repo to transfer */
  owner: string;
  /** name of the repo to transfer */
  repo: string;
}
/**
 * Accept a repo transfer
 */
export default function acceptRepoTransfer({
  owner,
  repo,
  auth,
  options,
}: acceptRepoTransferParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/transfer/accept`,
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

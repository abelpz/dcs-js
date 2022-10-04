import { baseParams, request } from "../utils";
import { TransferRepoOption } from "../models/transfer-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoTransferParams extends baseParams {
  /** owner of the repo to transfer */
  owner: string;
  /** name of the repo to transfer */
  repo: string;
  /** Transfer Options */
  body: TransferRepoOption;
}
/**
 * Transfer a repo ownership
 */
export default function repoTransfer({
  owner,
  repo,
  body,
  auth,
  options,
}: repoTransferParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/transfer`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

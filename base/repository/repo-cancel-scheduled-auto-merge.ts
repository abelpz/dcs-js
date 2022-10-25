import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";

export interface repoCancelScheduledAutoMergeParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** index of the pull request to merge */
  index: number;
}
/**
 * Cancel the scheduled auto merge for the given pull request
 */
export default function repoCancelScheduledAutoMerge({
  owner,
  repo,
  index,
  auth,
  options,
}: repoCancelScheduledAutoMergeParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/pulls/${index}/merge`,
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

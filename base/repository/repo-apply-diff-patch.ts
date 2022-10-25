import { baseParams, request } from "../utils";
import { UpdateFileOptions } from "../models/update-file-options";
import { FileResponse } from "../models/file-response";

export interface repoApplyDiffPatchParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: UpdateFileOptions;
}
/**
 * Apply diff patch to repository
 */
export default function repoApplyDiffPatch({
  owner,
  repo,
  body,
  auth,
  options,
}: repoApplyDiffPatchParams): Promise<FileResponse> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/diffpatch`,
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

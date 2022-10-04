import { baseParams, request } from "../utils";
import { UpdateFileOptions } from "../models/update-file-options";
import { FileResponse } from "../models/file-response";
import { Error } from "../models/error";
import { NotFound } from "../models/not-found";

export interface repoUpdateFileParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** path of the file to update */
  filepath: string;
  body: UpdateFileOptions;
}
/**
 * Update a file in a repository
 */
export default function repoUpdateFile({
  owner,
  repo,
  filepath,
  body,
  auth,
  options,
}: repoUpdateFileParams): Promise<FileResponse> {
  const requestParams = {
    method: "PUT",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/contents/${filepath}`,
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

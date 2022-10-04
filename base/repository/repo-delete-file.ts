import { baseParams, request } from "../utils";
import { DeleteFileOptions } from "../models/delete-file-options";
import { FileDeleteResponse } from "../models/file-delete-response";
import { Error } from "../models/error";

export interface repoDeleteFileParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** path of the file to delete */
  filepath: string;
  body: DeleteFileOptions;
}
/**
 * Delete a file in a repository
 */
export default function repoDeleteFile({
  owner,
  repo,
  filepath,
  body,
  auth,
  options,
}: repoDeleteFileParams): Promise<FileDeleteResponse> {
  const requestParams = {
    method: "DELETE",
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

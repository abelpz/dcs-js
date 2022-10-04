import { baseParams, request } from "../utils";
import { CreateFileOptions } from "../models/create-file-options";
import { FileResponse } from "../models/file-response";
import { Error } from "../models/error";
import { NotFound } from "../models/not-found";

export interface repoCreateFileParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** path of the file to create */
  filepath: string;
  body: CreateFileOptions;
}
/**
 * Create a file in a repository
 */
export default function repoCreateFile({
  owner,
  repo,
  filepath,
  body,
  auth,
  options,
}: repoCreateFileParams): Promise<FileResponse> {
  const requestParams = {
    method: "POST",
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

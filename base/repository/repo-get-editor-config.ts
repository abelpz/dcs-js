import { baseParams, request } from "../utils";
import { NotFound } from "../models/not-found";

export interface repoGetEditorConfigParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** filepath of file to get */
  filepath: string;
}
/**
 * Get the EditorConfig definitions of a file in a repository
 */
export default function repoGetEditorConfig({
  owner,
  repo,
  filepath,
  auth,
  options,
}: repoGetEditorConfigParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/editorconfig/${filepath}`,
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

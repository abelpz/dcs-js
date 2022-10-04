import { baseParams, request } from "../utils";
import { Note } from "../models/note";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface repoGetNoteParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** a git ref or commit sha */
  sha: string;
}
/**
 * Get a note corresponding to a single commit from a repository
 */
export default function repoGetNote({
  owner,
  repo,
  sha,
  auth,
  options,
}: repoGetNoteParams): Promise<Note> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/git/notes/${sha}`,
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

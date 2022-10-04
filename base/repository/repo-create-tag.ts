import { baseParams, request } from "../utils";
import { CreateTagOption } from "../models/create-tag-option";
import { Tag } from "../models/tag";
import { NotFound } from "../models/not-found";
import { Empty } from "../models/empty";
import { Conflict } from "../models/conflict";

export interface repoCreateTagParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateTagOption;
}
/**
 * Create a new git tag in a repository
 */
export default function repoCreateTag({
  owner,
  repo,
  body,
  auth,
  options,
}: repoCreateTagParams): Promise<Tag> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/tags`,
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

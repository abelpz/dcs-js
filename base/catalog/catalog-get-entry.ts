import { baseParams, request } from "../utils";
import { CatalogEntry } from "../models/catalog-entry";
import { ValidationError } from "../models/validation-error";

export interface catalogGetEntryParams extends baseParams {
  /** name of the owner */
  owner: string;
  /** name of the repo */
  repo: string;
  /** release tag or default branch */
  tag: string;
}
/**
 * Catalog entry
 */
export default function catalogGetEntry({
  owner,
  repo,
  tag,
  auth,
  options,
}: catalogGetEntryParams): Promise<CatalogEntry> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/catalog/entry/${owner}/${repo}/${tag}`,
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

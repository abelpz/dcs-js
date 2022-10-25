import { baseParams, request } from "../utils";
import { CatalogMetadata } from "../models/catalog-metadata";
import { ValidationError } from "../models/validation-error";

export interface catalogGetMetadataParams extends baseParams {
  /** name of the owner */
  owner: string;
  /** name of the repo */
  repo: string;
  /** release tag or default branch */
  tag: string;
}
/**
 * Catalog entry metadata (manifest.yaml in JSON format)
 */
export default function catalogGetMetadata({
  owner,
  repo,
  tag,
  auth,
  options,
}: catalogGetMetadataParams): Promise<CatalogMetadata> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/catalog/entry/${owner}/${repo}/${tag}/metadata`,
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

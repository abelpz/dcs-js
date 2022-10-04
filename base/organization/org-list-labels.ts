import { baseParams, request } from "../utils";
import { LabelList } from "../models/label-list";

export interface orgListLabelsParams extends baseParams {
  /** name of the organization */
  org: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List an organization&#39;s labels
 */
export default function orgListLabels({
  org,
  page,
  limit,
  auth,
  options,
}: orgListLabelsParams): Promise<LabelList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels`,
    query: {
      page: page,
      limit: limit,
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

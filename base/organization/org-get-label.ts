import { baseParams, request } from "../utils";
import { Label } from "../models/label";

export interface orgGetLabelParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the label to get */
  id: number;
}
/**
 * Get a single label
 */
export default function orgGetLabel({
  org,
  id,
  auth,
  options,
}: orgGetLabelParams): Promise<Label> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/orgs/${org}/labels/${id}`,
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

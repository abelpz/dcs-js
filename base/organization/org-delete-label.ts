import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface orgDeleteLabelParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the label to delete */
  id: number;
}
/**
 * Delete a label
 */
export default function orgDeleteLabel({
  org,
  id,
  auth,
  options,
}: orgDeleteLabelParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

import { baseParams, request } from "../utils";
import { StringSlice } from "../models/string-slice";
import { Forbidden } from "../models/forbidden";

export interface adminUnadoptedListParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
  /** pattern of repositories to search for */
  pattern?: string;
}
/**
 * List unadopted repositories
 */
export default function adminUnadoptedList({
  page,
  limit,
  pattern,
  auth,
  options,
}: adminUnadoptedListParams): Promise<StringSlice> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/admin/unadopted`,
    query: {
      page: page,
      limit: limit,
      pattern: pattern,
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

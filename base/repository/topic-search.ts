import { baseParams, request } from "../utils";
import { TopicListResponse } from "../models/topic-list-response";
import { Forbidden } from "../models/forbidden";

export interface topicSearchParams extends baseParams {
  /** keywords to search */
  q: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * search topics via keyword
 */
export default function topicSearch({
  q,
  page,
  limit,
  auth,
  options,
}: topicSearchParams): Promise<TopicListResponse> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/topics/search`,
    query: {
      q: q,
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

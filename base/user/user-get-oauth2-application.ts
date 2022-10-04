import { baseParams, request } from "../utils";
import { OAuth2ApplicationList } from "../models/o-auth2-application-list";

export interface userGetOauth2ApplicationParams extends baseParams {
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * List the authenticated user&#39;s oauth2 applications
 */
export default function userGetOauth2Application({
  page,
  limit,
  auth,
  options,
}: userGetOauth2ApplicationParams): Promise<OAuth2ApplicationList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/applications/oauth2`,
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

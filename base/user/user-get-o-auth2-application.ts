import { baseParams, request } from "../utils";
import { OAuth2Application } from "../models/o-auth2-application";
import { NotFound } from "../models/not-found";

export interface userGetOAuth2ApplicationParams extends baseParams {
  /** Application ID to be found */
  id: number;
}
/**
 * get an OAuth2 Application
 */
export default function userGetOAuth2Application({
  id,
  auth,
  options,
}: userGetOAuth2ApplicationParams): Promise<OAuth2Application> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/applications/oauth2/${id}`,
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

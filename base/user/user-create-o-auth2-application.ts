import { baseParams, request } from "../utils";
import { CreateOAuth2ApplicationOptions } from "../models/create-o-auth2-application-options";
import { OAuth2Application } from "../models/o-auth2-application";
import { Error } from "../models/error";

export interface userCreateOAuth2ApplicationParams extends baseParams {
  body: CreateOAuth2ApplicationOptions;
}
/**
 * creates a new OAuth2 application
 */
export default function userCreateOAuth2Application({
  body,
  auth,
  options,
}: userCreateOAuth2ApplicationParams): Promise<OAuth2Application> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/user/applications/oauth2`,
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

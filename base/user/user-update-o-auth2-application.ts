import { baseParams, request } from "../utils";
import { CreateOAuth2ApplicationOptions } from "../models/create-o-auth2-application-options";
import { OAuth2Application } from "../models/o-auth2-application";
import { NotFound } from "../models/not-found";

export interface userUpdateOAuth2ApplicationParams extends baseParams {
  /** application to be updated */
  id: number;
  body: CreateOAuth2ApplicationOptions;
}
/**
 * update an OAuth2 Application, this includes regenerating the client secret
 */
export default function userUpdateOAuth2Application({
  id,
  body,
  auth,
  options,
}: userUpdateOAuth2ApplicationParams): Promise<OAuth2Application> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/user/applications/oauth2/${id}`,
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

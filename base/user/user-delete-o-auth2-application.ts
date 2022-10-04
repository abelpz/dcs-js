import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userDeleteOAuth2ApplicationParams extends baseParams {
  /** token to be deleted */
  id: number;
}
/**
 * delete an OAuth2 Application
 */
export default function userDeleteOAuth2Application({
  id,
  auth,
  options,
}: userDeleteOAuth2ApplicationParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

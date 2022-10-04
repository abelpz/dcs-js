import { baseParams, request } from "../utils";
import { ServerVersion } from "../models/server-version";

export interface getVersionParams extends baseParams {}
/**
 * Returns the version of the Gitea application
 */
export default function getVersion({
  auth,
  options,
}: getVersionParams): Promise<ServerVersion> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/version`,
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

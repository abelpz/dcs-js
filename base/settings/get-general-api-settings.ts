import { baseParams, request } from "../utils";
import { GeneralApiSettings } from "../models/general-api-settings";

export interface getGeneralAPISettingsParams extends baseParams {}
/**
 * Get instance&#39;s global settings for api
 */
export default function getGeneralAPISettings({
  auth,
  options,
}: getGeneralAPISettingsParams): Promise<GeneralApiSettings> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/api`,
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

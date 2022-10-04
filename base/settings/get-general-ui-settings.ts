import { baseParams, request } from "../utils";
import { GeneralUiSettings } from "../models/general-ui-settings";

export interface getGeneralUISettingsParams extends baseParams {}
/**
 * Get instance&#39;s global settings for ui
 */
export default function getGeneralUISettings({
  auth,
  options,
}: getGeneralUISettingsParams): Promise<GeneralUiSettings> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/ui`,
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

import { baseParams, request } from "../utils";
import { UserSettings } from "../models/user-settings";

export interface getUserSettingsParams extends baseParams {}
/**
 * Get user settings
 */
export default function getUserSettings({
  auth,
  options,
}: getUserSettingsParams): Promise<UserSettings> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/settings`,
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

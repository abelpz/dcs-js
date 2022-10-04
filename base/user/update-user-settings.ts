import { baseParams, request } from "../utils";
import { UserSettingsOptions } from "../models/user-settings-options";
import { UserSettings } from "../models/user-settings";

export interface updateUserSettingsParams extends baseParams {
  body: UserSettingsOptions;
}
/**
 * Update user settings
 */
export default function updateUserSettings({
  body,
  auth,
  options,
}: updateUserSettingsParams): Promise<UserSettings> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/user/settings`,
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

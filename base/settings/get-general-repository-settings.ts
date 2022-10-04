import { baseParams, request } from "../utils";
import { GeneralRepoSettings } from "../models/general-repo-settings";

export interface getGeneralRepositorySettingsParams extends baseParams {}
/**
 * Get instance&#39;s global settings for repositories
 */
export default function getGeneralRepositorySettings({
  auth,
  options,
}: getGeneralRepositorySettingsParams): Promise<GeneralRepoSettings> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/repository`,
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

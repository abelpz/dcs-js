import { baseParams, request } from "../utils";
import { GeneralAttachmentSettings } from "../models/general-attachment-settings";

export interface getGeneralAttachmentSettingsParams extends baseParams {}
/**
 * Get instance&#39;s global settings for Attachment
 */
export default function getGeneralAttachmentSettings({
  auth,
  options,
}: getGeneralAttachmentSettingsParams): Promise<GeneralAttachmentSettings> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/settings/attachment`,
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

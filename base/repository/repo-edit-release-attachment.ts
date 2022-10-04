import { baseParams, request } from "../utils";
import { EditAttachmentOptions } from "../models/edit-attachment-options";
import { Attachment } from "../models/attachment";

export interface repoEditReleaseAttachmentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release */
  id: number;
  /** id of the attachment to edit */
  attachmentId: number;
  body: EditAttachmentOptions;
}
/**
 * Edit a release attachment
 */
export default function repoEditReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  body,
  auth,
  options,
}: repoEditReleaseAttachmentParams): Promise<Attachment> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachmentId}`,
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

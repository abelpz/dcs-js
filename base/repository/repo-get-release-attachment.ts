import { baseParams, request } from "../utils";
import { Attachment } from "../models/attachment";

export interface repoGetReleaseAttachmentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release */
  id: number;
  /** id of the attachment to get */
  attachmentId: number;
}
/**
 * Get a release attachment
 */
export default function repoGetReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  auth,
  options,
}: repoGetReleaseAttachmentParams): Promise<Attachment> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets/${attachmentId}`,
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

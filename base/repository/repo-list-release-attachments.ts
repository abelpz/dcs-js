import { baseParams, request } from "../utils";
import { AttachmentList } from "../models/attachment-list";

export interface repoListReleaseAttachmentsParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release */
  id: number;
}
/**
 * List release&#39;s attachments
 */
export default function repoListReleaseAttachments({
  owner,
  repo,
  id,
  auth,
  options,
}: repoListReleaseAttachmentsParams): Promise<AttachmentList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets`,
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

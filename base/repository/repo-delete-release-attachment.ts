import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface repoDeleteReleaseAttachmentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release */
  id: number;
  /** id of the attachment to delete */
  attachmentId: number;
}
/**
 * Delete a release attachment
 */
export default function repoDeleteReleaseAttachment({
  owner,
  repo,
  id,
  attachmentId,
  auth,
  options,
}: repoDeleteReleaseAttachmentParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
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

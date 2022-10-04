import { baseParams, request } from "../utils";
import { Attachment } from "../models/attachment";
import { Error } from "../models/error";

export interface repoCreateReleaseAttachmentParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** id of the release */
  id: number;
  /** name of the attachment */
  name?: string;
  /** attachment to upload */
  attachment: File;
}
/**
 * Create a release attachment
 */
export default function repoCreateReleaseAttachment({
  owner,
  repo,
  id,
  name,
  attachment,
  auth,
  options,
}: repoCreateReleaseAttachmentParams): Promise<Attachment> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/releases/${id}/assets`,
    query: {
      name: name,
      ...options?.query,
    },
    formData: {
      attachment: attachment,
    },
    auth,
    headers: {
      "content-type": "multipart/form-data",
      accept: "application/json",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

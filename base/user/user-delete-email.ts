import { baseParams, request } from "../utils";
import { DeleteEmailOption } from "../models/delete-email-option";
import { Empty } from "../models/empty";
import { NotFound } from "../models/not-found";

export interface userDeleteEmailParams extends baseParams {
  body: DeleteEmailOption;
}
/**
 * Delete email addresses
 */
export default function userDeleteEmail({
  body,
  auth,
  options,
}: userDeleteEmailParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/user/emails`,
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

import { baseParams, request } from "../utils";
import { EmailList } from "../models/email-list";

export interface userListEmailsParams extends baseParams {}
/**
 * List the authenticated user&#39;s email addresses
 */
export default function userListEmails({
  auth,
  options,
}: userListEmailsParams): Promise<EmailList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/emails`,
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

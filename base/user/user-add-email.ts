import { baseParams, request } from "../utils";
import { CreateEmailOption } from "../models/create-email-option";
import { EmailList } from "../models/email-list";
import { ValidationError } from "../models/validation-error";

export interface userAddEmailParams extends baseParams {
  body: CreateEmailOption;
}
/**
 * Add email addresses
 */
export default function userAddEmail({
  body,
  auth,
  options,
}: userAddEmailParams): Promise<EmailList> {
  const requestParams = {
    method: "POST",
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

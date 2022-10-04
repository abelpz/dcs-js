import { baseParams, request } from "../utils";
import { String } from "../models/string";
import { NotFound } from "../models/not-found";

export interface getVerificationTokenParams extends baseParams {}
/**
 * Get a Token to verify
 */
export default function getVerificationToken({
  auth,
  options,
}: getVerificationTokenParams): Promise<String> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/user/gpg_key_token`,
    query: {
      ...options?.query,
    },
    auth,
    headers: {
      "content-type": "application/json",
      accept: "text/plain",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

import { baseParams, request } from "../utils";

export interface getSigningKeyParams extends baseParams {}
/**
 * Get default signing-key.gpg
 */
export default function getSigningKey({ auth, options }: getSigningKeyParams) {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/signing-key.gpg`,
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

import { baseParams, request } from "../utils";
import { LanguageStatistics } from "../models/language-statistics";
import { NotFound } from "../models/not-found";

export interface repoGetLanguagesParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
}
/**
 * Get languages and number of bytes of code written
 */
export default function repoGetLanguages({
  owner,
  repo,
  auth,
  options,
}: repoGetLanguagesParams): Promise<LanguageStatistics> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/languages`,
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

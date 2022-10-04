import { baseParams, request } from "../utils";
import { MigrateRepoOptions } from "../models/migrate-repo-options";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { ValidationError } from "../models/validation-error";

export interface repoMigrateParams extends baseParams {
  body: MigrateRepoOptions;
}
/**
 * Migrate a remote git repository
 */
export default function repoMigrate({
  body,
  auth,
  options,
}: repoMigrateParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/migrate`,
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

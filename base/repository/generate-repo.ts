import { baseParams, request } from "../utils";
import { GenerateRepoOption } from "../models/generate-repo-option";
import { Repository } from "../models/repository";
import { Forbidden } from "../models/forbidden";
import { NotFound } from "../models/not-found";
import { ValidationError } from "../models/validation-error";

export interface generateRepoParams extends baseParams {
  /** name of the template repository owner */
  templateOwner: string;
  /** name of the template repository */
  templateRepo: string;
  body: GenerateRepoOption;
}
/**
 * Create a repository using a template
 */
export default function generateRepo({
  templateOwner,
  templateRepo,
  body,
  auth,
  options,
}: generateRepoParams): Promise<Repository> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${templateOwner}/${templateRepo}/generate`,
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

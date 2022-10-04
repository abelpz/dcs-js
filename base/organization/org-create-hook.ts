import { baseParams, request } from "../utils";
import { CreateHookOption } from "../models/create-hook-option";
import { Hook } from "../models/hook";

export interface orgCreateHookParams extends baseParams {
  /** name of the organization */
  org: string;
  body: CreateHookOption;
}
/**
 * Create a hook
 */
export default function orgCreateHook({
  org,
  body,
  auth,
  options,
}: orgCreateHookParams): Promise<Hook> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/`,
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

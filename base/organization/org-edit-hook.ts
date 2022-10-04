import { baseParams, request } from "../utils";
import { EditHookOption } from "../models/edit-hook-option";
import { Hook } from "../models/hook";

export interface orgEditHookParams extends baseParams {
  /** name of the organization */
  org: string;
  /** id of the hook to update */
  id: number;
  body: EditHookOption;
}
/**
 * Update a hook
 */
export default function orgEditHook({
  org,
  id,
  body,
  auth,
  options,
}: orgEditHookParams): Promise<Hook> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/orgs/${org}/hooks/${id}`,
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

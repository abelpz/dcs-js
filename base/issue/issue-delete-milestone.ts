import { baseParams, request } from "../utils";
import { Empty } from "../models/empty";

export interface issueDeleteMilestoneParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** the milestone to delete, identified by ID and if not available by name */
  id: string;
}
/**
 * Delete a milestone
 */
export default function issueDeleteMilestone({
  owner,
  repo,
  id,
  auth,
  options,
}: issueDeleteMilestoneParams): Promise<Empty> {
  const requestParams = {
    method: "DELETE",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones/${id}`,
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

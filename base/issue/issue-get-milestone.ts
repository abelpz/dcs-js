import { baseParams, request } from "../utils";
import { Milestone } from "../models/milestone";

export interface issueGetMilestoneParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** the milestone to get, identified by ID and if not available by name */
  id: string;
}
/**
 * Get a milestone
 */
export default function issueGetMilestone({
  owner,
  repo,
  id,
  auth,
  options,
}: issueGetMilestoneParams): Promise<Milestone> {
  const requestParams = {
    method: "GET",
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

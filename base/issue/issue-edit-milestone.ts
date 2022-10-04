import { baseParams, request } from "../utils";
import { EditMilestoneOption } from "../models/edit-milestone-option";
import { Milestone } from "../models/milestone";

export interface issueEditMilestoneParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** the milestone to edit, identified by ID and if not available by name */
  id: string;
  body: EditMilestoneOption;
}
/**
 * Update a milestone
 */
export default function issueEditMilestone({
  owner,
  repo,
  id,
  body,
  auth,
  options,
}: issueEditMilestoneParams): Promise<Milestone> {
  const requestParams = {
    method: "PATCH",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones/${id}`,
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

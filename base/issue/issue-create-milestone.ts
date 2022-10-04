import { baseParams, request } from "../utils";
import { CreateMilestoneOption } from "../models/create-milestone-option";
import { Milestone } from "../models/milestone";

export interface issueCreateMilestoneParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  body: CreateMilestoneOption;
}
/**
 * Create a milestone
 */
export default function issueCreateMilestone({
  owner,
  repo,
  body,
  auth,
  options,
}: issueCreateMilestoneParams): Promise<Milestone> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones`,
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

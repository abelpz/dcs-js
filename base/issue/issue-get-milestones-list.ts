import { baseParams, request } from "../utils";
import { MilestoneList } from "../models/milestone-list";

export interface issueGetMilestonesListParams extends baseParams {
  /** owner of the repo */
  owner: string;
  /** name of the repo */
  repo: string;
  /** Milestone state, Recognised values are open, closed and all. Defaults to &quot;open&quot; */
  state?: string;
  /** filter by milestone name */
  name?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Get all of a repository&#39;s opened milestones
 */
export default function issueGetMilestonesList({
  owner,
  repo,
  state,
  name,
  page,
  limit,
  auth,
  options,
}: issueGetMilestonesListParams): Promise<MilestoneList> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/${owner}/${repo}/milestones`,
    query: {
      state: state,
      name: name,
      page: page,
      limit: limit,
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

import { baseParams, request } from "../utils";
import { UserHeatmapData } from "../models/user-heatmap-data";
import { NotFound } from "../models/not-found";

export interface userGetHeatmapDataParams extends baseParams {
  /** username of user to get */
  username: string;
}
/**
 * Get a user&#39;s heatmap
 */
export default function userGetHeatmapData({
  username,
  auth,
  options,
}: userGetHeatmapDataParams): Promise<UserHeatmapData> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/users/${username}/heatmap`,
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

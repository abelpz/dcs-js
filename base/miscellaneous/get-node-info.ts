import { baseParams, request } from "../utils";
import { NodeInfo } from "../models/node-info";

export interface getNodeInfoParams extends baseParams {}
/**
 * Returns the nodeinfo of the Gitea application
 */
export default function getNodeInfo({
  auth,
  options,
}: getNodeInfoParams): Promise<NodeInfo> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/nodeinfo`,
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

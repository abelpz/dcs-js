import { baseParams, request } from "../utils";
import { MarkdownRender } from "../models/markdown-render";
import { ValidationError } from "../models/validation-error";

export interface renderMarkdownRawParams extends baseParams {
  /** Request body to render */
  body: string;
}
/**
 * Render raw markdown as HTML
 */
export default function renderMarkdownRaw({
  body,
  auth,
  options,
}: renderMarkdownRawParams): Promise<MarkdownRender> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/markdown/raw`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "text/plain",
      accept: "text/html",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

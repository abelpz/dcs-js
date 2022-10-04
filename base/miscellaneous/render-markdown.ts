import { baseParams, request } from "../utils";
import { MarkdownOption } from "../models/markdown-option";
import { MarkdownRender } from "../models/markdown-render";
import { ValidationError } from "../models/validation-error";

export interface renderMarkdownParams extends baseParams {
  body: MarkdownOption;
}
/**
 * Render a markdown document as HTML
 */
export default function renderMarkdown({
  body,
  auth,
  options,
}: renderMarkdownParams): Promise<MarkdownRender> {
  const requestParams = {
    method: "POST",
    basePath: options?.basePath,
    path: `/markdown`,
    query: {
      ...options?.query,
    },
    body,
    auth,
    headers: {
      "content-type": "application/json",
      accept: "text/html",
      ...options?.headers,
    },
  };
  return request(requestParams);
}

import { baseParams, request } from "../utils";
import { SearchResults } from "../models/search-results";
import { ValidationError } from "../models/validation-error";

export interface repoSearchParams extends baseParams {
  /** keyword */
  q?: string;
  /** Limit search to repositories with keyword as topic */
  topic?: boolean;
  /** include search of keyword within repository description (defaults to false) */
  includeDesc?: boolean;
  /** search only for repos that the user with the given id owns or contributes to */
  uid?: number;
  /** repo owner to prioritize in the results */
  priorityOwnerId?: number;
  /** search only for repos that belong to the given team id */
  teamId?: number;
  /** search only for repos that the user with the given id has starred */
  starredBy?: number;
  /** include private repositories this user has access to (defaults to true) */
  _private?: boolean;
  /** show only pubic, private or all repositories (defaults to all) */
  isPrivate?: boolean;
  /** include template repositories this user has access to (defaults to true) */
  template?: boolean;
  /** show only archived, non-archived or all repositories (defaults to all) */
  archived?: boolean;
  /** type of repository to search for. Supported values are &quot;fork&quot;, &quot;source&quot;, &quot;mirror&quot; and &quot;collaborative&quot; */
  mode?: string;
  /** if `uid` is given, search only for repos that the user owns */
  exclusive?: boolean;
  /** name of the repo. Multiple repo&#39;s are ORed. */
  repo?: string;
  /** owner of the repo. Multiple owner&#39;s are ORed. */
  owner?: string;
  /** If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang&#39;s are ORed. */
  lang?: string;
  /** resource subject. Multiple subject&#39;s are ORed. */
  subject?: string;
  /** book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book&#39;s are ORed. */
  book?: string;
  /** if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false) */
  includeMetadata?: boolean;
  /** sort repos by attribute. Supported values are &quot;alpha&quot;, &quot;created&quot;, &quot;updated&quot;, &quot;size&quot;, and &quot;id&quot;. Default is &quot;alpha&quot; */
  sort?: string;
  /** sort order, either &quot;asc&quot; (ascending) or &quot;desc&quot; (descending). Default is &quot;asc&quot;, ignored if &quot;sort&quot; is not specified. */
  order?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results */
  limit?: number;
}
/**
 * Search for repositories
 */
export default function repoSearch({
  q,
  topic,
  includeDesc,
  uid,
  priorityOwnerId,
  teamId,
  starredBy,
  _private,
  isPrivate,
  template,
  archived,
  mode,
  exclusive,
  repo,
  owner,
  lang,
  subject,
  book,
  includeMetadata,
  sort,
  order,
  page,
  limit,
  auth,
  options,
}: repoSearchParams): Promise<SearchResults> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/repos/search`,
    query: {
      q: q,
      topic: topic,
      includeDesc: includeDesc,
      uid: uid,
      priority_owner_id: priorityOwnerId,
      team_id: teamId,
      starredBy: starredBy,
      private: _private,
      is_private: isPrivate,
      template: template,
      archived: archived,
      mode: mode,
      exclusive: exclusive,
      repo: repo,
      owner: owner,
      lang: lang,
      subject: subject,
      book: book,
      includeMetadata: includeMetadata,
      sort: sort,
      order: order,
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

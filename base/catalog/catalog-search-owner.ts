import { baseParams, request } from "../utils";
import { CatalogSearchResults } from "../models/catalog-search-results";
import { ValidationError } from "../models/validation-error";

export interface catalogSearchOwnerParams extends baseParams {
  /** owner of the returned entries */
  owner: string;
  /** keyword(s). Can use multiple `q=&lt;keyword&gt;`s or a comma-delimited string for more than one keyword. Is case insensitive */
  q?: string;
  /** search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
  repo?: string;
  /** search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
  tag?: string;
  /** search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
  lang?: string;
  /** specifies which release stage to be return of these stages: &quot;prod&quot; - return only the production releases (default); &quot;preprod&quot; - return the pre-production release if it exists instead of the production release; &quot;draft&quot; - return the draft release if it exists instead of pre-production or production release; &quot;latest&quot; -return the default branch (e.g. master) if it is a valid RC instead of the above */
  stage?: string;
  /** search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
  subject?: string;
  /** search only for entries with the given checking level(s). Can be 1, 2 or 3 */
  checkingLevel?: string;
  /** search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
  book?: string;
  /** if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
  partialMatch?: boolean;
  /** if true, all releases, not just the latest, are included. Default is false */
  includeHistory?: boolean;
  /** if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true */
  includeMetadata?: boolean;
  /** if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false */
  showIngredients?: boolean;
  /** sort repos alphanumerically by attribute. Supported values are &quot;subject&quot;, &quot;title&quot;, &quot;reponame&quot;, &quot;tag&quot;, &quot;released&quot;, &quot;lang&quot;, &quot;releases&quot;, &quot;stars&quot;, &quot;forks&quot;. Default is by &quot;language&quot;, &quot;subject&quot; and then &quot;tag&quot; */
  sort?: string;
  /** sort order, either &quot;asc&quot; (ascending) or &quot;desc&quot; (descending). Default is &quot;asc&quot;, ignored if &quot;sort&quot; is not specified. */
  order?: string;
  /** page number of results to return (1-based) */
  page?: number;
  /** page size of results, defaults to no limit */
  limit?: number;
}
/**
 * Catalog search by owner
 */
export default function catalogSearchOwner({
  owner,
  q,
  repo,
  tag,
  lang,
  stage,
  subject,
  checkingLevel,
  book,
  partialMatch,
  includeHistory,
  includeMetadata,
  showIngredients,
  sort,
  order,
  page,
  limit,
  auth,
  options,
}: catalogSearchOwnerParams): Promise<CatalogSearchResults> {
  const requestParams = {
    method: "GET",
    basePath: options?.basePath,
    path: `/catalog/search/${owner}`,
    query: {
      q: q,
      repo: repo,
      tag: tag,
      lang: lang,
      stage: stage,
      subject: subject,
      checkingLevel: checkingLevel,
      book: book,
      partialMatch: partialMatch,
      includeHistory: includeHistory,
      includeMetadata: includeMetadata,
      showIngredients: showIngredients,
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

import { CatalogStages } from "./catalog-stages";
import { ExternalTracker } from "./external-tracker";
import { ExternalWiki } from "./external-wiki";
import { InternalTracker } from "./internal-tracker";
import { User } from "./user";
import { Permission } from "./permission";
import { RepoTransfer } from "./repo-transfer";

/**
 * Repository represents a repository
 * @export
 * @interface Repository
 */

export interface Repository {
  /**
   * the count of alignments of each book
   * @type {object}
   * @memberof Repository
   */
  alignment_counts: object;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  allow_merge_commits: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  allow_rebase: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  allow_rebase_explicit: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  allow_squash_merge: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  archived: boolean;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  avatar_url: string;
  /**
   * project IDs from the manifest
   * @type {string[]}
   * @memberof Repository
   */
  books: string[];
  /**
   *
   * @type {CatalogStages}
   * @memberof Repository
   */
  catalog: CatalogStages;
  /**
   * checking level from the manifest
   * @type {string}
   * @memberof Repository
   */
  checking_level: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  clone_url: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  default_branch: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  default_merge_style: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  description: string;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  empty: boolean;
  /**
   *
   * @type {ExternalTracker}
   * @memberof Repository
   */
  external_tracker: ExternalTracker;
  /**
   *
   * @type {ExternalWiki}
   * @memberof Repository
   */
  external_wiki: ExternalWiki;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  fork: boolean;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  forks_count: number;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  full_name: string;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  has_issues: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  has_projects: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  has_pull_requests: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  has_wiki: boolean;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  ignore_whitespace_conflicts: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  internal: boolean;
  /**
   *
   * @type {InternalTracker}
   * @memberof Repository
   */
  internal_tracker: InternalTracker;
  /**
   * language from the manifest
   * @type {string}
   * @memberof Repository
   */
  language: string;
  /**
   * language direction from the manifest
   * @type {string}
   * @memberof Repository
   */
  language_direction: string;
  /**
   * is the language a GL
   * @type {boolean}
   * @memberof Repository
   */
  language_is_gl: boolean;
  /**
   * language title from the manifest
   * @type {string}
   * @memberof Repository
   */
  language_title: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  languages_url: string;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  mirror: boolean;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  mirror_interval: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  mirror_updated: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  open_issues_count: number;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  open_pr_counter: number;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  original_url: string;
  /**
   *
   * @type {User}
   * @memberof Repository
   */
  owner: User;
  /**
   *
   * @type {Repository}
   * @memberof Repository
   */
  parent: Repository;
  /**
   *
   * @type {Permission}
   * @memberof Repository
   */
  permissions: Permission;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  private: boolean;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  release_counter: number;
  /**
   *
   * @type {RepoTransfer}
   * @memberof Repository
   */
  repo_transfer: RepoTransfer;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  ssh_url: string;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  stars_count: number;
  /**
   * subject from the manifest
   * @type {string}
   * @memberof Repository
   */
  subject: string;
  /**
   *
   * @type {boolean}
   * @memberof Repository
   */
  template: boolean;
  /**
   * title from the manifest
   * @type {string}
   * @memberof Repository
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  updated_at: string;
  /**
   *
   * @type {number}
   * @memberof Repository
   */
  watchers_count: number;
  /**
   *
   * @type {string}
   * @memberof Repository
   */
  website: string;
}

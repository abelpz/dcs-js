import { ExternalTracker } from "./external-tracker";
import { ExternalWiki } from "./external-wiki";
import { InternalTracker } from "./internal-tracker";

/**
 * EditRepoOption options when editing a repository&#39;s properties
 * @export
 * @interface EditRepoOption
 */

export interface EditRepoOption {
  /**
   * either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_manual_merge: boolean;
  /**
   * either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_merge_commits: boolean;
  /**
   * either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_rebase: boolean;
  /**
   * either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_rebase_explicit: boolean;
  /**
   * either `true` to allow updating pull request branch by rebase, or `false` to prevent it. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_rebase_update: boolean;
  /**
   * either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  allow_squash_merge: boolean;
  /**
   * set to `true` to archive this repository.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  archived: boolean;
  /**
   * either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  autodetect_manual_merge: boolean;
  /**
   * sets the default branch for this repository.
   * @type {string}
   * @memberof EditRepoOption
   */
  default_branch: string;
  /**
   * set to `true` to delete pr branch after merge by default
   * @type {boolean}
   * @memberof EditRepoOption
   */
  default_delete_branch_after_merge: boolean;
  /**
   * set to a merge style to be used by this repository: &quot;merge&quot;, &quot;rebase&quot;, &quot;rebase-merge&quot;, or &quot;squash&quot;. `has_pull_requests` must be `true`.
   * @type {string}
   * @memberof EditRepoOption
   */
  default_merge_style: string;
  /**
   * a short description of the repository.
   * @type {string}
   * @memberof EditRepoOption
   */
  description: string;
  /**
   * enable prune - remove obsolete remote-tracking references
   * @type {boolean}
   * @memberof EditRepoOption
   */
  enable_prune: boolean;
  /**
   *
   * @type {ExternalTracker}
   * @memberof EditRepoOption
   */
  external_tracker: ExternalTracker;
  /**
   *
   * @type {ExternalWiki}
   * @memberof EditRepoOption
   */
  external_wiki: ExternalWiki;
  /**
   * either `true` to enable issues for this repository or `false` to disable them.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  has_issues: boolean;
  /**
   * either `true` to enable project unit, or `false` to disable them.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  has_projects: boolean;
  /**
   * either `true` to allow pull requests, or `false` to prevent pull request.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  has_pull_requests: boolean;
  /**
   * either `true` to enable the wiki for this repository or `false` to disable it.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  has_wiki: boolean;
  /**
   * either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.
   * @type {boolean}
   * @memberof EditRepoOption
   */
  ignore_whitespace_conflicts: boolean;
  /**
   *
   * @type {InternalTracker}
   * @memberof EditRepoOption
   */
  internal_tracker: InternalTracker;
  /**
   * set to a string like `8h30m0s` to set the mirror interval time
   * @type {string}
   * @memberof EditRepoOption
   */
  mirror_interval: string;
  /**
   * name of the repository
   * @type {string}
   * @memberof EditRepoOption
   */
  name: string;
  /**
  * either `true` to make the repository private or `false` to make it public.
Note: you will get a 422 error if the organization restricts changing repository visibility to organization
owners and a non-owner tries to change the value of private.
  * @type {boolean}
  * @memberof EditRepoOption
  */
  private: boolean;
  /**
   * either `true` to make this repository a template or `false` to make it a normal repository
   * @type {boolean}
   * @memberof EditRepoOption
   */
  template: boolean;
  /**
   * a URL with more information about the repository.
   * @type {string}
   * @memberof EditRepoOption
   */
  website: string;
}

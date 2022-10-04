import { User } from "./user";
import { PrBranchInfo } from "./pr-branch-info";
import { Label } from "./label";
import { Milestone } from "./milestone";
import { StateType } from "./state-type";

/**
 * PullRequest represents a pull request
 * @export
 * @interface PullRequest
 */

export interface PullRequest {
  /**
   *
   * @type {User}
   * @memberof PullRequest
   */
  assignee: User;
  /**
   *
   * @type {User[]}
   * @memberof PullRequest
   */
  assignees: User[];
  /**
   *
   * @type {PrBranchInfo}
   * @memberof PullRequest
   */
  base: PrBranchInfo;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  closed_at: string;
  /**
   *
   * @type {number}
   * @memberof PullRequest
   */
  comments: number;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  diff_url: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  due_date: string;
  /**
   *
   * @type {PrBranchInfo}
   * @memberof PullRequest
   */
  head: PrBranchInfo;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof PullRequest
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof PullRequest
   */
  is_locked: boolean;
  /**
   *
   * @type {Label[]}
   * @memberof PullRequest
   */
  labels: Label[];
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  merge_base: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  merge_commit_sha: string;
  /**
   *
   * @type {boolean}
   * @memberof PullRequest
   */
  mergeable: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PullRequest
   */
  merged: boolean;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  merged_at: string;
  /**
   *
   * @type {User}
   * @memberof PullRequest
   */
  merged_by: User;
  /**
   *
   * @type {Milestone}
   * @memberof PullRequest
   */
  milestone: Milestone;
  /**
   *
   * @type {number}
   * @memberof PullRequest
   */
  number: number;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  patch_url: string;
  /**
   *
   * @type {StateType}
   * @memberof PullRequest
   */
  state: StateType;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  updated_at: string;
  /**
   *
   * @type {string}
   * @memberof PullRequest
   */
  url: string;
  /**
   *
   * @type {User}
   * @memberof PullRequest
   */
  user: User;
}

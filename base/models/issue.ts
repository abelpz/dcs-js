import { User } from "./user";
import { Label } from "./label";
import { Milestone } from "./milestone";
import { PullRequestMeta } from "./pull-request-meta";
import { RepositoryMeta } from "./repository-meta";
import { StateType } from "./state-type";

/**
 * Issue represents an issue in a repository
 * @export
 * @interface Issue
 */

export interface Issue {
  /**
   *
   * @type {User}
   * @memberof Issue
   */
  assignee: User;
  /**
   *
   * @type {User[]}
   * @memberof Issue
   */
  assignees: User[];
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  closed_at: string;
  /**
   *
   * @type {number}
   * @memberof Issue
   */
  comments: number;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  due_date: string;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof Issue
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof Issue
   */
  is_locked: boolean;
  /**
   *
   * @type {Label[]}
   * @memberof Issue
   */
  labels: Label[];
  /**
   *
   * @type {Milestone}
   * @memberof Issue
   */
  milestone: Milestone;
  /**
   *
   * @type {number}
   * @memberof Issue
   */
  number: number;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  original_author: string;
  /**
   *
   * @type {number}
   * @memberof Issue
   */
  original_author_id: number;
  /**
   *
   * @type {PullRequestMeta}
   * @memberof Issue
   */
  pull_request: PullRequestMeta;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  ref: string;
  /**
   *
   * @type {RepositoryMeta}
   * @memberof Issue
   */
  repository: RepositoryMeta;
  /**
   *
   * @type {StateType}
   * @memberof Issue
   */
  state: StateType;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  updated_at: string;
  /**
   *
   * @type {string}
   * @memberof Issue
   */
  url: string;
  /**
   *
   * @type {User}
   * @memberof Issue
   */
  user: User;
}

import { User } from "./user";
import { Team } from "./team";
import { Issue } from "./issue";
import { Label } from "./label";
import { Milestone } from "./milestone";
import { Comment } from "./comment";
import { TrackedTime } from "./tracked-time";

/**
 * TimelineComment represents a timeline comment (comment of any type) on a commit or issue
 * @export
 * @interface TimelineComment
 */

export interface TimelineComment {
  /**
   *
   * @type {User}
   * @memberof TimelineComment
   */
  assignee: User;
  /**
   *
   * @type {Team}
   * @memberof TimelineComment
   */
  assignee_team: Team;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  body: string;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  created_at: string;
  /**
   *
   * @type {Issue}
   * @memberof TimelineComment
   */
  dependent_issue: Issue;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  html_url: string;
  /**
   *
   * @type {number}
   * @memberof TimelineComment
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  issue_url: string;
  /**
   *
   * @type {Label}
   * @memberof TimelineComment
   */
  label: Label;
  /**
   *
   * @type {Milestone}
   * @memberof TimelineComment
   */
  milestone: Milestone;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  new_ref: string;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  new_title: string;
  /**
   *
   * @type {Milestone}
   * @memberof TimelineComment
   */
  old_milestone: Milestone;
  /**
   *
   * @type {number}
   * @memberof TimelineComment
   */
  old_project_id: number;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  old_ref: string;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  old_title: string;
  /**
   *
   * @type {number}
   * @memberof TimelineComment
   */
  project_id: number;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  pull_request_url: string;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  ref_action: string;
  /**
   *
   * @type {Comment}
   * @memberof TimelineComment
   */
  ref_comment: Comment;
  /**
   * commit SHA where issuePR was referenced
   * @type {string}
   * @memberof TimelineComment
   */
  ref_commit_sha: string;
  /**
   *
   * @type {Issue}
   * @memberof TimelineComment
   */
  ref_issue: Issue;
  /**
   * whether the assignees were removed or added
   * @type {boolean}
   * @memberof TimelineComment
   */
  removed_assignee: boolean;
  /**
   *
   * @type {User}
   * @memberof TimelineComment
   */
  resolve_doer: User;
  /**
   *
   * @type {number}
   * @memberof TimelineComment
   */
  review_id: number;
  /**
   *
   * @type {TrackedTime}
   * @memberof TimelineComment
   */
  tracked_time: TrackedTime;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof TimelineComment
   */
  updated_at: string;
  /**
   *
   * @type {User}
   * @memberof TimelineComment
   */
  user: User;
}

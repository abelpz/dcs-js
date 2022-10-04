import { AnnotatedTagObject } from "./annotated-tag-object";
import { CommitUser } from "./commit-user";
import { PayloadCommitVerification } from "./payload-commit-verification";

/**
 * AnnotatedTag represents an annotated tag
 * @export
 * @interface AnnotatedTag
 */

export interface AnnotatedTag {
  /**
   *
   * @type {string}
   * @memberof AnnotatedTag
   */
  message: string;
  /**
   *
   * @type {AnnotatedTagObject}
   * @memberof AnnotatedTag
   */
  object: AnnotatedTagObject;
  /**
   *
   * @type {string}
   * @memberof AnnotatedTag
   */
  sha: string;
  /**
   *
   * @type {string}
   * @memberof AnnotatedTag
   */
  tag: string;
  /**
   *
   * @type {CommitUser}
   * @memberof AnnotatedTag
   */
  tagger: CommitUser;
  /**
   *
   * @type {string}
   * @memberof AnnotatedTag
   */
  url: string;
  /**
   *
   * @type {PayloadCommitVerification}
   * @memberof AnnotatedTag
   */
  verification: PayloadCommitVerification;
}

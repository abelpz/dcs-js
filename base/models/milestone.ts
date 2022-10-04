import { StateType } from "./state-type";

/**
 * Milestone milestone is a collection of issues on one repository
 * @export
 * @interface Milestone
 */

export interface Milestone {
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  closed_at: string;
  /**
   *
   * @type {number}
   * @memberof Milestone
   */
  closed_issues: number;
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  due_on: string;
  /**
   *
   * @type {number}
   * @memberof Milestone
   */
  id: number;
  /**
   *
   * @type {number}
   * @memberof Milestone
   */
  open_issues: number;
  /**
   *
   * @type {StateType}
   * @memberof Milestone
   */
  state: StateType;
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Milestone
   */
  updated_at: string;
}

/**
 * StopWatch represent a running stopwatch
 * @export
 * @interface StopWatch
 */

export interface StopWatch {
  /**
   *
   * @type {string}
   * @memberof StopWatch
   */
  created: string;
  /**
   *
   * @type {string}
   * @memberof StopWatch
   */
  duration: string;
  /**
   *
   * @type {number}
   * @memberof StopWatch
   */
  issue_index: number;
  /**
   *
   * @type {string}
   * @memberof StopWatch
   */
  issue_title: string;
  /**
   *
   * @type {string}
   * @memberof StopWatch
   */
  repo_name: string;
  /**
   *
   * @type {string}
   * @memberof StopWatch
   */
  repo_owner_name: string;
  /**
   *
   * @type {number}
   * @memberof StopWatch
   */
  seconds: number;
}

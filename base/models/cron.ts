/**
 * Cron represents a Cron task
 * @export
 * @interface Cron
 */

export interface Cron {
  /**
   *
   * @type {number}
   * @memberof Cron
   */
  exec_times: number;
  /**
   *
   * @type {string}
   * @memberof Cron
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Cron
   */
  next: string;
  /**
   *
   * @type {string}
   * @memberof Cron
   */
  prev: string;
  /**
   *
   * @type {string}
   * @memberof Cron
   */
  schedule: string;
}

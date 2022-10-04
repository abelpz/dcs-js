/**
 * AddTimeOption options for adding time to an issue
 * @export
 * @interface AddTimeOption
 */

export interface AddTimeOption {
  /**
   *
   * @type {string}
   * @memberof AddTimeOption
   */
  created: string;
  /**
   * time in seconds
   * @type {number}
   * @memberof AddTimeOption
   */
  time: number;
  /**
   * User who spent the time (optional)
   * @type {string}
   * @memberof AddTimeOption
   */
  user_name: string;
}

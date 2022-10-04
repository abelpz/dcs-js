/**
 * APIError is an api error with a message
 * @export
 * @interface ApiError
 */

export interface ApiError {
  /**
   *
   * @type {string}
   * @memberof ApiError
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof ApiError
   */
  url: string;
}

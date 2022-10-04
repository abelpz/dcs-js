/**
 * TopicResponse for returning topics
 * @export
 * @interface TopicResponse
 */

export interface TopicResponse {
  /**
   *
   * @type {string}
   * @memberof TopicResponse
   */
  created: string;
  /**
   *
   * @type {number}
   * @memberof TopicResponse
   */
  id: number;
  /**
   *
   * @type {number}
   * @memberof TopicResponse
   */
  repo_count: number;
  /**
   *
   * @type {string}
   * @memberof TopicResponse
   */
  topic_name: string;
  /**
   *
   * @type {string}
   * @memberof TopicResponse
   */
  updated: string;
}

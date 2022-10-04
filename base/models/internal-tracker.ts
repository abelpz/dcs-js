/**
 * InternalTracker represents settings for internal tracker
 * @export
 * @interface InternalTracker
 */

export interface InternalTracker {
  /**
   * Let only contributors track time (Built-in issue tracker)
   * @type {boolean}
   * @memberof InternalTracker
   */
  allow_only_contributors_to_track_time: boolean;
  /**
   * Enable dependencies for issues and pull requests (Built-in issue tracker)
   * @type {boolean}
   * @memberof InternalTracker
   */
  enable_issue_dependencies: boolean;
  /**
   * Enable time tracking (Built-in issue tracker)
   * @type {boolean}
   * @memberof InternalTracker
   */
  enable_time_tracker: boolean;
}

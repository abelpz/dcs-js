import { StateType } from "./state-type";
import { NotifySubjectType } from "./notify-subject-type";

/**
 * NotificationSubject contains the notification subject (IssuePullCommit)
 * @export
 * @interface NotificationSubject
 */

export interface NotificationSubject {
  /**
   *
   * @type {string}
   * @memberof NotificationSubject
   */
  html_url: string;
  /**
   *
   * @type {string}
   * @memberof NotificationSubject
   */
  latest_comment_html_url: string;
  /**
   *
   * @type {string}
   * @memberof NotificationSubject
   */
  latest_comment_url: string;
  /**
   *
   * @type {StateType}
   * @memberof NotificationSubject
   */
  state: StateType;
  /**
   *
   * @type {string}
   * @memberof NotificationSubject
   */
  title: string;
  /**
   *
   * @type {NotifySubjectType}
   * @memberof NotificationSubject
   */
  type: NotifySubjectType;
  /**
   *
   * @type {string}
   * @memberof NotificationSubject
   */
  url: string;
}

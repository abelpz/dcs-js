import { Repository } from "./repository";
import { NotificationSubject } from "./notification-subject";

/**
 * NotificationThread expose Notification on API
 * @export
 * @interface NotificationThread
 */

export interface NotificationThread {
  /**
   *
   * @type {number}
   * @memberof NotificationThread
   */
  id: number;
  /**
   *
   * @type {boolean}
   * @memberof NotificationThread
   */
  pinned: boolean;
  /**
   *
   * @type {Repository}
   * @memberof NotificationThread
   */
  repository: Repository;
  /**
   *
   * @type {NotificationSubject}
   * @memberof NotificationThread
   */
  subject: NotificationSubject;
  /**
   *
   * @type {boolean}
   * @memberof NotificationThread
   */
  unread: boolean;
  /**
   *
   * @type {string}
   * @memberof NotificationThread
   */
  updated_at: string;
  /**
   *
   * @type {string}
   * @memberof NotificationThread
   */
  url: string;
}

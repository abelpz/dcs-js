import { User } from "./user";

/**
 * Reaction contain one reaction
 * @export
 * @interface Reaction
 */

export interface Reaction {
  /**
   *
   * @type {string}
   * @memberof Reaction
   */
  content: string;
  /**
   *
   * @type {string}
   * @memberof Reaction
   */
  created_at: string;
  /**
   *
   * @type {User}
   * @memberof Reaction
   */
  user: User;
}

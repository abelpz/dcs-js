/**
 * OAuth2Application represents an OAuth2 application.
 * @export
 * @interface OAuth2Application
 */

export interface OAuth2Application {
  /**
   *
   * @type {string}
   * @memberof OAuth2Application
   */
  client_id: string;
  /**
   *
   * @type {string}
   * @memberof OAuth2Application
   */
  client_secret: string;
  /**
   *
   * @type {string}
   * @memberof OAuth2Application
   */
  created: string;
  /**
   *
   * @type {number}
   * @memberof OAuth2Application
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof OAuth2Application
   */
  name: string;
  /**
   *
   * @type {string[]}
   * @memberof OAuth2Application
   */
  redirect_uris: string[];
}

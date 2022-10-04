/**
 * CreateOAuth2ApplicationOptions holds options to create an oauth2 application
 * @export
 * @interface CreateOAuth2ApplicationOptions
 */

export interface CreateOAuth2ApplicationOptions {
  /**
   *
   * @type {string}
   * @memberof CreateOAuth2ApplicationOptions
   */
  name: string;
  /**
   *
   * @type {string[]}
   * @memberof CreateOAuth2ApplicationOptions
   */
  redirect_uris: string[];
}

/**
 * MarkdownOption markdown options
 * @export
 * @interface MarkdownOption
 */

export interface MarkdownOption {
  /**
  * Context to render

in: body
  * @type {string}
  * @memberof MarkdownOption
  */
  Context: string;
  /**
  * Mode to render

in: body
  * @type {string}
  * @memberof MarkdownOption
  */
  Mode: string;
  /**
  * Text markdown to render

in: body
  * @type {string}
  * @memberof MarkdownOption
  */
  Text: string;
  /**
  * Is it a wiki page ?

in: body
  * @type {boolean}
  * @memberof MarkdownOption
  */
  Wiki: boolean;
}

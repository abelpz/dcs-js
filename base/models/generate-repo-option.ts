/**
 * GenerateRepoOption options when creating repository using a template
 * @export
 * @interface GenerateRepoOption
 */

export interface GenerateRepoOption {
  /**
   * include avatar of the template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  avatar: boolean;
  /**
   * Description of the repository to create
   * @type {string}
   * @memberof GenerateRepoOption
   */
  description: string;
  /**
   * include git content of default branch in template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  git_content: boolean;
  /**
   * include git hooks in template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  git_hooks: boolean;
  /**
   * include labels in template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  labels: boolean;
  /**
   * Name of the repository to create
   * @type {string}
   * @memberof GenerateRepoOption
   */
  name: string;
  /**
   * The organization or person who will own the new repository
   * @type {string}
   * @memberof GenerateRepoOption
   */
  owner: string;
  /**
   * Whether the repository is private
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  private: boolean;
  /**
   * include topics in template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  topics: boolean;
  /**
   * include webhooks in template repo
   * @type {boolean}
   * @memberof GenerateRepoOption
   */
  webhooks: boolean;
}

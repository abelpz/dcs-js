/**
 * CreateRepoOption options when creating repository
 * @export
 * @interface CreateRepoOption
 */

export interface CreateRepoOption {
  /**
   * Whether the repository should be auto-initialized?
   * @type {boolean}
   * @memberof CreateRepoOption
   */
  auto_init: boolean;
  /**
   * DefaultBranch of the repository (used when initializes and in template)
   * @type {string}
   * @memberof CreateRepoOption
   */
  default_branch: string;
  /**
   * Description of the repository to create
   * @type {string}
   * @memberof CreateRepoOption
   */
  description: string;
  /**
   * Gitignores to use
   * @type {string}
   * @memberof CreateRepoOption
   */
  gitignores: string;
  /**
   * Label-Set to use
   * @type {string}
   * @memberof CreateRepoOption
   */
  issue_labels: string;
  /**
   * License to use
   * @type {string}
   * @memberof CreateRepoOption
   */
  license: string;
  /**
   * Name of the repository to create
   * @type {string}
   * @memberof CreateRepoOption
   */
  name: string;
  /**
   * Whether the repository is private
   * @type {boolean}
   * @memberof CreateRepoOption
   */
  private: boolean;
  /**
   * Readme of the repository to create
   * @type {string}
   * @memberof CreateRepoOption
   */
  readme: string;
  /**
   * Whether the repository is template
   * @type {boolean}
   * @memberof CreateRepoOption
   */
  template: boolean;
  /**
   * TrustModel of the repository
   * @type {string}
   * @memberof CreateRepoOption
   */
  trust_model: string;
}

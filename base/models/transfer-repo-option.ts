/**
 * TransferRepoOption options when transfer a repository&#39;s ownership
 * @export
 * @interface TransferRepoOption
 */

export interface TransferRepoOption {
  /**
   *
   * @type {string}
   * @memberof TransferRepoOption
   */
  new_owner: string;
  /**
   * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
   * @type {number[]}
   * @memberof TransferRepoOption
   */
  team_ids: number[];
}

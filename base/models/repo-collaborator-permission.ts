import { User } from "./user";

/**
 * RepoCollaboratorPermission to get repository permission for a collaborator
 * @export
 * @interface RepoCollaboratorPermission
 */

export interface RepoCollaboratorPermission {
  /**
   *
   * @type {string}
   * @memberof RepoCollaboratorPermission
   */
  permission: string;
  /**
   *
   * @type {string}
   * @memberof RepoCollaboratorPermission
   */
  role_name: string;
  /**
   *
   * @type {User}
   * @memberof RepoCollaboratorPermission
   */
  user: User;
}

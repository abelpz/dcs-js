/**
 * OrganizationPermissions list different users permissions on an organization
 * @export
 * @interface OrganizationPermissions
 */

export interface OrganizationPermissions {
  /**
   *
   * @type {boolean}
   * @memberof OrganizationPermissions
   */
  can_create_repository: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrganizationPermissions
   */
  can_read: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrganizationPermissions
   */
  can_write: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrganizationPermissions
   */
  is_admin: boolean;
  /**
   *
   * @type {boolean}
   * @memberof OrganizationPermissions
   */
  is_owner: boolean;
}

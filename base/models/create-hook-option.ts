import { CreateHookOptionConfig } from "./create-hook-option-config";

/**
 * CreateHookOption options when create a hook
 * @export
 * @interface CreateHookOption
 */

export interface CreateHookOption {
  /**
   *
   * @type {boolean}
   * @memberof CreateHookOption
   */
  active: boolean;
  /**
   *
   * @type {string}
   * @memberof CreateHookOption
   */
  branch_filter: string;
  /**
   *
   * @type {CreateHookOptionConfig}
   * @memberof CreateHookOption
   */
  config: CreateHookOptionConfig;
  /**
   *
   * @type {string[]}
   * @memberof CreateHookOption
   */
  events: string[];
  /**
   *
   * @type {string}
   * @memberof CreateHookOption
   */
  type: string;
}

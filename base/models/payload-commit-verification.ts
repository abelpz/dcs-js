import { PayloadUser } from "./payload-user";

/**
 * PayloadCommitVerification represents the GPG verification of a commit
 * @export
 * @interface PayloadCommitVerification
 */

export interface PayloadCommitVerification {
  /**
   *
   * @type {string}
   * @memberof PayloadCommitVerification
   */
  payload: string;
  /**
   *
   * @type {string}
   * @memberof PayloadCommitVerification
   */
  reason: string;
  /**
   *
   * @type {string}
   * @memberof PayloadCommitVerification
   */
  signature: string;
  /**
   *
   * @type {PayloadUser}
   * @memberof PayloadCommitVerification
   */
  signer: PayloadUser;
  /**
   *
   * @type {boolean}
   * @memberof PayloadCommitVerification
   */
  verified: boolean;
}

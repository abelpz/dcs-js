/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.3+dcs
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Repository } from './repository';

/**
 * PRBranchInfo information about a branch
 * @export
 * @interface PRBranchInfo
 */
export interface PRBranchInfo {
    /**
     * 
     * @type {string}
     * @memberof PRBranchInfo
     */
    'label'?: string;
    /**
     * 
     * @type {string}
     * @memberof PRBranchInfo
     */
    'ref'?: string;
    /**
     * 
     * @type {Repository}
     * @memberof PRBranchInfo
     */
    'repo'?: Repository;
    /**
     * 
     * @type {number}
     * @memberof PRBranchInfo
     */
    'repo_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PRBranchInfo
     */
    'sha'?: string;
}

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



/**
 * CommitStats is statistics for a RepoCommit
 * @export
 * @interface CommitStats
 */
export interface CommitStats {
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'additions'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'deletions'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'total'?: number;
}

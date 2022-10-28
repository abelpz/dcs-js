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
 * CreateReleaseOption options when creating a release
 * @export
 * @interface CreateReleaseOption
 */
export interface CreateReleaseOption {
    /**
     * 
     * @type {string}
     * @memberof CreateReleaseOption
     */
    'body'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateReleaseOption
     */
    'draft'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateReleaseOption
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateReleaseOption
     */
    'prerelease'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateReleaseOption
     */
    'tag_name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateReleaseOption
     */
    'target_commitish'?: string;
}

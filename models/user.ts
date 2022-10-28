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
 * User represents a user
 * @export
 * @interface User
 */
export interface User {
    /**
     * Is user active
     * @type {boolean}
     * @memberof User
     */
    'active'?: boolean;
    /**
     * URL to the user\'s avatar
     * @type {string}
     * @memberof User
     */
    'avatar_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'created'?: string;
    /**
     * the user\'s description
     * @type {string}
     * @memberof User
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * user counts
     * @type {number}
     * @memberof User
     */
    'followers_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'following_count'?: number;
    /**
     * the user\'s full name
     * @type {string}
     * @memberof User
     */
    'full_name'?: string;
    /**
     * the user\'s id
     * @type {number}
     * @memberof User
     */
    'id'?: number;
    /**
     * Is the user an administrator
     * @type {boolean}
     * @memberof User
     */
    'is_admin'?: boolean;
    /**
     * User locale
     * @type {string}
     * @memberof User
     */
    'language'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_login'?: string;
    /**
     * the user\'s location
     * @type {string}
     * @memberof User
     */
    'location'?: string;
    /**
     * the user\'s username
     * @type {string}
     * @memberof User
     */
    'login'?: string;
    /**
     * Is user login prohibited
     * @type {boolean}
     * @memberof User
     */
    'prohibit_login'?: boolean;
    /**
     * Repo languages
     * @type {Array<string>}
     * @memberof User
     */
    'repo_languages'?: Array<string>;
    /**
     * Repo subjects
     * @type {Array<string>}
     * @memberof User
     */
    'repo_subjects'?: Array<string>;
    /**
     * Is user restricted
     * @type {boolean}
     * @memberof User
     */
    'restricted'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'starred_repos_count'?: number;
    /**
     * User visibility level option: public, limited, private
     * @type {string}
     * @memberof User
     */
    'visibility'?: string;
    /**
     * the user\'s website
     * @type {string}
     * @memberof User
     */
    'website'?: string;
}

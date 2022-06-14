/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.16.7+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    active?: boolean;
    /**
     * URL to the user's avatar
     * @type {string}
     * @memberof User
     */
    avatarUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    created?: Date;
    /**
     * the user's description
     * @type {string}
     * @memberof User
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * user counts
     * @type {number}
     * @memberof User
     */
    followersCount?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    followingCount?: number;
    /**
     * the user's full name
     * @type {string}
     * @memberof User
     */
    fullName?: string;
    /**
     * the user's id
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * Is the user an administrator
     * @type {boolean}
     * @memberof User
     */
    isAdmin?: boolean;
    /**
     * User locale
     * @type {string}
     * @memberof User
     */
    language?: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    lastLogin?: Date;
    /**
     * the user's location
     * @type {string}
     * @memberof User
     */
    location?: string;
    /**
     * the user's username
     * @type {string}
     * @memberof User
     */
    login?: string;
    /**
     * Is user login prohibited
     * @type {boolean}
     * @memberof User
     */
    prohibitLogin?: boolean;
    /**
     * DCS Customizations ***_/ Repo languages
     * @type {Array<string>}
     * @memberof User
     */
    repoLanguages?: Array<string>;
    /**
     * Repo subjects
     * @type {Array<string>}
     * @memberof User
     */
    repoSubjects?: Array<string>;
    /**
     * END DCS Customizations ***_/ Is user restricted
     * @type {boolean}
     * @memberof User
     */
    restricted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    starredReposCount?: number;
    /**
     * User visibility level option: public, limited, private
     * @type {string}
     * @memberof User
     */
    visibility?: string;
    /**
     * the user's website
     * @type {string}
     * @memberof User
     */
    website?: string;
}

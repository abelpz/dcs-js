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
import { CommitStatusState } from './commit-status-state';
import { User } from './user';
/**
 * CommitStatus holds a single status of a single Commit
 * @export
 * @interface CommitStatus
 */
export interface CommitStatus {
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    context?: string;
    /**
     * 
     * @type {Date}
     * @memberof CommitStatus
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof CommitStatus
     */
    creator?: User;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof CommitStatus
     */
    id?: number;
    /**
     * 
     * @type {CommitStatusState}
     * @memberof CommitStatus
     */
    status?: CommitStatusState;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    targetUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof CommitStatus
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    url?: string;
}

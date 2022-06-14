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
 * CreateIssueOption options to create one issue
 * @export
 * @interface CreateIssueOption
 */
export interface CreateIssueOption {
    /**
     * deprecated
     * @type {string}
     * @memberof CreateIssueOption
     */
    assignee?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateIssueOption
     */
    assignees?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    body?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateIssueOption
     */
    closed?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CreateIssueOption
     */
    dueDate?: Date;
    /**
     * list of label ids
     * @type {Array<number>}
     * @memberof CreateIssueOption
     */
    labels?: Array<number>;
    /**
     * milestone id
     * @type {number}
     * @memberof CreateIssueOption
     */
    milestone?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    title: string;
}

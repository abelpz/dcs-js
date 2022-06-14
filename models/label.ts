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
 * Label a label to an issue or a pr
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    url?: string;
}

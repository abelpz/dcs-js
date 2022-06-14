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
import { FileCommitResponse } from './file-commit-response';
import { PayloadCommitVerification } from './payload-commit-verification';
/**
 * FileDeleteResponse contains information about a repo's file that was deleted
 * @export
 * @interface FileDeleteResponse
 */
export interface FileDeleteResponse {
    /**
     * 
     * @type {FileCommitResponse}
     * @memberof FileDeleteResponse
     */
    commit?: FileCommitResponse;
    /**
     * 
     * @type {any}
     * @memberof FileDeleteResponse
     */
    content?: any;
    /**
     * 
     * @type {PayloadCommitVerification}
     * @memberof FileDeleteResponse
     */
    verification?: PayloadCommitVerification;
}

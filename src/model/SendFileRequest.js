/**
 * Chat API SDK
 * The SDK allows you to receive and send messages through your WhatsApp account. [Sign up now](https://app.chat-api.com/)  The Chat API is based on the WhatsApp WEB protocol and excludes the ban both when using libraries from mgp25 and the like. Despite this, your account can be banned by anti-spam system WhatsApp after several clicking the \"block\" button.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sale@chat-api.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SendFileRequest model module.
 * @module model/SendFileRequest
 * @version 1.0.0
 */
class SendFileRequest {
    /**
     * Constructs a new <code>SendFileRequest</code>.
     * @alias module:model/SendFileRequest
     * @param body {String} HTTP link *https://upload.wikimedia.org/wikipedia/ru/3/33/NatureCover2001.jpg*  Or base64-encoded file with mime data, for example *data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...*   File in form-data input field
     * @param filename {String} File name, for *example 1.jpg* or *hello.xlsx*
     */
    constructor(body, filename) { 
        
        SendFileRequest.initialize(this, body, filename);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, filename) { 
        obj['body'] = body;
        obj['filename'] = filename;
    }

    /**
     * Constructs a <code>SendFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendFileRequest} obj Optional instance to populate.
     * @return {module:model/SendFileRequest} The populated <code>SendFileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendFileRequest();

            if (data.hasOwnProperty('chatId')) {
                obj['chatId'] = ApiClient.convertToType(data['chatId'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
        }
        return obj;
    }


}

/**
 * **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
 * @member {String} chatId
 */
SendFileRequest.prototype['chatId'] = undefined;

/**
 * **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
 * @member {Number} phone
 */
SendFileRequest.prototype['phone'] = undefined;

/**
 * HTTP link *https://upload.wikimedia.org/wikipedia/ru/3/33/NatureCover2001.jpg*  Or base64-encoded file with mime data, for example *data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...*   File in form-data input field
 * @member {String} body
 */
SendFileRequest.prototype['body'] = undefined;

/**
 * File name, for *example 1.jpg* or *hello.xlsx*
 * @member {String} filename
 */
SendFileRequest.prototype['filename'] = undefined;

/**
 * Text under the file
 * @member {String} caption
 */
SendFileRequest.prototype['caption'] = undefined;






export default SendFileRequest;

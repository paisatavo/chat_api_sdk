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
 * The InlineResponse2005Update model module.
 * @module model/InlineResponse2005Update
 * @version 1.0.0
 */
class InlineResponse2005Update {
    /**
     * Constructs a new <code>InlineResponse2005Update</code>.
     * An object that lists the fields changed in the request
     * @alias module:model/InlineResponse2005Update
     */
    constructor() { 
        
        InlineResponse2005Update.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005Update</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005Update} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005Update} The populated <code>InlineResponse2005Update</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005Update();

            if (data.hasOwnProperty('webhookUrl')) {
                obj['webhookUrl'] = ApiClient.convertToType(data['webhookUrl'], 'String');
            }
            if (data.hasOwnProperty('ackNotificationsOn')) {
                obj['ackNotificationsOn'] = ApiClient.convertToType(data['ackNotificationsOn'], 'Boolean');
            }
            if (data.hasOwnProperty('chatUpdateOn')) {
                obj['chatUpdateOn'] = ApiClient.convertToType(data['chatUpdateOn'], 'Boolean');
            }
            if (data.hasOwnProperty('videoUploadOn')) {
                obj['videoUploadOn'] = ApiClient.convertToType(data['videoUploadOn'], 'Boolean');
            }
            if (data.hasOwnProperty('proxy')) {
                obj['proxy'] = ApiClient.convertToType(data['proxy'], 'String');
            }
            if (data.hasOwnProperty('guaranteedHooks')) {
                obj['guaranteedHooks'] = ApiClient.convertToType(data['guaranteedHooks'], 'Boolean');
            }
            if (data.hasOwnProperty('ignoreOldMessages')) {
                obj['ignoreOldMessages'] = ApiClient.convertToType(data['ignoreOldMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('processArchive')) {
                obj['processArchive'] = ApiClient.convertToType(data['processArchive'], 'Boolean');
            }
            if (data.hasOwnProperty('instanceStatuses')) {
                obj['instanceStatuses'] = ApiClient.convertToType(data['instanceStatuses'], 'Boolean');
            }
            if (data.hasOwnProperty('webhookStatuses')) {
                obj['webhookStatuses'] = ApiClient.convertToType(data['webhookStatuses'], 'Boolean');
            }
            if (data.hasOwnProperty('statusNotificationsOn')) {
                obj['statusNotificationsOn'] = ApiClient.convertToType(data['statusNotificationsOn'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} webhookUrl
 */
InlineResponse2005Update.prototype['webhookUrl'] = undefined;

/**
 * @member {Boolean} ackNotificationsOn
 */
InlineResponse2005Update.prototype['ackNotificationsOn'] = undefined;

/**
 * @member {Boolean} chatUpdateOn
 */
InlineResponse2005Update.prototype['chatUpdateOn'] = undefined;

/**
 * @member {Boolean} videoUploadOn
 */
InlineResponse2005Update.prototype['videoUploadOn'] = undefined;

/**
 * @member {String} proxy
 */
InlineResponse2005Update.prototype['proxy'] = undefined;

/**
 * @member {Boolean} guaranteedHooks
 */
InlineResponse2005Update.prototype['guaranteedHooks'] = undefined;

/**
 * @member {Boolean} ignoreOldMessages
 */
InlineResponse2005Update.prototype['ignoreOldMessages'] = undefined;

/**
 * @member {Boolean} processArchive
 */
InlineResponse2005Update.prototype['processArchive'] = undefined;

/**
 * @member {Boolean} instanceStatuses
 */
InlineResponse2005Update.prototype['instanceStatuses'] = undefined;

/**
 * @member {Boolean} webhookStatuses
 */
InlineResponse2005Update.prototype['webhookStatuses'] = undefined;

/**
 * @member {Boolean} statusNotificationsOn
 */
InlineResponse2005Update.prototype['statusNotificationsOn'] = undefined;






export default InlineResponse2005Update;


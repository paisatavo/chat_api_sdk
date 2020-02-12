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
 * The SetWebhookStatus model module.
 * @module model/SetWebhookStatus
 * @version 1.0.0
 */
class SetWebhookStatus {
    /**
     * Constructs a new <code>SetWebhookStatus</code>.
     * @alias module:model/SetWebhookStatus
     */
    constructor() { 
        
        SetWebhookStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetWebhookStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetWebhookStatus} obj Optional instance to populate.
     * @return {module:model/SetWebhookStatus} The populated <code>SetWebhookStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetWebhookStatus();

            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Flag indicating that the current request has changed webhook
 * @member {Boolean} set
 */
SetWebhookStatus.prototype['set'] = undefined;

/**
 * @member {String} message
 */
SetWebhookStatus.prototype['message'] = undefined;






export default SetWebhookStatus;


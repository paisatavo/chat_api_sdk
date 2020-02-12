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
 * The WebhookStatus model module.
 * @module model/WebhookStatus
 * @version 1.0.0
 */
class WebhookStatus {
    /**
     * Constructs a new <code>WebhookStatus</code>.
     * @alias module:model/WebhookStatus
     */
    constructor() { 
        
        WebhookStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookStatus} obj Optional instance to populate.
     * @return {module:model/WebhookStatus} The populated <code>WebhookStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookStatus();

            if (data.hasOwnProperty('msgId')) {
                obj['msgId'] = ApiClient.convertToType(data['msgId'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * message id
 * @member {String} msgId
 */
WebhookStatus.prototype['msgId'] = undefined;

/**
 * creation date
 * @member {String} time
 */
WebhookStatus.prototype['time'] = undefined;

/**
 * status name (\"sent\", \"not sent\", \"queued\")
 * @member {String} status
 */
WebhookStatus.prototype['status'] = undefined;






export default WebhookStatus;

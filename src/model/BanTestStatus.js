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
 * The BanTestStatus model module.
 * @module model/BanTestStatus
 * @version 1.0.0
 */
class BanTestStatus {
    /**
     * Constructs a new <code>BanTestStatus</code>.
     * @alias module:model/BanTestStatus
     */
    constructor() { 
        
        BanTestStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BanTestStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BanTestStatus} obj Optional instance to populate.
     * @return {module:model/BanTestStatus} The populated <code>BanTestStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BanTestStatus();

            if (data.hasOwnProperty('banned')) {
                obj['banned'] = ApiClient.convertToType(data['banned'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('banPhoneMask')) {
                obj['banPhoneMask'] = ApiClient.convertToType(data['banPhoneMask'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} banned
 */
BanTestStatus.prototype['banned'] = undefined;

/**
 * @member {String} message
 */
BanTestStatus.prototype['message'] = undefined;

/**
 * Test phone number
 * @member {String} phone
 */
BanTestStatus.prototype['phone'] = undefined;

/**
 * Test regex
 * @member {String} banPhoneMask
 */
BanTestStatus.prototype['banPhoneMask'] = undefined;






export default BanTestStatus;


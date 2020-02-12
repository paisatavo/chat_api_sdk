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
 * The InstanceStatusAction model module.
 * @module model/InstanceStatusAction
 * @version 1.0.0
 */
class InstanceStatusAction {
    /**
     * Constructs a new <code>InstanceStatusAction</code>.
     * Action for change status
     * @alias module:model/InstanceStatusAction
     */
    constructor() { 
        
        InstanceStatusAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceStatusAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatusAction} obj Optional instance to populate.
     * @return {module:model/InstanceStatusAction} The populated <code>InstanceStatusAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceStatusAction();

            if (data.hasOwnProperty('act')) {
                obj['act'] = ApiClient.convertToType(data['act'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Method name
 * @member {module:model/InstanceStatusAction.ActEnum} act
 */
InstanceStatusAction.prototype['act'] = undefined;

/**
 * Action caption for the button
 * @member {String} label
 */
InstanceStatusAction.prototype['label'] = undefined;





/**
 * Allowed values for the <code>act</code> property.
 * @enum {String}
 * @readonly
 */
InstanceStatusAction['ActEnum'] = {

    /**
     * value: "expiry"
     * @const
     */
    "expiry": "expiry",

    /**
     * value: "retry"
     * @const
     */
    "retry": "retry",

    /**
     * value: "takeover"
     * @const
     */
    "takeover": "takeover",

    /**
     * value: "logout"
     * @const
     */
    "logout": "logout"
};



export default InstanceStatusAction;

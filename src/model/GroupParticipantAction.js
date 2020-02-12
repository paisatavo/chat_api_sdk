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
 * The GroupParticipantAction model module.
 * @module model/GroupParticipantAction
 * @version 1.0.0
 */
class GroupParticipantAction {
    /**
     * Constructs a new <code>GroupParticipantAction</code>.
     * @alias module:model/GroupParticipantAction
     * @param groupId {String} Chat ID from the chat list. Examples: 19680561234-1479621234@g.us for the group.
     * @param participantChatId {String} **Required if participantPhone is not set**  Chat ID from the message list. Examples: 17633123456@c.us. Used instead of the participantPhone parameter.
     */
    constructor(groupId, participantChatId) { 
        
        GroupParticipantAction.initialize(this, groupId, participantChatId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupId, participantChatId) { 
        obj['groupId'] = groupId;
        obj['participantChatId'] = participantChatId;
    }

    /**
     * Constructs a <code>GroupParticipantAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupParticipantAction} obj Optional instance to populate.
     * @return {module:model/GroupParticipantAction} The populated <code>GroupParticipantAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupParticipantAction();

            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('participantChatId')) {
                obj['participantChatId'] = ApiClient.convertToType(data['participantChatId'], 'String');
            }
            if (data.hasOwnProperty('participantPhone')) {
                obj['participantPhone'] = ApiClient.convertToType(data['participantPhone'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Chat ID from the chat list. Examples: 19680561234-1479621234@g.us for the group.
 * @member {String} groupId
 */
GroupParticipantAction.prototype['groupId'] = undefined;

/**
 * **Required if participantPhone is not set**  Chat ID from the message list. Examples: 17633123456@c.us. Used instead of the participantPhone parameter.
 * @member {String} participantChatId
 */
GroupParticipantAction.prototype['participantChatId'] = undefined;

/**
 * **Required if participantChatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
 * @member {Number} participantPhone
 */
GroupParticipantAction.prototype['participantPhone'] = undefined;






export default GroupParticipantAction;


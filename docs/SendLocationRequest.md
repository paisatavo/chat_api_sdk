# ChatApiSdk.SendLocationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatId** | **String** | **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter. | [optional] 
**phone** | **Number** | **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486. | [optional] 
**lat** | **Number** | Latitude | 
**lng** | **Number** | Longitude | 
**address** | **String** | Text under the location.  Supports two lines. To use two lines, use the \&quot;\\n\&quot; symbol. | 



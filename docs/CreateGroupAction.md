# ChatApiSdk.CreateGroupAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupName** | **String** | Name of the group being created | 
**chatIds** | **[String]** | **Required if phones is not set**  An array of new participients chatIds.  | [optional] 
**phones** | **[Number]** | **Required if chatIds is not set**  An array of phones starting with the country code. You do not need to add your number.   USA example: [17472822486&#39;]. | [optional] 
**messageText** | **String** | The text of the message that will be sent to the group when it is created. If you do not set a parameter, the message will not be sent | [optional] 



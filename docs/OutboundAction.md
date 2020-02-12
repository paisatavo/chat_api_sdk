# ChatApiSdk.OutboundAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | action id in queue | [optional] 
**type** | **String** | type of the action in queue | [optional] 
**lastTry** | **Number** | Last try time to execute a action | [optional] 
**jsonData** | [**Object**](.md) | Additional action data | [optional] 



## Enum: TypeEnum


* `create group` (value: `"create group"`)

* `add group participant` (value: `"add group participant"`)

* `remove group participant` (value: `"remove group participant"`)

* `promote group participant` (value: `"promote group participant"`)

* `demote group participant` (value: `"demote group participant"`)

* `read chat` (value: `"read chat"`)





# ChatApiSdk.Class6BanApi

All URIs are relative to *https://api.chat-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**banTest**](Class6BanApi.md#banTest) | **POST** /banTest | Test ban settings
[**getBanSettings**](Class6BanApi.md#getBanSettings) | **GET** /banSettings | Get settings
[**setBanSettings**](Class6BanApi.md#setBanSettings) | **POST** /banSettings | Set settings



## banTest

> BanTestStatus banTest(banTestAction)

Test ban settings

Send the phone number to find out if the instance is banning it

### Example

```javascript
import ChatApiSdk from 'chat_api_sdk';
let defaultClient = ChatApiSdk.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new ChatApiSdk.Class6BanApi();
let banTestAction = new ChatApiSdk.BanTestAction(); // BanTestAction | 
apiInstance.banTest(banTestAction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **banTestAction** | [**BanTestAction**](BanTestAction.md)|  | 

### Return type

[**BanTestStatus**](BanTestStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## getBanSettings

> BanSettings getBanSettings()

Get settings

**banPhoneMask** - Regular expression on which bans on numbers will be sent  **preBanMessage** - Warning message If it is set, a message will be sent before sending the ban.

### Example

```javascript
import ChatApiSdk from 'chat_api_sdk';
let defaultClient = ChatApiSdk.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new ChatApiSdk.Class6BanApi();
apiInstance.getBanSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BanSettings**](BanSettings.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setBanSettings

> BanSettings setBanSettings(banSettings)

Set settings

**banPhoneMask** - Regular expression on which bans on numbers will be sent  **preBanMessage** - Warning message If it is set, a message will be sent before sending the ban.

### Example

```javascript
import ChatApiSdk from 'chat_api_sdk';
let defaultClient = ChatApiSdk.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new ChatApiSdk.Class6BanApi();
let banSettings = new ChatApiSdk.BanSettings(); // BanSettings | 
apiInstance.setBanSettings(banSettings, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **banSettings** | [**BanSettings**](BanSettings.md)|  | 

### Return type

[**BanSettings**](BanSettings.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


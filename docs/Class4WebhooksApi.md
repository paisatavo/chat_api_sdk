# ChatApiSdk.Class4WebhooksApi

All URIs are relative to *https://api.chat-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setWebhook**](Class4WebhooksApi.md#setWebhook) | **POST** /webhook | Sets the URL for receiving webhook



## setWebhook

> SetWebhookStatus setWebhook(webhookUrl)

Sets the URL for receiving webhook

Sets the URL for receiving webhook notifications of new messages and message delivery events (ack).  **API responses in \&quot;Callbacks\&quot; tab**

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

let apiInstance = new ChatApiSdk.Class4WebhooksApi();
let webhookUrl = new ChatApiSdk.WebhookUrl(); // WebhookUrl | 
apiInstance.setWebhook(webhookUrl, (error, data, response) => {
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
 **webhookUrl** | [**WebhookUrl**](WebhookUrl.md)|  | 

### Return type

[**SetWebhookStatus**](SetWebhookStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


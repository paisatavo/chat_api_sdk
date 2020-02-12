# chat_api_sdk

ChatApiSdk - JavaScript client for chat_api_sdk
The SDK allows you to receive and send messages through your WhatsApp account. [Sign up now](https://app.chat-api.com/)  The Chat API is based on the WhatsApp WEB protocol and excludes the ban both when using libraries from mgp25 and the like. Despite this, your account can be banned by anti-spam system WhatsApp after several clicking the \"block\" button.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install chat_api_sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your chat_api_sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/YOUR_USERNAME/chat_api_sdk
then install it via:

```shell
    npm install YOUR_USERNAME/chat_api_sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ChatApiSdk = require('chat_api_sdk');

var defaultClient = ChatApiSdk.ApiClient.instance;
// Configure API key authorization: instanceId
var instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix['instanceId'] = "Token"
// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix['token'] = "Token"

var api = new ChatApiSdk.Class1InstanceApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.expiry(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.chat-api.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ChatApiSdk.Class1InstanceApi* | [**expiry**](docs/Class1InstanceApi.md#expiry) | **POST** /expiry | Updates the QR code after its expired
*ChatApiSdk.Class1InstanceApi* | [**getQRCode**](docs/Class1InstanceApi.md#getQRCode) | **GET** /qr_code | Direct link to QR-code in the form of an image, not base64.
*ChatApiSdk.Class1InstanceApi* | [**getSettings**](docs/Class1InstanceApi.md#getSettings) | **GET** /settings | Get settings
*ChatApiSdk.Class1InstanceApi* | [**getStatus**](docs/Class1InstanceApi.md#getStatus) | **GET** /status | Get the account status and QR code for authorization.
*ChatApiSdk.Class1InstanceApi* | [**logout**](docs/Class1InstanceApi.md#logout) | **POST** /logout | Logout from WhatsApp Web to get new QR code.
*ChatApiSdk.Class1InstanceApi* | [**reboot**](docs/Class1InstanceApi.md#reboot) | **POST** /reboot | Reboot your whatsapp instance.
*ChatApiSdk.Class1InstanceApi* | [**retry**](docs/Class1InstanceApi.md#retry) | **POST** /retry | Repeat the manual synchronization attempt with the device
*ChatApiSdk.Class1InstanceApi* | [**setSettings**](docs/Class1InstanceApi.md#setSettings) | **POST** /settings | Set settings
*ChatApiSdk.Class1InstanceApi* | [**takeover**](docs/Class1InstanceApi.md#takeover) | **POST** /takeover | Returns the active session if the device has connected another instance of Web WhatsApp
*ChatApiSdk.Class2MessagesApi* | [**forwardMessage**](docs/Class2MessagesApi.md#forwardMessage) | **POST** /forwardMessage | Forwarding messages to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**getMessages**](docs/Class2MessagesApi.md#getMessages) | **GET** /messages | Get a list of messages.
*ChatApiSdk.Class2MessagesApi* | [**sendContact**](docs/Class2MessagesApi.md#sendContact) | **POST** /sendContact | Sending a contact or contact list to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendFile**](docs/Class2MessagesApi.md#sendFile) | **POST** /sendFile | Send a file to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendLink**](docs/Class2MessagesApi.md#sendLink) | **POST** /sendLink | Send text with link and link&#39;s preview to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendLocation**](docs/Class2MessagesApi.md#sendLocation) | **POST** /sendLocation | Sending a location to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendMessage**](docs/Class2MessagesApi.md#sendMessage) | **POST** /sendMessage | Send a message to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendPTT**](docs/Class2MessagesApi.md#sendPTT) | **POST** /sendPTT | Send a ptt-audio to a new or existing chat.
*ChatApiSdk.Class2MessagesApi* | [**sendVCard**](docs/Class2MessagesApi.md#sendVCard) | **POST** /sendVCard | Sending a vcard to a new or existing chat.
*ChatApiSdk.Class3ChatsApi* | [**addGroupParticipant**](docs/Class3ChatsApi.md#addGroupParticipant) | **POST** /addGroupParticipant | Adding participant to a group
*ChatApiSdk.Class3ChatsApi* | [**demoteGroupParticipant**](docs/Class3ChatsApi.md#demoteGroupParticipant) | **POST** /demoteGroupParticipant | Demote group participant
*ChatApiSdk.Class3ChatsApi* | [**getChats**](docs/Class3ChatsApi.md#getChats) | **GET** /dialogs | Get the chat list.
*ChatApiSdk.Class3ChatsApi* | [**group**](docs/Class3ChatsApi.md#group) | **POST** /group | Creates a group and sends the message to the created group.
*ChatApiSdk.Class3ChatsApi* | [**promoteGroupParticipant**](docs/Class3ChatsApi.md#promoteGroupParticipant) | **POST** /promoteGroupParticipant | Make participant in the group an administrator
*ChatApiSdk.Class3ChatsApi* | [**readChat**](docs/Class3ChatsApi.md#readChat) | **POST** /readChat | Open chat for reading messages
*ChatApiSdk.Class3ChatsApi* | [**removeGroupParticipant**](docs/Class3ChatsApi.md#removeGroupParticipant) | **POST** /removeGroupParticipant | Remove participant from a group
*ChatApiSdk.Class4WebhooksApi* | [**setWebhook**](docs/Class4WebhooksApi.md#setWebhook) | **POST** /webhook | Sets the URL for receiving webhook
*ChatApiSdk.Class5QueuesApi* | [**clearActionsQueue**](docs/Class5QueuesApi.md#clearActionsQueue) | **POST** /clearActionsQueue | Clear outbound actions queue.
*ChatApiSdk.Class5QueuesApi* | [**clearMessagesQueue**](docs/Class5QueuesApi.md#clearMessagesQueue) | **POST** /clearMessagesQueue | Clear outbound messages queue.
*ChatApiSdk.Class5QueuesApi* | [**showActionsQueue**](docs/Class5QueuesApi.md#showActionsQueue) | **GET** /showActionsQueue | Get outbound messages queue.
*ChatApiSdk.Class5QueuesApi* | [**showMessagesQueue**](docs/Class5QueuesApi.md#showMessagesQueue) | **GET** /showMessagesQueue | Get outbound messages queue.
*ChatApiSdk.Class6BanApi* | [**banTest**](docs/Class6BanApi.md#banTest) | **POST** /banTest | Test ban settings
*ChatApiSdk.Class6BanApi* | [**getBanSettings**](docs/Class6BanApi.md#getBanSettings) | **GET** /banSettings | Get settings
*ChatApiSdk.Class6BanApi* | [**setBanSettings**](docs/Class6BanApi.md#setBanSettings) | **POST** /banSettings | Set settings
*ChatApiSdk.Class7TestingApi* | [**instanceStatuses**](docs/Class7TestingApi.md#instanceStatuses) | **GET** /instanceStatuses | Returns instance status changes history.
*ChatApiSdk.Class7TestingApi* | [**webhookStatuses**](docs/Class7TestingApi.md#webhookStatuses) | **GET** /webhookStatus | Returns webhook status for message.


## Documentation for Models

 - [ChatApiSdk.Ack](docs/Ack.md)
 - [ChatApiSdk.BanSettings](docs/BanSettings.md)
 - [ChatApiSdk.BanTestAction](docs/BanTestAction.md)
 - [ChatApiSdk.BanTestStatus](docs/BanTestStatus.md)
 - [ChatApiSdk.Chat](docs/Chat.md)
 - [ChatApiSdk.ChatIdProp](docs/ChatIdProp.md)
 - [ChatApiSdk.ChatUpdate](docs/ChatUpdate.md)
 - [ChatApiSdk.Chats](docs/Chats.md)
 - [ChatApiSdk.ClearActionsQueueStatus](docs/ClearActionsQueueStatus.md)
 - [ChatApiSdk.ClearMessagesQueueStatus](docs/ClearMessagesQueueStatus.md)
 - [ChatApiSdk.CreateGroupAction](docs/CreateGroupAction.md)
 - [ChatApiSdk.CreateGroupStatus](docs/CreateGroupStatus.md)
 - [ChatApiSdk.ForwardMessageRequest](docs/ForwardMessageRequest.md)
 - [ChatApiSdk.GroupParticipantAction](docs/GroupParticipantAction.md)
 - [ChatApiSdk.GroupParticipantStatus](docs/GroupParticipantStatus.md)
 - [ChatApiSdk.InlineResponse200](docs/InlineResponse200.md)
 - [ChatApiSdk.InlineResponse2001](docs/InlineResponse2001.md)
 - [ChatApiSdk.InlineResponse2002](docs/InlineResponse2002.md)
 - [ChatApiSdk.InlineResponse2003](docs/InlineResponse2003.md)
 - [ChatApiSdk.InlineResponse2004](docs/InlineResponse2004.md)
 - [ChatApiSdk.InlineResponse2005](docs/InlineResponse2005.md)
 - [ChatApiSdk.InlineResponse2005Update](docs/InlineResponse2005Update.md)
 - [ChatApiSdk.InlineResponse401](docs/InlineResponse401.md)
 - [ChatApiSdk.InstanceStatus](docs/InstanceStatus.md)
 - [ChatApiSdk.InstanceStatusAction](docs/InstanceStatusAction.md)
 - [ChatApiSdk.InstanceStatusLink](docs/InstanceStatusLink.md)
 - [ChatApiSdk.InstanceStatusStatusData](docs/InstanceStatusStatusData.md)
 - [ChatApiSdk.InstanceStatusStatusDataActions](docs/InstanceStatusStatusDataActions.md)
 - [ChatApiSdk.Message](docs/Message.md)
 - [ChatApiSdk.Messages](docs/Messages.md)
 - [ChatApiSdk.OutboundAction](docs/OutboundAction.md)
 - [ChatApiSdk.OutboundActions](docs/OutboundActions.md)
 - [ChatApiSdk.OutboundMessage](docs/OutboundMessage.md)
 - [ChatApiSdk.OutboundMessages](docs/OutboundMessages.md)
 - [ChatApiSdk.PhoneProp](docs/PhoneProp.md)
 - [ChatApiSdk.ReadChatAction](docs/ReadChatAction.md)
 - [ChatApiSdk.ReadChatStatus](docs/ReadChatStatus.md)
 - [ChatApiSdk.SendContactRequest](docs/SendContactRequest.md)
 - [ChatApiSdk.SendFileRequest](docs/SendFileRequest.md)
 - [ChatApiSdk.SendLinkRequest](docs/SendLinkRequest.md)
 - [ChatApiSdk.SendLocationRequest](docs/SendLocationRequest.md)
 - [ChatApiSdk.SendMessageRequest](docs/SendMessageRequest.md)
 - [ChatApiSdk.SendMessageStatus](docs/SendMessageStatus.md)
 - [ChatApiSdk.SendPTTRequest](docs/SendPTTRequest.md)
 - [ChatApiSdk.SendVCardRequest](docs/SendVCardRequest.md)
 - [ChatApiSdk.SetWebhookStatus](docs/SetWebhookStatus.md)
 - [ChatApiSdk.Settings](docs/Settings.md)
 - [ChatApiSdk.Status](docs/Status.md)
 - [ChatApiSdk.Statuses](docs/Statuses.md)
 - [ChatApiSdk.WebhookStatus](docs/WebhookStatus.md)
 - [ChatApiSdk.WebhookUrl](docs/WebhookUrl.md)


## Documentation for Authorization



### instanceId


- **Type**: API key
- **API key parameter name**: instanceId
- **Location**: URL query string



### token


- **Type**: API key
- **API key parameter name**: token
- **Location**: URL query string


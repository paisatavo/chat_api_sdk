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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChatApiSdk);
  }
}(this, function(expect, ChatApiSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChatApiSdk.SendFileRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SendFileRequest', function() {
    it('should create an instance of SendFileRequest', function() {
      // uncomment below and update the code to test SendFileRequest
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be.a(ChatApiSdk.SendFileRequest);
    });

    it('should have the property chatId (base name: "chatId")', function() {
      // uncomment below and update the code to test the property chatId
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be();
    });

    it('should have the property caption (base name: "caption")', function() {
      // uncomment below and update the code to test the property caption
      //var instane = new ChatApiSdk.SendFileRequest();
      //expect(instance).to.be();
    });

  });

}));

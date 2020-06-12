/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.ParcelAccount();
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

  describe('ParcelAccount', function() {
    it('should create an instance of ParcelAccount', function() {
      // uncomment below and update the code to test ParcelAccount
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be.a(infoplus.ParcelAccount);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property carrierCompany (base name: "carrierCompany")', function() {
      // uncomment below and update the code to test the property carrierCompany
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property ipcDatabaseId (base name: "ipcDatabaseId")', function() {
      // uncomment below and update the code to test the property ipcDatabaseId
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property manifestPartnerId (base name: "manifestPartnerId")', function() {
      // uncomment below and update the code to test the property manifestPartnerId
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property manifestPartnerCredentials (base name: "manifestPartnerCredentials")', function() {
      // uncomment below and update the code to test the property manifestPartnerCredentials
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ParcelAccount();
      //expect(instance).to.be();
    });

  });

}));

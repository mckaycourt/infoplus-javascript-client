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
    instance = new infoplus.ItemSerial();
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

  describe('ItemSerial', function() {
    it('should create an instance of ItemSerial', function() {
      // uncomment below and update the code to test ItemSerial
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be.a(infoplus.ItemSerial);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property skuId (base name: "skuId")', function() {
      // uncomment below and update the code to test the property skuId
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property itemReceiptId (base name: "itemReceiptId")', function() {
      // uncomment below and update the code to test the property itemReceiptId
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property asnId (base name: "asnId")', function() {
      // uncomment below and update the code to test the property asnId
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property serial (base name: "serial")', function() {
      // uncomment below and update the code to test the property serial
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property receivedDate (base name: "receivedDate")', function() {
      // uncomment below and update the code to test the property receivedDate
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property shippedDate (base name: "shippedDate")', function() {
      // uncomment below and update the code to test the property shippedDate
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property orderNoId (base name: "orderNoId")', function() {
      // uncomment below and update the code to test the property orderNoId
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property inInventory (base name: "inInventory")', function() {
      // uncomment below and update the code to test the property inInventory
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s0 (base name: "s0")', function() {
      // uncomment below and update the code to test the property s0
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s1 (base name: "s1")', function() {
      // uncomment below and update the code to test the property s1
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s2 (base name: "s2")', function() {
      // uncomment below and update the code to test the property s2
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s3 (base name: "s3")', function() {
      // uncomment below and update the code to test the property s3
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s4 (base name: "s4")', function() {
      // uncomment below and update the code to test the property s4
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s5 (base name: "s5")', function() {
      // uncomment below and update the code to test the property s5
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s6 (base name: "s6")', function() {
      // uncomment below and update the code to test the property s6
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s7 (base name: "s7")', function() {
      // uncomment below and update the code to test the property s7
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s8 (base name: "s8")', function() {
      // uncomment below and update the code to test the property s8
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s9 (base name: "s9")', function() {
      // uncomment below and update the code to test the property s9
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s10 (base name: "s10")', function() {
      // uncomment below and update the code to test the property s10
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s11 (base name: "s11")', function() {
      // uncomment below and update the code to test the property s11
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s12 (base name: "s12")', function() {
      // uncomment below and update the code to test the property s12
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s13 (base name: "s13")', function() {
      // uncomment below and update the code to test the property s13
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s14 (base name: "s14")', function() {
      // uncomment below and update the code to test the property s14
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s15 (base name: "s15")', function() {
      // uncomment below and update the code to test the property s15
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s16 (base name: "s16")', function() {
      // uncomment below and update the code to test the property s16
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s17 (base name: "s17")', function() {
      // uncomment below and update the code to test the property s17
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s18 (base name: "s18")', function() {
      // uncomment below and update the code to test the property s18
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property s19 (base name: "s19")', function() {
      // uncomment below and update the code to test the property s19
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ItemSerial();
      //expect(instance).to.be();
    });

  });

}));

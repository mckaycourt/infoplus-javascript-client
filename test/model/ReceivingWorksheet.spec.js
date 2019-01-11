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
    instance = new infoplus.ReceivingWorksheet();
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

  describe('ReceivingWorksheet', function() {
    it('should create an instance of ReceivingWorksheet', function() {
      // uncomment below and update the code to test ReceivingWorksheet
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be.a(infoplus.ReceivingWorksheet);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property poNoId (base name: "poNoId")', function() {
      // uncomment below and update the code to test the property poNoId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendorId")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property serviceLevel (base name: "serviceLevel")', function() {
      // uncomment below and update the code to test the property serviceLevel
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property receivingProcessId (base name: "receivingProcessId")', function() {
      // uncomment below and update the code to test the property receivingProcessId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property dockDate (base name: "dockDate")', function() {
      // uncomment below and update the code to test the property dockDate
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property worksheetName (base name: "worksheetName")', function() {
      // uncomment below and update the code to test the property worksheetName
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property onTheDock (base name: "onTheDock")', function() {
      // uncomment below and update the code to test the property onTheDock
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property autoCommit (base name: "autoCommit")', function() {
      // uncomment below and update the code to test the property autoCommit
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property lineItems (base name: "lineItems")', function() {
      // uncomment below and update the code to test the property lineItems
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property workBatchId (base name: "workBatchId")', function() {
      // uncomment below and update the code to test the property workBatchId
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.ReceivingWorksheet();
      //expect(instance).to.be();
    });

  });

}));

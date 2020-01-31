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
    instance = new infoplus.OrderSourceStockStatus();
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

  describe('OrderSourceStockStatus', function() {
    it('should create an instance of OrderSourceStockStatus', function() {
      // uncomment below and update the code to test OrderSourceStockStatus
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be.a(infoplus.OrderSourceStockStatus);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property orderSourceId (base name: "orderSourceId")', function() {
      // uncomment below and update the code to test the property orderSourceId
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property totalReservedQuantity (base name: "totalReservedQuantity")', function() {
      // uncomment below and update the code to test the property totalReservedQuantity
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property demand (base name: "demand")', function() {
      // uncomment below and update the code to test the property demand
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property reservedQuantity (base name: "reservedQuantity")', function() {
      // uncomment below and update the code to test the property reservedQuantity
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property quantityAvailable (base name: "quantityAvailable")', function() {
      // uncomment below and update the code to test the property quantityAvailable
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property orderableQuantity (base name: "orderableQuantity")', function() {
      // uncomment below and update the code to test the property orderableQuantity
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property unreservedQuantityAvailable (base name: "unreservedQuantityAvailable")', function() {
      // uncomment below and update the code to test the property unreservedQuantityAvailable
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property netReservation (base name: "netReservation")', function() {
      // uncomment below and update the code to test the property netReservation
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.OrderSourceStockStatus();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new infoplus.Carton();
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

  describe('Carton', function() {
    it('should create an instance of Carton', function() {
      // uncomment below and update the code to test Carton
      //var instane = new infoplus.Carton();
      //expect(instance).to.be.a(infoplus.Carton);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property orderNo (base name: "orderNo")', function() {
      // uncomment below and update the code to test the property orderNo
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property cartonNo (base name: "cartonNo")', function() {
      // uncomment below and update the code to test the property cartonNo
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property cartonTypeId (base name: "cartonTypeId")', function() {
      // uncomment below and update the code to test the property cartonTypeId
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property cartonLPN (base name: "cartonLPN")', function() {
      // uncomment below and update the code to test the property cartonLPN
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property weightLbs (base name: "weightLbs")', function() {
      // uncomment below and update the code to test the property weightLbs
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property layoutPosition (base name: "layoutPosition")', function() {
      // uncomment below and update the code to test the property layoutPosition
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.Carton();
      //expect(instance).to.be();
    });

  });

}));

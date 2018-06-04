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
    instance = new infoplus.ReplenishmentProcessApi();
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

  describe('ReplenishmentProcessApi', function() {
    describe('addReplenishmentProcessAudit', function() {
      it('should call addReplenishmentProcessAudit successfully', function(done) {
        //uncomment below and update the code to test addReplenishmentProcessAudit
        //instance.addReplenishmentProcessAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addReplenishmentProcessTag', function() {
      it('should call addReplenishmentProcessTag successfully', function(done) {
        //uncomment below and update the code to test addReplenishmentProcessTag
        //instance.addReplenishmentProcessTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReplenishmentProcessTag', function() {
      it('should call deleteReplenishmentProcessTag successfully', function(done) {
        //uncomment below and update the code to test deleteReplenishmentProcessTag
        //instance.deleteReplenishmentProcessTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateReplenishmentProcessById', function() {
      it('should call getDuplicateReplenishmentProcessById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateReplenishmentProcessById
        //instance.getDuplicateReplenishmentProcessById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentProcessByFilter', function() {
      it('should call getReplenishmentProcessByFilter successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentProcessByFilter
        //instance.getReplenishmentProcessByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentProcessById', function() {
      it('should call getReplenishmentProcessById successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentProcessById
        //instance.getReplenishmentProcessById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplenishmentProcessTags', function() {
      it('should call getReplenishmentProcessTags successfully', function(done) {
        //uncomment below and update the code to test getReplenishmentProcessTags
        //instance.getReplenishmentProcessTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReplenishmentProcessCustomFields', function() {
      it('should call updateReplenishmentProcessCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateReplenishmentProcessCustomFields
        //instance.updateReplenishmentProcessCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

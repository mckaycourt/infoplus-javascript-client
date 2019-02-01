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
    instance = new infoplus.WarehouseApi();
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

  describe('WarehouseApi', function() {
    describe('addWarehouseAudit', function() {
      it('should call addWarehouseAudit successfully', function(done) {
        //uncomment below and update the code to test addWarehouseAudit
        //instance.addWarehouseAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWarehouseTag', function() {
      it('should call addWarehouseTag successfully', function(done) {
        //uncomment below and update the code to test addWarehouseTag
        //instance.addWarehouseTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWarehouseTag', function() {
      it('should call deleteWarehouseTag successfully', function(done) {
        //uncomment below and update the code to test deleteWarehouseTag
        //instance.deleteWarehouseTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateWarehouseById', function() {
      it('should call getDuplicateWarehouseById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateWarehouseById
        //instance.getDuplicateWarehouseById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseByFilter', function() {
      it('should call getWarehouseByFilter successfully', function(done) {
        //uncomment below and update the code to test getWarehouseByFilter
        //instance.getWarehouseByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseById', function() {
      it('should call getWarehouseById successfully', function(done) {
        //uncomment below and update the code to test getWarehouseById
        //instance.getWarehouseById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWarehouseTags', function() {
      it('should call getWarehouseTags successfully', function(done) {
        //uncomment below and update the code to test getWarehouseTags
        //instance.getWarehouseTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWarehouse', function() {
      it('should call updateWarehouse successfully', function(done) {
        //uncomment below and update the code to test updateWarehouse
        //instance.updateWarehouse(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWarehouseCustomFields', function() {
      it('should call updateWarehouseCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateWarehouseCustomFields
        //instance.updateWarehouseCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

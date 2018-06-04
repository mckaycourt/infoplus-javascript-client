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
    instance = new infoplus.CustomerApi();
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

  describe('CustomerApi', function() {
    describe('addCustomer', function() {
      it('should call addCustomer successfully', function(done) {
        //uncomment below and update the code to test addCustomer
        //instance.addCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomerAudit', function() {
      it('should call addCustomerAudit successfully', function(done) {
        //uncomment below and update the code to test addCustomerAudit
        //instance.addCustomerAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCustomerTag', function() {
      it('should call addCustomerTag successfully', function(done) {
        //uncomment below and update the code to test addCustomerTag
        //instance.addCustomerTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomer', function() {
      it('should call deleteCustomer successfully', function(done) {
        //uncomment below and update the code to test deleteCustomer
        //instance.deleteCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerTag', function() {
      it('should call deleteCustomerTag successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerTag
        //instance.deleteCustomerTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getByCustomerNo', function() {
      it('should call getByCustomerNo successfully', function(done) {
        //uncomment below and update the code to test getByCustomerNo
        //instance.getByCustomerNo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerByFilter', function() {
      it('should call getCustomerByFilter successfully', function(done) {
        //uncomment below and update the code to test getCustomerByFilter
        //instance.getCustomerByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerById', function() {
      it('should call getCustomerById successfully', function(done) {
        //uncomment below and update the code to test getCustomerById
        //instance.getCustomerById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerTags', function() {
      it('should call getCustomerTags successfully', function(done) {
        //uncomment below and update the code to test getCustomerTags
        //instance.getCustomerTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCustomerById', function() {
      it('should call getDuplicateCustomerById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCustomerById
        //instance.getDuplicateCustomerById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomer', function() {
      it('should call updateCustomer successfully', function(done) {
        //uncomment below and update the code to test updateCustomer
        //instance.updateCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomerCustomFields', function() {
      it('should call updateCustomerCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateCustomerCustomFields
        //instance.updateCustomerCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

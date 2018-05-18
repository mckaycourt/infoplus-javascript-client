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
    instance = new infoplus.BillingCodeActivityApi();
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

  describe('BillingCodeActivityApi', function() {
    describe('addBillingCodeActivity', function() {
      it('should call addBillingCodeActivity successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeActivity
        //instance.addBillingCodeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBillingCodeActivityAudit', function() {
      it('should call addBillingCodeActivityAudit successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeActivityAudit
        //instance.addBillingCodeActivityAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBillingCodeActivityTag', function() {
      it('should call addBillingCodeActivityTag successfully', function(done) {
        //uncomment below and update the code to test addBillingCodeActivityTag
        //instance.addBillingCodeActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBillingCodeActivity', function() {
      it('should call deleteBillingCodeActivity successfully', function(done) {
        //uncomment below and update the code to test deleteBillingCodeActivity
        //instance.deleteBillingCodeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBillingCodeActivityTag', function() {
      it('should call deleteBillingCodeActivityTag successfully', function(done) {
        //uncomment below and update the code to test deleteBillingCodeActivityTag
        //instance.deleteBillingCodeActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeActivityByFilter', function() {
      it('should call getBillingCodeActivityByFilter successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeActivityByFilter
        //instance.getBillingCodeActivityByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeActivityById', function() {
      it('should call getBillingCodeActivityById successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeActivityById
        //instance.getBillingCodeActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillingCodeActivityTags', function() {
      it('should call getBillingCodeActivityTags successfully', function(done) {
        //uncomment below and update the code to test getBillingCodeActivityTags
        //instance.getBillingCodeActivityTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateBillingCodeActivityById', function() {
      it('should call getDuplicateBillingCodeActivityById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateBillingCodeActivityById
        //instance.getDuplicateBillingCodeActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBillingCodeActivity', function() {
      it('should call updateBillingCodeActivity successfully', function(done) {
        //uncomment below and update the code to test updateBillingCodeActivity
        //instance.updateBillingCodeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

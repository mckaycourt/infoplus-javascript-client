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
    instance = new infoplus.FulfillmentLayoutPositionApi();
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

  describe('FulfillmentLayoutPositionApi', function() {
    describe('addFulfillmentLayoutPositionAudit', function() {
      it('should call addFulfillmentLayoutPositionAudit successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentLayoutPositionAudit
        //instance.addFulfillmentLayoutPositionAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFulfillmentLayoutPositionFile', function() {
      it('should call addFulfillmentLayoutPositionFile successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentLayoutPositionFile
        //instance.addFulfillmentLayoutPositionFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFulfillmentLayoutPositionFileByURL', function() {
      it('should call addFulfillmentLayoutPositionFileByURL successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentLayoutPositionFileByURL
        //instance.addFulfillmentLayoutPositionFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFulfillmentLayoutPositionTag', function() {
      it('should call addFulfillmentLayoutPositionTag successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentLayoutPositionTag
        //instance.addFulfillmentLayoutPositionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFulfillmentLayoutPositionFile', function() {
      it('should call deleteFulfillmentLayoutPositionFile successfully', function(done) {
        //uncomment below and update the code to test deleteFulfillmentLayoutPositionFile
        //instance.deleteFulfillmentLayoutPositionFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFulfillmentLayoutPositionTag', function() {
      it('should call deleteFulfillmentLayoutPositionTag successfully', function(done) {
        //uncomment below and update the code to test deleteFulfillmentLayoutPositionTag
        //instance.deleteFulfillmentLayoutPositionTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateFulfillmentLayoutPositionById', function() {
      it('should call getDuplicateFulfillmentLayoutPositionById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateFulfillmentLayoutPositionById
        //instance.getDuplicateFulfillmentLayoutPositionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentLayoutPositionByFilter', function() {
      it('should call getFulfillmentLayoutPositionByFilter successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentLayoutPositionByFilter
        //instance.getFulfillmentLayoutPositionByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentLayoutPositionById', function() {
      it('should call getFulfillmentLayoutPositionById successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentLayoutPositionById
        //instance.getFulfillmentLayoutPositionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentLayoutPositionFiles', function() {
      it('should call getFulfillmentLayoutPositionFiles successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentLayoutPositionFiles
        //instance.getFulfillmentLayoutPositionFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentLayoutPositionTags', function() {
      it('should call getFulfillmentLayoutPositionTags successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentLayoutPositionTags
        //instance.getFulfillmentLayoutPositionTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

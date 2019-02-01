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
    instance = new infoplus.JobTimeActivityApi();
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

  describe('JobTimeActivityApi', function() {
    describe('addJobTimeActivity', function() {
      it('should call addJobTimeActivity successfully', function(done) {
        //uncomment below and update the code to test addJobTimeActivity
        //instance.addJobTimeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobTimeActivityAudit', function() {
      it('should call addJobTimeActivityAudit successfully', function(done) {
        //uncomment below and update the code to test addJobTimeActivityAudit
        //instance.addJobTimeActivityAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addJobTimeActivityTag', function() {
      it('should call addJobTimeActivityTag successfully', function(done) {
        //uncomment below and update the code to test addJobTimeActivityTag
        //instance.addJobTimeActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobTimeActivity', function() {
      it('should call deleteJobTimeActivity successfully', function(done) {
        //uncomment below and update the code to test deleteJobTimeActivity
        //instance.deleteJobTimeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobTimeActivityTag', function() {
      it('should call deleteJobTimeActivityTag successfully', function(done) {
        //uncomment below and update the code to test deleteJobTimeActivityTag
        //instance.deleteJobTimeActivityTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateJobTimeActivityById', function() {
      it('should call getDuplicateJobTimeActivityById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateJobTimeActivityById
        //instance.getDuplicateJobTimeActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeActivityByFilter', function() {
      it('should call getJobTimeActivityByFilter successfully', function(done) {
        //uncomment below and update the code to test getJobTimeActivityByFilter
        //instance.getJobTimeActivityByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeActivityById', function() {
      it('should call getJobTimeActivityById successfully', function(done) {
        //uncomment below and update the code to test getJobTimeActivityById
        //instance.getJobTimeActivityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobTimeActivityTags', function() {
      it('should call getJobTimeActivityTags successfully', function(done) {
        //uncomment below and update the code to test getJobTimeActivityTags
        //instance.getJobTimeActivityTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobTimeActivity', function() {
      it('should call updateJobTimeActivity successfully', function(done) {
        //uncomment below and update the code to test updateJobTimeActivity
        //instance.updateJobTimeActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

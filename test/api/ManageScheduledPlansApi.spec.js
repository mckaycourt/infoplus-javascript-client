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
    instance = new infoplus.ManageScheduledPlansApi();
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

  describe('ManageScheduledPlansApi', function() {
    describe('addManageScheduledPlans', function() {
      it('should call addManageScheduledPlans successfully', function(done) {
        //uncomment below and update the code to test addManageScheduledPlans
        //instance.addManageScheduledPlans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addManageScheduledPlansAudit', function() {
      it('should call addManageScheduledPlansAudit successfully', function(done) {
        //uncomment below and update the code to test addManageScheduledPlansAudit
        //instance.addManageScheduledPlansAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addManageScheduledPlansTag', function() {
      it('should call addManageScheduledPlansTag successfully', function(done) {
        //uncomment below and update the code to test addManageScheduledPlansTag
        //instance.addManageScheduledPlansTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteManageScheduledPlans', function() {
      it('should call deleteManageScheduledPlans successfully', function(done) {
        //uncomment below and update the code to test deleteManageScheduledPlans
        //instance.deleteManageScheduledPlans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteManageScheduledPlansTag', function() {
      it('should call deleteManageScheduledPlansTag successfully', function(done) {
        //uncomment below and update the code to test deleteManageScheduledPlansTag
        //instance.deleteManageScheduledPlansTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateManageScheduledPlansById', function() {
      it('should call getDuplicateManageScheduledPlansById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateManageScheduledPlansById
        //instance.getDuplicateManageScheduledPlansById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManageScheduledPlansByFilter', function() {
      it('should call getManageScheduledPlansByFilter successfully', function(done) {
        //uncomment below and update the code to test getManageScheduledPlansByFilter
        //instance.getManageScheduledPlansByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManageScheduledPlansById', function() {
      it('should call getManageScheduledPlansById successfully', function(done) {
        //uncomment below and update the code to test getManageScheduledPlansById
        //instance.getManageScheduledPlansById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManageScheduledPlansTags', function() {
      it('should call getManageScheduledPlansTags successfully', function(done) {
        //uncomment below and update the code to test getManageScheduledPlansTags
        //instance.getManageScheduledPlansTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateManageScheduledPlans', function() {
      it('should call updateManageScheduledPlans successfully', function(done) {
        //uncomment below and update the code to test updateManageScheduledPlans
        //instance.updateManageScheduledPlans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

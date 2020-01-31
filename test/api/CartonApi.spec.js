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
    instance = new infoplus.CartonApi();
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

  describe('CartonApi', function() {
    describe('addCarton', function() {
      it('should call addCarton successfully', function(done) {
        //uncomment below and update the code to test addCarton
        //instance.addCarton(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonAudit', function() {
      it('should call addCartonAudit successfully', function(done) {
        //uncomment below and update the code to test addCartonAudit
        //instance.addCartonAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonFile', function() {
      it('should call addCartonFile successfully', function(done) {
        //uncomment below and update the code to test addCartonFile
        //instance.addCartonFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonFileByURL', function() {
      it('should call addCartonFileByURL successfully', function(done) {
        //uncomment below and update the code to test addCartonFileByURL
        //instance.addCartonFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartonTag', function() {
      it('should call addCartonTag successfully', function(done) {
        //uncomment below and update the code to test addCartonTag
        //instance.addCartonTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCarton', function() {
      it('should call deleteCarton successfully', function(done) {
        //uncomment below and update the code to test deleteCarton
        //instance.deleteCarton(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartonFile', function() {
      it('should call deleteCartonFile successfully', function(done) {
        //uncomment below and update the code to test deleteCartonFile
        //instance.deleteCartonFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartonTag', function() {
      it('should call deleteCartonTag successfully', function(done) {
        //uncomment below and update the code to test deleteCartonTag
        //instance.deleteCartonTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonByFilter', function() {
      it('should call getCartonByFilter successfully', function(done) {
        //uncomment below and update the code to test getCartonByFilter
        //instance.getCartonByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonById', function() {
      it('should call getCartonById successfully', function(done) {
        //uncomment below and update the code to test getCartonById
        //instance.getCartonById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonFiles', function() {
      it('should call getCartonFiles successfully', function(done) {
        //uncomment below and update the code to test getCartonFiles
        //instance.getCartonFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartonTags', function() {
      it('should call getCartonTags successfully', function(done) {
        //uncomment below and update the code to test getCartonTags
        //instance.getCartonTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCartonById', function() {
      it('should call getDuplicateCartonById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCartonById
        //instance.getDuplicateCartonById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCarton', function() {
      it('should call updateCarton successfully', function(done) {
        //uncomment below and update the code to test updateCarton
        //instance.updateCarton(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCartonCustomFields', function() {
      it('should call updateCartonCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateCartonCustomFields
        //instance.updateCartonCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

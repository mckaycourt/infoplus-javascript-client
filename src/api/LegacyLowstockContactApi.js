(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LegacyLowstockContact', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LegacyLowstockContact'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.LegacyLowstockContactApi = factory(root.infoplus.ApiClient, root.infoplus.LegacyLowstockContact, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, LegacyLowstockContact, ApiResponse) {
  'use strict';

  /**
   * LegacyLowstockContact service.
   * @module api/LegacyLowstockContactApi
   * @version v2.0
   */

  /**
   * Constructs a new LegacyLowstockContactApi. 
   * @alias module:api/LegacyLowstockContactApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addLegacyLowstockContact operation.
     * @callback module:api/LegacyLowstockContactApi~addLegacyLowstockContactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyLowstockContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a legacyLowstockContact
     * Inserts a new legacyLowstockContact using the specified data.
     * @param {module:model/LegacyLowstockContact} body LegacyLowstockContact to be inserted.
     * @param {module:api/LegacyLowstockContactApi~addLegacyLowstockContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LegacyLowstockContact}
     */
    this.addLegacyLowstockContact = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addLegacyLowstockContact";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LegacyLowstockContact;

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLegacyLowstockContact operation.
     * @callback module:api/LegacyLowstockContactApi~deleteLegacyLowstockContactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a legacyLowstockContact
     * Deletes the legacyLowstockContact identified by the specified id.
     * @param {Integer} legacyLowstockContactId Id of the legacyLowstockContact to be deleted.
     * @param {module:api/LegacyLowstockContactApi~deleteLegacyLowstockContactCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLegacyLowstockContact = function(legacyLowstockContactId, callback) {
      var postBody = null;

      // verify the required parameter 'legacyLowstockContactId' is set
      if (legacyLowstockContactId == undefined || legacyLowstockContactId == null) {
        throw "Missing the required parameter 'legacyLowstockContactId' when calling deleteLegacyLowstockContact";
      }


      var pathParams = {
        'legacyLowstockContactId': legacyLowstockContactId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact/{legacyLowstockContactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateLegacyLowstockContactById operation.
     * @callback module:api/LegacyLowstockContactApi~getDuplicateLegacyLowstockContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyLowstockContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a legacyLowstockContact by id
     * Returns a duplicated legacyLowstockContact identified by the specified id.
     * @param {Integer} legacyLowstockContactId Id of the legacyLowstockContact to be duplicated.
     * @param {module:api/LegacyLowstockContactApi~getDuplicateLegacyLowstockContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LegacyLowstockContact}
     */
    this.getDuplicateLegacyLowstockContactById = function(legacyLowstockContactId, callback) {
      var postBody = null;

      // verify the required parameter 'legacyLowstockContactId' is set
      if (legacyLowstockContactId == undefined || legacyLowstockContactId == null) {
        throw "Missing the required parameter 'legacyLowstockContactId' when calling getDuplicateLegacyLowstockContactById";
      }


      var pathParams = {
        'legacyLowstockContactId': legacyLowstockContactId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LegacyLowstockContact;

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact/duplicate/{legacyLowstockContactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLegacyLowstockContactByFilter operation.
     * @callback module:api/LegacyLowstockContactApi~getLegacyLowstockContactByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LegacyLowstockContact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search legacyLowstockContacts by filter
     * Returns the list of legacyLowstockContacts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/LegacyLowstockContactApi~getLegacyLowstockContactByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LegacyLowstockContact>}
     */
    this.getLegacyLowstockContactByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LegacyLowstockContact];

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLegacyLowstockContactById operation.
     * @callback module:api/LegacyLowstockContactApi~getLegacyLowstockContactByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LegacyLowstockContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a legacyLowstockContact by id
     * Returns the legacyLowstockContact identified by the specified id.
     * @param {Integer} legacyLowstockContactId Id of the legacyLowstockContact to be returned.
     * @param {module:api/LegacyLowstockContactApi~getLegacyLowstockContactByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LegacyLowstockContact}
     */
    this.getLegacyLowstockContactById = function(legacyLowstockContactId, callback) {
      var postBody = null;

      // verify the required parameter 'legacyLowstockContactId' is set
      if (legacyLowstockContactId == undefined || legacyLowstockContactId == null) {
        throw "Missing the required parameter 'legacyLowstockContactId' when calling getLegacyLowstockContactById";
      }


      var pathParams = {
        'legacyLowstockContactId': legacyLowstockContactId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LegacyLowstockContact;

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact/{legacyLowstockContactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLegacyLowstockContact operation.
     * @callback module:api/LegacyLowstockContactApi~updateLegacyLowstockContactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a legacyLowstockContact
     * Updates an existing legacyLowstockContact using the specified data.
     * @param {module:model/LegacyLowstockContact} body LegacyLowstockContact to be updated.
     * @param {module:api/LegacyLowstockContactApi~updateLegacyLowstockContactCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLegacyLowstockContact = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLegacyLowstockContact";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2.0/legacyLowstockContact', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

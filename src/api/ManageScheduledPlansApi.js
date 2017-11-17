(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ApiResponse', '../model/ManageScheduledPlans'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/ManageScheduledPlans'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ManageScheduledPlansApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.ManageScheduledPlans);
  }
}(this, function(ApiClient, ApiResponse, ManageScheduledPlans) {
  'use strict';

  /**
   * ManageScheduledPlans service.
   * @module api/ManageScheduledPlansApi
   * @version v2.0
   */

  /**
   * Constructs a new ManageScheduledPlansApi. 
   * @alias module:api/ManageScheduledPlansApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addManageScheduledPlans operation.
     * @callback module:api/ManageScheduledPlansApi~addManageScheduledPlansCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManageScheduledPlans} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a manageScheduledPlans
     * Inserts a new manageScheduledPlans using the specified data.
     * @param {module:model/ManageScheduledPlans} body ManageScheduledPlans to be inserted.
     * @param {module:api/ManageScheduledPlansApi~addManageScheduledPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ManageScheduledPlans}
     */
    this.addManageScheduledPlans = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addManageScheduledPlans";
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
      var returnType = ManageScheduledPlans;

      return this.apiClient.callApi(
        '/v2.0/manageScheduledPlans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteManageScheduledPlans operation.
     * @callback module:api/ManageScheduledPlansApi~deleteManageScheduledPlansCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a manageScheduledPlans
     * Deletes the manageScheduledPlans identified by the specified id.
     * @param {Integer} manageScheduledPlansId Id of the manageScheduledPlans to be deleted.
     * @param {module:api/ManageScheduledPlansApi~deleteManageScheduledPlansCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteManageScheduledPlans = function(manageScheduledPlansId, callback) {
      var postBody = null;

      // verify the required parameter 'manageScheduledPlansId' is set
      if (manageScheduledPlansId == undefined || manageScheduledPlansId == null) {
        throw "Missing the required parameter 'manageScheduledPlansId' when calling deleteManageScheduledPlans";
      }


      var pathParams = {
        'manageScheduledPlansId': manageScheduledPlansId
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
        '/v2.0/manageScheduledPlans/{manageScheduledPlansId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateManageScheduledPlansById operation.
     * @callback module:api/ManageScheduledPlansApi~getDuplicateManageScheduledPlansByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManageScheduledPlans} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a manageScheduledPlans by id
     * Returns a duplicated manageScheduledPlans identified by the specified id.
     * @param {Integer} manageScheduledPlansId Id of the manageScheduledPlans to be duplicated.
     * @param {module:api/ManageScheduledPlansApi~getDuplicateManageScheduledPlansByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ManageScheduledPlans}
     */
    this.getDuplicateManageScheduledPlansById = function(manageScheduledPlansId, callback) {
      var postBody = null;

      // verify the required parameter 'manageScheduledPlansId' is set
      if (manageScheduledPlansId == undefined || manageScheduledPlansId == null) {
        throw "Missing the required parameter 'manageScheduledPlansId' when calling getDuplicateManageScheduledPlansById";
      }


      var pathParams = {
        'manageScheduledPlansId': manageScheduledPlansId
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
      var returnType = ManageScheduledPlans;

      return this.apiClient.callApi(
        '/v2.0/manageScheduledPlans/duplicate/{manageScheduledPlansId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManageScheduledPlansByFilter operation.
     * @callback module:api/ManageScheduledPlansApi~getManageScheduledPlansByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ManageScheduledPlans>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search manageScheduledPlanses by filter
     * Returns the list of manageScheduledPlanses that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ManageScheduledPlansApi~getManageScheduledPlansByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ManageScheduledPlans>}
     */
    this.getManageScheduledPlansByFilter = function(opts, callback) {
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
      var returnType = [ManageScheduledPlans];

      return this.apiClient.callApi(
        '/v2.0/manageScheduledPlans/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManageScheduledPlansById operation.
     * @callback module:api/ManageScheduledPlansApi~getManageScheduledPlansByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManageScheduledPlans} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a manageScheduledPlans by id
     * Returns the manageScheduledPlans identified by the specified id.
     * @param {Integer} manageScheduledPlansId Id of the manageScheduledPlans to be returned.
     * @param {module:api/ManageScheduledPlansApi~getManageScheduledPlansByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ManageScheduledPlans}
     */
    this.getManageScheduledPlansById = function(manageScheduledPlansId, callback) {
      var postBody = null;

      // verify the required parameter 'manageScheduledPlansId' is set
      if (manageScheduledPlansId == undefined || manageScheduledPlansId == null) {
        throw "Missing the required parameter 'manageScheduledPlansId' when calling getManageScheduledPlansById";
      }


      var pathParams = {
        'manageScheduledPlansId': manageScheduledPlansId
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
      var returnType = ManageScheduledPlans;

      return this.apiClient.callApi(
        '/v2.0/manageScheduledPlans/{manageScheduledPlansId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateManageScheduledPlans operation.
     * @callback module:api/ManageScheduledPlansApi~updateManageScheduledPlansCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a manageScheduledPlans
     * Updates an existing manageScheduledPlans using the specified data.
     * @param {module:model/ManageScheduledPlans} body ManageScheduledPlans to be updated.
     * @param {module:api/ManageScheduledPlansApi~updateManageScheduledPlansCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateManageScheduledPlans = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateManageScheduledPlans";
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
        '/v2.0/manageScheduledPlans', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

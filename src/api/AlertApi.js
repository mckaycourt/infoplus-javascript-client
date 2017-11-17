(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Alert'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Alert'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.AlertApi = factory(root.infoplus.ApiClient, root.infoplus.Alert);
  }
}(this, function(ApiClient, Alert) {
  'use strict';

  /**
   * Alert service.
   * @module api/AlertApi
   * @version v2.0
   */

  /**
   * Constructs a new AlertApi. 
   * @alias module:api/AlertApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAlertByFilter operation.
     * @callback module:api/AlertApi~getAlertByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Alert>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search alerts by filter
     * Returns the list of alerts that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/AlertApi~getAlertByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Alert>}
     */
    this.getAlertByFilter = function(opts, callback) {
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
      var returnType = [Alert];

      return this.apiClient.callApi(
        '/v2.0/alert/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlertById operation.
     * @callback module:api/AlertApi~getAlertByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alert} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an alert by id
     * Returns the alert identified by the specified id.
     * @param {Integer} alertId Id of the alert to be returned.
     * @param {module:api/AlertApi~getAlertByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Alert}
     */
    this.getAlertById = function(alertId, callback) {
      var postBody = null;

      // verify the required parameter 'alertId' is set
      if (alertId == undefined || alertId == null) {
        throw "Missing the required parameter 'alertId' when calling getAlertById";
      }


      var pathParams = {
        'alertId': alertId
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
      var returnType = Alert;

      return this.apiClient.callApi(
        '/v2.0/alert/{alertId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateAlertById operation.
     * @callback module:api/AlertApi~getDuplicateAlertByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Alert} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an alert by id
     * Returns a duplicated alert identified by the specified id.
     * @param {Integer} alertId Id of the alert to be duplicated.
     * @param {module:api/AlertApi~getDuplicateAlertByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Alert}
     */
    this.getDuplicateAlertById = function(alertId, callback) {
      var postBody = null;

      // verify the required parameter 'alertId' is set
      if (alertId == undefined || alertId == null) {
        throw "Missing the required parameter 'alertId' when calling getDuplicateAlertById";
      }


      var pathParams = {
        'alertId': alertId
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
      var returnType = Alert;

      return this.apiClient.callApi(
        '/v2.0/alert/duplicate/{alertId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAlertCustomFields operation.
     * @callback module:api/AlertApi~updateAlertCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an alert custom fields
     * Updates an existing alert custom fields using the specified data.
     * @param {module:model/Alert} body Alert to be updated.
     * @param {module:api/AlertApi~updateAlertCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAlertCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateAlertCustomFields";
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
        '/v2.0/alert/customFields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

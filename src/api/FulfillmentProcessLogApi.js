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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FulfillmentProcessLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentProcessLog'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentProcessLogApi = factory(root.infoplus.ApiClient, root.infoplus.FulfillmentProcessLog);
  }
}(this, function(ApiClient, FulfillmentProcessLog) {
  'use strict';

  /**
   * FulfillmentProcessLog service.
   * @module api/FulfillmentProcessLogApi
   * @version beta
   */

  /**
   * Constructs a new FulfillmentProcessLogApi. 
   * @alias module:api/FulfillmentProcessLogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFulfillmentProcessLogAudit operation.
     * @callback module:api/FulfillmentProcessLogApi~addFulfillmentProcessLogAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a fulfillmentProcessLog
     * Adds an audit to an existing fulfillmentProcessLog.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to add an audit to
     * @param {String} fulfillmentProcessLogAudit The audit to add
     * @param {module:api/FulfillmentProcessLogApi~addFulfillmentProcessLogAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentProcessLogAudit = function(fulfillmentProcessLogId, fulfillmentProcessLogAudit, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling addFulfillmentProcessLogAudit");
      }

      // verify the required parameter 'fulfillmentProcessLogAudit' is set
      if (fulfillmentProcessLogAudit === undefined || fulfillmentProcessLogAudit === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogAudit' when calling addFulfillmentProcessLogAudit");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId,
        'fulfillmentProcessLogAudit': fulfillmentProcessLogAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/audit/{fulfillmentProcessLogAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addFulfillmentProcessLogTag operation.
     * @callback module:api/FulfillmentProcessLogApi~addFulfillmentProcessLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a fulfillmentProcessLog.
     * Adds a tag to an existing fulfillmentProcessLog.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to add a tag to
     * @param {String} fulfillmentProcessLogTag The tag to add
     * @param {module:api/FulfillmentProcessLogApi~addFulfillmentProcessLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentProcessLogTag = function(fulfillmentProcessLogId, fulfillmentProcessLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling addFulfillmentProcessLogTag");
      }

      // verify the required parameter 'fulfillmentProcessLogTag' is set
      if (fulfillmentProcessLogTag === undefined || fulfillmentProcessLogTag === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogTag' when calling addFulfillmentProcessLogTag");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId,
        'fulfillmentProcessLogTag': fulfillmentProcessLogTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag/{fulfillmentProcessLogTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentProcessLogTag operation.
     * @callback module:api/FulfillmentProcessLogApi~deleteFulfillmentProcessLogTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a fulfillmentProcessLog.
     * Deletes an existing fulfillmentProcessLog tag using the specified data.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to remove tag from
     * @param {String} fulfillmentProcessLogTag The tag to delete
     * @param {module:api/FulfillmentProcessLogApi~deleteFulfillmentProcessLogTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentProcessLogTag = function(fulfillmentProcessLogId, fulfillmentProcessLogTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling deleteFulfillmentProcessLogTag");
      }

      // verify the required parameter 'fulfillmentProcessLogTag' is set
      if (fulfillmentProcessLogTag === undefined || fulfillmentProcessLogTag === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogTag' when calling deleteFulfillmentProcessLogTag");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId,
        'fulfillmentProcessLogTag': fulfillmentProcessLogTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag/{fulfillmentProcessLogTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateFulfillmentProcessLogById operation.
     * @callback module:api/FulfillmentProcessLogApi~getDuplicateFulfillmentProcessLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcessLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a fulfillmentProcessLog by id
     * Returns a duplicated fulfillmentProcessLog identified by the specified id.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to be duplicated.
     * @param {module:api/FulfillmentProcessLogApi~getDuplicateFulfillmentProcessLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentProcessLog}
     */
    this.getDuplicateFulfillmentProcessLogById = function(fulfillmentProcessLogId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling getDuplicateFulfillmentProcessLogById");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FulfillmentProcessLog;

      return this.apiClient.callApi(
        '/beta/fulfillmentProcessLog/duplicate/{fulfillmentProcessLogId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessLogByFilter operation.
     * @callback module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FulfillmentProcessLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search fulfillmentProcessLogs by filter
     * Returns the list of fulfillmentProcessLogs that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FulfillmentProcessLog>}
     */
    this.getFulfillmentProcessLogByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [FulfillmentProcessLog];

      return this.apiClient.callApi(
        '/beta/fulfillmentProcessLog/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessLogById operation.
     * @callback module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentProcessLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fulfillmentProcessLog by id
     * Returns the fulfillmentProcessLog identified by the specified id.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to be returned.
     * @param {module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentProcessLog}
     */
    this.getFulfillmentProcessLogById = function(fulfillmentProcessLogId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling getFulfillmentProcessLogById");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FulfillmentProcessLog;

      return this.apiClient.callApi(
        '/beta/fulfillmentProcessLog/{fulfillmentProcessLogId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentProcessLogTags operation.
     * @callback module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a fulfillmentProcessLog.
     * Get all existing fulfillmentProcessLog tags.
     * @param {Number} fulfillmentProcessLogId Id of the fulfillmentProcessLog to get tags for
     * @param {module:api/FulfillmentProcessLogApi~getFulfillmentProcessLogTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFulfillmentProcessLogTags = function(fulfillmentProcessLogId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentProcessLogId' is set
      if (fulfillmentProcessLogId === undefined || fulfillmentProcessLogId === null) {
        throw new Error("Missing the required parameter 'fulfillmentProcessLogId' when calling getFulfillmentProcessLogTags");
      }


      var pathParams = {
        'fulfillmentProcessLogId': fulfillmentProcessLogId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/beta/fulfillmentProcessLog/{fulfillmentProcessLogId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

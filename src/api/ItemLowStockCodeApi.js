(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ItemLowstockCode', '../model/ApiResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemLowstockCode'), require('../model/ApiResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ItemLowstockCodeApi = factory(root.infoplus.ApiClient, root.infoplus.ItemLowstockCode, root.infoplus.ApiResponse);
  }
}(this, function(ApiClient, ItemLowstockCode, ApiResponse) {
  'use strict';

  /**
   * ItemLowstockCode service.
   * @module api/ItemLowstockCodeApi
   * @version v2.0
   */

  /**
   * Constructs a new ItemLowstockCodeApi. 
   * @alias module:api/ItemLowstockCodeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemLowstockCode operation.
     * @callback module:api/ItemLowstockCodeApi~addItemLowstockCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemLowstockCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an itemLowstockCode
     * Inserts a new itemLowstockCode using the specified data.
     * @param {module:model/ItemLowstockCode} body ItemLowstockCode to be inserted.
     * @param {module:api/ItemLowstockCodeApi~addItemLowstockCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemLowstockCode}
     */
    this.addItemLowstockCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addItemLowstockCode";
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
      var returnType = ItemLowstockCode;

      return this.apiClient.callApi(
        '/v2.0/itemLowstockCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemLowstockCode operation.
     * @callback module:api/ItemLowstockCodeApi~deleteItemLowstockCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an itemLowstockCode
     * Deletes the itemLowstockCode identified by the specified id.
     * @param {Integer} itemLowstockCodeId Id of the itemLowstockCode to be deleted.
     * @param {module:api/ItemLowstockCodeApi~deleteItemLowstockCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemLowstockCode = function(itemLowstockCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemLowstockCodeId' is set
      if (itemLowstockCodeId == undefined || itemLowstockCodeId == null) {
        throw "Missing the required parameter 'itemLowstockCodeId' when calling deleteItemLowstockCode";
      }


      var pathParams = {
        'itemLowstockCodeId': itemLowstockCodeId
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
        '/v2.0/itemLowstockCode/{itemLowstockCodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateItemLowstockCodeById operation.
     * @callback module:api/ItemLowstockCodeApi~getDuplicateItemLowstockCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemLowstockCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an itemLowstockCode by id
     * Returns a duplicated itemLowstockCode identified by the specified id.
     * @param {Integer} itemLowstockCodeId Id of the itemLowstockCode to be duplicated.
     * @param {module:api/ItemLowstockCodeApi~getDuplicateItemLowstockCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemLowstockCode}
     */
    this.getDuplicateItemLowstockCodeById = function(itemLowstockCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemLowstockCodeId' is set
      if (itemLowstockCodeId == undefined || itemLowstockCodeId == null) {
        throw "Missing the required parameter 'itemLowstockCodeId' when calling getDuplicateItemLowstockCodeById";
      }


      var pathParams = {
        'itemLowstockCodeId': itemLowstockCodeId
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
      var returnType = ItemLowstockCode;

      return this.apiClient.callApi(
        '/v2.0/itemLowstockCode/duplicate/{itemLowstockCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemLowstockCodeByFilter operation.
     * @callback module:api/ItemLowstockCodeApi~getItemLowstockCodeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemLowstockCode>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search itemLowstockCodes by filter
     * Returns the list of itemLowstockCodes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/ItemLowstockCodeApi~getItemLowstockCodeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ItemLowstockCode>}
     */
    this.getItemLowstockCodeByFilter = function(opts, callback) {
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
      var returnType = [ItemLowstockCode];

      return this.apiClient.callApi(
        '/v2.0/itemLowstockCode/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemLowstockCodeById operation.
     * @callback module:api/ItemLowstockCodeApi~getItemLowstockCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemLowstockCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an itemLowstockCode by id
     * Returns the itemLowstockCode identified by the specified id.
     * @param {Integer} itemLowstockCodeId Id of the itemLowstockCode to be returned.
     * @param {module:api/ItemLowstockCodeApi~getItemLowstockCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ItemLowstockCode}
     */
    this.getItemLowstockCodeById = function(itemLowstockCodeId, callback) {
      var postBody = null;

      // verify the required parameter 'itemLowstockCodeId' is set
      if (itemLowstockCodeId == undefined || itemLowstockCodeId == null) {
        throw "Missing the required parameter 'itemLowstockCodeId' when calling getItemLowstockCodeById";
      }


      var pathParams = {
        'itemLowstockCodeId': itemLowstockCodeId
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
      var returnType = ItemLowstockCode;

      return this.apiClient.callApi(
        '/v2.0/itemLowstockCode/{itemLowstockCodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemLowstockCode operation.
     * @callback module:api/ItemLowstockCodeApi~updateItemLowstockCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an itemLowstockCode
     * Updates an existing itemLowstockCode using the specified data.
     * @param {module:model/ItemLowstockCode} body ItemLowstockCode to be updated.
     * @param {module:api/ItemLowstockCodeApi~updateItemLowstockCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateItemLowstockCode = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateItemLowstockCode";
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
        '/v2.0/itemLowstockCode', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

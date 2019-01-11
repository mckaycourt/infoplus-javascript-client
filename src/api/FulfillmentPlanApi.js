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
    define(['ApiClient', 'model/ApiResponse', 'model/FulfillmentPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/FulfillmentPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.FulfillmentPlanApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.FulfillmentPlan);
  }
}(this, function(ApiClient, ApiResponse, FulfillmentPlan) {
  'use strict';

  /**
   * FulfillmentPlan service.
   * @module api/FulfillmentPlanApi
   * @version beta
   */

  /**
   * Constructs a new FulfillmentPlanApi. 
   * @alias module:api/FulfillmentPlanApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~addFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a fulfillmentPlan
     * Inserts a new fulfillmentPlan using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be inserted.
     * @param {module:api/FulfillmentPlanApi~addFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentPlan}
     */
    this.addFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addFulfillmentPlan");
      }


      var pathParams = {
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/beta/fulfillmentPlan', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addFulfillmentPlanAudit operation.
     * @callback module:api/FulfillmentPlanApi~addFulfillmentPlanAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a fulfillmentPlan
     * Adds an audit to an existing fulfillmentPlan.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to add an audit to
     * @param {String} fulfillmentPlanAudit The audit to add
     * @param {module:api/FulfillmentPlanApi~addFulfillmentPlanAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentPlanAudit = function(fulfillmentPlanId, fulfillmentPlanAudit, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling addFulfillmentPlanAudit");
      }

      // verify the required parameter 'fulfillmentPlanAudit' is set
      if (fulfillmentPlanAudit === undefined || fulfillmentPlanAudit === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanAudit' when calling addFulfillmentPlanAudit");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId,
        'fulfillmentPlanAudit': fulfillmentPlanAudit
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
        '/beta/fulfillmentPlan/{fulfillmentPlanId}/audit/{fulfillmentPlanAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addFulfillmentPlanTag operation.
     * @callback module:api/FulfillmentPlanApi~addFulfillmentPlanTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a fulfillmentPlan.
     * Adds a tag to an existing fulfillmentPlan.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to add a tag to
     * @param {String} fulfillmentPlanTag The tag to add
     * @param {module:api/FulfillmentPlanApi~addFulfillmentPlanTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFulfillmentPlanTag = function(fulfillmentPlanId, fulfillmentPlanTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling addFulfillmentPlanTag");
      }

      // verify the required parameter 'fulfillmentPlanTag' is set
      if (fulfillmentPlanTag === undefined || fulfillmentPlanTag === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanTag' when calling addFulfillmentPlanTag");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId,
        'fulfillmentPlanTag': fulfillmentPlanTag
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
        '/beta/fulfillmentPlan/{fulfillmentPlanId}/tag/{fulfillmentPlanTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~deleteFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a fulfillmentPlan
     * Deletes the fulfillmentPlan identified by the specified id.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to be deleted.
     * @param {module:api/FulfillmentPlanApi~deleteFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentPlan = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling deleteFulfillmentPlan");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
        '/beta/fulfillmentPlan/{fulfillmentPlanId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentPlanTag operation.
     * @callback module:api/FulfillmentPlanApi~deleteFulfillmentPlanTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a fulfillmentPlan.
     * Deletes an existing fulfillmentPlan tag using the specified data.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to remove tag from
     * @param {String} fulfillmentPlanTag The tag to delete
     * @param {module:api/FulfillmentPlanApi~deleteFulfillmentPlanTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentPlanTag = function(fulfillmentPlanId, fulfillmentPlanTag, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling deleteFulfillmentPlanTag");
      }

      // verify the required parameter 'fulfillmentPlanTag' is set
      if (fulfillmentPlanTag === undefined || fulfillmentPlanTag === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanTag' when calling deleteFulfillmentPlanTag");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId,
        'fulfillmentPlanTag': fulfillmentPlanTag
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
        '/beta/fulfillmentPlan/{fulfillmentPlanId}/tag/{fulfillmentPlanTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateFulfillmentPlanById operation.
     * @callback module:api/FulfillmentPlanApi~getDuplicateFulfillmentPlanByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a fulfillmentPlan by id
     * Returns a duplicated fulfillmentPlan identified by the specified id.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to be duplicated.
     * @param {module:api/FulfillmentPlanApi~getDuplicateFulfillmentPlanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentPlan}
     */
    this.getDuplicateFulfillmentPlanById = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling getDuplicateFulfillmentPlanById");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/beta/fulfillmentPlan/duplicate/{fulfillmentPlanId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentPlanByFilter operation.
     * @callback module:api/FulfillmentPlanApi~getFulfillmentPlanByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FulfillmentPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search fulfillmentPlans by filter
     * Returns the list of fulfillmentPlans that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/FulfillmentPlanApi~getFulfillmentPlanByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FulfillmentPlan>}
     */
    this.getFulfillmentPlanByFilter = function(opts, callback) {
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
      var returnType = [FulfillmentPlan];

      return this.apiClient.callApi(
        '/beta/fulfillmentPlan/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentPlanById operation.
     * @callback module:api/FulfillmentPlanApi~getFulfillmentPlanByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a fulfillmentPlan by id
     * Returns the fulfillmentPlan identified by the specified id.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to be returned.
     * @param {module:api/FulfillmentPlanApi~getFulfillmentPlanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentPlan}
     */
    this.getFulfillmentPlanById = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling getFulfillmentPlanById");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
      var returnType = FulfillmentPlan;

      return this.apiClient.callApi(
        '/beta/fulfillmentPlan/{fulfillmentPlanId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentPlanTags operation.
     * @callback module:api/FulfillmentPlanApi~getFulfillmentPlanTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a fulfillmentPlan.
     * Get all existing fulfillmentPlan tags.
     * @param {Number} fulfillmentPlanId Id of the fulfillmentPlan to get tags for
     * @param {module:api/FulfillmentPlanApi~getFulfillmentPlanTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFulfillmentPlanTags = function(fulfillmentPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'fulfillmentPlanId' is set
      if (fulfillmentPlanId === undefined || fulfillmentPlanId === null) {
        throw new Error("Missing the required parameter 'fulfillmentPlanId' when calling getFulfillmentPlanTags");
      }


      var pathParams = {
        'fulfillmentPlanId': fulfillmentPlanId
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
        '/beta/fulfillmentPlan/{fulfillmentPlanId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentPlan operation.
     * @callback module:api/FulfillmentPlanApi~updateFulfillmentPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentPlan
     * Updates an existing fulfillmentPlan using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be updated.
     * @param {module:api/FulfillmentPlanApi~updateFulfillmentPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentPlan = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateFulfillmentPlan");
      }


      var pathParams = {
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
        '/beta/fulfillmentPlan', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentPlanCustomFields operation.
     * @callback module:api/FulfillmentPlanApi~updateFulfillmentPlanCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillmentPlan custom fields
     * Updates an existing fulfillmentPlan custom fields using the specified data.
     * @param {module:model/FulfillmentPlan} body FulfillmentPlan to be updated.
     * @param {module:api/FulfillmentPlanApi~updateFulfillmentPlanCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentPlanCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateFulfillmentPlanCustomFields");
      }


      var pathParams = {
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
        '/beta/fulfillmentPlan/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

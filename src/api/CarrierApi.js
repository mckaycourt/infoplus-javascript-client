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
    define(['ApiClient', 'model/Carrier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Carrier'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CarrierApi = factory(root.infoplus.ApiClient, root.infoplus.Carrier);
  }
}(this, function(ApiClient, Carrier) {
  'use strict';

  /**
   * Carrier service.
   * @module api/CarrierApi
   * @version beta
   */

  /**
   * Constructs a new CarrierApi. 
   * @alias module:api/CarrierApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCarrierById operation.
     * @callback module:api/CarrierApi~getCarrierByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Carrier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a carrier by id
     * Returns the carrier identified by the specified id.
     * @param {String} carrierId Id of carrier to be returned.
     * @param {module:api/CarrierApi~getCarrierByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Carrier}
     */
    this.getCarrierById = function(carrierId, callback) {
      var postBody = null;

      // verify the required parameter 'carrierId' is set
      if (carrierId === undefined || carrierId === null) {
        throw new Error("Missing the required parameter 'carrierId' when calling getCarrierById");
      }


      var pathParams = {
        'carrierId': carrierId
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
      var returnType = Carrier;

      return this.apiClient.callApi(
        '/beta/carrier/{carrierId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCarrierBySearchText operation.
     * @callback module:api/CarrierApi~getCarrierBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Carrier>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search carriers
     * Returns the list of carriers that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/CarrierApi~getCarrierBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Carrier>}
     */
    this.getCarrierBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit'],
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
      var returnType = [Carrier];

      return this.apiClient.callApi(
        '/beta/carrier/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CarrierService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CarrierService'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CarrierServiceApi = factory(root.infoplus.ApiClient, root.infoplus.CarrierService);
  }
}(this, function(ApiClient, CarrierService) {
  'use strict';

  /**
   * CarrierService service.
   * @module api/CarrierServiceApi
   * @version v2.0
   */

  /**
   * Constructs a new CarrierServiceApi. 
   * @alias module:api/CarrierServiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCarrierServiceById operation.
     * @callback module:api/CarrierServiceApi~getCarrierServiceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CarrierService} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a carrierService by id
     * Returns the carrierService identified by the specified id.
     * @param {String} carrierServiceId Id of carrierService to be returned.
     * @param {module:api/CarrierServiceApi~getCarrierServiceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CarrierService}
     */
    this.getCarrierServiceById = function(carrierServiceId, callback) {
      var postBody = null;

      // verify the required parameter 'carrierServiceId' is set
      if (carrierServiceId == undefined || carrierServiceId == null) {
        throw "Missing the required parameter 'carrierServiceId' when calling getCarrierServiceById";
      }


      var pathParams = {
        'carrierServiceId': carrierServiceId
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
      var returnType = CarrierService;

      return this.apiClient.callApi(
        '/v2.0/carrierService/{carrierServiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCarrierServiceBySearchText operation.
     * @callback module:api/CarrierServiceApi~getCarrierServiceBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CarrierService>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search carrierServices
     * Returns the list of carrierServices that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/CarrierServiceApi~getCarrierServiceBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CarrierService>}
     */
    this.getCarrierServiceBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CarrierService];

      return this.apiClient.callApi(
        '/v2.0/carrierService/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ParcelShipment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParcelShipment model module.
   * @module model/ParcelShipment
   * @version v2.0
   */

  /**
   * Constructs a new <code>ParcelShipment</code>.
   * @alias module:model/ParcelShipment
   * @class
   * @param warehouseId
   */
  var exports = function(warehouseId) {







    this['warehouseId'] = warehouseId;
























  };

  /**
   * Constructs a <code>ParcelShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParcelShipment} obj Optional instance to populate.
   * @return {module:model/ParcelShipment} The populated <code>ParcelShipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('shipDate')) {
        obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'Date');
      }
      if (data.hasOwnProperty('deliveredDate')) {
        obj['deliveredDate'] = ApiClient.convertToType(data['deliveredDate'], 'Date');
      }
      if (data.hasOwnProperty('trackingNo')) {
        obj['trackingNo'] = ApiClient.convertToType(data['trackingNo'], 'String');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('orderNo')) {
        obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'Number');
      }
      if (data.hasOwnProperty('cartonNo')) {
        obj['cartonNo'] = ApiClient.convertToType(data['cartonNo'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfCartons')) {
        obj['numberOfCartons'] = ApiClient.convertToType(data['numberOfCartons'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('shipped')) {
        obj['shipped'] = ApiClient.convertToType(data['shipped'], 'Boolean');
      }
      if (data.hasOwnProperty('carrierServiceId')) {
        obj['carrierServiceId'] = ApiClient.convertToType(data['carrierServiceId'], 'Integer');
      }
      if (data.hasOwnProperty('dim1In')) {
        obj['dim1In'] = ApiClient.convertToType(data['dim1In'], 'Number');
      }
      if (data.hasOwnProperty('dim2In')) {
        obj['dim2In'] = ApiClient.convertToType(data['dim2In'], 'Number');
      }
      if (data.hasOwnProperty('dim3In')) {
        obj['dim3In'] = ApiClient.convertToType(data['dim3In'], 'Number');
      }
      if (data.hasOwnProperty('estimatedZone')) {
        obj['estimatedZone'] = ApiClient.convertToType(data['estimatedZone'], 'String');
      }
      if (data.hasOwnProperty('parcelAccountNo')) {
        obj['parcelAccountNo'] = ApiClient.convertToType(data['parcelAccountNo'], 'String');
      }
      if (data.hasOwnProperty('thirdPartyParcelAccountNo')) {
        obj['thirdPartyParcelAccountNo'] = ApiClient.convertToType(data['thirdPartyParcelAccountNo'], 'String');
      }
      if (data.hasOwnProperty('manifestId')) {
        obj['manifestId'] = ApiClient.convertToType(data['manifestId'], 'Integer');
      }
      if (data.hasOwnProperty('residential')) {
        obj['residential'] = ApiClient.convertToType(data['residential'], 'Boolean');
      }
      if (data.hasOwnProperty('billingOption')) {
        obj['billingOption'] = ApiClient.convertToType(data['billingOption'], 'String');
      }
      if (data.hasOwnProperty('weightLbs')) {
        obj['weightLbs'] = ApiClient.convertToType(data['weightLbs'], 'Number');
      }
      if (data.hasOwnProperty('dimWeight')) {
        obj['dimWeight'] = ApiClient.convertToType(data['dimWeight'], 'Number');
      }
      if (data.hasOwnProperty('licensePlateNumber')) {
        obj['licensePlateNumber'] = ApiClient.convertToType(data['licensePlateNumber'], 'String');
      }
      if (data.hasOwnProperty('chargedFreightAmount')) {
        obj['chargedFreightAmount'] = ApiClient.convertToType(data['chargedFreightAmount'], 'Number');
      }
      if (data.hasOwnProperty('publishedFreightAmount')) {
        obj['publishedFreightAmount'] = ApiClient.convertToType(data['publishedFreightAmount'], 'Number');
      }
      if (data.hasOwnProperty('retailFreightAmount')) {
        obj['retailFreightAmount'] = ApiClient.convertToType(data['retailFreightAmount'], 'Number');
      }
      if (data.hasOwnProperty('externalShippingSystemId')) {
        obj['externalShippingSystemId'] = ApiClient.convertToType(data['externalShippingSystemId'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {Date} shipDate
   */
  exports.prototype['shipDate'] = undefined;

  /**
   * @member {Date} deliveredDate
   */
  exports.prototype['deliveredDate'] = undefined;

  /**
   * @member {String} trackingNo
   */
  exports.prototype['trackingNo'] = undefined;

  /**
   * @member {Integer} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {Number} orderNo
   */
  exports.prototype['orderNo'] = undefined;

  /**
   * @member {Integer} cartonNo
   */
  exports.prototype['cartonNo'] = undefined;

  /**
   * @member {Integer} numberOfCartons
   */
  exports.prototype['numberOfCartons'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Boolean} shipped
   * @default false
   */
  exports.prototype['shipped'] = false;

  /**
   * @member {Integer} carrierServiceId
   */
  exports.prototype['carrierServiceId'] = undefined;

  /**
   * @member {Number} dim1In
   */
  exports.prototype['dim1In'] = undefined;

  /**
   * @member {Number} dim2In
   */
  exports.prototype['dim2In'] = undefined;

  /**
   * @member {Number} dim3In
   */
  exports.prototype['dim3In'] = undefined;

  /**
   * @member {String} estimatedZone
   */
  exports.prototype['estimatedZone'] = undefined;

  /**
   * @member {String} parcelAccountNo
   */
  exports.prototype['parcelAccountNo'] = undefined;

  /**
   * @member {String} thirdPartyParcelAccountNo
   */
  exports.prototype['thirdPartyParcelAccountNo'] = undefined;

  /**
   * @member {Integer} manifestId
   */
  exports.prototype['manifestId'] = undefined;

  /**
   * @member {Boolean} residential
   * @default false
   */
  exports.prototype['residential'] = false;

  /**
   * @member {String} billingOption
   */
  exports.prototype['billingOption'] = undefined;

  /**
   * @member {Number} weightLbs
   */
  exports.prototype['weightLbs'] = undefined;

  /**
   * @member {Number} dimWeight
   */
  exports.prototype['dimWeight'] = undefined;

  /**
   * @member {String} licensePlateNumber
   */
  exports.prototype['licensePlateNumber'] = undefined;

  /**
   * @member {Number} chargedFreightAmount
   */
  exports.prototype['chargedFreightAmount'] = undefined;

  /**
   * @member {Number} publishedFreightAmount
   */
  exports.prototype['publishedFreightAmount'] = undefined;

  /**
   * @member {Number} retailFreightAmount
   */
  exports.prototype['retailFreightAmount'] = undefined;

  /**
   * @member {Integer} externalShippingSystemId
   */
  exports.prototype['externalShippingSystemId'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));

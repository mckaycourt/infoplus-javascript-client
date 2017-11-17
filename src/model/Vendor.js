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
    root.infoplus.Vendor = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Vendor model module.
   * @module model/Vendor
   * @version v2.0
   */

  /**
   * Constructs a new <code>Vendor</code>.
   * @alias module:model/Vendor
   * @class
   * @param vendorNo
   * @param lobId
   * @param name
   * @param street
   * @param city
   * @param state
   * @param zipCode
   * @param inactive
   */
  var exports = function(vendorNo, lobId, name, street, city, state, zipCode, inactive) {


    this['vendorNo'] = vendorNo;
    this['lobId'] = lobId;
    this['name'] = name;
    this['street'] = street;

    this['city'] = city;
    this['state'] = state;

    this['zipCode'] = zipCode;































    this['inactive'] = inactive;

  };

  /**
   * Constructs a <code>Vendor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vendor} obj Optional instance to populate.
   * @return {module:model/Vendor} The populated <code>Vendor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('vendorNo')) {
        obj['vendorNo'] = ApiClient.convertToType(data['vendorNo'], 'Integer');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('street2')) {
        obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
      }
      if (data.hasOwnProperty('fob')) {
        obj['fob'] = ApiClient.convertToType(data['fob'], 'String');
      }
      if (data.hasOwnProperty('shipVia')) {
        obj['shipVia'] = ApiClient.convertToType(data['shipVia'], 'Integer');
      }
      if (data.hasOwnProperty('requestDays')) {
        obj['requestDays'] = ApiClient.convertToType(data['requestDays'], 'Integer');
      }
      if (data.hasOwnProperty('actualDays')) {
        obj['actualDays'] = ApiClient.convertToType(data['actualDays'], 'Integer');
      }
      if (data.hasOwnProperty('salesTaxCode')) {
        obj['salesTaxCode'] = ApiClient.convertToType(data['salesTaxCode'], 'String');
      }
      if (data.hasOwnProperty('product1')) {
        obj['product1'] = ApiClient.convertToType(data['product1'], 'Integer');
      }
      if (data.hasOwnProperty('product2')) {
        obj['product2'] = ApiClient.convertToType(data['product2'], 'Integer');
      }
      if (data.hasOwnProperty('product3')) {
        obj['product3'] = ApiClient.convertToType(data['product3'], 'Integer');
      }
      if (data.hasOwnProperty('product4')) {
        obj['product4'] = ApiClient.convertToType(data['product4'], 'Integer');
      }
      if (data.hasOwnProperty('product5')) {
        obj['product5'] = ApiClient.convertToType(data['product5'], 'Integer');
      }
      if (data.hasOwnProperty('product6')) {
        obj['product6'] = ApiClient.convertToType(data['product6'], 'Integer');
      }
      if (data.hasOwnProperty('product7')) {
        obj['product7'] = ApiClient.convertToType(data['product7'], 'Integer');
      }
      if (data.hasOwnProperty('product8')) {
        obj['product8'] = ApiClient.convertToType(data['product8'], 'Integer');
      }
      if (data.hasOwnProperty('product9')) {
        obj['product9'] = ApiClient.convertToType(data['product9'], 'Integer');
      }
      if (data.hasOwnProperty('podDays')) {
        obj['podDays'] = ApiClient.convertToType(data['podDays'], 'Integer');
      }
      if (data.hasOwnProperty('chargeOut')) {
        obj['chargeOut'] = ApiClient.convertToType(data['chargeOut'], 'String');
      }
      if (data.hasOwnProperty('arEmail')) {
        obj['arEmail'] = ApiClient.convertToType(data['arEmail'], 'String');
      }
      if (data.hasOwnProperty('orderEmail')) {
        obj['orderEmail'] = ApiClient.convertToType(data['orderEmail'], 'String');
      }
      if (data.hasOwnProperty('orderAttach')) {
        obj['orderAttach'] = ApiClient.convertToType(data['orderAttach'], 'String');
      }
      if (data.hasOwnProperty('sendQuantityType')) {
        obj['sendQuantityType'] = ApiClient.convertToType(data['sendQuantityType'], 'String');
      }
      if (data.hasOwnProperty('minority')) {
        obj['minority'] = ApiClient.convertToType(data['minority'], 'String');
      }
      if (data.hasOwnProperty('sendOutside')) {
        obj['sendOutside'] = ApiClient.convertToType(data['sendOutside'], 'String');
      }
      if (data.hasOwnProperty('podOrderSuffix')) {
        obj['podOrderSuffix'] = ApiClient.convertToType(data['podOrderSuffix'], 'Integer');
      }
      if (data.hasOwnProperty('podEmail')) {
        obj['podEmail'] = ApiClient.convertToType(data['podEmail'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('inactive')) {
        obj['inactive'] = ApiClient.convertToType(data['inactive'], 'String');
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
   * @member {Integer} vendorNo
   */
  exports.prototype['vendorNo'] = undefined;

  /**
   * @member {Integer} lobId
   */
  exports.prototype['lobId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} street
   */
  exports.prototype['street'] = undefined;

  /**
   * @member {String} street2
   */
  exports.prototype['street2'] = undefined;

  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;

  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;

  /**
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;

  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;

  /**
   * @member {String} terms
   */
  exports.prototype['terms'] = undefined;

  /**
   * @member {String} fob
   */
  exports.prototype['fob'] = undefined;

  /**
   * @member {Integer} shipVia
   */
  exports.prototype['shipVia'] = undefined;

  /**
   * @member {Integer} requestDays
   */
  exports.prototype['requestDays'] = undefined;

  /**
   * @member {Integer} actualDays
   */
  exports.prototype['actualDays'] = undefined;

  /**
   * @member {String} salesTaxCode
   */
  exports.prototype['salesTaxCode'] = undefined;

  /**
   * @member {Integer} product1
   */
  exports.prototype['product1'] = undefined;

  /**
   * @member {Integer} product2
   */
  exports.prototype['product2'] = undefined;

  /**
   * @member {Integer} product3
   */
  exports.prototype['product3'] = undefined;

  /**
   * @member {Integer} product4
   */
  exports.prototype['product4'] = undefined;

  /**
   * @member {Integer} product5
   */
  exports.prototype['product5'] = undefined;

  /**
   * @member {Integer} product6
   */
  exports.prototype['product6'] = undefined;

  /**
   * @member {Integer} product7
   */
  exports.prototype['product7'] = undefined;

  /**
   * @member {Integer} product8
   */
  exports.prototype['product8'] = undefined;

  /**
   * @member {Integer} product9
   */
  exports.prototype['product9'] = undefined;

  /**
   * @member {Integer} podDays
   */
  exports.prototype['podDays'] = undefined;

  /**
   * @member {String} chargeOut
   */
  exports.prototype['chargeOut'] = undefined;

  /**
   * @member {String} arEmail
   */
  exports.prototype['arEmail'] = undefined;

  /**
   * @member {String} orderEmail
   */
  exports.prototype['orderEmail'] = undefined;

  /**
   * @member {String} orderAttach
   */
  exports.prototype['orderAttach'] = undefined;

  /**
   * @member {String} sendQuantityType
   */
  exports.prototype['sendQuantityType'] = undefined;

  /**
   * @member {String} minority
   */
  exports.prototype['minority'] = undefined;

  /**
   * @member {String} sendOutside
   */
  exports.prototype['sendOutside'] = undefined;

  /**
   * @member {Integer} podOrderSuffix
   */
  exports.prototype['podOrderSuffix'] = undefined;

  /**
   * @member {String} podEmail
   */
  exports.prototype['podEmail'] = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;

  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;

  /**
   * @member {String} inactive
   */
  exports.prototype['inactive'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));

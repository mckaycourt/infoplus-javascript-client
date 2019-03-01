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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.InventoryStorageActivity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InventoryStorageActivity', function() {
    it('should create an instance of InventoryStorageActivity', function() {
      // uncomment below and update the code to test InventoryStorageActivity
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be.a(infoplus.InventoryStorageActivity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property importedRecordId (base name: "importedRecordId")', function() {
      // uncomment below and update the code to test the property importedRecordId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationId (base name: "warehouseLocationId")', function() {
      // uncomment below and update the code to test the property warehouseLocationId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property snapshotDate (base name: "snapshotDate")', function() {
      // uncomment below and update the code to test the property snapshotDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property isMixedReceipts (base name: "isMixedReceipts")', function() {
      // uncomment below and update the code to test the property isMixedReceipts
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property estimatedInnerPacks (base name: "estimatedInnerPacks")', function() {
      // uncomment below and update the code to test the property estimatedInnerPacks
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property estimatedCases (base name: "estimatedCases")', function() {
      // uncomment below and update the code to test the property estimatedCases
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property estimatedPallets (base name: "estimatedPallets")', function() {
      // uncomment below and update the code to test the property estimatedPallets
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property inventoryValue (base name: "inventoryValue")', function() {
      // uncomment below and update the code to test the property inventoryValue
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property inventoryAgeDays (base name: "inventoryAgeDays")', function() {
      // uncomment below and update the code to test the property inventoryAgeDays
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseName (base name: "warehouseName")', function() {
      // uncomment below and update the code to test the property warehouseName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseZoneId (base name: "warehouseZoneId")', function() {
      // uncomment below and update the code to test the property warehouseZoneId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseZoneName (base name: "warehouseZoneName")', function() {
      // uncomment below and update the code to test the property warehouseZoneName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseZoneAddress (base name: "warehouseZoneAddress")', function() {
      // uncomment below and update the code to test the property warehouseZoneAddress
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseBuildingId (base name: "warehouseBuildingId")', function() {
      // uncomment below and update the code to test the property warehouseBuildingId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseBuildingName (base name: "warehouseBuildingName")', function() {
      // uncomment below and update the code to test the property warehouseBuildingName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseAisleId (base name: "warehouseAisleId")', function() {
      // uncomment below and update the code to test the property warehouseAisleId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseAisleAddress (base name: "warehouseAisleAddress")', function() {
      // uncomment below and update the code to test the property warehouseAisleAddress
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationOriginId (base name: "warehouseLocationOriginId")', function() {
      // uncomment below and update the code to test the property warehouseLocationOriginId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationOriginName (base name: "warehouseLocationOriginName")', function() {
      // uncomment below and update the code to test the property warehouseLocationOriginName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationBillingTypeId (base name: "warehouseLocationBillingTypeId")', function() {
      // uncomment below and update the code to test the property warehouseLocationBillingTypeId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationBillingTypeName (base name: "warehouseLocationBillingTypeName")', function() {
      // uncomment below and update the code to test the property warehouseLocationBillingTypeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationBehaviorTypeId (base name: "warehouseLocationBehaviorTypeId")', function() {
      // uncomment below and update the code to test the property warehouseLocationBehaviorTypeId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationBehaviorTypeName (base name: "warehouseLocationBehaviorTypeName")', function() {
      // uncomment below and update the code to test the property warehouseLocationBehaviorTypeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationFootprintId (base name: "warehouseLocationFootprintId")', function() {
      // uncomment below and update the code to test the property warehouseLocationFootprintId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationFootprintName (base name: "warehouseLocationFootprintName")', function() {
      // uncomment below and update the code to test the property warehouseLocationFootprintName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationFootprintWidth (base name: "warehouseLocationFootprintWidth")', function() {
      // uncomment below and update the code to test the property warehouseLocationFootprintWidth
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationFootprintHeight (base name: "warehouseLocationFootprintHeight")', function() {
      // uncomment below and update the code to test the property warehouseLocationFootprintHeight
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationFootprintDepth (base name: "warehouseLocationFootprintDepth")', function() {
      // uncomment below and update the code to test the property warehouseLocationFootprintDepth
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationCubicFeet (base name: "warehouseLocationCubicFeet")', function() {
      // uncomment below and update the code to test the property warehouseLocationCubicFeet
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationLevel (base name: "warehouseLocationLevel")', function() {
      // uncomment below and update the code to test the property warehouseLocationLevel
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationBay (base name: "warehouseLocationBay")', function() {
      // uncomment below and update the code to test the property warehouseLocationBay
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationNumber (base name: "warehouseLocationNumber")', function() {
      // uncomment below and update the code to test the property warehouseLocationNumber
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationOnline (base name: "warehouseLocationOnline")', function() {
      // uncomment below and update the code to test the property warehouseLocationOnline
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationPriorityCode (base name: "warehouseLocationPriorityCode")', function() {
      // uncomment below and update the code to test the property warehouseLocationPriorityCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationAllowItemMixing (base name: "warehouseLocationAllowItemMixing")', function() {
      // uncomment below and update the code to test the property warehouseLocationAllowItemMixing
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationCost (base name: "warehouseLocationCost")', function() {
      // uncomment below and update the code to test the property warehouseLocationCost
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemVendorSku (base name: "itemVendorSku")', function() {
      // uncomment below and update the code to test the property itemVendorSku
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemUpc (base name: "itemUpc")', function() {
      // uncomment below and update the code to test the property itemUpc
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemMajorGroup (base name: "itemMajorGroup")', function() {
      // uncomment below and update the code to test the property itemMajorGroup
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemMajorGroupName (base name: "itemMajorGroupName")', function() {
      // uncomment below and update the code to test the property itemMajorGroupName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSubGroup (base name: "itemSubGroup")', function() {
      // uncomment below and update the code to test the property itemSubGroup
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSubGroupName (base name: "itemSubGroupName")', function() {
      // uncomment below and update the code to test the property itemSubGroupName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemProductCode (base name: "itemProductCode")', function() {
      // uncomment below and update the code to test the property itemProductCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemProductCodeName (base name: "itemProductCodeName")', function() {
      // uncomment below and update the code to test the property itemProductCodeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemAccountCode (base name: "itemAccountCode")', function() {
      // uncomment below and update the code to test the property itemAccountCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemAccountCodeName (base name: "itemAccountCodeName")', function() {
      // uncomment below and update the code to test the property itemAccountCodeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSummaryCode (base name: "itemSummaryCode")', function() {
      // uncomment below and update the code to test the property itemSummaryCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSummaryCodeName (base name: "itemSummaryCodeName")', function() {
      // uncomment below and update the code to test the property itemSummaryCodeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemSector (base name: "itemSector")', function() {
      // uncomment below and update the code to test the property itemSector
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property itemCubicFeet (base name: "itemCubicFeet")', function() {
      // uncomment below and update the code to test the property itemCubicFeet
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property poNo (base name: "poNo")', function() {
      // uncomment below and update the code to test the property poNo
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptDistributionDate (base name: "receiptDistributionDate")', function() {
      // uncomment below and update the code to test the property receiptDistributionDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitsPerWrap (base name: "receiptUnitsPerWrap")', function() {
      // uncomment below and update the code to test the property receiptUnitsPerWrap
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptQuantityPerInnerPack (base name: "receiptQuantityPerInnerPack")', function() {
      // uncomment below and update the code to test the property receiptQuantityPerInnerPack
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptQuantityPerCase (base name: "receiptQuantityPerCase")', function() {
      // uncomment below and update the code to test the property receiptQuantityPerCase
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptQuantityPerPallet (base name: "receiptQuantityPerPallet")', function() {
      // uncomment below and update the code to test the property receiptQuantityPerPallet
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptRevisionDate (base name: "receiptRevisionDate")', function() {
      // uncomment below and update the code to test the property receiptRevisionDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptProductionLot (base name: "receiptProductionLot")', function() {
      // uncomment below and update the code to test the property receiptProductionLot
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptReceiveDate (base name: "receiptReceiveDate")', function() {
      // uncomment below and update the code to test the property receiptReceiveDate
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptStatus (base name: "receiptStatus")', function() {
      // uncomment below and update the code to test the property receiptStatus
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptStatusName (base name: "receiptStatusName")', function() {
      // uncomment below and update the code to test the property receiptStatusName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitCode (base name: "receiptUnitCode")', function() {
      // uncomment below and update the code to test the property receiptUnitCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptUnitCodeText (base name: "receiptUnitCodeText")', function() {
      // uncomment below and update the code to test the property receiptUnitCodeText
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptWrapCode (base name: "receiptWrapCode")', function() {
      // uncomment below and update the code to test the property receiptWrapCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptWrapCodeText (base name: "receiptWrapCodeText")', function() {
      // uncomment below and update the code to test the property receiptWrapCodeText
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptCaseWeight (base name: "receiptCaseWeight")', function() {
      // uncomment below and update the code to test the property receiptCaseWeight
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property receiptProductIdTag (base name: "receiptProductIdTag")', function() {
      // uncomment below and update the code to test the property receiptProductIdTag
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholTypeId (base name: "alcoholTypeId")', function() {
      // uncomment below and update the code to test the property alcoholTypeId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholTypeName (base name: "alcoholTypeName")', function() {
      // uncomment below and update the code to test the property alcoholTypeName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContent (base name: "alcoholContent")', function() {
      // uncomment below and update the code to test the property alcoholContent
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerId (base name: "alcoholContainerId")', function() {
      // uncomment below and update the code to test the property alcoholContainerId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerName (base name: "alcoholContainerName")', function() {
      // uncomment below and update the code to test the property alcoholContainerName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholContainerVolume (base name: "alcoholContainerVolume")', function() {
      // uncomment below and update the code to test the property alcoholContainerVolume
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholVintageYear (base name: "alcoholVintageYear")', function() {
      // uncomment below and update the code to test the property alcoholVintageYear
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholCountryId (base name: "alcoholCountryId")', function() {
      // uncomment below and update the code to test the property alcoholCountryId
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholCountryName (base name: "alcoholCountryName")', function() {
      // uncomment below and update the code to test the property alcoholCountryName
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholState (base name: "alcoholState")', function() {
      // uncomment below and update the code to test the property alcoholState
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholRegion (base name: "alcoholRegion")', function() {
      // uncomment below and update the code to test the property alcoholRegion
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholBrand (base name: "alcoholBrand")', function() {
      // uncomment below and update the code to test the property alcoholBrand
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholUPCCode (base name: "alcoholUPCCode")', function() {
      // uncomment below and update the code to test the property alcoholUPCCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholNABCACode (base name: "alcoholNABCACode")', function() {
      // uncomment below and update the code to test the property alcoholNABCACode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholUNIMERCCode (base name: "alcoholUNIMERCCode")', function() {
      // uncomment below and update the code to test the property alcoholUNIMERCCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholSCCCode (base name: "alcoholSCCCode")', function() {
      // uncomment below and update the code to test the property alcoholSCCCode
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.InventoryStorageActivity();
      //expect(instance).to.be();
    });

  });

}));

// Program Name     : zsalesfrcstreport                                                                            *
// Process Area     : OTC                                             
// Sub-Module       : Sales Order                                      
// Author (userid)  : Shubham Guha(SGuha)                                  
// Functional Name  : ZAFAR KHAN (ZKHAN)                                   
// Create Date      : 21 Oct   2021                                    
// Program Type     : Custom FreeStyle UI5 Development                                      
// Description      : Sales Forecast 7 Months-R2(Sales Forecast Report for Monthly Stocking Order) 
// Transport        : S4DK904355, S4DK949808 (Retrofit)
// Package          : ZOTC_RPT
// BSP Application  : YY1_ZSLSFCSTRPT
// Catlog           : ZC_OTC_SLS_ANLY_PRED
// Group            : ZG_OTC_SLS_ANLY_PRED
// Work Item        : 1200000545
// SAPUI5 Component : com.kubota.otc.zsalesfrcstreport
// **********Defect************
// Defect Number: 8000000572
// Date of Defect:9th Oct
// Owner: Shubham Guha (SGUHA)
// Descpription: Add Varient Management
// Transport: S4DK906647
// ****************************************
//INCIDENT 2100000312

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Token",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/util/Export",
    "sap/ui/core/util/ExportTypeCSV",
    "sap/ui/export/Spreadsheet",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/DialogType",
    "sap/ui/table/TablePersoController"

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Token, Fragment, MessageBox, Filter, FilterOperator, JSONModel, Export, ExportTypeCSV, Spreadsheet, MessageToast, Dialog, DialogType, TablePersoController) {
        "use strict";

        return Controller.extend("com.kubota.otc.zsalesfrcstreport.controller.MainScreen", {
            onInit: function () {
                var oView = this.getView();
                var oMatNumber = oView.byId("matnum");
                var oDivision = oView.byId("division");
                var oMaterialGroup = oView.byId("matgrp");
                var oMaterialDefined = oView.byId("matdef");
                var oMaterialType = oView.byId("mattype");
                var fnValidator = function (args) {
                    var text = args.text;
                    return new Token({ text: text });
                };
                //manually adding data in multi input field
                oMatNumber.addValidator(fnValidator);
                oDivision.addValidator(fnValidator);
                oMaterialGroup.addValidator(fnValidator);
                oMaterialDefined.addValidator(fnValidator);
                oMaterialType.addValidator(fnValidator);
                //Set Month Value for the table
                var date = new Date();
                var a = new Date(date.getFullYear(), date.getMonth(), 1);
                oView.byId("Month1PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric' }) + " PO");
                oView.byId("Month1Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'  }) + " Sales");
                oView.byId("Month1Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric' }) + " Return");
                oView.byId("Month1OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric' }) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month2PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month2Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month2Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month2OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month3PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month3Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month3Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month3OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month4PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month4Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month4Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month4OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month5PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month5Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month5Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month5OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month6PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month6Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month6Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month6OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month7PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month7Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month7Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month7OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month8PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month8Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month8Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month8OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month9PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month9Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month9Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month9OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month10PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month10Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month10Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month10OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month11PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month11Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month11Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month11OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month12PO").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " PO");
                oView.byId("Month12Sales").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Sales");
                oView.byId("Month12Return").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " Return");
                oView.byId("Month12OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                a.setMonth(a.getMonth() + 1);
                oView.byId("Month13OnHand").setText(a.toLocaleString('default', { month: 'short' , year: 'numeric'}) + " OnHand");
                //defect
                if (!this._oPopover) {
                    Fragment.load({
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.PopoverVariant",
                        controller: this
                    }).then(function (pPopover) {
                        this._oPopover = pPopover;
                        this.getView().addDependent(this._oPopover);
                    }.bind(this));

                }
                  // init and activate controller
                this._oTPC = new TablePersoController({
                    table: this.getView().byId("HorzTable"),
                    //specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
                    persoService: null
                });
                this.onRefreshCall();
                //end of defect
            },
            //Start of Defect:8000000572   SGUHA
            //Calling the default Varient
            onRefreshCall: function () {
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGW_VARIANT_MGMNT_SRV");
                sap.ui.getCore().setModel(oModel, "myVariantModel");
                var myVariantModel = sap.ui.getCore().getModel("myVariantModel");
                myVariantModel.setUseBatch(false);
                var v_url = "/VariantHeaderSet";
                var user = sap.ushell.Container.getService("UserInfo").getId();
                // var user= "Test";
                var Filter1 = new sap.ui.model.Filter('ProgramId', 'EQ', 'SLSFRCST2');
                var Filter2 = new sap.ui.model.Filter('User', 'EQ', user);
                var that = this;
                var i;
                myVariantModel.read(v_url, {
                    filters: [Filter1, Filter2],
                    urlParameters: {
                        $expand: "NavToVariantItem"
                    },
                    success: function (oData, oResponse) {
                        var userdata = new sap.ui.model.json.JSONModel({
                            "Result": oData.results
                        });
                        that.getView().setModel(userdata, "VarModel");
                        var vModel = that.getView().getModel("VarModel");
                        if (oData.results.length > 0) {
                            for (i = 0; i < oData.results.length; i++) {
                                if (oData.results[i].Default === 'X') {
                                    if (that.getView().byId("variantLabel").getText() !== "Standard*") {
                                        sap.ui.getCore().byId("SaveVar").setVisible(true);
                                    }
                                    that.oVariantpassValues(oData.results[i].Variant, vModel);
                                }
                            }
                        }
                        else {
                            sap.ui.getCore().byId("SaveVar").setVisible(false);
                        }
                    },
                    error: function (oError) {
                        var oError = JSON.parse(oError.responseText);
                        MessageBox.error(oError.error.message.value);
                    }
                });
            },
            //end of defect:8000000572   SGUHA
            // Start of download in excel
            createColumnConfig: function () {
                var month1 = this.getView().byId("Month1PO").getText();
                var month1Sales = this.getView().byId("Month1Sales").getText();
                var month1OnHand = this.getView().byId("Month1OnHand").getText();
                var month1Return = this.getView().byId("Month1Return").getText();
                var month2 = this.getView().byId("Month2PO").getText();
                var month2Sales = this.getView().byId("Month2Sales").getText();
                var month2OnHand = this.getView().byId("Month2OnHand").getText();
                var month2Return = this.getView().byId("Month2Return").getText();
                var month3 = this.getView().byId("Month3PO").getText();
                var month3Sales = this.getView().byId("Month3Sales").getText();
                var month3OnHand = this.getView().byId("Month3OnHand").getText();
                var month3Return = this.getView().byId("Month3Return").getText();
                var month4 = this.getView().byId("Month4PO").getText();
                var month4Sales = this.getView().byId("Month4Sales").getText();
                var month4OnHand = this.getView().byId("Month4OnHand").getText();
                var month4Return = this.getView().byId("Month4Return").getText();
                var month5 = this.getView().byId("Month5PO").getText();
                var month5Sales = this.getView().byId("Month5Sales").getText();
                var month5OnHand = this.getView().byId("Month5OnHand").getText();
                var month5Return = this.getView().byId("Month5Return").getText();
                var month6 = this.getView().byId("Month6PO").getText();
                var month6Sales = this.getView().byId("Month6Sales").getText();
                var month6OnHand = this.getView().byId("Month6OnHand").getText();
                var month6Return = this.getView().byId("Month6Return").getText();
                var month7 = this.getView().byId("Month7PO").getText();
                var month7Sales = this.getView().byId("Month7Sales").getText();
                var month7OnHand = this.getView().byId("Month7OnHand").getText();
                var month7Return = this.getView().byId("Month7Return").getText();
                var month8 = this.getView().byId("Month8PO").getText();
                var month8Sales = this.getView().byId("Month8Sales").getText();
                var month8OnHand = this.getView().byId("Month8OnHand").getText();
                var month8Return = this.getView().byId("Month8Return").getText();
                var month9 = this.getView().byId("Month9PO").getText();
                var month9Sales = this.getView().byId("Month9Sales").getText();
                var month9OnHand = this.getView().byId("Month9OnHand").getText();
                var month9Return = this.getView().byId("Month9Return").getText();
                var month10 = this.getView().byId("Month10PO").getText();
                var month10Sales = this.getView().byId("Month10Sales").getText();
                var month10OnHand = this.getView().byId("Month10OnHand").getText();
                var month10Return = this.getView().byId("Month10Return").getText();
                var month11 = this.getView().byId("Month11PO").getText();
                var month11Sales = this.getView().byId("Month11Sales").getText();
                var month11OnHand = this.getView().byId("Month11OnHand").getText();
                var month11Return = this.getView().byId("Month11Return").getText();
                var month12 = this.getView().byId("Month12PO").getText();
                var month12Sales = this.getView().byId("Month12Sales").getText();
                var month12OnHand = this.getView().byId("Month12OnHand").getText();
                var month12Return = this.getView().byId("Month12Return").getText();
                var month13OnHand = this.getView().byId("Month13OnHand").getText();
                return [

                    {
                        label: 'Material',
                        property: 'Material',
                        width: '12'
                    },
                    {
                        label: 'Material Description',
                        property: 'MatDesc',
                        width: '25'
                    },
                    {
                        label: 'Prod Hire.',
                        property: 'ProdHier',
                        width: '12'
                    },
                    {
                        label: 'Material Group',
                        property: 'MatGroup',
                        width: '12'
                    },
                    {
                        label: 'Material Group Desc',
                        property: 'MatGroupDesc',
                        width: '25'
                    },
                     /**{
                        label: 'Status',
                        property: 'ProdSaleStatus',
                        width: '12'
                    },
                    {
                        label: 'Customer Group',
                        property: 'CustGroup',
                        width: '12',
                        type: sap.ui.export.EdmType.Number,
                    },
                    {
                        label: 'Customer Group Description',
                        property: 'CustGroupDesc',
                        width: '12'
                    },*/
                    {
                        label: 'Cross-Plant Material Status',
                        property: 'CPMatStatus',
                        width: '12'
                    },
                    {
                        label: 'Cross-Plant Material Status Description',
                        property: 'CPMatStatusDesc',
                        width: '12'
                    },
                    {
                        label: 'Cross-distribution-chain material status',
                        property: 'CDCMatStatus',
                        width: '12'
                    },
                    {
                        label: 'Cross-distribution-chain material status Description',
                        property: 'CDCMatStatusDesc',
                        width: '12'
                    },
                    {
                        label: 'Plant-Specific Material Status',
                        property: 'MatStatus',
                        width: '12'
                    },
                    {
                        label: 'Plant-Specific Material Status Description',
                        property: 'MatStatusDesc',
                        width: '12'
                    },
                    {
                        label: 'Material Type',
                        property: 'MatType',
                        width: '12'
                    },
                    {
                        label: 'Material Type Description',
                        property: 'MatTypeDesc',
                        width: '18'
                    },
                    {
                        label: 'Material group 1',
                        property: 'MatGroup1',
                        width: '12'
                    },
                    {
                        label: 'Material group 1 Description',
                        property: 'MatGroup1Desc',
                        width: '12'
                    },
                    {
                        label: 'Control Code',
                        property: 'ControlCode',
                        width: '18'
                        
                    },
                    {
                        label: 'Purchasing Group',
                        property: 'PurchGroup',
                        width: '18'
                    },
                    {
                        label: 'No Of Times PO Placed',
                        property: 'POPlacedCount',
                        width: '18'
                    },
                    {
                        label: month1OnHand,
                        property: 'Stock1',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month1,
                        property: 'Po1',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month1Return,
                        property: 'Rt1',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month1Sales,
                        property: 'Sls1',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },

                    {
                        label: month2OnHand,
                        property: 'Stock2',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month2,
                        property: 'Po2',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month2Return,
                        property: 'Rt2',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month2Sales,
                        property: 'Sls2',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },

                    {
                        label: month3OnHand,
                        property: 'Stock3',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month3,
                        property: 'Po3',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month3Return,
                        property: 'Rt3',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month3Sales,
                        property: 'Sls3',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month4OnHand,
                        property: 'Stock4',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month4,
                        property: 'Po4',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month4Return,
                        property: 'Rt4',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month4Sales,
                        property: 'Sls4',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },

                    {
                        label: month5OnHand,
                        property: 'Stock5',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month5,
                        property: 'Po5',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month5Return,
                        property: 'Rt5',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month5Sales,
                        property: 'Sls5',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month6OnHand,
                        property: 'Stock6',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month6,
                        property: 'Po6',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month6Return,
                        property: 'Rt6',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month6Sales,
                        property: 'Sls6',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month7OnHand,
                        property: 'Stock7',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month7,
                        property: 'Po7',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month7Return,
                        property: 'Rt7',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month7Sales,
                        property: 'Sls7',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month8OnHand,
                        property: 'Stock8',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month8,
                        property: 'Po8',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month8Return,
                        property: 'Rt8',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month8Sales,
                        property: 'Sls8',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month9OnHand,
                        property: 'Stock9',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month9,
                        property: 'Po9',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month9Return,
                        property: 'Rt9',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month9Sales,
                        property: 'Sls9',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month10OnHand,
                        property: 'Stock10',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month10,
                        property: 'Po10',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month10Return,
                        property: 'Rt10',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month10Sales,
                        property: 'Sls10',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month11OnHand,
                        property: 'Stock11',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month11,
                        property: 'Po11',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month11Return,
                        property: 'Rt11',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month11Sales,
                        property: 'Sls11',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month12OnHand,
                        property: 'Stock12',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month12,
                        property: 'Po12',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month12Return,
                        property: 'Rt12',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month12Sales,
                        property: 'Sls12',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    },
                    {
                        label: month13OnHand,
                        property: 'Stock13',
                        width: '12',
                        type: sap.ui.export.EdmType.Number
                    }
                ];
            },
            downloadToExcel: function () {
                var aCols, aProducts, oSettings, oSheet;

                aCols = this.createColumnConfig();
                aProducts = this.getView().getModel("HorzTableDataModel").getProperty('/');

                oSettings = {
                    workbook: { columns: aCols },
                    dataSource: aProducts
                };

                oSheet = new Spreadsheet(oSettings);
                oSheet.build()
                    .then(function () {
                        MessageToast.show('Spreadsheet export has finished');
                    })
                    .finally(oSheet.destroy);
            },
            //End of download in excel
            //Start of on Press of Execute button
            onExecute: function (event) {
                var oView = this.getView();
                var oMainModel = this.getOwnerComponent().getModel("MainService");
                var radC = oView.byId("radC").getSelected();
                var radR = oView.byId("radR").getSelected();
                var that = this;
                var mHeaders = "";
                var oFilter = new sap.ui.model.Filter();
                var aFilters = [];
                var aFilters1 = [];
                var aFilters2 = [];
                var aFilters3 = [];
                var aFilters4 = [];
                var aFilters5 = [];
                //Filters for oData call
                var oMatNumber = this.getView().byId("matnum");
                var MatLen = oMatNumber.getTokens().length;
                var filtMatNum = [];
                var i1;
                if (MatLen > 0) {
                    for (i1 = 0; i1 < MatLen; i1++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, oMatNumber.getTokens()[i1].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters.push(oFilter.filters[0]);
                }
                var oDivision = this.getView().byId("division");
                var DivLen = oDivision.getTokens().length;
                var filtDiv = [];
                var i2;
                if (DivLen > 0) {
                    for (i2 = 0; i2 < DivLen; i2++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("Division", sap.ui.model.FilterOperator.EQ, oDivision.getTokens()[i2].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters1.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("Division", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters1.push(oFilter.filters[0]);
                }
                var oMatGrp = this.getView().byId("matgrp");
                var MGLen = oMatGrp.getTokens().length;
                var filtMatGrp = [];
                var i3;
                if (MGLen > 0) {
                    for (i3 = 0; i3 < MGLen; i3++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("MatGroup", sap.ui.model.FilterOperator.EQ, oMatGrp.getTokens()[i3].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters2.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("MatGroup", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters2.push(oFilter.filters[0]);
                }
                var oSalesOrg = this.getView().byId("matdef");
                var SGLen = oSalesOrg.getTokens().length;
                var filtSalOrg = [];
                var i4;
                if (SGLen > 0) {
                    for (i4 = 0; i4 < SGLen; i4++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("SalesOrg", sap.ui.model.FilterOperator.EQ, oSalesOrg.getTokens()[i4].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters3.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("SalesOrg", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters3.push(oFilter.filters[0]);
                }
                var oMatType = this.getView().byId("mattype");
                var MatTLen = oMatType.getTokens().length;
                var filtMatT = [];
                var i6;
                if (MatTLen > 0) {
                    for (i6 = 0; i6 < MatTLen; i6++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("MatType", sap.ui.model.FilterOperator.EQ, oMatType.getTokens()[i6].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters4.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("MatType", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters4.push(oFilter.filters[0]);
                }
                var oSDocType = this.getView().byId("doctype");
                var SDocTLen = oSDocType.getTokens().length;
                var filtSDocT = [];
                var i7;
                if (SDocTLen > 0) {
                    for (i7 = 0; i7 < SDocTLen; i7++) {
                        oFilter = ({
                            filters: [
                                new sap.ui.model.Filter("Salesdocumenttype", sap.ui.model.FilterOperator.EQ, oSDocType.getTokens()[i7].getText().toUpperCase())
                            ],
                            and: false
                        })
                        aFilters5.push(oFilter.filters[0]);
                    }
                } else {
                    oFilter = ({
                        filters: [
                            new sap.ui.model.Filter("Salesdocumenttype", sap.ui.model.FilterOperator.EQ, "")
                        ],
                    })
                    aFilters5.push(oFilter.filters[0]);
                }

                // Setting Headers based on radio button
                if (radC == true) {
                    mHeaders = "CON";
                }
                if (radR == true) {
                    mHeaders = "REQ";
                }
                oMainModel.setHeaders({ "AGGRGN_BY": mHeaders });
                oMainModel.read("/SalesForecastDataSet", {
                    filters: [new sap.ui.model.Filter({
                        filters: [new sap.ui.model.Filter(aFilters),
                        new sap.ui.model.Filter(aFilters1), new sap.ui.model.Filter(aFilters2),
                        new sap.ui.model.Filter(aFilters3), new sap.ui.model.Filter(aFilters4),
                        new sap.ui.model.Filter(aFilters5)], and: true
                    })],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().setModel(oMainModel, "HorzTableDataModel");
                        that.getView().getModel("HorzTableDataModel").refresh();
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            // to bind Value Help with model
            _bindModel: function () {
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                this.getView().byId("DivisionVH").setModel(oVHModel, "VHModel");
                this.getView().byId("MatDefVH").setModel(oVHModel, "VHModel");
                this.getView().byId("MatGrpVH").setModel(oVHModel, "VHModel");
                this.getView().byId("MatNumVH").setModel(oVHModel, "VHModel");
                this.getView().byId("MatTypeVH").setModel(oVHModel, "VHModel");
                this.getView().byId("SalesDocTypeVH").setModel(oVHModel, "VHModel");
            },
            //Value help Requests
            MatNumValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("MatNumVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.MatNumVH",
                        controller: this
                    }).then(function (oValueHelpDialog1) {
                        this._valueHelpDialog = oValueHelpDialog1;
                        this.getView().addDependent(this._valueHelpDialog1);
                        // function call for Model binding
                        this.bindModelMatNum();
                        oValueHelpDialog1.open();
                    }.bind(this));
                } else {
                    this.byId("MatNumVH").open();
                }
            },
            //Start For value help search
            _handleMatNumValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "Material",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("MatNumVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //END For value help search
            bindModelMatNum: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'E');
                oVHModel.read("/MaterialVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("MatNumVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleMatNumValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("matnum");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                    this.byId("MatNumVH").destroy();
                }
            },
            DivisionValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("DivisionVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.DivisionVH",
                        controller: this
                    }).then(function (oValueHelpDialog2) {
                        this._valueHelpDialog = oValueHelpDialog2;
                        this.getView().addDependent(this._valueHelpDialog2);
                        this.bindModelDivision();
                        oValueHelpDialog2.open();
                    }.bind(this));
                } else {
                    this.byId("DivisionVH").open();
                }
            },
            //Start For value help search
            _handleDivisionValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "DivisionName",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("DivisionVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //END For value help search
            bindModelDivision: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'E');
                oVHModel.read("/DivisionVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("DivisionVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleDivValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("division");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                }
                this.byId("DivisionVH").destroy();
            },
            //Start Material Value Help
            MatTypeValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("MatTypeVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.MatTypeVH",
                        controller: this
                    }).then(function (oValueHelpDialog3) {
                        this._valueHelpDialog = oValueHelpDialog3;
                        this.getView().addDependent(this._valueHelpDialog3);
                        this.bindModelMatType();
                        oValueHelpDialog3.open();
                    }.bind(this));
                } else {
                    this.byId("MatTypeVH").open();
                }
            },
            //Start For value help search
            _handleMatTypeValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "MaterialType",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("MatTypeVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //END For value help search
            bindModelMatType: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'E');
                oVHModel.read("/MaterialTypeVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("MatTypeVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleMatTypeValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("mattype");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                }
                this.byId("MatTypeVH").destroy();
            },
            MatGrpValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("MatGrpVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.MatGrpVH",
                        controller: this
                    }).then(function (oValueHelpDialog4) {
                        this._valueHelpDialog = oValueHelpDialog4;
                        this.getView().addDependent(this._valueHelpDialog4);
                        this.bindModelMatGrp();
                        oValueHelpDialog4.open();
                    }.bind(this));
                } else {
                    this.byId("MatGrpVH").open();
                }
            },
            //For value help search
            _handleMatGrpValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "MaterialGroup",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("MatGrpVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //end of value help search
            bindModelMatGrp: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'E');
                oVHModel.read("/MatGroupVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("MatGrpVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleMatGrpValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("matgrp");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                }
                this.byId("MatGrpVH").destroy();
            },
            MatDefValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("SalesOrgVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.SalesOrgVH",
                        controller: this
                    }).then(function (oValueHelpDialog5) {
                        this._valueHelpDialog = oValueHelpDialog5;
                        this.getView().addDependent(this._valueHelpDialog5);
                        this.bindModelSalesOrg();
                        oValueHelpDialog5.open();
                    }.bind(this));
                } else {
                    this.byId("SalesOrgVH").open();
                }
            },
            //Start For value help search
            _handleSalesOrgValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "SalesOrg",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("SalesOrgVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //end of value help search
            bindModelSalesOrg: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'E');
                oVHModel.read("/SalesOrgVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("SalesOrgVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleSalesOrgValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("matdef");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                }
                this.byId("SalesOrgVH").destroy();
            },
            //Start Sales Doc. Value Help
             SalesDocTypeValueHelp: function (oEvent) {
                var oView = this.getView();
                // create value help dialog
                if (!this.byId("SalesDocTypeVH")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.SalesDocTypeVH",
                        controller: this
                    }).then(function (oValueHelpDialog3) {
                        this._valueHelpDialog = oValueHelpDialog3;
                        this.getView().addDependent(this._valueHelpDialog3);
                        this.bindModelSalesDocType();
                        oValueHelpDialog3.open();
                    }.bind(this));
                } else {
                    this.byId("SalesDocTypeVH").open();
                }
            },
            //Start For value help search
            _handleSalesDocTypeValueHelpSearch: function (evt) {
                var sValue = evt.getParameter("value");
                var oFilter = new Filter(
                    "Salesdocumenttype",
                    FilterOperator.Contains,
                    sValue
                );
                evt.getSource().getBinding("items").filter([oFilter]);
                this.getView().byId("SalesDocTypeVH").getModel("VHModelResult").setSizeLimit(100000);
            },
            //END For value help search
            bindModelSalesDocType: function () {
                var that = this;
                var oVHModel = this.getOwnerComponent().getModel("MainService");
                oVHModel.setUseBatch(false);
                var lang = sap.ui.getCore().getConfiguration().getLanguage();
                var Filter = new sap.ui.model.Filter('Language', 'EQ', 'EN');
                oVHModel.read("/SalesDocTypeVHSet", {
                    filters: [Filter],
                    success: function (oData, response) {
                        var oMainModel = new sap.ui.model.json.JSONModel();
                        oMainModel.setData(oData.results);
                        that.getView().byId("SalesDocTypeVH").setModel(oMainModel, "VHModelResult");
                        console.log(oData);
                    },
                    error: function (oError) {
                        MessageBox.error(oError.message);
                    }
                });
            },
            _handleSalesDocTypeValueHelpClose: function (evt) {
                var aSelectedItems = evt.getParameter("selectedItems"),
                    oMultiInput = this.byId("doctype");
                if (aSelectedItems && aSelectedItems.length > 0) {
                    aSelectedItems.forEach(function (oItem) {
                        oMultiInput.addToken(new Token({
                            text: oItem.getTitle()
                        }));
                    });
                }
                this.byId("SalesDocTypeVH").destroy();
            },
            //Start of DEFECT:8000000572   SGUHA
            //to open the Variant POPUP
            onVariantSelect: function (oEvent) {
                var oButton = oEvent.getSource();
                // create popover
                if (!this._oPopover) {
                    Fragment.load({
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.PopoverVariant",
                        controller: this
                    }).then(function (pPopover) {
                        this._oPopover = pPopover;
                        this.getView().addDependent(this._oPopover);
                        this.bindPopOver();
                        this._oPopover.openBy(oButton);
                    }.bind(this));
                } else {
                    this.bindPopOver();
                    this._oPopover.openBy(oButton);
                }
            },
            //to bind the variant list to the POPUP
            bindPopOver: function () {
                var that = this;
                var myVariantModel = sap.ui.getCore().getModel("myVariantModel");
                myVariantModel.setUseBatch(false);
                var v_url = "/VariantHeaderSet";
                var user = sap.ushell.Container.getService("UserInfo").getId();
                var Filter1 = new sap.ui.model.Filter('ProgramId', 'EQ', 'SLSFRCST2');
                var Filter2 = new sap.ui.model.Filter('User', 'EQ', user);
                myVariantModel.read(v_url, {
                    filters: [Filter1, Filter2],
                    urlParameters: {
                        $expand: "NavToVariantItem"
                    },
                    success: function (oData, oResponse) {
                        var userdata = new sap.ui.model.json.JSONModel({
                            "Result": oData.results
                        });
                        sap.ui.getCore().byId("VariantList").setModel(userdata, "VariantData");
                        if (oData.results.length > 0) {
                            for (var i = 0; i < oData.results.length; i++) {
                                if (oData.results[i].Default === 'X') {
                                    if (that.getView().byId("variantLabel").getText() !== "Standard*") {
                                        sap.ui.getCore().byId("SaveVar").setVisible(true);
                                    }
                                }
                            }
                        }
                        else {
                            sap.ui.getCore().byId("SaveVar").setVisible(false);
                        }
                    },
                    error: function (oError) {
                        var oError = JSON.parse(oError.responseText);
                        MessageBox.error(oError.error.message.value);
                    }
                });
            },

            onVariantClick: function (oEvent) {
                var sVariant = oEvent.getSource().getTitle();
                var m = sap.ui.getCore().byId("VariantList").getModel("VariantData");
                this.oVariantpassValues(sVariant, m);
            },
            //to pass the values of the selected variant to the selection screen
            oVariantpassValues: function (variant, model) {
                var selectedVariant = variant;
                var aVar = model.getData().Result;
                var len = aVar.length;
                var that = this.getView();
                sap.ui.getCore().byId("SaveVar").setVisible(true);
                that.byId("variantLabel").setText(selectedVariant);
                var oMultiInput1 = this.getView().byId("matnum");
                var oMultiInput2 = this.getView().byId("division");
                var oMultiInput3 = this.getView().byId("matgrp");
                var oMultiInput4 = this.getView().byId("matdef");
                var oMultiInput5 = this.getView().byId("mattype");
                var oMultiInput6 = this.getView().byId("doctype");
                oMultiInput1.destroyTokens();
                oMultiInput2.destroyTokens();
                oMultiInput3.destroyTokens();
                oMultiInput4.destroyTokens();
                oMultiInput5.destroyTokens();
                oMultiInput6.destroyTokens();
                for (var i = 0; i < len; i++) {
                    if (aVar[i].Variant === selectedVariant) {
                        for (var j = 0; j < aVar[i].NavToVariantItem.results.length; j++) {
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "matnum") {
                                oMultiInput1.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "division") {
                                oMultiInput2.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "matgrp") {
                                oMultiInput3.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "matdef") {
                                oMultiInput4.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "mattype") {
                                oMultiInput5.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "doctype") {
                                oMultiInput6.addToken(new Token({
                                    text: aVar[i].NavToVariantItem.results[j].Value
                                }))
                            }
                            if (aVar[i].NavToVariantItem.results[j].FieldName === "radiobutton") {
                                if (aVar[i].NavToVariantItem.results[j].Value === "DATEREQ") {
                                    that.byId("radR").setSelected(true);
                                    that.byId("radC").setSelected(false);
                                }
                                else if (aVar[i].NavToVariantItem.results[j].Value === "DATECONF") {
                                    that.byId("radR").setSelected(false);
                                    that.byId("radC").setSelected(true);
                                };
                            }
                        }
                    }
                }
            },
            //to open the popup for the variant save screen
            handleSaveAsPress: function () {
                if (!this.oApproveDialog) {
                    this.oApproveDialog = new Dialog({
                        type: DialogType.Message,
                        title: "Save View",
                        content: [
                            new sap.m.Label({ text: 'View', labelFor: 'VarInput' }),
                            new sap.m.Input('VarInput', {
                                width: '100%',
                                id: 'VariantInputField',
                                required: true
                            }),
                            new sap.m.Label({ text: 'Default:', labelFor: 'DefaultCheck' }),
                            new sap.m.CheckBox('DefaultCheck', {
                                id: 'DefaultCheckBox'
                            }),
                        ],
                        beginButton: new sap.m.Button({
                            type: sap.m.ButtonType.Emphasized,
                            text: "Save",
                            press: function () {
                                this.onVariantCreate();
                                this.oApproveDialog.close();
                            }.bind(this)
                        }),
                        endButton: new sap.m.Button({
                            text: "Cancel",
                            press: function () {
                                this.oApproveDialog.close();
                            }.bind(this)
                        })
                    });
                }
                this.oApproveDialog.open();

            },
            //to create variant
            onVariantCreate: function () {
                var varName = sap.ui.getCore().byId("VarInput").getValue();
                var CheckValue = sap.ui.getCore().byId("DefaultCheck").getSelected();
                if (varName === "") {
                    MessageBox.error("Please enter a variant name");
                }
                else {
                    this.onVariantCrUpd(varName, CheckValue);
                }
            },
            //to create and update variant
            onVariantCrUpd: function (variantName, ChcVal) {
                var varName = variantName;
                var CheckValue = ChcVal;
                var oMatNumber = this.getView().byId("matnum");
                var MatLen = oMatNumber.getTokens().length;
                var VariantArray = [];
                var i1;
                var user = sap.ushell.Container.getService("UserInfo").getId();
                if (MatLen > 0) {
                    for (i1 = 0; i1 < MatLen; i1++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "matnum",
                            Counter: "",
                            Value: oMatNumber.getTokens()[i1].getText(),
                        });
                    };
                };
                var oDivision = this.getView().byId("division");
                var DivLen = oDivision.getTokens().length;
                var i2;
                if (DivLen > 0) {
                   for (i2 = 0; i2 < DivLen; i2++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "division",
                            Counter: "",
                            Value: oDivision.getTokens()[i2].getText(),
                        });
                    };
                };
                var oMatGrp = this.getView().byId("matgrp");
                var MGLen = oMatGrp.getTokens().length;
                var i3;
                if (MGLen > 0) {
                    for (i3 = 0; i3 < MGLen; i3++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "matgrp",
                            Counter: "",
                            Value: oMatGrp.getTokens()[i3].getText(),
                        });
                    };
                };
                var oSalesOrg = this.getView().byId("matdef");
                var SGLen = oSalesOrg.getTokens().length;
                var i4;
                if (SGLen > 0) {
                    for (i4 = 0; i4 < SGLen; i4++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "matdef",
                            Counter: "",
                            Value: oSalesOrg.getTokens()[i4].getText(),
                        });
                    };
                };
                var oMatType = this.getView().byId("mattype");
                var matLen = oMatType.getTokens().length;
                var i5;
                if (matLen > 0) {
                    for (i5 = 0; i5 < matLen; i5++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "mattype",
                            Counter: "",
                            Value: oMatType.getTokens()[i5].getText(),
                        });
                    };
                };    
                var oSalesDocType = this.getView().byId("doctype");
                var SDocLen = oSalesDocType.getTokens().length;
                var i6;
                if (SDocLen > 0) {
                    for (i6 = 0; i6 < SDocLen; i6++) {
                         VariantArray.push({
                            ProgramId: "SLSFRCST2",
                            Variant: varName,
                            User: user,
                            FieldName: "doctype",
                            Counter: "",
                            Value: oSalesDocType.getTokens()[i6].getText(),
                        });
                    };
                };           
                if (this.getView().byId("radR").getSelected() === true) {
                    VariantArray.push({
                        ProgramId: "SLSFRCST2",
                        Variant: varName,
                        User: user,
                        FieldName: "radiobutton",
                        Counter: "",
                        Value: "DATEREQ",
                    });
                };

                if (this.getView().byId("radC").getSelected() === true) {
                    VariantArray.push({
                        ProgramId: "SLSFRCST2",
                        Variant: varName,
                        User: user,
                        FieldName: "radiobutton",
                        Counter: "",
                        Value: "DATECONF",
                    });
                };
                var DeepEntry = {};
                DeepEntry.ProgramId = "SLSFRCST2";
                DeepEntry.Variant = varName;
                DeepEntry.User = user;
                if (CheckValue === true) {
                    DeepEntry.Default = "X";
                }
                else {
                    DeepEntry.Default = "";
                }
                DeepEntry.NavToVariantItem = VariantArray;
                var myVariantModel = sap.ui.getCore().getModel("myVariantModel");
                myVariantModel.setUseBatch(false);
                var v_url = "/VariantHeaderSet";
                var that = this;
                myVariantModel.create(v_url, DeepEntry, {
                    success: function (oData, oResponse) {
                        that.getView().byId("variantLabel").setText(varName);
                        MessageBox.success("View Saved Successfully");
                        sap.ui.getCore().byId("SaveVar").setVisible(true);
                        that._oPopover.close();
                    },
                    error: function (oError) {
                        var oError = JSON.parse(oError.responseText);
                        MessageBox.error(oError.error.message.value);
                    }
                });
            },
            //to update variant
            handleSavePress: function (oEvent) {
                var varName = this.getView().byId("variantLabel").getText();
                var defaultValue;
                var check;
                var model = sap.ui.getCore().byId("VariantList").getModel("VariantData").getData().Result;
                for (var i = 0; i < model.length; i++) {
                    if (varName === model[i].Variant) {
                        defaultValue = model[i].Default;
                    }
                }
                if (defaultValue === "X") {
                    check = true;
                }
                else {
                    check = false;
                }
               this.onVariantCrUpd(varName, check);
            },
            //to open the manage variant popup
            handleManagePress: function () {
                var oView = this.getView();
                var data = sap.ui.getCore().byId("VariantList").getModel("VariantData");
                var that = this;
                // create dialog lazily
                if (!this.byId("ManageVariant")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.kubota.otc.zsalesfrcstreport.fragments.VariantManage",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        that.getView().byId("VariantTable").setModel(data, "varManage");
                        oDialog.open();
                    });
                } else {
                    that.getView().byId("VariantTable").setModel(data, "varManage");
                    that.byId("ManageVariant").open();
                }
            },
            onCloseManageVariant: function () {
                this.byId("ManageVariant").close();
            },
            //to delete the variant
            onDeleteVariant: function (oEvent) {
                var varLabel = this.getView().byId("variantLabel").getText();
                var myVariantModel = sap.ui.getCore().getModel("myVariantModel");
                myVariantModel.setUseBatch(false);
                var variant = oEvent.getSource().getParent().getCells()[0].getText();
                var that = this;
                var v_url = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + variant + "')";
                myVariantModel.remove(v_url, {
                    method: "DELETE",
                    success: function (data) {
                        that.byId("ManageVariant").close();
                        that._oPopover.close();
                        if (variant === varLabel) {
                            that.getView().byId("variantLabel").setText("Standard*");
                            that.onClearAll();
                            sap.ui.getCore().byId("SaveVar").setVisible(false);
                        }
                        MessageBox.success("Variant Deleted");
                    },
                   error: function (oError) {
                            var oError = JSON.parse(oError.responseText);
                            MessageBox.error(oError.error.message.value);
                        }
                });
             },
             //to update the default variant
             onDefaultRBSelected: function (oEvent) {
                var user = sap.ushell.Container.getService("UserInfo").getId();
                var a = this.getView().byId("VariantTable").getModel("varManage").getData().Result;
                var oldDefault;
                var newDefault;
                for (var i = 0; i < a.length; i++) {
                    if (a[i].Default === "X") {
                        oldDefault = a[i].Variant;
                    }
                }
                newDefault = oEvent.getSource().getParent().getCells()[0].getText();
                if (newDefault !== oldDefault) {
                    var oEntry = {};
                    oEntry.ProgramId = "SLSFRCST2";
                    oEntry.Variant = newDefault;
                    oEntry.User = user;
                    oEntry.Default = "X";
                    var myVariantModel = sap.ui.getCore().getModel("myVariantModel");
                    myVariantModel.setUseBatch(false);
                    if (oldDefault !== undefined) {
                        var v_url = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + oldDefault + "')";
                    } else {
                        var v_url = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + newDefault + "')";
                    }
                    var that = this;
                    myVariantModel.update(v_url, oEntry, {
                        success: function (oData, oResponse) {
                            MessageBox.success("Variant default update Successfully");
                            that._oPopover.close();
                            that.byId("ManageVariant").close();
                        },
                        error: function (oError) {
                            var oError = JSON.parse(oError.responseText);
                            MessageBox.error(oError.error.message.value);
                        }
                    });
                 }
            },
            //to clear all the values of the selection screen
            onClearAll: function () {
                this.getView().byId("matnum").destroyTokens();
                this.getView().byId("division").destroyTokens();
                this.getView().byId("matgrp").destroyTokens();
                this.getView().byId("matdef").destroyTokens();
                this.getView().byId("mattype").destroyTokens();
                this.getView().byId("radR").setSelected(true);
            },
            //END OF DEFECT:8000000572   SGUHA

            onPersoButtonPressed: function() {
                this._oTPC.openDialog();
            }
        });
    });
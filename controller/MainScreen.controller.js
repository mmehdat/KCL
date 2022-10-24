sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/Token", "sap/ui/core/Fragment", "sap/m/MessageBox", "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator", "sap/ui/model/json/JSONModel", "sap/ui/core/util/Export", "sap/ui/core/util/ExportTypeCSV",
	"sap/ui/export/Spreadsheet", "sap/m/MessageToast", "sap/m/Dialog", "sap/m/DialogType", "sap/ui/table/TablePersoController"
], function(e, t, a, r, o, i, s, n, l, d, u, p, h, g) {
	"use strict";
	return e.extend("com.kubota.otc.zsalesfrcstreport.controller.MainScreen", {
		onInit: function() {
			var e = this.getView();
			var r = e.byId("matnum");
			var o = e.byId("division");
			var i = e.byId("matgrp");
			var s = e.byId("matdef");
			var n = e.byId("mattype");
			var strgLocId = e.byId("strgLoc");
			var l = function(e) {
				var a = e.text;
				return new t({
					text: a
				})
			};
			r.addValidator(l);
			o.addValidator(l);
			i.addValidator(l);
			s.addValidator(l);
			n.addValidator(l);
			var d = new Date;
			var u = new Date(d.getFullYear(), d.getMonth(), 1);
			e.byId("Month1PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month1Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month1Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month1OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month2PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month2Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month2Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month2OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month3PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month3Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month3Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month3OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month4PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month4Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month4Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month4OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month5PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month5Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month5Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month5OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month6PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month6Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month6Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month6OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month7PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month7Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month7Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month7OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month8PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month8Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month8Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month8OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month9PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month9Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month9Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month9OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month10PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month10Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month10Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month10OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month11PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month11Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month11Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month11OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month12PO").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " PO");
			e.byId("Month12Sales").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Sales");
			e.byId("Month12Return").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " Return");
			e.byId("Month12OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			u.setMonth(u.getMonth() + 1);
			e.byId("Month13OnHand").setText(u.toLocaleString("default", {
				month: "short",
				year: "numeric"
			}) + " OnHand");
			if (!this._oPopover) {
				a.load({
					name: "com.kubota.otc.zsalesfrcstreport.fragments.PopoverVariant",
					controller: this
				}).then(function(e) {
					this._oPopover = e;
					this.getView().addDependent(this._oPopover)
				}.bind(this))
			}
			this._oTPC = new g({
				table: this.getView().byId("HorzTable"),
				persoService: null
			});
			this.onRefreshCall()
		},
		onRefreshCall: function() {
			var e = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZGW_VARIANT_MGMNT_SRV");
			sap.ui.getCore().setModel(e, "myVariantModel");
			var t = sap.ui.getCore().getModel("myVariantModel");
			t.setUseBatch(false);
			var a = "/VariantHeaderSet";
			var o = sap.ushell.Container.getService("UserInfo").getId();
			var i = new sap.ui.model.Filter("ProgramId", "EQ", "SLSFRCST2");
			var s = new sap.ui.model.Filter("User", "EQ", o);
			var n = this;
			var l;
			t.read(a, {
				filters: [i, s],
				urlParameters: {
					$expand: "NavToVariantItem"
				},
				success: function(e, t) {
					var a = new sap.ui.model.json.JSONModel({
						Result: e.results
					});
					n.getView().setModel(a, "VarModel");
					var r = n.getView().getModel("VarModel");
					if (e.results.length > 0) {
						for (l = 0; l < e.results.length; l++) {
							if (e.results[l].Default === "X") {
								if (n.getView().byId("variantLabel").getText() !== "Standard*") {
									sap.ui.getCore().byId("SaveVar").setVisible(true)
								}
								n.oVariantpassValues(e.results[l].Variant, r)
							}
						}
					} else {
						sap.ui.getCore().byId("SaveVar").setVisible(false)
					}
				},
				error: function(e) {
					var e = JSON.parse(e.responseText);
					r.error(e.error.message.value)
				}
			})
		},
		createColumnConfig: function() {
			var e = this.getView().byId("Month1PO").getText();
			var t = this.getView().byId("Month1Sales").getText();
			var a = this.getView().byId("Month1OnHand").getText();
			var r = this.getView().byId("Month1Return").getText();
			var o = this.getView().byId("Month2PO").getText();
			var i = this.getView().byId("Month2Sales").getText();
			var s = this.getView().byId("Month2OnHand").getText();
			var n = this.getView().byId("Month2Return").getText();
			var l = this.getView().byId("Month3PO").getText();
			var d = this.getView().byId("Month3Sales").getText();
			var u = this.getView().byId("Month3OnHand").getText();
			var p = this.getView().byId("Month3Return").getText();
			var h = this.getView().byId("Month4PO").getText();
			var g = this.getView().byId("Month4Sales").getText();
			var y = this.getView().byId("Month4OnHand").getText();
			var m = this.getView().byId("Month4Return").getText();
			var c = this.getView().byId("Month5PO").getText();
			var b = this.getView().byId("Month5Sales").getText();
			var v = this.getView().byId("Month5OnHand").getText();
			var f = this.getView().byId("Month5Return").getText();
			var V = this.getView().byId("Month6PO").getText();
			var M = this.getView().byId("Month6Sales").getText();
			var T = this.getView().byId("Month6OnHand").getText();
			var S = this.getView().byId("Month6Return").getText();
			var w = this.getView().byId("Month7PO").getText();
			var I = this.getView().byId("Month7Sales").getText();
			var x = this.getView().byId("Month7OnHand").getText();
			var H = this.getView().byId("Month7Return").getText();
			var O = this.getView().byId("Month8PO").getText();
			var C = this.getView().byId("Month8Sales").getText();
			var P = this.getView().byId("Month8OnHand").getText();
			var N = this.getView().byId("Month8Return").getText();
			var D = this.getView().byId("Month9PO").getText();
			var E = this.getView().byId("Month9Sales").getText();
			var L = this.getView().byId("Month9OnHand").getText();
			var R = this.getView().byId("Month9Return").getText();
			var F = this.getView().byId("Month10PO").getText();
			var k = this.getView().byId("Month10Sales").getText();
			var _ = this.getView().byId("Month10OnHand").getText();
			var U = this.getView().byId("Month10Return").getText();
			var B = this.getView().byId("Month11PO").getText();
			var G = this.getView().byId("Month11Sales").getText();
			var Q = this.getView().byId("Month11OnHand").getText();
			var z = this.getView().byId("Month11Return").getText();
			var A = this.getView().byId("Month12PO").getText();
			var J = this.getView().byId("Month12Sales").getText();
			var j = this.getView().byId("Month12OnHand").getText();
			var X = this.getView().byId("Month12Return").getText();
			var Y = this.getView().byId("Month13OnHand").getText();
			return [{
				label: "Material",
				property: "Material",
				width: "12"
			}, {
				label: "Material Description",
				property: "MatDesc",
				width: "25"
			}, {
				label: "Prod Hire.",
				property: "ProdHier",
				width: "12"
			}, {
				label: "Material Group",
				property: "MatGroup",
				width: "12"
			}, {
				label: "Material Group Desc",
				property: "MatGroupDesc",
				width: "25"
			}, {
				label: "Cross-Plant Material Status",
				property: "CPMatStatus",
				width: "12"
			}, {
				label: "Cross-Plant Material Status Description",
				property: "CPMatStatusDesc",
				width: "12"
			}, {
				label: "Cross-distribution-chain material status",
				property: "CDCMatStatus",
				width: "12"
			}, {
				label: "Cross-distribution-chain material status Description",
				property: "CDCMatStatusDesc",
				width: "12"
			}, {
				label: "Plant-Specific Material Status",
				property: "MatStatus",
				width: "12"
			}, {
				label: "Plant-Specific Material Status Description",
				property: "MatStatusDesc",
				width: "12"
			}, {
				label: "Material Type",
				property: "MatType",
				width: "12"
			}, {
				label: "Material Type Description",
				property: "MatTypeDesc",
				width: "18"
			}, {
				label: "Material group 1",
				property: "MatGroup1",
				width: "12"
			}, {
				label: "Material group 1 Description",
				property: "MatGroup1Desc",
				width: "12"
			}, {
				label: "Control Code",
				property: "ControlCode",
				width: "18"
			}, {
				label: "Purchasing Group",
				property: "PurchGroup",
				width: "18"
			}, {
				label: "No Of Times PO Placed",
				property: "POPlacedCount",
				width: "18"
			}, {
				label: a,
				property: "Stock1",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: e,
				property: "Po1",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: r,
				property: "Rt1",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: t,
				property: "Sls1",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: s,
				property: "Stock2",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: o,
				property: "Po2",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: n,
				property: "Rt2",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: i,
				property: "Sls2",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: u,
				property: "Stock3",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: l,
				property: "Po3",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: p,
				property: "Rt3",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: d,
				property: "Sls3",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: y,
				property: "Stock4",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: h,
				property: "Po4",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: m,
				property: "Rt4",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: g,
				property: "Sls4",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: v,
				property: "Stock5",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: c,
				property: "Po5",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: f,
				property: "Rt5",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: b,
				property: "Sls5",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: T,
				property: "Stock6",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: V,
				property: "Po6",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: S,
				property: "Rt6",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: M,
				property: "Sls6",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: x,
				property: "Stock7",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: w,
				property: "Po7",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: H,
				property: "Rt7",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: I,
				property: "Sls7",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: P,
				property: "Stock8",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: O,
				property: "Po8",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: N,
				property: "Rt8",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: C,
				property: "Sls8",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: L,
				property: "Stock9",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: D,
				property: "Po9",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: R,
				property: "Rt9",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: E,
				property: "Sls9",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: _,
				property: "Stock10",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: F,
				property: "Po10",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: U,
				property: "Rt10",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: k,
				property: "Sls10",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: Q,
				property: "Stock11",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: B,
				property: "Po11",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: z,
				property: "Rt11",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: G,
				property: "Sls11",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: j,
				property: "Stock12",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: A,
				property: "Po12",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: X,
				property: "Rt12",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: J,
				property: "Sls12",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}, {
				label: Y,
				property: "Stock13",
				width: "12",
				type: sap.ui.export.EdmType.Number
			}]
		},
		downloadToExcel: function() {
			var e, t, a, r;
			e = this.createColumnConfig();
			t = this.getView().getModel("HorzTableDataModel").getProperty("/");
			a = {
				workbook: {
					columns: e
				},
				dataSource: t
			};
			r = new d(a);
			r.build().then(function() {
				u.show("Spreadsheet export has finished")
			}).finally(r.destroy)
		},
		onExecute: function(e) {
			var t = this.getView();
			var a = this.getOwnerComponent().getModel("MainService");
			var o = t.byId("radC").getSelected();
			var i = t.byId("radR").getSelected();
			var s = this;
			var n = "";
			var l = new sap.ui.model.Filter;
			var d = [];
			var u = [];
			var p = [];
			var h = [];
			var g = [];
			var y = [];
			var sLoc = [];
			var m = this.getView().byId("matnum");
			var c = m.getTokens().length;
			var b = [];
			var v;
			if (c > 0) {
				for (v = 0; v < c; v++) {
					l = {
						filters: [new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, m.getTokens()[v].getText().toUpperCase())],
						and: false
					};
					d.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, "")]
				};
				d.push(l.filters[0])
			}
			var f = this.getView().byId("division");
			var V = f.getTokens().length;
			var M = [];
			var T;
			if (V > 0) {
				for (T = 0; T < V; T++) {
					l = {
						filters: [new sap.ui.model.Filter("Division", sap.ui.model.FilterOperator.EQ, f.getTokens()[T].getText().toUpperCase())],
						and: false
					};
					u.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("Division", sap.ui.model.FilterOperator.EQ, "")]
				};
				u.push(l.filters[0])
			}
			var S = this.getView().byId("matgrp");
			var w = S.getTokens().length;
			var I = [];
			var x;
			if (w > 0) {
				for (x = 0; x < w; x++) {
					l = {
						filters: [new sap.ui.model.Filter("MatGroup", sap.ui.model.FilterOperator.EQ, S.getTokens()[x].getText().toUpperCase())],
						and: false
					};
					p.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("MatGroup", sap.ui.model.FilterOperator.EQ, "")]
				};
				p.push(l.filters[0])
			}
			var H = this.getView().byId("matdef");
			var O = H.getTokens().length;
			var C = [];
			var P;
			if (O > 0) {
				for (P = 0; P < O; P++) {
					l = {
						filters: [new sap.ui.model.Filter("SalesOrg", sap.ui.model.FilterOperator.EQ, H.getTokens()[P].getText().toUpperCase())],
						and: false
					};
					h.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("SalesOrg", sap.ui.model.FilterOperator.EQ, "")]
				};
				h.push(l.filters[0])
			}
			var N = this.getView().byId("mattype");
			var D = N.getTokens().length;
			var E = [];
			var L;
			if (D > 0) {
				for (L = 0; L < D; L++) {
					l = {
						filters: [new sap.ui.model.Filter("MatType", sap.ui.model.FilterOperator.EQ, N.getTokens()[L].getText().toUpperCase())],
						and: false
					};
					g.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("MatType", sap.ui.model.FilterOperator.EQ, "")]
				};
				g.push(l.filters[0])
			}
			var R = this.getView().byId("doctype");
			var F = R.getTokens().length;
			var k = [];
			var _;
			if (F > 0) {
				for (_ = 0; _ < F; _++) {
					l = {
						filters: [new sap.ui.model.Filter("Salesdocumenttype", sap.ui.model.FilterOperator.EQ, R.getTokens()[_].getText().toUpperCase())],
						and: false
					};
					y.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("Salesdocumenttype", sap.ui.model.FilterOperator.EQ, "")]
				};
				y.push(l.filters[0])
			}
			//--------------------- // MEDHAT Storage Location // -----------------------------
			var strgLocID = this.getView().byId("strgLoc"); //S
			var strgLocLenght = strgLocID.getTokens().length; //W
			var I = []; // I
			x = 0;
			if (strgLocLenght > 0) {
				for (x = 0; x < strgLocLenght; x++) {
					l = {
						filters: [new sap.ui.model.Filter("StorageLocation", sap.ui.model.FilterOperator.EQ, strgLocID.getTokens()[x].getText().toUpperCase())],
						and: false
					};
					sLoc.push(l.filters[0])
				}
			} else {
				l = {
					filters: [new sap.ui.model.Filter("StorageLocation", sap.ui.model.FilterOperator.EQ, "")]
				};
				sLoc.push(l.filters[0])
			}
			//--------------------- // MEDHAT Storage Location // -----------------------------
			if (o == true) {
				n = "CON"
			}
			if (i == true) {
				n = "REQ"
			}
			a.setHeaders({
				AGGRGN_BY: n
			});
			a.read("/SalesForecastDataSet", {
				filters: [new sap.ui.model.Filter({
					filters: [new sap.ui.model.Filter(d), new sap.ui.model.Filter(u), new sap.ui.model.Filter(p), new sap.ui.model.Filter(h),
						new sap.ui.model.Filter(g), new sap.ui.model.Filter(y),new sap.ui.model.Filter(sLoc)
					],
					and: true
				})],
				success: function(e, t) {
					var a = new sap.ui.model.json.JSONModel;
					a.setData(e.results);
					s.getView().setModel(a, "HorzTableDataModel");
					s.getView().getModel("HorzTableDataModel").refresh();
					console.log(e)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_bindModel: function() {
			var e = this.getOwnerComponent().getModel("MainService");
			this.getView().byId("DivisionVH").setModel(e, "VHModel");
			this.getView().byId("MatDefVH").setModel(e, "VHModel");
			this.getView().byId("MatGrpVH").setModel(e, "VHModel");
			this.getView().byId("MatNumVH").setModel(e, "VHModel");
			this.getView().byId("MatTypeVH").setModel(e, "VHModel");
			this.getView().byId("SalesDocTypeVH").setModel(e, "VHModel")
		},
		MatNumValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("MatNumVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.MatNumVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog1);
					this.bindModelMatNum();
					e.open()
				}.bind(this))
			} else {
				this.byId("MatNumVH").open()
			}
		},
		_handleMatNumValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("Material", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("MatNumVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelMatNum: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "E");
			t.read("/MaterialVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("MatNumVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handleMatNumValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("matnum");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				});
				this.byId("MatNumVH").destroy()
			}
		},
		DivisionValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("DivisionVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.DivisionVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog2);
					this.bindModelDivision();
					e.open()
				}.bind(this))
			} else {
				this.byId("DivisionVH").open()
			}
		},
		_handleDivisionValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("DivisionName", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("DivisionVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelDivision: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "E");
			t.read("/DivisionVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("DivisionVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handleDivValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("division");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				})
			}
			this.byId("DivisionVH").destroy()
		},
		MatTypeValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("MatTypeVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.MatTypeVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog3);
					this.bindModelMatType();
					e.open()
				}.bind(this))
			} else {
				this.byId("MatTypeVH").open()
			}
		},
		_handleMatTypeValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("MaterialType", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("MatTypeVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelMatType: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "E");
			t.read("/MaterialTypeVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("MatTypeVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handleMatTypeValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("mattype");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				})
			}
			this.byId("MatTypeVH").destroy()
		},
		MatGrpValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("MatGrpVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.MatGrpVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog4);
					this.bindModelMatGrp();
					e.open()
				}.bind(this))
			} else {
				this.byId("MatGrpVH").open()
			}
		},
		_handleMatGrpValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("MaterialGroup", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("MatGrpVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelMatGrp: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "E");
			t.read("/MatGroupVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("MatGrpVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handleMatGrpValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("matgrp");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				})
			}
			this.byId("MatGrpVH").destroy()
		},
		MatDefValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("SalesOrgVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.SalesOrgVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog5);
					this.bindModelSalesOrg();
					e.open()
				}.bind(this))
			} else {
				this.byId("SalesOrgVH").open()
			}
		},
		_handleSalesOrgValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("SalesOrg", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("SalesOrgVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelSalesOrg: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "E");
			t.read("/SalesOrgVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("SalesOrgVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handleSalesOrgValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("matdef");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				})
			}
			this.byId("SalesOrgVH").destroy()
		},
		SalesDocTypeValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("SalesDocTypeVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.SalesDocTypeVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog3);
					this.bindModelSalesDocType();
					e.open()
				}.bind(this))
			} else {
				this.byId("SalesDocTypeVH").open()
			}
		},
		_handleSalesDocTypeValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("Salesdocumenttype", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("SalesDocTypeVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelSalesDocType: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			var o = new sap.ui.model.Filter("Language", "EQ", "EN");
			t.read("/SalesDocTypeVHSet", {
				filters: [o],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel();
					r.setData(t.results);
					e.getView().byId("SalesDocTypeVH").setModel(r, "VHModelResult");
					console.log(t);
				},
				error: function(e) {
					r.error(e.message);
				}
			});
		},
		_handleSalesDocTypeValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("doctype");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}));
				});
			}
			this.byId("SalesDocTypeVH").destroy();
		},

		// --------------------- // MEDHAT -> Storage Location <- MEDHAT // -----------------------
		strgLocValueHelp: function(e) {
			var t = this.getView();
			if (!this.byId("strgLocVH")) {
				a.load({
					id: t.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.strgLocVH",
					controller: this
				}).then(function(e) {
					this._valueHelpDialog = e;
					this.getView().addDependent(this._valueHelpDialog3);
					this.bindModelstrgLoc();
					e.open()
				}.bind(this))
			} else {
				this.byId("strgLocVH").open()
			}
		},
		_strgLocValueHelpSearch: function(e) {
			var t = e.getParameter("value");
			var a = new o("Prodorderissuelocation", i.Contains, t);
			e.getSource().getBinding("items").filter([a]);
			this.getView().byId("strgLocVH").getModel("VHModelResult").setSizeLimit(1e5)
		},
		bindModelstrgLoc: function() {
			var e = this;
			var t = this.getOwnerComponent().getModel("MainService");
			t.setUseBatch(false);
			var a = sap.ui.getCore().getConfiguration().getLanguage();
			// var o = new sap.ui.model.Filter("Language", "EQ", "EN");
			t.read("/StorageLocationVHSet", {
				filters: [ ],
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel;
					r.setData(t.results);
					e.getView().byId("strgLocVH").setModel(r, "VHModelResult");
					console.log(t)
				},
				error: function(e) {
					r.error(e.message)
				}
			})
		},
		_handlestrgLocValueHelpClose: function(e) {
			var a = e.getParameter("selectedItems"),
				r = this.byId("strgLoc");
			if (a && a.length > 0) {
				a.forEach(function(e) {
					r.addToken(new t({
						text: e.getTitle()
					}))
				})
			}
			this.byId("strgLocVH").destroy()
		},
		// --------------------- // MEDHAT -> Storage Location <- MEDHAT // -----------------------
		onVariantSelect: function(e) {
			var t = e.getSource();
			if (!this._oPopover) {
				a.load({
					name: "com.kubota.otc.zsalesfrcstreport.fragments.PopoverVariant",
					controller: this
				}).then(function(e) {
					this._oPopover = e;
					this.getView().addDependent(this._oPopover);
					this.bindPopOver();
					this._oPopover.openBy(t)
				}.bind(this))
			} else {
				this.bindPopOver();
				this._oPopover.openBy(t)
			}
		},
		bindPopOver: function() {
			var e = this;
			var t = sap.ui.getCore().getModel("myVariantModel");
			t.setUseBatch(false);
			var a = "/VariantHeaderSet";
			var o = sap.ushell.Container.getService("UserInfo").getId();
			var i = new sap.ui.model.Filter("ProgramId", "EQ", "SLSFRCST2");
			var s = new sap.ui.model.Filter("User", "EQ", o);
			t.read(a, {
				filters: [i, s],
				urlParameters: {
					$expand: "NavToVariantItem"
				},
				success: function(t, a) {
					var r = new sap.ui.model.json.JSONModel({
						Result: t.results
					});
					sap.ui.getCore().byId("VariantList").setModel(r, "VariantData");
					if (t.results.length > 0) {
						for (var o = 0; o < t.results.length; o++) {
							if (t.results[o].Default === "X") {
								if (e.getView().byId("variantLabel").getText() !== "Standard*") {
									sap.ui.getCore().byId("SaveVar").setVisible(true)
								}
							}
						}
					} else {
						sap.ui.getCore().byId("SaveVar").setVisible(false)
					}
				},
				error: function(e) {
					var e = JSON.parse(e.responseText);
					r.error(e.error.message.value)
				}
			})
		},
		onVariantClick: function(e) {
			var t = e.getSource().getTitle();
			var a = sap.ui.getCore().byId("VariantList").getModel("VariantData");
			this.oVariantpassValues(t, a)
		},
		oVariantpassValues: function(e, a) {
			var r = e;
			var o = a.getData().Result;
			var i = o.length;
			var s = this.getView();
			sap.ui.getCore().byId("SaveVar").setVisible(true);
			s.byId("variantLabel").setText(r);
			var n = this.getView().byId("matnum");
			var l = this.getView().byId("division");
			var d = this.getView().byId("matgrp");
			var u = this.getView().byId("matdef");
			var p = this.getView().byId("mattype");
			var h = this.getView().byId("doctype");
			n.destroyTokens();
			l.destroyTokens();
			d.destroyTokens();
			u.destroyTokens();
			p.destroyTokens();
			h.destroyTokens();
			for (var g = 0; g < i; g++) {
				if (o[g].Variant === r) {
					for (var y = 0; y < o[g].NavToVariantItem.results.length; y++) {
						if (o[g].NavToVariantItem.results[y].FieldName === "matnum") {
							n.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "division") {
							l.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "matgrp") {
							d.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "matdef") {
							u.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "mattype") {
							p.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "doctype") {
							h.addToken(new t({
								text: o[g].NavToVariantItem.results[y].Value
							}))
						}
						if (o[g].NavToVariantItem.results[y].FieldName === "radiobutton") {
							if (o[g].NavToVariantItem.results[y].Value === "DATEREQ") {
								s.byId("radR").setSelected(true);
								s.byId("radC").setSelected(false)
							} else if (o[g].NavToVariantItem.results[y].Value === "DATECONF") {
								s.byId("radR").setSelected(false);
								s.byId("radC").setSelected(true)
							}
						}
					}
				}
			}
		},
		handleSaveAsPress: function() {
			if (!this.oApproveDialog) {
				this.oApproveDialog = new p({
					type: h.Message,
					title: "Save View",
					content: [new sap.m.Label({
						text: "View",
						labelFor: "VarInput"
					}), new sap.m.Input("VarInput", {
						width: "100%",
						id: "VariantInputField",
						required: true
					}), new sap.m.Label({
						text: "Default:",
						labelFor: "DefaultCheck"
					}), new sap.m.CheckBox("DefaultCheck", {
						id: "DefaultCheckBox"
					})],
					beginButton: new sap.m.Button({
						type: sap.m.ButtonType.Emphasized,
						text: "Save",
						press: function() {
							this.onVariantCreate();
							this.oApproveDialog.close()
						}.bind(this)
					}),
					endButton: new sap.m.Button({
						text: "Cancel",
						press: function() {
							this.oApproveDialog.close()
						}.bind(this)
					})
				})
			}
			this.oApproveDialog.open()
		},
		onVariantCreate: function() {
			var e = sap.ui.getCore().byId("VarInput").getValue();
			var t = sap.ui.getCore().byId("DefaultCheck").getSelected();
			if (e === "") {
				r.error("Please enter a variant name")
			} else {
				this.onVariantCrUpd(e, t)
			}
		},
		onVariantCrUpd: function(e, t) {
			var a = e;
			var o = t;
			var i = this.getView().byId("matnum");
			var s = i.getTokens().length;
			var n = [];
			var l;
			var d = sap.ushell.Container.getService("UserInfo").getId();
			if (s > 0) {
				for (l = 0; l < s; l++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "matnum",
						Counter: "",
						Value: i.getTokens()[l].getText()
					})
				}
			}
			var u = this.getView().byId("division");
			var p = u.getTokens().length;
			var h;
			if (p > 0) {
				for (h = 0; h < p; h++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "division",
						Counter: "",
						Value: u.getTokens()[h].getText()
					})
				}
			}
			var g = this.getView().byId("matgrp");
			var y = g.getTokens().length;
			var m;
			if (y > 0) {
				for (m = 0; m < y; m++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "matgrp",
						Counter: "",
						Value: g.getTokens()[m].getText()
					})
				}
			}
			var c = this.getView().byId("matdef");
			var b = c.getTokens().length;
			var v;
			if (b > 0) {
				for (v = 0; v < b; v++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "matdef",
						Counter: "",
						Value: c.getTokens()[v].getText()
					})
				}
			}
			var f = this.getView().byId("mattype");
			var V = f.getTokens().length;
			var M;
			if (V > 0) {
				for (M = 0; M < V; M++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "mattype",
						Counter: "",
						Value: f.getTokens()[M].getText()
					})
				}
			}
			var T = this.getView().byId("doctype");
			var S = T.getTokens().length;
			var w;
			if (S > 0) {
				for (w = 0; w < S; w++) {
					n.push({
						ProgramId: "SLSFRCST2",
						Variant: a,
						User: d,
						FieldName: "doctype",
						Counter: "",
						Value: T.getTokens()[w].getText()
					})
				}
			}
			if (this.getView().byId("radR").getSelected() === true) {
				n.push({
					ProgramId: "SLSFRCST2",
					Variant: a,
					User: d,
					FieldName: "radiobutton",
					Counter: "",
					Value: "DATEREQ"
				})
			}
			if (this.getView().byId("radC").getSelected() === true) {
				n.push({
					ProgramId: "SLSFRCST2",
					Variant: a,
					User: d,
					FieldName: "radiobutton",
					Counter: "",
					Value: "DATECONF"
				})
			}
			var I = {};
			I.ProgramId = "SLSFRCST2";
			I.Variant = a;
			I.User = d;
			if (o === true) {
				I.Default = "X"
			} else {
				I.Default = ""
			}
			I.NavToVariantItem = n;
			var x = sap.ui.getCore().getModel("myVariantModel");
			x.setUseBatch(false);
			var H = "/VariantHeaderSet";
			var O = this;
			x.create(H, I, {
				success: function(e, t) {
					O.getView().byId("variantLabel").setText(a);
					r.success("View Saved Successfully");
					sap.ui.getCore().byId("SaveVar").setVisible(true);
					O._oPopover.close()
				},
				error: function(e) {
					var e = JSON.parse(e.responseText);
					r.error(e.error.message.value)
				}
			})
		},
		handleSavePress: function(e) {
			var t = this.getView().byId("variantLabel").getText();
			var a;
			var r;
			var o = sap.ui.getCore().byId("VariantList").getModel("VariantData").getData().Result;
			for (var i = 0; i < o.length; i++) {
				if (t === o[i].Variant) {
					a = o[i].Default
				}
			}
			if (a === "X") {
				r = true
			} else {
				r = false
			}
			this.onVariantCrUpd(t, r)
		},
		handleManagePress: function() {
			var e = this.getView();
			var t = sap.ui.getCore().byId("VariantList").getModel("VariantData");
			var r = this;
			if (!this.byId("ManageVariant")) {
				a.load({
					id: e.getId(),
					name: "com.kubota.otc.zsalesfrcstreport.fragments.VariantManage",
					controller: this
				}).then(function(a) {
					e.addDependent(a);
					r.getView().byId("VariantTable").setModel(t, "varManage");
					a.open()
				})
			} else {
				r.getView().byId("VariantTable").setModel(t, "varManage");
				r.byId("ManageVariant").open()
			}
		},
		onCloseManageVariant: function() {
			this.byId("ManageVariant").close()
		},
		onDeleteVariant: function(e) {
			var t = this.getView().byId("variantLabel").getText();
			var a = sap.ui.getCore().getModel("myVariantModel");
			a.setUseBatch(false);
			var o = e.getSource().getParent().getCells()[0].getText();
			var i = this;
			var s = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + o + "')";
			a.remove(s, {
				method: "DELETE",
				success: function(e) {
					i.byId("ManageVariant").close();
					i._oPopover.close();
					if (o === t) {
						i.getView().byId("variantLabel").setText("Standard*");
						i.onClearAll();
						sap.ui.getCore().byId("SaveVar").setVisible(false)
					}
					r.success("Variant Deleted")
				},
				error: function(e) {
					var e = JSON.parse(e.responseText);
					r.error(e.error.message.value)
				}
			})
		},
		onDefaultRBSelected: function(e) {
			var t = sap.ushell.Container.getService("UserInfo").getId();
			var a = this.getView().byId("VariantTable").getModel("varManage").getData().Result;
			var o;
			var i;
			for (var s = 0; s < a.length; s++) {
				if (a[s].Default === "X") {
					o = a[s].Variant
				}
			}
			i = e.getSource().getParent().getCells()[0].getText();
			if (i !== o) {
				var n = {};
				n.ProgramId = "SLSFRCST2";
				n.Variant = i;
				n.User = t;
				n.Default = "X";
				var l = sap.ui.getCore().getModel("myVariantModel");
				l.setUseBatch(false);
				if (o !== undefined) {
					var d = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + o + "')"
				} else {
					var d = "/VariantHeaderSet(ProgramId='SLSFRCST2',Variant='" + i + "')"
				}
				var u = this;
				l.update(d, n, {
					success: function(e, t) {
						r.success("Variant default update Successfully");
						u._oPopover.close();
						u.byId("ManageVariant").close()
					},
					error: function(e) {
						var e = JSON.parse(e.responseText);
						r.error(e.error.message.value)
					}
				})
			}
		},
		onClearAll: function() {
			this.getView().byId("matnum").destroyTokens();
			this.getView().byId("division").destroyTokens();
			this.getView().byId("matgrp").destroyTokens();
			this.getView().byId("matdef").destroyTokens();
			this.getView().byId("mattype").destroyTokens();
			this.getView().byId("radR").setSelected(true)
		},
		onPersoButtonPressed: function() {
			this._oTPC.openDialog()
		}
	})
});
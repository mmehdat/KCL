sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/kubota/otc/zsalesfrcstreport/model/models"],function(e,t,o){"use strict";return e.extend("com.kubota.otc.zsalesfrcstreport.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(o.createDeviceModel(),"device")}})});
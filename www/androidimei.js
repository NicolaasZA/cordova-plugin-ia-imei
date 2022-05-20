cordova.define("cordova-plugin-ia-imei.AndroidIMEI", function (require, exports, module) {
	"use strict";
	function AndroidIMEI() { }

	const emptyCallback = () => { };

	AndroidIMEI.prototype.imei = function (successCallback, errorCallback) {
		options = {};
		successCallback = successCallback || emptyCallback;
		errorCallback = errorCallback || emptyCallback;
		cordova.exec(successCallback || null, errorCallback || null, "AndroidIMEI", "getDeviceId", [options]);
	};

	AndroidIMEI.install = function () {
		if (!window.plugins) {
			window.plugins = {};
		}

		window.plugins.androidimei = new AndroidIMEI();
		return window.plugins.androidimei;
	};

	cordova.addConstructor(AndroidIMEI.install);

});

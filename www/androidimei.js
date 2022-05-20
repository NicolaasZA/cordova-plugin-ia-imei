// cordova.define("cordova-plugin-ia-imei.AndroidIMEI", function (require, exports, module) {
	"use strict";
	function AndroidIMEI() { }

	AndroidIMEI.prototype.imei = function (successCallback, errorCallback) {
		cordova.exec(successCallback || null, errorCallback || null, "AndroidIMEI", "getDeviceId", []);
	};

	AndroidIMEI.install = function () {
		if (!window.plugins) {
			window.plugins = {};
		}

		window.plugins.androidimei = new AndroidIMEI();
		return window.plugins.androidimei;
	};

	cordova.addConstructor(AndroidIMEI.install);

// });

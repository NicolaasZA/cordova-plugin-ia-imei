cordova.define("cordova-plugin-ia-imei.AndroidIMEI", function (require, exports, module) {
	"use strict";
	function Launcher() { }

	const emptyCallback = () => { };

	Launcher.prototype.imei = function (successCallback, errorCallback) {
		options = {};
		successCallback = successCallback || emptyCallback;
		errorCallback = errorCallback || emptyCallback;
		cordova.exec(successCallback || null, errorCallback || null, "AndroidIMEI", "getDeviceId", [options]);
	};

	Launcher.install = function () {
		if (!window.plugins) {
			window.plugins = {};
		}

		window.plugins.launcher = new Launcher();
		return window.plugins.launcher;
	};

	cordova.addConstructor(Launcher.install);

});

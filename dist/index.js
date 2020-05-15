"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observer = /** @class */ (function () {
    function observer() {
        this.calls = [];
    }
    observer.prototype.callcount = function () {
        return this.calls.length;
    };
    observer.prototype.call = function (index) {
        return this.calls[index];
    };
    observer.prototype.calledoncewith = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.calls.length != 1) {
            return false;
        }
        if (this.calls[0].length != args.length) {
            return false;
        }
        for (var i = 0; i < args.length; i++) {
            if (this.calls[0][i] != args[i]) {
                return false;
            }
        }
        return true;
    };
    observer.prototype.fake = function (returnvalue) {
        var _this = this;
        this.fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.calls.push(args);
            return returnvalue;
        };
        return this.fn;
    };
    return observer;
}());
exports.default = observer;

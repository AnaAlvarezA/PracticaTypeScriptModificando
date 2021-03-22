"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(_phoneNumber, _phoneType) {
        this._phoneNumber = _phoneNumber;
        this._phoneType = _phoneType;
    }
    Object.defineProperty(Phone.prototype, "phoneType", {
        get: function () {
            return this._phoneType; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
        },
        set: function (value) {
            this._phoneType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;

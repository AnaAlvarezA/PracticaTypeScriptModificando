"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(_mailAddress, _mailType) {
        this._mailAddress = _mailAddress;
        this._mailType = _mailType;
    }
    Object.defineProperty(Mail.prototype, "mailAddress", {
        get: function () {
            return this._mailAddress;
        },
        set: function (value) {
            this._mailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "mailType", {
        get: function () {
            return this._mailType; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
        },
        set: function (value) {
            this._mailType = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;

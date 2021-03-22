"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(_street, _strNumber, _postcode, _country, _town, _floor, _letter) {
        this._street = _street;
        this._strNumber = _strNumber;
        this._postcode = _postcode;
        this._country = _country;
        this._town = _town;
        this._floor = _floor;
        this._letter = _letter;
    }
    Object.defineProperty(Address.prototype, "town", {
        get: function () {
            return this._town;
        },
        set: function (value) {
            this._town = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "letter", {
        get: function () {
            return this._letter; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
        },
        set: function (value) {
            this._letter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "floor", {
        get: function () {
            return this._floor; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
        },
        set: function (value) {
            this._floor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postcode", {
        get: function () {
            return this._postcode;
        },
        set: function (value) {
            this._postcode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "strNumber", {
        get: function () {
            return this._strNumber;
        },
        set: function (value) {
            this._strNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (value) {
            this._street = value;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;

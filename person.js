"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_name, _surnames, _age, _dni, _birthday, _favouriteColour, _sex, _addresses, _emails, _phones, _notes) {
        this._name = _name;
        this._surnames = _surnames;
        this._age = _age;
        this._dni = _dni;
        this._birthday = _birthday;
        this._favouriteColour = _favouriteColour;
        this._sex = _sex;
        this._addresses = _addresses;
        this._emails = _emails;
        this._phones = _phones;
        this._notes = _notes;
    }
    Object.defineProperty(Person.prototype, "notes", {
        get: function () {
            return this._notes; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        set: function (value) {
            this._addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "emails", {
        get: function () {
            return this._emails;
        },
        set: function (value) {
            this._emails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phones", {
        get: function () {
            return this._phones;
        },
        set: function (value) {
            this._phones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "favouriteColour", {
        get: function () {
            return this._favouriteColour;
        },
        set: function (value) {
            this._favouriteColour = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (value) {
            this._sex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surnames", {
        get: function () {
            return this._surnames;
        },
        set: function (value) {
            this._surnames = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;

import { Address } from "./address";
import { Phone } from "./phone";
import { Mail } from "./mail";

type genre = "masculino" | "femenino";
type color = "rojo" | "amarillo" | "verde" | "azul"; //por decisión propia

export class Person {  

    constructor (   
        private _name: string, 
        private _surnames: string, 
        private _age: number, 
        private _dni: string, 
        private _birthday: Date, 
        private _favouriteColour: color, 
        private _sex: genre, 
        private _addresses: Address[], 
        private _emails: Mail[], 
        private _phones: Phone[], 
        private _notes?: string[]) {
              
    }

    public get notes(): string[] {
        return this._notes!;  //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
    }
    public set notes(value: string[]) {
        this._notes = value;
    }
    public get addresses(): Address[] {
        return this._addresses;
    }
    public set addresses(value: Address[]) {
        this._addresses = value;
    }
    public get emails(): Mail[] {
        return this._emails;
    }
    public set emails(value: Mail[]) {
        this._emails = value;
    }
    public get phones(): Phone[] {
        return this._phones;
    }
    public set phones(value: Phone[]) {
        this._phones = value;
    }
    public get favouriteColour(): color {
        return this._favouriteColour;
    }
    public set favouriteColour(value: color) {
        this._favouriteColour = value;
    }
    public get birthday(): Date {
        return this._birthday;
    }
    public set birthday(value: Date) {
        this._birthday = value; 
    }
    public get sex(): genre {
        return this._sex;
    }
    public set sex(value: genre) {
        this._sex = value;
    }
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get surnames(): string {
        return this._surnames;
    }
    public set surnames(value: string) {
        this._surnames = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

        
}


export class Address {
  
    constructor(
        
        private _street: string, 
        private _strNumber: number, 
        private _postcode: number, 
        private _country: string, 
        private _town: string,
        private _floor?: number, 
        private _letter?: string,) {
           
    }

    public get town(): string {
        return this._town;
    }
    public set town(value: string) {
        this._town = value;
    }
    public get letter(): string {
        return this._letter!; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
    }
    public set letter(value: string) {
        this._letter = value;
    }
    public get floor(): number {
        return this._floor!;  //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
    }
    public set floor(value: number) {
        this._floor = value;
    }
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    public get postcode(): number {
        return this._postcode;
    }
    public set postcode(value: number) {
        this._postcode = value;
    }
    public get strNumber(): number {
        return this._strNumber;
    }
    public set strNumber(value: number) {
        this._strNumber = value;
    }
    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }

}


type phoneSelector = "fijo" | "movil";

export class Phone {
        

    constructor(
        private _phoneNumber: number, 
        private _phoneType?: phoneSelector) {
        
    }

    public get phoneType(): phoneSelector {
        return this._phoneType!;  //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
    }
    public set phoneType(value: phoneSelector) {
        this._phoneType = value;
    }
    public get phoneNumber(): number {
        return this._phoneNumber;
    }
    public set phoneNumber(value: number) {
        this._phoneNumber = value;
    }
}


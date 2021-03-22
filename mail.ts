type mailSelector = "casa" | "trabajo";

export class Mail {
    
   
    constructor(
        private _mailAddress: string,
        private _mailType?: mailSelector, 
        )
         {
        
    }

    public get mailAddress(): string {
        return this._mailAddress;
    }
    public set mailAddress(value: string) {
        this._mailAddress = value;
    }
    public get mailType(): mailSelector {
        return this._mailType!; //he usado el operador de aserción no nula, por evitar el error para que una propiedad pueda ser opcional
    }
    public set mailType(value: mailSelector) {
        this._mailType = value;
    }

}


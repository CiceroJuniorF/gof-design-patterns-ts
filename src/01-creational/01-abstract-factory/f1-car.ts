import { Compound } from "./constants/compound";
import { Modality } from "./constants/modality";
import { RearWing } from "./constants/rear-wing";
import { Weather } from "./constants/weather";
import { SetupDryFactory } from "./factorys/setup-dry-factory";
import { SetupFactory } from "./factorys/setup-factory";
import { SetupRainFactory } from "./factorys/setup-rain-factory";
import { Setup } from "./setup";


export class F1Car{
    private _setup:Setup;

    constructor(private _setupFactory:SetupFactory, private _modality:Modality){
        this._setup = _setupFactory.create(_modality);
        this._setup.configure();
    }

    public getCompound():Compound{
        return this._setup.compoundType;
    }

    public getRearWing():RearWing{
        return this._setup.rearWingType;
    }

}

export class F1CarCreator{    
    public static create(weather:Weather, modality:Modality): F1Car{
        switch (weather){
            case Weather.DRY:
                return new F1Car(new SetupDryFactory(), modality);
            case Weather.RAIN:
                return new F1Car(new SetupRainFactory(), modality);
            default:
                throw new Error("Weather not defined")
        }            
    }
}
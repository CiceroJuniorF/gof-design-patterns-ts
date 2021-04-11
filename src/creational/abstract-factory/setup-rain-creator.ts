import { Modality } from "./constants/modality";
import { SetupRain } from "./setup-rain";
import { SetupRainQualify } from "./setup-rain-qualify";
import { SetupRainRace } from "./setup-rain-race";

export class SetupRainCreator{

    public static create(modality:Modality): SetupRain{
        switch (modality){
            case Modality.RACE:
                return new SetupRainRace();
            case Modality.QUALIFY:
                return new SetupRainQualify();
            default:
                throw new TypeError("Modality is not defined")
        }            
    }
}
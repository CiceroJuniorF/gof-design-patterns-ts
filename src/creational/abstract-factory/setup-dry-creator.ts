import { Modality } from "./constants/modality";
import { SetupDry } from "./setup-dry";
import { SetupDryQualify } from "./setup-dry-qualify";
import { SetupDryRace } from "./setup-dry-race";

export class SetupDryCreator{

    public static create(modality:Modality): SetupDry{
        switch (modality){
            case Modality.RACE:
                return new SetupDryRace();
            case Modality.QUALIFY:
                return new SetupDryQualify();
            default:
                throw new TypeError("Modality is not defined")
        }            
    }
}
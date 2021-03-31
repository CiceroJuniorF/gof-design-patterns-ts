import { Compound } from "./constants/compound";
import { Modality } from "./constants/modality";
import { RearWing } from "./constants/rear-wing";
import { Setup } from "./setup";

export abstract class SetupDry extends Setup {

    public configure() {
        this.compoundType = Compound.YELLOW;
        this.rearWingType = RearWing.MEDIAN;
    }

}

export class SetupDryRace extends SetupDry {

    public configure() {
        this.compoundType = Compound.YELLOW;
        this.rearWingType = RearWing.MEDIAN;
    }

}

export class SetupDryQualify extends SetupDry {

    public configure() {
        this.compoundType = Compound.RED;
        this.rearWingType = RearWing.SMALL;
    }

}

export class SetupDryCreator{

    public static create(modality:Modality): SetupDry{
        switch (modality){
            case Modality.RACE:
                return new SetupDryRace();
            case Modality.QUALIFY:
                return new SetupDryQualify();
            default:
                throw new Error("Modality not defined")
        }            
    }
}
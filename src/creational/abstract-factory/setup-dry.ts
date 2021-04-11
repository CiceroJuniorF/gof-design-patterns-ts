import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { Setup } from "./setup";

export abstract class SetupDry extends Setup {

    public configure() {
        this.compoundType = Compound.YELLOW;
        this.rearWingType = RearWing.MEDIAN;
    }

}

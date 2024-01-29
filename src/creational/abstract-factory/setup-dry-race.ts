import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { SetupDry } from "./setup-dry";

export class SetupDryRace extends SetupDry {

    public configure() {
        this.compoundType = Compound.YELLOW;
        this.rearWingType = RearWing.MEDIAN;
    }

}

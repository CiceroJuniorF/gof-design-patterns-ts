import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { SetupDry } from "./setup-dry";

export class SetupDryQualify extends SetupDry {

    public configure() {
        this.compoundType = Compound.RED;
        this.rearWingType = RearWing.SMALL;
    }

}
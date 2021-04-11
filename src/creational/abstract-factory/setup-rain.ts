import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { Setup } from "./setup";

export abstract class SetupRain extends Setup {

    public configure() {
        this.compoundType = Compound.BLUE;
        this.rearWingType = RearWing.MEDIAN;
    }

}

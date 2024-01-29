import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { SetupRain } from "./setup-rain";

export class SetupRainQualify extends SetupRain {

    public configure() {
        this.compoundType = Compound.GREEN;
        this.rearWingType = RearWing.MEDIAN;
    }

}

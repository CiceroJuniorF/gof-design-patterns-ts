import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";
import { SetupRain } from "./setup-rain";

export class SetupRainRace extends SetupRain {

    public configure() {
        this.compoundType = Compound.BLUE;
        this.rearWingType = RearWing.LONG;
    }

}


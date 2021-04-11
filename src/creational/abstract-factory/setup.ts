import { Compound } from "./constants/compound";
import { RearWing } from "./constants/rear-wing";

export abstract class Setup {

    public compoundType: Compound = Compound.PROTO;
    public rearWingType: RearWing = RearWing.MEDIAN;

    public abstract configure():void;
}
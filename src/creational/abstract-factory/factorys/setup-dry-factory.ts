import { Modality } from "../constants/modality";
import { Weather } from "../constants/weather";
import { Setup } from "../setup";
import { SetupDryCreator } from "../setup-dry-creator";

import { SetupFactory } from "./setup-factory";

export class SetupDryFactory extends SetupFactory {
    
    public create(modality:Modality): Setup{
        return SetupDryCreator.create(modality);
    }
    
}
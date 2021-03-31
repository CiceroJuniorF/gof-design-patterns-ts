import { Modality } from "../constants/modality";
import { Setup } from "../setup";
import { SetupRainCreator } from "../setup-rain";
import { SetupFactory } from "./setup-factory";

export class SetupRainFactory extends SetupFactory {
    
    public create(modality:Modality): Setup{
        return SetupRainCreator.create(modality);
    }
    
}
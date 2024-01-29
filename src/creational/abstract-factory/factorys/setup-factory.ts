import { Modality } from "../constants/modality";
import { Weather } from "../constants/weather";
import { Setup } from "../setup";

export abstract class SetupFactory {
    public abstract create(modality:Modality): Setup;
}
import { Compound } from "../../src/01-creational/01-abstract-factory/constants/compound";
import { Modality } from "../../src/01-creational/01-abstract-factory/constants/modality";
import { RearWing } from "../../src/01-creational/01-abstract-factory/constants/rear-wing";
import { Weather } from "../../src/01-creational/01-abstract-factory/constants/weather";
import { F1CarCreator } from "../../src/01-creational/01-abstract-factory/f1-car";

describe("F1Car", () => {
    it("F1Car in DRY for RACE. Is expected Compound.YELLOW and RearWing.MEDIAN", async () => {
        let f1Car = F1CarCreator.create(Weather.DRY, Modality.RACE);        
        expect(f1Car.getCompound()).toBe(Compound.YELLOW);
        expect(f1Car.getRearWing()).toBe(RearWing.MEDIAN);
    });

    it("F1Car in DRY for QUALIFY. Is expected Compound.RED and RearWing.SMALL", async () => {
        let f1Car = F1CarCreator.create(Weather.DRY, Modality.QUALIFY);        
        expect(f1Car.getCompound()).toBe(Compound.RED);
        expect(f1Car.getRearWing()).toBe(RearWing.SMALL);
    });

    it("F1Car in RAIN for RACE. Is expected Compound.BLUE and RearWing.MEDIAN", async () => {
        let f1Car = F1CarCreator.create(Weather.RAIN, Modality.RACE);        
        expect(f1Car.getCompound()).toBe(Compound.BLUE);
        expect(f1Car.getRearWing()).toBe(RearWing.LONG);
    });

    it("F1Car in RAIN for QUALIFY. Is expected Compound.GREEN and RearWing.MEDIAN", async () => {
        let f1Car = F1CarCreator.create(Weather.RAIN, Modality.QUALIFY);        
        expect(f1Car.getCompound()).toBe(Compound.GREEN);
        expect(f1Car.getRearWing()).toBe(RearWing.MEDIAN);
    });

    it("F1Car in DRY for TRAINING. Is expected error Modality is not defined", async () => {  
        let functionCreateWithError = ()=>{F1CarCreator.create(Weather.DRY, Modality.TRAINING)};    
        expect(functionCreateWithError).toThrow("Modality is not defined");
        expect(functionCreateWithError).toThrow(TypeError);
    });

    it("F1Car in RAIN for TRAINING. Is expected error Modality is not defined", async () => {  
        let functionCreateWithError = ()=>{F1CarCreator.create(Weather.RAIN, Modality.TRAINING)};    
        expect(functionCreateWithError).toThrow("Modality is not defined");
        expect(functionCreateWithError).toThrow(TypeError);
    });
});
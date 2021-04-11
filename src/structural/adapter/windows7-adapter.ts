import { IWindows10 } from "./windows10";
import { IWindows7 } from "./windows7";

export class Windows7Adapter implements IWindows7{

    constructor(private windows10: IWindows10){
        
    }

    runProgram(program: string): string {
        return this.windows10.runProgram(program);
    }
    
}
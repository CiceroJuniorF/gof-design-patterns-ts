export interface IWindows7{
    runProgram(program:string):string;
}

export class Windows7 implements IWindows7{
    
    runProgram(program: string) {
        return `Program ${program} running in windows 7`;
    }
}
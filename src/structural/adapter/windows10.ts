export interface IWindows10{
    runProgram(program:string):string;
}

export class Windows10 implements IWindows10{
    
    runProgram(program: string) {
        return `Program ${program} running in windows 10`;
    }
}
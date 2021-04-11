import { DataSet } from "./dataset";

export abstract class Scanner{

    public constructor(public filePath:string){
        if(!this.filePath) throw Error('filePath is empty');
    }

    public abstract toScanFile():DataSet;
}
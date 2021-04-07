import { DataSet } from "./dataset";
import { Scanner } from "./scanner";

export class ScannerXML extends Scanner{

    public constructor(filePath:string){
        super(filePath);
    }

    public toScanFile():DataSet{
        return new DataSet(`${this.filePath}XML`);
    }
}
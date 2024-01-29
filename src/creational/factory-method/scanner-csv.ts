import { FileType } from "./constants/file-type";
import { DataSet } from "./dataset";
import { Scanner } from "./scanner";

export class ScannerCSV extends Scanner{

    public constructor(filePath:string){
        super(filePath);
    }

    public toScanFile():DataSet{
        return new DataSet(`${this.filePath}CSV`);
    }
}
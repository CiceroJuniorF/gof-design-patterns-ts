import { FileType } from "./constants/file-type";
import { ScannerFactory } from "./factorys/scanner-factory";
import { ScannerFactoryCreator } from "./factorys/scanner-factory-creator";

export class DataSet {
    public constructor(public content:string){

    }

    public static create(fileType:FileType, filePath:string): DataSet{
        return ScannerFactoryCreator.Scanner(fileType)
                            .createScanner(filePath)
                            .toScanFile();
    }

}
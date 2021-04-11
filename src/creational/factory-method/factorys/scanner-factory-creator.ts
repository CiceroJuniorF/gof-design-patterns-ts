import { FileType } from "../constants/file-type";
import { ScannerCSVFactory } from "./scanner-csv-factory";
import { ScannerFactory } from "./scanner-factory";
import { ScannerXMLFactory } from "./scanner-xml-factory";

export abstract class ScannerFactoryCreator{

    public static Scanner(fileType:FileType):ScannerFactory{
        switch(fileType){
            case FileType.CSV:
                return new ScannerCSVFactory()
            case FileType.XML:
                return new ScannerXMLFactory()
            default:
                throw new TypeError("FileType is not defined")
        }
    }
}

import { Scanner } from "../scanner";
import { ScannerXML } from "../scanner-xml";
import { ScannerFactory } from "./scanner-factory";

export class ScannerXMLFactory extends ScannerFactory{

    public createScanner(filePath:string):Scanner{
        return new ScannerXML(filePath);
    }

}

import { Scanner } from "../scanner";
import { ScannerCSV } from "../scanner-csv";
import { ScannerFactory } from "./scanner-factory";

export class ScannerCSVFactory extends ScannerFactory{
    public createScanner(filePath:string):Scanner{
        return new ScannerCSV(filePath);
    }
}
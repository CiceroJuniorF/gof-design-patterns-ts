
import { Scanner } from "../scanner";

export abstract class ScannerFactory{
    public abstract createScanner(filePath:string):Scanner;
}

import { FileType } from "../../../../src/creational/factory-method/constants/file-type";
import { ScannerCSVFactory } from"../../../../src/creational/factory-method/factorys/scanner-csv-factory";
import { ScannerFactoryCreator } from "../../../../src/creational/factory-method/factorys/scanner-factory-creator";
import { ScannerXMLFactory } from "../../../../src/creational/factory-method/factorys/scanner-xml-factory";


describe("SacnnerFactory", () => {
    it(`SacnnerFactory. Is expected instace ScannerCSVFactory`, () => {  
        expect(ScannerFactoryCreator.Scanner(FileType.CSV)).toBeInstanceOf(ScannerCSVFactory);
    });
    it(`SacnnerFactory. Is expected instace ScannerXMLFactory`, () => {  
        expect(ScannerFactoryCreator.Scanner(FileType.XML)).toBeInstanceOf(ScannerXMLFactory);
    });
    
});
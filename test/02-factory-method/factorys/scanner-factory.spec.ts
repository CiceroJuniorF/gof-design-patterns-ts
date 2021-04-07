import { FileType } from "../../../src/01-creational/02-factory-method/constants/file-type";
import { ScannerCSVFactory } from "../../../src/01-creational/02-factory-method/factorys/scanner-csv-factory";
import { ScannerFactory } from "../../../src/01-creational/02-factory-method/factorys/scanner-factory";
import { ScannerFactoryCreator } from "../../../src/01-creational/02-factory-method/factorys/scanner-factory-creator";
import { ScannerXMLFactory } from "../../../src/01-creational/02-factory-method/factorys/scanner-xml-factory";


describe("SacnnerFactory", () => {
    it(`SacnnerFactory. Is expected instace ScannerCSVFactory`, () => {  
        expect(ScannerFactoryCreator.Scanner(FileType.CSV)).toBeInstanceOf(ScannerCSVFactory);
    });
    it(`SacnnerFactory. Is expected instace ScannerXMLFactory`, () => {  
        expect(ScannerFactoryCreator.Scanner(FileType.XML)).toBeInstanceOf(ScannerXMLFactory);
    });
    
});
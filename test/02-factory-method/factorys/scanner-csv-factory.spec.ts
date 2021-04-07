import { FilePath } from "../../../src/01-creational/02-factory-method/constants/file-path";
import { ScannerCSVFactory } from "../../../src/01-creational/02-factory-method/factorys/scanner-csv-factory";
import { ScannerCSV } from "../../../src/01-creational/02-factory-method/scanner-csv";


describe("ScannerCSVFactory", () => {
    it(`ScannerCSVFactory. Is expected instace ScannerCSV`, () => {  
        expect(new ScannerCSVFactory().createScanner(FilePath.FILE_CSV)).toBeInstanceOf(ScannerCSV);
    });    
});
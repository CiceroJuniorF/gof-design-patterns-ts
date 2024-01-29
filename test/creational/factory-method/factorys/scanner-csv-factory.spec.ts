import { FilePath } from "../../../../src/creational/factory-method/constants/file-path";
import { ScannerCSVFactory } from "../../../../src/creational/factory-method/factorys/scanner-csv-factory";
import { ScannerCSV } from "../../../../src/creational/factory-method/scanner-csv";


describe("ScannerCSVFactory", () => {
    it(`ScannerCSVFactory. Is expected instace ScannerCSV`, () => {  
        expect(new ScannerCSVFactory().createScanner(FilePath.FILE_CSV)).toBeInstanceOf(ScannerCSV);
    });    
});
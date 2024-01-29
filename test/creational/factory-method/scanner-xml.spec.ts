import { FilePath } from "../../../src/creational/factory-method/constants/file-path";
import { ScannerCSV } from "../../../src/creational/factory-method/scanner-csv";

describe("SacnnerCSV", () => {
    it(`SacnnerCSV. Is expected DataSet.content is '${FilePath.FILE_CSV}CSV'}`, () => {  
        expect(new ScannerCSV(FilePath.FILE_CSV).toScanFile().content).toBe(`${FilePath.FILE_CSV}CSV`);
    });
    it(`SacnnerCSV. Is expected Error.message 'filePath is empty'`, () => {  
        let functionNewScannerCSVFilePahtEmpty= ()=>{new ScannerCSV('')};    
        expect(functionNewScannerCSVFilePahtEmpty).toThrow("filePath is empty");
        expect(functionNewScannerCSVFilePahtEmpty).toThrow(Error);
    });
});
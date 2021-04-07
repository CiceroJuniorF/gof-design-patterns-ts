import { FilePath } from "../../../src/01-creational/02-factory-method/constants/file-path";
import { ScannerXMLFactory } from "../../../src/01-creational/02-factory-method/factorys/scanner-xml-factory";
import { ScannerXML } from "../../../src/01-creational/02-factory-method/scanner-xml";


describe("ScannerXMLFactory", () => {
    it(`ScannerXMLFactory. Is expected instace ScannerXML`, () => {  
        expect(new ScannerXMLFactory().createScanner(FilePath.FILE_XML)).toBeInstanceOf(ScannerXML);
    });    
});
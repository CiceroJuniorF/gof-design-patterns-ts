import { FilePath } from "../../../../src/creational/factory-method/constants/file-path";
import { ScannerXMLFactory } from "../../../../src/creational/factory-method/factorys/scanner-xml-factory";
import { ScannerXML } from "../../../../src/creational/factory-method/scanner-xml";


describe("ScannerXMLFactory", () => {
    it(`ScannerXMLFactory. Is expected instace ScannerXML`, () => {  
        expect(new ScannerXMLFactory().createScanner(FilePath.FILE_XML)).toBeInstanceOf(ScannerXML);
    });    
});
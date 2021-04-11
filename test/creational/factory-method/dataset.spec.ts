import { FilePath } from "../../../src/creational/factory-method/constants/file-path";
import { FileType } from "../../../src/creational/factory-method/constants/file-type";
import { DataSet } from "../../../src/creational/factory-method/dataset";

describe("DataSet", () => {
    it(`DataSet by CSV. Is expected DataSet.content is content test`, () => {  
        const content = 'test'
        expect(new DataSet(content).content).toBe(`${content}`);
    });

    it(`DataSet.create by CSV. Is expected DataSet.content is content ${FilePath.FILE_CSV}CSV}`, () => {  
        expect(DataSet.create(FileType.CSV, FilePath.FILE_CSV).content).toBe(`${FilePath.FILE_CSV}CSV`);
    });

    it(`DataSet.create by XML. Is expected DataSet.content is content ${FilePath.FILE_XML}XML}`, () => {  
        expect(DataSet.create(FileType.XML, FilePath.FILE_XML).content).toBe(`${FilePath.FILE_XML}XML`);
    });
});
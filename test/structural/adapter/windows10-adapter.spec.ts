import { Windows10 } from "../../../src/structural/adapter/windows10";
import { Windows7Adapter } from "../../../src/structural/adapter/windows7-adapter";
import { IWindows7, Windows7 } from "../../../src/structural/adapter/windows7";

describe("Windows7Adapter", () => {
    it("Windows7Adapter.runProgram. Is expected return Program ${program} running in windows 10", async () => {  
        const program = "Windows7Program";
        const windows7Adapter:IWindows7 = new Windows7Adapter(new Windows10());
        expect(windows7Adapter.runProgram(program)).toBe(`Program ${program} running in windows 10`);
    });
});
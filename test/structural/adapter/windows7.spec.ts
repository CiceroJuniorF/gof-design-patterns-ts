import { IWindows7, Windows7 } from "../../../src/structural/adapter/windows7";

describe("Windows7", () => {
    it("Windows7.runProgram. Is expected return Program ${program} running in windows 7", async () => {  
        const program = "Windows7Program";
        const windows7:IWindows7 = new Windows7();
        expect(windows7.runProgram(program)).toBe(`Program ${program} running in windows 7`);
    });
});
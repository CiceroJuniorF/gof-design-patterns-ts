import { IWindows10, Windows10 } from "../../../src/structural/adapter/windows10";


describe("Windows10", () => {
    it("Windows10.runProgram. Is expected return Program ${program} running in windows 10", async () => {  
        const program = "Windows10Program";
        const windows10:IWindows10 = new Windows10();
        expect(windows10.runProgram(program)).toBe(`Program ${program} running in windows 10`);
    });
});
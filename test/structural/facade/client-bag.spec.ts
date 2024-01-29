import { ClientBag } from "../../../src/structural/facade/client-bag";

describe("ClientBag", () => {
    it("ClientBag.removeAllItems. Shouldbe return whitout erros", async () => {
        const clientId = 'A1'  
        const clientBag:ClientBag = new ClientBag(clientId);
        expect(clientBag.removeAllItems()).toBe(clientId);
    });
});
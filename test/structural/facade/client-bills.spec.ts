import { ClientBills } from "../../../src/structural/facade/client-bills";

describe("ClientBills", () => {
    it("ClientBills.removeAll. Shouldbe return whitout erros", async () => {
        const clientId = 'A1'  
        const clientBills:ClientBills = new ClientBills(clientId);
        expect(clientBills.removeAll()).toBe(clientId);
    });
});
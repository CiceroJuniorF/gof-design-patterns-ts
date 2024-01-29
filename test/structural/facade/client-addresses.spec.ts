import { ClientAddresses } from "../../../src/structural/facade/client-addresses";

describe("ClientAddresses", () => {
    it("ClientAddresses.removeAll. Shouldbe return whitout erros", async () => {
        const clientId = 'A1'  
        const clientAddresses:ClientAddresses = new ClientAddresses(clientId);
        expect(clientAddresses.removeAll()).toBe(clientId);
    });
});
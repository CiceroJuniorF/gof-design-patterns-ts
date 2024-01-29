import { ClientRemoveFacade } from "../../../src/structural/facade/client-remove-facade";

describe("ClientRemoveFacade", () => {
    it("ClientRemoveFacade.remove. Should be return whitout erros", async () => {
        const clientId = 'A1'  
        const clientRemoveFacade:ClientRemoveFacade = new ClientRemoveFacade(clientId);
        expect(clientRemoveFacade.remove()).toBe(clientId);
    });
});
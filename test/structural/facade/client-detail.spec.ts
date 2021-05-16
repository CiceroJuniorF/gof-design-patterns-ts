import { ClientDetail } from "../../../src/structural/facade/client-detail";

describe("ClientDetail", () => {
    it("ClientDetail.removeAll. Shouldbe return whitout erros", async () => {
        const clientId = 'A1'  
        const clientDetail:ClientDetail = new ClientDetail(clientId);
        expect(clientDetail.remove()).toBe(clientId);
    });
});
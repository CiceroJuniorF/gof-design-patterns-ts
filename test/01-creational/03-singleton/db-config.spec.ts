import { DbConfig } from "../../../src/01-creational/03-singleton/db-config";


describe("DbConfig", () => {
    it("DbConfig.getDbConfig(). Is expected when call 2 times return same instance", async () => {
        const instance1:DbConfig = DbConfig.getDbConfig();
        const instance2:DbConfig = DbConfig.getDbConfig();
        expect(instance1).toEqual(instance2);
    });

    it("DbConfig.getDbConfig(). Is expected same passwords", async () => {
        const instance1:DbConfig = DbConfig.getDbConfig();
        const instance2:DbConfig = DbConfig.getDbConfig();
        expect(instance1.password).toBe(instance2.password);
    });
});
import { Utils } from "../helper/utils";
import test from "../resources/fixture"
const utils = new Utils();
var faker = require('faker');
test.describe("Validation for searchs page", () => {
    test("API testing", async ({ thriveApi }) => {
        await test.step("Get API validation", async () => {
            await thriveApi.getApi("candidacies");
        });
        await test.step("Delete API validation", async () => {
            await thriveApi.deleteApi("searches", 37);
        });
        await test.step("Post API validation", async () => {
            const firstName: string = faker.name.firstName();
            const lastName: string = faker.name.lastName();
            const data: any = JSON.stringify({
                contact: {
                    first_name: firstName,
                    last_name: lastName
                }
            });
            await thriveApi.postApi("contacts", data);
        });
    });
});
import test from "../resources/fixture"
import data from "../helper/data/testdata.json";
import { environment } from "../resources/environment";
test.describe("Validation for searchs page", () => {
    test("Creation of search", async ({ login, search, page }) => {
        await test.step("login", async () => {
            await page.goto(environment.baseURL);
            await login.login(data.email, data.password);
        });
        await test.step('goto search page', async () => {
            await search.navigateToSearchMenu();
        });
        await test.step("Create search", async () => {
            await search.clickOnAddseaches();
            await search.createSearch();
        });
    });
});
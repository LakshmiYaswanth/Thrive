import { test as baseTexst } from "@playwright/test";
import clientCompanyDetails from "../pages/clientCompanyDetails.page";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import SearchesPage from "../pages/search.page";
import ThriveApi from "./api";


// declare all the page objects
type pages = {
    login: LoginPage,
    home: HomePage,
    search: SearchesPage,
    clientDetails: clientCompanyDetails,
    thriveApi: ThriveApi
}
// create a fixture to use in tests
const test = baseTexst.extend<pages>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    home: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    search: async ({ page }, use) => {
        await use(new SearchesPage(page));
    },
    clientDetails: async ({ page }, use) => {
        await use(new clientCompanyDetails(page));
    },
    thriveApi: async ({ }, use) => {
        await use(new ThriveApi());
    }
})
export default test;
export { expect } from '@playwright/test';
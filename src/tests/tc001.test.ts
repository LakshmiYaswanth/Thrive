import { expect } from "../resources/fixture"
import test from "../resources/fixture"
import data from "../helper/data/testdata.json";
import { environment } from "../resources/environment";
import { Utils } from "../helper/utils";
const utils = new Utils();
test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(environment.baseURL);
});

test("Login and Logout", async ({ login, home }) => {
  expect(await login.isAtLoginPage()).toBe("Thrive TRM");
  await test.step("Login with valid credential", async () => {
    await login.login(data.email, data.password);
  });
  await test.step("logout from the application", async () => {
    await home.gotoLogout();
  });
})

test("Create a search", async ({ login, home, search, clientDetails, page }) => {
  await test.step("login", async () => {
    await login.login(data.email, data.password);
  });
  await test.step("goto search page", async () => {
    await home.gotoSearches();
  });
  await test.step("click add search", async () => {
    await search.clickOnAddseaches();

  });
  await test.step("enter client details", async () => {
    await clientDetails.enterClientCompanyName(data.clientDetails.companyName + utils.getRandomName());
    await clientDetails.clickCreateCompany();
  });
  await test.step("Search details - Job placement", async () => {
    await clientDetails.enterJobTitle(data.clientDetails.jobTitle);
    await clientDetails.selectPlacementType(data.clientDetails.placementType.PP);
    await clientDetails.selectJobFunction("CEO");
  });
  await test.step("Recruitment Team", async () => {
    await clientDetails.selectLead("support@thrivetrm.com");
    await clientDetails.selecOriginationTeamMember("@bacancy.com")
    await clientDetails.selecConversionTeamMember("meet.panchal@bacancy.com")
    await clientDetails.selecExecutionTeamMember("L, Karen (karen.largent@thrivetrm.com)")
  })
  await test.step("Create search", async () => {
    await clientDetails.gotoCreateSearchCompletion();
  })
})
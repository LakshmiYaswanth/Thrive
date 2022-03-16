import { Locator, Page } from "@playwright/test";
import { Utils } from "../helper/utils";
import { WebActions } from "../resources/webActions";
const utilsPage = new Utils();
export default class SearchesPage extends WebActions {
    readonly page: Page;
    readonly searchMenu: Locator;
    readonly addSearchBtn: Locator;
    readonly clientCompanyName: Locator;
    readonly createCompanyBtn: Locator;
    readonly jobplacementTitle: Locator;
    readonly placementType: Locator;
    readonly selectPlacementType: Locator;
    readonly jobFunction: Locator;
    readonly selectJobFunction: Locator;
    readonly lead: Locator;
    readonly selectLead: Locator;
    readonly originationTeamManager: Locator;
    readonly selectoriginationTeamManager: Locator;
    readonly conversionTeamMember: Locator;
    readonly selectConversionTeamMember: Locator;
    readonly createBtn: Locator;
    executionTeamMember: Locator;
    createCompanyBtnXPath: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchMenu = this.page.locator('ul[role="tablist"] >> text=Searches');
        this.addSearchBtn = this.page.locator('[data-testid="Add Search button"]');
        this.clientCompanyName = this.page.locator("//input[@data-autocomplete-target='#search_client_company_id']");
        this.createCompanyBtn = this.page.locator("//div[@class='no-suggestion-notice search']//button[1]");
        this.jobplacementTitle = this.page.locator("//input[@id='search_job_title']");
        this.placementType = this.page.locator("#select2-search_placement_type_id-container");
        this.jobFunction = this.page.locator("//span[text()='Select a job function']");
        this.lead = this.page.locator("//span[text()='Select a lead']");
        this.originationTeamManager = this.page.locator("//span[@id='select2-search_origination_team_memberships_attributes_0_team_member_id-container']//span[1]");
        this.conversionTeamMember = this.page.locator("//span[@id='select2-search_conversion_team_memberships_attributes_0_team_member_id-container']//span[1]");
        this.executionTeamMember = this.page.locator("//span[@id='select2-search_execution_team_memberships_attributes_0_team_member_id-container']/span[1]");
        this.createBtn = this.page.locator("//button[text()=' Create Search']");
        this.createCompanyBtnXPath = this.page.locator("//span[text()='Client Company Name']/following::button[contains(@class,'btn btn-secondary')]");

    }
    async navigateToSearchMenu() {
        await this.waitForLocator(this.searchMenu);
        await this.clickWithNavigation(this.searchMenu);
    }

    public async clickCreateCompany() {
        await this.waitForLocator(this.createCompanyBtnXPath);
        await this.clickElement(this.createCompanyBtnXPath);
    }
    async clickOnAddseaches() {
        await this.waitForLocator(this.addSearchBtn);
        await this.clickWithNavigation(this.addSearchBtn)
    };
    async createSearch() {
        await this.waitForLocator(this.clientCompanyName);
        await this.typeText(this.clientCompanyName, "Company" + utilsPage.getRandomName());
        await this.clickCreateCompany();
        await this.waitForLocator(this.jobplacementTitle);
        await this.typeAndEnter(this.jobplacementTitle, "jobTitle" + utilsPage.getRandomName());
        await this.selectDropDownRandom(this.placementType);
        await this.selectDropDownRandom(this.jobFunction);
        await this.selectDropDownRandom(this.lead);
        await this.page.keyboard.press("PageDown");
        await this.selectDropDownRandom(this.originationTeamManager);
        await this.selectDropDownRandom(this.conversionTeamMember);
        await this.selectDropDownRandom(this.executionTeamMember);
        await this.waitForLocator(this.createBtn);
        await this.clickElement(this.createBtn)
    }
    async selectDropDownRandom(locator: Locator) {
        await this.waitForLocator(locator);
        await this.clickElement(locator);
        await this.delay(100);
        let selectPlacementType = this.page.locator("(//ul[@role='tree']//li)");
        let count = await selectPlacementType.count();
        await this.clickElement(this.page.locator("(//ul[@role='tree']//li)[" + utilsPage.getRandomNumberFromRange(2, count) + "]"));
    }



}
import { Page } from "@playwright/test";

export default class clientCompanyDetails {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    // 
    private createSearchBtnCSS = "button[type='submit']";

    public async gotoCreateSearchCompletion() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.locator(this.createSearchBtnCSS).click()
        ])
    }
    private clientComNameCSS = "#search_client_company_name";
    private createCompanyBtnXPath = "//span[text()='Client Company Name']/following::button[contains(@class,'btn btn-secondary')]";

    public async enterClientCompanyName(client: string) {
        await this.page.type(this.clientComNameCSS, client);
    }
    public async clickCreateCompany() {
        await this.page.waitForSelector(this.createCompanyBtnXPath, {
            state: "visible"
        });
        await this.page.hover(this.createCompanyBtnXPath)
        await this.page.locator(this.createCompanyBtnXPath).click();
    }

    private companyName = "#search_client_company_attributes_name"
    public async isCompanyNamePresent() {
        await this.page.waitForSelector(this.companyName);
        await this.page.getAttribute(this.companyName, "value");
    }

    // Search detail section
    private jobTitle = "//input[@id='search_job_title']";
    private placementType = "#select2-search_placement_type_id-container";
    private jobFunctionSelect = "//span[text()='Select a job function']";
    public async enterJobTitle(jobTitle: string) {
        await this.page.type(this.jobTitle, jobTitle);
    }
    public async selectPlacementType(placementType: string) {
        this.page.click(this.placementType);
        await this.page.locator("ul#select2-search_placement_type_id-results", {
            has: this.page.locator("li"),
            hasText: placementType
        }).click();
    }

    public async selectJobFunction(jobFunction: string) {
        this.page.click(this.jobFunctionSelect);
        await this.page.locator("#select2-search_job_function_category_id-results", {
            has: this.page.locator("li"),
            hasText: jobFunction
        }).click();
    }
    // Recruitment Team

    public async selectLead(lead: string) {
        await this.page.click("//span[text()='Select a lead']");
        await this.page.locator("#select2-search_lead_internal_team_membership_attributes_team_member_id-results", {
            has: this.page.locator("li ul li"),
            hasText: lead
        }).click();
    }
    // Origination Team Member
    public async selecOriginationTeamMember(teamMember: string) {
        await this.page.click("//span[starts-with(@id,'select2-search_origination_team_memberships')]//span[1]");
        await this.page.locator("//ul[starts-with(@id,'select2-search_origination_team_memberships')]", {
            has: this.page.locator("li ul li"),
            hasText: teamMember
        }).click();
    }
    public async selecConversionTeamMember(teamMember: string) {
        await this.page.click("//span[@id='select2-search_conversion_team_memberships_attributes_0_team_member_id-container']//span[1]");
        await this.page.locator("//ul[starts-with(@id,'select2-search_conversion_team_memberships')]", {
            has: this.page.locator("li ul li"),
            hasText: teamMember
        }).click();
    }
    public async selecExecutionTeamMember(teamMember: string) {
        await this.page.click("//span[@id='select2-search_execution_team_memberships_attributes_0_team_member_id-container']/span[1]");
        await this.page.locator("//ul[starts-with(@id,'select2-search_execution_team_memberships')]", {
            has: this.page.locator("li ul li"),
            hasText: teamMember
        }).click();
    }

}
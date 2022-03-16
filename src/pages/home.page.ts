import { Page } from "@playwright/test";

export default class HomePage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    private searchesLink = "text='Searches'";
    private accountIcon = "a[data-toggle='dropdown']"

    public async gotoSearches() {
        await this.page.click(this.searchesLink);
    }
    public async openAccount() {
        await this.page.click(this.accountIcon, {
            force: true
        });
    }

    public async gotoLogout() {
        await this.openAccount();
        await this.page.click(".log-out");
    }

    public async isAtHomePage() {
        return await this.page.title();
    }
}
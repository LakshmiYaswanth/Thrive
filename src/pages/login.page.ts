import { Page } from "@playwright/test";

export default class LoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    private userNameCSS = "#user_email";
    private passwordInputCSS = "#user_password";
    private forgotPasswordCSS = "#forgot-password";
    private loginButtonCSS = "input[value='Log in']";


    public async enterUserName(username: string) {
        await this.page.locator(this.userNameCSS).type(username);
    }

    public async enterPassword(password: string) {
        await this.page.locator(this.passwordInputCSS).type(password);
    }

    public async clickLogin() {
        await this.page.click(this.loginButtonCSS);
    }

    public async login(email: string, password: string) {
        await this.enterUserName(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    public async isAtLoginPage() {
        return await this.page.title();
    }
}
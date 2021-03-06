import { FullConfig } from "@playwright/test";
import AdmZip from "adm-zip";

async function globalSetup(config: FullConfig) {
    console.log("Report path " + config.rootDir);

    const reportPath = config.rootDir + "\\playwright-report";
    console.log("Report path: " + reportPath);

    var zip = new AdmZip();
    zip.addLocalFolder(reportPath, "./html-report");
    zip.writeZip("./report.zip")

}
export default globalSetup;
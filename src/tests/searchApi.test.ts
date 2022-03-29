import test, { expect } from "../resources/fixture"
let job_function_id: number[] = [];
let job_function_response: any;
let search_id: number;
test.describe("Validation for searchs page", () => {
    test("API testing", async ({ thriveApi }) => {
        await test.step("Get API validation", async () => {
            job_function_response = await thriveApi.getApi("customer_configurations/job_functions");
            expect(JSON.stringify(job_function_response.status)).toBe("200");
            job_function_id = JSON.parse(JSON.stringify(job_function_response.data)).data.map((obj: { id: number; }) => obj.id);
        });
        await test.step("Post API validation", async () => {
            let response = await thriveApi.searchPostApi("searches", thriveApi.payloadForSearches(1, job_function_id[Math.floor(Math.random() * job_function_id.length)]));
            expect(JSON.stringify(response.status)).toBe("201");
            console.log("response", response.data.data.id);
            search_id = response.data.data.id
            console.log("created search id :" + search_id);
        });
        await test.step("Delete API validation", async () => {
            let response = await thriveApi.deleteApi("searches", Number(search_id));
            expect(response.status).toBe(204);
        });
    });
});
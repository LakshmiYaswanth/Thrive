import { Page } from "@playwright/test";
import { environment } from "./environment";
var axios = require('axios')
export default class ThriveApi {

    public async getApi(payload: string) {
        let response: any;
        const responseData = await axios
            .get(environment.apiUrl + payload, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = JSON.stringify(responseData.data);
            if (environment.DEBUG) {
                console.log("CreateUsers post response = ", response);
            }
            return response;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("CreateUsers post error= ", error);
            }
            return error;
        }
    }
    public async deleteApi(payload: string, data: number,) {
        let response: any;
        console.log("Url:::" + environment.apiUrl + payload + "/" + JSON.stringify(data))
        const responseData = await axios
            .delete(environment.apiUrl + payload + "/" + JSON.stringify(data), {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = responseData.status;
            if (environment.DEBUG) {
                console.log("CreateUsers post response = ", response);
            }
            return response;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("CreateUsers post error= ", error);
            }
            return error;
        }
    }
    public async postApi(payload: string, body: any,) {
        let response: any;
        console.log(body);
        const responseData = await axios
            .post(environment.apiUrl + payload, body, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = JSON.stringify(responseData.data);
            if (environment.DEBUG) {
                console.log("CreateUsers post response = ", response);
            }
            return response;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("CreateUsers post error= ", error);
            }
            return error;
        }
    }
}
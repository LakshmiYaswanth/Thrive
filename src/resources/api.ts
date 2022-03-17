import { expect } from "@playwright/test";
import { environment } from "./environment";
import { WebActions } from "./webActions";
var axios = require('axios')

export class SignUpUsingApi extends WebActions {

    public async getApi(payload: string, body?: string,) {
        let data: string = "{" + body + "}";
        let response: any;
        const responseData = await axios
            .get(environment.apiUrl + payload, {
                params: {
                    id: data
                }
            }, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = responseData;
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
    public async deleteApi(payload: string, body?: string,) {
        let data: string = "{" + body + "}";
        let response: any;
        const responseData = await axios
            .delete(environment.apiUrl + payload, {
                params: {
                    id: data
                }
            }, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = responseData;
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
    public async postApi(payload: string, body?: string,) {
        let data: string = "{" + body + "}";
        let response: any;
        const responseData = await axios
            .delete(environment.apiUrl + payload, {
                params: {
                    id: data
                }
            }, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            response = responseData;
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
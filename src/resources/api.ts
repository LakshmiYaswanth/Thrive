import { environment } from "./environment";
var axios = require('axios');
var faker = require('faker');
export default class ThriveApi {

    public async getApi(payload: string) {
        const responseData = await axios
            .get(environment.apiUrl + payload, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            return responseData;
        }
        catch (error) {
            return error;
        }
    }
    public async deleteApi(payload: string, data: number,) {

        console.log("Url:::" + environment.apiUrl + payload + "/" + JSON.stringify(data))
        const response = await axios
            .delete(environment.apiUrl + payload + "/" + JSON.stringify(data), {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            return response;
        }
        catch (error) {
            return error;
        }
    }
    public async searchPostApi(payload: string, body: any,) {
        const response = await axios
            .post(environment.apiUrl + payload, body, {
                headers: {
                    "content-type": "application/json",
                    "X-API-Key": environment.token
                }
            });
        try {
            return response;
        }
        catch (error) {
            return error;
        }
    }
    public payloadForSearches(clientId: number, job_function_id: number) {
        let company_name = "playwright" + faker.company.companyName();
        let job_title = "playwright" + faker.name.jobTitle();
        let address_line_1 = faker.address.streetAddress();
        let address_line_2 = faker.address.secondaryAddress();
        let lead_internal_team_member_email = faker.internet.email();
        const testData: any = JSON.stringify({
            "search": {
                "address_line_1": address_line_1,
                "address_line_2": address_line_2,
                "asset_class_id": null,
                "city": "Philadelphia",
                "client_company_id": clientId,
                "client_company_name": company_name,
                "client_company_revenue_id": null,
                "code_name": "Manager",
                "confidential": true,
                "conversion_team_member_email": "abc@example.com",
                "conversion_team_member_id": 1,
                "cost_center_id": 1,
                "country": "United States",
                "country_code": "US",
                "currency": "USD",
                "engaged_search_firm_id": 1,
                "execution_team_member_email": "abc@example.com",
                "execution_team_member_id": 1,
                "expected_fee": 75000,
                "expected_fee_currency": "USD",
                "external_recruiter_name": "Will Inc Search Co",
                "external_search_firm_milestone_id": 1,
                "external_url": "http://example.com/dirk",
                "incumbent_id": 1,
                "incumbent_name": "Vijay Mogali",
                "is_critical": true,
                "job_function_id": job_function_id,
                "job_title": job_title,
                "lead_internal_team_member_email": lead_internal_team_member_email,
                "lead_internal_team_member_id": 1,
                "level_id": 1,
                "multiple_placements": true,
                "name": "President VR Solutions LLC",
                "organization_id": 1,
                "origination_team_member_email": "abc@example.com",
                "origination_team_member_id": 1,
                "origination_vertical_id": 1,
                "placement_type_id": 1,
                "placement_type_name": "Permanent Placement",
                "postal_code": "43849-3161",
                "probability": 60,
                "product_area_id": 1,
                "prospect_stage": "Identified",
                "qualifications": "Five years experience",
                "search_firm_id": 1,
                "search_number": "1234",
                "search_reason_id": 1,
                "search_region_id": 1,
                "state": "PA",
                "status": "Open",
                "summary": "Looking for a President.",
                "best_practices_scorecard": {
                    "executive_assessment": true,
                    "executive_search_firm": true,
                    "forensic_reference": true,
                    "insight_recommendation": true,
                    "interview_experience": true,
                    "interview_schedule_defined": true,
                    "marketing_engagement": true,
                    "scorecard_reviewed": true,
                    "structured_interview": true,
                    "weekly_cadence": true
                },
                "billing_detail": {
                    "indirect_billings": 56.3,
                    "indirect_billings_type": "Fixed Rate",
                    "predictive_index": 56.3,
                    "professional_fee": 56.3,
                    "research_billing": 56.3,
                    "uptick": 56.3
                },
                "client_satisfaction_survey": {
                    "net_promoter_score": 1,
                    "nps_type": "Type 1",
                    "referenced": true,
                    "summarized_rating": 2.5
                },
                "compensation": {
                    "additional_equity": 1.5,
                    "base": 100000,
                    "bonus": 100000,
                    "currency": "USD",
                    "equity": 1.5,
                    "equity_value": 10000,
                    "fully_diluted_ownership": 55,
                    "name": "FTE",
                    "normal_base": 100000,
                    "normal_bonus": 10000,
                    "normal_total_estimated_value": 1,
                    "notes": "This is a Compensation note",
                    "share_price": 0,
                    "target_option_proceeds": 5,
                    "total_compensation": 200000,
                    "total_estimated_value": 200000,
                    "vesting_date": "2020-01-01"
                },
                "contract": {
                    "additional_hires_clause": true,
                    "additional_hires_clause_fee": 25.5,
                    "additional_shadow_hires": true,
                    "billing_contact_email": "samuel1@example.com",
                    "billing_contact_name": "Samuel",
                    "contract_document": "Search Contract",
                    "contract_option_id": 1,
                    "contract_start_date": "2020-01-01",
                    "fee_percentage": 25.5,
                    "flat_fee": 25.5,
                    "redo_search": true,
                    "search_fee": 25.5,
                    "search_fee_currency": "USD",
                    "search_fee_percentage": 25.5,
                    "status": "New",
                    "terms": "0-30-60-90"
                },
                "internal_team_memberships": [
                    {
                        "percentage": 25.5,
                        "search_team_role_id": 1,
                        "team_member_id": 1
                    }
                ],
                "conversion_team_memberships": [
                    {
                        "percentage": 24.5,
                        "search_team_role_id": 1,
                        "team_member_id": 1
                    }
                ],
                "execution_team_memberships": [
                    {
                        "percentage": 25.5,
                        "search_team_role_id": 1,
                        "team_member_id": 1
                    }
                ],
                "recruiter_team_memberships": [
                    {
                        "percentage": 25.5,
                        "search_team_role_id": 1,
                        "team_member_id": 1
                    }
                ],
                "lead_recruiter_team_membership": {
                    "percentage": 25.5,
                    "search_team_role_id": 1,
                    "team_member_id": 1
                },
                "source_of_business": {
                    "company_id": 1,
                    "contact_id": 1
                },
                "target_companies": [
                    {
                        "active": true,
                        "company_id": 1,
                        "priority_vote_count": 1,
                        "search_target_company_comments_count": 1
                    }
                ]
            }
        });
        return testData
    }
}
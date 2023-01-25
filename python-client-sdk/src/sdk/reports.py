import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Reports:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_companies_company_id_reports_aged_creditor(self, request: operations.GetCompaniesCompanyIDReportsAgedCreditorRequest) -> operations.GetCompaniesCompanyIDReportsAgedCreditorResponse:
        r"""Gets the aged creditor report for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/agedCreditor", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsAgedCreditorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport])
                res.codat_data_contracts_datasets_aged_creditor_outstanding_i_collection_report = out

        return res

    
    def get_companies_company_id_reports_aged_creditor_available(self, request: operations.GetCompaniesCompanyIDReportsAgedCreditorAvailableRequest) -> operations.GetCompaniesCompanyIDReportsAgedCreditorAvailableResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/agedCreditor/available", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsAgedCreditorAvailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.get_companies_company_id_reports_aged_creditor_available_200_application_json_boolean = out

        return res

    
    def get_companies_company_id_reports_aged_debtor(self, request: operations.GetCompaniesCompanyIDReportsAgedDebtorRequest) -> operations.GetCompaniesCompanyIDReportsAgedDebtorResponse:
        r"""Gets the aged debtor report for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/agedDebtor", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsAgedDebtorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport])
                res.codat_data_contracts_datasets_aged_debtor_outstanding_i_collection_report = out

        return res

    
    def get_companies_company_id_reports_aged_debtor_available(self, request: operations.GetCompaniesCompanyIDReportsAgedDebtorAvailableRequest) -> operations.GetCompaniesCompanyIDReportsAgedDebtorAvailableResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/agedDebtor/available", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsAgedDebtorAvailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.get_companies_company_id_reports_aged_debtor_available_200_application_json_boolean = out

        return res

    
    def get_companies_company_id_reports_events(self, request: operations.GetCompaniesCompanyIDReportsEventsRequest) -> operations.GetCompaniesCompanyIDReportsEventsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/reports/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDReportsEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompanyEventStream])
                res.codat_public_api_models_company_company_event_stream = out

        return res

    
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Journals:
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

    
    def get_companies_company_id_data_journals(self, request: operations.GetCompaniesCompanyIDDataJournalsRequest) -> operations.GetCompaniesCompanyIDDataJournalsResponse:
        r"""Gets the latest journals for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/journals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataJournalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsJournalPagedResponseModel])
                res.codat_data_contracts_datasets_journal_paged_response_model = out

        return res

    
    def get_companies_company_id_data_journals_journal_id_(self, request: operations.GetCompaniesCompanyIDDataJournalsJournalIDRequest) -> operations.GetCompaniesCompanyIDDataJournalsJournalIDResponse:
        r"""Gets a single journal corresponding to the supplied Id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/journals/{journalId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataJournalsJournalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsJournalPagedResponseModel])
                res.codat_data_contracts_datasets_journal_paged_response_model = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_journals(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsResponse:
        r"""Posts a new journal to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/journals", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsJournalPushOperation])
                res.codat_data_contracts_datasets_journal_push_operation = out

        return res

    
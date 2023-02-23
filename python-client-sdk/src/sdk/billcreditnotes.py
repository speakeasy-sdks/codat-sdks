import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class BillCreditNotes:
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

    
    def get_companies_company_id_data_bill_credit_notes(self, request: operations.GetCompaniesCompanyIDDataBillCreditNotesRequest) -> operations.GetCompaniesCompanyIDDataBillCreditNotesResponse:
        r"""Gets a list of all bill credit notes for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/billCreditNotes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataBillCreditNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBillCreditNotePagedResponseModel])
                res.codat_data_contracts_datasets_bill_credit_note_paged_response_model = out

        return res

    
    def get_companies_company_id_data_bill_credit_notes_bill_credit_note_id_(self, request: operations.GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDRequest) -> operations.GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDResponse:
        r"""Gets a single billCreditNote corresponding to the supplied Id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBillCreditNote])
                res.codat_data_contracts_datasets_bill_credit_note = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_bill_credit_notes(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesResponse:
        r"""Posts a new billCreditNote to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBillCreditNotePushOperation])
                res.codat_data_contracts_datasets_bill_credit_note_push_operation = out

        return res

    
    def put_companies_company_id_connections_connection_id_push_bill_credit_notes_bill_credit_note_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDResponse:
        r"""Posts an updated billCreditNote to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/billCreditNotes/{billCreditNoteId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBillCreditNotePushOperation])
                res.codat_data_contracts_datasets_bill_credit_note_push_operation = out

        return res

    
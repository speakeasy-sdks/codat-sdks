import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DirectCosts:
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

    
    def get_companies_company_id_connections_connection_id_data_direct_costs(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsResponse:
        r"""Gets the direct costs for the company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/directCosts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsDirectCostPagedResponseModel])
                res.codat_data_contracts_datasets_direct_cost_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDResponse:
        r"""Gets the specified direct cost for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsDirectCost])
                res.codat_data_contracts_datasets_direct_cost = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsResponse:
        r"""Gets all attachments for the specified direct cost for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDataset])
                res.codat_data_contracts_datasets_attachments_dataset = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments_attachment_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDResponse:
        r"""Gets the specified direct cost attachment for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment])
                res.codat_data_contracts_datasets_attachments_dataset_attachment = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments_attachment_id_download(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadResponse:
        r"""Downloads an attachment for the specified direct cost for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments/{attachmentId}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_companies_company_id_connections_connection_id_push_direct_costs(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse:
        r"""Posts a new direct cost to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/directCosts", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsDirectCostPushOperation])
                res.codat_data_contracts_datasets_direct_cost_push_operation = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_direct_costs_direct_cost_id_attachment(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse:
        r"""Posts a new direct cost attachment for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/directCosts/{directCostId}/attachment", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Customers:
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

    
    def get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDataset])
                res.codat_data_contracts_datasets_attachments_dataset = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments_attachment_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment])
                res.codat_data_contracts_datasets_attachments_dataset_attachment = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments_attachment_id_download(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/customers/{customerId}/attachments/{attachmentId}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_companies_company_id_data_customers(self, request: operations.GetCompaniesCompanyIDDataCustomersRequest) -> operations.GetCompaniesCompanyIDDataCustomersResponse:
        r"""Gets the latest customers for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/customers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataCustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCustomerPagedResponseModel])
                res.codat_data_contracts_datasets_customer_paged_response_model = out

        return res

    
    def get_companies_company_id_data_customers_customer_id_(self, request: operations.GetCompaniesCompanyIDDataCustomersCustomerIDRequest) -> operations.GetCompaniesCompanyIDDataCustomersCustomerIDResponse:
        r"""Gets a single customer corresponding to the supplied Id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/customers/{customerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataCustomersCustomerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCustomer])
                res.codat_data_contracts_datasets_customer = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_customers(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersResponse:
        r"""Posts an individual customer for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/customers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCustomerPushOperation])
                res.codat_data_contracts_datasets_customer_push_operation = out

        return res

    
    def put_companies_company_id_connections_connection_id_push_customers_customer_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDResponse:
        r"""Posts an updated customer for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/customers/{customerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCustomerPushOperation])
                res.codat_data_contracts_datasets_customer_push_operation = out

        return res

    
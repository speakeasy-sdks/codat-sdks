import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Suppliers:
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

    
    def get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDataset])
                res.codat_data_contracts_datasets_attachments_dataset = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments_attachment_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments/{attachmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment])
                res.codat_data_contracts_datasets_attachments_dataset_attachment = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments_attachment_id_download(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/suppliers/{supplierId}/attachments/{attachmentId}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_companies_company_id_data_suppliers(self, request: operations.GetCompaniesCompanyIDDataSuppliersRequest) -> operations.GetCompaniesCompanyIDDataSuppliersResponse:
        r"""Gets the latest suppliers for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/suppliers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataSuppliersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsSupplierPagedResponseModel])
                res.codat_data_contracts_datasets_supplier_paged_response_model = out

        return res

    
    def get_companies_company_id_data_suppliers_supplier_id_(self, request: operations.GetCompaniesCompanyIDDataSuppliersSupplierIDRequest) -> operations.GetCompaniesCompanyIDDataSuppliersSupplierIDResponse:
        r"""Gets a single supplier corresponding to the supplied Id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/suppliers/{supplierId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataSuppliersSupplierIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsSupplier])
                res.codat_data_contracts_datasets_supplier = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_suppliers(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/suppliers", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsSupplierPushOperation])
                res.codat_data_contracts_datasets_supplier_push_operation = out

        return res

    
    def put_companies_company_id_connections_connection_id_push_suppliers_supplier_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/suppliers/{supplierId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsSupplierPushOperation])
                res.codat_data_contracts_datasets_supplier_push_operation = out

        return res

    
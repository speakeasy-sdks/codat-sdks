import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Invoices:
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

    
    def get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDataset])
                res.codat_data_contracts_datasets_attachments_dataset = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments_attachment_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAttachmentsDatasetAttachment])
                res.codat_data_contracts_datasets_attachments_dataset_attachment = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments_attachment_id_download(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}/download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_companies_company_id_data_invoices(self, request: operations.GetCompaniesCompanyIDDataInvoicesRequest) -> operations.GetCompaniesCompanyIDDataInvoicesResponse:
        r"""Gets the latest invoices for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/invoices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataInvoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsInvoicePagedResponseModel])
                res.codat_data_contracts_datasets_invoice_paged_response_model = out

        return res

    
    def get_companies_company_id_data_invoices_invoice_id_(self, request: operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDRequest) -> operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/invoices/{invoiceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsInvoice])
                res.codat_data_contracts_datasets_invoice = out

        return res

    
    def get_companies_company_id_data_invoices_invoice_id_pdf(self, request: operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfRequest) -> operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/invoices/{invoiceId}/pdf", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_companies_company_id_connections_connection_id_push_invoices(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesResponse:
        r"""Posts a new invoice to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/invoices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsInvoicePushOperation])
                res.codat_data_contracts_datasets_invoice_push_operation = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_invoices_invoice_id_attachment(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}/attachment", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_companies_company_id_connections_connection_id_push_invoices_invoice_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse:
        r"""Posts an updated invoice to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsInvoicePushOperation])
                res.codat_data_contracts_datasets_invoice_push_operation = out

        return res

    
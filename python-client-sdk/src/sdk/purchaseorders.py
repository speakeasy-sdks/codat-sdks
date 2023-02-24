import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class PurchaseOrders:
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

    
    def get_companies_company_id_data_purchase_orders(self, request: operations.GetCompaniesCompanyIDDataPurchaseOrdersRequest) -> operations.GetCompaniesCompanyIDDataPurchaseOrdersResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/purchaseOrders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataPurchaseOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsPurchaseOrderPagedResponseModel])
                res.codat_data_contracts_datasets_purchase_order_paged_response_model = out

        return res

    
    def get_companies_company_id_data_purchase_orders_purchase_order_id_(self, request: operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDRequest) -> operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/purchaseOrders/{purchaseOrderId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsPurchaseOrder])
                res.codat_data_contracts_datasets_purchase_order = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_purchase_orders(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse:
        r"""Posts a new purchase order to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsPurchaseOrderPushOperation])
                res.codat_data_contracts_datasets_purchase_order_push_operation = out

        return res

    
    def put_companies_company_id_connections_connection_id_push_purchase_orders_purchase_order_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDResponse:
        r"""Posts an updated purchase order to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders/{purchaseOrderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsPurchaseOrderPushOperation])
                res.codat_data_contracts_datasets_purchase_order_push_operation = out

        return res

    
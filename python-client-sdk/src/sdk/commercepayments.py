import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CommercePayments:
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

    
    def get_companies_company_id_connections_connection_id_data_commerce_payments(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsResponse:
        r"""Gets the latest commerce payments for a company, with pagination
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/commerce-payments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCommercePaymentPagedResponseModel])
                res.codat_data_contracts_datasets_commerce_payment_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_commerce_payments_payment_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDResponse:
        r"""Gets the specified commerce payment for a given company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/commerce-payments/{paymentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
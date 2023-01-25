import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BankingTransactionCategories:
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

    
    def get_companies_company_id_connections_connection_id_data_banking_transaction_categories(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse:
        r"""Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
        activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel])
                res.codat_data_contracts_datasets_banking_transaction_category_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_banking_transaction_categories_transaction_category_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse:
        r"""Gets a specified bank transaction category for a given company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankingTransactionCategory])
                res.codat_data_contracts_datasets_banking_transaction_category = out

        return res

    
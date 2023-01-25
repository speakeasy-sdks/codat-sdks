import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AccountTransactions:
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

    
    def get_companies_company_id_connections_connection_id_data_account_transactions(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsResponse:
        r"""Gets the account transactions for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/accountTransactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAccountTransactionPagedResponse])
                res.codat_data_contracts_datasets_account_transaction_paged_response = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_account_transactions_account_transaction_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDResponse:
        r"""Gets the specified account transaction for a given company and connection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/accountTransactions/{accountTransactionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsAccountTransaction])
                res.codat_data_contracts_datasets_account_transaction = out

        return res

    
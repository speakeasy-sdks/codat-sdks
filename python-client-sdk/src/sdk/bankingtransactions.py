import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class BankingTransactions:
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

    
    def get_companies_company_id_connections_connection_id_data_banking_transactions(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsResponse:
        r"""Gets a list of transactions incurred by a bank account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/banking-transactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankingTransactionPagedResponseModel])
                res.codat_data_contracts_datasets_banking_transaction_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_banking_transactions_transaction_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDResponse:
        r"""Gets a specified bank transaction for a given company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/banking-transactions/{transactionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankingTransaction])
                res.codat_data_contracts_datasets_banking_transaction = out

        return res

    
    def get_companies_company_id_data_banking_transactions(self, request: operations.GetCompaniesCompanyIDDataBankingTransactionsRequest) -> operations.GetCompaniesCompanyIDDataBankingTransactionsResponse:
        r"""Gets a list of transactions incurred by a company across all bank accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/banking-transactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataBankingTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankingTransactionPagedResponseModel])
                res.codat_data_contracts_datasets_banking_transaction_paged_response_model = out

        return res

    
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class BankAccounts:
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

    
    def get_companies_company_id_connections_connection_id_data_bank_accounts(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsResponse:
        r"""Gets the list of bank accounts for a given connection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankAccountPagedResponseModel])
                res.codat_data_contracts_datasets_bank_account_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_bank_accounts_account_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDResponse:
        r"""Gets the bank account with a given ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankAccount])
                res.codat_data_contracts_datasets_bank_account = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_bank_accounts_account_id_bank_transactions(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsResponse:
        r"""Gets bank transactions for a given bank account ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankTransactionPagedResponseModel])
                res.codat_data_contracts_datasets_bank_transaction_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_options_bank_accounts_account_id_bank_transactions(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsResponse:
        r"""Gets the options of pushing bank account transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsPushPushOption])
                res.codat_data_contracts_push_push_option = out

        return res

    
    def get_companies_company_id_data_bank_accounts_account_id_(self, request: operations.GetCompaniesCompanyIDDataBankAccountsAccountIDRequest) -> operations.GetCompaniesCompanyIDDataBankAccountsAccountIDResponse:
        r"""Gets the bank account for given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/bankAccounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataBankAccountsAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankStatementAccount])
                res.codat_data_contracts_datasets_bank_statement_account = out

        return res

    
    def get_companies_company_id_data_bank_accounts_account_id_transactions(self, request: operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsRequest) -> operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse:
        r"""Gets the latest bank transactions for given account ID and company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/bankAccounts/{accountId}/transactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankStatementLinePagedResponseModel])
                res.codat_data_contracts_datasets_bank_statement_line_paged_response_model = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_bank_accounts(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse:
        r"""Posts a new bank account to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankAccountPushOperation])
                res.codat_data_contracts_datasets_bank_account_push_operation = out

        return res

    
    def post_companies_company_id_connections_connection_id_push_bank_accounts_account_id_bank_transactions(self, request: operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsRequest) -> operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse:
        r"""Posts bank transactions to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankTransactionsPushOperation])
                res.codat_data_contracts_datasets_bank_transactions_push_operation = out

        return res

    
    def put_companies_company_id_connections_connection_id_push_bank_accounts_bank_account_id_(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse:
        r"""Posts an updated bank account to the accounting package for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{bankAccountId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsBankAccountPushOperation])
                res.codat_data_contracts_datasets_bank_account_push_operation = out

        return res

    
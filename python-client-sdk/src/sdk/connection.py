import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Connection:
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

    
    def delete_companies_company_id_connections_connection_id_(self, request: operations.DeleteCompaniesCompanyIDConnectionsConnectionIDRequest) -> operations.DeleteCompaniesCompanyIDConnectionsConnectionIDResponse:
        r"""Disconnect and delete a data source from a company
        This revokes and removes a data connection from being listed as a company's connection(s).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompaniesCompanyIDConnectionsConnectionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.delete_companies_company_id_connections_connection_id_200_application_json_boolean = out

        return res

    
    def get_companies_company_id_connections(self, request: operations.GetCompaniesCompanyIDConnectionsRequest) -> operations.GetCompaniesCompanyIDConnectionsResponse:
        r"""Retrieve all data sources connected to a single company, including their connection statuses
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyDataConnectionPagedResponseModel])
                res.codat_public_api_models_company_data_connection_paged_response_model = out

        return res

    
    def get_companies_company_id_connections_connection_id_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDResponse:
        r"""Retrieve a single data source connected to a single company, including its connection status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyDataConnection])
                res.codat_public_api_models_company_data_connection = out

        return res

    
    def get_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse:
        r"""Get BankFeed BankAccounts for a single data source connected to a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount]])
                res.codat_standardization_bank_feeds_accounts_contract_bank_feed_bank_accounts = out

        return res

    
    def patch_companies_company_id_connections_connection_id_(self, request: operations.PatchCompaniesCompanyIDConnectionsConnectionIDRequest) -> operations.PatchCompaniesCompanyIDConnectionsConnectionIDResponse:
        r"""Disconnect a data source from a company
        This revokes a company’s access to a data source, but the data connection is still listed as a part of a company's
        data connection(s). The status value in the request body should be \"Unlinked\" (case sensitive). Data connections
        can only be unlinked if in the Linked or Deauthorized state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchCompaniesCompanyIDConnectionsConnectionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyDataConnection])
                res.codat_public_api_models_company_data_connection = out

        return res

    
    def patch_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts_bank_account_id_(self, request: operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDRequest) -> operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse:
        r"""Update a single BankFeed BankAccount for a single data source connected to a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount])
                res.codat_standardization_bank_feeds_accounts_contract_bank_feed_bank_account = out

        return res

    
    def post_companies_company_id_connections(self, request: operations.PostCompaniesCompanyIDConnectionsRequest) -> operations.PostCompaniesCompanyIDConnectionsResponse:
        r"""Connect a data source to a company
        Creates a data connection in PendingAuth status for the specified company and integration.
        In the request body, specify the four-digit platformKey of the integration to link the company to as a text string.
        Use GET /integrations to view all platformKeys. 
        **Note: the required request body for this endpoint has been recently changed; see details [here](https://docs.codat.io/changelog/44714-deprecation-string-request-create-connections-endpoint).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyDataConnection])
                res.codat_public_api_models_company_data_connection = out

        return res

    
    def put_companies_company_id_connections_connection_id_authorization(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationResponse:
        r"""Put authorization information for a single data source connected to a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/authorization", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyDataConnection])
                res.codat_public_api_models_company_data_connection = out

        return res

    
    def put_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts(self, request: operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest) -> operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse:
        r"""Put BankFeed BankAccounts for a single data source connected to a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount]])
                res.codat_standardization_bank_feeds_accounts_contract_bank_feed_bank_accounts = out

        return res

    
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Companies:
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

    
    def delete_companies_company_id_(self, request: operations.DeleteCompaniesCompanyIDRequest) -> operations.DeleteCompaniesCompanyIDResponse:
        r"""Deletes a company, this is not reversible.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCompaniesCompanyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_companies(self, request: operations.GetCompaniesRequest) -> operations.GetCompaniesResponse:
        r"""Fetch a list of all companies metadata with accounting links on the Codat platform
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/companies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompanyPagedResponseModel])
                res.codat_public_api_models_company_company_paged_response_model = out

        return res

    
    def get_companies_company_id_(self, request: operations.GetCompaniesCompanyIDRequest) -> operations.GetCompaniesCompanyIDResponse:
        r"""Fetch metadata on a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompany])
                res.codat_public_api_models_company_company = out

        return res

    
    def get_companies_company_id_settings(self, request: operations.GetCompaniesCompanyIDSettingsRequest) -> operations.GetCompaniesCompanyIDSettingsResponse:
        r"""Fetch settings on a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompanySettings])
                res.codat_public_api_models_company_company_settings = out

        return res

    
    def get_companies_company_id_sync_settings(self, request: operations.GetCompaniesCompanyIDSyncSettingsRequest) -> operations.GetCompaniesCompanyIDSyncSettingsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/syncSettings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDSyncSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatClientsAPIClientContractCompanySyncSettings])
                res.codat_clients_api_client_contract_company_sync_settings = out

        return res

    
    def post_companies(self, request: operations.PostCompaniesRequest) -> operations.PostCompaniesResponse:
        r"""Initiate the process of onboarding a new company on the Codat platform
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/companies"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompany])
                res.codat_public_api_models_company_company = out

        return res

    
    def post_companies_company_id_sync_settings(self, request: operations.PostCompaniesCompanyIDSyncSettingsRequest) -> operations.PostCompaniesCompanyIDSyncSettingsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/syncSettings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDSyncSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_companies_company_id_(self, request: operations.PutCompaniesCompanyIDRequest) -> operations.PutCompaniesCompanyIDResponse:
        r"""Update a company with a new name and optional description
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompany])
                res.codat_public_api_models_company_company = out

        return res

    
    def put_companies_company_id_settings(self, request: operations.PutCompaniesCompanyIDSettingsRequest) -> operations.PutCompaniesCompanyIDSettingsResponse:
        r"""Update settings on a single company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCompaniesCompanyIDSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsCompanyCompanySettings])
                res.codat_public_api_models_company_company_settings = out

        return res

    
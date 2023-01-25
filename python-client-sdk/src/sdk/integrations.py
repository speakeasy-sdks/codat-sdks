import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Integrations:
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

    
    def delete_integrations_credentials_platform_key_(self, request: operations.DeleteIntegrationsCredentialsPlatformKeyRequest) -> operations.DeleteIntegrationsCredentialsPlatformKeyResponse:
        r"""Delete credentials used to authenticate with an accounting platform
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/credentials/{platformKey}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIntegrationsCredentialsPlatformKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.codat_public_api_models_platform_credentials_platform_credentials = out

        return res

    
    def get_integrations(self, request: operations.GetIntegrationsRequest) -> operations.GetIntegrationsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModelPagedResponseModel])
                res.codat_public_api_models_platform_credentials_platform_source_model_paged_response_model = out

        return res

    
    def get_integrations_bank_settings(self, request: operations.GetIntegrationsBankSettingsRequest) -> operations.GetIntegrationsBankSettingsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations/bankSettings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsBankSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset])
                res.codat_public_api_models_clients_banking_settings_models_bank_settings_dataset = out

        return res

    
    def get_integrations_credentials_platform_key_(self, request: operations.GetIntegrationsCredentialsPlatformKeyRequest) -> operations.GetIntegrationsCredentialsPlatformKeyResponse:
        r"""Fetch credentials required to authenticate with an accounting platform.
        Used to determine presence and version of credentials. Due to masking the credentials returned cannot be used
        to access the API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/credentials/{platformKey}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsCredentialsPlatformKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.codat_public_api_models_platform_credentials_platform_credentials = out

        return res

    
    def get_integrations_platform_key_(self, request: operations.GetIntegrationsPlatformKeyRequest) -> operations.GetIntegrationsPlatformKeyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/{platformKey}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsPlatformKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel])
                res.codat_public_api_models_platform_credentials_platform_source_model = out

        return res

    
    def get_integrations_platform_key_branding(self, request: operations.GetIntegrationsPlatformKeyBrandingRequest) -> operations.GetIntegrationsPlatformKeyBrandingResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/{platformKey}/branding", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntegrationsPlatformKeyBrandingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsIntegrationBrandingModel])
                res.codat_public_api_models_clients_integration_branding_model = out

        return res

    
    def put_integrations_bank_settings(self, request: operations.PutIntegrationsBankSettingsRequest) -> operations.PutIntegrationsBankSettingsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/integrations/bankSettings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutIntegrationsBankSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset])
                res.codat_public_api_models_clients_banking_settings_models_bank_settings_dataset = out

        return res

    
    def put_integrations_credentials_platform_key_(self, request: operations.PutIntegrationsCredentialsPlatformKeyRequest) -> operations.PutIntegrationsCredentialsPlatformKeyResponse:
        r"""Update credentials required to authenticate with an accounting platform
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/credentials/{platformKey}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutIntegrationsCredentialsPlatformKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.codat_public_api_models_platform_credentials_platform_credentials = out

        return res

    
    def put_integrations_platform_key_enabled(self, request: operations.PutIntegrationsPlatformKeyEnabledRequest) -> operations.PutIntegrationsPlatformKeyEnabledResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/integrations/{platformKey}/enabled", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutIntegrationsPlatformKeyEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel])
                res.codat_public_api_models_platform_credentials_platform_source_model = out

        return res

    
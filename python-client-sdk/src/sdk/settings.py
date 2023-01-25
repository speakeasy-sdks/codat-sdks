import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Settings:
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

    
    def get_settings(self, request: operations.GetSettingsRequest) -> operations.GetSettingsResponse:
        r"""Fetch your settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/settings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsClientSettingsModel])
                res.codat_public_api_models_clients_client_settings_model = out

        return res

    
    def get_settings_integrations_integration_id_(self, request: operations.GetSettingsIntegrationsIntegrationIDRequest) -> operations.GetSettingsIntegrationsIntegrationIDResponse:
        r"""Fetch your organisations integration settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/integrations/{integrationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsIntegrationsIntegrationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsIntegrationSettingsModel])
                res.codat_public_api_models_clients_integration_settings_model = out

        return res

    
    def patch_settings(self, request: operations.PatchSettingsRequest) -> operations.PatchSettingsResponse:
        r"""Update your settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/settings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsClientSettingsModel])
                res.codat_public_api_models_clients_client_settings_model = out

        return res

    
    def patch_settings_integrations_integration_id_(self, request: operations.PatchSettingsIntegrationsIntegrationIDRequest) -> operations.PatchSettingsIntegrationsIntegrationIDResponse:
        r"""Update your organisations integration settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/integrations/{integrationId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchSettingsIntegrationsIntegrationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsClientsIntegrationSettingsModel])
                res.codat_public_api_models_clients_integration_settings_model = out

        return res

    
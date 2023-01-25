import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Push:
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

    
    def get_companies_company_id_connections_connection_id_options_data_type_(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsDataTypeRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsDataTypeResponse:
        r"""Gets the push options for the given data type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/options/{dataType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsDataTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsPushPushOption])
                res.codat_data_contracts_push_push_option = out

        return res

    
    def get_companies_company_id_push(self, request: operations.GetCompaniesCompanyIDPushRequest) -> operations.GetCompaniesCompanyIDPushResponse:
        r"""Gets paged push operation records
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/push", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDPushResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemObjectPushOperationPagedResponseModel])
                res.system_object_push_operation_paged_response_model = out

        return res

    
    def get_companies_company_id_push_push_operation_key_(self, request: operations.GetCompaniesCompanyIDPushPushOperationKeyRequest) -> operations.GetCompaniesCompanyIDPushPushOperationKeyResponse:
        r"""Gets a single push operation record
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/push/{pushOperationKey}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDPushPushOperationKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemObjectPushOperation])
                res.system_object_push_operation = out

        return res

    
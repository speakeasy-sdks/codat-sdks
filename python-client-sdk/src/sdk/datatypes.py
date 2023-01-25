import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DataTypes:
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

    
    def get_companies_company_id_connections_connection_id_data_types_data_type_options(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsResponse:
        r"""Gets all available push options for the given data type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataPushOptionsAggregate])
                res.codat_public_api_models_data_push_options_aggregate = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_types_data_type_options_post(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostResponse:
        r"""Gets the POST push options for the given data type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options/POST", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsPushPushOption])
                res.codat_data_contracts_push_push_option = out

        return res

    
    def get_companies_company_id_connections_connection_id_data_types_data_type_options_put(self, request: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutRequest) -> operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutResponse:
        r"""Gets the PUT push options for the given data type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/connections/{connectionId}/dataTypes/{dataType}/options/PUT", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsPushPushOption])
                res.codat_data_contracts_push_push_option = out

        return res

    
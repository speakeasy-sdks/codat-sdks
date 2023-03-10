import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Info:
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

    
    def get_companies_company_id_data_info(self, request: operations.GetCompaniesCompanyIDDataInfoRequest) -> operations.GetCompaniesCompanyIDDataInfoResponse:
        r"""Gets the latest basic info for a company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/info", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatDataContractsDatasetsCompanyDataset])
                res.codat_data_contracts_datasets_company_dataset = out

        return res

    
    def post_companies_company_id_data_info(self, request: operations.PostCompaniesCompanyIDDataInfoRequest) -> operations.PostCompaniesCompanyIDDataInfoResponse:
        r"""Initiates the process of synchronising basic info for a company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/info", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDDataInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataDataSet])
                res.codat_public_api_models_data_data_set = out

        return res

    
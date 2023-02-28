import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Data:
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

    
    def get_companies_company_id_data_history(self, request: operations.GetCompaniesCompanyIDDataHistoryRequest) -> operations.GetCompaniesCompanyIDDataHistoryResponse:
        r"""Fetch a list of all data snapshots captured for a company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataDataSetPagedResponseModel])
                res.codat_public_api_models_data_data_set_paged_response_model = out

        return res

    
    def get_companies_company_id_data_history_dataset_id_(self, request: operations.GetCompaniesCompanyIDDataHistoryDatasetIDRequest) -> operations.GetCompaniesCompanyIDDataHistoryDatasetIDResponse:
        r"""Fetch metadata on a single data synchronisation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/history/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataHistoryDatasetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataDataSet])
                res.codat_public_api_models_data_data_set = out

        return res

    
    def post_companies_company_id_data_all(self, request: operations.PostCompaniesCompanyIDDataAllRequest) -> operations.PostCompaniesCompanyIDDataAllResponse:
        r"""Initiates the process of capturing a new data snapshot for a company
        Initiates the synchronisation for all possible data types supported by the linked data sources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/all", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDDataAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_companies_company_id_data_queue_data_type_(self, request: operations.PostCompaniesCompanyIDDataQueueDataTypeRequest) -> operations.PostCompaniesCompanyIDDataQueueDataTypeResponse:
        r"""Initiates the process of capturing a data snapshot of a specified type for a company
        Initiates the synchronisation for a specified data type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/queue/{dataType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompaniesCompanyIDDataQueueDataTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataDataSet])
                res.codat_public_api_models_data_data_set = out

        return res

    
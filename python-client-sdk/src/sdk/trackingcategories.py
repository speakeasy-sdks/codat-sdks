import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class TrackingCategories:
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

    
    def get_companies_company_id_data_tracking_categories(self, request: operations.GetCompaniesCompanyIDDataTrackingCategoriesRequest) -> operations.GetCompaniesCompanyIDDataTrackingCategoriesResponse:
        r"""Gets the latest tracking categories for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/trackingCategories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataTrackingCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel])
                res.codat_public_api_models_data_tracking_category_paged_response_model = out

        return res

    
    def get_companies_company_id_data_tracking_categories_tracking_category_id_(self, request: operations.GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDRequest) -> operations.GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDResponse:
        r"""Gets the specified tracking categories for a given company.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/trackingCategories/{trackingCategoryId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsDataTrackingCategoryTree])
                res.codat_public_api_models_data_tracking_category_tree = out

        return res

    
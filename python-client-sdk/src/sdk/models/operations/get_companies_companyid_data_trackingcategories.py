from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_data_trackingcategorypagedresponsemodel as shared_codat_public_api_models_data_trackingcategorypagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesRequest:
    path_params: GetCompaniesCompanyIDDataTrackingCategoriesPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataTrackingCategoriesQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataTrackingCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_tracking_category_paged_response_model: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsemodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel] = dataclasses.field(default=None)
    
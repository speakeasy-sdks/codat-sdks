import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_data_trackingcategorytree as shared_codat_public_api_models_data_trackingcategorytree


@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    tracking_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDRequest:
    path_params: GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_tracking_category_tree: Optional[shared_codat_public_api_models_data_trackingcategorytree.CodatPublicAPIModelsDataTrackingCategoryTree] = dataclasses.field(default=None)
    

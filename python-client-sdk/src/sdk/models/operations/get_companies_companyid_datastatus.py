from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_data_datastatus as shared_codat_public_api_models_data_datastatus
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataStatusPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataStatusSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataStatusRequest:
    path_params: GetCompaniesCompanyIDDataStatusPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_companies_company_id_data_status_200_application_json_object: Optional[dict[str, shared_codat_public_api_models_data_datastatus.CodatPublicAPIModelsDataDataStatus]] = dataclasses.field(default=None)
    
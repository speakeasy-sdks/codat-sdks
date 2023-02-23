import dataclasses
from ..shared import codat_public_api_models_company_company as shared_codat_public_api_models_company_company
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDRequest:
    path_params: GetCompaniesCompanyIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company: Optional[shared_codat_public_api_models_company_company.CodatPublicAPIModelsCompanyCompany] = dataclasses.field(default=None)
    
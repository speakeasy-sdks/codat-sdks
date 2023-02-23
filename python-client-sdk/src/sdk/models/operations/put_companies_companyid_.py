import dataclasses
from ..shared import codat_public_api_models_company_company as shared_codat_public_api_models_company_company
from ..shared import codat_public_api_models_company_updatecompanymodel as shared_codat_public_api_models_company_updatecompanymodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutCompaniesCompanyIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDRequest:
    path_params: PutCompaniesCompanyIDPathParams = dataclasses.field()
    security: PutCompaniesCompanyIDSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_company_updatecompanymodel.CodatPublicAPIModelsCompanyUpdateCompanyModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company: Optional[shared_codat_public_api_models_company_company.CodatPublicAPIModelsCompanyCompany] = dataclasses.field(default=None)
    
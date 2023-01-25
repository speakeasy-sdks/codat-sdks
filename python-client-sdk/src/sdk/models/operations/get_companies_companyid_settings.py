import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_company_companysettings as shared_codat_public_api_models_company_companysettings


@dataclasses.dataclass
class GetCompaniesCompanyIDSettingsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDSettingsRequest:
    path_params: GetCompaniesCompanyIDSettingsPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company_settings: Optional[shared_codat_public_api_models_company_companysettings.CodatPublicAPIModelsCompanyCompanySettings] = dataclasses.field(default=None)
    

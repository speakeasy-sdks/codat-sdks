import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_clients_api_client_contract_companysettings as shared_codat_clients_api_client_contract_companysettings
from ..shared import codat_public_api_models_company_companysettings as shared_codat_public_api_models_company_companysettings


@dataclasses.dataclass
class PutCompaniesCompanyIDSettingsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDSettingsRequest:
    path_params: PutCompaniesCompanyIDSettingsPathParams = dataclasses.field()
    security: PutCompaniesCompanyIDSettingsSecurity = dataclasses.field()
    request: Optional[shared_codat_clients_api_client_contract_companysettings.CodatClientsAPIClientContractCompanySettings] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company_settings: Optional[shared_codat_public_api_models_company_companysettings.CodatPublicAPIModelsCompanyCompanySettings] = dataclasses.field(default=None)
    

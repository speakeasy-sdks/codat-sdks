import dataclasses
from ..shared import codat_clients_api_client_contract_companysyncsettings as shared_codat_clients_api_client_contract_companysyncsettings
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDSyncSettingsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDSyncSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDSyncSettingsRequest:
    path_params: PostCompaniesCompanyIDSyncSettingsPathParams = dataclasses.field()
    security: PostCompaniesCompanyIDSyncSettingsSecurity = dataclasses.field()
    request: Optional[shared_codat_clients_api_client_contract_companysyncsettings.CodatClientsAPIClientContractCompanySyncSettings] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDSyncSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
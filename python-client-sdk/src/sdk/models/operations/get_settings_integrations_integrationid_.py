import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_clients_integrationsettingsmodel as shared_codat_public_api_models_clients_integrationsettingsmodel


@dataclasses.dataclass
class GetSettingsIntegrationsIntegrationIDPathParams:
    integration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsIntegrationsIntegrationIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsIntegrationsIntegrationIDRequest:
    path_params: GetSettingsIntegrationsIntegrationIDPathParams = dataclasses.field()
    security: GetSettingsIntegrationsIntegrationIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsIntegrationsIntegrationIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_integration_settings_model: Optional[shared_codat_public_api_models_clients_integrationsettingsmodel.CodatPublicAPIModelsClientsIntegrationSettingsModel] = dataclasses.field(default=None)
    

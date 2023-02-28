from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_integrationsettingsmodel as shared_codat_public_api_models_clients_integrationsettingsmodel
from ..shared import codat_public_api_models_clients_integrationsettingspatchmodel as shared_codat_public_api_models_clients_integrationsettingspatchmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PatchSettingsIntegrationsIntegrationIDPathParams:
    integration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchSettingsIntegrationsIntegrationIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatchSettingsIntegrationsIntegrationIDRequest:
    path_params: PatchSettingsIntegrationsIntegrationIDPathParams = dataclasses.field()
    security: PatchSettingsIntegrationsIntegrationIDSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_clients_integrationsettingspatchmodel.CodatPublicAPIModelsClientsIntegrationSettingsPatchModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchSettingsIntegrationsIntegrationIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_integration_settings_model: Optional[shared_codat_public_api_models_clients_integrationsettingsmodel.CodatPublicAPIModelsClientsIntegrationSettingsModel] = dataclasses.field(default=None)
    
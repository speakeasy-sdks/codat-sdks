import dataclasses
from ..shared import codat_public_api_models_clients_clientsettingsmodel as shared_codat_public_api_models_clients_clientsettingsmodel
from ..shared import codat_public_api_models_clients_clientsettingspatchmodel as shared_codat_public_api_models_clients_clientsettingspatchmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PatchSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatchSettingsRequest:
    security: PatchSettingsSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_clients_clientsettingspatchmodel.CodatPublicAPIModelsClientsClientSettingsPatchModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_client_settings_model: Optional[shared_codat_public_api_models_clients_clientsettingsmodel.CodatPublicAPIModelsClientsClientSettingsModel] = dataclasses.field(default=None)
    
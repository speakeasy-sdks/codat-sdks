import dataclasses
from ..shared import codat_public_api_models_clients_clientsettingsmodel as shared_codat_public_api_models_clients_clientsettingsmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsRequest:
    security: GetSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_client_settings_model: Optional[shared_codat_public_api_models_clients_clientsettingsmodel.CodatPublicAPIModelsClientsClientSettingsModel] = dataclasses.field(default=None)
    
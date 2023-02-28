from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_clientsyncsettingsmodel as shared_codat_public_api_models_clients_clientsyncsettingsmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetProfileSyncSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProfileSyncSettingsRequest:
    security: GetProfileSyncSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProfileSyncSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_client_sync_settings_model: Optional[shared_codat_public_api_models_clients_clientsyncsettingsmodel.CodatPublicAPIModelsClientsClientSyncSettingsModel] = dataclasses.field(default=None)
    
import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_clients_clientsyncsettingssingleputmodel as shared_codat_public_api_models_clients_clientsyncsettingssingleputmodel
from ..shared import codat_public_api_models_syncsettings_syncsettingmodel as shared_codat_public_api_models_syncsettings_syncsettingmodel


@dataclasses.dataclass
class PutProfileSyncSettingsDataTypePathParams:
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutProfileSyncSettingsDataTypeSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutProfileSyncSettingsDataTypeRequest:
    path_params: PutProfileSyncSettingsDataTypePathParams = dataclasses.field()
    security: PutProfileSyncSettingsDataTypeSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_clients_clientsyncsettingssingleputmodel.CodatPublicAPIModelsClientsClientSyncSettingsSinglePutModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutProfileSyncSettingsDataTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_sync_settings_sync_setting_model: Optional[shared_codat_public_api_models_syncsettings_syncsettingmodel.CodatPublicAPIModelsSyncSettingsSyncSettingModel] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_clients_api_client_contract_clientsyncsettings as shared_codat_clients_api_client_contract_clientsyncsettings


@dataclasses.dataclass
class PostProfileSyncSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostProfileSyncSettingsRequest:
    security: PostProfileSyncSettingsSecurity = dataclasses.field()
    request: Optional[shared_codat_clients_api_client_contract_clientsyncsettings.CodatClientsAPIClientContractClientSyncSettings] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProfileSyncSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

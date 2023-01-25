import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetIntegrationsCredentialsPlatformKeyPathParams:
    platform_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationsCredentialsPlatformKeySecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetIntegrationsCredentialsPlatformKeyRequest:
    path_params: GetIntegrationsCredentialsPlatformKeyPathParams = dataclasses.field()
    security: GetIntegrationsCredentialsPlatformKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsCredentialsPlatformKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_platform_credentials_platform_credentials: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

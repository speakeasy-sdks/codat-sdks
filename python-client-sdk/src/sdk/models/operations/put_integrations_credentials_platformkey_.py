from __future__ import annotations
import dataclasses
from ..shared import security as shared_security
from typing import Any, Optional


@dataclasses.dataclass
class PutIntegrationsCredentialsPlatformKeyPathParams:
    platform_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutIntegrationsCredentialsPlatformKeySecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutIntegrationsCredentialsPlatformKeyRequest:
    path_params: PutIntegrationsCredentialsPlatformKeyPathParams = dataclasses.field()
    security: PutIntegrationsCredentialsPlatformKeySecurity = dataclasses.field()
    request: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutIntegrationsCredentialsPlatformKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_integrations_credentials_platform_key_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
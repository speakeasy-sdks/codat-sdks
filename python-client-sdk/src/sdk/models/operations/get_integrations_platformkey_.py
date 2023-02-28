from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_platformcredentials_platformsourcemodel as shared_codat_public_api_models_platformcredentials_platformsourcemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetIntegrationsPlatformKeyPathParams:
    platform_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeySecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeyRequest:
    path_params: GetIntegrationsPlatformKeyPathParams = dataclasses.field()
    security: GetIntegrationsPlatformKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_platform_credentials_platform_source_model: Optional[shared_codat_public_api_models_platformcredentials_platformsourcemodel.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel] = dataclasses.field(default=None)
    
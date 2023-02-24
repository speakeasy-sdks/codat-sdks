from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_platformcredentials_enabledargs as shared_codat_public_api_models_platformcredentials_enabledargs
from ..shared import codat_public_api_models_platformcredentials_platformsourcemodel as shared_codat_public_api_models_platformcredentials_platformsourcemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutIntegrationsPlatformKeyEnabledPathParams:
    platform_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutIntegrationsPlatformKeyEnabledSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutIntegrationsPlatformKeyEnabledRequest:
    path_params: PutIntegrationsPlatformKeyEnabledPathParams = dataclasses.field()
    security: PutIntegrationsPlatformKeyEnabledSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_platformcredentials_enabledargs.CodatPublicAPIModelsPlatformCredentialsEnabledArgs] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutIntegrationsPlatformKeyEnabledResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_platform_credentials_platform_source_model: Optional[shared_codat_public_api_models_platformcredentials_platformsourcemodel.CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel] = dataclasses.field(default=None)
    
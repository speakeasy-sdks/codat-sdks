import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel as shared_codat_public_api_models_clients_integrationbrandingmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetIntegrationsPlatformKeyBrandingPathParams:
    platform_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'platformKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeyBrandingSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeyBrandingRequest:
    path_params: GetIntegrationsPlatformKeyBrandingPathParams = dataclasses.field()
    security: GetIntegrationsPlatformKeyBrandingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsPlatformKeyBrandingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_integration_branding_model: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel.CodatPublicAPIModelsClientsIntegrationBrandingModel] = dataclasses.field(default=None)
    
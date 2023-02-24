from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_company_profilemodel as shared_codat_public_api_models_company_profilemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetProfileSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProfileRequest:
    security: GetProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_profile_model: Optional[shared_codat_public_api_models_company_profilemodel.CodatPublicAPIModelsCompanyProfileModel] = dataclasses.field(default=None)
    
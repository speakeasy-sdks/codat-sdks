from __future__ import annotations
import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class DeleteCompaniesCompanyIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDRequest:
    path_params: DeleteCompaniesCompanyIDPathParams = dataclasses.field()
    security: DeleteCompaniesCompanyIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
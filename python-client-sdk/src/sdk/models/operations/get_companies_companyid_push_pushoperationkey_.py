from __future__ import annotations
import dataclasses
from ..shared import security as shared_security
from ..shared import system_objectpushoperation as shared_system_objectpushoperation
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDPushPushOperationKeyPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    push_operation_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pushOperationKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushPushOperationKeySecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushPushOperationKeyRequest:
    path_params: GetCompaniesCompanyIDPushPushOperationKeyPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDPushPushOperationKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushPushOperationKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    system_object_push_operation: Optional[shared_system_objectpushoperation.SystemObjectPushOperation] = dataclasses.field(default=None)
    
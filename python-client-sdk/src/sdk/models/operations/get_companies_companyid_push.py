import dataclasses
from ..shared import security as shared_security
from ..shared import system_objectpushoperationpagedresponsemodel as shared_system_objectpushoperationpagedresponsemodel
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDPushPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushRequest:
    path_params: GetCompaniesCompanyIDPushPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDPushQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDPushSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDPushResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    system_object_push_operation_paged_response_model: Optional[shared_system_objectpushoperationpagedresponsemodel.SystemObjectPushOperationPagedResponseModel] = dataclasses.field(default=None)
    
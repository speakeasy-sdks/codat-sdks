from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_company_companyeventstream as shared_codat_public_api_models_company_companyeventstream
from ..shared import security as shared_security
from datetime import datetime
from marshmallow import fields
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEventsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEventsQueryParams:
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEventsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEventsRequest:
    path_params: GetCompaniesCompanyIDReportsEventsPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDReportsEventsQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDReportsEventsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company_event_stream: Optional[shared_codat_public_api_models_company_companyeventstream.CodatPublicAPIModelsCompanyCompanyEventStream] = dataclasses.field(default=None)
    
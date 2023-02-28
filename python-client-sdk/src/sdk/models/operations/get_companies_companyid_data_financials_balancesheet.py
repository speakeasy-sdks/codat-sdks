from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_data_balancesheetresponse as shared_codat_public_api_models_data_balancesheetresponse
from ..shared import security as shared_security
from datetime import datetime
from marshmallow import fields
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsBalanceSheetPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsBalanceSheetQueryParams:
    period_length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodLength', 'style': 'form', 'explode': True }})
    periods_to_compare: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodsToCompare', 'style': 'form', 'explode': True }})
    start_month: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startMonth', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsBalanceSheetSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsBalanceSheetRequest:
    path_params: GetCompaniesCompanyIDDataFinancialsBalanceSheetPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataFinancialsBalanceSheetQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataFinancialsBalanceSheetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsBalanceSheetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_balance_sheet_response: Optional[shared_codat_public_api_models_data_balancesheetresponse.CodatPublicAPIModelsDataBalanceSheetResponse] = dataclasses.field(default=None)
    
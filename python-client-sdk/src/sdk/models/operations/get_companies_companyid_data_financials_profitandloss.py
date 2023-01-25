import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_data_profitandlossresponse as shared_codat_public_api_models_data_profitandlossresponse


@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams:
    period_length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodLength', 'style': 'form', 'explode': True }})
    periods_to_compare: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodsToCompare', 'style': 'form', 'explode': True }})
    start_month: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startMonth', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsProfitAndLossRequest:
    path_params: GetCompaniesCompanyIDDataFinancialsProfitAndLossPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataFinancialsProfitAndLossQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataFinancialsProfitAndLossSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataFinancialsProfitAndLossResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_profit_and_loss_response: Optional[shared_codat_public_api_models_data_profitandlossresponse.CodatPublicAPIModelsDataProfitAndLossResponse] = dataclasses.field(default=None)
    

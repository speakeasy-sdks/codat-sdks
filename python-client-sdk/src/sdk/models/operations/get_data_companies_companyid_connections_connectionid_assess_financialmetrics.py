import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_assess_datacontracts_financials_metrics_financialmetricsdataset as shared_codat_assess_datacontracts_financials_metrics_financialmetricsdataset


@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams:
    number_of_periods: int = dataclasses.field(metadata={'query_param': { 'field_name': 'numberOfPeriods', 'style': 'form', 'explode': True }})
    period_length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodLength', 'style': 'form', 'explode': True }})
    report_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'reportDate', 'style': 'form', 'explode': True }})
    show_metric_inputs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showMetricInputs', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsRequest:
    path_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_financials_metrics_financial_metrics_data_set: Optional[shared_codat_assess_datacontracts_financials_metrics_financialmetricsdataset.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import codat_assess_datacontracts_commerce_metrics_periodunit_enum as shared_codat_assess_datacontracts_commerce_metrics_periodunit_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_standardreporting_contracts_report as shared_codat_standardreporting_contracts_report


@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsQueryParams:
    number_of_periods: int = dataclasses.field(metadata={'query_param': { 'field_name': 'numberOfPeriods', 'style': 'form', 'explode': True }})
    period_length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodLength', 'style': 'form', 'explode': True }})
    period_unit: shared_codat_assess_datacontracts_commerce_metrics_periodunit_enum.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'periodUnit', 'style': 'form', 'explode': True }})
    report_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'reportDate', 'style': 'form', 'explode': True }})
    include_display_names: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeDisplayNames', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsRequest:
    path_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefundsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_standard_reporting_contracts_report: Optional[shared_codat_standardreporting_contracts_report.CodatStandardReportingContractsReport] = dataclasses.field(default=None)
    

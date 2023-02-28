from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_standardreporting_contracts_report as shared_codat_standardreporting_contracts_report
from ..shared import security as shared_security
from datetime import datetime
from marshmallow import fields
from typing import Optional


@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingQueryParams:
    number_of_periods: int = dataclasses.field(metadata={'query_param': { 'field_name': 'numberOfPeriods', 'style': 'form', 'explode': True }})
    period_length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'periodLength', 'style': 'form', 'explode': True }})
    report_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'reportDate', 'style': 'form', 'explode': True }})
    include_display_names: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeDisplayNames', 'style': 'form', 'explode': True }})
    show_input_values: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'showInputValues', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingRequest:
    path_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_standard_reporting_contracts_report: Optional[shared_codat_standardreporting_contracts_report.CodatStandardReportingContractsReport] = dataclasses.field(default=None)
    
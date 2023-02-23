import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_agedcreditoroutstandingicollectionreport as shared_codat_datacontracts_datasets_agedcreditoroutstandingicollectionreport
from ..shared import security as shared_security
from datetime import datetime
from marshmallow import fields
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedCreditorPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedCreditorQueryParams:
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'numberOfPeriods', 'style': 'form', 'explode': True }})
    period_length_days: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'periodLengthDays', 'style': 'form', 'explode': True }})
    report_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedCreditorSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedCreditorRequest:
    path_params: GetCompaniesCompanyIDReportsAgedCreditorPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDReportsAgedCreditorQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDReportsAgedCreditorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedCreditorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_aged_creditor_outstanding_i_collection_report: Optional[shared_codat_datacontracts_datasets_agedcreditoroutstandingicollectionreport.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport] = dataclasses.field(default=None)
    
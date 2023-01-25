import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_assess_datacontracts_financials_statements_enhancedfinancialstatement as shared_codat_assess_datacontracts_financials_statements_enhancedfinancialstatement


@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams:
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'numberOfPeriods', 'style': 'form', 'explode': True }})
    report_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsRequest:
    path_params: GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_financials_statements_enhanced_financial_statement: Optional[shared_codat_assess_datacontracts_financials_statements_enhancedfinancialstatement.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement] = dataclasses.field(default=None)
    

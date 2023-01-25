import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_assess_datacontracts_cashflow_transactions_cashflowtransactionsreport as shared_codat_assess_datacontracts_cashflow_transactions_cashflowtransactionsreport


@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsRequest:
    path_params: GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsEnhancedCashFlowTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_cash_flow_transactions_cash_flow_transactions_report: Optional[shared_codat_assess_datacontracts_cashflow_transactions_cashflowtransactionsreport.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport] = dataclasses.field(default=None)
    

import dataclasses
from ..shared import codat_datacontracts_datasets_bankstatementaccount as shared_codat_datacontracts_datasets_bankstatementaccount
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataBankAccountsAccountIDPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBankAccountsAccountIDQueryParams:
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBankAccountsAccountIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBankAccountsAccountIDRequest:
    path_params: GetCompaniesCompanyIDDataBankAccountsAccountIDPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataBankAccountsAccountIDQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataBankAccountsAccountIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBankAccountsAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bank_statement_account: Optional[shared_codat_datacontracts_datasets_bankstatementaccount.CodatDataContractsDatasetsBankStatementAccount] = dataclasses.field(default=None)
    
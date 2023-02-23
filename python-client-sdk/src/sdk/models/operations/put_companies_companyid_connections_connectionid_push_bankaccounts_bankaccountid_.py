import dataclasses
from ..shared import codat_datacontracts_datasets_bankaccount as shared_codat_datacontracts_datasets_bankaccount
from ..shared import codat_datacontracts_datasets_bankaccountpushoperation as shared_codat_datacontracts_datasets_bankaccountpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDPathParams:
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bankAccountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDQueryParams:
    force_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceUpdate', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDRequest:
    path_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDPathParams = dataclasses.field()
    query_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDQueryParams = dataclasses.field()
    security: PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_bankaccount.CodatDataContractsDatasetsBankAccount] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bank_account_push_operation: Optional[shared_codat_datacontracts_datasets_bankaccountpushoperation.CodatDataContractsDatasetsBankAccountPushOperation] = dataclasses.field(default=None)
    
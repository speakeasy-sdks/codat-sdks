import dataclasses
from ..shared import codat_datacontracts_datasets_banktransactions as shared_codat_datacontracts_datasets_banktransactions
from ..shared import codat_datacontracts_datasets_banktransactionspushoperation as shared_codat_datacontracts_datasets_banktransactionspushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsQueryParams:
    allow_sync_on_push_complete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowSyncOnPushComplete', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_banktransactions.CodatDataContractsDatasetsBankTransactions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bank_transactions_push_operation: Optional[shared_codat_datacontracts_datasets_banktransactionspushoperation.CodatDataContractsDatasetsBankTransactionsPushOperation] = dataclasses.field(default=None)
    
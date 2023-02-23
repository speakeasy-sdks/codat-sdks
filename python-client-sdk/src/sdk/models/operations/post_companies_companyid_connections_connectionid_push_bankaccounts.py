import dataclasses
from ..shared import codat_datacontracts_datasets_bankaccount as shared_codat_datacontracts_datasets_bankaccount
from ..shared import codat_datacontracts_datasets_bankaccountpushoperation as shared_codat_datacontracts_datasets_bankaccountpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsQueryParams:
    allow_sync_on_push_complete: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowSyncOnPushComplete', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_bankaccount.CodatDataContractsDatasetsBankAccount] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bank_account_push_operation: Optional[shared_codat_datacontracts_datasets_bankaccountpushoperation.CodatDataContractsDatasetsBankAccountPushOperation] = dataclasses.field(default=None)
    
import dataclasses
from ..shared import codat_datacontracts_datasets_accounttransaction as shared_codat_datacontracts_datasets_accounttransaction
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDPathParams:
    account_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountTransactionId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_account_transaction: Optional[shared_codat_datacontracts_datasets_accounttransaction.CodatDataContractsDatasetsAccountTransaction] = dataclasses.field(default=None)
    
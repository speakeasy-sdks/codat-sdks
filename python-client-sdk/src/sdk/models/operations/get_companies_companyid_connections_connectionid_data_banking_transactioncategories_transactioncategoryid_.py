from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_banking_transactioncategory as shared_codat_datacontracts_datasets_banking_transactioncategory
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    transaction_category_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_banking_transaction_category: Optional[shared_codat_datacontracts_datasets_banking_transactioncategory.CodatDataContractsDatasetsBankingTransactionCategory] = dataclasses.field(default=None)
    
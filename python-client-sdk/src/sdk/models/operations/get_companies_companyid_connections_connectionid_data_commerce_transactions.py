import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_transactionpagedresponsemodel as shared_codat_datacontracts_datasets_commerce_transactionpagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_commerce_transaction_paged_response_model: Optional[shared_codat_datacontracts_datasets_commerce_transactionpagedresponsemodel.CodatDataContractsDatasetsCommerceTransactionPagedResponseModel] = dataclasses.field(default=None)
    
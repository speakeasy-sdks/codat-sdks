from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_customer as shared_codat_datacontracts_datasets_customer
from ..shared import codat_datacontracts_datasets_customerpushoperation as shared_codat_datacontracts_datasets_customerpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_customer.CodatDataContractsDatasetsCustomer] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCustomersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_customer_push_operation: Optional[shared_codat_datacontracts_datasets_customerpushoperation.CodatDataContractsDatasetsCustomerPushOperation] = dataclasses.field(default=None)
    
import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_supplier as shared_codat_datacontracts_datasets_supplier
from ..shared import codat_datacontracts_datasets_supplierpushoperation as shared_codat_datacontracts_datasets_supplierpushoperation


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_supplier.CodatDataContractsDatasetsSupplier] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_supplier_push_operation: Optional[shared_codat_datacontracts_datasets_supplierpushoperation.CodatDataContractsDatasetsSupplierPushOperation] = dataclasses.field(default=None)
    
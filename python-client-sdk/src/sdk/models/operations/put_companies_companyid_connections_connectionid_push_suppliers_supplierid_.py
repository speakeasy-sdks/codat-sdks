from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_supplier as shared_codat_datacontracts_datasets_supplier
from ..shared import codat_datacontracts_datasets_supplierpushoperation as shared_codat_datacontracts_datasets_supplierpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    supplier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'supplierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDQueryParams:
    force_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceUpdate', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDRequest:
    path_params: PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDPathParams = dataclasses.field()
    query_params: PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDQueryParams = dataclasses.field()
    security: PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_supplier.CodatDataContractsDatasetsSupplier] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_supplier_push_operation: Optional[shared_codat_datacontracts_datasets_supplierpushoperation.CodatDataContractsDatasetsSupplierPushOperation] = dataclasses.field(default=None)
    
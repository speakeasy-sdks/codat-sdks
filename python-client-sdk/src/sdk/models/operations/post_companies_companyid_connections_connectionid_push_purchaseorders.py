import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_purchaseorder as shared_codat_datacontracts_datasets_purchaseorder
from ..shared import codat_datacontracts_datasets_purchaseorderpushoperation as shared_codat_datacontracts_datasets_purchaseorderpushoperation


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_purchaseorder.CodatDataContractsDatasetsPurchaseOrder] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_purchase_order_push_operation: Optional[shared_codat_datacontracts_datasets_purchaseorderpushoperation.CodatDataContractsDatasetsPurchaseOrderPushOperation] = dataclasses.field(default=None)
    

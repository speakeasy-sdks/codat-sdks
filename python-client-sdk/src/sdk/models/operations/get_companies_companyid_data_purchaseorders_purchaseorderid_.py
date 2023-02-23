import dataclasses
from ..shared import codat_datacontracts_datasets_purchaseorder as shared_codat_datacontracts_datasets_purchaseorder
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    purchase_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'purchaseOrderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDRequest:
    path_params: GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_purchase_order: Optional[shared_codat_datacontracts_datasets_purchaseorder.CodatDataContractsDatasetsPurchaseOrder] = dataclasses.field(default=None)
    
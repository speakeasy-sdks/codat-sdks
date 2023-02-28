from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_supplier as shared_codat_datacontracts_datasets_supplier
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataSuppliersSupplierIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    supplier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'supplierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSuppliersSupplierIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSuppliersSupplierIDRequest:
    path_params: GetCompaniesCompanyIDDataSuppliersSupplierIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataSuppliersSupplierIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSuppliersSupplierIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_supplier: Optional[shared_codat_datacontracts_datasets_supplier.CodatDataContractsDatasetsSupplier] = dataclasses.field(default=None)
    
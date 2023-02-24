from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_salesorder as shared_codat_datacontracts_datasets_salesorder
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    sales_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'salesOrderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDRequest:
    path_params: GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_sales_order: Optional[shared_codat_datacontracts_datasets_salesorder.CodatDataContractsDatasetsSalesOrder] = dataclasses.field(default=None)
    
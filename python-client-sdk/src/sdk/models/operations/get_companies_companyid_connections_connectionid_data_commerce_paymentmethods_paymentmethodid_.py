from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_paymentmethod as shared_codat_datacontracts_datasets_commerce_paymentmethod
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentMethodId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_commerce_payment_method: Optional[shared_codat_datacontracts_datasets_commerce_paymentmethod.CodatDataContractsDatasetsCommercePaymentMethod] = dataclasses.field(default=None)
    
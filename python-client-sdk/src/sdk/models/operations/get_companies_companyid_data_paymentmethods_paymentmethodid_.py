import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_paymentmethod as shared_codat_datacontracts_datasets_paymentmethod


@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentMethodId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDRequest:
    path_params: GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_payment_method: Optional[shared_codat_datacontracts_datasets_paymentmethod.CodatDataContractsDatasetsPaymentMethod] = dataclasses.field(default=None)
    

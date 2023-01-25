import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_payment as shared_codat_datacontracts_datasets_payment


@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentsPaymentIDRequest:
    path_params: GetCompaniesCompanyIDDataPaymentsPaymentIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataPaymentsPaymentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataPaymentsPaymentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_payment: Optional[shared_codat_datacontracts_datasets_payment.CodatDataContractsDatasetsPayment] = dataclasses.field(default=None)
    

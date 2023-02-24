from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_billpayment as shared_codat_datacontracts_datasets_billpayment
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams:
    bill_payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billPaymentId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDRequest:
    path_params: GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillPaymentsBillPaymentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill_payment: Optional[shared_codat_datacontracts_datasets_billpayment.CodatDataContractsDatasetsBillPayment] = dataclasses.field(default=None)
    
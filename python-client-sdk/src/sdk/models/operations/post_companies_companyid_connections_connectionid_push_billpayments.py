import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_billpayment as shared_codat_datacontracts_datasets_billpayment
from ..shared import codat_datacontracts_datasets_billpaymentpushoperation as shared_codat_datacontracts_datasets_billpaymentpushoperation


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_billpayment.CodatDataContractsDatasetsBillPayment] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill_payment_push_operation: Optional[shared_codat_datacontracts_datasets_billpaymentpushoperation.CodatDataContractsDatasetsBillPaymentPushOperation] = dataclasses.field(default=None)
    

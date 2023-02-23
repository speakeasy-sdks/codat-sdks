import dataclasses
from ..shared import codat_datacontracts_datasets_bill as shared_codat_datacontracts_datasets_bill
from ..shared import codat_datacontracts_datasets_billpushoperation as shared_codat_datacontracts_datasets_billpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDPathParams:
    bill_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDQueryParams:
    force_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceUpdate', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDRequest:
    path_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDPathParams = dataclasses.field()
    query_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDQueryParams = dataclasses.field()
    security: PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_bill.CodatDataContractsDatasetsBill] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill_push_operation: Optional[shared_codat_datacontracts_datasets_billpushoperation.CodatDataContractsDatasetsBillPushOperation] = dataclasses.field(default=None)
    
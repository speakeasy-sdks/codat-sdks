import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_bill as shared_codat_datacontracts_datasets_bill


@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillsBillIDPathParams:
    bill_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillsBillIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillsBillIDRequest:
    path_params: GetCompaniesCompanyIDDataBillsBillIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataBillsBillIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillsBillIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill: Optional[shared_codat_datacontracts_datasets_bill.CodatDataContractsDatasetsBill] = dataclasses.field(default=None)
    

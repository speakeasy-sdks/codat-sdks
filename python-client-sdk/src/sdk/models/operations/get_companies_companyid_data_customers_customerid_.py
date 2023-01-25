import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_customer as shared_codat_datacontracts_datasets_customer


@dataclasses.dataclass
class GetCompaniesCompanyIDDataCustomersCustomerIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCustomersCustomerIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCustomersCustomerIDRequest:
    path_params: GetCompaniesCompanyIDDataCustomersCustomerIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataCustomersCustomerIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCustomersCustomerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_customer: Optional[shared_codat_datacontracts_datasets_customer.CodatDataContractsDatasetsCustomer] = dataclasses.field(default=None)
    

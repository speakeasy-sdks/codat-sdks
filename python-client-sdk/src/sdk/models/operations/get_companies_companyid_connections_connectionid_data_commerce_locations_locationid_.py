import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_location as shared_codat_datacontracts_datasets_commerce_location
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'locationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_commerce_location: Optional[shared_codat_datacontracts_datasets_commerce_location.CodatDataContractsDatasetsCommerceLocation] = dataclasses.field(default=None)
    
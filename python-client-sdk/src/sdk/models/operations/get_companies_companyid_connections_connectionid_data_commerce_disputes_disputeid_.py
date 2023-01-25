import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_commerce_dispute as shared_codat_datacontracts_datasets_commerce_dispute


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'disputeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_commerce_dispute: Optional[shared_codat_datacontracts_datasets_commerce_dispute.CodatDataContractsDatasetsCommerceDispute] = dataclasses.field(default=None)
    

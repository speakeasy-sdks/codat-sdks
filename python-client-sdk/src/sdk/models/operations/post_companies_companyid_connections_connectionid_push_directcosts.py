import dataclasses
from ..shared import codat_datacontracts_datasets_directcost as shared_codat_datacontracts_datasets_directcost
from ..shared import codat_datacontracts_datasets_directcostpushoperation as shared_codat_datacontracts_datasets_directcostpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_directcost.CodatDataContractsDatasetsDirectCost] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_direct_cost_push_operation: Optional[shared_codat_datacontracts_datasets_directcostpushoperation.CodatDataContractsDatasetsDirectCostPushOperation] = dataclasses.field(default=None)
    
import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_directincome as shared_codat_datacontracts_datasets_directincome
from ..shared import codat_datacontracts_datasets_directincomepushoperation as shared_codat_datacontracts_datasets_directincomepushoperation


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_directincome.CodatDataContractsDatasetsDirectIncome] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_direct_income_push_operation: Optional[shared_codat_datacontracts_datasets_directincomepushoperation.CodatDataContractsDatasetsDirectIncomePushOperation] = dataclasses.field(default=None)
    

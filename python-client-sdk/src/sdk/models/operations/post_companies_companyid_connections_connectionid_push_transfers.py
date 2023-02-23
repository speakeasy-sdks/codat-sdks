import dataclasses
from ..shared import codat_datacontracts_datasets_transfer as shared_codat_datacontracts_datasets_transfer
from ..shared import codat_datacontracts_datasets_transferpushoperation as shared_codat_datacontracts_datasets_transferpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_transfer.CodatDataContractsDatasetsTransfer] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushTransfersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_transfer_push_operation: Optional[shared_codat_datacontracts_datasets_transferpushoperation.CodatDataContractsDatasetsTransferPushOperation] = dataclasses.field(default=None)
    
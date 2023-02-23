import dataclasses
from ..shared import codat_datacontracts_datasets_transfer as shared_codat_datacontracts_datasets_transfer
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    transfer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transferId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_transfer: Optional[shared_codat_datacontracts_datasets_transfer.CodatDataContractsDatasetsTransfer] = dataclasses.field(default=None)
    
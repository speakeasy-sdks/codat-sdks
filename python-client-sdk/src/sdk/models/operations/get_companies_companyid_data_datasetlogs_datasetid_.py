import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_pullmessages_contracts_datasetmessages as shared_codat_pullmessages_contracts_datasetmessages


@dataclasses.dataclass
class GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataDatasetLogsDatasetIDRequest:
    path_params: GetCompaniesCompanyIDDataDatasetLogsDatasetIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataDatasetLogsDatasetIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_pull_messages_contracts_dataset_messages: Optional[shared_codat_pullmessages_contracts_datasetmessages.CodatPullMessagesContractsDatasetMessages] = dataclasses.field(default=None)
    

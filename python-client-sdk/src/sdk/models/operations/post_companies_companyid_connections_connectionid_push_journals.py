import dataclasses
from ..shared import codat_datacontracts_datasets_journal as shared_codat_datacontracts_datasets_journal
from ..shared import codat_datacontracts_datasets_journalpushoperation as shared_codat_datacontracts_datasets_journalpushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_journal.CodatDataContractsDatasetsJournal] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_journal_push_operation: Optional[shared_codat_datacontracts_datasets_journalpushoperation.CodatDataContractsDatasetsJournalPushOperation] = dataclasses.field(default=None)
    
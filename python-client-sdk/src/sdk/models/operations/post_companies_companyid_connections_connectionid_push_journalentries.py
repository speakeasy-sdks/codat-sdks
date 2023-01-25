import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_journalentry as shared_codat_datacontracts_datasets_journalentry
from ..shared import codat_datacontracts_datasets_journalentrypushoperation as shared_codat_datacontracts_datasets_journalentrypushoperation


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_journalentry.CodatDataContractsDatasetsJournalEntry] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_journal_entry_push_operation: Optional[shared_codat_datacontracts_datasets_journalentrypushoperation.CodatDataContractsDatasetsJournalEntryPushOperation] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_journalentry as shared_codat_datacontracts_datasets_journalentry


@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    journal_entry_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'journalEntryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDRequest:
    path_params: GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesJournalEntryIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_journal_entry: Optional[shared_codat_datacontracts_datasets_journalentry.CodatDataContractsDatasetsJournalEntry] = dataclasses.field(default=None)
    

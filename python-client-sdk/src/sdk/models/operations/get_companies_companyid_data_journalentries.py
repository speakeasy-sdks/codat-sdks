from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_journalentrypagedresponsemodel as shared_codat_datacontracts_datasets_journalentrypagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesRequest:
    path_params: GetCompaniesCompanyIDDataJournalEntriesPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataJournalEntriesQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataJournalEntriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalEntriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_journal_entry_paged_response_model: Optional[shared_codat_datacontracts_datasets_journalentrypagedresponsemodel.CodatDataContractsDatasetsJournalEntryPagedResponseModel] = dataclasses.field(default=None)
    
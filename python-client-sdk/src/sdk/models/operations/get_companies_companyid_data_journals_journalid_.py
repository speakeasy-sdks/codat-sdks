from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_journalpagedresponsemodel as shared_codat_datacontracts_datasets_journalpagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalsJournalIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    journal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'journalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalsJournalIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalsJournalIDRequest:
    path_params: GetCompaniesCompanyIDDataJournalsJournalIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataJournalsJournalIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataJournalsJournalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_journal_paged_response_model: Optional[shared_codat_datacontracts_datasets_journalpagedresponsemodel.CodatDataContractsDatasetsJournalPagedResponseModel] = dataclasses.field(default=None)
    
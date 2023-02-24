from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_creditnote as shared_codat_datacontracts_datasets_creditnote
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataCreditNotesCreditNoteIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    credit_note_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditNoteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCreditNotesCreditNoteIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCreditNotesCreditNoteIDRequest:
    path_params: GetCompaniesCompanyIDDataCreditNotesCreditNoteIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataCreditNotesCreditNoteIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataCreditNotesCreditNoteIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_credit_note: Optional[shared_codat_datacontracts_datasets_creditnote.CodatDataContractsDatasetsCreditNote] = dataclasses.field(default=None)
    
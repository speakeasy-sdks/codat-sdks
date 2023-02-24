from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_billcreditnote as shared_codat_datacontracts_datasets_billcreditnote
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDPathParams:
    bill_credit_note_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billCreditNoteId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDRequest:
    path_params: GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill_credit_note: Optional[shared_codat_datacontracts_datasets_billcreditnote.CodatDataContractsDatasetsBillCreditNote] = dataclasses.field(default=None)
    
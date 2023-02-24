from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_creditnote as shared_codat_datacontracts_datasets_creditnote
from ..shared import codat_datacontracts_datasets_creditnotepushoperation as shared_codat_datacontracts_datasets_creditnotepushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesQueryParams:
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesPathParams = dataclasses.field()
    query_params: PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesQueryParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_creditnote.CodatDataContractsDatasetsCreditNote] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_credit_note_push_operation: Optional[shared_codat_datacontracts_datasets_creditnotepushoperation.CodatDataContractsDatasetsCreditNotePushOperation] = dataclasses.field(default=None)
    
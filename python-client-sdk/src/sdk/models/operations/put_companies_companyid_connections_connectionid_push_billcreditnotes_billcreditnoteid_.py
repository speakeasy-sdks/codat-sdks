import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_billcreditnote as shared_codat_datacontracts_datasets_billcreditnote
from ..shared import codat_datacontracts_datasets_billcreditnotepushoperation as shared_codat_datacontracts_datasets_billcreditnotepushoperation


@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDPathParams:
    bill_credit_note_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billCreditNoteId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDQueryParams:
    force_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceUpdate', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDRequest:
    path_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDPathParams = dataclasses.field()
    query_params: PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDQueryParams = dataclasses.field()
    security: PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_billcreditnote.CodatDataContractsDatasetsBillCreditNote] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_bill_credit_note_push_operation: Optional[shared_codat_datacontracts_datasets_billcreditnotepushoperation.CodatDataContractsDatasetsBillCreditNotePushOperation] = dataclasses.field(default=None)
    

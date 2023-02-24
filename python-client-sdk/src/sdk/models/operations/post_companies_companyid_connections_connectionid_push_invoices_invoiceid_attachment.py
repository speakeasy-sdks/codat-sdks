from __future__ import annotations
import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentPathParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
from __future__ import annotations
import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfRequest:
    path_params: GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInvoicesInvoiceIDPdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
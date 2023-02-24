from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_attachmentsdataset as shared_codat_datacontracts_datasets_attachmentsdataset
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_attachments_dataset: Optional[shared_codat_datacontracts_datasets_attachmentsdataset.CodatDataContractsDatasetsAttachmentsDataset] = dataclasses.field(default=None)
    
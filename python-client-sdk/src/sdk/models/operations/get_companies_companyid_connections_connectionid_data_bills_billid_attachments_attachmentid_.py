import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_attachmentsdataset_attachment as shared_codat_datacontracts_datasets_attachmentsdataset_attachment


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    bill_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_attachments_dataset_attachment: Optional[shared_codat_datacontracts_datasets_attachmentsdataset_attachment.CodatDataContractsDatasetsAttachmentsDatasetAttachment] = dataclasses.field(default=None)
    
